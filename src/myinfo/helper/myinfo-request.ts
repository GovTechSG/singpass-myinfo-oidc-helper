import * as nonceFactory from "nonce";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { SigningUtil } from "../../util";
import { createClient } from "../../client";
import * as querystringUtil from "querystring";

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
		accessToken?: string,
	): Promise<AxiosResponse> {
		const cacheControl = "no-cache";
		const headers = querystringUtil.parse(`Cache-Control=${cacheControl}`);

		const nonce = nonceFactory()();
		const timestamp = new Date().getTime();

		const authHeader = SigningUtil.generateMyInfoAuthorizationHeader(
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
			paramsSerializer: querystringUtil.stringify,
			headers: {
				...headers,
				Authorization: accessToken ? `${authHeader},Bearer ${accessToken}` : authHeader,
			},
		};
		const response = await this.axiosClient.get(uri, requestConfig);
		return response;
	}

	public async post(
		uri: string,
		queryParams: { [key: string]: any }
	): Promise<AxiosResponse> {
		const cacheControl = "no-cache";
		const contentType = "application/x-www-form-urlencoded";
		const headers = querystringUtil.parse(`Content-Type=${contentType}&Cache-Control=${cacheControl}`);

		const nonce = nonceFactory()();
		const timestamp = new Date().getTime();

		const authHeader = SigningUtil.generateMyInfoAuthorizationHeader(
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
			paramsSerializer: querystringUtil.stringify,
			headers: {
				...headers,
				Authorization: authHeader,
			},
		};
		const response = await this.axiosClient.post(uri, requestConfig);
		return response;
	}
}
