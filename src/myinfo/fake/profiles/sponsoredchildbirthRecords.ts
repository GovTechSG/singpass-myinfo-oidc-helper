import * as moment from "moment";
import { myInfoDomain } from "../../domain";

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

const childYoungest = {
	nric: { value: "T1828432J" },
	name: { value: "Sponsored Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child1MonthOld = {
	nric: { value: "T4383608G" },
	name: { value: "Sponsored Sponsored 1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child2MonthsOld = {
	nric: { value: "T7153144E" },
	name: { value: "Sponsored 2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle1 = {
	nric: { value: "T1694727F" },
	name: { value: "Sponsored Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle2 = {
	nric: { value: "T1669632Z" },
	name: { value: "Sponsored Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle3 = {
	nric: { value: "T1509027D" },
	name: { value: "Sponsored Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;


const childMiddle4 = {
	nric: { value: "T1422931G" },
	name: { value: "Sponsored Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle5 = {
	nric: { value: "T1511326F" },
	name: { value: "Sponsored Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childSuperOld = {
	nric: { value: "T0050832I" },
	name: { value: "Sponsored Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child6YearsOld = {
	nric: { value: "T1364674G" },
	name: { value: "Sponsored Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child7YearsOld = {
	nric: { value: "T1210114C" },
	name: { value: "Sponsored Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

export const SponsoredChildrenRecords = {
	childYoungest,
	child1MonthOld,
	child2MonthsOld,
	childMiddle1,
	childMiddle2,
	childMiddle3,
	childMiddle4,
	childMiddle5,
	childSuperOld,
	child6YearsOld,
	child7YearsOld,
};
