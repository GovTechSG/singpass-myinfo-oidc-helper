"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationContextType = void 0;
exports.buildPARRequestParams = buildPARRequestParams;
exports.sendPushedAuthorizationRequest = sendPushedAuthorizationRequest;
exports.constructAuthorizationUrl = constructAuthorizationUrl;
const openid_client_1 = require("openid-client");
const querystringUtil = require("querystring");
const SigningUtil_1 = require("./SigningUtil");
const DpopUtil_1 = require("./DpopUtil");
const SingpassMyinfoError_1 = require("./error/SingpassMyinfoError");
const Logger_1 = require("./Logger");
// ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/1.-authorization-request#possible-authenticationcontexttype-values
var AuthenticationContextType;
(function (AuthenticationContextType) {
    // CPF transactions
    AuthenticationContextType["CpfChangePaymentMode"] = "CPF_CHANGE_PAYMENT_MODE";
    AuthenticationContextType["CpfChangeDailyWithdrawalLimit"] = "CPF_CHANGE_DAILY_WITHDRAWAL_LIMIT";
    AuthenticationContextType["CpfProfileUpdate"] = "CPF_PROFILE_UPDATE";
    AuthenticationContextType["CpfLinkBankAccount"] = "CPF_LINK_BANK_ACCOUNT";
    AuthenticationContextType["CpfFundsTransfer"] = "CPF_FUNDS_TRANSFER";
    // Banking
    AuthenticationContextType["BankCasaOpening"] = "BANK_CASA_OPENING";
    AuthenticationContextType["BankCasaInitialUsage"] = "BANK_CASA_INITIAL_USAGE";
    AuthenticationContextType["BankCardApplication"] = "BANK_CARD_APPLICATION";
    AuthenticationContextType["BankCardInitialUsage"] = "BANK_CARD_INITIAL_USAGE";
    AuthenticationContextType["BankLoanApplication"] = "BANK_LOAN_APPLICATION";
    AuthenticationContextType["BankAddLocalRecipient"] = "BANK_ADD_LOCAL_RECEIPIENT";
    AuthenticationContextType["BankAddOverseasRecipient"] = "BANK_ADD_OVERSEAS_RECIPIENT";
    AuthenticationContextType["BankIncreaseTransferLimit"] = "BANK_INCREASE_TRANSFER_LIMIT";
    AuthenticationContextType["BankReportFraudSuspiciousActivity"] = "BANK_REPORT_FRAUD_SUSPICIOUS_ACTIVITY";
    AuthenticationContextType["BankFundsTransferLocal"] = "BANK_FUNDS_TRANSFER_LOCAL";
    AuthenticationContextType["BankRemitMoneyOverseas"] = "BANK_REMIT_MONEY_OVERSEAS";
    AuthenticationContextType["BankReportLostCard"] = "BANK_REPORT_LOST_CARD";
    AuthenticationContextType["BankChangeNotificationMethod"] = "BANK_CHANGE_NOTIFICATION_METHOD";
    AuthenticationContextType["BankIncreaseCreditCardLimit"] = "BANK_INCREASE_CREDIT_CARD_LIMIT";
    AuthenticationContextType["BankRequestCashAdvance"] = "BANK_REQUEST_CASH_ADVANCE";
    AuthenticationContextType["BankIncreaseInflowOutflow"] = "BANK_INCREASE_INFLOW_OUTFLOW";
    AuthenticationContextType["BankActivateDormantAccount"] = "BANK_ACTIVATE_DORMANT_ACCOUNT";
    AuthenticationContextType["BankLoginNewDevice"] = "BANK_LOGIN_NEW_DEVICE";
    AuthenticationContextType["BankLoginUnfamiliarIp"] = "BANK_LOGIN_UNFAMILIAR_IP";
    AuthenticationContextType["BankUpdateUserInformation"] = "BANK_UPDATE_USER_INFORMATION";
    AuthenticationContextType["BankNewDeviceRegistration"] = "BANK_NEW_DEVICE_REGISTRATION";
    AuthenticationContextType["BankUnlockMoneyLock"] = "BANK_UNLOCK_MONEY_LOCK";
    AuthenticationContextType["BankGooglePayApplePayCardOnboarding"] = "BANK_GOOGLE_PAY_APPLE_PAY_CARD_ONBOARDING";
    // Other Financial Institutions
    AuthenticationContextType["FiAccountOpening"] = "FI_ACCOUNT_OPENING";
    AuthenticationContextType["FiLinkBankAccount"] = "FI_LINK_BANK_ACCOUNT";
    AuthenticationContextType["FiIncreaseTransferLimit"] = "FI_INCREASE_TRANSFER_LIMIT";
    AuthenticationContextType["FiIncreaseWithdrawalLimit"] = "FI_INCREASE_WITHDRAWAL_LIMIT";
    AuthenticationContextType["FiInitiateDeposit"] = "FI_INITIATE_DEPOSIT";
    // Telcos
    AuthenticationContextType["TelcoSimCardApplication"] = "TELCO_SIM_CARD_APPLICATION";
    AuthenticationContextType["TelcoSimCardActivation"] = "TELCO_SIM_CARD_ACTIVATION";
    AuthenticationContextType["TelcoChangeAccountDetails"] = "TELCO_CHANGE_ACCOUNT_DETAILS";
    AuthenticationContextType["TelcoActivateRoaming"] = "TELCO_ACTIVATE_ROAMING";
    AuthenticationContextType["TelcoChangeNotificationMethod"] = "TELCO_CHANGE_NOTIFICATION_METHOD";
    // Others
    AuthenticationContextType["AppAuthenticationDefault"] = "APP_AUTHENTICATION_DEFAULT";
    AuthenticationContextType["AppPaymentDefault"] = "APP_PAYMENT_DEFAULT";
    AuthenticationContextType["AppAccountPasswordChangeDefault"] = "APP_ACCOUNT_PASSWORD_CHANGE_DEFAULT";
    AuthenticationContextType["AppAccountPasswordResetDefault"] = "APP_ACCOUNT_PASSWORD_RESET_DEFAULT";
    AuthenticationContextType["AppAccountDetailsChangeDefault"] = "APP_ACCOUNT_DETAILS_CHANGE_DEFAULT";
    AuthenticationContextType["AppOnboardingDefault"] = "APP_ONBOARDING_DEFAULT";
})(AuthenticationContextType || (exports.AuthenticationContextType = AuthenticationContextType = {}));
/**
 * Build the PAR request body from caller input and config.
 */
