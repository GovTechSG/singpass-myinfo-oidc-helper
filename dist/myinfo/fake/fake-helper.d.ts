import { ProfileArchetype } from "./profiles/fake-profile";
import { domain } from "../domain";
export interface MockParams {
    archetype: ProfileArchetype;
    marital?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED";
    marriagedate?: string;
    marriagecertno?: string;
    countryofmarriage?: {
        desc: string;
        code: string;
    };
    occupation?: string;
    occupationfreeform?: string;
    dob?: string;
}
declare type PersonBasic = domain.Components.Schemas.PersonBasic;
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
    getPersonBasic: (mockParams: MockParams) => domain.Components.Schemas.PersonBasic;
}
export {};
