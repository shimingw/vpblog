#!/bin/bash
# 网站的根目录
WEB_PATH='/root/nginx-docker/html'
 
echo "start deployment"
cd $WEB_PATH
echo "fetching from remote..."
# 为了避免冲突，强制更新本地文件
git pull
echo "done"