const baseConfig = require("./shared-config/jest.config");

const config = baseConfig.createBaseConfig();

module.exports = {
	...config,
	testMatch: [
		"<rootDir>/src/**/?(*.)(apispec).(js|ts)?(x)",
	],
};
