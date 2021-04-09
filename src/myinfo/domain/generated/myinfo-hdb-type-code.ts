// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoHDBTypeCode {
	"1_ROOM_FLAT_HDB" = "111",
	"2_ROOM_FLAT_HDB" = "112",
	"3_ROOM_FLAT_HDB" = "113",
	"4_ROOM_FLAT_HDB" = "114",
	"5_ROOM_FLAT_HDB" = "115",
	"EXECUTIVE_FLAT_HDB" = "116",
	"STUDIO_APARTMENT_HDB" = "118",
}

enum MyinfoHDBTypeCodeMapping {
	"1_ROOM_FLAT_HDB" = "1-ROOM FLAT (HDB)",
	"2_ROOM_FLAT_HDB" = "2-ROOM FLAT (HDB)",
	"3_ROOM_FLAT_HDB" = "3-ROOM FLAT (HDB)",
	"4_ROOM_FLAT_HDB" = "4-ROOM FLAT (HDB)",
	"5_ROOM_FLAT_HDB" = "5-ROOM FLAT (HDB)",
	"EXECUTIVE_FLAT_HDB" = "EXECUTIVE FLAT (HDB)",
	"STUDIO_APARTMENT_HDB" = "STUDIO APARTMENT (HDB)",
}

type MyinfoHDBTypeCodeDesc = `${ MyinfoHDBTypeCodeMapping }`;

export namespace MyinfoHDBTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		values: EnumUtils.valuesFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoHDBTypeCode, MyinfoHDBTypeCodeDesc>(MyinfoHDBTypeCode, MyinfoHDBTypeCodeMapping),
	};
}
