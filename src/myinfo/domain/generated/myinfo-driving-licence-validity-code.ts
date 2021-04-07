// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-07
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoDrivingLicenceValidityCode {
	"VALID" = "V",
	"INVALID" = "I",
	"EXPIRED" = "E",
	"NOT_HOLDING" = "N",
}

export namespace MyinfoDrivingLicenceValidityCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		values: EnumUtils.valuesFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoDrivingLicenceValidityCode>(MyinfoDrivingLicenceValidityCode),
	};
}
