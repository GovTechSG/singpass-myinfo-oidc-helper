import { AxiosResponse } from "axios";
import { MyInfoComponents } from "../domain";
import { ProfileStatus } from "../domain/profilestatus-domain";
export type EnvType = "test" | "sandbox" | "prod";
export interface IMyInfoHelper {
    getPersonBasic: <K extends keyof MyInfoComponents.Schemas.PersonBasic>(uinfin: string, attributes: string[]) => Promise<Pick<MyInfoComponents.Schemas.PersonBasic, K>>;
    getPerson: <K extends keyof MyInfoComponents.Schemas.Person>(uinfin: string, attributes: string[]) => Promise<Pick<MyInfoComponents.Schemas.Person, K>>;
}
export interface IMyInfoRequest {
    get: (uri: string, params?: {
        [key: string]: any;
    }, accessToken?: string) => Promise<AxiosResponse>;
    post: (uri: string, params: {
        [key: string]: any;
    }) => Promise<AxiosResponse>;
}
export interface MyInfoHelperConstructor {
    clientID: string;
    clientSecret?: string;
    environment: EnvType;
    singpassEserviceID: string;
    keyToDecryptJWE: string;
    certToVerifyJWS: string;
    privateKeyToSignRequest: string;
    redirectUri?: string;
    privateKeyPassword?: string;
    overrideAuthorizationUrl?: string;
    overrideTokenUrl?: string;
    overridePersonUrl?: string;
    overridePersonBasicUrl?: string;
    overrideProfileStatusUrl?: string;
    proxyTokenUrl?: string;
    proxyPersonUrl?: string;
    proxyPersonBasicUrl?: string;
    proxyProfileStatusUrl?: string;
    /**
     * Headers already added by the client:
     * Authorization, Cache-Control, Content-Type (POST only)
     */
    additionalHeaders?: Record<string, string>;
}
export interface TokenResponse {
    access_token: string;
    id_token: string;
    token_type: string;
}
export interface AccessTokenPayload {
    tokenName: string;
    sub: string;
    scope: string;
    nbf: string;
    iss: string;
    expires_in: string;
    iat: string;
    exp: string;
    realm: string;
    aud: string;
    jti: string;
    token_type: string;
    authGrantId: string;
    auditTrackingId: string;
}
export declare class MyInfoHelper implements IMyInfoHelper {
    private myInfoRequest;
    private readonly clientID;
    private readonly clientSecret;
    private readonly singpassEserviceID;
    private readonly keyToDecryptJWE;
    private readonly certToVerifyJWS;
    private readonly authorizationUrl;
    private readonly tokenUrl;
    private readonly personUrl;
    private readonly personBasicUrl;
    private readonly profileStatusUrl;
    private readonly proxyTokenUrl;
    private readonly proxyPersonUrl;
    private readonly proxyPersonBasicUrl;
    private readonly proxyProfileStatusUrl;
    private readonly additionalHeaders?;
    private readonly redirectUri;
    constructor(props: MyInfoHelperConstructor);
    constructAuthorizationUrl: (state: string, purpose: string, attributes: string[]) => string;
    /**
     * Obtain token for person data
     */
    getToken: (authCode: string, state?: string) => Promise<TokenResponse>;
    /**
     * Obtain V3 person basic data using uinfin.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPersonBasic will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPersonBasic returns an object looking like { name, email }
     */
    getPersonBasic: <K extends keyof MyInfoComponents.Schemas.PersonBasic>(uinfin: string, attributes: string[]) => Promise<Pick<MyInfoComponents.Schemas.PersonBasic, K>>;
    /**
     * Obtain V3 person data using uinfin and access token.
     * In the generic K, pass in the list of string literal of the attributes you expect to get back.
     * getPerson will return an object with only the properties matching the keys.
     * e.g. when K = "name" | "email", getPerson returns an object looking like { name, email }
     */
    getPerson: <K extends keyof MyInfoComponents.Schemas.Person>(accessToken: string, attributes: string[]) => Promise<Pick<MyInfoComponents.Schemas.Person, K>>;
    /**
     * Obtain myinfo profile status of an individual using uinfin.
     * This is an endpoint that requires permission from the myinfo team.
     * Do approach the team if you need to access it.
     */
    getProfileStatus: (uinfin: string) => Promise<ProfileStatus>;
    /**
     * Verify and decode access token to obtain payload
     */
    getPayloadFromAccessToken(accessToken: string): Promise<AccessTokenPayload>;
    extractUinfinFromAccessToken(accessToken: string): Promise<string>;
    private getUrl;
    private constructUrl;
}
//# sourceMappingURL=myinfo-helper.d.ts.map