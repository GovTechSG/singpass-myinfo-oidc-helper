import * as moment from "moment";
import { myInfoDomain } from "../../domain";

export const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

export const preschoolEligibleChild_IC = {
	birthcertno: { value: "T5170081Z" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N2 = {
	birthcertno: { value: "T8478075D" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_PG = {
	birthcertno: { value: "T6664586F" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N1 = {
	birthcertno: { value: "T1963041I" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K1 = {
	birthcertno: { value: "T4524789E" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K2 = {
	birthcertno: { value: "T8677396H" },
	name: { value: "Kelly Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N1 = {
	birthcertno: { value: "T4816254H" },
	name: { value: "Kylie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_IC = {
	birthcertno: { value: "T6093535H" },
	name: { value: "Karol Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K1 = {
	birthcertno: { value: "T8518803D" },
	name: { value: "Kara Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N2 = {
	birthcertno: { value: "T1405260C" },
	name: { value: "Sara Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_PG = {
	birthcertno: { value: "T7358432E" },
	name: { value: "Stella Lee" },
	dob: { value: formatDateToString(moment().subtract(22, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K2 = {
	birthcertno: { value: "T8267964I" },
	name: { value: "Sonia Lee" },
	dob: { value: formatDateToString(moment().subtract(9, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


export const preschoolIneligibleChild1 = {
	birthcertno: { value: "T5190633G" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild2 = {
	birthcertno: { value: "T5492029B" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childYoungest = {
	birthcertno: { value: "T7222687E" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	birthcertno: { value: "T4084691Z" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	birthcertno: { value: "T6601934E" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	birthcertno: { value: "T3272623I" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	birthcertno: { value: "T7170632F" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	birthcertno: { value: "T9984688C" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	birthcertno: { value: "T5628710D" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	birthcertno: { value: "T1900115B" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childSuperOld = {
	birthcertno: { value: "T6038028C" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	birthcertno: { value: "T0202564C" }, // NRIC used to check for child immunisation records. please do not change.
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	birthcertno: { value: "T3895997I" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
	lifestatus: { code: "A", desc: "ALIVE" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased1 = {
	birthcertno: { value: "T5923152E" },
	name: { value: "Deceased child 1" },
	dob: { value: formatDateToString(moment().subtract(4, "years").endOf("year")) },
	lifestatus: { code: "D", desc: "DECEASED" },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childDeceased2 = {
	birthcertno: { value: "T6781942F" },
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
