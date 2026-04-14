/**
 * Note: axios doesn't return the full error.
 * For example, if myinfo-request gets a 401 error, only the error stack is surfaced.
 * in axios response interceptors, the error actually contains a config property, this is lost.
 */
export declare class SingpassMyInfoError extends Error {
    constructor(message: string, wrappedError?: Error);
}
//# sourceMappingURL=SingpassMyinfoError.d.ts.map