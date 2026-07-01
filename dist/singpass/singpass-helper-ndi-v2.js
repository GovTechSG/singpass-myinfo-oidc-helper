"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NdiOidcHelperV2 = void 0;
const querystringUtil = require("querystring");
const axios_client_1 = require("../client/axios-client");
const util_1 = require("../util");
const DpopUtil_1 = require("../util/DpopUtil");
const SingpassMyinfoError_1 = require("../util/error/SingpassMyinfoError");
const Logger_1 = require("../util/Logger");
const ParUtil_1 = require("../util/ParUtil");
const SigningUtil_1 = require("../util/SigningUtil");
// =============================================================================
// Helper Class
// =============================================================================
class NdiOidcHelperV2 {
    constructor(props) {
        this.getOidcConfig = async () => {
            if (!this.oidcConfig) {
                const response = await this.axiosClient.get(this.oidcConfigUrl);
                this.oidcConfig = response.data;
            }
            return this.oidcConfig;
        };
        this.getKeys = async () => {
            const { jwks_uri } = await this.getOidcConfig();
            const { data: { keys }, } = await this.axiosClient.get(jwks_uri);
            return keys;
        };
        // =========================================================================
        // Step 1: Pushed Authorization Request (PAR)
        // =========================================================================
        /**
         * Send a Pushed Authorization Request.
         *
         * Flow:
         * 1. POST params to pushed_authorization_request_endpoint (with DPoP header)
         * 2. Receive request_uri in response
         * 3. Use request_uri to construct the authorization URL (see constructAuthorizationUrl)
         */
        this.fetchPushedAuthorizationRequest = async (input) => {
            const { pushed_authorization_request_endpoint, issuer } = await this.getOidcConfig();
            return (0, ParUtil_1.sendPushedAuthorizationRequest)(input, {
                clientID: this.clientID,
                redirectUri: this.redirectUri,
                parEndpoint: pushed_authorization_request_endpoint,
                issuer,
                clientAssertionSignKey: this.clientAssertionSignKey,
                dpopSignKey: this.dpopSignKey,
                axiosClient: this.axiosClient,
            });
        };
        // =========================================================================
        // Step 2: Construct Authorization URL
        // =========================================================================
        /**
         * Construct the authorization URL using the request_uri from PAR.
         */
        this.constructAuthorizationUrl = async (requestUri) => {
            const { authorization_endpoint } = await this.getOidcConfig();
            return (0, ParUtil_1.constructAuthorizationUrl)(authorization_endpoint, this.clientID, requestUri);
        };
        // =========================================================================
        // Step 3: Token Exchange
        // =========================================================================
        /**
         * Exchange authorization code for tokens.
         *
         * Sends a POST to the token endpoint with DPoP header.
         * The token_type in the response will be "DPoP" (not "Bearer") per FAPI 2.0.
         *
         * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/3.-token-exchange
         */
        this.getTokens = async (authCode, codeVerifier) => {
            const { token_endpoint, issuer } = await this.getOidcConfig();
            const clientAssertion = await (0, SigningUtil_1.createClientAssertion)({
                issuer: this.clientID,
                subject: this.clientID,
                audience: issuer,
                key: this.clientAssertionSignKey,
            });
            // DPoP proof for token endpoint (htm: POST, htu: token_endpoint)
            const { proof: dpopProof } = await (0, DpopUtil_1.createDpopProof)({
                htm: "POST",
                htu: token_endpoint,
                key: this.dpopSignKey,
            });
            // Token request body per Singpass docs
            const tokenRequestBody = {
                grant_type: "authorization_code",
                code: authCode,
                redirect_uri: this.redirectUri,
                client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
                client_assertion: clientAssertion,
                code_verifier: codeVerifier,
            };
            const body = querystringUtil.stringify(tokenRequestBody);
            const response = await this.axiosClient.post(token_endpoint, body, {
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    DPoP: dpopProof,
                },
            });
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            if (!response.data.access_token) {
                Logger_1.logger.error("Failed to get access token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get access token");
            }
            return response.data;
        };
        // =========================================================================
        // Step 5: Userinfo Request (MyInfo V5 apps only)
        // =========================================================================
        /**
         * Fetch user info from the userinfo endpoint.
         *
         * This step is only applicable to MyInfo (v5) apps.
         * Requires DPoP proof with ath (access token hash) claim.
         * Authorization header uses "DPoP" prefix instead of "Bearer" (changed from V1).
         *
         * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/5.-requesting-for-userinfo#request
         */
        this.getUserInfo = async (accessToken) => {
            const { userinfo_endpoint } = await this.getOidcConfig();
            const { proof: dpopProof } = await (0, DpopUtil_1.createDpopProof)({
                htm: "GET",
                htu: userinfo_endpoint,
                key: this.dpopSignKey,
                accessToken,
            });
            const { data } = await this.axiosClient.get(userinfo_endpoint, {
                headers: {
                    Authorization: `DPoP ${accessToken}`,
                    DPoP: dpopProof,
                },
            });
            return data;
        };
        this.verifyUserInfo = async (jweResponse, overrideDecryptKey) => {
            try {
                const keys = await this.getKeys();
                const finalDecryptionKey = overrideDecryptKey !== null && overrideDecryptKey !== void 0 ? overrideDecryptKey : this.jweDecryptKey;
                const decryptedJwe = await util_1.JweUtil.decryptJWE(jweResponse, finalDecryptionKey.key, finalDecryptionKey.format);
                const jwsPayload = decryptedJwe.payload.toString();
                try {
                    const verified = await util_1.JweUtil.verifyJwsUsingKeyStore(jwsPayload, keys);
                    const { person_info } = JSON.parse(verified.payload.toString());
                    return person_info;
                }
                catch (e) {
                    Logger_1.logger.error("could not verify user info payload", e);
                    throw e;
                }
            }
            catch (e) {
                Logger_1.logger.error("Failed to get user info", e);
                throw e;
            }
        };
        this._testExports = {
            getAxiosClient: () => this.axiosClient,
        };
        this.oidcConfigUrl = props.oidcConfigUrl;
        this.clientID = props.clientID;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.clientAssertionSignKey = props.clientAssertionSignKey;
        this.dpopSignKey = props.dpopSignKey;
        this.axiosClient = (0, axios_client_1.createClient)({
            timeout: 10000,
            proxy: props.proxyConfig,
        });
    }
    // =========================================================================
    // Step 4: Parse ID Token
    // =========================================================================
    /**
     * Decrypt and verify the ID token from the token response.
     * ref 1: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/4.-parsing-the-id-token
     * ref 2: https://docs.developer.singpass.gov.sg/docs/technical-specifications/migration-guides/login-myinfo-v5-apps#id-1.-implement-decryption-of-the-id-token
     */
    async getIdTokenPayload(tokens, overrideDecryptKey) {
        try {
            const keys = await this.getKeys();
            const { id_token } = tokens;
            const finalDecryptionKey = overrideDecryptKey !== null && overrideDecryptKey !== void 0 ? overrideDecryptKey : this.jweDecryptKey;
            const decryptedJwe = await util_1.JweUtil.decryptJWE(id_token, finalDecryptionKey.key, finalDecryptionKey.format);
            const jwsPayload = decryptedJwe.payload.toString();
            try {
                const verified = await util_1.JweUtil.verifyJwsUsingKeyStore(jwsPayload, keys);
                return JSON.parse(verified.payload.toString());
            }
            catch (e) {
                Logger_1.logger.error("could not verify token payload", e);
                throw e;
            }
        }
        catch (e) {
            Logger_1.logger.error("Failed to get token payload", e);
            throw e;
        }
    }
    // =========================================================================
    // Helpers
    // =========================================================================
    extractUuidFromPayload(payload) {
        const { sub } = payload;
        if (!sub) {
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Token payload sub property is not defined");
        }
        return sub;
    }
    extractIdentityNumberFromPayload(payload) {
        var _a;
        const identityNumber = (_a = payload.sub_attributes) === null || _a === void 0 ? void 0 : _a.identity_number;
        if (!identityNumber) {
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Token payload does not contain identity_number in sub_attributes. " +
                "Ensure the 'user.identity' scope is requested.");
        }
        return identityNumber;
    }
}
exports.NdiOidcHelperV2 = NdiOidcHelperV2;
//# sourceMappingURL=singpass-helper-ndi-v2.js.map