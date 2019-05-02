#!/bin/bash
# script must be run on a machine with the correct ssh credentials

echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the bamboo CI
echo This script tags the latest built branch with the version found in package.kson
echo It has the following assumptions:
echo 1. The repo has been checked out by the CI
echo 2. The required environment variables have been set
echo 3. The machine running this script has necessary credentials to access the git repo
echo ==============================================================================

# Variables
echo "[CI] Checking variables"
ASSERT_VAR_SCRIPT="./helpers/assert-variable.sh"

export GIT_REPO_URL
source ${ASSERT_VAR_SCRIPT} GIT_REPO_URL

VERSION_TAG=$(cat ./version.json | jq -r '.version' package.json)
MESSAGE="Tagging $VERSION_TAG on Bamboo"

rm -rf ./artifact

git clone -b built $GIT_REPO_URL artifact
cd artifact

# if the version tag exists, exit with error
if git rev-parse "origin/$VERSION_TAG" >/dev/null 2>&1; then
	echo "The $VERSION_TAG tag already exist on the remote. Update your version before releasing."
	exit 1
# else, tag the latest built branch with the version
else
	echo "Adding $VERSION_TAG tag to the latest built branch."
	git tag -a "$VERSION_TAG" -m "$MESSAGE"
	git push origin "$VERSION_TAG"
fi
