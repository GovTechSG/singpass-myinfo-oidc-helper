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
    get(uri: string, queryParams?: {
        [key: string]: any;
    }, accessToken?: string): Promise<AxiosResponse>;
    post(uri: string, queryParams: {
        [key: string]: any;
    }): Promise<AxiosResponse>;
}
//# sourceMappingURL=myinfo-request.d.ts.map