"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrenRecords = exports.preschoolIneligibleChild2 = exports.preschoolIneligibleChild1 = exports.preschoolEligibleChild2_K2 = exports.preschoolEligibleChild2_PG = exports.preschoolEligibleChild2_N2 = exports.preschoolEligibleChild2_K1 = exports.preschoolEligibleChild2_IC = exports.preschoolEligibleChild2_N1 = exports.preschoolEligibleChild_K2 = exports.preschoolEligibleChild_K1 = exports.preschoolEligibleChild_N1 = exports.preschoolEligibleChild_PG = exports.preschoolEligibleChild_N2 = exports.preschoolEligibleChild_IC = exports.formatDateToString = void 0;
const moment = require("moment");
exports.formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment().format("YYYY-MM-DD").toString();
};
exports.preschoolEligibleChild_IC = {
    birthcertno: { value: "T5170081Z" },
    name: { value: "Ezra Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_N2 = {
    birthcertno: { value: "T8478075D" },
    name: { value: "Elliot Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_PG = {
    birthcertno: { value: "T6664586F" },
    name: { value: "Ella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(18, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_N1 = {
    birthcertno: { value: "T1963041I" },
    name: { value: "Ellie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_K1 = {
    birthcertno: { value: "T4524789E" },
    name: { value: "Emma Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild_K2 = {
    birthcertno: { value: "T8677396H" },
    name: { value: "Kelly Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_N1 = {
    birthcertno: { value: "T4816254H" },
    name: { value: "Kylie Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_IC = {
    birthcertno: { value: "T6093535H" },
    name: { value: "Karol Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_K1 = {
    birthcertno: { value: "T8518803D" },
    name: { value: "Kara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_N2 = {
    birthcertno: { value: "T1405260C" },
    name: { value: "Sara Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_PG = {
    birthcertno: { value: "T7358432E" },
    name: { value: "Stella Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(22, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolEligibleChild2_K2 = {
    birthcertno: { value: "T8267964I" },
    name: { value: "Sonia Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(9, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolIneligibleChild1 = {
    birthcertno: { value: "T5190633G" },
    name: { value: "Emmy Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.preschoolIneligibleChild2 = {
    birthcertno: { value: "T5492029B" },
    name: { value: "Emmanuel Lee" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childYoungest = {
    birthcertno: { value: "T7222687E" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: exports.formatDateToString() },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child1MonthOld = {
    birthcertno: { value: "T4084691Z" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: exports.formatDateToString(moment().subtract(1, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child2MonthsOld = {
    birthcertno: { value: "T6601934E" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle1 = {
    birthcertno: { value: "T3272623I" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle2 = {
    birthcertno: { value: "T7170632F" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: exports.formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle3 = {
    birthcertno: { value: "T9984688C" },
    name: { value: "Tan Boy" },
    dob: { value: exports.formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle4 = {
    birthcertno: { value: "T5628710D" },
    name: { value: "Tan Girl" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle5 = {
    birthcertno: { value: "T1900115B" },
    name: { value: "Tan Girl Younger" },
    dob: { value: exports.formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childSuperOld = {
    birthcertno: { value: "T6038028C" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: exports.formatDateToString(moment().subtract(8, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child6YearsOld = {
    birthcertno: { value: "T0202564C" },
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: exports.formatDateToString(moment().subtract(6, "years").startOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child7YearsOld = {
    birthcertno: { value: "T3895997I" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: exports.formatDateToString(moment().subtract(7, "years").endOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childDeceased1 = {
    birthcertno: { value: "T5923152E" },
    name: { value: "Deceased child 1" },
    dob: { value: exports.formatDateToString(moment().subtract(4, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
const childDeceased2 = {
    birthcertno: { value: "T6781942F" },
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