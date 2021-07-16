"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactUinfin = void 0;
const _ = require("lodash");
const redactUinfin = (input) => {
    if (_.isNil(input) || !_.isString(input)) {
        return input;
    }
    return input.replace(/[STFG]\d{7}[A-Z]/gi, (value) => {
        return `${value.substr(0, 1)}***${value.substr(4)}`;
    });
};
exports.redactUinfin = redactUinfin;
//# sourceMappingURL=RedactorUtil.js.map