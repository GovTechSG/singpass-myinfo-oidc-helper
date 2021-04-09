import { AxiosResponse } from "axios";
import * as _ from "lodash";
import * as request from "request";
import { Logger } from "../../util";
import { SingpassMyInfoError } from "../../util/error/SingpassMyinfoError";
import { decryptJWE, verifyJWS } from "../../util/JweUtil";
import { MyInfoComponents } from "../domain";
import { ProfileStatus } from "../domain/profilestatus-domain";
import { MyInfoRequest, MyInfoRequestConstructor } from "./myinfo-request";

export type EnvType = "test" | "sandbox" | "prod";

export interface IMyInfoHelper {
	getPersonCommon: <K extends keyof MyInfoComponents.Schemas.PersonCommon>(uinfin: string) => Promise<Pick<MyInfoComponents.Schemas.PersonCommon, K>>;
}

export interface IMyInfoRequest {
	get: (
		uri: string,
		params?: { [key: string]: any },
		bearer?: string,
	) => Promise<request.RequestResponse>;
}

export interface MyInfoHelperConstructor {
	attributes: string[];
	clientID: string;
	environment: EnvType;
	singpassEserviceID: string;
	keyToDecryptJWE: string;
	certToVerifyJWS: string;
	privateKeyToSignRequest: string;
	privateKeyPassword?: string;
	overridePersonCommonUrl?: string;
	overrideProfileStatusUrl?: string;
}

const PERSON_COMMON_BASE_URL = "api.myinfo.gov.sg/gov/v3/person";
const PROFILE_STATUS_BASE_URL = "api.myinfo.gov.sg/gov/v3/person/status";

export class MyInfoHelper implements IMyInfoHelper {

	private myInfoRequest: MyInfoRequest;

	private readonly attributes: string[];
	private readonly clientID: string;
	private readonly singpassEserviceID: string;

	private readonly keyToDecryptJWE: string;
	private readonly certToVerifyJWS: string;

	private readonly personCommonUrl: string;
	private readonly profileStatusUrl: string;

	public constructor(props: MyInfoHelperConstructor) {
		if (_.isEmpty(props.attributes)) {
			throw new SingpassMyInfoError("Attribute list must contain values");
		}
		this.attributes = props.attributes;
		this.clientID = props.clientID;
		this.singpassEserviceID = props.singpassEserviceID;
		this.keyToDecryptJWE = props.keyToDecryptJWE;
		this.certToVerifyJWS = props.certToVerifyJWS;
		this.personCommonUrl = this.getUrl(props.overridePersonCommonUrl, PERSON_COMMON_BASE_URL, props.environment);
		this.profileStatusUrl = this.getUrl(props.overrideProfileStatusUrl, PROFILE_STATUS_BASE_URL, props.environment);

		const requestProps: MyInfoRequestConstructor = {
			appId: props.clientID,
			privateKeyToSignRequest: props.privateKeyToSignRequest,
			privateKeyPassword: props.privateKeyPassword,
		};
		this.myInfoRequest = new MyInfoRequest(requestProps);
	}

	/**
	 * Obtain V3 person data using uinfin.
	 * In the generic K, pass in the list of string literal of the attributes you expect to get back.
	 * getPersonCommon will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPersonCommon returns an object looking like { name, email }
	 */
	public getPersonCommon = async<K extends keyof MyInfoComponents.Schemas.PersonCommon>(uinfin: string): Promise<Pick<MyInfoComponents.Schemas.PersonCommon, K>> => {
		const url = `${this.personCommonUrl}/${uinfin}`;
		const params = {
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
			attributes: this.attributes.join(","),
		};

		let response: AxiosResponse;
		try {
			response = await this.myInfoRequest.get(url, params);
		} catch (error) {
			Logger.error("Error requesting for person data (JWE) from MyInfo", error);
			throw error;
		}

		try {
			// Decrypt person data
			const encryptedPersonJWE = response.data;
			const jwe = await decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
			const jws = JSON.parse(jwe.payload.toString());
			const verifiedJws = await verifyJWS(jws, this.certToVerifyJWS);
			const personData = JSON.parse(verifiedJws.payload.toString()) as Pick<MyInfoComponents.Schemas.PersonCommon, K>;

			if (personData == null) {
				throw new SingpassMyInfoError("Person data cannot be null");
			}

			return personData;
		} catch (error) {
			Logger.error("Error verifying person data from MyInfo", error);
			throw error;
		}
	};

	/**
	 * Obtain myinfo profile status of an individual using uinfin.
	 * This is an endpoint that requires permission from the myinfo team.
	 * Do approach the team if you need to access it.
	 */
	public getProfileStatus = async (uinfin: string): Promise<ProfileStatus> => {
		const url = `${this.profileStatusUrl}/${uinfin}`;
		const response = await this.myInfoRequest.get(url);

		if (!!response.data.msg && typeof response.data.msg === "string") {
			return JSON.parse(response.data.msg);
		}
		throw new SingpassMyInfoError("getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected");
	};

	private getUrl(overrideUrl: string, defaultUrl: string, env: EnvType) {
		return (!_.isEmpty(overrideUrl))
			? overrideUrl
			: this.constructUrl(env, defaultUrl);
	}

	private constructUrl(environment: EnvType, baseUrl: string) {
		switch (environment) {
			case "sandbox":
				return `https://sandbox.${baseUrl}`;
			case "prod":
				return `https://${baseUrl}`;
			case "test":
			default:
				return `https://test.${baseUrl}`;
		}
	}
}
