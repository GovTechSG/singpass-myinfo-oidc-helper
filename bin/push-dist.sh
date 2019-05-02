#!/bin/bash

# ARGUMENTS
#> ./commit-and-push.sh <$1:package_path>


echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the CI
echo It has the following assumptions:
echo 1. The repo has been checked out by the CI
echo 2. The required environment variables have been set
echo 3. The tarball is built on the CI located at ${PACKAGE_PATH}
echo ==============================================================================

PACKAGE_PATH=$1
BRANCH_TO_PUSH="built"
# Variables
echo "[CI] Checking variables"
ASSERT_VAR_SCRIPT="./helpers/assert-variable.sh"

export GIT_REPO_URL
source ${ASSERT_VAR_SCRIPT} GIT_REPO_URL

# Create empty directory to extract tarball in CI
mkdir -p ./extracted
tar -C ./extracted --strip-components=1 -xvzf ${PACKAGE_PATH}

pushd ./extracted

VERSION=$(jq -r '.version' package.json)
COMMIT_MESSAGE="Built package based on: Version: v$VERSION - Bamboo build: ${bamboo_buildNumber}"

# Move the package.json from dist/ to root
mv dist/package.json .
mv dist/package-lock.json .

popd


echo "Preparing to push into branch: $BRANCH_TO_PUSH"

# Check if branch exist
git ls-remote --heads --exit-code $GIT_REPO_URL $BRANCH_TO_PUSH

# If branch doesn't exist, exit code will be 2
if [ $? -eq 2 ]; then
	# make sure that the 'built' branch exist in remote
	git branch $BRANCH_TO_PUSH
	git push -u $GIT_REPO_URL $BRANCH_TO_PUSH --force
fi

# Deinitialize git tracking in current repo, so the settings will not affect sub-git folders
rm -rf .git/

# Cloning branch to new repo under a subdirectory (named 'repo'), without any physical files (i.e. only .git folder)
git clone -b $BRANCH_TO_PUSH --no-checkout $GIT_REPO_URL repo
pushd repo

mv ../extracted/* .

# Publish branch to git
git add -A
git commit -m "$COMMIT_MESSAGE"
git status
git push -u $GIT_REPO_URL $BRANCH_TO_PUSH

# For checking final directory output
ls -al

popd
