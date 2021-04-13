// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoVehicleStatus {
	"LIVE" = "1",
	"DEREGISTERED" = "2",
}

enum MyInfoVehicleStatusMapping {
	"LIVE" = "LIVE",
	"DEREGISTERED" = "DE-REGISTERED",
}

type MyInfoVehicleStatusDesc = `${ MyInfoVehicleStatusMapping }`;

export namespace MyInfoVehicleStatus {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoVehicleStatus>(MyInfoVehicleStatus),
		values: EnumUtils.valuesFunc<MyInfoVehicleStatus>(MyInfoVehicleStatus),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoVehicleStatus>(MyInfoVehicleStatus),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoVehicleStatus>(MyInfoVehicleStatus),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoVehicleStatus, MyInfoVehicleStatusDesc>(MyInfoVehicleStatus, MyInfoVehicleStatusMapping),
	};
}
