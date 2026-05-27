#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")"

PORT="${PORT:-4173}"

if command -v python3 >/dev/null 2>&1; then
  PYTHON_BIN="python3"
elif command -v python >/dev/null 2>&1; then
  PYTHON_BIN="python"
else
  echo "Python 3 is required to start Shanhe Xiaoji."
  exit 1
fi

echo "Starting Shanhe Xiaoji at http://127.0.0.1:${PORT}/"

if command -v open >/dev/null 2>&1; then
  open "http://127.0.0.1:${PORT}/" >/dev/null 2>&1 || true
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "http://127.0.0.1:${PORT}/" >/dev/null 2>&1 || true
fi

"${PYTHON_BIN}" -m http.server "${PORT}" --bind 127.0.0.1
