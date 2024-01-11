"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoComStatusCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoComStatusCode;
(function (MyInfoComStatusCode) {
    MyInfoComStatusCode["ELIGIBLE"] = "Y";
    MyInfoComStatusCode["NOT_ELIGIBLE"] = "N";
})(MyInfoComStatusCode || (exports.MyInfoComStatusCode = MyInfoComStatusCode = {}));
var MyInfoComStatusCodeMapping;
(function (MyInfoComStatusCodeMapping) {
    MyInfoComStatusCodeMapping["ELIGIBLE"] = "ELIGIBLE";
    MyInfoComStatusCodeMapping["NOT_ELIGIBLE"] = "NOT ELIGIBLE";
})(MyInfoComStatusCodeMapping || (MyInfoComStatusCodeMapping = {}));
(function (MyInfoComStatusCode) {
    MyInfoComStatusCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoComStatusCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoComStatusCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoComStatusCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoComStatusCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoComStatusCode, MyInfoComStatusCodeMapping),
    };
})(MyInfoComStatusCode || (exports.MyInfoComStatusCode = MyInfoComStatusCode = {}));
//# sourceMappingURL=myinfo-com-status-code.js.map