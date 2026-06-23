import { JWE, JWS } from "node-jose";
import * as DpopUtil from "src/util/DpopUtil";
import * as JweUtils from "src/util/JweUtil";
import * as SigningUtil from "src/util/SigningUtil";
import { NdiOidcHelperV2, NdiOidcHelperV2Constructor, TokenPayloadV2 } from "../singpass-helper-ndi-v2";
import { AuthenticationContextType } from "src/util/ParUtil";

const mockOidcConfigUrl = "https://stg-id.singpass.gov.sg/.well-known/openid-configuration";
const mockClientId = "dNGEOSUjyJjTqytbxsspyJAyQIj3tyha";

const mockRedirectUri = "http://localhost:3001/callback";
const mockDecryptKey = "sshh-secret";
const mockSignKey = "sshh-secret";
const mockDpopKey = "sshh-dpop-key";

const mockOidcConfig = {
	issuer: "https://stg-id.singpass.gov.sg/fapi",
	authorization_endpoint: "https://stg-id.singpass.gov.sg/fapi/auth",
	token_endpoint: "https://stg-id.singpass.gov.sg/fapi/token",
	userinfo_endpoint: "https://stg-id.singpass.gov.sg/fapi/userinfo",
	jwks_uri: "https://stg-id.singpass.gov.sg/fapi/.well-known/keys",
	pushed_authorization_request_endpoint: "https://stg-id.singpass.gov.sg/fapi/par",
};

const createMockTokenPayloadV2 = (overrideProps?: Partial<TokenPayloadV2>): TokenPayloadV2 => ({
	iat: 1770709532,
	iss: "https://stg-id.singpass.gov.sg/fapi",
	sub: "d45d8f21-6178-4713-b962-8635ed2a945a",
	exp: 1770713132,
	aud: mockClientId,
	nonce: "test-nonce-value",
	amr: ["pwd"],
	sub_type: "sub",
	acr: "urn:singpass:authentication:loa:1",
	...overrideProps,
});

