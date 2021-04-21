export declare enum MyInfoProfileStatus {
    "NO_PROFILE" = "01",
    "INCOMPLETE_VERIFIED_FIELDS" = "02",
    "COMPLETE_VERIFIED_FIELDS" = "03",
    "UNKNOWN" = "04"
}
export declare namespace MyInfoProfileStatus {
    const fn: {
        keys: () => string[];
        values: () => MyInfoProfileStatus[];
        toEnumKey: (value: MyInfoProfileStatus) => string;
        toEnumValue: (value: string | number) => MyInfoProfileStatus;
        toEnumDesc: (value: MyInfoProfileStatus) => "UNKNOWN" | "NO_PROFILE" | "INCOMPLETE_VERIFIED_FIELDS" | "COMPLETE_VERIFIED_FIELDS";
    };
}
//# sourceMappingURL=myinfo-profile-status.d.ts.map