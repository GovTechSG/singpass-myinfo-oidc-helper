"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredChildrenRecords = void 0;
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(1)) },
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(2)) },
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(2)) },
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(2)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE), },
    lifestatus: { code: domain_1.MyInfoLifeStatusCode.ALIVE, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE) },
    unavailable: false,
};
const childMiddle3 = {
    nric: { value: "T1509027D" },
    name: { value: "Sponsored Child Tan Su" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(3)) },
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(4)) },
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(5)) },
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
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(8)) },
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
    dob: { value: formatDateToString(DateUtils_1.DateUtils.startOfYear(core_1.ZonedDateTime.now().minusYears(6))) },
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
    dob: { value: formatDateToString(DateUtils_1.DateUtils.endOfYear(core_1.ZonedDateTime.now().minusYears(7))) },
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