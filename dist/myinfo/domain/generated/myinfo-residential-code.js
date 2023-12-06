"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoResidentialCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoResidentialCode;
(function (MyInfoResidentialCode) {
    MyInfoResidentialCode["ALIEN"] = "A";
    MyInfoResidentialCode["CITIZEN"] = "C";
    MyInfoResidentialCode["PR"] = "P";
    MyInfoResidentialCode["UNKNOWN"] = "U";
    MyInfoResidentialCode["NOT_APPLICABLE"] = "N";
})(MyInfoResidentialCode || (exports.MyInfoResidentialCode = MyInfoResidentialCode = {}));
var MyInfoResidentialCodeMapping;
(function (MyInfoResidentialCodeMapping) {
    MyInfoResidentialCodeMapping["ALIEN"] = "ALIEN";
    MyInfoResidentialCodeMapping["CITIZEN"] = "CITIZEN";
    MyInfoResidentialCodeMapping["PR"] = "PR";
    MyInfoResidentialCodeMapping["UNKNOWN"] = "UNKNOWN";
    MyInfoResidentialCodeMapping["NOT_APPLICABLE"] = "NOT APPLICABLE";
})(MyInfoResidentialCodeMapping || (MyInfoResidentialCodeMapping = {}));
(function (MyInfoResidentialCode) {
    MyInfoResidentialCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoResidentialCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoResidentialCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoResidentialCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoResidentialCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoResidentialCode, MyInfoResidentialCodeMapping),
    };
})(MyInfoResidentialCode || (exports.MyInfoResidentialCode = MyInfoResidentialCode = {}));
//# sourceMappingURL=myinfo-residential-code.js.map