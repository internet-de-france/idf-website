mkdir -p dist
npm install
npm run build
git config --global user.email "bot@internetdefrance.fr"
git config --global user.name "Codeship CI"
git add dist
git commit -am "build"
git push origin master
git subtree push --prefix -b dist origin gh-pages
