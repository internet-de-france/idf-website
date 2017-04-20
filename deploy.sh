git config --global user.email "bot@internetdefrance.fr"
git config --global user.name "Codeship CI"
git mv dist/* ./
git rm src package.json src deploy.sh
git status
git commit -am "build"
git push -f origin $(git branch | sed -n -e 's/^\* \(.*\)/\1/p'):gh-pages
git status
ls
