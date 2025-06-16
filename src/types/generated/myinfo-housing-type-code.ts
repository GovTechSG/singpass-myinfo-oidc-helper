/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2025-05-13
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "src/types/EnumUtils";

export enum MyInfoHousingTypeCode {
	"DETACHED_HOUSE" = "121",
	"SEMI_DETACHED_HOUSE" = "122",
	"TERRACE_HOUSE" = "123",
	"CONDOMINIUM" = "131",
	"EXECUTIVE_CONDOMINIUM" = "132",
	"APARTMENT" = "139",
}

enum MyInfoHousingTypeCodeMapping {
	"DETACHED_HOUSE" = "DETACHED HOUSE",
	"SEMI_DETACHED_HOUSE" = "SEMI-DETACHED HOUSE",
	"TERRACE_HOUSE" = "TERRACE HOUSE",
	"CONDOMINIUM" = "CONDOMINIUM",
	"EXECUTIVE_CONDOMINIUM" = "EXECUTIVE CONDOMINIUM",
	"APARTMENT" = "APARTMENT",
}

type MyInfoHousingTypeCodeDesc = `${MyInfoHousingTypeCodeMapping}`;

export namespace MyInfoHousingTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoHousingTypeCode>(MyInfoHousingTypeCode),
		values: EnumUtils.valuesFunc<MyInfoHousingTypeCode>(MyInfoHousingTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoHousingTypeCode>(MyInfoHousingTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoHousingTypeCode>(MyInfoHousingTypeCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoHousingTypeCode, MyInfoHousingTypeCodeDesc>(
			MyInfoHousingTypeCode,
			MyInfoHousingTypeCodeMapping,
		),
	};
}
