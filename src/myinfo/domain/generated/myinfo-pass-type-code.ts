// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-07
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoPassTypeCode {
	"WORK_PERMIT" = "RPass",
	"S_PASS" = "SPass",
	"EMPLOYMENT_PASS" = "P1Pass",
	"EMPLOYMENT_PASS_2" = "P2Pass",
	"EMPLOYMENT_PASS_3" = "QPass",
	"PERSONALISED_EMPLOYMENT_PASS" = "PEP",
	"WORK_HOLIDAY_PASS" = "WHP",
	"TRAINING_EMPLOYMENT_PASS" = "TEP",
	"ENTRE_PASS" = "Entre",
	"DEPENDENT_PASS" = "DP",
	"LONG_TERM_VISIT_PASS" = "LTVP",
	"LETTER_OF_CONSENT" = "LOC",
	"MISCELLANEOUS_WORK_PASS" = "MWP",
	"SHORT_TERM_PASS" = "STP",
	"LONG_TERM_VISIT_PASS_2" = "LTVP+",
}

export namespace MyinfoPassTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoPassTypeCode>(MyinfoPassTypeCode),
		values: EnumUtils.valuesFunc<MyinfoPassTypeCode>(MyinfoPassTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoPassTypeCode>(MyinfoPassTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoPassTypeCode>(MyinfoPassTypeCode),
	};
}
