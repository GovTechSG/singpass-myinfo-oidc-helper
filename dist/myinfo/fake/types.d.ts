import { MyInfoComponents, MyInfoCountryPlaceCode, MyInfoDrivingLicenceValidityCode, MyInfoHDBTypeCode, MyInfoHousingTypeCode, MyInfoLifeStatusCode, MyInfoMaritalStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode, MyInfoVehicleStatus } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
export declare enum GVS {
    true = "true",
    false = "false"
}
export declare enum OverrideMode {
    partial = "partial",
    full = "full",
    appendToExisting = "append"
}
type AddressSgKeys = keyof MyInfoComponents.Schemas.AddressSG;
type TAddressSG = {
    type: "SG";
} & {
    [key in Exclude<AddressSgKeys, "country">]?: string;
};
type AddressUnformattedKeys = keyof MyInfoComponents.Schemas.AddressUnformatted;
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
    gvs?: GVS;
    merdekageneligible?: boolean;
    merdekagenquantum?: number;
    merdekagenmessagecode?: MyInfoMerdekaGenerationMessageCode;
    regadd?: RegAdd;
    hdbtype?: MyInfoHDBTypeCode;
    housingtype?: MyInfoHousingTypeCode;
    drivingqdlvalidity?: MyInfoDrivingLicenceValidityCode;
    vehicles?: VehicleDetails[];
    employment?: string;
}
export interface MockFinanceParams {
    cpfcontributionhistoryoverridemode?: OverrideMode;
    cpfcontributions?: CpfContributionHistory[];
    cpfbalances?: CpfBalance;
    noabasic?: NoaBasic;
}
export type MockParamsPerson = MockParams & MockFinanceParams;
export type NoaBasicExtension = MyInfoComponents.Schemas.NOABasic & MyInfoComponents.Schemas.DataFieldProperties;
export type CpfBalanceExtension = MyInfoComponents.Schemas.Cpfbalances & MyInfoComponents.Schemas.DataFieldProperties;
export {};
//# sourceMappingURL=types.d.ts.map