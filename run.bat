@echo off
cd /d "%~dp0"
title Portfolio - Next.js Dev Server

echo ===================================================
echo   Starting Portfolio Development Server
echo ===================================================
echo.

if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Dependency installation failed.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Launching http://localhost:3000 in your browser...
start http://localhost:3000

echo [INFO] Starting dev server (Turbopack)...
npm run dev

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Server encountered an issue and stopped.
    pause
)
