import { redactError } from "./RedactorUtil";

// tslint:disable: no-console

export const logger = {
	log: (message: string, param?: any) => { console.log(message, redactError(param)); },
	debug: (message: string, param?: any) => { console.debug(message, redactError(param)); },
	info: (message: string, param?: any) => { console.info(message, redactError(param)); },
	trace: (message: string, param?: any) => { console.trace(message, redactError(param)); },
	warn: (message: string, param?: any) => { console.warn(message, redactError(param)); },
	error: (message: string, param?: any) => { console.error(message, redactError(param)); },
};
