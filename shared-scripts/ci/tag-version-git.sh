#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the bamboo CI
echo This script tags the latest commit of a git repo with the version found in the package.json
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

# The git repo url to be tagged
export GIT_REPO_URL
source ${ASSERT_VAR_SCRIPT} GIT_REPO_URL

# The git repo branch to be tagged
export GIT_REPO_BRANCH
source ${ASSERT_VAR_SCRIPT} GIT_REPO_BRANCH

# ==============================================================================
# Script
# ==============================================================================

# Pull tag repo
echo "Pulling target git repo"
rm -rf ./temp_tag_repo
git clone -b ${GIT_REPO_BRANCH} ${GIT_REPO_URL} temp_tag_repo
cd temp_tag_repo

# Get version tag
VERSION_TAG=v$(cat ./version.json | jq -r '.version' package.json)

# if the version tag exists, exit with error
if git rev-parse "origin/${VERSION_TAG}" >/dev/null 2>&1; then
	echo "The ${VERSION_TAG} tag already exist on the remote. Update your version before releasing."
	exit 1
# else, tag the latest built branch with the version
else
	echo "Adding ${VERSION_TAG} tag to the latest built branch."
	git tag -a "${VERSION_TAG}" -m "Tagging ${VERSION_TAG}"
	git push origin "${VERSION_TAG}"
fi

# Clean up tag repo
cd ..
rm -rf ./temp_tag_repo
