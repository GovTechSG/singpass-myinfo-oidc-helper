"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceLineBreaks = replaceLineBreaks;
exports.isBase64Valid = isBase64Valid;
const isBase64 = require("is-base64");
function replaceLineBreaks(input) {
    if (!input) {
        return input;
    }
    return input.replace(/\\n/g, "\n");
}
function isBase64Valid(test) {
    return isBase64(test, { paddingRequired: false });
}
//# sourceMappingURL=StringUtil.js.map