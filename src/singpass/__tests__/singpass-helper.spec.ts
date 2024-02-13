import { TokenPayload } from "../shared-constants";
import { OidcHelper, OidcHelperConstructor, SessionLogoutResult, SessionRefreshResult } from "../singpass-helper";

const mockAuthUrl = "https://mocksingpass.sg/authorize";
const mockLogoutUrl = "https://mocksingpass.sg/logout";
const mockTokenUrl = "https://mocksingpass.sg/token";
const mockClientId = "CLIENT-ID";
const mockClientSecret = "sshh-secret";
const mockRedirectUri = "http://mockme.sg/callback";
const mockDecryptKey = "sshh-secret";
const mockVerifyKey = "sshh-secret";

const createMockTokenPayload = (overrideProps?: Partial<TokenPayload>): TokenPayload => ({
	rt_hash: "TJXzQKancNCg3f3YQcZhzg",
	amr: ["pwd"],
	iat: 1547620274,
	iss: "https://stg-login.singpass.gov.sg",
	sub: "s=S1234567A,u=f19fdf4c-f57b-40b5-a8e0-6fb6eef640e3",
	at_hash: "5LGrRzmsFWLd360gX7HDtw",
	exp: 1547623874,
	aud: "MY-CLIENT-ID",
	...overrideProps,
});

