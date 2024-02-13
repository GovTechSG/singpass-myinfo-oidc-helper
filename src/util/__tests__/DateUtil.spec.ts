import { LocalDate } from "@js-joda/core";
import { DateUtils } from "../DateUtils";

describe("isWithinPeriod", () => {
	it("should return false when checking if tmr is between 2 years ago and today", () => {
		const current = LocalDate.now();
		const input = current.plusDays(1);
		const start = current.minusYears(2).toString();
		const end = current.toString();
		expect(DateUtils.isWithinPeriod(start, end, input)).toBe(false);
	});
	it("should return true when checking if today is between 2 years ago and today", () => {
		const current = LocalDate.now();
		const start = current.minusYears(2).toString();
		const end = current.toString();
		expect(DateUtils.isWithinPeriod(start, end)).toBe(true);
	});
	it("should return true when checking if today is between today and tomorrow", () => {
		const current = LocalDate.now();
		const start = current.toString();
		const end = current.plusDays(1).toString();
		expect(DateUtils.isWithinPeriod(start, end)).toBe(true);
	});
	it("should return false when checking if today is between tomorrow and the day after", () => {
		const current = LocalDate.now();
		const start = current.plusDays(1).toString();
		const end = current.plusDays(2).toString();
		expect(DateUtils.isWithinPeriod(start, end)).toBe(false);
	});
	it("should return true when checking if today is between today and 9999-12-31", () => {
		const current = LocalDate.now();
		const start = current.toString();
		const end = "9999-12-31";
		expect(DateUtils.isWithinPeriod(start, end)).toBe(true);
	});
	it("should return false when checking if yesterday is between today and 9999-12-31", () => {
		const current = LocalDate.now();
		const start = current.toString();
		const end = "9999-12-31";
		expect(DateUtils.isWithinPeriod(start, end, current.minusDays(1))).toBe(false);
	});
});
