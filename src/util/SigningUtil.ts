import * as _ from "lodash";
import * as qs from "querystring";
import * as crypto from "crypto";

export enum HttpMethod {
	GET = "GET",
	POST = "POST",
}

interface AuthHeader {
	app_id: string;
	nonce: number;
	signature_method: string;
	timestamp: number;
	signature: string;
}

/**
 * Generate the Authorization header for requests to V3 MyInfo
 * @param url
 * @param queryParams
 * @param method
 * @param appId
 * @param signingKey
 * @param signingKeyPassphrase
 */
// tslint:disable-next-line: parameters-max-number
export function generateMyInfoAuthorizationHeader(
	url: string,
	queryParams: { [key: string]: any },
	method: HttpMethod,
	appId: string,
	signingKey: string,
	nonce?: number,
	timestamp?: number,
	signingKeyPassphrase?: string,
) {
	const authHeaderObj: Partial<AuthHeader> = {
		app_id: appId, // App ID assigned to your application
		nonce, // secure random number
		signature_method: "RS256",
		timestamp, // Unix epoch time
	};

	const signature = generateSignature(authHeaderObj, queryParams, method, url, signingKey, signingKeyPassphrase);

	return generateAuthHeaderString(appId, nonce, signature, timestamp);
}

function generateAuthHeaderString(appId: string, nonceValue: any, signature: string, timestamp: number) {
	return "PKI_SIGN app_id=\"" + appId + // Defaults to 1st part of incoming request hostname
		"\",nonce=\"" + nonceValue +
		"\",signature_method=\"RS256\"" +
		",signature=\"" + signature +
		"\",timestamp=\"" + timestamp +
		"\"";
}

/**
 * Function to generate signature for authenticated requests to myinfo v3
 * @param authHeader
 * @param queryParams
 * @param method
 * @param url
 * @param key
 * @param keyPassphrase
 */
function generateSignature(
	authHeader: Partial<AuthHeader>,
	queryParams: { [key: string]: any; },
	method: HttpMethod,
	url: string,
	key: string,
	keyPassphrase?: string,
): string {
	const baseParams = _.merge(authHeader, queryParams);

	const sortedKeys = Object.keys(baseParams).sort();
	const initialAccObj = {};
	const sortedParams = sortedKeys.reduce((accObj, paramKey) => {
		return _.set(accObj, paramKey, baseParams[paramKey]);
	}, initialAccObj);

	const baseParamsStr = qs.unescape(qs.stringify(sortedParams)); // url safe
	const baseString = method.toUpperCase() + "&" + url + "&" + baseParamsStr;

	const signWith = { key };
	if (!!keyPassphrase) {
		_.set(signWith, "passphrase", keyPassphrase);
	}

	const signature = crypto.createSign("RSA-SHA256")
		.update(baseString)
		.sign(signWith, "base64");

	return signature;
}
