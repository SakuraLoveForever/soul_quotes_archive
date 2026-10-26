@echo off
setlocal
cd /d "%~dp0"
python serve.py
if errorlevel 1 (
  echo Please install Python 3 and enable "Add Python to PATH".
  pause
)
