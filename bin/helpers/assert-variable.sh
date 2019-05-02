#!/bin/bash

# This file is a copy of the original found in mol-config, please make modifications there instead

# ==============================================================================
# This script asserts that the variable has been set
# ==============================================================================

VARIABLE_NAME=${1}

echo "${VARIABLE_NAME}=${!VARIABLE_NAME}"
if [ -z ${!VARIABLE_NAME} ] || [ ${!VARIABLE_NAME} == "" ]; then
	echo "${VARIABLE_NAME} must be set"
	exit 1
fi
