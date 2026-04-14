export declare namespace EnumUtils {
    /**
     * Generates a function that lists all the enum keys
     */
    function keysFunc<T>(enumType: any): () => string[];
    /**
     * Generates a function that lists all the enum values
     */
    function valuesFunc<T>(enumType: any): () => T[];
    /**
     * Generates a function that converts a value to an enum value
     * Automatically does type coercion (i.e. conversion to string or number)
     * String values are case-insensitive (e.g. `toEnumValue("One")` may return "ONE")
     * Returns undefined if the value is no in the enum set
     */
    function toEnumValueFunc<T>(enumType: any, throwIfInvalid?: boolean): (value: string | number) => T;
    /**
     * Generates a function that converts an enum value to an enum key
     * Automatically does type coercion (i.e. conversion to string or number)
     * Returns undefined if the value is no in the enum set
     */
    function toEnumKeyFunc<T>(enumType: any, shouldThrowIfInvalid?: boolean): (value: T) => string;
    /**
     * Generates a function that returns a matching desc value from another enum with the same key
     * Automatically does type coercion (i.e. conversion to string or number)
     * Returns undefined if the value is no in the enum set
     */
    function toEnumDescFunc<T, U>(enumType: any, enumDesc: any, shouldThrowIfInvalid?: boolean): (value: T) => U;
}
//# sourceMappingURL=EnumUtils.d.ts.map