declare var global: any;

/**
 * @returns Whether the code is currently running in Jest or not
 */
export function isTest(): boolean {
	return global.describe && global.it;
}
