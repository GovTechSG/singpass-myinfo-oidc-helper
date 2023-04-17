import { Key } from './KeyUtil';
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST"
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
export declare function generateMyInfoAuthorizationHeader(url: string, queryParams: {
    [key: string]: any;
}, method: HttpMethod, appId: string, signingKey: string, nonce?: number, timestamp?: number, signingKeyPassphrase?: string): string;
interface CreateClientAssertion {
    issuer: string;
    audience: string;
    subject: string;
    key: Key;
}
export declare function createClientAssertion({ issuer, audience, subject, key }: CreateClientAssertion): Promise<string>;
export {};
//# sourceMappingURL=SigningUtil.d.ts.map