import { convert, Instant, LocalDate, LocalDateTime, LocalTime, TemporalAdjusters, ZonedDateTime, ZoneId } from "@js-joda/core";
import "@js-joda/timezone";
import * as _ from "lodash";

export namespace DateUtils {
	export const SG_TZ = ZoneId.of("Asia/Singapore");

	// =============================================================================
	// Defaults
	// =============================================================================

	let defaultTz = SG_TZ;	// Defaults to Singapore zone

	/**
	 * Gets the default timezone used by DateUtils
	 */
	export function getDefaultTz(): ZoneId {
		return defaultTz;
	}

	/**
	 * Sets the default timezone used by DateUtils
	 * NOTE: Clients should be using system zone as defaults
	 */
	export function setDefaultTz(zoneId: ZoneId) {
		defaultTz = zoneId;
	}

	// =============================================================================
	// From Milliseconds
	// =============================================================================

	/**
	 * Converts a number representing milliseconds from epoch to ZonedDateTime
	 */
	export function msToZonedDateTime(ms: number, zoneId: ZoneId = defaultTz): ZonedDateTime {
		return !!ms ? ZonedDateTime.ofInstant(Instant.ofEpochMilli(ms), zoneId) : null;
	}

	// =============================================================================
	// From ISO-8601 String
	// =============================================================================

	/**
	 * Converts from ISO-8601 string to a ZonedDateTime with the desired timezone
	 * Note: If no timzeone is specified, the default timezone is assumed
	 */
	export function isoToZonedDateTime(iso: string, zoneId: ZoneId = defaultTz): ZonedDateTime {
		try {
			if (!iso) return null;

			return ZonedDateTime.parse(iso).withZoneSameInstant(zoneId);
		} catch (error) {
			// Attempt alternative parser
			const ldt = isoToLocalDateTime(iso);
			if (ldt) {
				return ZonedDateTime.of(ldt, zoneId);
			}
			return undefined;
		}
	}

