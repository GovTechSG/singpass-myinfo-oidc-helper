import { NdiOidcHelper, NdiOidcHelperConstructor } from "../singpass-helper-ndi";
import { TokenPayload } from '../shared-constants';

const mockOidcConfigUrl = "https://mocksingpass.sg/authorize";
const mockClientId = "CLIENT-ID";
const mockRedirectUri = "http://mockme.sg/callback";
const mockDecryptKey = "sshh-secret";
const mockSignKey = "sshh-secret";

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

// tslint:disable-next-line: no-big-function
describe("NDI Singpass Helper", () => {
	const props: NdiOidcHelperConstructor = {
		oidcConfigUrl: mockOidcConfigUrl,
		clientID: mockClientId,
		redirectUri: mockRedirectUri,
		jweDecryptKey: {key: mockDecryptKey},
		clientAssertionSignKey: {key:mockSignKey},
	};
	const helper = new NdiOidcHelper(props);

	describe("constructing authorization url", () => {
		it("should construct the correct authorzation endpoint", async () => {
			helper._testExports.getSingpassClient().get = jest.fn((): any => Promise.resolve({
				status: 200,
				data: {
					authorization_endpoint: "https://mocksingpass.sg/authorize",
				},
			}));
			const authUrl = await helper.constructAuthorizationUrl(
				"af0ifjsldkj",
				"a2ghskf1234las",
			);
			const expected = "https://mocksingpass.sg/authorize?state=af0ifjsldkj&nonce=a2ghskf1234las&redirect_uri=http%3A%2F%2Fmockme.sg%2Fcallback&scope=openid&client_id=CLIENT-ID&response_type=code";
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
			expect(() => helper.extractNricAndUuidFromPayload(mockPayload)).toThrowError("Token payload sub property is not defined");
		});

		it("should throw an error if sub property does not contain a valid NRIC", () => {
			const mockPayload = createMockTokenPayload({
				sub: `s=some-nonsense,u=f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3`,
			});

			expect(() => helper.extractNricAndUuidFromPayload(mockPayload)).toThrowError("Token payload sub property is invalid, does not contain valid NRIC and uuid string");
		});

		it("should throw an error if sub property is not in the expected format", () => {
			const mockPayload = createMockTokenPayload({
				sub: `s=S6005040F,f=f09fcf4c-f57b-40b5-a8e0-6fb6eef640e3`,
			});

			expect(() => helper.extractNricAndUuidFromPayload(mockPayload)).toThrowError("Token payload sub property is invalid, does not contain valid NRIC and uuid string");
		});
	});
});
