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
            const { data: { authorization_endpoint } } = await this.axiosClient.get(this.oidcConfigUrl);
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
         * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = async (authCode) => {
            const { data: { token_endpoint, issuer } } = await this.axiosClient.get(this.oidcConfigUrl);
            const params = {
                grant_type: "authorization_code",
                code: authCode,
                client_id: this.clientID,
                redirect_uri: this.redirectUri,
                client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
                client_assertion: await (0, SigningUtil_1.createClientAssertion)({
                    issuer: this.clientID,
                    subject: this.clientID,
                    audience: issuer,
                    key: this.clientAssertionSignKey,
                })
            };
            const body = querystringUtil.stringify(params);
            const config = {
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=ISO-8859-1"
                },
            };
            const response = await this.axiosClient.post(token_endpoint, body, config);
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        };
        this._testExports = {
            getSingpassClient: () => this.axiosClient,
            validateStatusFn: this.validateStatus,
        };
        this.oidcConfigUrl = props.oidcConfigUrl;
        this.clientID = props.clientID;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.clientAssertionSignKey = props.clientAssertionSignKey;
        this.axiosClient = (0, axios_client_1.createClient)({
            timeout: 10000,
            proxy: props.proxyConfig,
        });
    }
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractNricAndUuidFromPayload on the returned Token Payload to get the NRIC and UUID
     */
    async getIdTokenPayload(tokens) {
        try {
            const { data: { jwks_uri } } = await this.axiosClient.get(this.oidcConfigUrl);
            const { data: { keys } } = await this.axiosClient.get(jwks_uri);
            const jwsVerifyKey = JSON.stringify(keys[0]);
            const { id_token } = tokens;
            const decryptedJwe = await util_1.JweUtil.decryptJWE(id_token, this.jweDecryptKey.key, this.jweDecryptKey.format);
            const jwsPayload = decryptedJwe.payload.toString();
            const verifiedJws = await util_1.JweUtil.verifyJWS(jwsPayload, jwsVerifyKey, 'json');
            return JSON.parse(verifiedJws.payload.toString());
        }
        catch (e) {
            Logger_1.logger.error("Failed to get token payload", e);
            throw e;
        }
    }
    /**
     * Returns the nric and uuid from the token payload
     */
    extractNricAndUuidFromPayload(payload) {
        const { sub } = payload;
        if (sub) {
            const extractionRegex = /s=([STFGM]\d{7}[A-Z]).*,u=(.*)/i;
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
    validateStatus(status) {
        return status === 302 || (status >= 200 && status < 300);
    }
}
exports.NdiOidcHelper = NdiOidcHelper;
//# sourceMappingURL=singpass-helper-ndi.js.map