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
exports.MyInfoHelper = void 0;
const _ = require("lodash");
const querystringUtil = require("querystring");
const util_1 = require("../../util");
const SingpassMyinfoError_1 = require("../../util/error/SingpassMyinfoError");
const Logger_1 = require("../../util/Logger");
const myinfo_request_1 = require("./myinfo-request");
const AUTHORISE_BASE_URL = "api.myinfo.gov.sg/gov/v3/authorise";
const TOKEN_BASE_URL = "api.myinfo.gov.sg/gov/v3/token";
const PERSON_BASE_URL = "api.myinfo.gov.sg/gov/v3/person";
const PERSON_BASIC_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic";
const PROFILE_STATUS_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic/status";
class MyInfoHelper {
    constructor(props) {
        this.constructAuthorizationUrl = (state, purpose, attributes) => {
            if (_.isEmpty(attributes)) {
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Attribute list must contain values");
            }
            if (_.isEmpty(this.redirectUri)) {
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Redirect url must be provided in constructor");
            }
            const queryParams = {
                state,
                purpose,
                attributes: attributes.toString(),
                redirect_uri: this.redirectUri,
                client_id: this.clientID,
                sp_esvcId: this.singpassEserviceID,
            };
            const queryString = querystringUtil.stringify(queryParams);
            return `${this.authorizationUrl}?${queryString}`;
        };
        /**
         * Obtain token for person data
         */
        this.getToken = (authCode, state) => __awaiter(this, void 0, void 0, function* () {
            if (_.isEmpty(this.clientSecret)) {
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Client secret must be provided in constructor");
            }
            const params = {
                code: authCode,
                grant_type: "authorization_code",
                client_secret: this.clientSecret,
                client_id: this.clientID,
                redirect_uri: this.redirectUri,
                state: querystringUtil.unescape(state)
            };
            let response;
            try {
                response = yield this.myInfoRequest.post(this.tokenUrl, params);
            }
            catch (error) {
                Logger_1.logger.error("Failed to get token from Myinfo", error);
                throw error;
            }
            return response.data;
        });
        /**
         * Obtain V3 person basic data using uinfin.
         * In the generic K, pass in the list of string literal of the attributes you expect to get back.
         * getPersonCommon will return an object with only the properties matching the keys.
         * e.g. when K = "name" | "email", getPersonCommon returns an object looking like { name, email }
         */
        this.getPersonCommon = (uinfin, attributes) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.personBasicUrl}/${uinfin}`;
            const params = {
                client_id: this.clientID,
                sp_esvcId: this.singpassEserviceID,
                attributes: attributes.toString(),
            };
            let response;
            try {
                response = yield this.myInfoRequest.get(url, params);
            }
            catch (error) {
                Logger_1.logger.error("Error requesting for person-common data (JWE) from Myinfo", error);
                throw error;
            }
            try {
                // Decrypt person data
                const encryptedPersonJWE = response.data;
                const jwe = yield util_1.JweUtil.decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
                const jws = JSON.parse(jwe.payload.toString());
                const verifiedJws = yield util_1.JweUtil.verifyJWS(jws, this.certToVerifyJWS);
                const personData = JSON.parse(verifiedJws.payload.toString());
                if (personData == null) {
                    throw new SingpassMyinfoError_1.SingpassMyInfoError("Person-common data cannot be null");
                }
                return personData;
            }
            catch (error) {
                Logger_1.logger.error("Error verifying person-common data from Myinfo", error);
                throw error;
            }
        });
        /**
         * Obtain V3 person data using uinfin and access token.
         * In the generic K, pass in the list of string literal of the attributes you expect to get back.
         * getPersonCommon will return an object with only the properties matching the keys.
         * e.g. when K = "name" | "email", getPersonCommon returns an object looking like { name, email }
         */
        this.getPerson = (accessToken, attributes) => __awaiter(this, void 0, void 0, function* () {
            const uinfin = yield this.extractUinfinFromAccessToken(accessToken);
            const url = `${this.personUrl}/${uinfin}/`;
            const params = {
                client_id: this.clientID,
                sp_esvcId: this.singpassEserviceID,
                attributes: attributes.toString(),
            };
            let response;
            try {
                response = yield this.myInfoRequest.get(url, params, accessToken);
            }
            catch (error) {
                Logger_1.logger.error("Error requesting for person data from Myinfo", error);
                throw error;
            }
            try {
                // Decrypt person data
                const encryptedPersonJWE = response.data;
                const jwe = yield util_1.JweUtil.decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
                const jws = JSON.parse(jwe.payload.toString());
                const verifiedJws = yield util_1.JweUtil.verifyJWS(jws, this.certToVerifyJWS);
                const personData = JSON.parse(verifiedJws.payload.toString());
                if (personData == null) {
                    throw new SingpassMyinfoError_1.SingpassMyInfoError("Person data cannot be null");
                }
                return personData;
            }
            catch (error) {
                Logger_1.logger.error("Error verifying person data from Myinfo", error);
                throw error;
            }
        });
        /**
         * Obtain myinfo profile status of an individual using uinfin.
         * This is an endpoint that requires permission from the myinfo team.
         * Do approach the team if you need to access it.
         */
        this.getProfileStatus = (uinfin) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.profileStatusUrl}/${uinfin}`;
            const response = yield this.myInfoRequest.get(url);
            if (!!response.data.msg && typeof response.data.msg === "string") {
                return JSON.parse(response.data.msg);
            }
            throw new SingpassMyinfoError_1.SingpassMyInfoError("getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected");
        });
        this.clientID = props.clientID;
        this.clientSecret = props.clientSecret;
        this.singpassEserviceID = props.singpassEserviceID;
        this.keyToDecryptJWE = props.keyToDecryptJWE;
        this.certToVerifyJWS = props.certToVerifyJWS;
        this.redirectUri = props.redirectUri;
        this.authorizationUrl = this.getUrl(props.overrideAuthorizationUrl, AUTHORISE_BASE_URL, props.environment);
        this.tokenUrl = this.getUrl(props.overrideTokenUrl, TOKEN_BASE_URL, props.environment);
        this.personUrl = this.getUrl(props.overridePersonUrl, PERSON_BASE_URL, props.environment);
        this.personBasicUrl = this.getUrl(props.overridePersonBasicUrl, PERSON_BASIC_BASE_URL, props.environment);
        this.profileStatusUrl = this.getUrl(props.overrideProfileStatusUrl, PROFILE_STATUS_BASE_URL, props.environment);
        const requestProps = {
            appId: props.clientID,
            privateKeyToSignRequest: props.privateKeyToSignRequest,
            privateKeyPassword: props.privateKeyPassword,
        };
        this.myInfoRequest = new myinfo_request_1.MyInfoRequest(requestProps);
    }
    /**
     * Verify and decode access token to obtain payload
     */
    getPayloadFromAccessToken(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verifiedAccessTokenJws = yield util_1.JweUtil.verifyJWS(accessToken, this.certToVerifyJWS);
                const payload = JSON.parse(verifiedAccessTokenJws.payload.toString());
                if (payload === undefined || payload === null) {
                    throw new Error("unable to parse payload");
                }
                const { sub } = payload;
                if (sub === undefined || sub === null) {
                    throw new Error("uinfin not found");
                }
                return payload;
            }
            catch (error) {
                Logger_1.logger.error("Error verifying token from Myinfo", error);
                throw error;
            }
        });
    }
    extractUinfinFromAccessToken(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = yield this.getPayloadFromAccessToken(accessToken);
            return payload.sub;
        });
    }
    getUrl(overrideUrl, defaultUrl, env) {
        return (!_.isEmpty(overrideUrl))
            ? overrideUrl
            : this.constructUrl(env, defaultUrl);
    }
    constructUrl(environment, baseUrl) {
        switch (environment) {
            case "sandbox":
                return `https://sandbox.${baseUrl}`;
            case "prod":
                return `https://${baseUrl}`;
            case "test":
            default:
                return `https://test.${baseUrl}`;
        }
    }
}
exports.MyInfoHelper = MyInfoHelper;
//# sourceMappingURL=myinfo-helper.js.map