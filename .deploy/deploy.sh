cd ~/webpack-project
npm run build:prod

rm -rf ~/../var/www/webpack-project/html
mv ~/webpack-project/build ~/../var/www/webpack-project/html