import { EnumUtils } from "../../../../util/EnumUtils";

export enum MyinfoPioneerGenerationMessageCode {
	"NON_PG" = "1",
	"ALL_OK" = "2",
	"NEED_ADDRESS_UPDATE" = "3",
	"NEED_MEDISAVE_TOPUP" = "4",
	"CALL_TO_RECEIVE" = "5",
	"OPT_OUT" = "6",
	"NIL_STATUS" = "7",
}

export namespace MyinfoPioneerGenerationMessageCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoPioneerGenerationMessageCode>(MyinfoPioneerGenerationMessageCode),
		values: EnumUtils.valuesFunc<MyinfoPioneerGenerationMessageCode>(MyinfoPioneerGenerationMessageCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoPioneerGenerationMessageCode>(MyinfoPioneerGenerationMessageCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoPioneerGenerationMessageCode>(MyinfoPioneerGenerationMessageCode),
	};
}
