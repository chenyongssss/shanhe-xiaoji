@echo off
setlocal

cd /d "%~dp0"
echo.
echo Starting Shanhe Xiaoji...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1"
if errorlevel 1 (
  echo.
  echo Failed to start the local preview server.
  echo Please install Python 3 first, then double-click this file again.
  echo.
  pause
  exit /b 1
)

echo.
echo The local travel map is opening in your browser.
echo You can close this window.
powershell -NoProfile -Command "Start-Sleep -Seconds 2"
