import { MyInfoComponentsV4, V4PersonBasic } from "../../types";
import { ChildrenBirthRecord, MockParams, MockParamsPerson } from "./types";
type PersonBasic = V4PersonBasic;
type Person = MyInfoComponentsV4.Schemas.Person;
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
     *
     * @param input the mock profile parameters.
     * See FakeMyInfoPersonArchetypes for the actual person.
     */
    getPersonInfo: (mockParams: MockParams) => Person;
    getPersonBasic: (mockParams: MockParams) => PersonBasic;
    getPerson: (mockParams: MockParamsPerson) => Person;
    private checkIsSingaporeanOrPr;
}
export declare function transformChildBirthRecord(childbirthrecord: ChildrenBirthRecord, index: number): MyInfoComponentsV4.Schemas.Childrenbirthrecords;
export declare function transformItems(item: any): {};
export declare function transformItemsWithAdditionalMock(item: any): {
    source: string;
    classification: string;
    lastupdated: string;
};
export {};
//# sourceMappingURL=fake-helper.d.ts.map