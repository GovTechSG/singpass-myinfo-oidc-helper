// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoVehicleStatus {
	"LIVE" = "1",
	"DEREGISTERED" = "2",
}

enum MyinfoVehicleStatusMapping {
	"LIVE" = "LIVE",
	"DEREGISTERED" = "DE-REGISTERED",
}

type MyinfoVehicleStatusDesc = `${ MyinfoVehicleStatusMapping }`;

export namespace MyinfoVehicleStatus {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		values: EnumUtils.valuesFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoVehicleStatus, MyinfoVehicleStatusDesc>(MyinfoVehicleStatus, MyinfoVehicleStatusMapping),
	};
}
