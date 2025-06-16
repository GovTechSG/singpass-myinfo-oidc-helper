/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-22
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "src/types/EnumUtils";

export enum MyInfoSingleTable {
	"LIVE" = "1",
	"DEREGISTERED" = "2",
}

enum MyInfoSingleTableMapping {
	"LIVE" = "LIVE",
	"DEREGISTERED" = "DEREGISTERED",
}

type MyInfoSingleTableDesc = `${MyInfoSingleTableMapping}`;

export namespace MyInfoSingleTable {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoSingleTable>(MyInfoSingleTable),
		values: EnumUtils.valuesFunc<MyInfoSingleTable>(MyInfoSingleTable),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoSingleTable>(MyInfoSingleTable),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoSingleTable>(MyInfoSingleTable),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoSingleTable, MyInfoSingleTableDesc>(
			MyInfoSingleTable,
			MyInfoSingleTableMapping,
		),
	};
}
