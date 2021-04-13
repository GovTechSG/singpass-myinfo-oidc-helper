const baseConfig = require("./shared-config/jest.config");

const config = {
	...baseConfig.createBaseConfig(baseConfig.TestType.EXTERNAL),
};

module.exports = config;
