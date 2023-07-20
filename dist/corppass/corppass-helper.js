"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OidcHelper = void 0;
const querystringUtil = require("querystring");
const axios_client_1 = require("../client/axios-client");
const util_1 = require("../util");
const Logger_1 = require("../util/Logger");
const SingpassMyinfoError_1 = require("../util/error/SingpassMyinfoError");
class OidcHelper {
    constructor(props) {
        this.axiosClient = (0, axios_client_1.createClient)({
            timeout: 10000,
        });
        this.constructAuthorizationUrl = (state, nonce, overrideAuthUrl) => {
            const queryParams = {
                state,
                ...(nonce ? { nonce } : {}),
                redirect_uri: this.redirectUri,
                scope: "openid",
                client_id: this.clientID,
                response_type: "code",
            };
            const queryString = querystringUtil.stringify(queryParams);
            return `${overrideAuthUrl !== null && overrideAuthUrl !== void 0 ? overrideAuthUrl : this.authorizationUrl}?${queryString}`;
        };
        /**
         * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getAccessTokenPayload and getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = async (authCode, axiosRequestConfig) => {
            const params = {
                grant_type: "authorization_code",
                code: authCode,
                client_id: this.clientID,
                client_secret: this.clientSecret,
                redirect_uri: this.redirectUri,
            };
            const body = querystringUtil.stringify(params);
            const config = {
                headers: {
                    ...this.additionalHeaders,
                    "content-type": "application/x-www-form-urlencoded"
                },
                ...axiosRequestConfig,
            };
            const response = await this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        };
        /**
         * Get fresh tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.refreshTokens = async (refreshToken, axiosRequestConfig) => {
            const params = {
                scope: "openid",
                grant_type: "refresh_token",
                client_id: this.clientID,
                client_secret: this.clientSecret,
                refresh_token: refreshToken,
            };
            const body = querystringUtil.stringify(params);
            const config = {
                headers: {
                    ...this.additionalHeaders,
                    "content-type": "application/x-www-form-urlencoded"
                },
                ...axiosRequestConfig,
            };
            const response = await this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        };
        this._testExports = {
            corppassClient: this.axiosClient,
            validateStatusFn: this.validateStatus,
        };
        this.authorizationUrl = props.authorizationUrl;
        this.tokenUrl = props.tokenUrl;
        this.clientID = props.clientID;
        this.clientSecret = props.clientSecret;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.jwsVerifyKey = props.jwsVerifyKey;
        this.additionalHeaders = props.additionalHeaders || {};
    }
    /**
     * Decodes the access Token JWT inside the TokenResponse to get the payload
     */
    async getAccessTokenPayload(tokens) {
        try {
            const { access_token } = tokens;
            const verifiedJws = await util_1.JweUtil.verifyJWS(access_token, this.jwsVerifyKey);
            return JSON.parse(verifiedJws.payload.toString());
        }
        catch (e) {
            Logger_1.logger.error("Failed to get access token payload", e);
            throw e;
        }
    }
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractInfoFromIdTokenSubject on the returned Token Payload to get the NRIC, system defined ID and country code
     */
    async getIdTokenPayload(tokens) {
        try {
            const { id_token } = tokens;
            const decryptedJwe = await util_1.JweUtil.decryptJWE(id_token, this.jweDecryptKey);
            const jwsPayload = decryptedJwe.payload.toString();
            const verifiedJws = await util_1.JweUtil.verifyJWS(jwsPayload, this.jwsVerifyKey);
            return JSON.parse(verifiedJws.payload.toString());
        }
        catch (e) {
            Logger_1.logger.error("Failed to get ID token payload", e);
            throw e;
        }
    }
    /**
     * Returns the NRIC, system defined ID and country code from the ID token payload
     */
    extractInfoFromIdTokenSubject(payload) {
        const { sub } = payload;
        if (sub) {
            const trimmedSub = sub.replace(/ /g, '');
            const nricRegex = /s=([STFG]\d{7}[A-Z])[^,]*/i;
            const [, nric] = trimmedSub.match(nricRegex) || [];
            const uuidRegex = /u=([^,]*)/i;
            const [, uuid] = trimmedSub.match(uuidRegex) || [];
            const countryCodeRegex = /c=([^,]*)/i;
            const [, countryCode] = trimmedSub.match(countryCodeRegex) || [];
            if (!nric) {
                throw Error("Token payload sub property is invalid, does not contain valid NRIC");
            }
            return { nric, uuid, countryCode };
        }
        throw Error("Token payload sub property is not defined");
    }
    validateStatus(status) {
        return status === 302 || (status >= 200 && status < 300);
    }
}
exports.OidcHelper = OidcHelper;
//# sourceMappingURL=corppass-helper.js.map