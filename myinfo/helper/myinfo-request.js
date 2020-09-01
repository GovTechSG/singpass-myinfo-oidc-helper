"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nonceFactory = require("nonce");
const util_1 = require("../../util");
const client_1 = require("../../client");
const querystringUtil = require("querystring");
/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
class MyInfoRequest {
    constructor(props) {
        this.axiosClient = client_1.createClient({
            timeout: 10000,
        });
        this.appId = props.appId;
        this.privateKeyContent = props.privateKeyToSignRequest;
        this.privateKeyPassword = props.privateKeyPassword;
    }
    get(uri, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let authHeader = "";
            const nonce = nonceFactory()();
            const timestamp = new Date().getTime();
            authHeader = util_1.SigningUtil.generateMyInfoAuthorizationHeader(uri, queryParams, util_1.SigningUtil.HttpMethod.GET, this.appId, this.privateKeyContent, nonce, timestamp, this.privateKeyPassword);
            const requestConfig = {
                params: queryParams,
                paramsSerializer: querystringUtil.stringify,
                headers: {
                    Authorization: authHeader,
                },
            };
            const response = yield this.axiosClient.get(uri, requestConfig);
            return response;
        });
    }
}
exports.MyInfoRequest = MyInfoRequest;
//# sourceMappingURL=myinfo-request.js.map