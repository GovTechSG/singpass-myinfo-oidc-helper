// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2023-05-10
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoRelationshipTypeCode {
	"HUSBAND" = "REL101",
	"WIFE" = "REL102",
	"MOTHER" = "REL201",
	"FATHER" = "REL202",
	"SON" = "REL401",
	"DAUGHTER" = "REL402",
	"BROTHER" = "REL601",
	"SISTER" = "REL602",
}

enum MyInfoRelationshipTypeCodeMapping {
	"HUSBAND" = "HUSBAND",
	"WIFE" = "WIFE",
	"MOTHER" = "MOTHER",
	"FATHER" = "FATHER",
	"SON" = "SON",
	"DAUGHTER" = "DAUGHTER",
	"BROTHER" = "BROTHER",
	"SISTER" = "SISTER",
}

type MyInfoRelationshipTypeCodeDesc = `${ MyInfoRelationshipTypeCodeMapping }`;

export namespace MyInfoRelationshipTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoRelationshipTypeCode>(MyInfoRelationshipTypeCode),
		values: EnumUtils.valuesFunc<MyInfoRelationshipTypeCode>(MyInfoRelationshipTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoRelationshipTypeCode>(MyInfoRelationshipTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoRelationshipTypeCode>(MyInfoRelationshipTypeCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoRelationshipTypeCode, MyInfoRelationshipTypeCodeDesc>(MyInfoRelationshipTypeCode, MyInfoRelationshipTypeCodeMapping),
	};
}
