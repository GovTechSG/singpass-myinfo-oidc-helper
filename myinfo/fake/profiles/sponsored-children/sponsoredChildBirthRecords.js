"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment().format("YYYY-MM-DD").toString();
};
const childYoungest = {
    nric: { value: "T1828432J" },
    name: { value: "Sponsored Child Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
const child1MonthOld = {
    nric: { value: "T4383608G" },
    name: { value: "Sponsored Child Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
};
const child2MonthsOld = {
    nric: { value: "T7153144E" },
    name: { value: "Sponsored Child Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
};
const childMiddle1 = {
    nric: { value: "T1694727F" },
    name: { value: "Sponsored Child Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle2 = {
    nric: { value: "T1669632Z" },
    name: { value: "Sponsored Child Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle3 = {
    nric: { value: "T1509027D" },
    name: { value: "Sponsored Child Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
};
const childMiddle4 = {
    nric: { value: "T1422931G" },
    name: { value: "Sponsored Child Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
};
const childMiddle5 = {
    nric: { value: "T1511326F" },
    name: { value: "Sponsored Child Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
};
const childSuperOld = {
    nric: { value: "T0050832I" },
    name: { value: "Sponsored Child Tan Ke Wei" },
    dob: { value: formatDateToString(moment().subtract(8, "years")) },
};
const child6YearsOld = {
    nric: { value: "T1364674G" },
    name: { value: "Sponsored Child Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    nric: { value: "T1210114C" },
    name: { value: "Sponsored Child Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
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