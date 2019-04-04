import * as request from "request";
import { Person } from "../domain";
export interface IMyInfoHelper {
    getPersonData: <K extends keyof Person>(uinfin: string) => Promise<Pick<Person, K>>;
}
export interface IMyInfoRequest {
    get: (uri: string, params?: {
        [key: string]: any;
    }, bearer?: string) => Promise<request.RequestResponse>;
    postForm: (uri: string, formData?: {
        [key: string]: any;
    }, bearer?: string) => Promise<request.RequestResponse>;
}
export * from "./myinfo-helper";
export * from "./myinfo-request";
