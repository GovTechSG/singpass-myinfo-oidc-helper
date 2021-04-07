// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-07
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

export namespace MyinfoHDBTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		values: EnumUtils.valuesFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoHDBTypeCode>(MyinfoHDBTypeCode),
	};
}
