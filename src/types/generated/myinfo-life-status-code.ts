/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2025-05-13
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "src/util";

export enum MyInfoLifeStatusCode {
	"ALIVE" = "A",
	"DECEASED" = "D",
}

enum MyInfoLifeStatusCodeMapping {
	"ALIVE" = "ALIVE",
	"DECEASED" = "DECEASED",
}

type MyInfoLifeStatusCodeDesc = `${MyInfoLifeStatusCodeMapping}`;

export namespace MyInfoLifeStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoLifeStatusCode>(MyInfoLifeStatusCode),
		values: EnumUtils.valuesFunc<MyInfoLifeStatusCode>(MyInfoLifeStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoLifeStatusCode>(MyInfoLifeStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoLifeStatusCode>(MyInfoLifeStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoLifeStatusCode, MyInfoLifeStatusCodeDesc>(
			MyInfoLifeStatusCode,
			MyInfoLifeStatusCodeMapping,
		),
	};
}
