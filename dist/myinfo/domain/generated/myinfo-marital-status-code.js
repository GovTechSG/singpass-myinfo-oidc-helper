"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoMaritalStatusCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoMaritalStatusCode;
(function (MyInfoMaritalStatusCode) {
    MyInfoMaritalStatusCode["SINGLE"] = "1";
    MyInfoMaritalStatusCode["MARRIED"] = "2";
    MyInfoMaritalStatusCode["WIDOWED"] = "3";
    MyInfoMaritalStatusCode["DIVORCED"] = "5";
})(MyInfoMaritalStatusCode || (exports.MyInfoMaritalStatusCode = MyInfoMaritalStatusCode = {}));
var MyInfoMaritalStatusCodeMapping;
(function (MyInfoMaritalStatusCodeMapping) {
    MyInfoMaritalStatusCodeMapping["SINGLE"] = "SINGLE";
    MyInfoMaritalStatusCodeMapping["MARRIED"] = "MARRIED";
    MyInfoMaritalStatusCodeMapping["WIDOWED"] = "WIDOWED";
    MyInfoMaritalStatusCodeMapping["DIVORCED"] = "DIVORCED";
})(MyInfoMaritalStatusCodeMapping || (MyInfoMaritalStatusCodeMapping = {}));
(function (MyInfoMaritalStatusCode) {
    MyInfoMaritalStatusCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoMaritalStatusCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoMaritalStatusCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoMaritalStatusCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoMaritalStatusCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoMaritalStatusCode, MyInfoMaritalStatusCodeMapping),
    };
})(MyInfoMaritalStatusCode || (exports.MyInfoMaritalStatusCode = MyInfoMaritalStatusCode = {}));
//# sourceMappingURL=myinfo-marital-status-code.js.map