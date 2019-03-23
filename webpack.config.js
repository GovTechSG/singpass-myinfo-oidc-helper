const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");

const configs = function (serviceDir) {
	return {
		entry: path.resolve(serviceDir, "src/index.ts"),
		externals: [nodeExternals()],
		target: "node",
		devtool: "source-map",
		output: {
			filename: "index.js",
			devtoolModuleFilenameTemplate: "../[resource-path]", // for debugger to work
			libraryTarget: "commonjs2",
		},
		resolve: {
			extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
			modules: ["src", `node_modules`],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new webpack.DefinePlugin({
				"global.GENTLY": false,
			}),
		],
		node: {
			__filename: true,
			__dirname: false,
		},
		module: {
			rules: [{
				test: /\.(jsx?|tsx?)$/,
				include: [
					path.resolve(serviceDir, "src"),
					path.resolve(serviceDir, "src/routes.ts"),
				],
				use: [{
					loader: "ts-loader",
					options: {
						configFile: "tsconfig.deploy.json",
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

module.exports = configs(__dirname);
