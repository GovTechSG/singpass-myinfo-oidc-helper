export declare enum MyInfoResidentialCode {
    "ALIEN" = "A",
    "CITIZEN" = "C",
    "PR" = "P",
    "UNKNOWN" = "U",
    "NOT_APPLICABLE" = "N"
}
export declare namespace MyInfoResidentialCode {
    const fn: {
        keys: () => string[];
        values: () => MyInfoResidentialCode[];
        toEnumKey: (value: MyInfoResidentialCode) => string;
        toEnumValue: (value: string | number) => MyInfoResidentialCode;
        toEnumDesc: (value: MyInfoResidentialCode) => "PR" | "UNKNOWN" | "ALIEN" | "CITIZEN" | "NOT APPLICABLE";
    };
}
//# sourceMappingURL=myinfo-residential-code.d.ts.map