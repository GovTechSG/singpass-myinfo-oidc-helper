#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the bamboo CI
echo This script updates the version of package.json/package-lock.json if in branch matching releases/.*
echo
echo It has the following assumptions:
echo 1. The required environment variables have been set
echo 2. The machine running this script has necessary credentials to access the git repo
echo 3. The repo has a valid package.json and package-lock.json
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

# The git repo url
export SOURCE_GIT_REPO_URL=${SOURCE_GIT_REPO_URL:=${bamboo_planRepository_repositoryUrl}}
source ${ASSERT_VAR_SCRIPT} SOURCE_GIT_REPO_URL

# The git repo branch
export SOURCE_GIT_REPO_BRANCH=${SOURCE_GIT_REPO_BRANCH:=${bamboo_planRepository_branch}}
source ${ASSERT_VAR_SCRIPT} SOURCE_GIT_REPO_BRANCH

# The branch name pattern for equality check
export BRANCH_PATTERN=${BRANCH_PATTERN:=releases/*-*}
source ${ASSERT_VAR_SCRIPT} BRANCH_PATTERN

# The replace pattern to get the version
export REPLACE_PATTERN=${REPLACE_PATTERN:=releases/*-}
source ${ASSERT_VAR_SCRIPT} REPLACE_PATTERN

# ==============================================================================
# Script
# ==============================================================================

# Setup new inject.env
> inject.env

if [[ $SOURCE_GIT_REPO_BRANCH == $BRANCH_PATTERN ]]; then
	echo "[CI] Current branch ${SOURCE_GIT_REPO_BRANCH} matches ${BRANCH_PATTERN}"

	VERSION=${SOURCE_GIT_REPO_BRANCH#${REPLACE_PATTERN}}
	echo "VERSION=${VERSION}" >> inject.env
	echo "[CI] Saved variable into inject.env: VERSION=${VERSION}"

	bash ${SCRIPT_DIR}/../npm/npm-version.sh ${VERSION}

# ==============================================================================
# The commented out script will push the version update into master as well.
#	This does NOT compare the current version in master (i.e. it is possible to downgrade)
#	Possible solution is to use "sort -V"
# ==============================================================================
	# echo "Attempting to update version in master..."
	# git fetch server master
	# git checkout master
	# git merge --ff

	# ../npm/npm-version.sh ${VERSION}
# ==============================================================================
else
	echo "[CI] Current branch ${SOURCE_GIT_REPO_BRANCH} does not match ${BRANCH_PATTERN}"
fi

echo "[CI] Saving current commit into REVISION variable"
REVISION=$(git rev-parse HEAD)
echo "REVISION=${REVISION}" >> inject.env
echo "[CI] Saved variable into inject.env: ${REVISION}"
