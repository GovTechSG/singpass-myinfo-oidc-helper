import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as nonceFactory from "nonce";
import * as querystringUtil from "querystring";
import { createClient } from "src/client/axios-client";
import { SigningUtil } from "src/util";
import { URLSearchParams } from "url";

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

	public async get<T>(
		uri: string,
		queryParams?: { [key: string]: any },
		accessToken?: string,
		proxyUrl?: string,

		/**
		 * Headers already added by this method:
		 * Authorization, Cache-Control
		 */
		additionalHeaders: Record<string, string> = {},
	): Promise<AxiosResponse<T>> {
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
			headers: {
				...additionalHeaders,
				...headers,
				Authorization: accessToken ? `${authHeader},Bearer ${accessToken}` : authHeader,
			},
		};
		const url = proxyUrl || uri;
		const response = await this.axiosClient.get<T>(url, requestConfig);
		return response;
	}

	public async post<T>(
		uri: string,
		params: { [key: string]: any },
		proxyUrl?: string,

		/**
		 * Headers already added by this method:
		 * Authorization, Content-Type, Cache-Control
		 */
		additionalHeaders: Record<string, string> = {},
	): Promise<AxiosResponse<T>> {
		const cacheControl = "no-cache";
		const contentType = "application/x-www-form-urlencoded";
		const headers = querystringUtil.parse(`Content-Type=${contentType}&Cache-Control=${cacheControl}`);

		const nonce = nonceFactory()();
		const timestamp = new Date().getTime();

		const authHeader = SigningUtil.generateMyInfoAuthorizationHeader(
			uri,
			params,
			SigningUtil.HttpMethod.POST,
			this.appId,
			this.privateKeyContent,
			nonce,
			timestamp,
			this.privateKeyPassword,
		);

		const requestConfig: AxiosRequestConfig = {
			headers: {
				...additionalHeaders,
				...headers,
				Authorization: authHeader,
			},
		};

		const urlSeachParams = new URLSearchParams(params);
		const url = proxyUrl || uri;

		const response = await this.axiosClient.post<T>(url, urlSeachParams.toString(), requestConfig);
		return response;
	}
}
