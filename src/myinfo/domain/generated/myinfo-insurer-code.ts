// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-16
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoInsurerCode {
	"GREAT_EASTERN_LIFE_INSURANCE" = "9GEL",
	"NTUC_INCOME" = "9NTU",
}

enum MyInfoInsurerCodeMapping {
	"GREAT_EASTERN_LIFE_INSURANCE" = "GREAT EASTERN LIFE INSURANCE",
	"NTUC_INCOME" = "NTUC INCOME",
}

type MyInfoInsurerCodeDesc = `${ MyInfoInsurerCodeMapping }`;

export namespace MyInfoInsurerCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoInsurerCode>(MyInfoInsurerCode),
		values: EnumUtils.valuesFunc<MyInfoInsurerCode>(MyInfoInsurerCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoInsurerCode>(MyInfoInsurerCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoInsurerCode>(MyInfoInsurerCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoInsurerCode, MyInfoInsurerCodeDesc>(MyInfoInsurerCode, MyInfoInsurerCodeMapping),
	};
}
