mkdir -p dist
npm install
npm run build
git add dist
git commit -am "build"
git push origin master
git subtree push --prefix dist origin gh-pages
