// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-07
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoVehicleStatus {
	"LIVE" = "1",
	"DEREGISTERED" = "2",
}

export namespace MyinfoVehicleStatus {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		values: EnumUtils.valuesFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoVehicleStatus>(MyinfoVehicleStatus),
	};
}
