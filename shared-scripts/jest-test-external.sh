#!/bin/bash

echo "=============================================================================="
echo "Script: $(basename "$0")"
echo "This script runs the jest external tests"
echo "=============================================================================="

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

# Variables
echo "Checking variables"
ASSERT_VAR_SCRIPT=$( ${READLINK} -f ${SCRIPT_DIR}/helpers/assert-variable.sh )

export DEBUG_PORT=${DEBUG_PORT:-7000}

export JEST_CONFIG_PATH=${JEST_CONFIG_PATH:-"./jest.ext.config.js"}

# ==============================================================================
# Script
# ==============================================================================

# Run test
echo "External integration testing with jest"
${SCRIPT_DIR}/jest-test.sh --config ${JEST_CONFIG_PATH} $@
