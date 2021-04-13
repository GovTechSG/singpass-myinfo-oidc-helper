// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoMaritialStatusCode {
	"SINGLE" = "1",
	"MARRIED" = "2",
	"WIDOWED" = "3",
	"DIVORCED" = "5",
}

enum MyInfoMaritialStatusCodeMapping {
	"SINGLE" = "SINGLE",
	"MARRIED" = "MARRIED",
	"WIDOWED" = "WIDOWED",
	"DIVORCED" = "DIVORCED",
}

type MyInfoMaritialStatusCodeDesc = `${ MyInfoMaritialStatusCodeMapping }`;

export namespace MyInfoMaritialStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoMaritialStatusCode>(MyInfoMaritialStatusCode),
		values: EnumUtils.valuesFunc<MyInfoMaritialStatusCode>(MyInfoMaritialStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoMaritialStatusCode>(MyInfoMaritialStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoMaritialStatusCode>(MyInfoMaritialStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoMaritialStatusCode, MyInfoMaritialStatusCodeDesc>(MyInfoMaritialStatusCode, MyInfoMaritialStatusCodeMapping),
	};
}
