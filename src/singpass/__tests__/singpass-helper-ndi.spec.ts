import { JWE, JWS } from "node-jose";
import * as JweUtils from "src/util/JweUtil";
import { TokenPayload, TokenResponse } from "../shared-constants";
import { NdiOidcHelper, NdiOidcHelperConstructor } from "../singpass-helper-ndi";

const mockOidcConfigUrl = "https://mocksingpass.sg/authorize";
const mockClientId = "CLIENT-ID";
const mockRedirectUri = "http://mockme.sg/callback";
const mockDecryptKey = "sshh-secret";
const mockSignKey = "sshh-secret";
const mockTokenResponse: TokenResponse = {
	access_token: "MOCK_ACCESS_TOKEN",
	id_token: "MOCK_ID_TOKEN",
	token_type: "bearer",
};

const createMockTokenPayload = (overrideProps?: Partial<TokenPayload>): TokenPayload => ({
	rt_hash: "TJXzQKancNCg3f3YQcZhzg",
	amr: ["pwd"],
	iat: 1547620274,
	iss: "https://stg-saml.singpass.gov.sg",
	sub: "s=S1234567A,u=f19fdf4c-f57b-40b5-a8e0-6fb6eef640e3",
	at_hash: "5LGrRzmsFWLd360gX7HDtw",
	exp: 1547623874,
	aud: "MY-CLIENT-ID",
	...overrideProps,
});

