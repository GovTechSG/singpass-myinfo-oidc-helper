import { logger } from "./Logger";

let displayWarnings = true;

export function disableMissingEnvWarnings() {
	displayWarnings = false;
}

export function getValueFromEnv(key: string, defaultValue?: string): string {
	const value = process.env[key] ? process.env[key].trim() : defaultValue;
	if (!value && displayWarnings) {
		logger.warn(`Configuration key not found or empty: ${key}`);
	}
	return value;
}

export function getValueFromEnvWithoutWarn(key: string, defaultValue?: string): string {
	const value = process.env[key] ? process.env[key].trim() : defaultValue;
	return value;
}

export function getIntValueFromEnv(key: string, defaultValue: number): number {
	const stringValue = getValueFromEnv(key, null);
	if (!stringValue) {
		return defaultValue;
	}

	const intValue = parseInt(stringValue, 10);
	if (isNaN(intValue)) {
		if (displayWarnings) {
			logger.warn(`Configuration ${key} is not a valid integer: ${stringValue}`);
		}
		return defaultValue;
	}

	return intValue;
}

export function getBooleanValueFromEnv(key: string, defaultValue: boolean = false): boolean {
	const stringValue = getValueFromEnv(key, null);
	if (!stringValue) {
		return defaultValue;
	}

	if (stringValue !== "true" && stringValue !== "false") {
		logger.warn(`Configuration ${key} is not a valid boolean: ${stringValue}`);
	}

	return stringValue === "true";
}
