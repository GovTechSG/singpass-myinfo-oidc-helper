export declare enum MyInfoSexCode {
    "FEMALE" = "F",
    "MALE" = "M",
    "UNKNOWN" = "U"
}
export declare namespace MyInfoSexCode {
    const fn: {
        keys: () => string[];
        values: () => MyInfoSexCode[];
        toEnumKey: (value: MyInfoSexCode) => string;
        toEnumValue: (value: string | number) => MyInfoSexCode;
        toEnumDesc: (value: MyInfoSexCode) => "UNKNOWN" | "FEMALE" | "MALE";
    };
}
//# sourceMappingURL=myinfo-sex-code.d.ts.map