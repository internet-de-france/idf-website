git config --global user.email "bot@internetdefrance.fr"
git config --global user.name "Codeship CI"
git mv dist/* ./
git rm src package.json src deploy.sh
git commit -am "build"
git push -f origin master:gh-pages
git status
ls
