"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
exports.formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment().format("YYYY-MM-DD").toString();
};
exports.preschoolEligibleChild_IC = {
    birthcertno: { value: "T1960652F" },
    name: { value: "Ezra Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
};
exports.preschoolEligibleChild_N2 = {
    birthcertno: { value: "T1604354G" },
    name: { value: "Elliot Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
};
exports.preschoolEligibleChild_PG = {
    birthcertno: { value: "T7150959H" },
    name: { value: "Ella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(18, "months")) },
};
exports.preschoolEligibleChild_N1 = {
    birthcertno: { value: "T9430661I" },
    name: { value: "Ellie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
};
exports.preschoolEligibleChild_K1 = {
    birthcertno: { value: "T6774286E" },
    name: { value: "Emma Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
};
exports.preschoolEligibleChild_K2 = {
    birthcertno: { value: "T1421105A" },
    name: { value: "Kelly Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years")) },
};
exports.preschoolEligibleChild2_N1 = {
    birthcertno: { value: "T1750682F" },
    name: { value: "Kylie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
};
exports.preschoolEligibleChild2_IC = {
    birthcertno: { value: "T1933334A" },
    name: { value: "Karol Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "months")) },
};
exports.preschoolEligibleChild2_K1 = {
    birthcertno: { value: "T1519414B" },
    name: { value: "Kara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
};
exports.preschoolEligibleChild2_N2 = {
    birthcertno: { value: "T1650521D" },
    name: { value: "Sara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
};
exports.preschoolEligibleChild2_PG = {
    birthcertno: { value: "T1810525F" },
    name: { value: "Stella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(22, "months")) },
};
exports.preschoolEligibleChild2_K2 = {
    birthcertno: { value: "T1914574Z" },
    name: { value: "Sonia Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(9, "months")) },
};
exports.preschoolIneligibleChild1 = {
    birthcertno: { value: "T1279642G" },
    name: { value: "Emmy Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
};
exports.preschoolIneligibleChild2 = {
    birthcertno: { value: "T1349159Z" },
    name: { value: "Emmanuel Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years")) },
};
const childYoungest = {
    birthcertno: { value: "T1828432J" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: exports.formatDateToString() },
};
const child1MonthOld = {
    birthcertno: { value: "T4383608G" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: exports.formatDateToString(moment().subtract(1, "months")) },
};
const child2MonthsOld = {
    birthcertno: { value: "T7153144E" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
};
const childMiddle1 = {
    birthcertno: { value: "T1694727F" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle2 = {
    birthcertno: { value: "T1669632Z" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle3 = {
    birthcertno: { value: "T1509027D" },
    name: { value: "Tan Boy" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
};
const childMiddle4 = {
    birthcertno: { value: "T1422931G" },
    name: { value: "Tan Girl" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
};
const childMiddle5 = {
    birthcertno: { value: "T1511326F" },
    name: { value: "Tan Girl Younger" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
};
const childSuperOld = {
    birthcertno: { value: "T0050832I" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
};
const child6YearsOld = {
    birthcertno: { value: "T0202564C" },
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    birthcertno: { value: "T1210114C" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years").endOf("year")) },
};
const childDeceased1 = {
    birthcertno: { value: "T0492081Z" },
    name: { value: "Deceased child 1" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
const childDeceased2 = {
    birthcertno: { value: "T1756880E" },
    name: { value: "Deceased child 2" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
exports.ChildrenRecords = {
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
//# sourceMappingURL=childbirthRecords.js.map