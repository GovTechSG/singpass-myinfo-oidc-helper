"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoPassTypeCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoPassTypeCode;
(function (MyInfoPassTypeCode) {
    MyInfoPassTypeCode["WORK_PERMIT"] = "RPass";
    MyInfoPassTypeCode["S_PASS"] = "SPass";
    MyInfoPassTypeCode["EMPLOYMENT_PASS"] = "P1Pass";
    MyInfoPassTypeCode["EMPLOYMENT_PASS_2"] = "P2Pass";
    MyInfoPassTypeCode["EMPLOYMENT_PASS_3"] = "QPass";
    MyInfoPassTypeCode["PERSONALISED_EMPLOYMENT_PASS"] = "PEP";
    MyInfoPassTypeCode["WORK_HOLIDAY_PASS"] = "WHP";
    MyInfoPassTypeCode["TRAINING_EMPLOYMENT_PASS"] = "TEP";
    MyInfoPassTypeCode["ENTRE_PASS"] = "Entre";
    MyInfoPassTypeCode["DEPENDENT_PASS"] = "DP";
    MyInfoPassTypeCode["LONG_TERM_VISIT_PASS"] = "LTVP";
    MyInfoPassTypeCode["LETTER_OF_CONSENT"] = "LOC";
    MyInfoPassTypeCode["MISCELLANEOUS_WORK_PASS"] = "MWP";
    MyInfoPassTypeCode["SHORT_TERM_PASS"] = "STP";
    MyInfoPassTypeCode["LONG_TERM_VISIT_PASS_2"] = "LTVP+";
})(MyInfoPassTypeCode = exports.MyInfoPassTypeCode || (exports.MyInfoPassTypeCode = {}));
var MyInfoPassTypeCodeMapping;
(function (MyInfoPassTypeCodeMapping) {
    MyInfoPassTypeCodeMapping["WORK_PERMIT"] = "WORK PERMIT";
    MyInfoPassTypeCodeMapping["S_PASS"] = "S PASS";
    MyInfoPassTypeCodeMapping["EMPLOYMENT_PASS"] = "EMPLOYMENT PASS";
    MyInfoPassTypeCodeMapping["EMPLOYMENT_PASS_2"] = "EMPLOYMENT PASS";
    MyInfoPassTypeCodeMapping["EMPLOYMENT_PASS_3"] = "EMPLOYMENT PASS";
    MyInfoPassTypeCodeMapping["PERSONALISED_EMPLOYMENT_PASS"] = "PERSONALISED EMPLOYMENT PASS";
    MyInfoPassTypeCodeMapping["WORK_HOLIDAY_PASS"] = "WORK HOLIDAY PASS";
    MyInfoPassTypeCodeMapping["TRAINING_EMPLOYMENT_PASS"] = "TRAINING EMPLOYMENT PASS";
    MyInfoPassTypeCodeMapping["ENTRE_PASS"] = "ENTREPASS";
    MyInfoPassTypeCodeMapping["DEPENDENT_PASS"] = "DEPENDENT PASS";
    MyInfoPassTypeCodeMapping["LONG_TERM_VISIT_PASS"] = "LONG TERM VISIT PASS";
    MyInfoPassTypeCodeMapping["LETTER_OF_CONSENT"] = "LETTER OF CONSENT";
    MyInfoPassTypeCodeMapping["MISCELLANEOUS_WORK_PASS"] = "MISCELLANEOUS WORK PASS";
    MyInfoPassTypeCodeMapping["SHORT_TERM_PASS"] = "SHORT TERM PASS";
    MyInfoPassTypeCodeMapping["LONG_TERM_VISIT_PASS_2"] = "LONG TERM VISIT PASS +";
})(MyInfoPassTypeCodeMapping || (MyInfoPassTypeCodeMapping = {}));
(function (MyInfoPassTypeCode) {
    MyInfoPassTypeCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoPassTypeCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoPassTypeCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoPassTypeCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoPassTypeCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoPassTypeCode, MyInfoPassTypeCodeMapping),
    };
})(MyInfoPassTypeCode = exports.MyInfoPassTypeCode || (exports.MyInfoPassTypeCode = {}));
//# sourceMappingURL=myinfo-pass-type-code.js.map