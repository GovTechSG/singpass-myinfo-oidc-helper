import * as nonceFactory from "nonce";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios-https-proxy-fix";
import { SigningUtil } from "../../util";
import { createClient } from "../../client";

export interface MyInfoRequestConstructor {
	appId: string;
	privateKeyToSignRequest: string;
	privateKeyPassword: string;
}

/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
export class MyInfoRequest {
	private readonly axiosClient: AxiosInstance;
	private readonly appId: string;
	private readonly privateKeyContent: string;
	private readonly privateKeyPassword: string;

	constructor(props: MyInfoRequestConstructor) {
		this.axiosClient = createClient({
			timeout: 10000,
		});
		this.appId = props.appId;
		this.privateKeyContent = props.privateKeyToSignRequest;
		this.privateKeyPassword = props.privateKeyPassword;
	}

	public async get(
		uri: string,
		queryParams?: { [key: string]: any },
	): Promise<AxiosResponse> {

		let authHeader: string = "";
		const nonce = nonceFactory()();
		const timestamp = new Date().getTime();

		authHeader = SigningUtil.generateMyInfoAuthorizationHeader(
			uri,
			queryParams,
			SigningUtil.HttpMethod.GET,
			this.appId,
			this.privateKeyContent,
			nonce,
			timestamp,
			this.privateKeyPassword,
		);

		const requestConfig: AxiosRequestConfig = {
			params: queryParams,
			headers: {
				Authorization: authHeader,
			},
		};
		const response = await this.axiosClient.get(uri, requestConfig);
		return response;
	}

}
