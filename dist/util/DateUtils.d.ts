import { Instant, LocalDate, LocalDateTime, LocalTime, ZonedDateTime, ZoneId } from "@js-joda/core";
import "@js-joda/timezone";
export declare namespace DateUtils {
    const SG_TZ: ZoneId;
    /**
     * Gets the default timezone used by DateUtils
     */
    function getDefaultTz(): ZoneId;
    /**
     * Sets the default timezone used by DateUtils
     * NOTE: Clients should be using system zone as defaults
     */
    function setDefaultTz(zoneId: ZoneId): void;
    /**
     * Converts a number representing milliseconds from epoch to ZonedDateTime
     */
    function msToZonedDateTime(ms: number, zoneId?: ZoneId): ZonedDateTime;
    /**
     * Converts from ISO-8601 string to a ZonedDateTime with the desired timezone
     * Note: If no timzeone is specified, the default timezone is assumed
     */
    function isoToZonedDateTime(iso: string, zoneId?: ZoneId): ZonedDateTime;
    /**
     * Only reads the date and time components while ignoring the timezone if any
     */
    function isoToLocalDateTime(iso: string): LocalDateTime;
    /**
     * Only reads the date component
     */
    function isoToLocalDate(iso: string): LocalDate;
    /**
     * Only reads the time component
     */
    function isoToLocalTime(iso: string): LocalTime;
    type DateTimeType = ZonedDateTime | Instant | LocalDateTime | LocalDate | number | string | Date;
    type TimeType = ZonedDateTime | Instant | LocalDateTime | LocalTime | number | string | Date;
    /**
     * Converts input to a ZonedDateTime with the specified time zone
     * Note: If no timzeone is specified, the default timezone is assumed
     */
    function toZonedDateTime(input: DateTimeType, zoneId?: ZoneId): ZonedDateTime;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string
     */
    function toIsoZonedDateTime(input: DateTimeType, zoneId?: ZoneId): string;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string without the timezone component
     */
    function toIsoDateTime(input: DateTimeType, zoneId?: ZoneId): string;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string with date component only
     */
    function toIsoDate(input: DateTimeType, zoneId?: ZoneId): string;
    /**
     * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string with time component only
     */
    function toIsoTime(input: TimeType, zoneId?: ZoneId): string;
    /**
     * Converts input to a ZonedDateTime and then converts it to an epoch ms number
     */
    function toEpochMilli(input: DateTimeType, zoneId?: ZoneId): number;
    /**
     * Converts input to a ZonedDateTime and then converts it to a JS date
     */
    function toDate(input: DateTimeType, zoneId?: ZoneId): Date;
    /**
     * Returns the earliest timestamp for the year
     */
    function startOfYear(input: DateTimeType, zoneId?: ZoneId): ZonedDateTime;
    /**
     * Returns the earliest timestamp for the year
     */
    function endOfYear(input: DateTimeType, zoneId?: ZoneId): ZonedDateTime;
}
//# sourceMappingURL=DateUtils.d.ts.map