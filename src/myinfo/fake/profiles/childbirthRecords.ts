import * as moment from "moment";
import { MyInfoComponents, MyInfoLifeStatusCode, MyInfoSexCode } from "../../domain";

export const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

export const preschoolEligibleChild_IC = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6071883G" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T7839011A" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_PG = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T0993929B" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9732016G" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T0174806D" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8821991G" },
	name: { value: "Kelly Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1256698G" },
	name: { value: "Kylie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_IC = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8932406D" },
	name: { value: "Karol Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4961714Z" },
	name: { value: "Kara Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1023211I" },
	name: { value: "Sara Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_PG = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T3784654B" },
	name: { value: "Stella Lee" },
	dob: { value: formatDateToString(moment().subtract(22, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9992319E" },
	name: { value: "Sonia Lee" },
	dob: { value: formatDateToString(moment().subtract(9, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;


export const preschoolIneligibleChild1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1704475Z" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8197709C" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;


const childYoungest = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9604076D" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4480566E" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6046032E" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T3835928I" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1938935E" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T0584009G" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1257717B" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4172977A" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childSuperOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4793991C" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T0202564C" }, // NRIC used to check for child immunisation records. please do not change.
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9970437Z" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childDeceased1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8005316E" },
	name: { value: "Deceased child 1" },
	dob: { value: formatDateToString(moment().subtract(4, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.DECEASED, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.DECEASED) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childDeceased2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8205956Z" },
	name: { value: "Deceased child 2" },
	dob: { value: formatDateToString(moment().subtract(5, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.DECEASED, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.DECEASED) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

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
