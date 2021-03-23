import * as SigningUtil from "../SigningUtil";

const sandboxPvtKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZe3ilItIfTMCK\nsvWHP+6ZCbdc9OH/LSUugwB4NKup659UONj4d8t5dNezmL3tl3Mq8vOTRGZYnQHA\nEugicBnqBfJLJJtXK6AZvoF/0DwYNdIcbpZzLZHuCbP2mE8pvV7pbC9ceWJ+8BtZ\ns95eLUb+DlA3u1BZgDSPkr8iEawEIBXpkhjF+Xm1thFHQHmFoOKepBGYVKhg6UEh\nw7WmPtqjfecmzuh9p4cJICgZwJBMhrUSZ/+6go8lBGgYgLHnHCu68F4PWAo1AwAA\nqy4Ek/ywxmbGkg6+jqGDh6/5C5p0A8w6re84acfBzyHiTif9NHC4XffiPI0onCVp\ntkIsjRMRAgMBAAECggEAAzZB6mJwxJosFjOD0WSkbMMwrGFISZRmAhSL0bqpaSy7\n+vdZ92JBiyb3UCvRBkZgPFtyzuAWonfMwLfAXbdwUon8izD2HSjD4dpAuSpr1zAY\nTQFlgtVcXEeHAZaieKtw0IHsbL4bZWRWnkUI42guYVTE/FKHL1zOEFH3aHsaIl3V\n+LJDP6zhlD9QuRvJYNBMWgFUP9bMLqXUpYeH2q/6Dn0Z5lCHP6/wTpHrDYvfthds\nZd59rgeYk8BZ0VxY7j1kchLY28rk/8+zvwVNxORyhQebci7KHP8hJGSAOiKJsCiW\nN6Bin7ofmu9ukzfNygtQ39yM89Cg/xJRUq9QLXoS6QKBgQDzeqzaL/AMRi9o8ih4\n52W6+sqZteKdYpVzuusJ41D0dpzG8xvTl8+gseb3cCuSMomKAXrJexwNC8NlCF20\nIXdblv1/PGhKwkVWdY5grqr10jTSuJW7WIXuXlc7TR7uINwX7wV8bRQNoMk2rQcr\ns9iKvVC//BQq7c85XxzloPUVrQKBgQDkqo4wWLGTb3K5CrdwycyAWV/J1P843tmA\n6/hjO8RBuXeSI+ApEwWGnpOB5Y+wAbnbuJcAayCFtap/sA5+34E+NCn0hzLuNWD4\nP+edpib3nUkPwmKNYOQ+J8vdbTkhkwJ4cBqkVHymx3u/E/UEoblI7rF9T3TKusiV\n+cSW0Ko3dQKBgQCMVuZw8PatLHtBQ2s+nSoPB2VmCeewDdXVGiVF0sej0QZ2ykP8\nx2E+36wgbYA/yW9ro4Sxw4scne4nOxY/sJaKrVI6V4hJpwauWh4R7jvOazZVS13K\n2bCA/9HJ9Z7hZQFXrkb8PCc137p7EGq0rvoephZ4QoUhZWdvSzptxUPfFQKBgQDK\nb1+v12Vl091pid46gLyFyBmwEdvc2hUOOFlOaKPnV61OeGpDkq5qrkqCTdu2AuEq\nbrFn0m8ZUGnf3toGYhIGIqId8+8XybPOMqz2+Rg4UEtVI06iQOvvRsYJgl94pLAk\nNYKwhodQEvwvfhiFADOLKJ2DBWus6k0X0OXEani23QKBgBl/PU8oouRqx2tz1vpj\n9GxnlJZG9DUlaO/uilBjFSyrKLbNJxpYtEpSANUgg7G1GowxhqpuBXqqQAWUIgSs\nuA6XmTIguQMgtuuBcGiSfPkA1qmbQyoJqriEzbzjM/4HBW9rW3+0M7c+bhR8eczz\nhVsivdEqfvpsBTziCpVkzrA/\n-----END PRIVATE KEY-----\n";
const sandboxKeyPass = "password";

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
