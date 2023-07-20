import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ProxyAgent } from 'proxy-agent';
import { logger } from "../util/Logger";
import { redactUinfin } from "../util/RedactorUtil";

export const createClient = (requestConfig: AxiosRequestConfig = {}): AxiosInstance => {
	// Note: Due to axios not being able to automatically pick up proxy env vars, we have to manually define a custom proxy agent
	// Axios 0.19.0 has not fixed this issue yet, so we are using this workaround: https://github.com/axios/axios/issues/925#issuecomment-419352052
	const proxyConfig = getProxyConfig();
	if (!!proxyConfig) {
		const proxyAgent = new ProxyAgent({host: proxyConfig});
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
			logger.log("Requesting", {
				method: request.method,
				url: redactUinfin(request.url)
			});
		}
		return request;
	}, (error) => {
		logger.log(`Error occurred while making a request`, error);
		return Promise.reject(error);
	});
};

const addResponseLogs = (instance: AxiosInstance) => {
	instance.interceptors.response.use((response) => {
		if (!!response) {
			logger.log(`Responded`, {
				method: response.config.method,
				url: redactUinfin(response.config.url)
			});
		}
		return response;
	}, (error) => {
		logger.log(`Error occurred while responding to request`, error);
		return Promise.reject(error);
	});
};
