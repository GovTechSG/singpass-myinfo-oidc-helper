// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoDrivingLicenceValidityCode {
	"VALID" = "V",
	"INVALID" = "I",
	"EXPIRED" = "E",
	"NOT_HOLDING" = "N",
}

enum MyinfoDrivingLicenceValidityCodeMapping {
	"VALID" = "VALID",
	"INVALID" = "INVALID",
	"EXPIRED" = "EXPIRED",
	"NOT_HOLDING" = "NOT HOLDING",
}

type MyinfoDrivingLicenceValidityCodeDesc = `${ MyinfoDrivingLicenceValidityCodeMapping }`;

export namespace MyinfoDrivingLicenceValidityCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		values: EnumUtils.valuesFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoDrivingLicenceValidityCode, MyinfoDrivingLicenceValidityCodeDesc>(MyinfoDrivingLicenceValidityCode, MyinfoDrivingLicenceValidityCodeMapping),
	};
}
