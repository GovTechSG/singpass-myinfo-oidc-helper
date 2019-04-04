# accepts 1 argument. If argument value is "version", push to version branch e.g. "1.0.0". Else, push to "built" branch

# script must be run on a machine with the correct ssh credentials
GIT_REPO_URL="git@github.com:GovTechSG/singpass-myinfo-oidc-helper.git"
VERSION=$(cat ./version.json | jq -r '.version' package.json)
GIT_REVISION=$(git rev-parse HEAD)
COMMIT_MESSAGE="Built artifact based on: Version: v$VERSION - Bamboo build: $buildNumber - Commit: $GIT_REVISION"

if [ $# -eq 1 ] && [ $1 = "version" ]; then
	BRANCH_TO_PUSH=$VERSION
else
	BRANCH_TO_PUSH="built"
fi
echo "Preparing to push into branch: $BRANCH_TO_PUSH"
tar xvf singpass-myinfo-oidc-helper-"$VERSION".tgz

# check branch exist
git ls-remote --heads --exit-code $GIT_REPO_URL $BRANCH_TO_PUSH

# if branch doesn't exist, exit code will be 2
if [ $? -eq 2 ]; then
	echo "branch doesn't exist, cloning the 'built' branch into artifact folder, and then check out branch $BRANCH_TO_PUSH"
	# following line assumes the 'built' branch is there
	git clone -b built $GIT_REPO_URL artifact
	cd artifact
	git checkout -b $BRANCH_TO_PUSH

else
	# if branch already exist
	echo "branch $BRANCH_TO_PUSH already exist, will clone the branch into the artifact folder"
	git clone -b $BRANCH_TO_PUSH $GIT_REPO_URL artifact
	cd artifact
fi

rm -rf package.json
rm -rf dist/

# copy from the unzipped folder, which is called package, into artifact
cp -a ../package/package.json package.json
cp -a ../package/dist/ dist/

git add -A
git commit -m "$COMMIT_MESSAGE"
git status
git push --set-upstream origin $BRANCH_TO_PUSH
