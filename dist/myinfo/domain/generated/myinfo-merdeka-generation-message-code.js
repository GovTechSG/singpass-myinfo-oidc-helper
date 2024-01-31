"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoMerdekaGenerationMessageCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoMerdekaGenerationMessageCode;
(function (MyInfoMerdekaGenerationMessageCode) {
    MyInfoMerdekaGenerationMessageCode["NON_MG"] = "1";
    MyInfoMerdekaGenerationMessageCode["ALL_OK"] = "2";
    MyInfoMerdekaGenerationMessageCode["NEED_ADDRESS_UPDATE"] = "3";
    MyInfoMerdekaGenerationMessageCode["NEED_MEDISAVE_TOPUP"] = "4";
    MyInfoMerdekaGenerationMessageCode["CALL_TO_RECEIVE"] = "5";
    MyInfoMerdekaGenerationMessageCode["OPT_OUT"] = "6";
    MyInfoMerdekaGenerationMessageCode["NIL_STATUS"] = "7";
})(MyInfoMerdekaGenerationMessageCode || (exports.MyInfoMerdekaGenerationMessageCode = MyInfoMerdekaGenerationMessageCode = {}));
var MyInfoMerdekaGenerationMessageCodeMapping;
(function (MyInfoMerdekaGenerationMessageCodeMapping) {
    MyInfoMerdekaGenerationMessageCodeMapping["NON_MG"] = "We regret that you are not eligible for the Merdeka Generation Package.  For further enquiries, please contact 1800-2222-888.";
    MyInfoMerdekaGenerationMessageCodeMapping["ALL_OK"] = "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.";
    MyInfoMerdekaGenerationMessageCodeMapping["NEED_ADDRESS_UPDATE"] = "You are eligible for the Merdeka Generation Package. Please call 6391 6100 to update your NRIC address with ICA and then contact 1800-2222-888 to receive your Merdeka Generation card.";
    MyInfoMerdekaGenerationMessageCodeMapping["NEED_MEDISAVE_TOPUP"] = "You are eligible for the Merdeka Generation Package. Please contact 1800-2222-888 to receive your Merdeka Generation MediSave top-up.";
    MyInfoMerdekaGenerationMessageCodeMapping["CALL_TO_RECEIVE"] = "You are eligible for the Merdeka Generation Package. Please call 6391 6100 to update your NRIC address with ICA, and then contact 1800-2222-888 to receive your Merdeka Generation card.";
    MyInfoMerdekaGenerationMessageCodeMapping["OPT_OUT"] = "We understand that you have opted out of receiving the benefits under the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.";
    MyInfoMerdekaGenerationMessageCodeMapping["NIL_STATUS"] = "Please contact 1800-2222-888 for further details on your eligibility.";
})(MyInfoMerdekaGenerationMessageCodeMapping || (MyInfoMerdekaGenerationMessageCodeMapping = {}));
(function (MyInfoMerdekaGenerationMessageCode) {
    MyInfoMerdekaGenerationMessageCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoMerdekaGenerationMessageCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoMerdekaGenerationMessageCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoMerdekaGenerationMessageCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoMerdekaGenerationMessageCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoMerdekaGenerationMessageCode, MyInfoMerdekaGenerationMessageCodeMapping),
    };
})(MyInfoMerdekaGenerationMessageCode || (exports.MyInfoMerdekaGenerationMessageCode = MyInfoMerdekaGenerationMessageCode = {}));
//# sourceMappingURL=myinfo-merdeka-generation-message-code.js.map