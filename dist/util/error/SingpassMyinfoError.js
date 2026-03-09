"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingpassMyInfoError = void 0;
/**
 * TODO: [DY] replace this SP-MY lib's console.log with an appended error stack. Doesn't make sense to do logging in a library.
 * Should return the full error and let the library user use do what they want with the error.
 *
 * Note: axios doesn't return the full error.
 * For example, if myinfo-request gets a 401 error, only the error stack is surfaced.
 * in axios response interceptors, the error actually contains a config property, this is lost.
 */
class SingpassMyInfoError extends Error {
    constructor(message, wrappedError) {
        super(`[singpass-myinfo-oidc-helper] ${message}`);
        Error.captureStackTrace(this, SingpassMyInfoError);
        Object.setPrototypeOf(this, SingpassMyInfoError.prototype);
        if (wrappedError) {
            this.stack = this.stack + "\n" + wrappedError.stack;
        }
        return this;
    }
}
exports.SingpassMyInfoError = SingpassMyInfoError;
//# sourceMappingURL=SingpassMyinfoError.js.map