import { myInfoDomain } from "../domain";
import { ProfileStatus } from "../domain/profilestatus-domain";
import { IMyInfoHelper } from "./index";
export declare type EnvType = "test" | "sandbox" | "prod";
export interface MyInfoHelperConstructor {
    attributes: string[];
    clientID: string;
    environment: EnvType;
    singpassEserviceID: string;
    keyToDecryptJWE: string;
    certToVerifyJWS: string;
    privateKeyToSignRequest: string;
    privateKeyPassword?: string;
    overridePersonBasicUrl?: string;
    overrideProfileStatusUrl?: string;
}
export declare class MyInfoHelper implements IMyInfoHelper {
    private myInfoRequest;
    private readonly attributes;
    private readonly clientID;
    private readonly singpassEserviceID;
    private readonly keyToDecryptJWE;
    private readonly certToVerifyJWS;
    private readonly personBasicUrl;
    private readonly profileStatusUrl;
    constructor(props: MyInfoHelperConstructor);
    /**
     * Obtain V3 person data using uinfin.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPersonBasicV3 will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPersonBasicV3 returns an object looking like { name, email }
     */
    getPersonBasic: <K extends keyof myInfoDomain.Components.Schemas.PersonBasic>(uinfin: string) => Promise<Pick<myInfoDomain.Components.Schemas.PersonBasic, K>>;
    /**
     * Obtain myinfo profile status of an individual using uinfin.
     * This is an endpoint that requires permission from the myinfo team.
     * Do approach the team if you need to access it.
     */
    getProfileStatus: (uinfin: string) => Promise<ProfileStatus>;
    private getUrl;
    private constructUrl;
}
//# sourceMappingURL=myinfo-helper.d.ts.map