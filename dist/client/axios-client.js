"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = require("axios");
const proxy_agent_1 = require("proxy-agent");
const Logger_1 = require("../util/Logger");
const RedactorUtil_1 = require("../util/RedactorUtil");
const createClient = (requestConfig = {}) => {
    // Note: Due to axios not being able to automatically pick up proxy env vars, we have to manually define a custom proxy agent
    // Axios 0.19.0 has not fixed this issue yet, so we are using this workaround: https://github.com/axios/axios/issues/925#issuecomment-419352052
    const proxyConfig = getProxyConfig();
    if (!!proxyConfig) {
        const proxyAgent = new proxy_agent_1.ProxyAgent({ host: proxyConfig });
        requestConfig = {
            httpAgent: proxyAgent,
            httpsAgent: proxyAgent,
            proxy: false,
            ...requestConfig,
        };
    }
    const instance = axios_1.default.create({
        ...requestConfig,
    });
    addRequestLogs(instance);
    addResponseLogs(instance);
    return instance;
};
exports.createClient = createClient;
const getProxyConfig = () => {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
};
const addRequestLogs = (instance) => {
    instance.interceptors.request.use((request) => {
        if (!!request) {
            Logger_1.logger.log("Requesting", {
                method: request.method,
                url: (0, RedactorUtil_1.redactUinfin)(request.url)
            });
        }
        return request;
    }, (error) => {
        Logger_1.logger.log(`Error occurred while making a request`, error);
        return Promise.reject(error);
    });
};
const addResponseLogs = (instance) => {
    instance.interceptors.response.use((response) => {
        if (!!response) {
            Logger_1.logger.log(`Responded`, {
                method: response.config.method,
                url: (0, RedactorUtil_1.redactUinfin)(response.config.url)
            });
        }
        return response;
    }, (error) => {
        Logger_1.logger.log(`Error occurred while responding to request`, error);
        return Promise.reject(error);
    });
};
//# sourceMappingURL=axios-client.js.map