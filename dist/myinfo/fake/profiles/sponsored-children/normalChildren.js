"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Childrenbirthrecords = void 0;
const core_1 = require("@js-joda/core");
const DateUtils_1 = require("../../../../util/DateUtils");
const domain_1 = require("../../../domain");
const formatDateToString = (date) => {
    date !== null && date !== void 0 ? date : (date = core_1.ZonedDateTime.now());
    return DateUtils_1.DateUtils.toIsoDate(date);
};
const childYoungest = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9722304H" },
    name: { value: "Tan Ke Xuan" },
    dob: { value: formatDateToString() },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "1000" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const child1MonthOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T4657515B" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(1)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "1200" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const child2MonthsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T7041892J" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(2)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0300" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const childMiddle1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T2746216I" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(2)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "0848" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const childMiddle2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9702737J" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(2)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0330" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const childMiddle3 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T5688127H" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(3)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "2350" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const childMiddle4 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T2862346H" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(4)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0059" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const childMiddle5 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1235431I" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(5)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "0000" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const child6YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T3485740C" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(DateUtils_1.DateUtils.startOfYear(core_1.ZonedDateTime.now().minusYears(6))) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0901" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const child7YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T8555618A" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(DateUtils_1.DateUtils.endOfYear(core_1.ZonedDateTime.now().minusYears(7))) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "1215" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
const childSuperOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T7269740A" },
    name: { value: "Tan Ke Wei" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(8)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "1500" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
};
exports.Childrenbirthrecords = {
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
//# sourceMappingURL=normalChildren.js.map