// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoResidentialCode {
	"ALIEN" = "A",
	"CITIZEN" = "C",
	"PR" = "P",
	"UNKNOWN" = "U",
	"NOT_APPLICABLE" = "N",
}

enum MyInfoResidentialCodeMapping {
	"ALIEN" = "ALIEN",
	"CITIZEN" = "CITIZEN",
	"PR" = "PR",
	"UNKNOWN" = "UNKNOWN",
	"NOT_APPLICABLE" = "NOT APPLICABLE",
}

type MyInfoResidentialCodeDesc = `${ MyInfoResidentialCodeMapping }`;

export namespace MyInfoResidentialCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoResidentialCode>(MyInfoResidentialCode),
		values: EnumUtils.valuesFunc<MyInfoResidentialCode>(MyInfoResidentialCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoResidentialCode>(MyInfoResidentialCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoResidentialCode>(MyInfoResidentialCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoResidentialCode, MyInfoResidentialCodeDesc>(MyInfoResidentialCode, MyInfoResidentialCodeMapping),
	};
}
