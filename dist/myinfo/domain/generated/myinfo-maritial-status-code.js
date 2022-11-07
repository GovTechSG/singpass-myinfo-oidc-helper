"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoMaritialStatusCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-16
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoMaritialStatusCode;
(function (MyInfoMaritialStatusCode) {
    MyInfoMaritialStatusCode["SINGLE"] = "1";
    MyInfoMaritialStatusCode["MARRIED"] = "2";
    MyInfoMaritialStatusCode["WIDOWED"] = "3";
    MyInfoMaritialStatusCode["DIVORCED"] = "5";
})(MyInfoMaritialStatusCode = exports.MyInfoMaritialStatusCode || (exports.MyInfoMaritialStatusCode = {}));
var MyInfoMaritialStatusCodeMapping;
(function (MyInfoMaritialStatusCodeMapping) {
    MyInfoMaritialStatusCodeMapping["SINGLE"] = "SINGLE";
    MyInfoMaritialStatusCodeMapping["MARRIED"] = "MARRIED";
    MyInfoMaritialStatusCodeMapping["WIDOWED"] = "WIDOWED";
    MyInfoMaritialStatusCodeMapping["DIVORCED"] = "DIVORCED";
})(MyInfoMaritialStatusCodeMapping || (MyInfoMaritialStatusCodeMapping = {}));
(function (MyInfoMaritialStatusCode) {
    MyInfoMaritialStatusCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoMaritialStatusCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoMaritialStatusCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoMaritialStatusCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoMaritialStatusCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoMaritialStatusCode, MyInfoMaritialStatusCodeMapping),
    };
})(MyInfoMaritialStatusCode = exports.MyInfoMaritialStatusCode || (exports.MyInfoMaritialStatusCode = {}));
//# sourceMappingURL=myinfo-maritial-status-code.js.map