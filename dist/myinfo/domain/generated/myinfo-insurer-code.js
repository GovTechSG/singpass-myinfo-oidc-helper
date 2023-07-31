"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoInsurerCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoInsurerCode;
(function (MyInfoInsurerCode) {
    let Cpfdependantprotectionscheme;
    (function (Cpfdependantprotectionscheme) {
        Cpfdependantprotectionscheme["GREAT_EASTERN_LIFE_INSURANCE"] = "9GEL";
        Cpfdependantprotectionscheme["INCOME_INSURANCE"] = "9NTU";
    })(Cpfdependantprotectionscheme = MyInfoInsurerCode.Cpfdependantprotectionscheme || (MyInfoInsurerCode.Cpfdependantprotectionscheme = {}));
    let CpfdependantprotectionschemeMapping;
    (function (CpfdependantprotectionschemeMapping) {
        CpfdependantprotectionschemeMapping["GREAT_EASTERN_LIFE_INSURANCE"] = "GREAT EASTERN LIFE INSURANCE";
        CpfdependantprotectionschemeMapping["INCOME_INSURANCE"] = "INCOME INSURANCE";
    })(CpfdependantprotectionschemeMapping || (CpfdependantprotectionschemeMapping = {}));
    let Cpfmedishieldlife;
    (function (Cpfmedishieldlife) {
        Cpfmedishieldlife["INCOME_INSURANCE"] = "NTU";
        Cpfmedishieldlife["AIA"] = "AIA";
        Cpfmedishieldlife["GREAT_EASTERN"] = "GEL";
        Cpfmedishieldlife["PRUDENTIAL"] = "PRU";
        Cpfmedishieldlife["SINGLIFE"] = "AVI";
        Cpfmedishieldlife["HSBC_LIFE"] = "AXA";
        Cpfmedishieldlife["RAFFLES_HEALTH_INSURANCE"] = "RHI";
    })(Cpfmedishieldlife = MyInfoInsurerCode.Cpfmedishieldlife || (MyInfoInsurerCode.Cpfmedishieldlife = {}));
    let CpfmedishieldlifeMapping;
    (function (CpfmedishieldlifeMapping) {
        CpfmedishieldlifeMapping["INCOME_INSURANCE"] = "INCOME INSURANCE";
        CpfmedishieldlifeMapping["AIA"] = "AIA";
        CpfmedishieldlifeMapping["GREAT_EASTERN"] = "GREAT EASTERN";
        CpfmedishieldlifeMapping["PRUDENTIAL"] = "PRUDENTIAL";
        CpfmedishieldlifeMapping["SINGLIFE"] = "SINGLIFE";
        CpfmedishieldlifeMapping["HSBC_LIFE"] = "HSBC LIFE";
        CpfmedishieldlifeMapping["RAFFLES_HEALTH_INSURANCE"] = "RAFFLES HEALTH INSURANCE";
    })(CpfmedishieldlifeMapping || (CpfmedishieldlifeMapping = {}));
    (function (Cpfdependantprotectionscheme) {
        Cpfdependantprotectionscheme.fn = {
            keys: EnumUtils_1.EnumUtils.keysFunc(Cpfdependantprotectionscheme),
            values: EnumUtils_1.EnumUtils.valuesFunc(Cpfdependantprotectionscheme),
            toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(Cpfdependantprotectionscheme),
            toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(Cpfdependantprotectionscheme),
            toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(Cpfdependantprotectionscheme, CpfdependantprotectionschemeMapping),
        };
    })(Cpfdependantprotectionscheme = MyInfoInsurerCode.Cpfdependantprotectionscheme || (MyInfoInsurerCode.Cpfdependantprotectionscheme = {}));
    (function (Cpfmedishieldlife) {
        Cpfmedishieldlife.fn = {
            keys: EnumUtils_1.EnumUtils.keysFunc(Cpfmedishieldlife),
            values: EnumUtils_1.EnumUtils.valuesFunc(Cpfmedishieldlife),
            toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(Cpfmedishieldlife),
            toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(Cpfmedishieldlife),
            toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(Cpfmedishieldlife, CpfmedishieldlifeMapping),
        };
    })(Cpfmedishieldlife = MyInfoInsurerCode.Cpfmedishieldlife || (MyInfoInsurerCode.Cpfmedishieldlife = {}));
})(MyInfoInsurerCode || (exports.MyInfoInsurerCode = MyInfoInsurerCode = {}));
//# sourceMappingURL=myinfo-insurer-code.js.map