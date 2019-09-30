#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script helps you to clean up everything related to docker
echo "Passing in no arguments will simply clear away dangling images and volumes (e.g. sh clean-docker.sh)"
echo "Passing in an argument will cause all you docker primitives to be nuked, even if they are currently running (e.g. sh clean-docker.sh true)"
echo ==============================================================================

# ==============================================================================
# Setup
# ==============================================================================

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

# Will attempt to nuke docker if set
NUKE_DOCKER=${1}

# ==============================================================================
# Script
# ==============================================================================

if [ ! -z ${NUKE_DOCKER} ]; then
	# Nuke docker
	echo "Are you sure you wish to nuke all docker containers, images and volumes?"
	echo "Click \"n\" to abort."
	read -rsn1 CONFIRM_NUKE_DOCKER

	if [ "${CONFIRM_NUKE_DOCKER}" != "n" ]; then
		echo "Stopping containers"
		docker ps -a -q | ${XARGS} -r docker stop
		echo "Deleting containers"
		docker ps -a -q | ${XARGS} -r docker rm -f
		echo "Deleting images"
		docker images -a -q | ${XARGS} -r docker rmi -f
		echo "Deleting volumes"
		docker volume ls -q | ${XARGS} -r docker volume rm
	fi
else
	# Remove only dangling images and volumes
	echo "Removing dangling images"
	docker image prune -af

	echo "Removing dangling volumes"
	docker volume prune -f
fi
