import { V3 } from "../../domain";
import * as moment from "moment";

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

const childYoungest = {
	birthcertno: { value: "T1828432J" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as V3.Components.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	birthcertno: { value: "T4383608G" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const child2MonthsOld = {
	birthcertno: { value: "T7153144E" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const childMiddle1 = {
	birthcertno: { value: "T1694727F" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const childMiddle2 = {
	birthcertno: { value: "T1669632Z" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const childMiddle3 = {
	birthcertno: { value: "T1509027D" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	birthcertno: { value: "T1422931G" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const childMiddle5 = {
	birthcertno: { value: "T1511326F" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const childSuperOld = {
	birthcertno: { value: "T0050832I" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const child6YearsOld = {
	birthcertno: { value: "T1364674G" },
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as V3.Components.Schemas.Childrenbirthrecords;


const child7YearsOld = {
	birthcertno: { value: "T1210114C" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
} as V3.Components.Schemas.Childrenbirthrecords;


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
