import * as request from "request";
import { Components } from "../domain/v3";

export interface IMyInfoHelper {
	getPersonBasic: <K extends keyof Components.Schemas.PersonBasic>(uinfin: string) => Promise<Pick<Components.Schemas.PersonBasic, K>>;
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
