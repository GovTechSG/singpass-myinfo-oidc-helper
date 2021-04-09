// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoMerdekaGenerationMessageCode {
	"NON_MG" = "1",
	"ALL_OK" = "2",
	"NEED_ADDRESS_UPDATE" = "3",
	"NEED_MEDISAVE_TOPUP" = "4",
	"CALL_TO_RECEIVE" = "5",
	"OPT_OUT" = "6",
	"NIL_STATUS" = "7",
}

enum MyinfoMerdekaGenerationMessageCodeMapping {
	"NON_MG" = "We regret that you are not eligible for the Merdeka Generation Package.  For further enquiries, please contact 1800-2222-888.",
	"ALL_OK" = "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
	"NEED_ADDRESS_UPDATE" = "You are eligible for the Merdeka Generation Package. Please call 6391 6100 to update your NRIC address with ICA and then contact 1800-2222-888 to receive your Merdeka Generation card.",
	"NEED_MEDISAVE_TOPUP" = "You are eligible for the Merdeka Generation Package. Please contact 1800-2222-888 to receive your Merdeka Generation MediSave top-up.",
	"CALL_TO_RECEIVE" = "You are eligible for the Merdeka Generation Package. Please call 6391 6100 to update your NRIC address with ICA, and then contact 1800-2222-888 to receive your Merdeka Generation card.",
	"OPT_OUT" = "We understand that you have opted out of receiving the benefits under the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
	"NIL_STATUS" = "Please contact 1800-2222-888 for further details on your eligibility.",
}

type MyinfoMerdekaGenerationMessageCodeDesc = `${ MyinfoMerdekaGenerationMessageCodeMapping }`;

export namespace MyinfoMerdekaGenerationMessageCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		values: EnumUtils.valuesFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoMerdekaGenerationMessageCode, MyinfoMerdekaGenerationMessageCodeDesc>(MyinfoMerdekaGenerationMessageCode, MyinfoMerdekaGenerationMessageCodeMapping),
	};
}
