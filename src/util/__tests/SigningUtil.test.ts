import * as SigningUtil from "../SigningUtil";

const sandboxPvtKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZe3ilItIfTMCK\nsvWHP+6ZCbdc9OH/LSUugwB4NKup659UONj4d8t5dNezmL3tl3Mq8vOTRGZYnQHA\nEugicBnqBfJLJJtXK6AZvoF/0DwYNdIcbpZzLZHuCbP2mE8pvV7pbC9ceWJ+8BtZ\ns95eLUb+DlA3u1BZgDSPkr8iEawEIBXpkhjF+Xm1thFHQHmFoOKepBGYVKhg6UEh\nw7WmPtqjfecmzuh9p4cJICgZwJBMhrUSZ/+6go8lBGgYgLHnHCu68F4PWAo1AwAA\nqy4Ek/ywxmbGkg6+jqGDh6/5C5p0A8w6re84acfBzyHiTif9NHC4XffiPI0onCVp\ntkIsjRMRAgMBAAECggEAAzZB6mJwxJosFjOD0WSkbMMwrGFISZRmAhSL0bqpaSy7\n+vdZ92JBiyb3UCvRBkZgPFtyzuAWonfMwLfAXbdwUon8izD2HSjD4dpAuSpr1zAY\nTQFlgtVcXEeHAZaieKtw0IHsbL4bZWRWnkUI42guYVTE/FKHL1zOEFH3aHsaIl3V\n+LJDP6zhlD9QuRvJYNBMWgFUP9bMLqXUpYeH2q/6Dn0Z5lCHP6/wTpHrDYvfthds\nZd59rgeYk8BZ0VxY7j1kchLY28rk/8+zvwVNxORyhQebci7KHP8hJGSAOiKJsCiW\nN6Bin7ofmu9ukzfNygtQ39yM89Cg/xJRUq9QLXoS6QKBgQDzeqzaL/AMRi9o8ih4\n52W6+sqZteKdYpVzuusJ41D0dpzG8xvTl8+gseb3cCuSMomKAXrJexwNC8NlCF20\nIXdblv1/PGhKwkVWdY5grqr10jTSuJW7WIXuXlc7TR7uINwX7wV8bRQNoMk2rQcr\ns9iKvVC//BQq7c85XxzloPUVrQKBgQDkqo4wWLGTb3K5CrdwycyAWV/J1P843tmA\n6/hjO8RBuXeSI+ApEwWGnpOB5Y+wAbnbuJcAayCFtap/sA5+34E+NCn0hzLuNWD4\nP+edpib3nUkPwmKNYOQ+J8vdbTkhkwJ4cBqkVHymx3u/E/UEoblI7rF9T3TKusiV\n+cSW0Ko3dQKBgQCMVuZw8PatLHtBQ2s+nSoPB2VmCeewDdXVGiVF0sej0QZ2ykP8\nx2E+36wgbYA/yW9ro4Sxw4scne4nOxY/sJaKrVI6V4hJpwauWh4R7jvOazZVS13K\n2bCA/9HJ9Z7hZQFXrkb8PCc137p7EGq0rvoephZ4QoUhZWdvSzptxUPfFQKBgQDK\nb1+v12Vl091pid46gLyFyBmwEdvc2hUOOFlOaKPnV61OeGpDkq5qrkqCTdu2AuEq\nbrFn0m8ZUGnf3toGYhIGIqId8+8XybPOMqz2+Rg4UEtVI06iQOvvRsYJgl94pLAk\nNYKwhodQEvwvfhiFADOLKJ2DBWus6k0X0OXEani23QKBgBl/PU8oouRqx2tz1vpj\n9GxnlJZG9DUlaO/uilBjFSyrKLbNJxpYtEpSANUgg7G1GowxhqpuBXqqQAWUIgSs\nuA6XmTIguQMgtuuBcGiSfPkA1qmbQyoJqriEzbzjM/4HBW9rW3+0M7c+bhR8eczz\nhVsivdEqfvpsBTziCpVkzrA/\n-----END PRIVATE KEY-----\n";
const sandboxKeyPass = "password";

