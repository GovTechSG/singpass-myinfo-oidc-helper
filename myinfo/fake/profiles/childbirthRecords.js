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
    birthcertno: { value: "T7276413C" },
    name: { value: "Ezra Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
};
exports.preschoolEligibleChild_N2 = {
    birthcertno: { value: "T0167932A" },
    name: { value: "Elliot Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
};
exports.preschoolEligibleChild_PG = {
    birthcertno: { value: "T7174054J" },
    name: { value: "Ella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(18, "months")) },
};
exports.preschoolEligibleChild_N1 = {
    birthcertno: { value: "T3228169E" },
    name: { value: "Ellie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
};
exports.preschoolEligibleChild_K1 = {
    birthcertno: { value: "T3337375E" },
    name: { value: "Emma Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
};
exports.preschoolEligibleChild_K2 = {
    birthcertno: { value: "T7313019G" },
    name: { value: "Kelly Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years")) },
};
exports.preschoolEligibleChild2_N1 = {
    birthcertno: { value: "T8440915J" },
    name: { value: "Kylie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
};
exports.preschoolEligibleChild2_IC = {
    birthcertno: { value: "T0939681G" },
    name: { value: "Karol Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "months")) },
};
exports.preschoolEligibleChild2_K1 = {
    birthcertno: { value: "T1450109B" },
    name: { value: "Kara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
};
exports.preschoolEligibleChild2_N2 = {
    birthcertno: { value: "T5161326G" },
    name: { value: "Sara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
};
exports.preschoolEligibleChild2_PG = {
    birthcertno: { value: "T5195511G" },
    name: { value: "Stella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(22, "months")) },
};
exports.preschoolEligibleChild2_K2 = {
    birthcertno: { value: "T2605597G" },
    name: { value: "Sonia Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(9, "months")) },
};
exports.preschoolIneligibleChild1 = {
    birthcertno: { value: "T5740113Z" },
    name: { value: "Emmy Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
};
exports.preschoolIneligibleChild2 = {
    birthcertno: { value: "T3757576Z" },
    name: { value: "Emmanuel Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years")) },
};
const childYoungest = {
    birthcertno: { value: "T8088591H" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: exports.formatDateToString() },
};
const child1MonthOld = {
    birthcertno: { value: "T5967000F" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: exports.formatDateToString(moment().subtract(1, "months")) },
};
const child2MonthsOld = {
    birthcertno: { value: "T2741672H" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
};
const childMiddle1 = {
    birthcertno: { value: "T8847071G" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle2 = {
    birthcertno: { value: "T6481672H" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle3 = {
    birthcertno: { value: "T5485111H" },
    name: { value: "Tan Boy" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
};
const childMiddle4 = {
    birthcertno: { value: "T3557247Z" },
    name: { value: "Tan Girl" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
};
const childMiddle5 = {
    birthcertno: { value: "T2984703C" },
    name: { value: "Tan Girl Younger" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
};
const childSuperOld = {
    birthcertno: { value: "T6257035G" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
};
const child6YearsOld = {
    birthcertno: { value: "T8620200F" },
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    birthcertno: { value: "T1210114C" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years").endOf("year")) },
};
const childDeceased1 = {
    birthcertno: { value: "T9045822H" },
    name: { value: "Deceased child 1" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
const childDeceased2 = {
    birthcertno: { value: "T5584585E" },
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