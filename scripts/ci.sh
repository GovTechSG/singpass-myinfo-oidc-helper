#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the bamboo CI
echo This script prepares the package and publishes it
echo
echo It has the following assumptions:
echo 1. The repo has been checked out by the CI
echo 2. The required environment variables have been set
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
PROJECT_DIR=$( cd ${SCRIPT_DIR} && cd .. && pwd )

# ==============================================================================
# Inputs
# ==============================================================================

# Variables
echo "[CI] Checking variables"
ASSERT_VAR_SCRIPT=${PROJECT_DIR}/shared-scripts/helpers/assert-variable.sh

# publish-tar-to-git.sh
export GIT_REPO_URL
source ${ASSERT_VAR_SCRIPT} GIT_REPO_URL

# publish-tar-to-git.sh
export GIT_REPO_BRANCH
source ${ASSERT_VAR_SCRIPT} GIT_REPO_BRANCH

# publish-tar-to-git.sh
export bamboo_buildNumber
source ${ASSERT_VAR_SCRIPT} bamboo_buildNumber

# ==============================================================================
# Script
# ==============================================================================

# Set project directory
pushd ${PROJECT_DIR}

# Install node_modules
echo "[CI] Running npm install"
npm install

# Run linter
echo "[CI] Running linter"
./scripts/lint.sh

# Run tests
echo "[CI] Running tests"
./scripts/test.sh

# Build and pack
echo "[CI] Running build and generating tgz"
export BUILD_ENV=production
npm run build

# Publish
echo "[CI] Publishing"
./shared-scripts/ci/publish-git.sh *.tgz

# Return to invocation dir
popd
