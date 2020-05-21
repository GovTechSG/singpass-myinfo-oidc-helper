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
    birthcertno: { value: "S5426346E" },
    name: { value: "Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
const child1MonthOld = {
    birthcertno: { value: "S1097168C" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
};
const child2MonthsOld = {
    birthcertno: { value: "S0944537D" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
};
const childMiddle1 = {
    birthcertno: { value: "S8292340C" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle2 = {
    birthcertno: { value: "S5149176I" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle3 = {
    birthcertno: { value: "S0040277Z" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
};
const childMiddle4 = {
    birthcertno: { value: "S5143858B" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
};
const childMiddle5 = {
    birthcertno: { value: "S6853145D" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
};
const child6YearsOld = {
    birthcertno: { value: "S5289396H" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    birthcertno: { value: "S0582108H" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
};
const childSuperOld = {
    birthcertno: { value: "S9165733C" },
    name: { value: "Tan Ke Wei" },
    dob: { value: formatDateToString(moment().subtract(8, "years")) },
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