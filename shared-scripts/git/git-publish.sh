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
export PACKAGE_PATH=$1
source ${ASSERT_VAR_SCRIPT} PACKAGE_PATH

# The destination git repo url
export DEST_GIT_REPO_URL=${DEST_GIT_REPO_URL:=${bamboo_planRepository_repositoryUrl}}
source ${ASSERT_VAR_SCRIPT} DEST_GIT_REPO_URL

# The destination git repo branch name
export DEST_GIT_REPO_BRANCH=${DEST_GIT_REPO_BRANCH:="${bamboo_planRepository_branch}-published"}
source ${ASSERT_VAR_SCRIPT} DEST_GIT_REPO_BRANCH

export TAG_IF_NEW=${TAG_IF_NEW:=true}

# Build details for commit message (Optional)
export bamboo_planRepository_name

export bamboo_planRepository_branch

export bamboo_buildNumber

# ==============================================================================
# Script
# ==============================================================================

# Resolve package path
PACKAGE_PATH=$( ${READLINK} -f ${PACKAGE_PATH} )

# Prepare git repo
rm -rf ./publish_repo
mkdir -p ./publish_repo
cd ./publish_repo
git clone --no-checkout ${DEST_GIT_REPO_URL} $( pwd )
git checkout -B ${DEST_GIT_REPO_BRANCH}

# Remove everything except for .git
shopt -s extglob
rm -fr * .!(|.|git)

# Extract package
tar -C $( pwd ) --strip-components=1 -xvzf ${PACKAGE_PATH}

# Push extracted files
VERSION=$(cat ./version.json | jq -r '.version' package.json)
COMMIT_MESSAGE="Built package | Version: v${VERSION} | Bamboo: ${bamboo_planRepository_name} ${bamboo_planRepository_branch} #${bamboo_buildNumber}"
echo ${COMMIT_MESSAGE}
git add -A
git commit -m "${COMMIT_MESSAGE}"
git status
git push ${DEST_GIT_REPO_URL} +HEAD:${DEST_GIT_REPO_BRANCH} --force

# Set version tag if new
if [ ${TAG_IF_NEW} == "true" ]; then
	TAG="v${VERSION}"
	TAG_HASH=$(echo $(git rev-parse -q --verify "refs/tags/${TAG}"))	# Echo to silence exit error
	COMMIT_HASH=$(git rev-parse HEAD)
	if [ -z ${TAG_HASH} ]; then
		git tag -fa "${TAG}" -m "${TAG}" ${COMMIT_HASH}
		git push -f origin "${TAG}"
	fi
fi

# Clean up publish directory
cd ..
rm -rf ./publish_repo