describe("Singpass Helper", () => {
	const props: OidcHelperConstructor = {
		authorizationUrl: mockAuthUrl,
		tokenUrl: mockTokenUrl,
		clientID: mockClientId,
		clientSecret: mockClientSecret,
		redirectUri: mockRedirectUri,
		jweDecryptKey: mockDecryptKey,
		jwsVerifyKey: mockVerifyKey,
		logoutUrl: mockLogoutUrl,
	};
	const helper = new OidcHelper(props);

	describe("constructing authorization url", () => {
		it("should construct the correct authorzation endpoint", () => {
			const authUrl = helper.constructAuthorizationUrl("af0ifjsldkj", "a2ghskf1234las");
			const expected =
				"https://mocksingpass.sg/authorize?state=af0ifjsldkj&nonce=a2ghskf1234las&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=openid&client_id=CLIENT-ID&response_type=code";
			expect(authUrl).toEqual(expected);
		});

		it("should construct authorization endpoint with overwritten url", () => {
			const authUrl = helper.constructAuthorizationUrl(
				"af0ifjsldkj",
				"a2ghskf1234las",
				"https://mocksingpassoverride.sg/auth",
			);
			const expected =
				"https://mocksingpassoverride.sg/auth?state=af0ifjsldkj&nonce=a2ghskf1234las&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=openid&client_id=CLIENT-ID&response_type=code";
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

	describe("get tokens", () => {
		describe("additionalHeaders", () => {
			it("should append additional headers if provided", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						"some-header": "some-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.post = jest.fn().mockResolvedValue({
					data: { id_token: "some-token" },
				});

				await helperWithHeaders.getTokens("some-code");
				expect(helperWithHeaders._testExports.singpassClient.post).toHaveBeenCalledWith(
					expect.anything(),
					expect.anything(),
					expect.objectContaining({
						headers: expect.objectContaining({
							"some-header": "some-value",
						}),
					}),
				);
			});

			it("should NOT override reserved headers", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						"content-type": "some-override-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.post = jest.fn().mockResolvedValue({
					data: { id_token: "some-token" },
				});

				await helperWithHeaders.getTokens("some-code");
				expect(helperWithHeaders._testExports.singpassClient.post).toHaveBeenCalledWith(
					expect.anything(),
					expect.anything(),
					expect.objectContaining({
						headers: {
							"content-type": "application/x-www-form-urlencoded",
						},
					}),
				);
			});
		});
	});

	describe("refresh tokens", () => {
		describe("additionalHeaders", () => {
			it("should append additional headers if provided", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						"some-header": "some-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.post = jest.fn().mockResolvedValue({
					data: { id_token: "some-token" },
				});

				await helperWithHeaders.refreshTokens("some-code");
				expect(helperWithHeaders._testExports.singpassClient.post).toHaveBeenCalledWith(
					expect.anything(),
					expect.anything(),
					expect.objectContaining({
						headers: expect.objectContaining({
							"some-header": "some-value",
						}),
					}),
				);
			});

			it("should NOT override reserved headers", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						"content-type": "some-override-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.post = jest.fn().mockResolvedValue({
					data: { id_token: "some-token" },
				});

				await helperWithHeaders.refreshTokens("some-code");
				expect(helperWithHeaders._testExports.singpassClient.post).toHaveBeenCalledWith(
					expect.anything(),
					expect.anything(),
					expect.objectContaining({
						headers: {
							"content-type": "application/x-www-form-urlencoded",
						},
					}),
				);
			});
		});
	});

	describe("refresh session", () => {
		const constructedMockAuthUrl =
			"https://mocksingpass.sg/authorize?state=dummyState&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=openid&client_id=CLIENT-ID&response_type=code";

		describe("when refresh is successful", () => {
			it("should set a cookie header with the session ID and call singpass authorize endpoint", async () => {
				helper._testExports.singpassClient.get = jest.fn((): any =>
					Promise.resolve({
						status: 302,
						headers: {
							location: "https://localhost/singpass/callback?state=abc&code=xyz",
						},
					}),
				);
				const sessionId =
					"1_0jP8lQbVdNJWu/WNMclh6jynB9d+Ui/e3BmbiLccaVRREZkMoEQ=_AAAAAwA=_ehj7WNPdSF5ZR+ERSflwNaDaBPo=";

				const result = await helper.refreshSession(sessionId);
				expect(result).toEqual(SessionRefreshResult.SUCCESS);
				expect(helper._testExports.singpassClient.get).toHaveBeenCalledWith(constructedMockAuthUrl, {
					headers: { Cookie: `PD-S-SESSION-ID=${sessionId}` },
					maxRedirects: 0,
					validateStatus: helper._testExports.validateStatusFn,
				});
			});
		});

		describe("when refresh is unsuccessful", () => {
			describe("when session ID is invalid", () => {
				it("should set a cookie header with the session ID and call singpass authorize endpoint", async () => {
					helper._testExports.singpassClient.get = jest.fn((): any =>
						Promise.resolve({
							status: 302,
							headers: {
								location:
									"https://stg-login.singpass.gov.sg/spauth/TAMOperationHandler?TAM_OP=login&URL=%2Fmga%2Fsps%2Foauth%2Foauth20%2Fauthorize%3Fstate%3DCkxPR0lOAA%253D%253D%26nonce%3D%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3001%252Fsingpass%252Fcallback%26scope%3Dopenid%26client_id%3DBLAH-BLAH%26response_type%3Dcode%26esrvcID%3DBLAH-BLAH&AUTHNLEVEL=5",
							},
						}),
					);
					const sessionId = "0_rubbish";

					const result = await helper.refreshSession(sessionId);
					expect(result).toEqual(SessionRefreshResult.INVALID_SESSION_ID);
					expect(helper._testExports.singpassClient.get).toHaveBeenCalledWith(constructedMockAuthUrl, {
						headers: { Cookie: `PD-S-SESSION-ID=${sessionId}` },
						maxRedirects: 0,
						validateStatus: helper._testExports.validateStatusFn,
					});
				});
			});
			describe("when Singpass server returns an error", () => {
				it("should set a cookie header with the session ID and call singpass authorize endpoint", async () => {
					helper._testExports.singpassClient.get = jest.fn(() =>
						Promise.reject({
							response: {
								status: 500,
							},
						}),
					);
					const sessionId =
						"1_0jP8lQbVdNJWu/WNMclh6jynB9d+Ui/e3BmbiLccaVRREZkMoEQ=_AAAAAwA=_ehj7WNPdSF5ZR+ERSflwNaDaBPo=";

					const result = await helper.refreshSession(sessionId);
					expect(result).toEqual(SessionRefreshResult.SINGPASS_ERROR);
					expect(helper._testExports.singpassClient.get).toHaveBeenCalledWith(constructedMockAuthUrl, {
						headers: { Cookie: `PD-S-SESSION-ID=${sessionId}` },
						maxRedirects: 0,
						validateStatus: helper._testExports.validateStatusFn,
					});
				});
			});
		});

		describe("additionalHeaders", () => {
			it("should append additional headers if provided", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						"some-header": "some-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.get = jest.fn();

				await helperWithHeaders.refreshSession("some-id");
				expect(helperWithHeaders._testExports.singpassClient.get).toHaveBeenCalledWith(
					expect.anything(),
					expect.objectContaining({
						headers: expect.objectContaining({
							"some-header": "some-value",
						}),
					}),
				);
			});

			it("should NOT override reserved headers", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						Cookie: "some-override-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.get = jest.fn();

				await helperWithHeaders.refreshSession("some-id");
				expect(helperWithHeaders._testExports.singpassClient.get).toHaveBeenCalledWith(
					expect.anything(),
					expect.objectContaining({
						headers: {
							Cookie: "PD-S-SESSION-ID=some-id",
						},
					}),
				);
			});
		});
	});

	describe("logout user's session", () => {
		describe("When logout url has not been set", () => {
			it("should throw an error", () => {
				const helperWithoutLogout = new OidcHelper({ ...props, logoutUrl: undefined });

				const sessionId =
					"1_0jP8lQbVdNJWu/WNMclh6jynB9d+Ui/e3BmbiLccaVRREZkMoEQ=_AAAAAwA=_ehj7WNPdSF5ZR+ERSflwNaDaBPo=";
				expect(helperWithoutLogout.logoutOfSession(sessionId)).rejects.toThrowError();
			});
		});
		describe("when logout is successful", () => {
			it("should set a cookie header with the session ID and call singpass logout endpoint", async () => {
				helper._testExports.singpassClient.get = jest.fn().mockReturnValue(
					Promise.resolve({
						status: 200,
					}),
				);
				const sessionId =
					"1_0jP8lQbVdNJWu/WNMclh6jynB9d+Ui/e3BmbiLccaVRREZkMoEQ=_AAAAAwA=_ehj7WNPdSF5ZR+ERSflwNaDaBPo=";

				const result = await helper.logoutOfSession(sessionId);
				expect(result).toEqual(SessionLogoutResult.SUCCESS);
				expect(helper._testExports.singpassClient.get).toHaveBeenCalledWith(mockLogoutUrl, {
					headers: { Cookie: `PD-S-SESSION-ID=${sessionId}` },
				});
			});
		});

		describe("when logout is unsuccessful", () => {
			describe("when Singpass server returns an error", () => {
				it("should set a cookie header with the session ID and call singpass logout endpoint", async () => {
					helper._testExports.singpassClient.get = jest.fn(() =>
						Promise.reject({
							response: {
								status: 500,
							},
						}),
					);
					const sessionId =
						"1_0jP8lQbVdNJWu/WNMclh6jynB9d+Ui/e3BmbiLccaVRREZkMoEQ=_AAAAAwA=_ehj7WNPdSF5ZR+ERSflwNaDaBPo=";

					const result = await helper.logoutOfSession(sessionId);
					expect(result).toEqual(SessionLogoutResult.SINGPASS_ERROR);
					expect(helper._testExports.singpassClient.get).toHaveBeenCalledWith(mockLogoutUrl, {
						headers: { Cookie: `PD-S-SESSION-ID=${sessionId}` },
					});
				});
			});
		});

		describe("additionalHeaders", () => {
			it("should append additional headers if provided", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						"some-header": "some-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.get = jest.fn();

				await helperWithHeaders.logoutOfSession("some-id");
				expect(helperWithHeaders._testExports.singpassClient.get).toHaveBeenCalledWith(
					expect.anything(),
					expect.objectContaining({
						headers: expect.objectContaining({
							"some-header": "some-value",
						}),
					}),
				);
			});

			it("should NOT override reserved headers", async () => {
				const helperWithHeaders = new OidcHelper({
					...props,
					additionalHeaders: {
						Cookie: "some-override-value",
					},
				});
				helperWithHeaders._testExports.singpassClient.get = jest.fn();

				await helperWithHeaders.logoutOfSession("some-id");
				expect(helperWithHeaders._testExports.singpassClient.get).toHaveBeenCalledWith(
					expect.anything(),
					expect.objectContaining({
						headers: {
							Cookie: "PD-S-SESSION-ID=some-id",
						},
					}),
				);
			});
		});
	});
});
