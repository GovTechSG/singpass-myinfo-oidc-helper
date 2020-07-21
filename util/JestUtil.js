"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @returns Whether the code is currently running in Jest or not
 */
function isTest() {
    return global.describe && global.it;
}
exports.isTest = isTest;
//# sourceMappingURL=JestUtil.js.map