describe("NDI Singpass Helper", () => {
	const props: NdiOidcHelperConstructor = {
		oidcConfigUrl: mockOidcConfigUrl,
		clientID: mockClientId,
		redirectUri: mockRedirectUri,
		jweDecryptKey: { key: mockDecryptKey },
		clientAssertionSignKey: { key: mockSignKey },
	};
	const helper = new NdiOidcHelper(props);

	describe("constructing authorization url", () => {
		const mockAuthoriseEndpoint = "https://mocksingpass.sg/authorize";
		const mockParams = {
			state: "af0ifjsldkj",
			nonce: "a2ghskf1234las",
			codeVerifier: "2345667",
			defaultScope: "openid",
		};

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		helper._testExports.getSingpassClient().get = jest.fn((): any =>
			Promise.resolve({
				status: 200,
				data: {
					authorization_endpoint: mockAuthoriseEndpoint,
				},
			}),
		);

		it("should construct the correct authorzation endpoint", async () => {
			const authUrl = await helper.constructAuthorizationUrl(mockParams.state, mockParams.nonce);

			// eslint-disable-next-line max-len
			const expectedQuery = `?state=${mockParams.state}&nonce=${mockParams.nonce}&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=${mockParams.defaultScope}&client_id=CLIENT-ID&response_type=code`;
			const expected = mockAuthoriseEndpoint + expectedQuery;
			expect(authUrl).toEqual(expected);
		});

		it("should construct the correct authorzation endpoint with code challenge if code_verifier is provided", async () => {
			const authUrl = await helper.constructAuthorizationUrl(
				mockParams.state,
				mockParams.nonce,
				mockParams.codeVerifier,
			);

			// eslint-disable-next-line max-len
			const expectedQuery = `?state=${mockParams.state}&nonce=${mockParams.nonce}&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=${mockParams.defaultScope}&client_id=CLIENT-ID&response_type=code&code_challenge_method=S256&code_challenge=ry3USnoiRbnteX-97HMq8iiTHOzPnoXSaytUNIuOXUg`;
			const expected = mockAuthoriseEndpoint + expectedQuery;

			expect(authUrl).toEqual(expected);
		});

		it("should construct the endpoint with the V2 method", async () => {
			const authUrl = await helper.constructAuthorizationUrlV2({
				state: mockParams.state,
				nonce: mockParams.nonce,
				codeVerifier: mockParams.codeVerifier,
				userInfoScope: ["scope1", "scope2"],
			});
			const encodedMockScope = "openid%20scope1%20scope2";

			// eslint-disable-next-line max-len
			const expectedQuery = `?state=${mockParams.state}&nonce=${mockParams.nonce}&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=${encodedMockScope}&client_id=CLIENT-ID&response_type=code&code_challenge_method=S256&code_challenge=ry3USnoiRbnteX-97HMq8iiTHOzPnoXSaytUNIuOXUg`;
			const expected = mockAuthoriseEndpoint + expectedQuery;
			expect(authUrl).toEqual(expected);
		});
	});

	describe("extracting nric and uuid from payload", () => {
		it("should extract the nric and uuid from the payload", () => {
			const mockNric = "S1234567X";
			const mockUuid = "f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3";

			const mockPayload = createMockTokenPayload({
				sub: `s=${mockNric},u=${mockUuid}`,
			});
			const { nric, uuid } = helper.extractNricAndUuidFromPayload(mockPayload);
			expect(nric).toEqual(mockNric);
			expect(uuid).toEqual(mockUuid);
		});

		it("should throw an error if payload does not have the property 'sub'", () => {
			const mockPayload = createMockTokenPayload({
				sub: undefined,
			});
			expect(() => helper.extractNricAndUuidFromPayload(mockPayload)).toThrowError(
				"Token payload sub property is not defined",
			);
		});

		it("should throw an error if sub property does not contain a valid NRIC", () => {
			const mockPayload = createMockTokenPayload({
				sub: `s=some-nonsense,u=f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3`,
			});

			expect(() => helper.extractNricAndUuidFromPayload(mockPayload)).toThrowError(
				"Token payload sub property is invalid, does not contain valid NRIC and uuid string",
			);
		});

		it("should throw an error if sub property is not in the expected format", () => {
			const mockPayload = createMockTokenPayload({
				sub: `s=S6005040F,f=f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3`,
			});

			expect(() => helper.extractNricAndUuidFromPayload(mockPayload)).toThrowError(
				"Token payload sub property is invalid, does not contain valid NRIC and uuid string",
			);
		});
	});

	describe("getIdTokenPayload()", () => {
		const mockOverrideDecryptKey =
			// eslint-disable-next-line max-len
			'{"kty": "EC","d": "AA1YtF2O779tiuJ4Rs3UVItxgX3GFOgQ-aycS-n-lFU","use": "enc","crv": "P-256","kid": "MOCK-OVERRIDE-DECRYPT-KEY-ID","x": "MFqQFZrB74cDhiBHhIBg9iCB-qj86vU45dj2iA-RAjs","y": "yUOsmZh4rd3qwqXRgRCIaAyRcOj4S0mD6tEsd-aTlL0","alg": "ECDH-ES+A256KW"}';

		const mockVerifiedJws = { payload: JSON.stringify({ mockResults: "VERIFIED_JWS" }) };

		it("should use overrideDecryptKey when specified", async () => {
			const ndiHelper = new NdiOidcHelper({
				...props,
			});

			const mockDecryptJwe = jest
				.spyOn(JweUtils, "decryptJWE")
				.mockResolvedValueOnce({ payload: "DECRYPT_RESULTS" } as unknown as JWE.DecryptResult);
			const mockVerifyJWSUsingKeyStore = jest
				.spyOn(JweUtils, "verifyJwsUsingKeyStore")
				.mockResolvedValueOnce(mockVerifiedJws as unknown as JWS.VerificationResult);

			const mockJwksUrl = "https://www.mocksingpass.gov.sg/.well-known/keys";
			const mockTokenEndpoint = "https://www.mocksingpass.gov.sg/mga/sps/oauth/oauth20/token";
			const mockIssuer = "https://www.mocksingpass.gov.sg";
			const mockAuthorizationInfoEndpoint = "https://www.mocksingpass.gov.sg/authorization-info";
			const axiosMock = jest.fn();
			// First get is to get OIDC Config
			axiosMock.mockImplementationOnce(() => {
				return {
					status: 200,
					data: {
						token_endpoint: mockTokenEndpoint,
						issuer: mockIssuer,
						"authorization-info_endpoint": mockAuthorizationInfoEndpoint,
						jwks_uri: mockJwksUrl,
					},
				};
			});

			// Second get is to get JWKS
			axiosMock.mockImplementationOnce(() => {
				return {
					status: 200,
					data: {
						keys: ["MOCK_KEY"],
					},
				};
			});

			ndiHelper._testExports.getSingpassClient().get = axiosMock;

			await ndiHelper.getIdTokenPayload(mockTokenResponse, { key: mockOverrideDecryptKey, format: "json" });

			expect(axiosMock.mock.calls[0]).toEqual(expect.arrayContaining([mockOidcConfigUrl]));
			expect(axiosMock.mock.calls[1]).toEqual(expect.arrayContaining([mockJwksUrl]));

			expect(mockDecryptJwe).toHaveBeenCalledWith(mockTokenResponse.id_token, mockOverrideDecryptKey, "json");
			expect(mockVerifyJWSUsingKeyStore).toHaveBeenCalledWith("DECRYPT_RESULTS", ["MOCK_KEY"]);
			expect(axiosMock).toHaveBeenCalledTimes(2);
		});
	});

	describe("verifyUserInfo()", () => {
		const mockOverrideDecryptKey =
			// eslint-disable-next-line max-len
			'{"kty": "EC","d": "AA1YtF2O779tiuJ4Rs3UVItxgX3GFOgQ-aycS-n-lFU","use": "enc","crv": "P-256","kid": "MOCK-OVERRIDE-DECRYPT-KEY-ID","x": "MFqQFZrB74cDhiBHhIBg9iCB-qj86vU45dj2iA-RAjs","y": "yUOsmZh4rd3qwqXRgRCIaAyRcOj4S0mD6tEsd-aTlL0","alg": "ECDH-ES+A256KW"}';

		const mockVerifiedJws = { payload: JSON.stringify({ mockResults: "VERIFIED_JWS" }) };

		it("should use overrideDecryptKey when specified", async () => {
			const ndiHelper = new NdiOidcHelper({
				...props,
			});

			const mockDecryptJwe = jest
				.spyOn(JweUtils, "decryptJWE")
				.mockResolvedValueOnce({ payload: "DECRYPT_RESULTS" } as unknown as JWE.DecryptResult);
			const mockVerifyJWSUsingKeyStore = jest
				.spyOn(JweUtils, "verifyJwsUsingKeyStore")
				.mockResolvedValueOnce(mockVerifiedJws as unknown as JWS.VerificationResult);

			const mockJwksUrl = "https://www.mocksingpass.gov.sg/.well-known/keys";
			const mockTokenEndpoint = "https://www.mocksingpass.gov.sg/mga/sps/oauth/oauth20/token";
			const mockIssuer = "https://www.mocksingpass.gov.sg";
			const mockAuthorizationInfoEndpoint = "https://www.mocksingpass.gov.sg/authorization-info";
			const axiosMock = jest.fn();
			// First get is to get OIDC Config
			axiosMock.mockImplementationOnce(() => {
				return {
					status: 200,
					data: {
						token_endpoint: mockTokenEndpoint,
						issuer: mockIssuer,
						"authorization-info_endpoint": mockAuthorizationInfoEndpoint,
						jwks_uri: mockJwksUrl,
					},
				};
			});

			// Second get is to get JWKS
			axiosMock.mockImplementationOnce(() => {
				return {
					status: 200,
					data: {
						keys: ["MOCK_KEY"],
					},
				};
			});

			ndiHelper._testExports.getSingpassClient().get = axiosMock;

			await ndiHelper.verifyUserInfo(mockTokenResponse.access_token, {
				key: mockOverrideDecryptKey,
				format: "json",
			});

			expect(axiosMock.mock.calls[0]).toEqual(expect.arrayContaining([mockOidcConfigUrl]));
			expect(axiosMock.mock.calls[1]).toEqual(expect.arrayContaining([mockJwksUrl]));

			expect(mockDecryptJwe).toHaveBeenCalledWith(mockTokenResponse.id_token, mockOverrideDecryptKey, "json");
			expect(mockVerifyJWSUsingKeyStore).toHaveBeenCalledWith("DECRYPT_RESULTS", ["MOCK_KEY"]);
			expect(axiosMock).toHaveBeenCalledTimes(2);
		});
	});
});
