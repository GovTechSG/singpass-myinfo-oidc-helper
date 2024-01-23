"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoDrivingLicenceValidityCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoDrivingLicenceValidityCode;
(function (MyInfoDrivingLicenceValidityCode) {
    MyInfoDrivingLicenceValidityCode["VALID"] = "V";
    MyInfoDrivingLicenceValidityCode["INVALID"] = "I";
    MyInfoDrivingLicenceValidityCode["EXPIRED"] = "E";
    MyInfoDrivingLicenceValidityCode["NOT_HOLDING"] = "N";
})(MyInfoDrivingLicenceValidityCode || (exports.MyInfoDrivingLicenceValidityCode = MyInfoDrivingLicenceValidityCode = {}));
var MyInfoDrivingLicenceValidityCodeMapping;
(function (MyInfoDrivingLicenceValidityCodeMapping) {
    MyInfoDrivingLicenceValidityCodeMapping["VALID"] = "VALID";
    MyInfoDrivingLicenceValidityCodeMapping["INVALID"] = "INVALID";
    MyInfoDrivingLicenceValidityCodeMapping["EXPIRED"] = "EXPIRED";
    MyInfoDrivingLicenceValidityCodeMapping["NOT_HOLDING"] = "NOT HOLDING";
})(MyInfoDrivingLicenceValidityCodeMapping || (MyInfoDrivingLicenceValidityCodeMapping = {}));
(function (MyInfoDrivingLicenceValidityCode) {
    MyInfoDrivingLicenceValidityCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoDrivingLicenceValidityCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoDrivingLicenceValidityCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoDrivingLicenceValidityCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoDrivingLicenceValidityCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoDrivingLicenceValidityCode, MyInfoDrivingLicenceValidityCodeMapping),
    };
})(MyInfoDrivingLicenceValidityCode || (exports.MyInfoDrivingLicenceValidityCode = MyInfoDrivingLicenceValidityCode = {}));
//# sourceMappingURL=myinfo-driving-licence-validity-code.js.map