import * as moment from "moment";
import { myInfoDomain } from "../../domain";

export const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

export const preschoolEligibleChild_IC = {
	birthcertno: { value: "T1901543I" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N2 = {
	birthcertno: { value: "T1689953J" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_PG = {
	birthcertno: { value: "T1808149G" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N1 = {
	birthcertno: { value: "T1796910I" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K1 = {
	birthcertno: { value: "T1503810H" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild1 = {
	birthcertno: { value: "T1258141B" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild2 = {
	birthcertno: { value: "T1349159Z" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childYoungest = {
	birthcertno: { value: "T1828432J" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	birthcertno: { value: "T4383608G" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	birthcertno: { value: "T7153144E" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	birthcertno: { value: "T1694727F" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	birthcertno: { value: "T1669632Z" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	birthcertno: { value: "T1509027D" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	birthcertno: { value: "T1422931G" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	birthcertno: { value: "T1511326F" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childSuperOld = {
	birthcertno: { value: "T0050832I" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	birthcertno: { value: "T0202564C" },
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	birthcertno: { value: "T1210114C" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased1 = {
	birthcertno: { value: "T0492081Z" },
	name: { value: "Deceased child 1" },
	dob: { value: formatDateToString(moment().subtract(4, "years").endOf("year")) },
	lifestatus: { code: "D", desc: "DECEASED" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased2 = {
	birthcertno: { value: "T1756880E" },
	name: { value: "Deceased child 2" },
	dob: { value: formatDateToString(moment().subtract(5, "years").endOf("year")) },
	lifestatus: { code: "D", desc: "DECEASED" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const ChildrenRecords = {
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
	childDeceased1,
	childDeceased2,
};
