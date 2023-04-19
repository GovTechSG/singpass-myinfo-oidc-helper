export declare namespace MyInfoInsurerCode {
    enum Cpfdependantprotectionscheme {
        "GREAT_EASTERN_LIFE_INSURANCE" = "9GEL",
        "NTUC_INCOME" = "9NTU"
    }
    enum Cpfmedishieldlife {
        "NTUC_INCOME" = "NTU",
        "AIA" = "AIA",
        "GREAT_EASTERN" = "GEL",
        "PRUDENTIAL" = "PRU",
        "SINGLIFE" = "AVI",
        "AXA" = "AXA",
        "RAFFLES_HEALTH_INSURANCE" = "RHI"
    }
    namespace Cpfdependantprotectionscheme {
        const fn: {
            keys: () => string[];
            values: () => Cpfdependantprotectionscheme[];
            toEnumKey: (value: Cpfdependantprotectionscheme) => string;
            toEnumValue: (value: string | number) => Cpfdependantprotectionscheme;
            toEnumDesc: (value: Cpfdependantprotectionscheme) => "GREAT EASTERN LIFE INSURANCE" | "NTUC INCOME";
        };
    }
    namespace Cpfmedishieldlife {
        const fn: {
            keys: () => string[];
            values: () => Cpfmedishieldlife[];
            toEnumKey: (value: Cpfmedishieldlife) => string;
            toEnumValue: (value: string | number) => Cpfmedishieldlife;
            toEnumDesc: (value: Cpfmedishieldlife) => "NTUC INCOME" | "AIA" | "AXA" | "GREAT EASTERN" | "PRUDENTIAL" | "SINGLIFE" | "RAFFLES HEALTH INSURANCE";
        };
    }
}
//# sourceMappingURL=myinfo-insurer-code.d.ts.map