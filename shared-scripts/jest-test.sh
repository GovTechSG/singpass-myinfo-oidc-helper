#!/bin/bash

echo "=============================================================================="
echo "Script: $(basename "$0")"
echo "This script runs jest tests"
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

export DEBUG_PORT=${DEBUG_PORT:-7000}

# ==============================================================================
# Script
# ==============================================================================

# Run test
echo "Testing with jest"
npx --node-options "--max_old_space_size=8192 --trace-warnings --inspect=0.0.0.0:${DEBUG_PORT}" jest $@
