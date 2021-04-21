// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-21
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoProfileStatus {
	"NO_PROFILE" = "01",
	"INCOMPLETE_VERIFIED_FIELDS" = "02",
	"COMPLETE_VERIFIED_FIELDS" = "03",
	"UNKNOWN" = "04",
}

enum MyInfoProfileStatusMapping {
	"NO_PROFILE" = "NO_PROFILE",
	"INCOMPLETE_VERIFIED_FIELDS" = "INCOMPLETE_VERIFIED_FIELDS",
	"COMPLETE_VERIFIED_FIELDS" = "COMPLETE_VERIFIED_FIELDS",
	"UNKNOWN" = "UNKNOWN",
}

type MyInfoProfileStatusDesc = `${ MyInfoProfileStatusMapping }`;

export namespace MyInfoProfileStatus {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoProfileStatus>(MyInfoProfileStatus),
		values: EnumUtils.valuesFunc<MyInfoProfileStatus>(MyInfoProfileStatus),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoProfileStatus>(MyInfoProfileStatus),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoProfileStatus>(MyInfoProfileStatus),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoProfileStatus, MyInfoProfileStatusDesc>(MyInfoProfileStatus, MyInfoProfileStatusMapping),
	};
}
