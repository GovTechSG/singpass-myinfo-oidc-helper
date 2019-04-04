export declare enum HttpMethod {
    GET = "GET",
    POST = "POST"
}
export declare function generateAuthorizationHeader(realm: string, authPrefix: string, httpMethod: HttpMethod, url: string, appId: string, formJson: any, privateKeyContent: string, privateKeyPassword: string, bearer?: string, nonce?: string, timestamp?: number): string;
