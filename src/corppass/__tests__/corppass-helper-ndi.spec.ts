import { NDIIdTokenPayload, NdiOidcHelper, NdiOidcHelperConstructor } from "../corppass-helper-ndi";
import { TokenResponse } from "../shared-constants";
import * as JweUtils from "../../util/JweUtil";
import { JWS } from "node-jose";

const mockOidcConfigUrl = "https://mockcorppass.sg/authorize";
const mockClientId = "CLIENT-ID";
const mockRedirectUri = "http://mockme.sg/callback";
const mockDecryptKey =
	'{"kty": "EC","d": "AA1YtF2O779tiuJ4Rs3UVItxgX3GFOgQ-aycS-n-lFU","use": "enc","crv": "P-256","kid": "odRFtcGZYAwsS4WtQWdbwdVXuAdHt4VoqFX6VwAXrmQ","x": "MFqQFZrB74cDhiBHhIBg9iCB-qj86vU45dj2iA-RAjs","y": "yUOsmZh4rd3qwqXRgRCIaAyRcOj4S0mD6tEsd-aTlL0","alg": "ECDH-ES+A256KW"}';
const mockSignKey =
	'{"kty": "EC","d": "QMS1DAh9RHzH7Oqj2FL5FW1j7FeQWqNjIfoaSfV14x8","use": "sig","crv": "P-256","kid": "jqjQh6u7LHFFxCPf12PqBzbDfpnqL9I0qR8Gqllq6vU","x": "17aNA7ePDntFNM0hKfTFcFoXhHK0nJ7n4zDwXfwi22s","y": "fGJn6q2zQitVVJY91Fr1oe4bErqy5SL3V4AC4e_4dmQ","alg": "ES256"}';

const createMockIdTokenPayload = (overrideProps?: Partial<NDIIdTokenPayload>): NDIIdTokenPayload => ({
	userInfo: {
		CPAccType: "Admin",
		CPUID_FullName: "FRODO BAGGINS",
		ISSPHOLDER: "YES",
	},
	entityInfo: {
		CPEntID: "S12345K",
		CPEnt_TYPE: "UEN",
		CPEnt_Status: "",
		CPNonUEN_Country: "SG",
		CPNonUEN_RegNo: "",
		CPNonUEN_Name: "",
	},
	rt_hash: "TJXzQKancNCg3f3YQcZhzg",
	amr: ["pwd"],
	iat: 1547620274,
	iss: "https://stg-saml.corppass.gov.sg",
	sub: "s=S1234567A,u=CP8202,c=SG",
	at_hash: "5LGrRzmsFWLd360gX7HDtw",
	exp: 1547623874,
	aud: "MY-CLIENT-ID",
	...overrideProps,
});

