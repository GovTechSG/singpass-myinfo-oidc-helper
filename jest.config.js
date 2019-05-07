const baseConfig = require("./shared-config/jest.config");

const config = baseConfig.createBaseConfig();

module.exports = {
	...config,
};
