const baseConfig = require("./shared-config/jest.config");

const config = baseConfig.createBaseConfig(baseConfig.TestType.UNIT_AND_INTERGRATION);

module.exports = {
	...config,
	moduleNameMapper: {
		"^src/(.*)": "<rootDir>/src/$1",
	},
	setupFiles: [],
};