// tslint:disable-next-line: no-big-function
describe("NDI Corppass Helper", () => {
	const props: NdiOidcHelperConstructor = {
		oidcConfigUrl: mockOidcConfigUrl,
		clientID: mockClientId,
		redirectUri: mockRedirectUri,
		jweDecryptKey: { key: mockDecryptKey, format: "json" },
		clientAssertionSignKey: { key: mockSignKey, alg: "ES256" },
	};
	const helper = new NdiOidcHelper(props);

	describe("constructing authorization url", () => {
		it("should construct the correct authorzation endpoint", async () => {
			helper._testExports.getCorppassClient().get = jest.fn((): any =>
				Promise.resolve({
					status: 200,
					data: {
						authorization_endpoint: "https://mockcorppass.sg/authorize",
					},
				}),
			);
			const authUrl = await helper.constructAuthorizationUrl("af0ifjsldkj", "a2ghskf1234las");
			const expected =
				"https://mockcorppass.sg/authorize?state=af0ifjsldkj&nonce=a2ghskf1234las&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=openid&client_id=CLIENT-ID&response_type=code";
			expect(authUrl).toEqual(expected);
		});
	});

	describe("extracting nric, uuid and country code from payload", () => {
		it("should extract the nric, uuid and country code from the payload", () => {
			const mockNric = "S1234567X";
			const mockUuid = "f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3";
			const mockCountryCode = "SG";

			const mockPayload = createMockIdTokenPayload({
				sub: `s=${mockNric},u=${mockUuid},c=${mockCountryCode}`,
			});
			const { nric, uuid, countryCode } = helper.extractInfoFromIdTokenSubject(mockPayload);
			expect(nric).toEqual(mockNric);
			expect(uuid).toEqual(mockUuid);
			expect(countryCode).toEqual(mockCountryCode);
		});

		it("should throw an error if payload does not have the property 'sub'", () => {
			const mockPayload = createMockIdTokenPayload({
				sub: undefined,
			});
			expect(() => helper.extractInfoFromIdTokenSubject(mockPayload)).toThrowError(
				"Token payload sub property is not defined",
			);
		});

		it("should throw an error if sub property does not contain a valid NRIC", () => {
			const mockPayload = createMockIdTokenPayload({
				sub: `s=some-nonsense,u=f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3`,
			});

			expect(() => helper.extractInfoFromIdTokenSubject(mockPayload)).toThrowError(
				"Token payload sub property is invalid, does not contain valid NRIC",
			);
		});
	});

	describe("getTokens()", () => {
		it("should use proxy url when specific", async () => {
			const corppassHelper = new NdiOidcHelper({
				...props,
				proxyBaseUrl: "https://www.proxy.gov.sg",
				additionalHeaders: { "x-api-token": "TOKEN" },
			});
			const axiosMock = jest.fn((): any =>
				Promise.resolve({
					status: 200,
					data: {
						token_endpoint: "https://mockcorppass.sg/mga/sps/oauth/oauth20/token",
						issuer: "https://mockcorppass.sg",
					},
				}),
			);
			const axiosPostMock = jest.fn((): any =>
				Promise.resolve({
					status: 200,
					data: {
						id_token: "TEST",
					},
				}),
			);
			corppassHelper._testExports.getCorppassClient().get = axiosMock;
			corppassHelper._testExports.getCorppassClient().post = axiosPostMock;

			expect((await corppassHelper.getTokens("TEST")).id_token).toBe("TEST");
			expect(axiosPostMock).toBeCalledTimes(1);
			expect(axiosPostMock.mock.calls[0]).toEqual(
				expect.arrayContaining([
					"https://www.proxy.gov.sg/mga/sps/oauth/oauth20/token",
					{ headers: { "content-type": "application/x-www-form-urlencoded", "x-api-token": "TOKEN" } },
				]),
			);
		});
	});

	describe("Authorisation info api", () => {
		const MOCK_TOKEN: TokenResponse = {
			access_token: 'MOCK_ACCESS_TOKEN',
			refresh_token: "MOCK_REFRESH_TOKEN",
			id_token: "MOCK_ID_TOKEN",
			token_type: "bearer",
			expires_in: 599,
			scope: "openid"
		};

		const MOCK_AUTH_INFO = {
			"Result_Set": {
				"ESrvc_Row_Count": 1,
				"ESrvc_Result": [{
					"CPESrvcID": "EserviceId",
					"Auth_Result_Set":
					{
						"Row_Count": 2,
						"Row": [{
							"CPEntID_SUB": "",
							"CPRole": "CorppassRole",
							"StartDate": "2024-01-16",
							"EndDate": "9999-12-31",
							"Parameter": [{
								"name": "Agencies",
								"value": "AGY"
							}]
						}, {
							"CPEntID_SUB": "",
							"CPRole": "CorppassRole",
							"StartDate": "2000-01-16",
							"EndDate": "2000-12-31",
							"Parameter": [{
								"name": "Agencies",
								"value": "AGY"
							}]
						}]
					}
				}, {
					"CPESrvcID": "EserviceId2",
					"Auth_Result_Set":
					{
						"Row_Count": 1,
						"Row": [{
							"CPEntID_SUB": "",
							"CPRole": "CorppassRole",
							"StartDate": "2000-01-16",
							"EndDate": "2000-12-31",
							"Parameter": [{
								"name": "Agencies",
								"value": "AGY"
							}]
						}]
					}
				}]
			}
		};

		const MOCK_RAW_AUTH_PAYLOAD = {
			aud: "",
			iat: 0,
			iss: "",
			exp: 0,
			AuthInfo: JSON.stringify(MOCK_AUTH_INFO),
		};
		const MOCK_AUTH_PAYLOAD = { ...MOCK_RAW_AUTH_PAYLOAD, AuthInfo: MOCK_AUTH_INFO };

		const MOCK_ADDITIONAL_HEADERS = { "x-api-token": "TOKEN" };
		it("should use proxy url when specific", async () => {
			const corppassHelper = new NdiOidcHelper({
				...props,
				proxyBaseUrl: "https://www.proxy.gov.sg",
				additionalHeaders: MOCK_ADDITIONAL_HEADERS,
			});

			const mockVerifyJwsUsingKeyStore = jest.spyOn(JweUtils, "verifyJwsUsingKeyStore").mockResolvedValueOnce({ payload: JSON.stringify(MOCK_RAW_AUTH_PAYLOAD) } as unknown as JWS.VerificationResult);

			const axiosMock = jest.fn();
			// First get is to get OIDC Config
			axiosMock.mockImplementationOnce(() => {
				return {
					status: 200,
					data: {
						token_endpoint: "https://mockcorppass.sg/mga/sps/oauth/oauth20/token",
						issuer: "https://mockcorppass.sg",
						'authorization-info_endpoint': "https://mockcorppass.sg/authorization-info",
						jwks_uri: "https://mockcorppass.sg/.well-known/keys",

					},
				};
			});

			// Second get is to get JWKS
			axiosMock.mockImplementationOnce(() => {
				return {
					status: 200,
					data: {
						keys: "MOCK_KEYS",

					},
				};
			});

			const axiosPostMock = jest.fn((): any =>
				Promise.resolve({
					status: 200,
					data: "TEST_AUTH_INFO_TOKEN"
					,
				}),
			);

			corppassHelper._testExports.getCorppassClient().get = axiosMock;
			corppassHelper._testExports.getCorppassClient().post = axiosPostMock;

			expect(await corppassHelper.getAuthorisationInfoTokenPayload(MOCK_TOKEN)).toStrictEqual(MOCK_AUTH_PAYLOAD);

			expect(axiosMock.mock.calls[0]).toEqual(
				expect.arrayContaining([
					mockOidcConfigUrl,
					{ headers: MOCK_ADDITIONAL_HEADERS },
				]),
			);
			expect(axiosMock.mock.calls[1]).toEqual(
				expect.arrayContaining([
					'https://www.proxy.gov.sg/.well-known/keys',
					{ headers: MOCK_ADDITIONAL_HEADERS },
				]),
			);

			expect(mockVerifyJwsUsingKeyStore).toHaveBeenCalledWith('TEST_AUTH_INFO_TOKEN', 'MOCK_KEYS');
			expect(axiosMock).toHaveBeenCalledTimes(2);
			expect(axiosPostMock).toHaveBeenCalledTimes(1);
			expect(axiosPostMock.mock.calls[0]).toEqual(
				expect.arrayContaining([
					"https://www.proxy.gov.sg/authorization-info",
					null,
					{ headers: { "Authorization": `Bearer ${MOCK_TOKEN.access_token}`, ...MOCK_ADDITIONAL_HEADERS } },
				]),
			);
		});

		it("should extract active auth result", async () => {
			const corppassHelper = new NdiOidcHelper({
				...props,
				proxyBaseUrl: "https://www.proxy.gov.sg",
				additionalHeaders: MOCK_ADDITIONAL_HEADERS,
			});
			expect(corppassHelper.extractActiveAuthResultFromAuthInfoToken(MOCK_AUTH_PAYLOAD)).toStrictEqual({
				EserviceId: [{
					"CPEntID_SUB": "",
					"CPRole": "CorppassRole",
					"StartDate": "2024-01-16",
					"EndDate": "9999-12-31",
					"Parameter": [{
						"name": "Agencies",
						"value": "AGY"
					}]
				}],
				EserviceId2: []
			});

		});
	});
});
