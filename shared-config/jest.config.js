// =============================================================================
// This creates a base jest config
// =============================================================================

exports.createBaseConfig = (config) => {
	return {
		collectCoverageFrom: [
			"src/**/*.{js,jsx,ts,tsx}",
		],
		coverageDirectory: "<rootDir>/coverage",
		transform: {
			".(js|ts|jsx|tsx)$": "ts-jest",
		},
		testMatch: [
			"<rootDir>/src/**/?(*.)+(spec|unit|test).[jt]s?(x)",
		],
		modulePaths: [
			"src",
		],
		moduleFileExtensions: [
			"js",
			"ts",
			"jsx",
			"tsx",
		],
		testResultsProcessor: "./node_modules/jest-bamboo-formatter",
		verbose: true,
		bail: true,
	};
};
