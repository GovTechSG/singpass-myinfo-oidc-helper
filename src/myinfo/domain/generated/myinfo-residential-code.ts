// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoResidentialCode {
	"ALIEN" = "A",
	"CITIZEN" = "C",
	"PR" = "P",
	"UNKNOWN" = "U",
	"NOT_APPLICABLE" = "N",
}

enum MyinfoResidentialCodeMapping {
	"ALIEN" = "ALIEN",
	"CITIZEN" = "CITIZEN",
	"PR" = "PR",
	"UNKNOWN" = "UNKNOWN",
	"NOT_APPLICABLE" = "NOT APPLICABLE",
}

type MyinfoResidentialCodeDesc = `${ MyinfoResidentialCodeMapping }`;

export namespace MyinfoResidentialCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		values: EnumUtils.valuesFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoResidentialCode, MyinfoResidentialCodeDesc>(MyinfoResidentialCode, MyinfoResidentialCodeMapping),
	};
}
