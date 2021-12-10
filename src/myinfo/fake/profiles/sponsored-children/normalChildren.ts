import * as moment from "moment";
import { MyInfoComponents, MyInfoLifeStatusCode, MyInfoSexCode } from "../../../domain";

const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

const childYoungest = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9722304H" },
	name: { value: "Tan Ke Xuan" },
	dob: { value: formatDateToString() },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "1000" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4657515B" },
	name: { value: "Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "1200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T7041892J" },
	name: { value: "Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "0300" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T2746216I" },
	name: { value: "Tan Chiu" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "0848" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9702737J" },
	name: { value: "Tan Chua" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "0330" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T5688127H" },
	name: { value: "Tan Su" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2350" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle4 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T2862346H" },
	name: { value: "Tan Go" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "0059" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1235431I" },
	name: { value: "Tan Sy" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "0000" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T3485740C" },
	name: { value: "Tan Kim" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "0901" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8555618A" },
	name: { value: "Tan Liu" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "1215" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childSuperOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T7269740A" },
	name: { value: "Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "1500" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

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
