@echo off
setlocal
set "a=%cd%"
set "w=%~dp0"
set "w=%w:~0,-1%"
if "%*"=="" (
  set "mes=update: data"   
) else (
  set "mes=%*"   
)

call yarn ci

cd %w%\..
git add .
git commit -m "%mes%"
git push

endlocal