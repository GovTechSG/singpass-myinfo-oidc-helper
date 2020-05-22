import * as moment from "moment";
import { myInfoDomain } from "../../domain";

export const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

export const preschoolEligibleChild_IC = {
	birthcertno: { value: "T7276413C" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N2 = {
	birthcertno: { value: "T0167932A" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_PG = {
	birthcertno: { value: "T7174054J" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N1 = {
	birthcertno: { value: "T3228169E" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K1 = {
	birthcertno: { value: "T3337375E" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K2 = {
	birthcertno: { value: "T7313019G" },
	name: { value: "Kelly Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N1 = {
	birthcertno: { value: "T8440915J" },
	name: { value: "Kylie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_IC = {
	birthcertno: { value: "T6704661C" },
	name: { value: "Karol Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K1 = {
	birthcertno: { value: "T4300312C" },
	name: { value: "Kara Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N2 = {
	birthcertno: { value: "T5161326G" },
	name: { value: "Sara Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_PG = {
	birthcertno: { value: "T5195511G" },
	name: { value: "Stella Lee" },
	dob: { value: formatDateToString(moment().subtract(22, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K2 = {
	birthcertno: { value: "T2605597G" },
	name: { value: "Sonia Lee" },
	dob: { value: formatDateToString(moment().subtract(9, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


export const preschoolIneligibleChild1 = {
	birthcertno: { value: "T5740113Z" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild2 = {
	birthcertno: { value: "T3757576Z" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childYoungest = {
	birthcertno: { value: "T8088591H" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	birthcertno: { value: "T5967000F" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	birthcertno: { value: "T2741672H" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	birthcertno: { value: "T8847071G" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	birthcertno: { value: "T6481672H" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	birthcertno: { value: "T5485111H" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	birthcertno: { value: "T3557247Z" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	birthcertno: { value: "T2984703C" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childSuperOld = {
	birthcertno: { value: "T6257035G" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	birthcertno: { value: "T8620200F" },
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	birthcertno: { value: "T1210114C" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased1 = {
	birthcertno: { value: "T9045822H" },
	name: { value: "Deceased child 1" },
	dob: { value: formatDateToString(moment().subtract(4, "years").endOf("year")) },
	lifestatus: { code: "D", desc: "DECEASED" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased2 = {
	birthcertno: { value: "T5584585E" },
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
