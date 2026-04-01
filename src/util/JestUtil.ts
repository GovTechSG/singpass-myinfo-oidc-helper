// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

/**
 * @returns Whether the code is currently running in Jest or not
 */
export function isTest(): boolean {
	return global.describe && global.it;
}
