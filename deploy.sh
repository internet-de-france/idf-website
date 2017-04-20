git config --global user.email "bot@internetdefrance.fr"
git config --global user.name "Codeship CI"
git mv dist/* ./
git rm src package.json src deploy.sh
git commit -am "build"
echo "------------"
echo $(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git push -f origin $(git branch | sed -n -e 's/^\* \(.*\)/\1/p'):gh-pages
