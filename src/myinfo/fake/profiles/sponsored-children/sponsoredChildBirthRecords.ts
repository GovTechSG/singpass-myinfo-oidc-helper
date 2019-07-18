import * as moment from "moment";
import { myInfoDomain } from "../../../domain";

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

const childYoungest = {
	nric: { value: "T1828432J" },
	name: { value: "Sponsored Child Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child1MonthOld = {
	nric: { value: "T4383608G" },
	name: { value: "Sponsored Child Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child2MonthsOld = {
	nric: { value: "T7153144E" },
	name: { value: "Sponsored Child Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle1 = {
	nric: { value: "T1694727F" },
	name: { value: "Sponsored Child Tan Chiu" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle2 = {
	nric: { value: "T1669632Z" },
	name: { value: "Sponsored Child Tan Chua" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle3 = {
	nric: { value: "T1509027D" },
	name: { value: "Sponsored Child Tan Su" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle4 = {
	nric: { value: "T1422931G" },
	name: { value: "Sponsored Child Tan Go" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childMiddle5 = {
	nric: { value: "T1511326F" },
	name: { value: "Sponsored Child Tan Sy" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const childSuperOld = {
	nric: { value: "T0050832I" },
	name: { value: "Sponsored Child Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child6YearsOld = {
	nric: { value: "T1364674G" },
	name: { value: "Sponsored Child Tan Kim" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as myInfoDomain.Components.Schemas.Sponsoredchildrenrecords;

const child7YearsOld = {
	nric: { value: "T1210114C" },
	name: { value: "Sponsored Child Tan Liu" },
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
	child6YearsOld,
	child7YearsOld,
	childSuperOld,
};
