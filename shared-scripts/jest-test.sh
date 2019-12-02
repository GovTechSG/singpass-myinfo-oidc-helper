#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo Run jest tests
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

# Resolve jest path
JEST_PATH=$( ${READLINK} -f ${JEST_PATH} )

# Run test
echo "Testing with jest"
node --max_old_space_size=4096 --expose-gc --trace-warnings --inspect=0.0.0.0:${DEBUG_PORT} ${JEST_PATH} $@
