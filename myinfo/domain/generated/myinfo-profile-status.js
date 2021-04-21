"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoProfileStatus = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-21
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoProfileStatus;
(function (MyInfoProfileStatus) {
    MyInfoProfileStatus["NO_PROFILE"] = "01";
    MyInfoProfileStatus["INCOMPLETE_VERIFIED_FIELDS"] = "02";
    MyInfoProfileStatus["COMPLETE_VERIFIED_FIELDS"] = "03";
    MyInfoProfileStatus["UNKNOWN"] = "04";
})(MyInfoProfileStatus = exports.MyInfoProfileStatus || (exports.MyInfoProfileStatus = {}));
var MyInfoProfileStatusMapping;
(function (MyInfoProfileStatusMapping) {
    MyInfoProfileStatusMapping["NO_PROFILE"] = "NO_PROFILE";
    MyInfoProfileStatusMapping["INCOMPLETE_VERIFIED_FIELDS"] = "INCOMPLETE_VERIFIED_FIELDS";
    MyInfoProfileStatusMapping["COMPLETE_VERIFIED_FIELDS"] = "COMPLETE_VERIFIED_FIELDS";
    MyInfoProfileStatusMapping["UNKNOWN"] = "UNKNOWN";
})(MyInfoProfileStatusMapping || (MyInfoProfileStatusMapping = {}));
(function (MyInfoProfileStatus) {
    MyInfoProfileStatus.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoProfileStatus),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoProfileStatus),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoProfileStatus),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoProfileStatus),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoProfileStatus, MyInfoProfileStatusMapping),
    };
})(MyInfoProfileStatus = exports.MyInfoProfileStatus || (exports.MyInfoProfileStatus = {}));
//# sourceMappingURL=myinfo-profile-status.js.map