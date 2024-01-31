"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoRelationshipTypeCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoRelationshipTypeCode;
(function (MyInfoRelationshipTypeCode) {
    MyInfoRelationshipTypeCode["HUSBAND"] = "REL101";
    MyInfoRelationshipTypeCode["WIFE"] = "REL102";
    MyInfoRelationshipTypeCode["MOTHER"] = "REL201";
    MyInfoRelationshipTypeCode["FATHER"] = "REL202";
    MyInfoRelationshipTypeCode["SON"] = "REL401";
    MyInfoRelationshipTypeCode["DAUGHTER"] = "REL402";
    MyInfoRelationshipTypeCode["BROTHER"] = "REL601";
    MyInfoRelationshipTypeCode["SISTER"] = "REL602";
})(MyInfoRelationshipTypeCode || (exports.MyInfoRelationshipTypeCode = MyInfoRelationshipTypeCode = {}));
var MyInfoRelationshipTypeCodeMapping;
(function (MyInfoRelationshipTypeCodeMapping) {
    MyInfoRelationshipTypeCodeMapping["HUSBAND"] = "HUSBAND";
    MyInfoRelationshipTypeCodeMapping["WIFE"] = "WIFE";
    MyInfoRelationshipTypeCodeMapping["MOTHER"] = "MOTHER";
    MyInfoRelationshipTypeCodeMapping["FATHER"] = "FATHER";
    MyInfoRelationshipTypeCodeMapping["SON"] = "SON";
    MyInfoRelationshipTypeCodeMapping["DAUGHTER"] = "DAUGHTER";
    MyInfoRelationshipTypeCodeMapping["BROTHER"] = "BROTHER";
    MyInfoRelationshipTypeCodeMapping["SISTER"] = "SISTER";
})(MyInfoRelationshipTypeCodeMapping || (MyInfoRelationshipTypeCodeMapping = {}));
(function (MyInfoRelationshipTypeCode) {
    MyInfoRelationshipTypeCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoRelationshipTypeCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoRelationshipTypeCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoRelationshipTypeCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoRelationshipTypeCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoRelationshipTypeCode, MyInfoRelationshipTypeCodeMapping),
    };
})(MyInfoRelationshipTypeCode || (exports.MyInfoRelationshipTypeCode = MyInfoRelationshipTypeCode = {}));
//# sourceMappingURL=myinfo-relationship-type-code.js.map