import { AxiosResponse } from "axios";
import { IMyInfoRequest } from "../helper";
export declare class FakeMyInfoRequest implements IMyInfoRequest {
    constructor();
    get(expectedResponse: any): Promise<AxiosResponse>;
    post(expectedResponse: any): Promise<AxiosResponse>;
}
//# sourceMappingURL=fake-request.d.ts.map