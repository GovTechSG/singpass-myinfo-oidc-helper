"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUtils = void 0;
const _ = require("lodash");
var EnumUtils;
(function (EnumUtils) {
    /**
     * Generates a function that lists all the enum keys
     */
    function keysFunc(enumType) {
        const keys = _.keys(enumType); // Memoized
        return () => keys;
    }
    EnumUtils.keysFunc = keysFunc;
    /**
     * Generates a function that lists all the enum values
     */
    function valuesFunc(enumType) {
        // Filtering for numbers only for as _.values also includes enum key strings when it's a numbers enum
        const isNumber = _.some(_.values(enumType), _.isNumber);
        const values = _.filter(_.values(enumType), (value) => _.isNumber(value) === isNumber); // Memoized
        return () => values;
    }
    EnumUtils.valuesFunc = valuesFunc;
    /**
     * Generates a function that converts a value to an enum value
     * Automatically does type coercion (i.e. conversion to string or number)
     * String values are case-insensitive (e.g. `toEnumValue("One")` may return "ONE")
     * Returns undefined if the value is no in the enum set
     */
    function toEnumValueFunc(enumType, throwIfInvalid = false) {
        const isNumber = _.some(_.values(enumType), _.isNumber); // Memoized
        const valueMap = new Map(); // Memoized
        // Filtering for numbers only for as _.values also includes enum key strings when it's a numbers enum
        _.filter(_.values(enumType), (value) => _.isNumber(value) === isNumber)
            .forEach((value) => {
            if (isNumber) {
                valueMap.set(value, value);
            }
            else if (_.isString(value)) {
                valueMap.set(value.toUpperCase(), value);
            }
        });
        return (value) => {
            const findValue = (isNumber ? _.toNumber(value) : _.toString(value).toUpperCase()); // Type coercion
            const foundValue = valueMap.get(findValue);
            if (_.isNil(foundValue)) {
                if (throwIfInvalid) {
                    throw new Error(`Invalid enum value: ${value}`);
                }
                return undefined;
            }
            return foundValue;
        };
    }
    EnumUtils.toEnumValueFunc = toEnumValueFunc;
    /**
     * Generates a function that converts an enum value to an enum key
     * Automatically does type coercion (i.e. conversion to string or number)
     * Returns undefined if the value is no in the enum set
     */
    function toEnumKeyFunc(enumType, shouldThrowIfInvalid = false) {
        const isNumber = _.some(_.values(enumType), _.isNumber); // Memoized
        const invertedMap = _.invert(enumType); // Memoized
        return (value) => {
            const findValue = (isNumber ? _.toNumber(value) : _.toString(value)); // Type coercion
            const foundKey = invertedMap[findValue];
            if (_.isNil(foundKey) && shouldThrowIfInvalid) {
                throw new Error(`Invalid enum value: ${value}`);
            }
            return foundKey;
        };
    }
    EnumUtils.toEnumKeyFunc = toEnumKeyFunc;
    /**
     * Generates a function that returns a matching desc value from another enum with the same key
     * Automatically does type coercion (i.e. conversion to string or number)
     * Returns undefined if the value is no in the enum set
     */
    function toEnumDescFunc(enumType, enumDesc, shouldThrowIfInvalid = false) {
        const invertedMap = _.invert(enumType); // Memoized
        return (value) => {
            const findValue = _.toString(value); // Type coercion
            const foundKey = enumDesc[invertedMap[findValue]];
            if (_.isNil(foundKey) && shouldThrowIfInvalid) {
                throw new Error(`Invalid enum value: ${value}`);
            }
            return foundKey;
        };
    }
    EnumUtils.toEnumDescFunc = toEnumDescFunc;
})(EnumUtils || (exports.EnumUtils = EnumUtils = {}));
//# sourceMappingURL=EnumUtils.js.map