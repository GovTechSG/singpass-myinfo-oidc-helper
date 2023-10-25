export declare enum ProfileStatusEnum {
    NO_PROFILE = "01",
    INCOMPLETE_VERIFIED_FIELDS = "02",
    COMPLETE_VERIFIED_FIELDS = "03",
    UNKNOWN = "04"
}
export interface ProfileStatus {
    message: string;
    status: ProfileStatusEnum;
}
//# sourceMappingURL=profilestatus-domain.d.ts.map