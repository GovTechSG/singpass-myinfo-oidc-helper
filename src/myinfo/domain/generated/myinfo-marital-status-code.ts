/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2025-05-13
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoMaritalStatusCode {
	"SINGLE" = "1",
	"MARRIED" = "2",
	"WIDOWED" = "3",
	"DIVORCED" = "5",
}

enum MyInfoMaritalStatusCodeMapping {
	"SINGLE" = "SINGLE",
	"MARRIED" = "MARRIED",
	"WIDOWED" = "WIDOWED",
	"DIVORCED" = "DIVORCED",
}

type MyInfoMaritalStatusCodeDesc = `${MyInfoMaritalStatusCodeMapping}`;

export namespace MyInfoMaritalStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoMaritalStatusCode>(MyInfoMaritalStatusCode),
		values: EnumUtils.valuesFunc<MyInfoMaritalStatusCode>(MyInfoMaritalStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoMaritalStatusCode>(MyInfoMaritalStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoMaritalStatusCode>(MyInfoMaritalStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoMaritalStatusCode, MyInfoMaritalStatusCodeDesc>(
			MyInfoMaritalStatusCode,
			MyInfoMaritalStatusCodeMapping,
		),
	};
}