async function buildPARRequestParams(input, config) {
    const { clientID, redirectUri, issuer, clientAssertionSignKey } = config;
    const scope = [...new Set(["openid", ...input.userInfoScope])].join(" ");
    // Generate PKCE code_challenge from code_verifier
    const codeChallenge = openid_client_1.generators.codeChallenge(input.codeVerifier);
    // Generate client assertion for private_key_jwt authentication.
    // Audience is the issuer from OIDC discovery, consistent with token exchange.
    const clientAssertion = await (0, SigningUtil_1.createClientAssertion)({
        issuer: clientID,
        subject: clientID,
        audience: issuer,
        key: clientAssertionSignKey,
    });
    const params = {
        response_type: "code",
        scope,
        state: input.state,
        nonce: input.nonce,
        client_id: clientID,
        redirect_uri: redirectUri,
        client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        client_assertion: clientAssertion,
        code_challenge: codeChallenge,
        code_challenge_method: "S256",
    };
    // Optional parameters
    if (input.acrValues) {
        params.acr_values = input.acrValues;
    }
    if (input.authenticationContextType) {
        params.authentication_context_type = input.authenticationContextType;
    }
    if (input.authenticationContextMessage) {
        params.authentication_context_message = input.authenticationContextMessage;
    }
    if (input.redirectUriHttpsType) {
        params.redirect_uri_https_type = input.redirectUriHttpsType;
    }
    if (input.appLaunchUrl) {
        params.app_launch_url = input.appLaunchUrl;
    }
    return params;
}
/**
 * Send a Pushed Authorization Request per RFC 9126.
 *
 * Flow:
 * 1. Build PARRequestParams from caller input
 * 2. Generate DPoP proof for the PAR endpoint
 * 3. POST to pushed_authorization_request_endpoint with DPoP header
 * 4. Return request_uri and expires_in from the response
 *
 * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/1.-authorization-request
 */
async function sendPushedAuthorizationRequest(input, config) {
    const { parEndpoint, dpopSignKey, axiosClient } = config;
    const parRequestParams = await buildPARRequestParams(input, config);
    const { proof: dpopProof } = await (0, DpopUtil_1.createDpopProof)({
        htm: "POST",
        htu: parEndpoint,
        key: dpopSignKey,
    });
    const body = querystringUtil.stringify(parRequestParams);
    const response = await axiosClient.post(parEndpoint, body, {
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            DPoP: dpopProof,
        },
    });
    if (!response.data.request_uri) {
        Logger_1.logger.error("PAR failed: missing request_uri in response", response.data);
        throw new SingpassMyinfoError_1.SingpassMyInfoError("PAR failed: missing request_uri in response");
    }
    return response.data;
}
/**
 * Construct the authorization URL using the request_uri from PAR.
 * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/1.-authorization-request#id-2.-redirecting-the-user-to-the-authorization-url
 */
function constructAuthorizationUrl(authorizationEndpoint, clientID, requestUri) {
    const queryParams = {
        client_id: clientID,
        request_uri: requestUri,
    };
    const queryString = querystringUtil.stringify(queryParams);
    return `${authorizationEndpoint}?${queryString}`;
}
//# sourceMappingURL=ParUtil.js.map