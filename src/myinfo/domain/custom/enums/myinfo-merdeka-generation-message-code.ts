import { EnumUtils } from "../../../../util/EnumUtils";

export enum MyinfoMerdekaGenerationMessageCode {
	"NON_MG" = "1",
	"ALL_OK" = "2",
	"NEED_ADDRESS_UPDATE" = "3",
	"NEED_MEDISAVE_TOPUP" = "4",
	"CALL_TO_RECEIVE" = "5",
	"OPT_OUT" = "6",
	"NIL_STATUS" = "7",
}

export namespace MyinfoMerdekaGenerationMessageCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		values: EnumUtils.valuesFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyinfoMerdekaGenerationMessageCode>(MyinfoMerdekaGenerationMessageCode),
	};
}
