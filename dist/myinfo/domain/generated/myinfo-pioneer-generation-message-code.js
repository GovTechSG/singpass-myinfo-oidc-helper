"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoPioneerGenerationMessageCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoPioneerGenerationMessageCode;
(function (MyInfoPioneerGenerationMessageCode) {
    MyInfoPioneerGenerationMessageCode["NON_PG"] = "1";
    MyInfoPioneerGenerationMessageCode["ALL_OK"] = "2";
    MyInfoPioneerGenerationMessageCode["NEED_ADDRESS_UPDATE"] = "3";
    MyInfoPioneerGenerationMessageCode["NEED_MEDISAVE_TOPUP"] = "4";
    MyInfoPioneerGenerationMessageCode["CALL_TO_RECEIVE"] = "5";
    MyInfoPioneerGenerationMessageCode["OPT_OUT"] = "6";
    MyInfoPioneerGenerationMessageCode["NIL_STATUS"] = "7";
})(MyInfoPioneerGenerationMessageCode || (exports.MyInfoPioneerGenerationMessageCode = MyInfoPioneerGenerationMessageCode = {}));
var MyInfoPioneerGenerationMessageCodeMapping;
(function (MyInfoPioneerGenerationMessageCodeMapping) {
    MyInfoPioneerGenerationMessageCodeMapping["NON_PG"] = "We regret that you are not eligible for the Pioneer Generation Package.  For further enquiries, please contact 1800-2222-888.";
    MyInfoPioneerGenerationMessageCodeMapping["ALL_OK"] = "You are eligible for the Pioneer Generation Package. For further enquiries, please contact 1800-2222-888.";
    MyInfoPioneerGenerationMessageCodeMapping["NEED_ADDRESS_UPDATE"] = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to receive your Pioneer Generation card.";
    MyInfoPioneerGenerationMessageCodeMapping["NEED_MEDISAVE_TOPUP"] = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to start receiving your Pioneer Generation benefits, such as your MediSave top-up.";
    MyInfoPioneerGenerationMessageCodeMapping["CALL_TO_RECEIVE"] = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to start receiving your Pioneer Generation benefits.";
    MyInfoPioneerGenerationMessageCodeMapping["OPT_OUT"] = "We understand that you have opted out of receiving the benefits under the Pioneer Generation Package. For further enquiries, please contact 1800-2222-888.";
    MyInfoPioneerGenerationMessageCodeMapping["NIL_STATUS"] = "Please call 1800-2222-888 to start receiving your PG benefits.";
})(MyInfoPioneerGenerationMessageCodeMapping || (MyInfoPioneerGenerationMessageCodeMapping = {}));
(function (MyInfoPioneerGenerationMessageCode) {
    MyInfoPioneerGenerationMessageCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoPioneerGenerationMessageCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoPioneerGenerationMessageCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoPioneerGenerationMessageCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoPioneerGenerationMessageCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoPioneerGenerationMessageCode, MyInfoPioneerGenerationMessageCodeMapping),
    };
})(MyInfoPioneerGenerationMessageCode || (exports.MyInfoPioneerGenerationMessageCode = MyInfoPioneerGenerationMessageCode = {}));
//# sourceMappingURL=myinfo-pioneer-generation-message-code.js.map