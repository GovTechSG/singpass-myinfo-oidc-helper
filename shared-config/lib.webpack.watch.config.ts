// =============================================================================
// This creates a base library webpack watch config
// =============================================================================

import * as webpack from "webpack";
import { Config, createBaseLibConfig } from "./lib.webpack.config";
const WebpackSynchronizableShellPlugin = require("webpack-synchronizable-shell-plugin");

// =============================================================================
// Config
// =============================================================================

export const createBaseLibWatchConfig = (config: Config): webpack.Configuration => {
	const libWatchConfig = createBaseLibConfig(config);

	libWatchConfig.cache = true;
	libWatchConfig.watch = true;
	libWatchConfig.stats = "errors-only";
	libWatchConfig.plugins.push(new WebpackSynchronizableShellPlugin({
		onBuildStart: {
			scripts: [
				"echo '\\n\\033[34mBuild is starting...\\033[0m\n'",
				"npm run build",
			],
			blocking: true,
			parallel: false,
		},
		dev: false,
		safe: true,
	}));

	return libWatchConfig;
};

// =============================================================================
// Re-export
// =============================================================================

export { Config };

