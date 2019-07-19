import * as moment from "moment";
import { myInfoDomain } from "../../../domain";

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

const childYoungest = {
	birthcertno: { value: "S1915980I" },
	name: { value: "Tan Ke Xuan" },
	dob: { value: formatDateToString() },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	birthcertno: { value: "S1985973H" },
	name: { value: "Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	birthcertno: { value: "S1934480J" },
	name: { value: "Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	birthcertno: { value: "S7337031J" },
	name: { value: "Tan Chiu" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	birthcertno: { value: "S0836115J" },
	name: { value: "Tan Chua" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	birthcertno: { value: "S3159159G" },
	name: { value: "Tan Su" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle4 = {
	birthcertno: { value: "S0758717A" },
	name: { value: "Tan Go" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	birthcertno: { value: "S4886773A" },
	name: { value: "Tan Sy" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	birthcertno: { value: "S8767263H" },
	name: { value: "Tan Kim" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	birthcertno: { value: "S8359810G" },
	name: { value: "Tan Liu" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

const childSuperOld = {
	birthcertno: { value: "S6680318Z" },
	name: { value: "Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
} as myInfoDomain.Components.Schemas.Childrenbirthrecords;

export const Childrenbirthrecords = {
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
