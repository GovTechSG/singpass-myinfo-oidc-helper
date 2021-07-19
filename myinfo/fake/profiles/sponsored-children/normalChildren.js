"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Childrenbirthrecords = void 0;
const moment = require("moment");
const domain_1 = require("../../../domain");
const formatDateToString = (date) => {
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
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "1000" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child1MonthOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T0356751B" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "1200" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child2MonthsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T5569640Z" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0300" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1318027F" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "0848" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1887206J" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0330" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle3 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T5934910J" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "2350" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle4 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T2285770Z" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0059" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle5 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9462451C" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "0000" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child6YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9462451C" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "0901" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child7YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T5227878Z" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    tob: { value: "1215" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childSuperOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T2262298B" },
    name: { value: "Tan Ke Wei" },
    dob: { value: formatDateToString(moment().subtract(8, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    tob: { value: "1500" },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
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