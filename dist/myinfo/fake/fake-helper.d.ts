import { MyInfoComponents, MyInfoCountryCode, MyInfoDrivingLicenceValidityCode, MyInfoHDBTypeCode, MyInfoHousingTypeCode, MyInfoLifeStatusCode, MyInfoMaritialStatusCode, MyInfoMerdekaGenerationMessageCode, MyInfoOccupationCode, MyInfoRaceCode, MyInfoResidentialCode, MyInfoSexCode, MyInfoVehicleStatus } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
declare enum GVS {
    true = "true",
    false = "false"
}
export declare enum OverrideMode {
    partial = "partial",
    full = "full",
    appendToExisting = "append"
}
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
export interface MockParams {
    archetype: ProfileArchetype;
    userdisplayname?: string;
    race?: MyInfoRaceCode;
    marital?: MyInfoMaritialStatusCode;
    marriagedate?: string;
    divorcedate?: string;
    marriagecertno?: string;
    countryofmarriage?: MyInfoCountryCode;
    childrenbirthrecords?: ChildrenBirthRecord[];
    childrenoverridemode?: OverrideMode;
    residentialstatus?: MyInfoResidentialCode;
    occupation?: MyInfoOccupationCode;
    occupationfreeform?: string;
    dob?: string;
    gstvyear?: string;
    gvs?: GVS;
    merdekageneligible?: boolean;
    merdekagenquantum?: number;
    merdekagenmessagecode?: MyInfoMerdekaGenerationMessageCode;
    hdbtype?: MyInfoHDBTypeCode;
    housingtype?: MyInfoHousingTypeCode;
    drivingqdlvalidity?: MyInfoDrivingLicenceValidityCode;
    vehiclestatus?: MyInfoVehicleStatus;
    employment?: string;
}
export interface MockFinanceParams {
    cpfcontributionhistoryoverridemode?: OverrideMode;
    cpfcontributions?: CpfContributionHistory[];
    cpfbalances?: CpfBalance;
    noabasic?: NoaBasic;
}
export interface DefaultParams {
    lastupdated: string;
    classification: "C";
    source: '1';
    unavailable: boolean;
}
type MockParamsPerson = MockParams & MockFinanceParams;
type PersonBasic = MyInfoComponents.Schemas.PersonBasic;
type Person = MyInfoComponents.Schemas.Person;
export interface IFakeMyInfoHelper {
    getPersonBasic: (mockParams: MockParams) => PersonBasic;
    getPerson: (mockParams: MockParamsPerson) => Person;
}
export declare class FakeMyInfoHelper implements IFakeMyInfoHelper {
    private readonly attributes?;
    /**
     * @param attributes attributes to return in the MyInfoPerson in getPersonData
     */
    constructor(attributes?: ReadonlyArray<string>);
    /**
     * fake getPersonData
     * @param input the mock profile parameters.
     * See FakeMyInfoPersonArchetypes for the actual person.
     */
    getPersonInfo: (mockParams: MockParams) => Person;
    getPersonBasic: (mockParams: MockParams) => PersonBasic;
    getPerson: (mockParams: MockParamsPerson) => Person;
    private checkIsSingaporeanOrPr;
}
export declare function transformChildBirthRecord(childbirthrecord: ChildrenBirthRecord, index: number): MyInfoComponents.Schemas.Childrenbirthrecords;
export declare function transformItems(item: any): {};
export declare function transformItemsWithAdditionalMock(item: any, defaultMockParams?: boolean): {
    source: string;
    classification: string;
    lastupdated: string;
};
export {};
//# sourceMappingURL=fake-helper.d.ts.map