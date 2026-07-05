@echo off
chcp 65001 >nul
echo ========================================
echo         Docusaurus 自动部署脚本
echo ========================================
echo.
echo 当前目录: %cd%
echo.
echo 请选择操作:
echo   [1] 普通提交并部署 (git add . + commit + push + build + gh-pages)
echo   [2] 只提交源码 (git add . + commit + push，不部署)
echo   [3] 只构建并部署 (npm run build + gh-pages，不提交源码)
echo   [4] 退出
echo.
set /p choice="请输入数字 (1-4): "

if "%choice%"=="1" goto full_deploy
if "%choice%"=="2" goto git_only
if "%choice%"=="3" goto build_only
if "%choice%"=="4" goto end
echo 无效输入，请重新运行。
pause
goto end

:full_deploy
echo.
echo [步骤 1/5] 添加所有修改...
git add .
echo.
echo [步骤 2/5] 请输入本次提交的描述信息:
set /p commit_msg="> "
if "%commit_msg%"=="" set commit_msg="更新文档"
git commit -m "%commit_msg%"
echo.
echo [步骤 3/5] 推送到远程仓库 main 分支...
git push -u origin main
if errorlevel 1 (
    echo.
    echo 推送失败，尝试强制推送...
    git push -u origin main --force
)
echo.
echo [步骤 4/5] 构建静态网站...
npm run build
if errorlevel 1 (
    echo 构建失败，请检查代码错误。
    pause
    goto end
)
echo.
echo [步骤 5/5] 部署到 gh-pages 分支...
npx gh-pages -d build -m "%commit_msg%"
if errorlevel 1 (
    echo.
    echo ❌ 部署失败！
    echo 可能的原因：
    echo   1. gh-pages 分支存在冲突 - 尝试手动删除远程 gh-pages 分支
    echo   2. 网络连接问题 - 检查网络
    echo   3. 权限问题 - 检查 git 凭证
    echo   4. build 目录问题 - 检查 build 目录是否存在
    echo.
    echo 建议手动执行: npx gh-pages -d build -m "%commit_msg%"
    pause
    goto end
)
echo.
echo ========================================
echo ✅ 全部完成！网站已更新。
echo ========================================
pause
goto end

:git_only
echo.
echo [步骤 1/3] 添加所有修改...
git add .
echo.
echo [步骤 2/3] 请输入本次提交的描述信息:
set /p commit_msg="> "
if "%commit_msg%"=="" set commit_msg="更新文档"
git commit -m "%commit_msg%"
echo.
echo [步骤 3/3] 推送到远程仓库 main 分支...
git push -u origin main
if errorlevel 1 (
    echo.
    echo 推送失败，尝试强制推送...
    git push -u origin main --force
)
echo.
echo ========================================
echo ✅ 源码已提交并推送！
echo ========================================
pause
goto end

:build_only
echo.
echo [步骤 1/2] 构建静态网站...
npm run build
if errorlevel 1 (
    echo 构建失败，请检查代码错误。
    pause
    goto end
)
echo.
echo [步骤 2/2] 部署到 gh-pages 分支...
set /p deploy_msg="请输入部署描述 (直接回车使用默认): "
if "%deploy_msg%"=="" set deploy_msg="部署更新"
npx gh-pages -d build -m "%deploy_msg%"
echo.
echo ========================================
echo ✅ 部署完成！
echo ========================================
pause
goto end

:end