import { AxiosResponse } from "axios-https-proxy-fix";
export interface MyInfoRequestConstructor {
    realm: string;
    appId: string;
    privateKeyContent: string;
    privateKeyPassword: string;
}
/**
 * Expose a request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
export declare class MyInfoRequest {
    private readonly axiosClient;
    private readonly realm;
    private readonly appId;
    private readonly privateKeyContent;
    private readonly privateKeyPassword;
    constructor(props: MyInfoRequestConstructor);
    get(uri: string, params?: {
        [key: string]: any;
    }, bearer?: string): Promise<AxiosResponse>;
    postForm(uri: string, formData?: {
        [key: string]: any;
    }, bearer?: string): Promise<AxiosResponse>;
}
