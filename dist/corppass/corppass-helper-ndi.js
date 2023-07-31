"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NdiOidcHelper = void 0;
const querystringUtil = require("querystring");
const axios_client_1 = require("../client/axios-client");
const util_1 = require("../util");
const SingpassMyinfoError_1 = require("../util/error/SingpassMyinfoError");
const Logger_1 = require("../util/Logger");
const SigningUtil_1 = require("../util/SigningUtil");
class NdiOidcHelper {
    constructor(props) {
        this.constructAuthorizationUrl = async (state, nonce) => {
            const { data: { authorization_endpoint }, } = await this.axiosClient.get(this.oidcConfigUrl, { headers: this.additionalHeaders });
            const queryParams = {
                state,
                ...(nonce ? { nonce } : {}),
                redirect_uri: this.redirectUri,
                scope: "openid",
                client_id: this.clientID,
                response_type: "code",
            };
            const queryString = querystringUtil.stringify(queryParams);
            return `${authorization_endpoint}?${queryString}`;
        };
        /**
         * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = async (authCode) => {
            const { data: { token_endpoint, issuer }, } = await this.axiosClient.get(this.oidcConfigUrl, { headers: this.additionalHeaders });
            const params = {
                grant_type: "authorization_code",
                code: authCode,
                client_id: this.clientID,
                redirect_uri: this.redirectUri,
                client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
                client_assertion: await (0, SigningUtil_1.createClientAssertion)({
                    issuer: this.clientID,
                    subject: this.clientID,
                    audience: issuer,
                    key: this.clientAssertionSignKey,
                }),
            };
            const body = querystringUtil.stringify(params);
            const config = {
                headers: {
                    ...this.additionalHeaders,
                    "content-type": "application/x-www-form-urlencoded",
                },
            };
            const finalTokenEndpoint = this.proxyBaseUrl ? token_endpoint.replace(issuer, this.proxyBaseUrl) : token_endpoint;
            const response = await this.axiosClient.post(finalTokenEndpoint, body, config);
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        };
        this._testExports = {
            getCorppassClient: () => this.axiosClient,
            validateStatusFn: this.validateStatus,
        };
        this.oidcConfigUrl = props.oidcConfigUrl;
        this.clientID = props.clientID;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.clientAssertionSignKey = props.clientAssertionSignKey;
        this.additionalHeaders = props.additionalHeaders || {};
        this.proxyBaseUrl = props.proxyBaseUrl;
        this.axiosClient = (0, axios_client_1.createClient)({
            timeout: 10000,
            proxy: props.proxyConfig,
        });
    }
    /**
     * Decodes the access Token JWT inside the TokenResponse to get the payload
     */
    async getAccessTokenPayload(tokens) {
        try {
            const { data: { jwks_uri, issuer }, } = await this.axiosClient.get(this.oidcConfigUrl, { headers: this.additionalHeaders });
            const finalJwksUri = this.proxyBaseUrl ? jwks_uri.replace(issuer, this.proxyBaseUrl) : jwks_uri;
            const { data: { keys }, } = await this.axiosClient.get(finalJwksUri, { headers: this.additionalHeaders });
            const jwsVerifyKey = JSON.stringify(keys[0]);
            const { access_token } = tokens;
            const verifiedJws = await util_1.JweUtil.verifyJWS(access_token, jwsVerifyKey, "json");
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
            const { data: { jwks_uri, issuer }, } = await this.axiosClient.get(this.oidcConfigUrl, { headers: this.additionalHeaders });
            const finalJwksUri = this.proxyBaseUrl ? jwks_uri.replace(issuer, this.proxyBaseUrl) : jwks_uri;
            const { data: { keys }, } = await this.axiosClient.get(finalJwksUri, { headers: this.additionalHeaders });
            const jwsVerifyKey = JSON.stringify(keys[0]);
            const { id_token } = tokens;
            const decryptedJwe = await util_1.JweUtil.decryptJWE(id_token, this.jweDecryptKey.key, this.jweDecryptKey.format);
            const jwsPayload = decryptedJwe.payload.toString();
            const verifiedJws = await util_1.JweUtil.verifyJWS(jwsPayload, jwsVerifyKey, "json");
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
            const trimmedSub = sub.replace(/ /g, "");
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
exports.NdiOidcHelper = NdiOidcHelper;
//# sourceMappingURL=corppass-helper-ndi.js.map