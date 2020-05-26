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
    birthcertno: { value: "S4435097A" },
    name: { value: "Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
const child1MonthOld = {
    birthcertno: { value: "S9720896D" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
};
const child2MonthsOld = {
    birthcertno: { value: "S0027094F" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
};
const childMiddle1 = {
    birthcertno: { value: "S7580533J" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle2 = {
    birthcertno: { value: "S8064145A" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const childMiddle3 = {
    birthcertno: { value: "S7197359Z" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
};
const childMiddle4 = {
    birthcertno: { value: "S1383467I" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
};
const childMiddle5 = {
    birthcertno: { value: "S4291928D" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
};
const child6YearsOld = {
    birthcertno: { value: "S1151130I" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    birthcertno: { value: "S1168726A" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
};
const childSuperOld = {
    birthcertno: { value: "S9015683G" },
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