import { createBaseLibWatchConfig } from "./shared-config/lib.webpack.watch.config";

const webPackConfig = createBaseLibWatchConfig({
	name: "singpass-myinfo-oidc-helper",
	dir: "./",
});

export default webPackConfig;
