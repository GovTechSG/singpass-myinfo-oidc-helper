#!/bin/bash

echo ==============================================================================
echo "Script: $(basename "$0")"
echo "This script runs ts-lint"
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

export LINT_PATH=${JEST_PATH:-"./node_modules/.bin/tslint"}

export TS_CONFIG_PATH=${TS_CONFIG_PATH:-"./tsconfig.json"}

export TSLINT_CONFIG_PATH=${TSLINT_CONFIG_PATH:-"./tslint.json"}

export FILES=${@:-""}

# ==============================================================================
# Script
# ==============================================================================

# Lint
echo "Linting with tslint"
${LINT_PATH} -p ${TS_CONFIG_PATH} -c ${TSLINT_CONFIG_PATH} --fix ${FILES}
