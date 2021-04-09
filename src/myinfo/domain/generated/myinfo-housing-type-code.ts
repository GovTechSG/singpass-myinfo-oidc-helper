// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoHousingTypeCode {
	"DETACHED_HOUSE" = "121",
	"SEMI_DETACHED_HOUSE" = "122",
	"TERRACE_HOUSE" = "123",
	"CONDOMINIUM" = "131",
	"EXECUTIVE_CONDOMINIUM" = "132",
	"APARTMENT" = "139",
}

enum MyinfoHousingTypeCodeMapping {
	"DETACHED_HOUSE" = "DETACHED HOUSE",
	"SEMI_DETACHED_HOUSE" = "SEMI-DETACHED HOUSE",
	"TERRACE_HOUSE" = "TERRACE HOUSE",
	"CONDOMINIUM" = "CONDOMINIUM",
	"EXECUTIVE_CONDOMINIUM" = "EXECUTIVE CONDOMINIUM",
	"APARTMENT" = "APARTMENT",
}

type MyinfoHousingTypeCodeDesc = `${ MyinfoHousingTypeCodeMapping }`;

export namespace MyinfoHousingTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoHousingTypeCode>(MyinfoHousingTypeCode),
		values: EnumUtils.valuesFunc<MyinfoHousingTypeCode>(MyinfoHousingTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoHousingTypeCode>(MyinfoHousingTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoHousingTypeCode>(MyinfoHousingTypeCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoHousingTypeCode, MyinfoHousingTypeCodeDesc>(MyinfoHousingTypeCode, MyinfoHousingTypeCodeMapping),
	};
}
