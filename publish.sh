 yarn build
 rm -rf ../cherry-build/*
 cp -r build/. ../cherry-build
 cd ../cherry-build
 git add .
 git commit -m"publish project ..."
 git push
