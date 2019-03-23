import * as _ from "lodash";
import { ApiSigningUtil } from "node-apex-api-security";

export enum HttpMethod {
	GET = "GET",
	POST = "POST",
}

export function generateAuthorizationHeader(
	realm: string,
	authPrefix: string,
	httpMethod: HttpMethod,
	url: string,
	appId: string,
	formJson: any,
	privateKeyContent: string,
	privateKeyPassword: string,
	bearer?: string,
	nonce?: string,
	timestamp?: number): string {
	// const eRealm = _.replace(realm, ".api.gov.sg", ".e.api.gov.sg");
	const eURL = _.replace(url, ".api.gov.sg", ".e.api.gov.sg");

	const rsaHeader = ApiSigningUtil.getSignatureToken({
		authPrefix,
		appId,
		urlPath: eURL,
		httpMethod,
		realm,
		keyString: privateKeyContent,
		passphrase: privateKeyPassword,
		queryString: formJson,
		nonce,
		timestamp,
	});

	if (bearer && bearer.length > 0) {
		return `${rsaHeader}, Bearer ${bearer}`;
	} else {
		return rsaHeader;
	}
}
