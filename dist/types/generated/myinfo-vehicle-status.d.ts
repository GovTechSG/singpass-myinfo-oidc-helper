export declare enum MyInfoVehicleStatus {
    "LIVE" = "1",
    "DEREGISTERED" = "2"
}
export declare namespace MyInfoVehicleStatus {
    const fn: {
        keys: () => string[];
        values: () => MyInfoVehicleStatus[];
        toEnumKey: (value: MyInfoVehicleStatus) => string;
        toEnumValue: (value: string | number) => MyInfoVehicleStatus;
        toEnumDesc: (value: MyInfoVehicleStatus) => "LIVE" | "DE-REGISTERED";
    };
}
//# sourceMappingURL=myinfo-vehicle-status.d.ts.map