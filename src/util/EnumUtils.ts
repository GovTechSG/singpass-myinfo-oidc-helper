import * as _ from "lodash";

export namespace EnumUtils {
	/**
	 * Generates a function that lists all the enum keys
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export function keysFunc<T>(enumType: any): () => string[] {
		const keys: string[] = _.keys(enumType); // Memoized
		return () => keys;
	}

	/**
	 * Generates a function that lists all the enum values
	 */
	export function valuesFunc<T>(enumType: any): () => T[] {
		// Filtering for numbers only for as _.values also includes enum key strings when it's a numbers enum
		const isNumber = _.some(_.values(enumType), _.isNumber);
		const values: T[] = _.filter(_.values(enumType), (value) => _.isNumber(value) === isNumber); // Memoized
		return () => values;
	}

	/**
	 * Generates a function that converts a value to an enum value
	 * Automatically does type coercion (i.e. conversion to string or number)
	 * String values are case-insensitive (e.g. `toEnumValue("One")` may return "ONE")
	 * Returns undefined if the value is no in the enum set
	 */
	export function toEnumValueFunc<T>(enumType: any, throwIfInvalid: boolean = false): (value: string | number) => T {
		const isNumber = _.some(_.values(enumType), _.isNumber); // Memoized
		const valueMap = new Map(); // Memoized

		// Filtering for numbers only for as _.values also includes enum key strings when it's a numbers enum
		_.filter(_.values(enumType), (value) => _.isNumber(value) === isNumber).forEach((value) => {
			if (isNumber) {
				valueMap.set(value, value);
			} else if (_.isString(value)) {
				valueMap.set(value.toUpperCase(), value);
			}
		});

		return (value: string | number) => {
			const findValue = isNumber ? _.toNumber(value) : _.toString(value).toUpperCase(); // Type coercion
			const foundValue = valueMap.get(findValue);
			if (_.isNil(foundValue)) {
				if (throwIfInvalid) {
					throw new Error(`Invalid enum value: ${value}`);
				}

				return undefined;
			}

			return foundValue as T;
		};
	}

	/**
	 * Generates a function that converts an enum value to an enum key
	 * Automatically does type coercion (i.e. conversion to string or number)
	 * Returns undefined if the value is no in the enum set
	 */
	export function toEnumKeyFunc<T>(enumType: any, shouldThrowIfInvalid: boolean = false): (value: T) => string {
		const isNumber = _.some(_.values(enumType), _.isNumber); // Memoized
		const invertedMap: _.Dictionary<any> = _.invert(enumType); // Memoized

		return (value: T): string => {
			const findValue = isNumber ? _.toNumber(value) : _.toString(value); // Type coercion
			const foundKey = invertedMap[findValue];
			if (_.isNil(foundKey) && shouldThrowIfInvalid) {
				throw new Error(`Invalid enum value: ${value}`);
			}

			return foundKey;
		};
	}

	/**
	 * Generates a function that returns a matching desc value from another enum with the same key
	 * Automatically does type coercion (i.e. conversion to string or number)
	 * Returns undefined if the value is no in the enum set
	 */
	export function toEnumDescFunc<T, U>(
		enumType: any,
		enumDesc: any,
		shouldThrowIfInvalid: boolean = false,
	): (value: T) => U {
		const invertedMap: _.Dictionary<any> = _.invert(enumType); // Memoized

		return (value: T): U => {
			const findValue = _.toString(value); // Type coercion
			const foundKey = enumDesc[invertedMap[findValue]] as unknown as U;
			if (_.isNil(foundKey) && shouldThrowIfInvalid) {
				throw new Error(`Invalid enum value: ${value}`);
			}

			return foundKey;
		};
	}
}
