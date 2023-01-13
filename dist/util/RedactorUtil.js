"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactError = exports.redactUinfin = void 0;
const _ = require("lodash");
const redactUinfin = (input) => {
    if (_.isNil(input) || !_.isString(input)) {
        return input;
    }
    return input.replace(/[stfgSTFGM]\d{7}[a-zA-Z]/mg, (value) => {
        return `${value.substr(0, 1)}***${value.substr(4)}`;
    });
};
exports.redactUinfin = redactUinfin;
function redactError(param) {
    if (_.isNil(param)) {
        return param;
    }
    // Axios error
    const axiosError = param;
    if (!!(axiosError === null || axiosError === void 0 ? void 0 : axiosError.isAxiosError) && !!(axiosError === null || axiosError === void 0 ? void 0 : axiosError.response)) {
        const response = param === null || param === void 0 ? void 0 : param.response;
        return {
            method: response.config.method,
            url: (0, exports.redactUinfin)(response.config.url),
            status: response.status,
            data: (0, exports.redactUinfin)(response.data),
        };
    }
    // Regular error
    if (_.isError(param)) {
        return {
            name: param.name,
            message: (0, exports.redactUinfin)(param.message),
            stack: (0, exports.redactUinfin)(param.stack),
        };
    }
    return param;
}
exports.redactError = redactError;
//# sourceMappingURL=RedactorUtil.js.map