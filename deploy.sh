#!/usr/bin/env sh

set -e
# git push;
# node .bin/;

npm run build;

cd dist;
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:aique127/aique127.github.io master:gh-pages

cd -

rm -rf dist

# node .bin/changeBase.js 