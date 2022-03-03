export declare enum MyInfoLifeStatusCode {
    "ALIVE" = "A",
    "DECEASED" = "D"
}
export declare namespace MyInfoLifeStatusCode {
    const fn: {
        keys: () => string[];
        values: () => MyInfoLifeStatusCode[];
        toEnumKey: (value: MyInfoLifeStatusCode) => string;
        toEnumValue: (value: string | number) => MyInfoLifeStatusCode;
        toEnumDesc: (value: MyInfoLifeStatusCode) => "ALIVE" | "DECEASED";
    };
}
//# sourceMappingURL=myinfo-life-status-code.d.ts.map