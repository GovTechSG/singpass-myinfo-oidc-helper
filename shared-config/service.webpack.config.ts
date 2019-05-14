// =============================================================================
// This creates a base service webpack config
// =============================================================================

import CleanWebpackPlugin from "clean-webpack-plugin";
import * as copyPlugins from "copy-webpack-plugin";
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
	dir: string;
}

// =============================================================================
// Config
// =============================================================================

export const createBaseServiceConfig = (config: Config): webpack.Configuration => {
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
			new CleanWebpackPlugin(),
			new webpack.ProgressPlugin(),
			new webpack.DefinePlugin({
				"global.GENTLY": false,
			}),
			new copyPlugins([
				{ from: "./package.json", to: "./" },
				{ from: "./package-lock.json", to: "./" },
			]),
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
			},
			{
				// This is to include the security ejs files required for node-soap
				test: /\/?soap\/.+\.ejs$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "./templates",
					},
				}],
			},
			],
		},
	};
};
