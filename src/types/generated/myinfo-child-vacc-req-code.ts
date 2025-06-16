/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2025-05-13
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "src/types/EnumUtils";

export enum MyInfoChildVaccReqCode {
	"MINIMUM_VACCINATION_REQUIREMENT_FOR_PRESCHOOL_ADMISSION_FULFILLED" = "1M3D",
}

enum MyInfoChildVaccReqCodeMapping {
	"MINIMUM_VACCINATION_REQUIREMENT_FOR_PRESCHOOL_ADMISSION_FULFILLED" = "MINIMUM VACCINATION REQUIREMENT FOR PRESCHOOL ADMISSION FULFILLED",
}

type MyInfoChildVaccReqCodeDesc = `${MyInfoChildVaccReqCodeMapping}`;

export namespace MyInfoChildVaccReqCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoChildVaccReqCode>(MyInfoChildVaccReqCode),
		values: EnumUtils.valuesFunc<MyInfoChildVaccReqCode>(MyInfoChildVaccReqCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoChildVaccReqCode>(MyInfoChildVaccReqCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoChildVaccReqCode>(MyInfoChildVaccReqCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoChildVaccReqCode, MyInfoChildVaccReqCodeDesc>(
			MyInfoChildVaccReqCode,
			MyInfoChildVaccReqCodeMapping,
		),
	};
}
