"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredChildrenRecords = void 0;
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
    nric: { value: "T1828432J" },
    name: { value: "Sponsored Child Tan Ke Xuan" },
    dob: { value: formatDateToString() },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child1MonthOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T4383608G" },
    name: { value: "Sponsored Child Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child2MonthsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T7153144E" },
    name: { value: "Sponsored Child Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T1694727F" },
    name: { value: "Sponsored Child Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T1669632Z" },
    name: { value: "Sponsored Child Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle3 = {
    nric: { value: "T1509027D" },
    name: { value: "Sponsored Child Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle4 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T1422931G" },
    name: { value: "Sponsored Child Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle5 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T1511326F" },
    name: { value: "Sponsored Child Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childSuperOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T0050832I" },
    name: { value: "Sponsored Child Tan Ke Wei" },
    dob: { value: formatDateToString(moment().subtract(8, "years")) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child6YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T1364674G" },
    name: { value: "Sponsored Child Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const child7YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    nric: { value: "T1210114C" },
    name: { value: "Sponsored Child Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
exports.SponsoredChildrenRecords = {
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
//# sourceMappingURL=sponsoredChildBirthRecords.js.map