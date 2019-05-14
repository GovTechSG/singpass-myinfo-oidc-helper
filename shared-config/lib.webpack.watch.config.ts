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
	let libWatchConfig = createBaseLibConfig(config);

	libWatchConfig = {
		...libWatchConfig,
		cache: true,
		watch: true,
		stats: "errors-only",
		plugins: [
			...libWatchConfig.plugins as any,
			new WebpackSynchronizableShellPlugin({
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
			}),
		],
	}

	return libWatchConfig;
}

// =============================================================================
// Re-export
// =============================================================================

export { Config };

