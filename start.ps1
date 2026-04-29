$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $root

$ports = 4173, 5173, 8080, 3000
$port = $null

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
Write-Host "Starting China travel map MVP at $url"
Start-Process $url
& $python -m http.server $port --bind 127.0.0.1
