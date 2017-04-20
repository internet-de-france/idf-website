git config --global user.email "bot@internetdefrance.fr"
git config --global user.name "Codeship CI"
git checkout master
git mv dist/* ./
git rm src package.json src deploy.sh
git commit -am "build"
echo "------------"
git push -f origin master:gh-pages
