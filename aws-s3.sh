#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

aws s3 rm s3://app.intempt.help-docs --recursive
aws s3 cp . s3://app.intempt.help-docs --recursive

#git init
#git add -A
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:intempt/intempt.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:intempt/help-docs.git master:gh-pages

cd -
