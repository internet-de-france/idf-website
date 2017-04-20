git config --global user.email "bot@internetdefrance.fr"
git config --global user.name "Codeship CI"
cp -r dist/* ./
git add *
git commit -am "build"
git push -f origin gh-pages
