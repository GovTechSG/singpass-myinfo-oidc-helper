// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-16
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoPioneerGenerationMessageCode {
	"NON_PG" = "1",
	"ALL_OK" = "2",
	"NEED_ADDRESS_UPDATE" = "3",
	"NEED_MEDISAVE_TOPUP" = "4",
	"CALL_TO_RECEIVE" = "5",
	"OPT_OUT" = "6",
	"NIL_STATUS" = "7",
}

enum MyInfoPioneerGenerationMessageCodeMapping {
	"NON_PG" = "We regret that you are not eligible for the Pioneer Generation Package.  For further enquiries, please contact 1800-2222-888.",
	"ALL_OK" = "You are eligible for the Pioneer Generation Package. For further enquiries, please contact 1800-2222-888.",
	"NEED_ADDRESS_UPDATE" = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to receive your Pioneer Generation card.",
	"NEED_MEDISAVE_TOPUP" = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to start receiving your Pioneer Generation benefits, such as your MediSave top-up.",
	"CALL_TO_RECEIVE" = "You are eligible for the Pioneer Generation Package. Please contact 1800-2222-888 to start receiving your Pioneer Generation benefits.",
	"OPT_OUT" = "We understand that you have opted out of receiving the benefits under the Pioneer Generation Package. For further enquiries, please contact 1800-2222-888.",
	"NIL_STATUS" = "Please call 1800-2222-888 to start receiving your PG benefits.",
}

type MyInfoPioneerGenerationMessageCodeDesc = `${ MyInfoPioneerGenerationMessageCodeMapping }`;

export namespace MyInfoPioneerGenerationMessageCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoPioneerGenerationMessageCode>(MyInfoPioneerGenerationMessageCode),
		values: EnumUtils.valuesFunc<MyInfoPioneerGenerationMessageCode>(MyInfoPioneerGenerationMessageCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoPioneerGenerationMessageCode>(MyInfoPioneerGenerationMessageCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoPioneerGenerationMessageCode>(MyInfoPioneerGenerationMessageCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoPioneerGenerationMessageCode, MyInfoPioneerGenerationMessageCodeDesc>(MyInfoPioneerGenerationMessageCode, MyInfoPioneerGenerationMessageCodeMapping),
	};
}
