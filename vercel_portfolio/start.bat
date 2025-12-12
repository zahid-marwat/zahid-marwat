@echo off
cd /d "%~dp0"
echo Starting Zahid Marwat Portfolio...
echo Current directory: %cd%
echo.
echo Installing dependencies if needed...
npm install
echo.
echo Starting development server...
npm run dev
pause
