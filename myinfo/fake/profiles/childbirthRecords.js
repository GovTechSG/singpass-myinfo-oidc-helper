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
    birthcertno: { value: "T7080568A" },
    name: { value: "Ezra Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_N2 = {
    birthcertno: { value: "T8196310F" },
    name: { value: "Elliot Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_PG = {
    birthcertno: { value: "T0102344B" },
    name: { value: "Ella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(18, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_N1 = {
    birthcertno: { value: "T9812173G" },
    name: { value: "Ellie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_K1 = {
    birthcertno: { value: "T7655778G" },
    name: { value: "Emma Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_K2 = {
    birthcertno: { value: "T2682583G" },
    name: { value: "Kelly Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_N1 = {
    birthcertno: { value: "T2100212C" },
    name: { value: "Kylie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_IC = {
    birthcertno: { value: "T3171925E" },
    name: { value: "Karol Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_K1 = {
    birthcertno: { value: "T1430340A" },
    name: { value: "Kara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_N2 = {
    birthcertno: { value: "T1580401C" },
    name: { value: "Sara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_PG = {
    birthcertno: { value: "T6343209H" },
    name: { value: "Stella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(22, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_K2 = {
    birthcertno: { value: "T4336664A" },
    name: { value: "Sonia Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(9, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolIneligibleChild1 = {
    birthcertno: { value: "T4236033Z" },
    name: { value: "Emmy Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolIneligibleChild2 = {
    birthcertno: { value: "T5207292H" },
    name: { value: "Emmanuel Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childYoungest = {
    birthcertno: { value: "T7403149D" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: exports.formatDateToString() },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child1MonthOld = {
    birthcertno: { value: "T3497606B" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: exports.formatDateToString(moment().subtract(1, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child2MonthsOld = {
    birthcertno: { value: "T3497606B" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle1 = {
    birthcertno: { value: "T6482839D" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle2 = {
    birthcertno: { value: "T0561004J" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle3 = {
    birthcertno: { value: "T9682932E" },
    name: { value: "Tan Boy" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle4 = {
    birthcertno: { value: "T2089445D" },
    name: { value: "Tan Girl" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle5 = {
    birthcertno: { value: "T1415220I" },
    name: { value: "Tan Girl Younger" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childSuperOld = {
    birthcertno: { value: "T1985685I" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child6YearsOld = {
    birthcertno: { value: "T8158347H" },
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years").startOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child7YearsOld = {
    birthcertno: { value: "T1012559B" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years").endOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childDeceased1 = {
    birthcertno: { value: "T1836838I" },
    name: { value: "Deceased child 1" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
const childDeceased2 = {
    birthcertno: { value: "T7888002Z" },
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