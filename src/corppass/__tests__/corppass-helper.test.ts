import { IdTokenPayload, OidcHelper, OidcHelperConstructor } from "../corppass-helper";

const mockAuthUrl = "https://mockcorppass.sg/authorize";
const mockTokenUrl = "https://mockcorppass.sg/token";
const mockClientId = "CLIENT-ID";
const mockClientSecret = "sshh-secret";
const mockRedirectUri = "http://mockme.sg/callback";
const mockDecryptKey = "sshh-secret";
const mockVerifyKey = "sshh-secret";

const createMockIdTokenPayload = (overrideProps?: Partial<IdTokenPayload>): IdTokenPayload => ({
	userInfo: {
		CPAccType: "Admin",
		CPUID_FullName: "FRODO BAGGINS",
		ISSPHOLDER: "YES",
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

describe("Corppass Helper", () => {
	const props: OidcHelperConstructor = {
		authorizationUrl: mockAuthUrl,
		tokenUrl: mockTokenUrl,
		clientID: mockClientId,
		clientSecret: mockClientSecret,
		redirectUri: mockRedirectUri,
		jweDecryptKey: mockDecryptKey,
		jwsVerifyKey: mockVerifyKey,
	};
	const helper = new OidcHelper(props);

	describe("constructing authorization url", () => {
		it("should construct the correct authorzation endpoint", () => {
			const authUrl = helper.constructAuthorizationUrl(
				"af0ifjsldkj",
				"a2ghskf1234las",
			);
			const expected = "https://mockcorppass.sg/authorize?state=af0ifjsldkj&nonce=a2ghskf1234las&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=openid&client_id=CLIENT-ID&response_type=code";
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
			expect(() => helper.extractInfoFromIdTokenSubject(mockPayload)).toThrowError("Token payload sub property is not defined");
		});

		it("should throw an error if sub property does not contain a valid NRIC", () => {
			const mockPayload = createMockIdTokenPayload({
				sub: `s=some-nonsense,u=f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3`,
			});

			expect(() => helper.extractInfoFromIdTokenSubject(mockPayload)).toThrowError("Token payload sub property is invalid, does not contain valid NRIC");
		});
	});
});
