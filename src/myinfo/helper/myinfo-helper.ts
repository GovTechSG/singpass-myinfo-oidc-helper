import { AxiosResponse } from "axios-https-proxy-fix";
import * as _ from "lodash";

import { MyInfoRequest } from "./myinfo-request";
import { Person } from "../domain";
import { MyInfoRequestConstructor } from "./myinfo-request";
import { decryptJWE } from "../../util/JweUtil";
import { IMyInfoHelper } from "./index";

export interface MyInfoHelperConstructor {
	attributes: ReadonlyArray<string>;
	clientID: string;
	personBasicURL: string;
	singpassEserviceID: string;
	keyToDecryptJWE: string;
	apexSigningURL: string;
	apexPrivateCert: string;
	apexPrivateCertPass: string;
}

export class MyInfoHelper implements IMyInfoHelper {

	private myInfoRequest: MyInfoRequest;

	private readonly attributes: ReadonlyArray<string>;
	private readonly clientID: string;
	private readonly personBasicURL: string;
	private readonly singpassEserviceID: string;
	private readonly keyToDecryptJWE: string;

	public constructor(props: MyInfoHelperConstructor) {
		if (_.isEmpty(props.attributes)) {
			throw new Error("Attribute list must contain values");
		}
		this.attributes = props.attributes;
		this.clientID = props.clientID;
		this.personBasicURL = props.personBasicURL;
		this.singpassEserviceID = props.singpassEserviceID;
		this.keyToDecryptJWE = props.keyToDecryptJWE;

		const requestProps: MyInfoRequestConstructor = {
			realm: props.apexSigningURL,
			appId: props.clientID,
			privateKeyContent: props.apexPrivateCert,
			privateKeyPassword: props.apexPrivateCertPass,
		};
		this.myInfoRequest = new MyInfoRequest(requestProps);
	}

	/**
	 * Obtain person data using uinfin.
	 * In the generic K, pass in the list of string literal of the attributes you expect to get back.
	 * getPersonData will return an object with only the properties matching the keys.
	 * e.g. when K = "name" | "email", getPersonData returns an object looking like { name, email }
	 */
	public getPersonData = async<K extends keyof Person>(uinfin: string): Promise<Pick<Person, K>> => {
		const url = `${this.personBasicURL}/${uinfin}`;
		const params = {
			client_id: this.clientID,
			singpassEserviceId: this.singpassEserviceID,
			attributes: _.join(this.attributes, ","),
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
			const personData = JSON.parse(jwe.payload.toString());

			if (personData === undefined || personData == null) {
				throw new Error("Person data cannot be null");
			}

			return personData;
		} catch (error) {
			console.error("Error verifying person data from MyInfo", error);
			throw error;
		}
	}
}
