#!/bin/bash

echo ==============================================================================
echo "Script: $(basename "$0")"
echo "This script runs jest unit and integration tests"
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

export DEBUG_PORT=${DEBUG_PORT:-7000}

export JEST_PATH=${JEST_PATH:-"./node_modules/.bin/jest"}

# ==============================================================================
# Script
# ==============================================================================

# Run test
echo "Unit & integration testing with jest"
${SCRIPT_DIR}/jest-test.sh --maxWorkers=2 --coverage --passWithNoTests $@
