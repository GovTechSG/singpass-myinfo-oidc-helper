#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script attempts to branch a particular commit to another branch
echo If no specific commit was given, it will select the tip of the source branch
echo
echo It has the following assumptions:
echo 1. The required environment variables have been set
echo 2. The machine running this script has necessary credentials to access the git repo
echo 3. The repository branch commit has a package.json with the desired version set
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

# If set to false, it will fail if the branch already exists
export FORCED=${FORCED:=false}

# The source git repo url
export SOURCE_GIT_REPO_URL=${SOURCE_GIT_REPO_URL:=${bamboo_planRepository_repositoryUrl}}
source ${ASSERT_VAR_SCRIPT} SOURCE_GIT_REPO_URL

# The source git repo branch name
export SOURCE_GIT_REPO_BRANCH=${SOURCE_GIT_REPO_BRANCH:=${bamboo_planRepository_branch}}
source ${ASSERT_VAR_SCRIPT} SOURCE_GIT_REPO_BRANCH

# The source git repo commit, will default to branch tip if not given
export SOURCE_GIT_REPO_COMMIT=${SOURCE_GIT_REPO_COMMIT:=${bamboo_planRepository_revision}}

# The destination git repo branch name
export DEST_GIT_REPO_BRANCH
source ${ASSERT_VAR_SCRIPT} DEST_GIT_REPO_BRANCH

# ==============================================================================
# Script
# ==============================================================================

# Clone source
echo "Cloning ${SOURCE_GIT_REPO_URL} ${SOURCE_GIT_REPO_BRANCH} ${SOURCE_GIT_REPO_COMMIT}"
rm -rf ./temp_branch_repo
git clone -b ${SOURCE_GIT_REPO_BRANCH} ${SOURCE_GIT_REPO_URL} temp_branch_repo
cd temp_branch_repo
if [ ! -z ${SOURCE_GIT_REPO_COMMIT} ]; then
	git checkout ${SOURCE_GIT_REPO_COMMIT}
fi

# Check if destination branch already exists
echo "Checking if branch ${DEST_GIT_REPO_BRANCH} already exists"
BRANCH_HASH=$(echo $(git rev-parse -q --verify "refs/remotes/origin/${DEST_GIT_REPO_BRANCH}")) # Echo to silence exit error
if [ ! -z ${BRANCH_HASH} ] && [ ${FORCED} != "true" ]; then
	echo "The git branch ${DEST_GIT_REPO_BRANCH} already exists, please enable the FORCED flag if you wish to overwrite it" >>/dev/stderr

	# Clean up temp repo
	echo "Cleaning up"
	cd ..
	rm -rf ./temp_branch_repo

	exit 1
fi

# Branch to destination branch
echo "Pushing branch ${DEST_GIT_REPO_BRANCH}"
git checkout -b "${DEST_GIT_REPO_BRANCH}"
git push -uf origin "${DEST_GIT_REPO_BRANCH}"

# Clean up temp repo
echo "Cleaning up"
cd ..
rm -rf ./temp_branch_repo
