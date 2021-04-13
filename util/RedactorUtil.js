"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactNricfin = exports.redactNricfinInString = void 0;
const redactNricfinInString = (input) => {
    const indexOfNric = getIndexOfNricInString(input);
    if (indexOfNric !== -1) {
        const nric = input.substr(indexOfNric, 9);
        const redactedNric = exports.redactNricfin(nric);
        return input.replace(nric, redactedNric);
    }
    return input;
};
exports.redactNricfinInString = redactNricfinInString;
const redactNricfin = (nricfin) => {
    if (nricfin && isValidNricfin(nricfin)) {
        const firstThreeDigits = nricfin.substring(1, 4);
        return nricfin.replace(firstThreeDigits, "***");
    }
    return nricfin;
};
exports.redactNricfin = redactNricfin;
const isValidNricfin = (value) => {
    const result = /[STFG]\d{7}[A-Z]/i.exec(value);
    return result;
};
const getIndexOfNricInString = (value) => {
    const result = /[STFG]\d{7}[A-Z]/i.exec(value);
    if (!!result) {
        return result.index;
    }
    return -1;
};
//# sourceMappingURL=RedactorUtil.js.map