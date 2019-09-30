#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script installs the global dependencies required for our projects
echo ==============================================================================

# ==============================================================================
# Setup
# ==============================================================================

# Exit immediately if a command exits with a non-zero status.
set -e

# ==============================================================================
# Script
# ==============================================================================

# MacOS installs
if [ "$(uname)" = "Darwin" ]; then
	# NPM (We prefer to use NVM)
	echo "Checking if NPM is installed..."
	if ! [ -x "$(command -v npm)" ]; then
		echo "NVM is not installed, installing now..."
		curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
		export NVM_DIR="$HOME/.nvm"
		. "$NVM_DIR/nvm.sh"
		nvm install node
		echo "NVM installed, please update your terminal profiles to include:"
		echo "export NVM_DIR=\"$HOME/.nvm"
		echo "[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\" # This loads nvm"
		echo "[ -s \"$NVM_DIR/bash_completion\" ] && \. \"$NVM_DIR/bash_completion\" # This loads nvm bash_completion"
		echo ""
		echo "If you are using fish shell, follow this guide https://medium.com/@joshuacrass/nvm-on-mac-for-fish-users-e00af124c540"
	else
		echo "NVM is already installed, skipping..."
	fi

	# Homebrew
	xcode-select --install
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	brew doctor

	# Homebrew modules
	brew install warrensbox/tap/tfswitch
	brew cask install java
	brew cask install android-platform-tools
	brew cask install react-native-debugger
	brew install git-crypt
	brew install awscli
	brew install jq
fi

# Install global npm packages
echo "Installing global npm packages if not already installed..."
${SUDO} npm list -g docker-compose || npm i -g docker-compose
${SUDO} npm list -g typescript || npm i -g typescript
${SUDO} npm list -g tslint || npm i -g tslint
