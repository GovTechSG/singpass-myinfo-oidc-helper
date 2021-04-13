// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoSexCode {
	"FEMALE" = "F",
	"MALE" = "M",
	"UNKNOWN" = "U",
}

enum MyInfoSexCodeMapping {
	"FEMALE" = "FEMALE",
	"MALE" = "MALE",
	"UNKNOWN" = "UNKNOWN",
}

type MyInfoSexCodeDesc = `${ MyInfoSexCodeMapping }`;

export namespace MyInfoSexCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoSexCode>(MyInfoSexCode),
		values: EnumUtils.valuesFunc<MyInfoSexCode>(MyInfoSexCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoSexCode>(MyInfoSexCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoSexCode>(MyInfoSexCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoSexCode, MyInfoSexCodeDesc>(MyInfoSexCode, MyInfoSexCodeMapping),
	};
}
