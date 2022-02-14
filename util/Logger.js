"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const RedactorUtil_1 = require("./RedactorUtil");
// tslint:disable: no-console
exports.logger = {
    log: (message, param) => { console.log(message, (0, RedactorUtil_1.redactError)(param)); },
    debug: (message, param) => { console.debug(message, (0, RedactorUtil_1.redactError)(param)); },
    info: (message, param) => { console.info(message, (0, RedactorUtil_1.redactError)(param)); },
    trace: (message, param) => { console.trace(message, (0, RedactorUtil_1.redactError)(param)); },
    warn: (message, param) => { console.warn(message, (0, RedactorUtil_1.redactError)(param)); },
    error: (message, param) => { console.error(message, (0, RedactorUtil_1.redactError)(param)); },
};
//# sourceMappingURL=Logger.js.map