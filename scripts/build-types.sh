#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo Builds and prepares the distribution
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
echo "Checking variables"
ASSERT_VAR_SCRIPT="${PROJECT_DIR}/shared-scripts/helpers/assert-variable.sh"

export BUILD_ENV=${1:-development}	# development or production only
source ${ASSERT_VAR_SCRIPT} BUILD_ENV

# ==============================================================================
# Script
# ==============================================================================

# Set project directory
pushd ${PROJECT_DIR}

# Build and pack
rm -rf ./src/types/dist

echo "Building types"
./node_modules/.bin/tsc --module commonjs --project tsconfig.build.types.json && ./node_modules/.bin/tsc-alias -p tsconfig.build.types.json

echo "Packaging"
cd ./src/types
npm pack --pack-destination ../..


# Return to invocation dir
popd
