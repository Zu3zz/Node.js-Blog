#! /bin/sh
cd /Users/3zz/Code/nodejs-blog/blog-proto/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log