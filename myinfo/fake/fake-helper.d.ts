import { myInfoDomain } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
declare enum GVS {
    true = "true",
    false = "false"
}
export interface MockParams {
    archetype: ProfileArchetype;
    marital?: "1" | "2" | "3" | "5";
    marriagedate?: string;
    marriagecertno?: string;
    countryofmarriage?: string;
    residentialstatus?: "A" | "C" | "P" | "U" | "N";
    occupation?: string;
    occupationfreeform?: string;
    dob?: string;
    gstvyear?: number;
    gvs?: GVS;
    merdekageneligible?: boolean;
    merdekagenquantum?: number;
    merdekagenmessagecode?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
}
declare type PersonBasic = myInfoDomain.Components.Schemas.PersonBasic;
export interface IFakeMyInfoHelper {
    getPersonBasic: (mockParams: MockParams) => PersonBasic;
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
    getPersonBasic: (mockParams: MockParams) => myInfoDomain.Components.Schemas.PersonBasic;
}
export {};
