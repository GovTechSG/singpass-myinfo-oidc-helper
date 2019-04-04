import * as request from "request";
import { IMyInfoRequest } from "../helper";
export declare class FakeMyInfoRequest implements IMyInfoRequest {
    constructor();
    get(expectedResponse: any): Promise<request.RequestResponse>;
    postForm(expectedResponse: any): Promise<request.RequestResponse>;
}
