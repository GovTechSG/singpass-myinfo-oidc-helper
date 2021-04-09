// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoComStatusCode {
	"ELIGIBLE" = "Y",
	"NOT_ELIGIBLE" = "N",
}

enum MyInfoComStatusCodeMapping {
	"ELIGIBLE" = "ELIGIBLE",
	"NOT_ELIGIBLE" = "NOT ELIGIBLE",
}

type MyInfoComStatusCodeDesc = `${ MyInfoComStatusCodeMapping }`;

export namespace MyInfoComStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoComStatusCode>(MyInfoComStatusCode),
		values: EnumUtils.valuesFunc<MyInfoComStatusCode>(MyInfoComStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoComStatusCode>(MyInfoComStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoComStatusCode>(MyInfoComStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoComStatusCode, MyInfoComStatusCodeDesc>(MyInfoComStatusCode, MyInfoComStatusCodeMapping),
	};
}
