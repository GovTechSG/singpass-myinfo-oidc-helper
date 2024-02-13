/* eslint-disable no-console */
import { redactError } from "./RedactorUtil";

export interface ILogger {
	log: (message: string, param?: any) => void;
	debug: (message: string, param?: any) => void;
	info: (message: string, param?: any) => void;
	trace: (message: string, param?: any) => void;
	warn: (message: string, param?: any) => void;
	error: (message: string, param?: any) => void;
}

export const logger: ILogger = {
	log: (message: string, param?: any) => {
		console.log(message, redactError(param));
	},
	debug: (message: string, param?: any) => {
		console.debug(message, redactError(param));
	},
	info: (message: string, param?: any) => {
		console.info(message, redactError(param));
	},
	trace: (message: string, param?: any) => {
		console.trace(message, redactError(param));
	},
	warn: (message: string, param?: any) => {
		console.warn(message, redactError(param));
	},
	error: (message: string, param?: any) => {
		console.error(message, redactError(param));
	},
};

export const setLogger = (overwriteLogger: Partial<ILogger>) => {
	Object.assign(logger, {
		...logger,
		...overwriteLogger,
	});
};
