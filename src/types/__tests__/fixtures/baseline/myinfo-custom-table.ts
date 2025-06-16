/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-22
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "src/types/EnumUtils";

export enum MyInfoCustomTable {
	"Apple" = "A",
	"Banana" = "B",
}

enum MyInfoCustomTableMapping {
	"Apple" = "Apple fruit",
	"Banana" = "Banana fruit",
}

type MyInfoCustomTableDesc = `${MyInfoCustomTableMapping}`;

export namespace MyInfoCustomTable {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoCustomTable>(MyInfoCustomTable),
		values: EnumUtils.valuesFunc<MyInfoCustomTable>(MyInfoCustomTable),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoCustomTable>(MyInfoCustomTable),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoCustomTable>(MyInfoCustomTable),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoCustomTable, MyInfoCustomTableDesc>(
			MyInfoCustomTable,
			MyInfoCustomTableMapping,
		),
	};
}
