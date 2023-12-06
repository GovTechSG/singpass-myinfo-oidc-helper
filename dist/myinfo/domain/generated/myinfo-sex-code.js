"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoSexCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoSexCode;
(function (MyInfoSexCode) {
    MyInfoSexCode["FEMALE"] = "F";
    MyInfoSexCode["MALE"] = "M";
    MyInfoSexCode["UNKNOWN"] = "U";
})(MyInfoSexCode || (exports.MyInfoSexCode = MyInfoSexCode = {}));
var MyInfoSexCodeMapping;
(function (MyInfoSexCodeMapping) {
    MyInfoSexCodeMapping["FEMALE"] = "FEMALE";
    MyInfoSexCodeMapping["MALE"] = "MALE";
    MyInfoSexCodeMapping["UNKNOWN"] = "UNKNOWN";
})(MyInfoSexCodeMapping || (MyInfoSexCodeMapping = {}));
(function (MyInfoSexCode) {
    MyInfoSexCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoSexCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoSexCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoSexCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoSexCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoSexCode, MyInfoSexCodeMapping),
    };
})(MyInfoSexCode || (exports.MyInfoSexCode = MyInfoSexCode = {}));
//# sourceMappingURL=myinfo-sex-code.js.map