	/**
	 * Only reads the date and time components while ignoring the timezone if any
	 */
	export function isoToLocalDateTime(iso: string): LocalDateTime {
		try {
			if (!iso) return null;

			// tslint:disable-next-line: tsr-detect-unsafe-regexp
			const filterRegex = /(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9])(:([0-5][0-9]))?/;
			const filteredIso = iso.match(filterRegex)?.[0];
			return LocalDateTime.parse(filteredIso);
		} catch (error) {
			// Attempt alternative parser
			const ld = isoToLocalDate(iso);
			if (ld) {
				return LocalDateTime.of(ld, LocalTime.MIN);
			}
			return undefined;
		}
	}

	/**
	 * Only reads the date component
	 */
	export function isoToLocalDate(iso: string): LocalDate {
		try {
			if (!iso) return null;

			// tslint:disable-next-line: tsr-detect-unsafe-regexp
			const filterRegex = /(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])/;
			const filteredIso = iso.match(filterRegex)?.[0];
			return LocalDate.parse(filteredIso);
		} catch (error) {
			return undefined;
		}
	}

	/**
	 * Only reads the time component
	 */
	export function isoToLocalTime(iso: string): LocalTime {
		try {
			if (!iso) return null;

			// tslint:disable-next-line: tsr-detect-unsafe-regexp
			const filterRegex = /(2[0-3]|[01][0-9]):([0-5][0-9])(:([0-5][0-9]))?/;
			const filteredIso = iso.match(filterRegex)?.[0];
			return LocalTime.parse(filteredIso);
		} catch (error) {
			return undefined;
		}
	}


	// =============================================================================
	// Aggregate transformers
	// =============================================================================

	export type DateTimeType = ZonedDateTime | Instant | LocalDateTime | LocalDate | number | string | Date;
	export type TimeType = ZonedDateTime | Instant | LocalDateTime | LocalTime | number | string | Date;

	/**
	 * Converts input to a ZonedDateTime with the specified time zone
	 * Note: If no timzeone is specified, the default timezone is assumed
	 */
	export function toZonedDateTime(input: DateTimeType, zoneId: ZoneId = defaultTz): ZonedDateTime {
		if (input instanceof ZonedDateTime) {
			return input.withZoneSameInstant(zoneId);
		} else if (input instanceof Instant) {
			return ZonedDateTime.ofInstant(input, zoneId);
		} else if (input instanceof LocalDateTime) {
			return ZonedDateTime.of(input, zoneId);
		} else if (input instanceof LocalDate) {
			return ZonedDateTime.of(input, LocalTime.MIN, zoneId);
		} else if (_.isNumber(input)) {
			return msToZonedDateTime(input, zoneId);
		} else if (_.isString(input)) {
			return isoToZonedDateTime(input, zoneId);
		} else if (_.isDate(input)) {
			return msToZonedDateTime(input.getTime(), zoneId);
		}
		return undefined;
	}

	/**
	 * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string
	 */
	export function toIsoZonedDateTime(input: DateTimeType, zoneId: ZoneId = defaultTz): string {
		return !!input ? toZonedDateTime(input, zoneId)?.toString() : null;
	}

	/**
	 * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string without the timezone component
	 */
	export function toIsoDateTime(input: DateTimeType, zoneId: ZoneId = defaultTz): string {
		if (!input) return null;

		if (input instanceof LocalDateTime) {
			return input.toString();
		}
		return toZonedDateTime(input, zoneId)?.toLocalDateTime()?.toString();
	}

	/**
	 * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string with date component only
	 */
	export function toIsoDate(input: DateTimeType, zoneId: ZoneId = defaultTz): string {
		if (!input) return null;

		if (input instanceof LocalDate) {
			return input.toString();
		}
		return toZonedDateTime(input, zoneId)?.toLocalDate()?.toString();
	}

	/**
	 * Converts input to a ZonedDateTime and then converts it to an ISO-8601 string with time component only
	 */
	export function toIsoTime(input: TimeType, zoneId: ZoneId = defaultTz): string {
		if (!input) return null;

		if (input instanceof LocalTime) {
			return input.toString();
		}
		return toZonedDateTime(input, zoneId)?.toLocalTime()?.toString();
	}

	/**
	 * Converts input to a ZonedDateTime and then converts it to an epoch ms number
	 */
	export function toEpochMilli(input: DateTimeType, zoneId: ZoneId = defaultTz): number {
		if (!input) return null;

		if (_.isNumber(input)) {
			return input;
		} else if (_.isDate(input)) {
			return input.getTime();
		}
		return toZonedDateTime(input, zoneId)?.toInstant()?.toEpochMilli();
	}

	/**
	 * Converts input to a ZonedDateTime and then converts it to a JS date
	 */
	export function toDate(input: DateTimeType, zoneId: ZoneId = defaultTz): Date {
		if (!input) return null;

		const zdt = toZonedDateTime(input, zoneId);
		if (_.isNil(zdt)) {
			return zdt;
		}

		return convert(zdt).toDate();
	}

	// =============================================================================
	// Helpers
	// =============================================================================

	/**
	 * Returns the earliest timestamp for the year
	 */
	export function startOfYear(input: DateTimeType, zoneId: ZoneId = defaultTz): ZonedDateTime {
		const zdt = toZonedDateTime(input, zoneId);
		if (!zdt) return null;

		return zdt.with(TemporalAdjusters.firstDayOfYear()).withHour(0).withMinute(0).withSecond(0).withNano(0);
	}

	/**
	 * Returns the earliest timestamp for the year
	 */
	export function endOfYear(input: DateTimeType, zoneId: ZoneId = defaultTz): ZonedDateTime {
		const zdt = toZonedDateTime(input, zoneId);
		if (!zdt) return null;

		return zdt.with(TemporalAdjusters.lastDayOfYear()).withHour(23).withMinute(59).withSecond(59).withNano(999999999);
	}
}
