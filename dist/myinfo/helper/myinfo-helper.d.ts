import { IMyInfoHelper } from "./index";
import { domain } from "../domain";
export interface MyInfoHelperConstructor {
    attributes: string[];
    clientID: string;
    personBasicURL: string;
    singpassEserviceID: string;
    keyToDecryptJWE: string;
    certToVerifyJWS?: string;
    privateKeyToSignRequest: string;
    privateKeyPassword?: string;
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
     * Obtain V3 person data using uinfin.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPersonBasicV3 will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPersonBasicV3 returns an object looking like { name, email }
     */
    getPersonBasic: <K extends "uinfin" | "name" | "hanyupinyinname" | "aliasname" | "hanyupinyinaliasname" | "marriedname" | "sex" | "race" | "secondaryrace" | "dialect" | "nationality" | "dob" | "birthcountry" | "residentialstatus" | "passportnumber" | "passportexpirydate" | "regadd" | "mailadd" | "billadd" | "housingtype" | "hdbtype" | "hdbownership" | "ownerprivate" | "email" | "homeno" | "mobileno" | "marital" | "marriagecertno" | "countryofmarriage" | "marriagedate" | "divorcedate" | "childrenbirthrecords" | "sponsoredchildrenrecords" | "edulevel" | "gradyear" | "schoolname" | "occupation" | "employment" | "passtype" | "passstatus" | "passexpirydate" | "employmentsector" | "householdincome" | "vehicles" | "drivinglicence">(uinfin: string) => Promise<Pick<domain.Components.Schemas.PersonBasic, K>>;
}
