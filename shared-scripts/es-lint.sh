#!/bin/bash

echo "=============================================================================="
echo "Script: $(basename "$0")"
echo "This script runs es-lint"
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

export ESLINT_CONFIG_PATH=${ESLINT_CONFIG_PATH:-".eslintrc"}
export AUTO_FIX=${AUTO_FIX:-true}

# ==============================================================================
# Script
# ==============================================================================

if [ $AUTO_FIX != "true" ]; then unset AUTO_FIX; fi;

# Lint
echo "Linting with eslint"
npx eslint -c ${ESLINT_CONFIG_PATH} ${AUTO_FIX:+--fix} "$@"

# Prettier
echo "Running prettier"
npx prettier --check ${AUTO_FIX:+--write} "$@"
