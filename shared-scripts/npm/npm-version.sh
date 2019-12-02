#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script is meant to be called by the bamboo CI
echo This script updates the npm version and pushes it to the target repository
echo
echo It has the following assumptions:
echo 1. The required environment variables have been set
echo 2. The machine running this script has necessary credentials to access the git repo
echo 3. The repo is a valid npm package
echo 4. The repo is clean
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

# The npm version to be updated
export VERSION=${VERSION:=$1}
source ${ASSERT_VAR_SCRIPT} VERSION

# ==============================================================================
# Script
# ==============================================================================

# Check for modified files to prevent accidental modification of package.json etc. other than version number
if [ -n "$(git status --untracked-files=no --porcelain | grep 'package.json\|package-lock.json\|npm-shrinkwrap.json')" ]; then
  echo "[CI] Error: There are modified files in the directory"
  exit 1
fi

echo "[CI] Adding remote server ${SOURCE_GIT_REPO_URL}"
git remote add server ${SOURCE_GIT_REPO_URL}
git pull --ff-only server ${SOURCE_GIT_REPO_BRANCH}

echo "[CI] Current version: $(jq -r '.version' package.json)"

echo "[CI] Attempting to update version in ${SOURCE_GIT_REPO_BRANCH} to ${VERSION}..."
npm --no-git-tag-version version --allow-same-version ${VERSION}

# Exit if no changes
if [ -z "$(git status --untracked-files=no --porcelain | grep 'package.json\|package-lock.json\|npm-shrinkwrap.json')" ]; then
  echo "[CI] No changes, exiting script"
  exit 0
fi

# Add modified files to git
FILES_TO_ADD=$(git status --untracked-files=no --porcelain | grep 'package.json\|package-lock.json\|npm-shrinkwrap.json' | cut -c4-)
echo "[CI] Adding the following files to git: ${FILES_TO_ADD}"
git add ${FILES_TO_ADD}
git commit -m "Bamboo: Bump version to ${VERSION}"
echo "[CI] Push the newly updated package json and lock file"
git push --no-verify server ${SOURCE_GIT_REPO_BRANCH}
