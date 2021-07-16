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
exports.OidcHelper = exports.SessionLogoutResult = exports.SessionRefreshResult = void 0;
const lodash_1 = require("lodash");
const querystringUtil = require("querystring");
const axios_client_1 = require("../client/axios-client");
const util_1 = require("../util");
const SingpassMyinfoError_1 = require("../util/error/SingpassMyinfoError");
var SessionRefreshResult;
(function (SessionRefreshResult) {
    SessionRefreshResult["SUCCESS"] = "SUCCESS";
    SessionRefreshResult["SINGPASS_ERROR"] = "SINGPASS_ERROR";
    SessionRefreshResult["INVALID_SESSION_ID"] = "INVALID_SESSION_ID";
})(SessionRefreshResult = exports.SessionRefreshResult || (exports.SessionRefreshResult = {}));
var SessionLogoutResult;
(function (SessionLogoutResult) {
    SessionLogoutResult["SUCCESS"] = "SUCCESS";
    SessionLogoutResult["SINGPASS_ERROR"] = "SINGPASS_ERROR";
})(SessionLogoutResult = exports.SessionLogoutResult || (exports.SessionLogoutResult = {}));
class OidcHelper {
    constructor(props) {
        this.SINGPASS_SESSION_COOKIE_NAME = "PD-S-SESSION-ID";
        this.axiosClient = axios_client_1.createClient({
            timeout: 10000,
        });
        this.constructAuthorizationUrl = (state, nonce) => {
            const queryParams = Object.assign(Object.assign({ state }, (nonce ? { nonce } : {})), { redirect_uri: this.redirectUri, scope: "openid", client_id: this.clientID, response_type: "code" });
            const queryString = querystringUtil.stringify(queryParams);
            return `${this.authorizationUrl}?${queryString}`;
        };
        /**
         * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = (authCode, axiosRequestConfig) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                grant_type: "authorization_code",
                code: authCode,
                client_id: this.clientID,
                client_secret: this.clientSecret,
                redirect_uri: this.redirectUri,
            };
            const body = querystringUtil.stringify(params);
            const config = Object.assign({ headers: { "content-type": "application/x-www-form-urlencoded" } }, axiosRequestConfig);
            const response = yield this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                util_1.Logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        });
        /**
         * Get fresh tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.refreshTokens = (refreshToken, axiosRequestConfig) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                scope: "openid",
                grant_type: "refresh_token",
                client_id: this.clientID,
                client_secret: this.clientSecret,
                refresh_token: refreshToken,
            };
            const body = querystringUtil.stringify(params);
            const config = Object.assign({ headers: { "content-type": "application/x-www-form-urlencoded" } }, axiosRequestConfig);
            const response = yield this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                util_1.Logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        });
        this._testExports = {
            singpassClient: this.axiosClient,
            validateStatusFn: this.validateStatus,
        };
        this.authorizationUrl = props.authorizationUrl;
        this.logoutUrl = props.logoutUrl;
        this.tokenUrl = props.tokenUrl;
        this.clientID = props.clientID;
        this.clientSecret = props.clientSecret;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.jwsVerifyKey = props.jwsVerifyKey;
    }
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractNricAndUuidFromPayload on the returned Token Payload to get the NRIC and UUID
     */
    getIdTokenPayload(tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_token } = tokens;
                const decryptedJwe = yield util_1.JweUtil.decryptJWE(id_token, this.jweDecryptKey);
                const jwsPayload = decryptedJwe.payload.toString();
                const verifiedJws = yield util_1.JweUtil.verifyJWS(jwsPayload, this.jwsVerifyKey);
                return JSON.parse(verifiedJws.payload.toString());
            }
            catch (e) {
                util_1.Logger.error("Failed to get token payload", e);
                throw e;
            }
        });
    }
    /**
     * Returns the nric and uuid from the token payload
     */
    extractNricAndUuidFromPayload(payload) {
        const { sub } = payload;
        if (sub) {
            const extractionRegex = /s=([STFG]\d{7}[A-Z]).*,u=(.*)/i;
            const matchResult = sub.match(extractionRegex);
            if (!matchResult) {
                throw Error("Token payload sub property is invalid, does not contain valid NRIC and uuid string");
            }
            const nric = matchResult[1];
            const uuid = matchResult[2];
            return { nric, uuid };
        }
        throw Error("Token payload sub property is not defined");
    }
    /**
     * Refresh the Singpass session, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     * @param state state that will be passed to the your redirect uri from this refresh call. defaults to "dummyState"
     * @returns INVALID_SESSION_ID - the sessionId param is no longer valid
     * @returns SINGPASS_ERROR - the call to Singpass server to refresh is not successful
     * @returns SUCCESS - refresh sessionId successfully
     */
    refreshSession(sessionId, state = "dummyState") {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const authorizationUrl = this.constructAuthorizationUrl(state);
            // Max redirects 0 to prevent calling callback endpoint with singpass session cookie
            const requestConfig = {
                headers: { Cookie: `${this.SINGPASS_SESSION_COOKIE_NAME}=${sessionId}` },
                maxRedirects: 0,
                validateStatus: this.validateStatus,
            };
            try {
                const result = yield this.axiosClient.get(authorizationUrl, requestConfig);
                if ((_a = result.headers.location) === null || _a === void 0 ? void 0 : _a.includes("saml.singpass.gov.sg")) {
                    util_1.Logger.warn(`Attempted to refresh session with invalid session ID`);
                    return SessionRefreshResult.INVALID_SESSION_ID;
                }
                return SessionRefreshResult.SUCCESS;
            }
            catch (e) {
                util_1.Logger.warn(`Singpass Error while attempting to refresh session for sessionId \nError:`, e);
                return SessionRefreshResult.SINGPASS_ERROR;
            }
        });
    }
    /**
     * [DEPRECATED] Singpass is not managing the logged in user's session anymore thus there is no need to log out.
     * Keeping for other use cases.
     *
     * Log user out of Singpass, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     */
    logoutOfSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (lodash_1.isNil(this.logoutUrl)) {
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Trying to call singpass-helper logoutOfSession without setting the logout URL");
            }
            const requestConfig = { headers: { Cookie: `${this.SINGPASS_SESSION_COOKIE_NAME}=${sessionId}` } };
            try {
                yield this.axiosClient.get(this.logoutUrl, requestConfig);
                return SessionLogoutResult.SUCCESS;
            }
            catch (e) {
                util_1.Logger.warn("Singpass Error while attempting to logout of Singpass session", e);
                return SessionLogoutResult.SINGPASS_ERROR;
            }
        });
    }
    validateStatus(status) {
        return status === 302 || (status >= 200 && status < 300);
    }
}
exports.OidcHelper = OidcHelper;
//# sourceMappingURL=singpass-helper.js.map