// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoSexCode {
	"FEMALE" = "F",
	"MALE" = "M",
	"UNKNOWN" = "U",
}

enum MyinfoSexCodeMapping {
	"FEMALE" = "FEMALE",
	"MALE" = "MALE",
	"UNKNOWN" = "UNKNOWN",
}

type MyinfoSexCodeDesc = `${ MyinfoSexCodeMapping }`;

export namespace MyinfoSexCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoSexCode>(MyinfoSexCode),
		values: EnumUtils.valuesFunc<MyinfoSexCode>(MyinfoSexCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoSexCode>(MyinfoSexCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoSexCode>(MyinfoSexCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoSexCode, MyinfoSexCodeDesc>(MyinfoSexCode, MyinfoSexCodeMapping),
	};
}
