import { TokenResponse } from "../../singpass/shared-constants";
import { extractJwtHeader, extractKidFromIdToken } from "../JweUtil";
import { SingpassMyInfoError } from "../error/SingpassMyinfoError";


describe("extractJwtHeader", () => {
	it("should extract JWT header", () => {
		const SAMPLE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
		expect(extractJwtHeader(SAMPLE_JWT)).toStrictEqual({
			"alg": "HS256",
			"typ": "JWT"
		});
	});
});

describe("extractKidFromIdToken", () => {
	const SAMPLE_JWT_WITHOUT_KID = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
	const SAMPLE_JWT_WITH_KID = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRlc3Qta2lkIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.dcwcwIMbXPoifMvEnN_SlEEYOoErMH7CchiTQ8m9oy8';
	it("should throw error when id_token header does not contain kid", () => {
		const SAMPLE_TOKEN: TokenResponse = {
			access_token: "",
			refresh_token: "",
			id_token: SAMPLE_JWT_WITHOUT_KID,
			token_type: "",
			expires_in: 0,
			scope: ""
		};
		expect(() => extractKidFromIdToken(SAMPLE_TOKEN)).toThrow(SingpassMyInfoError);
	});
	it("should return kid in id_token", () => {
		const SAMPLE_TOKEN: TokenResponse = {
			access_token: "",
			refresh_token: "",
			id_token: SAMPLE_JWT_WITH_KID,
			token_type: "",
			expires_in: 0,
			scope: ""
		};
		expect(extractKidFromIdToken(SAMPLE_TOKEN)).toEqual('test-kid');
	});
});
