import { createBaseLibConfig } from "./shared-config/lib.webpack.config";

const webPackConfig = createBaseLibConfig({
	name: "singpass-myinfo-oidc-helper",
	dir: "./",
});

export default webPackConfig;
