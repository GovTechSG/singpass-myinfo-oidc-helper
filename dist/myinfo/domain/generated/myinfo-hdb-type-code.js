"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoHDBTypeCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoHDBTypeCode;
(function (MyInfoHDBTypeCode) {
    MyInfoHDBTypeCode["1_ROOM_FLAT_HDB"] = "111";
    MyInfoHDBTypeCode["2_ROOM_FLAT_HDB"] = "112";
    MyInfoHDBTypeCode["3_ROOM_FLAT_HDB"] = "113";
    MyInfoHDBTypeCode["4_ROOM_FLAT_HDB"] = "114";
    MyInfoHDBTypeCode["5_ROOM_FLAT_HDB"] = "115";
    MyInfoHDBTypeCode["EXECUTIVE_FLAT_HDB"] = "116";
    MyInfoHDBTypeCode["STUDIO_APARTMENT_HDB"] = "118";
})(MyInfoHDBTypeCode || (exports.MyInfoHDBTypeCode = MyInfoHDBTypeCode = {}));
var MyInfoHDBTypeCodeMapping;
(function (MyInfoHDBTypeCodeMapping) {
    MyInfoHDBTypeCodeMapping["1_ROOM_FLAT_HDB"] = "1-ROOM FLAT (HDB)";
    MyInfoHDBTypeCodeMapping["2_ROOM_FLAT_HDB"] = "2-ROOM FLAT (HDB)";
    MyInfoHDBTypeCodeMapping["3_ROOM_FLAT_HDB"] = "3-ROOM FLAT (HDB)";
    MyInfoHDBTypeCodeMapping["4_ROOM_FLAT_HDB"] = "4-ROOM FLAT (HDB)";
    MyInfoHDBTypeCodeMapping["5_ROOM_FLAT_HDB"] = "5-ROOM FLAT (HDB)";
    MyInfoHDBTypeCodeMapping["EXECUTIVE_FLAT_HDB"] = "EXECUTIVE FLAT (HDB)";
    MyInfoHDBTypeCodeMapping["STUDIO_APARTMENT_HDB"] = "STUDIO APARTMENT (HDB)";
})(MyInfoHDBTypeCodeMapping || (MyInfoHDBTypeCodeMapping = {}));
(function (MyInfoHDBTypeCode) {
    MyInfoHDBTypeCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoHDBTypeCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoHDBTypeCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoHDBTypeCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoHDBTypeCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoHDBTypeCode, MyInfoHDBTypeCodeMapping),
    };
})(MyInfoHDBTypeCode || (exports.MyInfoHDBTypeCode = MyInfoHDBTypeCode = {}));
//# sourceMappingURL=myinfo-hdb-type-code.js.map