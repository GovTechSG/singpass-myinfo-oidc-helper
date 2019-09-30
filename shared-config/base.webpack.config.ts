// =============================================================================
// This creates a base service webpack config
// =============================================================================

import * as CircularDependencyPlugin from "circular-dependency-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import * as copyPlugins from "copy-webpack-plugin";
import * as fs from "fs";
import * as path from "path";
import * as webpack from "webpack";
import * as nodeExternals from "webpack-node-externals";

// =============================================================================
// Env inputs
// =============================================================================

const buildEnv = process.env.BUILD_ENV || "development";

// =============================================================================
// Param inputs
// =============================================================================

export interface Config {
	name: string;
	dir: string;						// Input context directory
	outDir?: string;					// Output context directory
	cleanPlugin?: CleanWebpackPlugin;	// Overwrites clean webpack plugin
}

// =============================================================================
// Custom Plugins
// =============================================================================

class FixScriptPermissionsPlugin {
	constructor(
		public distScriptPath: string,
	) { }

	// tslint:disable: tsr-detect-non-literal-fs-filename no-console
	public apply(compiler: webpack.Compiler) {
		compiler.hooks.done.tapAsync("FixScriptPermissionsPlugin", () => {
			// Check if path exists
			if (!fs.existsSync(this.distScriptPath)) {
				console.warn(`${this.distScriptPath} does not exist.`);
				return;
			}

			// Single script file
			if (fs.lstatSync(this.distScriptPath).isFile()) {
				fs.chmodSync(this.distScriptPath, 0o755);
			}

			// Script dir
			const files = fs.readdirSync(this.distScriptPath);
			files.forEach((file) => {
				fs.chmodSync(path.resolve(this.distScriptPath, file), 0o755);
			});
		});
	}
}

// =============================================================================
// Config
// =============================================================================

export const createBaseConfig = (config: Config): webpack.Configuration => {
	// Defaults
	config.outDir = config.outDir || config.dir;
	config.cleanPlugin = config.cleanPlugin || new CleanWebpackPlugin();

	// Parse paths
	config.outDir = path.resolve(config.outDir, "dist");

	return {
		mode: buildEnv as "production" | "development" | "none",
		entry: path.resolve(config.dir, "src/index.ts"),
		externals: [nodeExternals({
			whitelist: [/util\/.*/],	// https://github.com/liady/webpack-node-externals/issues/8
		})],
		target: "node",
		devtool: "source-map",
		output: {
			filename: "index.js",
			devtoolModuleFilenameTemplate: "../[resource-path]", // for debugger to work
			path: config.outDir,
		},
		resolve: {
			extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
			modules: [path.resolve(config.dir, "src"), `node_modules`],
		},
		optimization: {
			minimizer: [
				// Disabled because it's too slow
				// new TerserPlugin({
				// 	cache: true,
				// 	parallel: true,
				// 	sourceMap: true,
				// }),
			],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			config.cleanPlugin,
			new webpack.DefinePlugin({
				"global.GENTLY": false,
			}),
			new copyPlugins([
				{ from: "./package.json", to: "./" },
				{ from: "./package-lock.json", to: "./" },
			]),
			new CircularDependencyPlugin({
				failOnError: true,
			}),
			new FixScriptPermissionsPlugin(path.resolve(config.outDir, "scripts")),
		],
		node: {
			__filename: true,
			__dirname: true,
		},
		module: {
			rules: [{
				test: /\.(jsx?|tsx?)$/,
				include: [
					path.resolve(config.dir, "src"),
				],
				use: [{
					loader: "ts-loader",
					options: {
						configFile: "tsconfig.build.json",
					},
				}],
			}],
		},
	};
};
