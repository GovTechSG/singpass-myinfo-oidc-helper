import { Person } from "../domain";
import { ProfileArchetype } from "./profiles/fake-profile";
export interface MockParams {
    archetype: ProfileArchetype;
    marital?: string;
    marriagedate?: string;
    marriagecertno?: string;
    countryofmarriage?: string;
    occupation?: string;
    occupationfreeform?: string;
    dob?: string;
}
export interface IFakeMyInfoHelper {
    getPersonData: (mockParams: MockParams) => Person;
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
    getPersonData: (mockParams: MockParams) => Person;
}
