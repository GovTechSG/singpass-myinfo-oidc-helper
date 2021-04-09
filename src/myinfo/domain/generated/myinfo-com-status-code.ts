// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoComStatusCode {
	"ELIGIBLE" = "Y",
	"NOT_ELIGIBLE" = "N",
}

enum MyinfoComStatusCodeMapping {
	"ELIGIBLE" = "ELIGIBLE",
	"NOT_ELIGIBLE" = "NOT ELIGIBLE",
}

type MyinfoComStatusCodeDesc = `${ MyinfoComStatusCodeMapping }`;

export namespace MyinfoComStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoComStatusCode>(MyinfoComStatusCode),
		values: EnumUtils.valuesFunc<MyinfoComStatusCode>(MyinfoComStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoComStatusCode>(MyinfoComStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoComStatusCode>(MyinfoComStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoComStatusCode, MyinfoComStatusCodeDesc>(MyinfoComStatusCode, MyinfoComStatusCodeMapping),
	};
}
