import { AxiosResponse } from "axios-https-proxy-fix";
import * as _ from "lodash";

import { MyInfoRequest } from "./myinfo-request";
import { MyInfoRequestConstructor } from "./myinfo-request";
import { decryptJWE, verifyJWS } from "../../util/JweUtil";
import { IMyInfoHelper } from "./index";
import { domain } from "../domain";

export interface MyInfoHelperConstructor {
	attributes: string[];
	clientID: string;
	personBasicURL: string;
	singpassEserviceID: string;
	keyToDecryptJWE: string;
	certToVerifyJWS?: string;
	privateKeyToSignRequest: string;
	privateKeyPassword?: string;
}

export class MyInfoHelper implements IMyInfoHelper {

	private myInfoRequest: MyInfoRequest;

	private readonly attributes: string[];
	private readonly clientID: string;
	private readonly personBasicURL: string;
	private readonly singpassEserviceID: string;
	private readonly keyToDecryptJWE: string;
	private readonly certToVerifyJWS: string;

	public constructor(props: MyInfoHelperConstructor) {
		if (_.isEmpty(props.attributes)) {
			throw new Error("Attribute list must contain values");
		}
		this.attributes = props.attributes;
		this.clientID = props.clientID;
		this.personBasicURL = props.personBasicURL;
		this.singpassEserviceID = props.singpassEserviceID;
		this.keyToDecryptJWE = props.keyToDecryptJWE;
		this.certToVerifyJWS = props.certToVerifyJWS;

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
	 * getPersonBasicV3 will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPersonBasicV3 returns an object looking like { name, email }
	 */
	public getPersonBasic = async<K extends keyof domain.Components.Schemas.PersonBasic>(uinfin: string): Promise<Pick<domain.Components.Schemas.PersonBasic, K>> => {
		const url = `${this.personBasicURL}/${uinfin}`;
		const params = {
			client_id: this.clientID,
			sp_esvcId: this.singpassEserviceID,
			attributes: this.attributes.join(","),
		};

		let response: AxiosResponse;
		try {
			response = await this.myInfoRequest.get(url, params);
		} catch (error) {
			console.error("Error requesting for person data (JWE) from MyInfo", error);
			throw error;
		}

		try {
			// Decrypt person data
			const encryptedPersonJWE = response.data;
			const jwe = await decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
			const jws = JSON.parse(jwe.payload.toString());
			const verifiedJws = await verifyJWS(jws, this.certToVerifyJWS);
			const personData = JSON.parse(verifiedJws.payload.toString()) as Pick<domain.Components.Schemas.PersonBasic, K>;

			if (personData == null) {
				throw new Error("Person data cannot be null");
			}

			return personData;
		} catch (error) {
			console.error("Error verifying person data from MyInfo", error);
			throw error;
		}
	}
}
