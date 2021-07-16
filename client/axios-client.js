"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = require("axios");
const ProxyAgent = require("proxy-agent");
const RedactorUtil_1 = require("../util/RedactorUtil");
const createClient = (requestConfig = {}) => {
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
exports.createClient = createClient;
const getProxyConfig = () => {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
};
const addRequestLogs = (instance) => {
    instance.interceptors.request.use((request) => {
        if (!!request) {
            log("Requesting", {
                method: request.method,
                url: RedactorUtil_1.redactUinfin(request.url)
            });
        }
        return request;
    }, (error) => {
        log(`Error occurred while making a request`, {
            name: error === null || error === void 0 ? void 0 : error.name,
            message: RedactorUtil_1.redactUinfin(error === null || error === void 0 ? void 0 : error.message)
        });
        return Promise.reject(error);
    });
};
const addResponseLogs = (instance) => {
    instance.interceptors.response.use((response) => {
        if (!!response) {
            log(`Responded`, {
                method: response.config.method,
                url: RedactorUtil_1.redactUinfin(response.config.url)
            });
        }
        return response;
    }, (error) => {
        const response = error === null || error === void 0 ? void 0 : error.response;
        if (!!response) {
            log(`Error occurred while responding to request`, {
                method: response.config.method,
                url: RedactorUtil_1.redactUinfin(response.config.url),
                status: response.status,
                message: RedactorUtil_1.redactUinfin(response.data),
            });
        }
        else {
            log(`Error occurred while responding to request`, {
                name: error === null || error === void 0 ? void 0 : error.name,
                message: RedactorUtil_1.redactUinfin(error === null || error === void 0 ? void 0 : error.message)
            });
        }
        return Promise.reject(error);
    });
};
const log = (message, ...optionalParams) => {
    // tslint:disable-next-line:no-console
    console.log(message, ...optionalParams);
};
//# sourceMappingURL=axios-client.js.map