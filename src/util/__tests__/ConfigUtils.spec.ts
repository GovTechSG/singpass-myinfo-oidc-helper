import {
	getBooleanValueFromEnv,
	getIntValueFromEnv,
	getValueFromEnv,
	getValueFromEnvWithoutWarn,
} from "../ConfigUtils";

const consoleWarn = jest.spyOn(global.console, "warn");

describe("ConfigUtils", () => {
	afterEach(() => {
		consoleWarn.mockReset();
	});

	describe("getValueFromEnv", () => {
		const env = process.env;

		it("should return trimmed value from environment", () => {
			env.test = "test-value ";
			expect(getValueFromEnv("test")).toEqual("test-value");
			expect(consoleWarn).not.toHaveBeenCalled();
		});

		it("should return default value and do not warn if env var is not available and default value is non-empty", () => {
			expect(getValueFromEnv("new_key", "cool stuff")).toEqual("cool stuff");
			expect(consoleWarn).not.toHaveBeenCalled();
		});

		it("should return default value and warn if env var is not available and default value is empty", () => {
			expect(getValueFromEnv("new_key", "")).toEqual("");
			expect(consoleWarn).toHaveBeenCalled();
		});

		it("should return default value and warn if env var is not available and default value is null", () => {
			expect(getValueFromEnv("new_key", null)).toEqual(null);
			expect(consoleWarn).toHaveBeenCalled();
		});

		it("should return undefined and warn for unavailable env var without default value", () => {
			expect(getValueFromEnv("new_key")).toBeUndefined();
			expect(consoleWarn).toHaveBeenCalled();
		});
	});

	describe("getValueFromEnvWithoutWarn", () => {
		const env = process.env;

		it("should return trimmed value from environment", () => {
			env.test = "test-value ";
			expect(getValueFromEnvWithoutWarn("test")).toEqual("test-value");
			expect(consoleWarn).not.toHaveBeenCalled();
		});

		it("should return default value and do not warn if env var is not available and default value is non-empty", () => {
			expect(getValueFromEnvWithoutWarn("new_key", "cool stuff")).toEqual("cool stuff");
			expect(consoleWarn).not.toHaveBeenCalled();
		});

		it("should return default value and do not warn if env var is not available and default value is empty", () => {
			expect(getValueFromEnvWithoutWarn("new_key", "")).toEqual("");
			expect(consoleWarn).not.toHaveBeenCalled();
		});

		it("should return default value and do not warn if env var is not available and default value is null", () => {
			expect(getValueFromEnvWithoutWarn("new_key", null)).toEqual(null);
			expect(consoleWarn).not.toHaveBeenCalled();
		});

		it("should return undefined and do not warn for unavailable env var without default value", () => {
			expect(getValueFromEnvWithoutWarn("new_key")).toBeUndefined();
			expect(consoleWarn).not.toHaveBeenCalled();
		});
	});

	describe("getIntValueFromEnv", () => {
		const env = process.env;

		it("should return correct value when config has valid number format", () => {
			env.test = "123";
			expect(getIntValueFromEnv("test", 0)).toEqual(123);

			env.test = "321  ";
			expect(getIntValueFromEnv("test", 0)).toEqual(321);
		});

		it("should return default value when config not found", () => {
			delete env.test;
			expect(getIntValueFromEnv("test", 1)).toEqual(1);
		});

		it("should return default value when config is an empty string", () => {
			env.test = "";
			expect(getIntValueFromEnv("test", 2)).toEqual(2);
		});

		it("should return default value when config does not have valid number format", () => {
			env.test = "not a number";
			expect(getIntValueFromEnv("test", 3)).toEqual(3);
		});
	});

	describe("getBooleanValueFromEnv", () => {
		const env = process.env;

		it("should return the correct value when config is 'true'", () => {
			env.test = "true";
			expect(getBooleanValueFromEnv("test")).toEqual(true);
		});

		it("should return the correct value when config is 'false'", () => {
			env.test = "false";
			expect(getBooleanValueFromEnv("test")).toEqual(false);
		});

		it("should return false when the config is not found", () => {
			delete env.test;
			expect(getBooleanValueFromEnv("test")).toEqual(false);
		});

		it("should return false when the config is an empty string", () => {
			env.test = "";
			expect(getBooleanValueFromEnv("test")).toEqual(false);
		});

		it("should return false and warn when the config is not a valid boolean string", () => {
			env.test = "some invalid string";
			expect(getBooleanValueFromEnv("test")).toEqual(false);
			expect(consoleWarn).toHaveBeenCalled();
		});
	});
});
