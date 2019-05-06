import { ChildBirthRecord } from "../../domain/v2";
import * as moment from "moment";

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

const childYoungest = {
	birthcertno: "T1828432J",
	name: "Youngest Tan Ke Xuan",
	dob: formatDateToString(),
} as ChildBirthRecord;

const child1MonthOld = {
	birthcertno: "T4383608G",
	name: "1 Month Tan Ke Yu",
	dob: formatDateToString(moment().subtract(1, "months")),
} as ChildBirthRecord;

const child2MonthsOld = {
	birthcertno: "T7153144E",
	name: "2 Months Tan Keh Guan",
	dob: formatDateToString(moment().subtract(2, "months")),
} as ChildBirthRecord;

const childMiddle1 = {
	birthcertno: "T1694727F",
	name: "Middle Tan Twin1",
	dob: formatDateToString(moment().subtract(2, "years")),
} as ChildBirthRecord;

const childMiddle2 = {
	birthcertno: "T1669632Z",
	name: "Middle Tan Twin2",
	dob: formatDateToString(moment().subtract(2, "years")),
} as ChildBirthRecord;

const childMiddle3 = {
	birthcertno: "T1509027D",
	name: "Tan Boy",
	dob: formatDateToString(moment().subtract(3, "years")),
} as ChildBirthRecord;

const childMiddle4 = {
	birthcertno: "T1422931G",
	name: "Tan Girl",
	dob: formatDateToString(moment().subtract(4, "years")),
} as ChildBirthRecord;

const childMiddle5 = {
	birthcertno: "T1511326F",
	name: "Tan Girl Younger",
	dob: formatDateToString(moment().subtract(5, "years")),
} as ChildBirthRecord;

const childSuperOld = {
	birthcertno: "T0050832I",
	name: "Super Old Tan Ke Wei",
	dob: formatDateToString(moment().subtract(8, "years")),
} as ChildBirthRecord;

const child6YearsOld = {
	birthcertno: "T1364674G",
	name: "Turning 6 Tan Kid born Jan 1st",
	dob: formatDateToString(moment().subtract(6, "years").startOf("year")),
} as ChildBirthRecord;

const child7YearsOld = {
	birthcertno: "T1210114C",
	name: "Turning 7 Tan Kid born Dec 31",
	dob: formatDateToString(moment().subtract(7, "years").endOf("year")),
} as ChildBirthRecord;

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
};
