"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBase64Valid = exports.replaceLineBreaks = void 0;
const isBase64 = require("is-base64");
function replaceLineBreaks(input) {
    if (!input) {
        return input;
    }
    return input.replace(/\\n/g, "\n");
}
exports.replaceLineBreaks = replaceLineBreaks;
function isBase64Valid(test) {
    return isBase64(test, { paddingRequired: false });
}
exports.isBase64Valid = isBase64Valid;
//# sourceMappingURL=StringUtil.js.map