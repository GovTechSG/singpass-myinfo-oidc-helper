// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
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

enum MyinfoEduLevelCodeMapping {
	"NO_FORMAL_QUALIFICATION_PRE_PRIMARY_LOWER_PRIMARY" = "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY",
	"PRIMARY" = "PRIMARY",
	"LOWER_SECONDARY" = "LOWER SECONDARY",
	"SECONDARY" = "SECONDARY",
	"POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION" = "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION",
	"POLYTECHNIC_DIPLOMA" = "POLYTECHNIC DIPLOMA",
	"PROFESSIONAL_QUALIFICATION_AND_OTHER_DIPLOMA" = "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA",
	"BACHELORS_OR_EQUIVALENT" = "BACHELOR'S OR EQUIVALENT",
	"POSTGRADUATE_DIPLOMA_CERTIFICATE_EXCLUDING_MASTERS_AND_DOCTORATE" = "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
	"MASTERS_AND_DOCTORATE_OR_EQUIVALENT" = "MASTER'S AND DOCTORATE OR EQUIVALENT",
	"MODULAR_CERTIFICATION_NON_AWARD_COURSES_NON_FULL_QUALIFICATIONS" = "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)",
}

type MyinfoEduLevelCodeDesc = `${ MyinfoEduLevelCodeMapping }`;

export namespace MyinfoEduLevelCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		values: EnumUtils.valuesFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoEduLevelCode>(MyinfoEduLevelCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoEduLevelCode, MyinfoEduLevelCodeDesc>(MyinfoEduLevelCode, MyinfoEduLevelCodeMapping),
	};
}
