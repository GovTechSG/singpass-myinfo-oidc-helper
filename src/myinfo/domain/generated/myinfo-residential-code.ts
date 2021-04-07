// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2021-04-07
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyinfoResidentialCode {
	"ALIEN" = "A",
	"CITIZEN" = "C",
	"PR" = "P",
	"UNKNOWN" = "U",
	"NOT_APPLICABLE" = "N",
}

export namespace MyinfoResidentialCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		values: EnumUtils.valuesFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoResidentialCode>(MyinfoResidentialCode),
	};
}
