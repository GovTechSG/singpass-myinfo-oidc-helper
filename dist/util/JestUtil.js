"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTest = isTest;
/**
 * @returns Whether the code is currently running in Jest or not
 */
function isTest() {
    return global.describe && global.it;
}
//# sourceMappingURL=JestUtil.js.map