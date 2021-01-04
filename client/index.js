"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = require("axios");
const ProxyAgent = require("proxy-agent");
const RedactorUtil_1 = require("../util/RedactorUtil");
exports.createClient = (requestConfig = {}) => {
    // Note: Due to axios not being able to automatically pick up proxy env vars, we have to manually define a custom proxy agent
    // Axios 0.19.0 has not fixed this issue yet, so we are using this workaround: https://github.com/axios/axios/issues/925#issuecomment-419352052
    const proxyConfig = getProxyConfig();
    if (!!proxyConfig) {
        const proxyAgent = new ProxyAgent(proxyConfig);
        requestConfig = Object.assign({ httpAgent: proxyAgent, httpsAgent: proxyAgent, proxy: false }, requestConfig);
    }
    const instance = axios_1.default.create(Object.assign({}, requestConfig));
    addRequestLogs(instance);
    addResponseLogs(instance);
    return instance;
};
const getProxyConfig = () => {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
};
const addRequestLogs = (instance) => {
    instance.interceptors.request.use((request) => {
        if (!!request) {
            log(`Requesting ${request.method} : ${RedactorUtil_1.redactNricfinInString(request.url)}`);
        }
        return request;
    }, (error) => {
        log(`Error occurred while making a request ${error.message}`, error);
        return Promise.reject(error);
    });
};
const addResponseLogs = (instance) => {
    instance.interceptors.response.use((response) => {
        if (!!response) {
            log(`Responded ${response.config.method}  : ${RedactorUtil_1.redactNricfinInString(response.config.url)}`);
        }
        return response;
    }, (error) => {
        if (!!error.response) {
            log(`Error occurred while responding to request ${error.response.config.method} :
			${RedactorUtil_1.redactNricfinInString(error.response.config.url)}`, error);
        }
        else {
            log(`Error occurred while responding to request`, error);
        }
        return Promise.reject(error);
    });
};
const log = (message, ...optionalParams) => {
    // tslint:disable-next-line:no-console
    console.log(message, optionalParams);
};
//# sourceMappingURL=index.js.map