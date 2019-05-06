import { Person } from "../domain";
import { IMyInfoHelper } from "./index";
import { Components } from "../domain/v3";
export interface MyInfoHelperConstructor {
    attributes: string[];
    clientID: string;
    personBasicURL: string;
    singpassEserviceID: string;
    keyToDecryptJWE: string;
    certToVerifyJWS?: string;
    apexSigningURL?: string;
    apexPrivateCert: string;
    apexPrivateCertPass?: string;
    version?: "v2" | "v3";
}
export declare class MyInfoHelper implements IMyInfoHelper {
    private myInfoRequest;
    private readonly attributes;
    private readonly clientID;
    private readonly personBasicURL;
    private readonly singpassEserviceID;
    private readonly keyToDecryptJWE;
    private readonly certToVerifyJWS;
    constructor(props: MyInfoHelperConstructor);
    /**
     * Obtain V2 person data using uinfin.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPersonBasicV2 will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPersonBasicV2 returns an object looking like { name, email }
     */
    getPersonBasicV2: <K extends "name" | "hanyupinyinname" | "aliasname" | "hanyupinyinaliasname" | "marriedname" | "sex" | "race" | "secondaryrace" | "dialect" | "nationality" | "dob" | "birthcountry" | "residentialstatus" | "passportnumber" | "passportexpirydate" | "regadd" | "mailadd" | "billadd" | "housingtype" | "hdbtype" | "ownerprivate" | "email" | "homeno" | "mobileno" | "marital" | "marriagecertno" | "countryofmarriage" | "marriagedate" | "divorcedate" | "childrenbirthrecords" | "edulevel" | "gradyear" | "schoolname" | "occupation" | "employment" | "workpassstatus" | "workpassexpirydate" | "householdincome" | "assessableincome" | "assessyear" | "cpfcontributions" | "cpfbalances" | "vehno">(uinfin: string) => Promise<Pick<Person, K>>;
    /**
     * Obtain V3 person data using uinfin.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPersonBasicV3 will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPersonBasicV3 returns an object looking like { name, email }
     */
    getPersonBasicV3: <K extends "name" | "hanyupinyinname" | "aliasname" | "hanyupinyinaliasname" | "marriedname" | "sex" | "race" | "secondaryrace" | "dialect" | "nationality" | "dob" | "birthcountry" | "residentialstatus" | "passportnumber" | "passportexpirydate" | "regadd" | "mailadd" | "billadd" | "housingtype" | "hdbtype" | "ownerprivate" | "email" | "homeno" | "mobileno" | "marital" | "marriagecertno" | "countryofmarriage" | "marriagedate" | "divorcedate" | "childrenbirthrecords" | "edulevel" | "gradyear" | "schoolname" | "occupation" | "employment" | "householdincome" | "cpfcontributions" | "cpfbalances" | "uinfin" | "hdbownership" | "sponsoredchildrenrecords" | "passtype" | "passstatus" | "passexpirydate" | "employmentsector" | "noa-basic" | "noa" | "noahistory-basic" | "noahistory" | "vehicles" | "drivinglicence">(uinfin: string) => Promise<Pick<Components.Schemas.Person, K>>;
}
