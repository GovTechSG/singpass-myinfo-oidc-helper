import { Person } from "../domain";
import { IMyInfoHelper } from "./index";
export interface MyInfoHelperConstructor {
    attributes: ReadonlyArray<string>;
    clientID: string;
    personBasicURL: string;
    singpassEserviceID: string;
    keyToDecryptJWE: string;
    apexSigningURL: string;
    apexPrivateCert: string;
    apexPrivateCertPass: string;
}
export declare class MyInfoHelper implements IMyInfoHelper {
    private myInfoRequest;
    private readonly attributes;
    private readonly clientID;
    private readonly personBasicURL;
    private readonly singpassEserviceID;
    private readonly keyToDecryptJWE;
    constructor(props: MyInfoHelperConstructor);
    /**
     * Obtain person data using uinfin.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPersonData will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPersonData returns an object looking like { name, email }
     */
    getPersonData: <K extends "name" | "hanyupinyinname" | "aliasname" | "hanyupinyinaliasname" | "marriedname" | "sex" | "race" | "secondaryrace" | "dialect" | "nationality" | "dob" | "birthcountry" | "residentialstatus" | "passportnumber" | "passportexpirydate" | "regadd" | "mailadd" | "billadd" | "housingtype" | "hdbtype" | "ownerprivate" | "email" | "homeno" | "mobileno" | "marital" | "marriagecertno" | "countryofmarriage" | "marriagedate" | "divorcedate" | "childrenbirthrecords" | "edulevel" | "gradyear" | "schoolname" | "occupation" | "employment" | "workpassstatus" | "workpassexpirydate" | "householdincome" | "assessableincome" | "assessyear" | "cpfcontributions" | "cpfbalances" | "vehno">(uinfin: string) => Promise<Pick<Person, K>>;
}