describe("generateApexAuthorizationHeader", () => {

	const realm = "http://mockrealm.com/";
	const authPrefix = "apex";
	const httpMethod = SigningUtil.HttpMethod.POST;
	const url = "https://endpoint.com";
	const appId = "Mock_App";
	const formJson = {};
	const privateKeyContent = sandboxPvtKey;
	const privateKeyPassword = sandboxPvtKey;

	it("capitalises auth prefix", () => {
		const header = SigningUtil.generateApexAuthorizationHeader(
			realm,
			authPrefix,
			httpMethod,
			url,
			appId,
			formJson,
			privateKeyContent,
			privateKeyPassword,
		);
		expect(header.slice(0, 4)).toBe("Apex");
	});

	it("generates all auth attributes in specific sequence and proper format", () => {
		const header = SigningUtil.generateApexAuthorizationHeader(
			realm,
			authPrefix,
			httpMethod,
			url,
			appId,
			formJson,
			privateKeyContent,
			privateKeyPassword,
		);
		const tokenisedHdr = header.split(", ");
		expect(tokenisedHdr.length).toBe(7);
		expect(tokenisedHdr[0].startsWith("Apex realm=")).toBe(true);
		expect(tokenisedHdr[1].startsWith("apex_app_id=")).toBe(true);
		expect(tokenisedHdr[2].startsWith("apex_nonce=")).toBe(true);
		expect(tokenisedHdr[3]).toBe("apex_signature_method=\"SHA256withRSA\"");
		expect(tokenisedHdr[4].startsWith("apex_timestamp=")).toBe(true);
		expect(tokenisedHdr[5]).toBe("apex_version=\"1.0\"");
		expect(tokenisedHdr[6].startsWith("apex_signature=")).toBe(true);
	});

	it("appends a bearer attribute if supplied with argument", () => {
		const mock_bearer = "val";
		const header = SigningUtil.generateApexAuthorizationHeader(
			realm,
			authPrefix,
			httpMethod,
			url,
			appId,
			formJson,
			privateKeyContent,
			privateKeyPassword,
			mock_bearer,
		);
		const tokenisedHdr = header.split(", ");
		expect(tokenisedHdr[7]).toBe(`Bearer ${mock_bearer}`);
	});
});

describe("generateApexAuthorizationHeader using mock MyInfo STG arguments", () => {
	it("should return correct auth header for POST requests (Token API)", () => {
		const mockParams = {
			realm: "http://localhost:3001",
			authPrefix: "apex",
			httpMethod: SigningUtil.HttpMethod.POST,
			url: "https://myinfo.api.gov.sg/test/v1/token",
			appId: "MyInfo_SelfTest",
			formJson: {
				grant_type: "authorization_code",
				code: "49f9c399-2ac9-4f4b-ae90-3c708bfe81d8",
				redirect_uri: "http://localhost:3001/callback",
				client_id: "MyInfo_SelfTest",
				client_secret: "password",
			},
			privateKeyContent: sandboxPvtKey,
			privateKeyPassword: sandboxKeyPass,
			bearer: null,
			nonce: "151546019041000",
			timestamp: 1515460190411,
		};

		const header = SigningUtil.generateApexAuthorizationHeader(
			mockParams.realm,
			mockParams.authPrefix,
			mockParams.httpMethod,
			mockParams.url,
			mockParams.appId,
			mockParams.formJson,
			mockParams.privateKeyContent,
			mockParams.privateKeyPassword,
			mockParams.bearer,
			mockParams.nonce,
			mockParams.timestamp,
		);
		expect(header).toBe(`Apex realm=\"http://localhost:3001\", apex_app_id=\"MyInfo_SelfTest\", apex_nonce=\"151546019041000\", apex_signature_method=\"SHA256withRSA\", apex_timestamp=\"1515460190411\", apex_version=\"1.0\", apex_signature=\"J5wFaG37wgKkpMkppXYJHO0jT7X57ZvtqA2l4xfK3Avi/p2hfN2aCojK7OxuVY4R2/VHnZRkjgOb8u56JnTptGjRm+0rQZmuqyP0vPwKTmg4nPn9eYRfje/lyLg8O/f+yDAkuk3wfB7xjdvWjizV61Q6S7edDErH1t/ME1vGxUVb+iB+1dGk/H3yPi8whWFRpfSZ7MaJvawR4U0tso8CtfJ+zUPZDaMPTD/kU4fFAbueOkG54C5pb2WBgdF5GbDWy1aQ2b6qoXBzPwOwrFjz+OXjS9ePb2xwFhZU+KuMDj8VLiPCZrs2Ph5gRWPkjadPJGqHMvEk/3V7HbOPRBNeFA==\"`);
	});

	it("should return correct auth header for GET requests (Person API)", () => {
		const mockParams = {
			realm: "http://localhost:3001",
			authPrefix: "apex",
			httpMethod: SigningUtil.HttpMethod.GET,
			url: "https://myinfo.api.gov.sg/test/v1/person/S9812381D/",
			appId: "MyInfo_SelfTest",
			formJson: {
				client_id: "MyInfo_SelfTest",
				attributes: "name,sex,race,nationality,dob,email,mobileno,regadd,housingtype,hdbtype,marital,edulevel,assessableincome,hanyupinyinname,aliasname,hanyupinyinaliasname,marriedname,cpfcontributions,cpfbalances",
			},
			privateKeyContent: sandboxPvtKey,
			privateKeyPassword: sandboxKeyPass,
			bearer: null,
			nonce: "151546019130900",
			timestamp: 1515460191309,
		};

		const header = SigningUtil.generateApexAuthorizationHeader(
			mockParams.realm,
			mockParams.authPrefix,
			mockParams.httpMethod,
			mockParams.url,
			mockParams.appId,
			mockParams.formJson,
			mockParams.privateKeyContent,
			mockParams.privateKeyPassword,
			mockParams.bearer,
			mockParams.nonce,
			mockParams.timestamp,
		);
		expect(header).toBe(`Apex realm=\"http://localhost:3001\", apex_app_id=\"MyInfo_SelfTest\", apex_nonce=\"151546019130900\", apex_signature_method=\"SHA256withRSA\", apex_timestamp=\"1515460191309\", apex_version=\"1.0\", apex_signature=\"gD/b2J4FL1fnRZV2h+Su7lkzOzhkLooIlRhSgER/dZVeKrEuH6/Jmo62GSLUrOa+bsMwT57TDBDR1ma/Q5UJmk44XLxO8AChuN/plkaHswSXNFEo8cYRb7UsbLEdnHx6GqLSWhNX0UR/XG34djteHDdG3bakAdkWg1pBd7/u7oDC6Vp4ekfq9os4Ho/keqHideyP7rHsFq7y8bYideeq7xxu/eDLX9tR4X+Itb+tpB8ijEOLFRwdFEHxCB3AbBFCASoQDI4UycUPLkQ9gbSiW8H4VgG81l1+N4V2+5BcemUHJjSVAmpBIVJ1YRgKNFnXnrTez53ylgbR3nHMh60FIw==\"`);
	});
});

