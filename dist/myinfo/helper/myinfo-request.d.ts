import { AxiosResponse } from "axios-https-proxy-fix";
export interface MyInfoRequestConstructor {
    realm: string;
    appId: string;
    privateKeyContent: string;
    privateKeyPassword: string;
    version: "v2" | "v3";
}
/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
export declare class MyInfoRequest {
    private readonly axiosClient;
    private readonly realm;
    private readonly appId;
    private readonly privateKeyContent;
    private readonly privateKeyPassword;
    private readonly version;
    constructor(props: MyInfoRequestConstructor);
    get(uri: string, queryParams?: {
        [key: string]: any;
    }, bearer?: string): Promise<AxiosResponse>;
    postForm(uri: string, formData?: {
        [key: string]: any;
    }, bearer?: string): Promise<AxiosResponse>;
}
