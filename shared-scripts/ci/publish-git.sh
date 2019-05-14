#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the bamboo CI
echo This script commits/publishes the contents of a packaged tarball to a target repository
echo
echo It has the following assumptions:
echo 1. The required environment variables have been set
echo 2. The machine running this script has necessary credentials to access the git repo
echo ==============================================================================

# ==============================================================================
# Setup
# ==============================================================================

# Exit immediately if a command exits with a non-zero status.
set -e

# OS settings
if [ "$(uname)" = "Darwin" ]; then
	[ -z "$( brew ls --versions findutils )" ] && brew install findutils
	[ -z "$( brew ls --versions coreutils )" ] && brew install coreutils
	READLINK="greadlink"
	XARGS="gxargs"
else
	READLINK="readlink"
	XARGS="xargs"
fi

SCRIPT_PATH=$( ${READLINK} -f $0 )
SCRIPT_DIR=$( dirname $( ${READLINK} -f $0 ) )

# ==============================================================================
# Inputs
# ==============================================================================

echo "Checking variables"
ASSERT_VAR_SCRIPT=$( ${READLINK} -f ${SCRIPT_DIR}/../helpers/assert-variable.sh )

# Path to the packaged tarball to be published
PACKAGE_PATH=$1
source ${ASSERT_VAR_SCRIPT} PACKAGE_PATH

# The git repo url to commit to
export GIT_REPO_URL
source ${ASSERT_VAR_SCRIPT} GIT_REPO_URL

# The git repo branch to commit to
export GIT_REPO_BRANCH
source ${ASSERT_VAR_SCRIPT} GIT_REPO_BRANCH

# Build number for record
export bamboo_buildNumber
source ${ASSERT_VAR_SCRIPT} bamboo_buildNumber

# ==============================================================================
# Script
# ==============================================================================

# Resolve package path
PACKAGE_PATH=$( ${READLINK} -f ${PACKAGE_PATH} )

# Prepare git repo
rm -rf ./publish_repo
mkdir -p ./publish_repo
cd ./publish_repo
git clone --no-checkout ${GIT_REPO_URL} $( pwd )
git checkout -B ${GIT_REPO_BRANCH}

# Remove everything except for .git
shopt -s extglob
rm -fr * .!(|.|git)

# Extract package
tar -C $( pwd ) --strip-components=1 -xvzf ${PACKAGE_PATH}

# Push extracted files
VERSION=$(cat ./version.json | jq -r '.version' package.json)
COMMIT_MESSAGE="Built package based on: Version: v${VERSION} - Bamboo build: ${bamboo_buildNumber}"
echo ${COMMIT_MESSAGE}
git add -A
git commit -m "${COMMIT_MESSAGE}"
git status
git push ${GIT_REPO_URL} +HEAD:${GIT_REPO_BRANCH} --force

# Clean up publish directory
cd ..
rm -rf ./publish_repo
