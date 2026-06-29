"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableMissingEnvWarnings = disableMissingEnvWarnings;
exports.getValueFromEnv = getValueFromEnv;
exports.getValueFromEnvWithoutWarn = getValueFromEnvWithoutWarn;
exports.getIntValueFromEnv = getIntValueFromEnv;
exports.getBooleanValueFromEnv = getBooleanValueFromEnv;
const Logger_1 = require("./Logger");
let displayWarnings = true;
function disableMissingEnvWarnings() {
    displayWarnings = false;
}
function getValueFromEnv(key, defaultValue) {
    const value = process.env[key] ? process.env[key].trim() : defaultValue;
    if (!value && displayWarnings) {
        Logger_1.logger.warn(`Configuration key not found or empty: ${key}`);
    }
    return value;
}
function getValueFromEnvWithoutWarn(key, defaultValue) {
    const value = process.env[key] ? process.env[key].trim() : defaultValue;
    return value;
}
function getIntValueFromEnv(key, defaultValue) {
    const stringValue = getValueFromEnv(key, null);
    if (!stringValue) {
        return defaultValue;
    }
    const intValue = parseInt(stringValue, 10);
    if (isNaN(intValue)) {
        if (displayWarnings) {
            Logger_1.logger.warn(`Configuration ${key} is not a valid integer: ${stringValue}`);
        }
        return defaultValue;
    }
    return intValue;
}
function getBooleanValueFromEnv(key, defaultValue = false) {
    const stringValue = getValueFromEnv(key, null);
    if (!stringValue) {
        return defaultValue;
    }
    if (stringValue !== "true" && stringValue !== "false") {
        Logger_1.logger.warn(`Configuration ${key} is not a valid boolean: ${stringValue}`);
    }
    return stringValue === "true";
}
//# sourceMappingURL=ConfigUtils.js.map