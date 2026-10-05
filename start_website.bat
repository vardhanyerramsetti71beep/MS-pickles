@echo off
title MS Pickles Website
echo =======================================================
echo Starting MS Pickles Lively E-Commerce Website...
echo =======================================================
cd /d "%~dp0"
start http://localhost:8080
python server.py
pause