describe("generateMyInfoAuthorizationHeader using mock MyInfo STG arguments", () => {
	it("should generate the correct auth header", () => {
		const mockParams = {
			url: "https://test.api.myinfo.gov.sg/gov/v3/person-basic",
			queryParams: {
				client_id: "MyInfo_SelfTest",
				sp_esvcId: "Singpass_Eservice_id",
				attributes: "name,sex,race,nationality,dob,email,mobileno,regadd,housingtype,hdbtype,marital,edulevel,assessableincome,hanyupinyinname,aliasname,hanyupinyinaliasname,marriedname,cpfcontributions,cpfbalances",
			},
			method: SigningUtil.HttpMethod.GET,
			appId: "MyInfo_SelfTest",
			signingKey: sandboxPvtKey,
			nonce: 151546019130900,
			timestamp: 1515460191309,
			signingKeyPassphrase: sandboxKeyPass,
		};

		const header = SigningUtil.generateMyInfoAuthorizationHeader(
			mockParams.url,
			mockParams.queryParams,
			mockParams.method,
			mockParams.appId,
			mockParams.signingKey,
			mockParams.nonce,
			mockParams.timestamp,
			mockParams.signingKeyPassphrase,
		);

		expect(header).toBe(`PKI_SIGN app_id=\"MyInfo_SelfTest\",nonce=\"151546019130900\",signature_method=\"RS256\",signature=\"WaWVjNfMaUuY5kFsc+jeL9SZYYIFn0me+UA9DLnS4hPjZ9IDwouUKliB8X0G6cIDVJNclA1pCaAKdcEtQoGEtKzWSsaYzuUUCByEP1/QVCEJ2MsNfaV6UnfvQEkAxoA05VGgOqKI38r667drVuj/a2zEaUo514dYkkRdPdsFs9OgGwvsG6Hkn5DHl+l5G+Bj0vfrrZJL9DyOYNW23odg6EqSj+XpFVfmBoJ7htnKorJZvp0jv8fQpR9FN2rws0LDuQ0/UMpsnEWax+z8AFuRxzH88CIQFrIxNzymhIR23HS3LbzLqAbTAMyRuXiWjV0xyNufa39hJj+qaNXoicDXIw==\",timestamp=\"1515460191309\"`);
	});
});
