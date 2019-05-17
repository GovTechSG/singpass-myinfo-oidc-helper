import * as request from "request";
import { myInfoDomain } from "../domain";

export interface IMyInfoHelper {
	getPersonBasic: <K extends keyof myInfoDomain.Components.Schemas.PersonBasic>(uinfin: string) => Promise<Pick<myInfoDomain.Components.Schemas.PersonBasic, K>>;
}

export interface IMyInfoRequest {
	get: (
		uri: string,
		params?: { [key: string]: any },
		bearer?: string,
	) => Promise<request.RequestResponse>;
}


export * from "./myinfo-helper";
export * from "./myinfo-request";
