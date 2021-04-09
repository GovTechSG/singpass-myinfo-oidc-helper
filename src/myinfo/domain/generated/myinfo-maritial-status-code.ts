// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoMaritialStatusCode {
	"SINGLE" = "1",
	"MARRIED" = "2",
	"WIDOWED" = "3",
	"DIVORCED" = "5",
}

enum MyinfoMaritialStatusCodeMapping {
	"SINGLE" = "SINGLE",
	"MARRIED" = "MARRIED",
	"WIDOWED" = "WIDOWED",
	"DIVORCED" = "DIVORCED",
}

type MyinfoMaritialStatusCodeDesc = `${ MyinfoMaritialStatusCodeMapping }`;

export namespace MyinfoMaritialStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoMaritialStatusCode>(MyinfoMaritialStatusCode),
		values: EnumUtils.valuesFunc<MyinfoMaritialStatusCode>(MyinfoMaritialStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoMaritialStatusCode>(MyinfoMaritialStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoMaritialStatusCode>(MyinfoMaritialStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoMaritialStatusCode, MyinfoMaritialStatusCodeDesc>(MyinfoMaritialStatusCode, MyinfoMaritialStatusCodeMapping),
	};
}
