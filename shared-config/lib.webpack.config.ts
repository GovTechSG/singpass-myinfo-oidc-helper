// =============================================================================
// This creates a base library webpack config
// =============================================================================

import * as path from "path";
import * as webpack from "webpack";
import { Config, createBaseConfig } from "./base.webpack.config";
const DtsBundleWebpack = require("dts-bundle-webpack");

// =============================================================================
// Config
// =============================================================================

export const createBaseLibConfig = (config: Config): webpack.Configuration => {
	const libConfig = createBaseConfig(config);

	libConfig.output.libraryTarget = "commonjs2";

	libConfig.plugins.push(new DtsBundleWebpack({
		name: config.name,
		main: path.resolve(config.outDir, "index.d.ts"),
		baseDir: config.outDir,
		out: path.resolve(config.outDir, "index.d.ts"),
		removeSource: true,
	}));

	return libConfig;
};

// =============================================================================
// Re-export
// =============================================================================

export { Config };

