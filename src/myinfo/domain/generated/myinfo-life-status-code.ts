// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-09
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoLifeStatusCode {
	"ALIVE" = "A",
	"DECEASED" = "D",
}

enum MyinfoLifeStatusCodeMapping {
	"ALIVE" = "ALIVE",
	"DECEASED" = "DECEASED",
}

type MyinfoLifeStatusCodeDesc = `${ MyinfoLifeStatusCodeMapping }`;

export namespace MyinfoLifeStatusCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoLifeStatusCode>(MyinfoLifeStatusCode),
		values: EnumUtils.valuesFunc<MyinfoLifeStatusCode>(MyinfoLifeStatusCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoLifeStatusCode>(MyinfoLifeStatusCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoLifeStatusCode>(MyinfoLifeStatusCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyinfoLifeStatusCode, MyinfoLifeStatusCodeDesc>(MyinfoLifeStatusCode, MyinfoLifeStatusCodeMapping),
	};
}
