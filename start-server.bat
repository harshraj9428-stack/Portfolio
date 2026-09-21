@echo off
cd /d "%~dp0"
title Portfolio Dev Server

echo Starting Next.js Development Server on http://localhost:3000...
start http://localhost:3000
npm run dev
if %errorlevel% neq 0 (
    echo [ERROR] Dev server stopped unexpectedly.
    pause
)
