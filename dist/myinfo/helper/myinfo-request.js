"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoRequest = void 0;
const nonceFactory = require("nonce");
const querystringUtil = require("querystring");
const url_1 = require("url");
const axios_client_1 = require("../../client/axios-client");
const util_1 = require("../../util");
/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
class MyInfoRequest {
    constructor(props) {
        this.axiosClient = (0, axios_client_1.createClient)({
            timeout: 10000,
        });
        this.appId = props.appId;
        this.privateKeyContent = props.privateKeyToSignRequest;
        this.privateKeyPassword = props.privateKeyPassword;
    }
    async get(uri, queryParams, accessToken, proxyUrl, 
    /**
     * Headers already added by this method:
     * Authorization, Cache-Control
     */
    additionalHeaders = {}) {
        const cacheControl = "no-cache";
        const headers = querystringUtil.parse(`Cache-Control=${cacheControl}`);
        const nonce = nonceFactory()();
        const timestamp = new Date().getTime();
        const authHeader = util_1.SigningUtil.generateMyInfoAuthorizationHeader(uri, queryParams, util_1.SigningUtil.HttpMethod.GET, this.appId, this.privateKeyContent, nonce, timestamp, this.privateKeyPassword);
        const requestConfig = {
            params: queryParams,
            headers: {
                ...additionalHeaders,
                ...headers,
                Authorization: accessToken ? `${authHeader},Bearer ${accessToken}` : authHeader,
            },
        };
        const url = proxyUrl || uri;
        const response = await this.axiosClient.get(url, requestConfig);
        return response;
    }
    async post(uri, params, proxyUrl, 
    /**
     * Headers already added by this method:
     * Authorization, Content-Type, Cache-Control
     */
    additionalHeaders = {}) {
        const cacheControl = "no-cache";
        const contentType = "application/x-www-form-urlencoded";
        const headers = querystringUtil.parse(`Content-Type=${contentType}&Cache-Control=${cacheControl}`);
        const nonce = nonceFactory()();
        const timestamp = new Date().getTime();
        const authHeader = util_1.SigningUtil.generateMyInfoAuthorizationHeader(uri, params, util_1.SigningUtil.HttpMethod.POST, this.appId, this.privateKeyContent, nonce, timestamp, this.privateKeyPassword);
        const requestConfig = {
            headers: {
                ...additionalHeaders,
                ...headers,
                Authorization: authHeader,
            },
        };
        const urlSeachParams = new url_1.URLSearchParams(params);
        const url = proxyUrl || uri;
        const response = await this.axiosClient.post(url, urlSeachParams.toString(), requestConfig);
        return response;
    }
}
exports.MyInfoRequest = MyInfoRequest;
//# sourceMappingURL=myinfo-request.js.map