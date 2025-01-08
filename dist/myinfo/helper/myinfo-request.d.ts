import { AxiosResponse } from "axios";
export interface MyInfoRequestConstructor {
    appId: string;
    privateKeyToSignRequest: string;
    privateKeyPassword: string;
}
/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
export declare class MyInfoRequest {
    private readonly axiosClient;
    private readonly appId;
    private readonly privateKeyContent;
    private readonly privateKeyPassword;
    constructor(props: MyInfoRequestConstructor);
    get<T>(uri: string, queryParams?: {
        [key: string]: any;
    }, accessToken?: string, proxyUrl?: string, 
    /**
     * Headers already added by this method:
     * Authorization, Cache-Control
     */
    additionalHeaders?: Record<string, string>): Promise<AxiosResponse<T>>;
    post<T>(uri: string, params: {
        [key: string]: any;
    }, proxyUrl?: string, 
    /**
     * Headers already added by this method:
     * Authorization, Content-Type, Cache-Control
     */
    additionalHeaders?: Record<string, string>): Promise<AxiosResponse<T>>;
}
//# sourceMappingURL=myinfo-request.d.ts.map