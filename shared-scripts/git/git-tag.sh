#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script attempts to tag a particular commit
echo If no specific commit was given, it will select the tip of the branch
echo If no specific tag was given, it will be tagged with the version found in the package.json
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

# The desired tag, will default to the version found in the package.json if not given
export TAG=$1

# If set to false, it will fail if the tag already exists
export FORCED=${FORCED:=false}

# The git repo url to be tagged
export SOURCE_GIT_REPO_URL=${SOURCE_GIT_REPO_URL:=${bamboo_planRepository_repositoryUrl}}
source ${ASSERT_VAR_SCRIPT} SOURCE_GIT_REPO_URL

# The git repo branch to be tagged
export SOURCE_GIT_REPO_BRANCH=${SOURCE_GIT_REPO_BRANCH:=${bamboo_planRepository_branch}}
source ${ASSERT_VAR_SCRIPT} SOURCE_GIT_REPO_BRANCH

# The specific git repo commit to tagged
# Put "tip" to tag the branch tip
# Defaults to the bamboo triggering commit
export SOURCE_GIT_REPO_COMMIT=${SOURCE_GIT_REPO_COMMIT:=${bamboo_planRepository_revision}}

# ==============================================================================
# Script
# ==============================================================================

# Treat "tip" as having no specific commit specified (using branch tip)
if [ ${SOURCE_GIT_REPO_COMMIT} == "tip" ]; then
	export SOURCE_GIT_REPO_COMMIT=""
fi

# Clone source
echo "Cloning ${SOURCE_GIT_REPO_URL} ${SOURCE_GIT_REPO_BRANCH} ${SOURCE_GIT_REPO_COMMIT}"
rm -rf ./temp_tag_repo
git clone -b ${SOURCE_GIT_REPO_BRANCH} ${SOURCE_GIT_REPO_URL} temp_tag_repo
cd temp_tag_repo

# Check out specific commit if specified
if [ ! -z ${SOURCE_GIT_REPO_COMMIT} ]; then
	git checkout ${SOURCE_GIT_REPO_COMMIT}
fi

# Use package.json version as tag if left empty
if [ -z ${TAG} ]; then
	TAG=v$(jq -r '.version' package.json)
	source ${ASSERT_VAR_SCRIPT} TAG
	echo "Retrieved version tag ${TAG}"
fi

# Check if tag already exists
echo "Checking if tag ${TAG} already exists"
TAG_HASH=$(echo $(git rev-parse -q --verify "refs/tags/${TAG}"))	# Echo to silence exit error
if [ ! -z ${TAG_HASH} ]; then
	# Check if forced tagging
	if [ ${FORCED} != "true" ]; then
		# Clean up temp repo and exit with error
		echo "The git tag ${TAG} already exists, please enable the FORCED flag if you wish to overwrite it" >>/dev/stderr

		echo "Cleaning up"
		cd ..
		rm -rf ./temp_tag_repo

		exit 1
	else
		# Remove existing tag first
		git tag -d "${TAG}"
		git push -f origin :"refs/tags/${TAG}"
	fi
fi

# Replace tag
echo "Pushing tag ${TAG}"
git tag -fa "${TAG}" -m "${TAG}" ${SOURCE_GIT_REPO_COMMIT}
git push -f origin "${TAG}"

# Clean up tag repo
echo "Cleaning up"
cd ..
rm -rf ./temp_tag_repo
