"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
const core_1 = require("@js-joda/core");
require("@js-joda/timezone");
const _ = require("lodash");
var DateUtils;
(function (DateUtils) {
    DateUtils.SG_TZ = core_1.ZoneId.of("Asia/Singapore");
    // =============================================================================
    // Defaults
    // =============================================================================
    let defaultTz = DateUtils.SG_TZ; // Defaults to Singapore zone
    /**
     * Gets the default timezone used by DateUtils
     */
    function getDefaultTz() {
        return defaultTz;
    }
    DateUtils.getDefaultTz = getDefaultTz;
    /**
     * Sets the default timezone used by DateUtils
     * NOTE: Clients should be using system zone as defaults
     */
    function setDefaultTz(zoneId) {
        defaultTz = zoneId;
    }
    DateUtils.setDefaultTz = setDefaultTz;
    // =============================================================================
    // From Milliseconds
    // =============================================================================
    /**
     * Converts a number representing milliseconds from epoch to ZonedDateTime
     */
    function msToZonedDateTime(ms, zoneId = defaultTz) {
        return !!ms ? core_1.ZonedDateTime.ofInstant(core_1.Instant.ofEpochMilli(ms), zoneId) : null;
    }
    DateUtils.msToZonedDateTime = msToZonedDateTime;
    // =============================================================================
    // From ISO-8601 String
    // =============================================================================
    /**
     * Converts from ISO-8601 string to a ZonedDateTime with the desired timezone
     * Note: If no timzeone is specified, the default timezone is assumed
     */
    function isoToZonedDateTime(iso, zoneId = defaultTz) {
        try {
            if (!iso)
                return null;
            return core_1.ZonedDateTime.parse(iso).withZoneSameInstant(zoneId);
        }
        catch (error) {
            // Attempt alternative parser
            const ldt = isoToLocalDateTime(iso);
            if (ldt) {
                return core_1.ZonedDateTime.of(ldt, zoneId);
            }
            return undefined;
        }
    }
    DateUtils.isoToZonedDateTime = isoToZonedDateTime;
    /**
     * Only reads the date and time components while ignoring the timezone if any
     */
    function isoToLocalDateTime(iso) {
        var _a;
        try {
            if (!iso)
                return null;
            // tslint:disable-next-line: tsr-detect-unsafe-regexp
            const filterRegex = /(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9])(:([0-5][0-9]))?/;
            const filteredIso = (_a = iso.match(filterRegex)) === null || _a === void 0 ? void 0 : _a[0];
            return core_1.LocalDateTime.parse(filteredIso);
        }
        catch (error) {
            // Attempt alternative parser
            const ld = isoToLocalDate(iso);
            if (ld) {
                return core_1.LocalDateTime.of(ld, core_1.LocalTime.MIN);
            }
            return undefined;
        }
    }
    DateUtils.isoToLocalDateTime = isoToLocalDateTime;
    /**
     * Only reads the date component
     */
    function isoToLocalDate(iso) {
        var _a;
        try {
            if (!iso)
                return null;
            // tslint:disable-next-line: tsr-detect-unsafe-regexp
            const filterRegex = /(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])/;
            const filteredIso = (_a = iso.match(filterRegex)) === null || _a === void 0 ? void 0 : _a[0];
            return core_1.LocalDate.parse(filteredIso);
        }
        catch (error) {
            return undefined;
        }
    }
    DateUtils.isoToLocalDate = isoToLocalDate;
    /**
     * Only reads the time component
     */
    function isoToLocalTime(iso) {
        var _a;
        try {
            if (!iso)
                return null;
            // tslint:disable-next-line: tsr-detect-unsafe-regexp
            const filterRegex = /(2[0-3]|[01][0-9]):([0-5][0-9])(:([0-5][0-9]))?/;
            const filteredIso = (_a = iso.match(filterRegex)) === null || _a === void 0 ? void 0 : _a[0];
            return core_1.LocalTime.parse(filteredIso);
        }
        catch (error) {
            return undefined;
        }
    }
    DateUtils.isoToLocalTime = isoToLocalTime;
    /**
     * Converts input to a ZonedDateTime with the specified time zone
     * Note: If no timzeone is specified, the default timezone is assumed
     */
    function toZonedDateTime(input, zoneId = defaultTz) {
        if (input instanceof core_1.ZonedDateTime) {
            return input.withZoneSameInstant(zoneId);
        }
        else if (input instanceof core_1.Instant) {
            return core_1.ZonedDateTime.ofInstant(input, zoneId);
        }
        else if (input instanceof core_1.LocalDateTime) {
            return core_1.ZonedDateTime.of(input, zoneId);
        }
        else if (input instanceof core_1.LocalDate) {
            return core_1.ZonedDateTime.of(input, core_1.LocalTime.MIN, zoneId);
        }
        else if (_.isNumber(input)) {
            return msToZonedDateTime(input, zoneId);
        }
        else if (_.isString(input)) {
            return isoToZonedDateTime(input, zoneId);
        }
        else if (_.isDate(input)) {
            return msToZonedDateTime(input.getTime(), zoneId);
        }
        return undefined;
    }
    DateUtils.toZonedDateTime = toZonedDateTime;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string
     */
    function toIsoZonedDateTime(input, zoneId = defaultTz) {
        var _a;
        return !!input ? (_a = toZonedDateTime(input, zoneId)) === null || _a === void 0 ? void 0 : _a.toString() : null;
    }
    DateUtils.toIsoZonedDateTime = toIsoZonedDateTime;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string without the timezone component
     */
    function toIsoDateTime(input, zoneId = defaultTz) {
        var _a, _b;
        if (!input)
            return null;
        if (input instanceof core_1.LocalDateTime) {
            return input.toString();
        }
        return (_b = (_a = toZonedDateTime(input, zoneId)) === null || _a === void 0 ? void 0 : _a.toLocalDateTime()) === null || _b === void 0 ? void 0 : _b.toString();
    }
    DateUtils.toIsoDateTime = toIsoDateTime;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string with date component only
     */
    function toIsoDate(input, zoneId = defaultTz) {
        var _a, _b;
        if (!input)
            return null;
        if (input instanceof core_1.LocalDate) {
            return input.toString();
        }
        return (_b = (_a = toZonedDateTime(input, zoneId)) === null || _a === void 0 ? void 0 : _a.toLocalDate()) === null || _b === void 0 ? void 0 : _b.toString();
    }
    DateUtils.toIsoDate = toIsoDate;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string with time component only
     */
    function toIsoTime(input, zoneId = defaultTz) {
        var _a, _b;
        if (!input)
            return null;
        if (input instanceof core_1.LocalTime) {
            return input.toString();
        }
        return (_b = (_a = toZonedDateTime(input, zoneId)) === null || _a === void 0 ? void 0 : _a.toLocalTime()) === null || _b === void 0 ? void 0 : _b.toString();
    }
    DateUtils.toIsoTime = toIsoTime;
    /**
     * Converts input to a ZonedDateTime and then converts it to an epoch ms number
     */
    function toEpochMilli(input, zoneId = defaultTz) {
        var _a, _b;
        if (!input)
            return null;
        if (_.isNumber(input)) {
            return input;
        }
        else if (_.isDate(input)) {
            return input.getTime();
        }
        return (_b = (_a = toZonedDateTime(input, zoneId)) === null || _a === void 0 ? void 0 : _a.toInstant()) === null || _b === void 0 ? void 0 : _b.toEpochMilli();
    }
    DateUtils.toEpochMilli = toEpochMilli;
    /**
     * Converts input to a ZonedDateTime and then converts it to a JS date
     */
    function toDate(input, zoneId = defaultTz) {
        if (!input)
            return null;
        const zdt = toZonedDateTime(input, zoneId);
        if (_.isNil(zdt)) {
            return zdt;
        }
        return (0, core_1.convert)(zdt).toDate();
    }
    DateUtils.toDate = toDate;
    // =============================================================================
    // Helpers
    // =============================================================================
    /**
     * Returns the earliest timestamp for the year
     */
    function startOfYear(input, zoneId = defaultTz) {
        const zdt = toZonedDateTime(input, zoneId);
        if (!zdt)
            return null;
        return zdt.with(core_1.TemporalAdjusters.firstDayOfYear()).withHour(0).withMinute(0).withSecond(0).withNano(0);
    }
    DateUtils.startOfYear = startOfYear;
    /**
     * Returns the earliest timestamp for the year
     */
    function endOfYear(input, zoneId = defaultTz) {
        const zdt = toZonedDateTime(input, zoneId);
        if (!zdt)
            return null;
        return zdt.with(core_1.TemporalAdjusters.lastDayOfYear()).withHour(23).withMinute(59).withSecond(59).withNano(999999999);
    }
    DateUtils.endOfYear = endOfYear;
})(DateUtils || (exports.DateUtils = DateUtils = {}));
//# sourceMappingURL=DateUtils.js.map