/* eslint-disable */
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-22
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "src/types/EnumUtils";

export namespace MyInfoMultipleTable {
	export enum Cpfdependantprotectionscheme {
		"GREAT_EASTERN_LIFE_INSURANCE" = "9GEL",
		"NTUC_INCOME" = "9NTU",
	}

	enum CpfdependantprotectionschemeMapping {
		"GREAT_EASTERN_LIFE_INSURANCE" = "GREAT EASTERN LIFE INSURANCE",
		"NTUC_INCOME" = "NTUC INCOME",
	}

	type CpfdependantprotectionschemeDesc = `${CpfdependantprotectionschemeMapping}`;

	export enum Cpfmedishieldlife {
		"NTUC_INCOME" = "NTU",
		"AIA" = "AIA",
		"GREAT_EASTERN" = "GEL",
		"PRUDENTIAL" = "PRU",
		"SINGLIFE" = "AVI",
		"AXA" = "AXA",
		"RAFFLES_HEALTH_INSURANCE" = "RHI",
	}

	enum CpfmedishieldlifeMapping {
		"NTUC_INCOME" = "NTUC INCOME",
		"AIA" = "AIA",
		"GREAT_EASTERN" = "GREAT EASTERN",
		"PRUDENTIAL" = "PRUDENTIAL",
		"SINGLIFE" = "SINGLIFE",
		"AXA" = "AXA",
		"RAFFLES_HEALTH_INSURANCE" = "RAFFLES HEALTH INSURANCE",
	}

	type CpfmedishieldlifeDesc = `${CpfmedishieldlifeMapping}`;

	export namespace Cpfdependantprotectionscheme {
		export const fn = {
			keys: EnumUtils.keysFunc<Cpfdependantprotectionscheme>(Cpfdependantprotectionscheme),
			values: EnumUtils.valuesFunc<Cpfdependantprotectionscheme>(Cpfdependantprotectionscheme),
			toEnumKey: EnumUtils.toEnumKeyFunc<Cpfdependantprotectionscheme>(Cpfdependantprotectionscheme),
			toEnumValue: EnumUtils.toEnumValueFunc<Cpfdependantprotectionscheme>(Cpfdependantprotectionscheme),
			toEnumDesc: EnumUtils.toEnumDescFunc<Cpfdependantprotectionscheme, CpfdependantprotectionschemeDesc>(
				Cpfdependantprotectionscheme,
				CpfdependantprotectionschemeMapping,
			),
		};
	}
	export namespace Cpfmedishieldlife {
		export const fn = {
			keys: EnumUtils.keysFunc<Cpfmedishieldlife>(Cpfmedishieldlife),
			values: EnumUtils.valuesFunc<Cpfmedishieldlife>(Cpfmedishieldlife),
			toEnumKey: EnumUtils.toEnumKeyFunc<Cpfmedishieldlife>(Cpfmedishieldlife),
			toEnumValue: EnumUtils.toEnumValueFunc<Cpfmedishieldlife>(Cpfmedishieldlife),
			toEnumDesc: EnumUtils.toEnumDescFunc<Cpfmedishieldlife, CpfmedishieldlifeDesc>(
				Cpfmedishieldlife,
				CpfmedishieldlifeMapping,
			),
		};
	}
}
