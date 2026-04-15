export declare enum MyInfoRelationshipTypeCode {
    "HUSBAND" = "REL101",
    "WIFE" = "REL102",
    "MOTHER" = "REL201",
    "FATHER" = "REL202",
    "SON" = "REL401",
    "DAUGHTER" = "REL402",
    "BROTHER" = "REL601",
    "SISTER" = "REL602"
}
export declare namespace MyInfoRelationshipTypeCode {
    const fn: {
        keys: () => string[];
        values: () => MyInfoRelationshipTypeCode[];
        toEnumKey: (value: MyInfoRelationshipTypeCode) => string;
        toEnumValue: (value: string | number) => MyInfoRelationshipTypeCode;
        toEnumDesc: (value: MyInfoRelationshipTypeCode) => "HUSBAND" | "WIFE" | "MOTHER" | "FATHER" | "SON" | "DAUGHTER" | "BROTHER" | "SISTER";
    };
}
//# sourceMappingURL=myinfo-relationship-type-code.d.ts.map