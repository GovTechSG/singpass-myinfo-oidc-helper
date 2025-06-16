/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2025-05-13
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../util/EnumUtils";

export enum MyInfoHDBTypeCode {
	"1_ROOM_FLAT_HDB" = "111",
	"2_ROOM_FLAT_HDB" = "112",
	"3_ROOM_FLAT_HDB" = "113",
	"4_ROOM_FLAT_HDB" = "114",
	"5_ROOM_FLAT_HDB" = "115",
	"EXECUTIVE_FLAT_HDB" = "116",
	"STUDIO_APARTMENT_HDB" = "118",
}

enum MyInfoHDBTypeCodeMapping {
	"1_ROOM_FLAT_HDB" = "1-ROOM FLAT (HDB)",
	"2_ROOM_FLAT_HDB" = "2-ROOM FLAT (HDB)",
	"3_ROOM_FLAT_HDB" = "3-ROOM FLAT (HDB)",
	"4_ROOM_FLAT_HDB" = "4-ROOM FLAT (HDB)",
	"5_ROOM_FLAT_HDB" = "5-ROOM FLAT (HDB)",
	"EXECUTIVE_FLAT_HDB" = "EXECUTIVE FLAT (HDB)",
	"STUDIO_APARTMENT_HDB" = "STUDIO APARTMENT (HDB)",
}

type MyInfoHDBTypeCodeDesc = `${MyInfoHDBTypeCodeMapping}`;

export namespace MyInfoHDBTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoHDBTypeCode>(MyInfoHDBTypeCode),
		values: EnumUtils.valuesFunc<MyInfoHDBTypeCode>(MyInfoHDBTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoHDBTypeCode>(MyInfoHDBTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoHDBTypeCode>(MyInfoHDBTypeCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoHDBTypeCode, MyInfoHDBTypeCodeDesc>(
			MyInfoHDBTypeCode,
			MyInfoHDBTypeCodeMapping,
		),
	};
}
