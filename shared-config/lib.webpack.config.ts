// =============================================================================
// This creates a base library webpack config
// =============================================================================

import CleanWebpackPlugin from "clean-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";
import { Config, createBaseServiceConfig } from "./service.webpack.config";
const DtsBundleWebpack = require("dts-bundle-webpack");

// =============================================================================
// Config
// =============================================================================

export const createBaseLibConfig = (config: Config): webpack.Configuration => {
	let libConfig = createBaseServiceConfig(config);

	libConfig = {
		...libConfig,
		output: {
			...libConfig.output,
			libraryTarget: "commonjs2",
		},
		plugins: [
			new CleanWebpackPlugin(),
			new webpack.ProgressPlugin(),
			new webpack.DefinePlugin({
				"global.GENTLY": false,
			}),
			new DtsBundleWebpack({
				name: config.name,
				main: path.resolve(config.dir, "dist/index.d.ts"),
				baseDir: path.resolve(config.dir, "dist"),
				out: path.resolve(config.dir, "dist/index.d.ts"),
				removeSource: true,
			}),
		],
	};

	return libConfig;
};

// =============================================================================
// Re-export
// =============================================================================

export { Config };
