import { MyInfoComponents } from "../domain";
import { ChildrenBirthRecord, MockParams, MockParamsPerson } from "./types";
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