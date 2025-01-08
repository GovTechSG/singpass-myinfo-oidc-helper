export declare namespace MyInfoInsurerCode {
    enum Cpfdependantprotectionscheme {
        "GREAT_EASTERN_LIFE_INSURANCE" = "9GEL",
        "INCOME_INSURANCE" = "9NTU"
    }
    enum Cpfmedishieldlife {
        "INCOME_INSURANCE" = "NTU",
        "AIA" = "AIA",
        "GREAT_EASTERN" = "GEL",
        "PRUDENTIAL" = "PRU",
        "SINGLIFE" = "AVI",
        "HSBC_LIFE" = "AXA",
        "RAFFLES_HEALTH_INSURANCE" = "RHI"
    }
    namespace Cpfdependantprotectionscheme {
        const fn: {
            keys: () => string[];
            values: () => Cpfdependantprotectionscheme[];
            toEnumKey: (value: Cpfdependantprotectionscheme) => string;
            toEnumValue: (value: string | number) => Cpfdependantprotectionscheme;
            toEnumDesc: (value: Cpfdependantprotectionscheme) => "GREAT EASTERN LIFE INSURANCE" | "INCOME INSURANCE";
        };
    }
    namespace Cpfmedishieldlife {
        const fn: {
            keys: () => string[];
            values: () => Cpfmedishieldlife[];
            toEnumKey: (value: Cpfmedishieldlife) => string;
            toEnumValue: (value: string | number) => Cpfmedishieldlife;
            toEnumDesc: (value: Cpfmedishieldlife) => "INCOME INSURANCE" | "AIA" | "GREAT EASTERN" | "PRUDENTIAL" | "SINGLIFE" | "HSBC LIFE" | "RAFFLES HEALTH INSURANCE";
        };
    }
}
//# sourceMappingURL=myinfo-insurer-code.d.ts.map