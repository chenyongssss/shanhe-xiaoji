$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $root

$pidFile = Join-Path $root ".preview-server.pid"
$ports = 4173, 5173, 8080, 3000
$port = $null

if (Test-Path -LiteralPath $pidFile) {
  $existingPid = Get-Content -LiteralPath $pidFile -ErrorAction SilentlyContinue | Select-Object -First 1
  $existingProcess = if ($existingPid) { Get-Process -Id $existingPid -ErrorAction SilentlyContinue } else { $null }
  if ($existingProcess) {
    foreach ($candidate in $ports) {
      try {
        $response = Invoke-WebRequest -Uri "http://127.0.0.1:$candidate/" -UseBasicParsing -TimeoutSec 2
        if ($response.StatusCode -eq 200) {
          $url = "http://127.0.0.1:$candidate/"
          Write-Host "Preview server is already running at $url"
          Start-Process $url
          return
        }
      } catch {
      }
    }
  }
}

foreach ($candidate in $ports) {
  $busy = Get-NetTCPConnection -LocalPort $candidate -ErrorAction SilentlyContinue
  if (-not $busy) {
    $port = $candidate
    break
  }
}

if (-not $port) {
  throw "No available preview port found."
}

$python = (Get-Command python -ErrorAction SilentlyContinue).Source
if (-not $python) {
  $python = (Get-Command py -ErrorAction SilentlyContinue).Source
}
if (-not $python) {
  throw "Python is required to start the local preview server."
}

$url = "http://127.0.0.1:$port/"
Write-Host "Starting Shanhe travel map preview at $url"

$startInfo = [System.Diagnostics.ProcessStartInfo]::new()
$startInfo.FileName = $python
$startInfo.Arguments = "-m http.server $port --bind 127.0.0.1"
$startInfo.WorkingDirectory = $root
$startInfo.UseShellExecute = $true
$startInfo.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Hidden
$process = [System.Diagnostics.Process]::Start($startInfo)
Set-Content -LiteralPath $pidFile -Value $process.Id

Start-Sleep -Seconds 1
Start-Process $url
Write-Host "Preview server PID: $($process.Id)"
