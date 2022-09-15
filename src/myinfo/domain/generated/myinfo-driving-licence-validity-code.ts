// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-15
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoDrivingLicenceValidityCode {
	"VALID" = "V",
	"INVALID" = "I",
	"EXPIRED" = "E",
	"NOT_HOLDING" = "N",
}

enum MyInfoDrivingLicenceValidityCodeMapping {
	"VALID" = "VALID",
	"INVALID" = "INVALID",
	"EXPIRED" = "EXPIRED",
	"NOT_HOLDING" = "NOT HOLDING",
}

type MyInfoDrivingLicenceValidityCodeDesc = `${ MyInfoDrivingLicenceValidityCodeMapping }`;

export namespace MyInfoDrivingLicenceValidityCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoDrivingLicenceValidityCode>(MyInfoDrivingLicenceValidityCode),
		values: EnumUtils.valuesFunc<MyInfoDrivingLicenceValidityCode>(MyInfoDrivingLicenceValidityCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoDrivingLicenceValidityCode>(MyInfoDrivingLicenceValidityCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoDrivingLicenceValidityCode>(MyInfoDrivingLicenceValidityCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoDrivingLicenceValidityCode, MyInfoDrivingLicenceValidityCodeDesc>(MyInfoDrivingLicenceValidityCode, MyInfoDrivingLicenceValidityCodeMapping),
	};
}
