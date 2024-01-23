"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoEduLevelCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoEduLevelCode;
(function (MyInfoEduLevelCode) {
    MyInfoEduLevelCode["NO_FORMAL_QUALIFICATION_PRE_PRIMARY_LOWER_PRIMARY"] = "0";
    MyInfoEduLevelCode["PRIMARY"] = "1";
    MyInfoEduLevelCode["LOWER_SECONDARY"] = "2";
    MyInfoEduLevelCode["SECONDARY"] = "3";
    MyInfoEduLevelCode["POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION"] = "4";
    MyInfoEduLevelCode["POLYTECHNIC_DIPLOMA"] = "5";
    MyInfoEduLevelCode["PROFESSIONAL_QUALIFICATION_AND_OTHER_DIPLOMA"] = "6";
    MyInfoEduLevelCode["BACHELORS_OR_EQUIVALENT"] = "7";
    MyInfoEduLevelCode["POSTGRADUATE_DIPLOMA_CERTIFICATE_EXCLUDING_MASTERS_AND_DOCTORATE"] = "8";
    MyInfoEduLevelCode["MASTERS_AND_DOCTORATE_OR_EQUIVALENT"] = "9";
    MyInfoEduLevelCode["MODULAR_CERTIFICATION_NON_AWARD_COURSES_NON_FULL_QUALIFICATIONS"] = "N";
})(MyInfoEduLevelCode || (exports.MyInfoEduLevelCode = MyInfoEduLevelCode = {}));
var MyInfoEduLevelCodeMapping;
(function (MyInfoEduLevelCodeMapping) {
    MyInfoEduLevelCodeMapping["NO_FORMAL_QUALIFICATION_PRE_PRIMARY_LOWER_PRIMARY"] = "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY";
    MyInfoEduLevelCodeMapping["PRIMARY"] = "PRIMARY";
    MyInfoEduLevelCodeMapping["LOWER_SECONDARY"] = "LOWER SECONDARY";
    MyInfoEduLevelCodeMapping["SECONDARY"] = "SECONDARY";
    MyInfoEduLevelCodeMapping["POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION"] = "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION";
    MyInfoEduLevelCodeMapping["POLYTECHNIC_DIPLOMA"] = "POLYTECHNIC DIPLOMA";
    MyInfoEduLevelCodeMapping["PROFESSIONAL_QUALIFICATION_AND_OTHER_DIPLOMA"] = "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA";
    MyInfoEduLevelCodeMapping["BACHELORS_OR_EQUIVALENT"] = "BACHELOR'S OR EQUIVALENT";
    MyInfoEduLevelCodeMapping["POSTGRADUATE_DIPLOMA_CERTIFICATE_EXCLUDING_MASTERS_AND_DOCTORATE"] = "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)";
    MyInfoEduLevelCodeMapping["MASTERS_AND_DOCTORATE_OR_EQUIVALENT"] = "MASTER'S AND DOCTORATE OR EQUIVALENT";
    MyInfoEduLevelCodeMapping["MODULAR_CERTIFICATION_NON_AWARD_COURSES_NON_FULL_QUALIFICATIONS"] = "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)";
})(MyInfoEduLevelCodeMapping || (MyInfoEduLevelCodeMapping = {}));
(function (MyInfoEduLevelCode) {
    MyInfoEduLevelCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoEduLevelCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoEduLevelCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoEduLevelCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoEduLevelCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoEduLevelCode, MyInfoEduLevelCodeMapping),
    };
})(MyInfoEduLevelCode || (exports.MyInfoEduLevelCode = MyInfoEduLevelCode = {}));
//# sourceMappingURL=myinfo-edu-level-code.js.map