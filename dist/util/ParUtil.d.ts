import { AxiosInstance } from "axios";
import { Key } from "./KeyUtil";
export declare enum AuthenticationContextType {
    CpfChangePaymentMode = "CPF_CHANGE_PAYMENT_MODE",
    CpfChangeDailyWithdrawalLimit = "CPF_CHANGE_DAILY_WITHDRAWAL_LIMIT",
    CpfProfileUpdate = "CPF_PROFILE_UPDATE",
    CpfLinkBankAccount = "CPF_LINK_BANK_ACCOUNT",
    CpfFundsTransfer = "CPF_FUNDS_TRANSFER",
    BankCasaOpening = "BANK_CASA_OPENING",
    BankCasaInitialUsage = "BANK_CASA_INITIAL_USAGE",
    BankCardApplication = "BANK_CARD_APPLICATION",
    BankCardInitialUsage = "BANK_CARD_INITIAL_USAGE",
    BankLoanApplication = "BANK_LOAN_APPLICATION",
    BankAddLocalRecipient = "BANK_ADD_LOCAL_RECEIPIENT",
    BankAddOverseasRecipient = "BANK_ADD_OVERSEAS_RECIPIENT",
    BankIncreaseTransferLimit = "BANK_INCREASE_TRANSFER_LIMIT",
    BankReportFraudSuspiciousActivity = "BANK_REPORT_FRAUD_SUSPICIOUS_ACTIVITY",
    BankFundsTransferLocal = "BANK_FUNDS_TRANSFER_LOCAL",
    BankRemitMoneyOverseas = "BANK_REMIT_MONEY_OVERSEAS",
    BankReportLostCard = "BANK_REPORT_LOST_CARD",
    BankChangeNotificationMethod = "BANK_CHANGE_NOTIFICATION_METHOD",
    BankIncreaseCreditCardLimit = "BANK_INCREASE_CREDIT_CARD_LIMIT",
    BankRequestCashAdvance = "BANK_REQUEST_CASH_ADVANCE",
    BankIncreaseInflowOutflow = "BANK_INCREASE_INFLOW_OUTFLOW",
    BankActivateDormantAccount = "BANK_ACTIVATE_DORMANT_ACCOUNT",
    BankLoginNewDevice = "BANK_LOGIN_NEW_DEVICE",
    BankLoginUnfamiliarIp = "BANK_LOGIN_UNFAMILIAR_IP",
    BankUpdateUserInformation = "BANK_UPDATE_USER_INFORMATION",
    BankNewDeviceRegistration = "BANK_NEW_DEVICE_REGISTRATION",
    BankUnlockMoneyLock = "BANK_UNLOCK_MONEY_LOCK",
    BankGooglePayApplePayCardOnboarding = "BANK_GOOGLE_PAY_APPLE_PAY_CARD_ONBOARDING",
    FiAccountOpening = "FI_ACCOUNT_OPENING",
    FiLinkBankAccount = "FI_LINK_BANK_ACCOUNT",
    FiIncreaseTransferLimit = "FI_INCREASE_TRANSFER_LIMIT",
    FiIncreaseWithdrawalLimit = "FI_INCREASE_WITHDRAWAL_LIMIT",
    FiInitiateDeposit = "FI_INITIATE_DEPOSIT",
    TelcoSimCardApplication = "TELCO_SIM_CARD_APPLICATION",
    TelcoSimCardActivation = "TELCO_SIM_CARD_ACTIVATION",
    TelcoChangeAccountDetails = "TELCO_CHANGE_ACCOUNT_DETAILS",
    TelcoActivateRoaming = "TELCO_ACTIVATE_ROAMING",
    TelcoChangeNotificationMethod = "TELCO_CHANGE_NOTIFICATION_METHOD",
    AppAuthenticationDefault = "APP_AUTHENTICATION_DEFAULT",
    AppPaymentDefault = "APP_PAYMENT_DEFAULT",
    AppAccountPasswordChangeDefault = "APP_ACCOUNT_PASSWORD_CHANGE_DEFAULT",
    AppAccountPasswordResetDefault = "APP_ACCOUNT_PASSWORD_RESET_DEFAULT",
    AppAccountDetailsChangeDefault = "APP_ACCOUNT_DETAILS_CHANGE_DEFAULT",
    AppOnboardingDefault = "APP_ONBOARDING_DEFAULT"
}
export interface PARResponse {
    request_uri: string;
    expires_in: number;
}
export interface PARRequestParams {
    response_type: "code";
    scope: string;
    state: string;
    nonce: string;
    client_id: string;
    redirect_uri: string;
    acr_values?: string;
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    client_assertion: string;
    code_challenge: string;
    code_challenge_method: "S256";
    authentication_context_type?: AuthenticationContextType;
    authentication_context_message?: string;
    redirect_uri_https_type?: "app_claimed_https" | "standard_https";
    app_launch_url?: string;
}
export interface PARInput {
    state: string;
    nonce: string;
    userInfoScope: string[];
    codeVerifier: string;
    redirectUriHttpsType?: "app_claimed_https" | "standard_https";
    authenticationContextType?: AuthenticationContextType;
    authenticationContextMessage?: string;
    appLaunchUrl?: string;
    acrValues?: string;
}
export interface PARConfig {
    clientID: string;
    redirectUri: string;
    parEndpoint: string;
    issuer: string;
    clientAssertionSignKey: Key;
    dpopSignKey: Key;
    axiosClient: AxiosInstance;
}
/**
 * Build the PAR request body from caller input and config.
 */
export declare function buildPARRequestParams(input: PARInput, config: PARConfig): Promise<PARRequestParams>;
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
export declare function sendPushedAuthorizationRequest(input: PARInput, config: PARConfig): Promise<PARResponse>;
/**
 * Construct the authorization URL using the request_uri from PAR.
 * ref: https://docs.developer.singpass.gov.sg/docs/technical-specifications/integration-guide/1.-authorization-request#id-2.-redirecting-the-user-to-the-authorization-url
 */
export declare function constructAuthorizationUrl(authorizationEndpoint: string, clientID: string, requestUri: string): string;
//# sourceMappingURL=ParUtil.d.ts.map