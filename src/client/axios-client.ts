import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as _ from "lodash";
import * as ProxyAgent from "proxy-agent";
import { redactUinfin } from "../util/RedactorUtil";

export const createClient = (requestConfig: AxiosRequestConfig = {}): AxiosInstance => {
	// Note: Due to axios not being able to automatically pick up proxy env vars, we have to manually define a custom proxy agent
	// Axios 0.19.0 has not fixed this issue yet, so we are using this workaround: https://github.com/axios/axios/issues/925#issuecomment-419352052
	const proxyConfig = getProxyConfig();
	if (!!proxyConfig) {
		const proxyAgent = new ProxyAgent(proxyConfig);
		requestConfig = {
			httpAgent: proxyAgent,
			httpsAgent: proxyAgent,
			proxy: false,
			...requestConfig,
		};
	}

	const instance = axios.create({
		...requestConfig,
	});

	addRequestLogs(instance);
	addResponseLogs(instance);
	return instance;
};

const getProxyConfig = (): string => {
	return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
};

const addRequestLogs = (instance: AxiosInstance) => {
	instance.interceptors.request.use((request) => {
		if (!!request) {
			log("Requesting", {
				method: request.method,
				url: redactUinfin(request.url)
			});
		}
		return request;
	}, (error) => {
		log(`Error occurred while making a request`, {
			name: error?.name,
			message: redactUinfin(error?.message)
		});
		return Promise.reject(error);
	});
};

const addResponseLogs = (instance: AxiosInstance) => {
	instance.interceptors.response.use((response) => {
		if (!!response) {
			log(`Responded`, {
				method: response.config.method,
				url: redactUinfin(response.config.url)
			});
		}
		return response;
	}, (error) => {
		const response: AxiosResponse = error?.response;
		if (!!response) {
			log(`Error occurred while responding to request`, {
				method: response.config.method,
				url: redactUinfin(response.config.url),
				status: response.status,
				message: redactUinfin(response.data),
			});
		} else {
			log(`Error occurred while responding to request`, {
				name: error?.name,
				message: redactUinfin(error?.message)
			});
		}
		return Promise.reject(error);
	});
};

const log = (message?: any, ...optionalParams: any[]) => {
	// tslint:disable-next-line:no-console
	console.log(message, ...optionalParams);
};
