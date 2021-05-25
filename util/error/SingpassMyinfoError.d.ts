/**
 * TODO: [DY] replace this SP-MY lib's console.log with an appended error stack. Doesn't make sense to do logging in a library.
 * Should return the full error and let the library user use do what they want with the error.
 *
 * Note: axios doesn't return the full error.
 * For example, if myinfo-request gets a 401 error, only the error stack is surfaced.
 * in axios response interceptors, the error actually contains a config property, this is lost.
 */
export declare class SingpassMyInfoError extends Error {
    constructor(message: string, wrappedError?: Error);
}
//# sourceMappingURL=SingpassMyinfoError.d.ts.map