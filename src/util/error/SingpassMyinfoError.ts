/**
 * Note: axios doesn't return the full error.
 * For example, if myinfo-request gets a 401 error, only the error stack is surfaced.
 * in axios response interceptors, the error actually contains a config property, this is lost.
 */
export class SingpassMyInfoError extends Error {
	constructor(message: string, wrappedError?: Error) {
		super(`[singpass-myinfo-oidc-helper] ${message}`);
		Error.captureStackTrace(this, SingpassMyInfoError);
		Object.setPrototypeOf(this, SingpassMyInfoError.prototype);
		if (wrappedError) {
			this.stack = this.stack + "\n" + wrappedError.stack;
		}
		return this;
	}
}
