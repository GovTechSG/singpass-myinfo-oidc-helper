const WebpackSynchronizableShellPlugin = require("webpack-synchronizable-shell-plugin");

const BuildConfig = require("./webpack.config");

module.exports = {
	...BuildConfig,
	cache: true,
	watch: true,
	stats: "errors-only",
	plugins: [
		...BuildConfig.plugins,
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
};
