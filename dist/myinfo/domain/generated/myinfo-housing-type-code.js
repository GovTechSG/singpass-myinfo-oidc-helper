"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoHousingTypeCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoHousingTypeCode;
(function (MyInfoHousingTypeCode) {
    MyInfoHousingTypeCode["DETACHED_HOUSE"] = "121";
    MyInfoHousingTypeCode["SEMI_DETACHED_HOUSE"] = "122";
    MyInfoHousingTypeCode["TERRACE_HOUSE"] = "123";
    MyInfoHousingTypeCode["CONDOMINIUM"] = "131";
    MyInfoHousingTypeCode["EXECUTIVE_CONDOMINIUM"] = "132";
    MyInfoHousingTypeCode["APARTMENT"] = "139";
})(MyInfoHousingTypeCode || (exports.MyInfoHousingTypeCode = MyInfoHousingTypeCode = {}));
var MyInfoHousingTypeCodeMapping;
(function (MyInfoHousingTypeCodeMapping) {
    MyInfoHousingTypeCodeMapping["DETACHED_HOUSE"] = "DETACHED HOUSE";
    MyInfoHousingTypeCodeMapping["SEMI_DETACHED_HOUSE"] = "SEMI-DETACHED HOUSE";
    MyInfoHousingTypeCodeMapping["TERRACE_HOUSE"] = "TERRACE HOUSE";
    MyInfoHousingTypeCodeMapping["CONDOMINIUM"] = "CONDOMINIUM";
    MyInfoHousingTypeCodeMapping["EXECUTIVE_CONDOMINIUM"] = "EXECUTIVE CONDOMINIUM";
    MyInfoHousingTypeCodeMapping["APARTMENT"] = "APARTMENT";
})(MyInfoHousingTypeCodeMapping || (MyInfoHousingTypeCodeMapping = {}));
(function (MyInfoHousingTypeCode) {
    MyInfoHousingTypeCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoHousingTypeCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoHousingTypeCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoHousingTypeCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoHousingTypeCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoHousingTypeCode, MyInfoHousingTypeCodeMapping),
    };
})(MyInfoHousingTypeCode || (exports.MyInfoHousingTypeCode = MyInfoHousingTypeCode = {}));
//# sourceMappingURL=myinfo-housing-type-code.js.map