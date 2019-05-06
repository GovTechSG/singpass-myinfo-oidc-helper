import * as request from "request";
import { Person } from "../domain/v2";
import { Components } from "../domain/v3";

export interface IMyInfoHelper {
	getPersonBasicV2: <K extends keyof Person>(uinfin: string) => Promise<Pick<Person, K>>;
	getPersonBasicV3: <K extends keyof Components.Schemas.Person>(uinfin: string) => Promise<Pick<Components.Schemas.Person, K>>;
}

export interface IMyInfoRequest {
	get: (
		uri: string,
		params?: { [key: string]: any },
		bearer?: string,
	) => Promise<request.RequestResponse>;
	postForm: (
		uri: string,
		formData?: { [key: string]: any },
		bearer?: string,
	) => Promise<request.RequestResponse>;
}


export * from "./myinfo-helper";
export * from "./myinfo-request";
