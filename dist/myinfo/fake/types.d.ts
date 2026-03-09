import { MyInfoComponentsV4, MyInfoCountryPlaceCode, MyInfoDrivingLicenceValidityCode, MyInfoHDBTypeCode, MyInfoHousingTypeCode, MyInfoLifeStatusCode, MyInfoMaritalStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoPassTypeCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode, MyInfoVehicleStatus } from "../../types";
import { ProfileArchetype } from "./profiles/fake-profile";
export declare enum OverrideMode {
    partial = "partial",
    full = "full",
    appendToExisting = "append"
}
type AddressSgKeys = keyof MyInfoComponentsV4.Schemas.AddressSG;
type TAddressSG = {
    type: "SG";
} & {
    [key in Exclude<AddressSgKeys, "country">]?: string;
};
type AddressUnformattedKeys = keyof MyInfoComponentsV4.Schemas.AddressUnformatted;
type TAddressUnformatted = {
    type: "UNFORMATTED";
} & {
    [key in AddressUnformattedKeys]?: string;
};
export type UniqueAddressSgKeys = Exclude<AddressSgKeys, AddressUnformattedKeys>;
export type UniqueAddressUnformattedKeys = Exclude<AddressUnformattedKeys, AddressSgKeys>;
export type RegAdd = TAddressSG | TAddressUnformatted;
export interface ChildrenBirthRecord {
    birthcertno: string;
    name?: string;
    dob?: string;
    tob?: string;
    sex?: MyInfoSexCode;
    lifestatus?: MyInfoLifeStatusCode;
    race?: MyInfoRaceCode;
    secondaryrace?: MyInfoRaceCode;
}
export interface CpfContributionHistory {
    date: string;
    amount: number;
    month: string;
    employer: string;
}
export interface CpfBalance {
    ma: number;
    oa: number;
    sa: number;
    ra: number;
}
export interface NoaBasic {
    amount: number;
    yearofassessment: string;
}
export interface VehicleDetails {
    vehicleno: string;
    iulabelno: string;
    status: MyInfoVehicleStatus;
}
export interface MockParams {
    archetype: ProfileArchetype;
    userdisplayname?: string;
    race?: MyInfoRaceCode;
    marital?: MyInfoMaritalStatusCode;
    marriagedate?: string;
    divorcedate?: string;
    marriagecertno?: string;
    countryofmarriage?: MyInfoCountryPlaceCode;
    childrenbirthrecords?: ChildrenBirthRecord[];
    childrenoverridemode?: OverrideMode;
    residentialstatus?: MyInfoResidentialCode;
    occupationfreeform?: string;
    dob?: string;
    gstvyear?: string;
    merdekageneligible?: boolean;
    merdekagenquantum?: number;
    merdekagenmessagecode?: MyInfoMerdekaGenerationMessageCode;
    regadd?: RegAdd;
    hdbtype?: MyInfoHDBTypeCode;
    housingtype?: MyInfoHousingTypeCode;
    drivingqdlvalidity?: MyInfoDrivingLicenceValidityCode;
    vehicles?: VehicleDetails[];
    employment?: string;
    passtype?: MyInfoPassTypeCode;
}
export interface MockFinanceParams {
    cpfcontributionhistoryoverridemode?: OverrideMode;
    cpfcontributions?: CpfContributionHistory[];
    cpfbalances?: CpfBalance;
    noabasic?: NoaBasic;
}
export type MockParamsPerson = MockParams & MockFinanceParams;
export type NoaBasicExtension = MyInfoComponentsV4.Schemas.NOABasic & MyInfoComponentsV4.Schemas.DataFieldProperties;
export type CpfBalanceExtension = MyInfoComponentsV4.Schemas.Cpfbalances & MyInfoComponentsV4.Schemas.DataFieldProperties;
export {};
//# sourceMappingURL=types.d.ts.map