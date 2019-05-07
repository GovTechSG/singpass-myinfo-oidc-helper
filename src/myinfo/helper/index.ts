import * as request from "request";
import { domain } from "../domain";

export interface IMyInfoHelper {
	getPersonBasic: <K extends keyof domain.Components.Schemas.PersonBasic>(uinfin: string) => Promise<Pick<domain.Components.Schemas.PersonBasic, K>>;
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