describe("NDI Singpass Helper V2 (FAPI 2.0)", () => {
	const props: NdiOidcHelperV2Constructor = {
		oidcConfigUrl: mockOidcConfigUrl,
		clientID: mockClientId,
		redirectUri: mockRedirectUri,
		jweDecryptKey: { key: mockDecryptKey },
		clientAssertionSignKey: { key: mockSignKey },
		dpopSignKey: { key: mockDpopKey, format: "json", alg: "ES256" },
	};

	let helper: NdiOidcHelperV2;
	let axiosMock: jest.Mock;

	beforeEach(() => {
		helper = new NdiOidcHelperV2(props);
		axiosMock = jest.fn();

		// Mock OIDC config discovery (first GET call)
		axiosMock.mockImplementationOnce(() => Promise.resolve({ status: 200, data: mockOidcConfig }));

		helper._testExports.getAxiosClient().get = axiosMock;
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	// =========================================================================
	// PAR Request
	// =========================================================================

	describe("sendPushedAuthorizationRequest", () => {
		it("should POST to the PAR endpoint with DPoP header and correct body params", async () => {
			const mockDpopProof = "mock-dpop-proof-jwt";
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({
				proof: mockDpopProof,
			});
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("mock-client-assertion");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: {
					request_uri: "urn:ietf:params:oauth:request_uri:Tku8lLFs7d_UPZznhREj0",
					expires_in: 60,
				},
			});
			helper._testExports.getAxiosClient().post = postMock;

			const result = await helper.fetchPushedAuthorizationRequest({
				state: "test-state-uuid",
				nonce: "test-nonce-uuid",
				userInfoScope: ["name", "uinfin"],
				codeVerifier: "test-code-verifier-43chars-minimum-length12",
			});

			// Verify PAR response
			expect(result.request_uri).toBe("urn:ietf:params:oauth:request_uri:Tku8lLFs7d_UPZznhREj0");
			expect(result.expires_in).toBe(60);

			// Verify POST was called with correct endpoint
			expect(postMock).toHaveBeenCalledWith(
				mockOidcConfig.pushed_authorization_request_endpoint,
				expect.any(String),
				expect.objectContaining({
					headers: expect.objectContaining({
						"content-type": "application/x-www-form-urlencoded",
						DPoP: mockDpopProof,
					}),
				}),
			);

			// Verify body contains required params
			const body = postMock.mock.calls[0][1] as string;
			expect(body).toContain("response_type=code");
			expect(body).toContain(`client_id=${mockClientId}`);
			expect(body).toContain("scope=openid%20name%20uinfin");
			expect(body).toContain("state=test-state-uuid");
			expect(body).toContain("nonce=test-nonce-uuid");
			expect(body).toContain("code_challenge_method=S256");
			expect(body).toContain("code_challenge=");
			expect(body).toContain(
				"client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer",
			);
			expect(body).toContain("client_assertion=mock-client-assertion");
		});

		it("should include optional Singpass-specific params when provided", async () => {
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "proof" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("assertion");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			helper._testExports.getAxiosClient().post = postMock;

			await helper.fetchPushedAuthorizationRequest({
				state: "state",
				nonce: "nonce",
				userInfoScope: [],
				codeVerifier: "test-code-verifier-43chars-minimum-length12",
				redirectUriHttpsType: "app_claimed_https",
				authenticationContextType: AuthenticationContextType.AppAuthenticationDefault,
				authenticationContextMessage: "Log in to your account",
				appLaunchUrl: "https://myapp.com/callback",
				acrValues: "urn:singpass:authentication:loa:2",
			});

			const body = postMock.mock.calls[0][1] as string;
			expect(body).toContain("redirect_uri_https_type=app_claimed_https");
			expect(body).toContain("authentication_context_type=APP_AUTHENTICATION_DEFAULT");
			expect(body).toContain("authentication_context_message=Log%20in%20to%20your%20account");
			expect(body).toContain("app_launch_url=https%3A%2F%2Fmyapp.com%2Fcallback");
			expect(body).toContain("acr_values=urn%3Asingpass%3Aauthentication%3Aloa%3A2");
		});

		it("should throw if PAR response is missing request_uri", async () => {
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "proof" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("assertion");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { error: "invalid_request", error_description: "missing scope" },
			});
			helper._testExports.getAxiosClient().post = postMock;

			await expect(
				helper.fetchPushedAuthorizationRequest({
					state: "state",
					nonce: "nonce",
					userInfoScope: [],
					codeVerifier: "test-code-verifier-43chars-minimum-length12",
				}),
			).rejects.toThrow("PAR failed: missing request_uri in response");
		});

		it("should call createDpopProof with htm=POST and htu=PAR endpoint", async () => {
			const dpopSpy = jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "proof" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("assertion");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			helper._testExports.getAxiosClient().post = postMock;

			await helper.fetchPushedAuthorizationRequest({
				state: "state",
				nonce: "nonce",
				userInfoScope: [],
				codeVerifier: "test-code-verifier-43chars-minimum-length12",
			});

			expect(dpopSpy).toHaveBeenCalledWith({
				htm: "POST",
				htu: mockOidcConfig.pushed_authorization_request_endpoint,
				key: props.dpopSignKey,
			});
		});
	});

	// =========================================================================
	// Authorization URL Construction
	// =========================================================================

	describe("constructAuthorizationUrl", () => {
		it("should construct URL with only client_id and request_uri", async () => {
			const requestUri = "urn:ietf:params:oauth:request_uri:Tku8lLFs7d_UPZznhREj0";
			const url = await helper.constructAuthorizationUrl(requestUri);

			expect(url).toBe(
				`${mockOidcConfig.authorization_endpoint}?client_id=${mockClientId}&request_uri=${encodeURIComponent(requestUri)}`,
			);
		});
	});

	// =========================================================================
	// Token Exchange
	// =========================================================================

	describe("getTokens", () => {
		it("should POST to token endpoint with DPoP header and code_verifier", async () => {
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "token-dpop" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("token-assertion");

			const mockTokenResponse = {
				id_token: "encrypted-id-token",
				access_token: "dpop-bound-access-token",
				token_type: "DPoP",
			};
			const postMock = jest.fn().mockResolvedValue({ status: 200, data: mockTokenResponse });
			helper._testExports.getAxiosClient().post = postMock;

			const result = await helper.getTokens("auth-code-123", "my-code-verifier");

			expect(result).toEqual(mockTokenResponse);
			expect(postMock).toHaveBeenCalledWith(
				mockOidcConfig.token_endpoint,
				expect.any(String),
				expect.objectContaining({
					headers: expect.objectContaining({
						DPoP: "token-dpop",
					}),
				}),
			);

			const body = postMock.mock.calls[0][1] as string;
			expect(body).toContain("grant_type=authorization_code");
			expect(body).toContain("code=auth-code-123");
			expect(body).toContain("code_verifier=my-code-verifier");
			expect(body).toContain("client_assertion=token-assertion");
		});

		it("should throw if response is missing id_token", async () => {
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "p" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("a");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { access_token: "at", token_type: "DPoP" },
			});
			helper._testExports.getAxiosClient().post = postMock;

			await expect(helper.getTokens("code", "verifier")).rejects.toThrow("Failed to get ID token");
		});

		it("should throw if response is missing access_token", async () => {
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "p" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("a");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { id_token: "it", token_type: "DPoP" },
			});
			helper._testExports.getAxiosClient().post = postMock;

			await expect(helper.getTokens("code", "verifier")).rejects.toThrow("Failed to get access token");
		});

		it("should call createDpopProof with htm=POST and htu=token endpoint", async () => {
			const dpopSpy = jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "p" });
			jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("a");

			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { id_token: "it", access_token: "at", token_type: "DPoP" },
			});
			helper._testExports.getAxiosClient().post = postMock;

			await helper.getTokens("code", "verifier");

			expect(dpopSpy).toHaveBeenCalledWith({
				htm: "POST",
				htu: mockOidcConfig.token_endpoint,
				key: props.dpopSignKey,
			});
		});
	});

	// =========================================================================
	// Userinfo Request
	// =========================================================================

	describe("getUserInfo", () => {
		it("should GET userinfo endpoint with DPoP header and DPoP authorization prefix", async () => {
			jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "userinfo-dpop" });

			// Second GET is to userinfo endpoint
			axiosMock.mockImplementationOnce(() => Promise.resolve({ status: 200, data: "encrypted-jwe-response" }));

			const result = await helper.getUserInfo("my-access-token");

			expect(result).toBe("encrypted-jwe-response");

			// Second call (index 1) is the userinfo GET
			expect(axiosMock.mock.calls[1][1]).toEqual(
				expect.objectContaining({
					headers: expect.objectContaining({
						Authorization: "DPoP my-access-token",
						DPoP: "userinfo-dpop",
					}),
				}),
			);
		});

		it("should call createDpopProof with htm=GET, htu=userinfo endpoint, and accessToken", async () => {
			const dpopSpy = jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "p" });

			axiosMock.mockImplementationOnce(() => Promise.resolve({ status: 200, data: "response" }));

			await helper.getUserInfo("my-access-token");

			expect(dpopSpy).toHaveBeenCalledWith({
				htm: "GET",
				htu: mockOidcConfig.userinfo_endpoint,
				key: props.dpopSignKey,
				accessToken: "my-access-token",
			});
		});
	});

	// =========================================================================
	// ID Token Payload Parsing
	// =========================================================================

	describe("getIdTokenPayload", () => {
		it("should decrypt and verify the ID token", async () => {
			const mockPayload = createMockTokenPayloadV2();
			const mockVerifiedJws = { payload: JSON.stringify(mockPayload) };

			jest.spyOn(JweUtils, "decryptJWE").mockResolvedValueOnce({
				payload: "decrypted-jws",
			} as unknown as JWE.DecryptResult);
			jest.spyOn(JweUtils, "verifyJwsUsingKeyStore").mockResolvedValueOnce(
				mockVerifiedJws as unknown as JWS.VerificationResult,
			);

			// JWKS fetch
			axiosMock.mockImplementationOnce(() => Promise.resolve({ status: 200, data: { keys: ["MOCK_KEY"] } }));

			const result = await helper.getIdTokenPayload({
				id_token: "encrypted-id-token",
				access_token: "at",
				token_type: "DPoP",
			});

			expect(result.sub).toBe("d45d8f21-6178-4713-b962-8635ed2a945a");
			expect(result.iss).toBe("https://stg-id.singpass.gov.sg/fapi");
		});

		it("should use overrideDecryptKey when provided", async () => {
			const overrideKey = { key: "override-decrypt-key", format: "json" as const };
			const mockPayload = createMockTokenPayloadV2();
			const mockVerifiedJws = { payload: JSON.stringify(mockPayload) };

			const decryptSpy = jest.spyOn(JweUtils, "decryptJWE").mockResolvedValueOnce({
				payload: "decrypted",
			} as unknown as JWE.DecryptResult);
			jest.spyOn(JweUtils, "verifyJwsUsingKeyStore").mockResolvedValueOnce(
				mockVerifiedJws as unknown as JWS.VerificationResult,
			);

			axiosMock.mockImplementationOnce(() => Promise.resolve({ status: 200, data: { keys: ["KEY"] } }));

			await helper.getIdTokenPayload({ id_token: "token", access_token: "at", token_type: "DPoP" }, overrideKey);

			expect(decryptSpy).toHaveBeenCalledWith("token", "override-decrypt-key", "json");
		});
	});

	// =========================================================================
	// Userinfo Verification
	// =========================================================================

	describe("verifyUserInfo", () => {
		it("should decrypt, verify, and return the person_info from the userinfo response", async () => {
			const mockPersonInfo = {
				uinfin: { value: "S9000001B", source: "1", classification: "C", lastupdated: "2024-09-26" },
				name: { value: "SOH HAO FENG", source: "1", classification: "C", lastupdated: "2024-09-26" },
			};
			const mockUserInfoPayload = {
				person_info: mockPersonInfo,
				iss: "https://stg-id.singpass.gov.sg/fapi",
				sub: "uuid-123",
				aud: mockClientId,
				iat: 1746678089,
			};
			const mockVerifiedJws = { payload: JSON.stringify(mockUserInfoPayload) };

			jest.spyOn(JweUtils, "decryptJWE").mockResolvedValueOnce({
				payload: "decrypted-jws",
			} as unknown as JWE.DecryptResult);
			jest.spyOn(JweUtils, "verifyJwsUsingKeyStore").mockResolvedValueOnce(
				mockVerifiedJws as unknown as JWS.VerificationResult,
			);

			axiosMock.mockImplementationOnce(() => Promise.resolve({ status: 200, data: { keys: ["KEY"] } }));

			const result = await helper.verifyUserInfo("encrypted-jwe-userinfo");

			expect(result).toEqual(mockPersonInfo);
		});
	});

	// =========================================================================
	// Payload Extraction Helpers
	// =========================================================================

	describe("extractUuidFromPayload", () => {
		it("should return the sub directly (UUID only in V2)", () => {
			const payload = createMockTokenPayloadV2();
			const uuid = helper.extractUuidFromPayload(payload);
			expect(uuid).toBe("d45d8f21-6178-4713-b962-8635ed2a945a");
		});

		it("should throw if sub is not defined", () => {
			const payload = createMockTokenPayloadV2({ sub: undefined as unknown as string });
			expect(() => helper.extractUuidFromPayload(payload)).toThrow("Token payload sub property is not defined");
		});
	});

	describe("extractIdentityNumberFromPayload", () => {
		it("should extract identity_number from sub_attributes when user.identity scope is used", () => {
			const payload = createMockTokenPayloadV2({
				sub_attributes: { identity_number: "S9000001B" },
			});
			const identityNumber = helper.extractIdentityNumberFromPayload(payload);
			expect(identityNumber).toBe("S9000001B");
		});

		it("should throw if sub_attributes is not present", () => {
			const payload = createMockTokenPayloadV2();
			expect(() => helper.extractIdentityNumberFromPayload(payload)).toThrow(
				"Token payload does not contain identity_number in sub_attributes",
			);
		});

		it("should throw if sub_attributes.identity_number is not present", () => {
			const payload = createMockTokenPayloadV2({
				sub_attributes: { name: "John" },
			});
			expect(() => helper.extractIdentityNumberFromPayload(payload)).toThrow(
				"Token payload does not contain identity_number in sub_attributes",
			);
		});
	});
});
