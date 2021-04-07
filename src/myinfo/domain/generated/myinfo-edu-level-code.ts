// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-07
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoEduLevelCode {
	"NO_FORMAL_QUALIFICATION_PRE_PRIMARY_LOWER_PRIMARY" = "0",
	"PRIMARY" = "1",
	"LOWER_SECONDARY" = "2",
	"SECONDARY" = "3",
	"POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION" = "4",
	"POLYTECHNIC_DIPLOMA" = "5",
	"PROFESSIONAL_QUALIFICATION_AND_OTHER_DIPLOMA" = "6",
	"BACHELORS_OR_EQUIVALENT" = "7",
	"POSTGRADUATE_DIPLOMA_CERTIFICATE_EXCLUDING_MASTERS_AND_DOCTORATE" = "8",
	"MASTERS_AND_DOCTORATE_OR_EQUIVALENT" = "9",
	"MODULAR_CERTIFICATION_NON_AWARD_COURSES_NON_FULL_QUALIFICATIONS" = "N",
}

export namespace MyinfoEduLevelCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		values: EnumUtils.valuesFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
	};
}
