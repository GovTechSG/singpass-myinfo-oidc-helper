import { ZonedDateTime } from "@js-joda/core";
import { DateUtils } from "../../../../util/DateUtils";
import { MyInfoComponents, MyInfoLifeStatusCode, MyInfoSexCode } from "../../../domain";

const formatDateToString = (date?: ZonedDateTime): string => {
	date ??= ZonedDateTime.now();
	return DateUtils.toIsoDate(date);
};

const childYoungest = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1828432J" },
	name: { value: "Sponsored Child Tan Ke Xuan" },
	dob: { value: formatDateToString() },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const child1MonthOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T4383608G" },
	name: { value: "Sponsored Child Tan Ke Yu" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusMonths(1)) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const child2MonthsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T7153144E" },
	name: { value: "Sponsored Child Tan Keh Guan" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusMonths(2)) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const childMiddle1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1694727F" },
	name: { value: "Sponsored Child Tan Chiu" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(2)) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const childMiddle2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1669632Z" },
	name: { value: "Sponsored Child Tan Chua" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(2)) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const childMiddle3 = {
	nric: { value: "T1509027D" },
	name: { value: "Sponsored Child Tan Su" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(3)) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const childMiddle4 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1422931G" },
	name: { value: "Sponsored Child Tan Go" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(4)) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const childMiddle5 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1511326F" },
	name: { value: "Sponsored Child Tan Sy" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(5)) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const childSuperOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T0050832I" },
	name: { value: "Sponsored Child Tan Ke Wei" },
	dob: { value: formatDateToString(ZonedDateTime.now().minusYears(8)) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const child6YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1364674G" },
	name: { value: "Sponsored Child Tan Kim" },
	dob: { value: formatDateToString(DateUtils.startOfYear(ZonedDateTime.now().minusYears(6))) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

const child7YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	nric: { value: "T1210114C" },
	name: { value: "Sponsored Child Tan Liu" },
	dob: { value: formatDateToString(DateUtils.endOfYear(ZonedDateTime.now().minusYears(7))) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Sponsoredchildrenrecords;

export const SponsoredChildrenRecords = {
	childYoungest,
	child1MonthOld,
	child2MonthsOld,
	childMiddle1,
	childMiddle2,
	childMiddle3,
	childMiddle4,
	childMiddle5,
	child6YearsOld,
	child7YearsOld,
	childSuperOld,
};
