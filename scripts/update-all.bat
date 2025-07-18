@echo off
echo.
echo ===================================
echo   Auto-Update Profile System
echo ===================================
echo.
echo Updating all profile files from config.js...
echo.

REM Check if config.js exists
if not exist "config.js" (
    echo ERROR: config.js not found!
    echo Please make sure you're in the correct directory.
    pause
    exit /b 1
)

echo 1. Updating README.md...
if exist "update-readme.js" (
    node update-readme.js
    if %errorlevel% neq 0 (
        echo WARNING: Could not run update-readme.js
        echo This is normal if Node.js is not installed.
    ) else (
        echo   ✓ README.md updated successfully
    )
) else (
    echo   - update-readme.js not found, skipping
)

echo.
echo 2. Checking index.html...
if exist "index.html" (
    echo   ✓ index.html will auto-update from config.js when loaded
) else (
    echo   - index.html not found
)

echo.
echo 3. Checking config.js...
if exist "config.js" (
    echo   ✓ config.js found and ready
) else (
    echo   - config.js not found
)

echo.
echo 4. Checking Files directory...
if exist "Files" (
    echo   ✓ Files directory exists
    if exist "Files\profile picture.png" (
        echo     ✓ Profile picture found
    ) else (
        echo     - Profile picture not found
    )
    if exist "Files\CV.pdf" (
        echo     ✓ CV file found
    ) else (
        echo     - CV file not found
    )
    if exist "Files\airloop_logo.png" (
        echo     ✓ Airloop logo found
    ) else (
        echo     - Airloop logo not found
    )
) else (
    echo   - Files directory not found
)

echo.
echo ===================================
echo   Update Complete!
echo ===================================
echo.
echo Your profile system has been updated with the latest configuration.
echo.
echo To view your profile:
echo 1. Open index.html in your browser
echo 2. Open test-files.html to verify file loading
echo 3. Check README.md for your GitHub profile
echo 4. Open config-test.html to test configuration loading
echo.
echo Note: If you made changes to config.js, simply refresh your browser
echo to see the updates in index.html (no need to run this script again).
echo.
pause
