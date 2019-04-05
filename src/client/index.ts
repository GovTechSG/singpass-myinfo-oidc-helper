import axios, { AxiosInstance, AxiosProxyConfig, AxiosRequestConfig } from "axios-https-proxy-fix";
import * as url from "url";
import { redactNricfinInString } from "../util/RedactorUtil";

export const createClient = (requestConfig: AxiosRequestConfig = {}): AxiosInstance => {
	// Note: Due to axios not being able to automatically pick up proxy env vars
	// correctly, we have manually set the proxy config here.
	// That alone is not enough to resolve the issue as there is a bug with axios
	// where requesting a https endpoint through Nectar's http proxy does not work
	// Hence, we have to use a forked library called axios-https-proxy-fix
	// Hopefully the next stable release of axios (post 0.18.0) will fix this
	// Also to note: tested 0.19.0-beta.1 version of axios and still encountering proxy errors
	const proxyConfig = getProxyConfig();
	requestConfig = proxyConfig ?
		{ proxy: proxyConfig, ...requestConfig }
		: requestConfig;

	const instance = axios.create({
		...requestConfig,
	});

	addRequestLogs(instance);
	addResponseLogs(instance);
	return instance;
};

const getProxyConfig = (): AxiosProxyConfig => {
	const proxyUrl = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;

	if (proxyUrl) {
		const parsed = url.parse(proxyUrl);
		const [username, password] = parsed.auth.split(":");
		return {
			host: parsed.hostname,
			port: parseInt(parsed.port, 10),
			auth: {
				username,
				password,
			},
		};
	}

	return null;
};

const addRequestLogs = (instance: AxiosInstance) => {
	instance.interceptors.request.use((request) => {
		if (!!request) {
			log(`Requesting ${request.method} : ${redactNricfinInString(request.url)}`);
		}
		return request;
	}, (error) => {
		log(`Error occurred while making a request ${error.message}`, error);
		return Promise.reject(error);
	});
};

const addResponseLogs = (instance: AxiosInstance) => {
	instance.interceptors.response.use((response) => {
		if (!!response) {
			log(`Responded ${response.config.method}  : ${redactNricfinInString(response.config.url)}`);
		}
		return response;
	}, (error) => {
		if (!!error.response) {
			log(`Error occurred while responding to request ${error.response.config.method} :
			${redactNricfinInString(error.response.config.url)}`, error);
		} else {
			log(`Error occurred while responding to request`, error);
		}
		return Promise.reject(error);
	});
};

const log = (message?: any, ...optionalParams: any[]) => {
	// tslint:disable-next-line:no-console
	console.log(message, optionalParams);
};
