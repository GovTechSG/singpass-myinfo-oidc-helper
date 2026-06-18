import { AxiosInstance } from "axios";
import * as DpopUtil from "../DpopUtil";
import * as SigningUtil from "../SigningUtil";
import { constructAuthorizationUrl, PARConfig, PARInput, sendPushedAuthorizationRequest } from "../ParUtil";

describe("ParUtil", () => {
	const mockConfig: PARConfig = {
		clientID: "dNGEOSUjyJjTqytbxsspyJAyQIj3tyha",
		redirectUri: "http://localhost:3001/callback",
		parEndpoint: "https://stg-id.singpass.gov.sg/fapi/par",
		issuer: "https://stg-id.singpass.gov.sg/fapi",
		clientAssertionSignKey: { key: "mock-sign-key", alg: "ES256" },
		dpopSignKey: { key: "mock-dpop-key", format: "json", alg: "ES256" },
		axiosClient: { post: jest.fn() } as unknown as AxiosInstance,
	};

	const baseInput: PARInput = {
		state: "5bfda4b1-f67b-4f3c-bbbc-6ca81461fb5a",
		nonce: "5e652418-2373-47f7-8003-43f062244046",
		userInfoScope: ["name", "uinfin"],
		codeVerifier: "test-code-verifier-43chars-minimum-length12",
	};

	beforeEach(() => {
		jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({
			proof: "mock-dpop-proof",
		});
		jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("mock-client-assertion");
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	describe("sendPushedAuthorizationRequest", () => {
		it("should POST to the PAR endpoint and return request_uri + expires_in", async () => {
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: {
					request_uri: "urn:ietf:params:oauth:request_uri:Tku8lLFs7d_UPZznhREj0",
					expires_in: 60,
				},
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			const result = await sendPushedAuthorizationRequest(baseInput, config);

			expect(result.request_uri).toBe("urn:ietf:params:oauth:request_uri:Tku8lLFs7d_UPZznhREj0");
			expect(result.expires_in).toBe(60);
		});

		it("should include all mandatory body parameters", async () => {
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await sendPushedAuthorizationRequest(baseInput, config);

			const [endpoint, body, options] = postMock.mock.calls[0];

			// Correct endpoint
			expect(endpoint).toBe(mockConfig.parEndpoint);

			// Body contains all mandatory OIDC + PKCE params
			expect(body).toContain("response_type=code");
			expect(body).toContain(`client_id=${mockConfig.clientID}`);
			expect(body).toContain(`redirect_uri=${encodeURIComponent(mockConfig.redirectUri)}`);
			expect(body).toContain("scope=openid%20name%20uinfin");
			expect(body).toContain(`state=${baseInput.state}`);
			expect(body).toContain(`nonce=${baseInput.nonce}`);
			expect(body).toContain("code_challenge=");
			expect(body).toContain("code_challenge_method=S256");
			expect(body).toContain(
				"client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer",
			);
			expect(body).toContain("client_assertion=mock-client-assertion");

			// Headers include DPoP proof and content type
			expect(options.headers).toEqual(
				expect.objectContaining({
					"content-type": "application/x-www-form-urlencoded",
					DPoP: "mock-dpop-proof",
				}),
			);
		});

		it("should prepend 'openid' to scope automatically", async () => {
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await sendPushedAuthorizationRequest({ ...baseInput, userInfoScope: ["nationality", "noa"] }, config);

			const body = postMock.mock.calls[0][1] as string;
			expect(body).toContain("scope=openid%20nationality%20noa");
		});

		it("should include optional Singpass-specific parameters when provided", async () => {
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await sendPushedAuthorizationRequest(
				{
					...baseInput,
					redirectUriHttpsType: "app_claimed_https",
					authenticationContextType: "APP_AUTHENTICATION_DEFAULT",
					authenticationContextMessage: "Log in to your account",
					appLaunchUrl: "https://myapp.com/callback",
					acrValues: "urn:singpass:authentication:loa:2",
				},
				config,
			);

			const body = postMock.mock.calls[0][1] as string;
			expect(body).toContain("redirect_uri_https_type=app_claimed_https");
			expect(body).toContain("authentication_context_type=APP_AUTHENTICATION_DEFAULT");
			expect(body).toContain("authentication_context_message=Log%20in%20to%20your%20account");
			expect(body).toContain("app_launch_url=https%3A%2F%2Fmyapp.com%2Fcallback");
			expect(body).toContain("acr_values=urn%3Asingpass%3Aauthentication%3Aloa%3A2");
		});

		it("should NOT include optional params when not provided", async () => {
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await sendPushedAuthorizationRequest(baseInput, config);

			const body = postMock.mock.calls[0][1] as string;
			expect(body).not.toContain("redirect_uri_https_type");
			expect(body).not.toContain("authentication_context_type");
			expect(body).not.toContain("authentication_context_message");
			expect(body).not.toContain("app_launch_url");
			expect(body).not.toContain("acr_values");
		});

		it("should generate DPoP proof with htm=POST and htu=parEndpoint", async () => {
			const dpopSpy = jest.spyOn(DpopUtil, "createDpopProof").mockResolvedValue({ proof: "proof" });
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await sendPushedAuthorizationRequest(baseInput, config);

			expect(dpopSpy).toHaveBeenCalledWith({
				htm: "POST",
				htu: mockConfig.parEndpoint,
				key: mockConfig.dpopSignKey,
			});
		});

		it("should generate client assertion with clientID as issuer/subject and OIDC issuer as audience", async () => {
			const assertionSpy = jest.spyOn(SigningUtil, "createClientAssertion").mockResolvedValue("assertion");
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { request_uri: "urn:test", expires_in: 60 },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await sendPushedAuthorizationRequest(baseInput, config);

			expect(assertionSpy).toHaveBeenCalledWith({
				issuer: mockConfig.clientID,
				subject: mockConfig.clientID,
				audience: mockConfig.issuer,
				key: mockConfig.clientAssertionSignKey,
			});
		});

		it("should throw if response is missing request_uri", async () => {
			const postMock = jest.fn().mockResolvedValue({
				status: 200,
				data: { error: "invalid_request", error_description: "bad params" },
			});
			const config = { ...mockConfig, axiosClient: { post: postMock } as unknown as AxiosInstance };

			await expect(sendPushedAuthorizationRequest(baseInput, config)).rejects.toThrow(
				"PAR failed: missing request_uri in response",
			);
		});
	});

	describe("constructAuthorizationUrl", () => {
		it("should construct URL with only client_id and request_uri query params", () => {
			const url = constructAuthorizationUrl(
				"https://stg-id.singpass.gov.sg/fapi/auth",
				"dNGEOSUjyJjTqytbxsspyJAyQIj3tyha",
				"urn:ietf:params:oauth:request_uri:Tku8lLFs7d_UPZznhREj0",
			);

			expect(url).toBe(
				"https://stg-id.singpass.gov.sg/fapi/auth?client_id=dNGEOSUjyJjTqytbxsspyJAyQIj3tyha&request_uri=urn%3Aietf%3Aparams%3Aoauth%3Arequest_uri%3ATku8lLFs7d_UPZznhREj0",
			);
		});

		it("should URL-encode the request_uri parameter", () => {
			const url = constructAuthorizationUrl(
				"https://example.com/auth",
				"client123",
				"urn:ietf:params:oauth:request_uri:abc+def/ghi",
			);

			expect(url).toContain("request_uri=urn%3Aietf%3Aparams%3Aoauth%3Arequest_uri%3Aabc%2Bdef%2Fghi");
		});
	});
});
