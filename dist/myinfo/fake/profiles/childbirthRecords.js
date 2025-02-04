"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrenRecords = exports.preschoolIneligibleChild2 = exports.preschoolIneligibleChild1 = exports.preschoolEligibleChild2_K2 = exports.preschoolEligibleChild2_PG = exports.preschoolEligibleChild2_N2 = exports.preschoolEligibleChild2_K1 = exports.preschoolEligibleChild2_IC = exports.preschoolEligibleChild2_N1 = exports.preschoolEligibleChild_K2 = exports.preschoolEligibleChild_K1 = exports.preschoolEligibleChild_N1 = exports.preschoolEligibleChild_PG = exports.preschoolEligibleChild_N2 = exports.preschoolEligibleChild_IC = void 0;
const core_1 = require("@js-joda/core");
const DateUtils_1 = require("../../../util/DateUtils");
const domain_1 = require("../../domain");
const formatDateToString = (date) => {
    date !== null && date !== void 0 ? date : (date = core_1.ZonedDateTime.now());
    return DateUtils_1.DateUtils.toIsoDate(date);
};
exports.preschoolEligibleChild_IC = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T6071883G" },
    name: { value: "Ezra Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(2)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild_N2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T7839011A" },
    name: { value: "Elliot Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(4)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild_PG = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T0993929B" },
    name: { value: "Ella Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(18)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild_N1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9732016G" },
    name: { value: "Ellie Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(3)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild_K1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T0174806D" },
    name: { value: "Emma Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(5)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild_K2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T8821991G" },
    name: { value: "Kelly Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(6)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild2_N1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1256698G" },
    name: { value: "Kylie Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(3)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild2_IC = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T8932406D" },
    name: { value: "Karol Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(6)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild2_K1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T4961714Z" },
    name: { value: "Kara Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(5)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild2_N2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1023211I" },
    name: { value: "Sara Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(4)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild2_PG = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T3784654B" },
    name: { value: "Stella Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(22)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolEligibleChild2_K2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9992319E" },
    name: { value: "Sonia Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(9)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolIneligibleChild1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1704475Z" },
    name: { value: "Emmy Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(8)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
exports.preschoolIneligibleChild2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T8197709C" },
    name: { value: "Emmanuel Lee" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(7)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childYoungest = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9604076D" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: formatDateToString() },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const child1MonthOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T4480566E" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(1)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const child2MonthsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T6046032E" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusMonths(2)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childMiddle1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T3835928I" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(2)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childMiddle2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1938935E" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(2)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childMiddle3 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T0584009G" },
    name: { value: "Tan Boy" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(3)) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childMiddle4 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T1257717B" },
    name: { value: "Tan Girl" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(4)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childMiddle5 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T4172977A" },
    name: { value: "Tan Girl Younger" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(5)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childSuperOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T4793991C" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: formatDateToString(core_1.ZonedDateTime.now().minusYears(8)) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const child6YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T0202564C" }, // NRIC used to check for child immunisation records. please do not change.
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: formatDateToString(DateUtils_1.DateUtils.startOfYear(core_1.ZonedDateTime.now().minusYears(6))) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const child7YearsOld = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T9970437Z" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: formatDateToString(DateUtils_1.DateUtils.endOfYear(core_1.ZonedDateTime.now().minusYears(7))) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.ALIVE,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.ALIVE),
    },
    unavailable: false,
};
const childDeceased1 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T8005316E" },
    name: { value: "Deceased child 1" },
    dob: { value: formatDateToString(DateUtils_1.DateUtils.endOfYear(core_1.ZonedDateTime.now().minusYears(4))) },
    sex: { code: domain_1.MyInfoSexCode.MALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.DECEASED,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.DECEASED),
    },
    unavailable: false,
};
const childDeceased2 = {
    source: "1",
    classification: "C",
    lastupdated: formatDateToString(),
    birthcertno: { value: "T8205956Z" },
    name: { value: "Deceased child 2" },
    dob: { value: formatDateToString(DateUtils_1.DateUtils.endOfYear(core_1.ZonedDateTime.now().minusYears(5))) },
    sex: { code: domain_1.MyInfoSexCode.FEMALE, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE) },
    tob: { value: "2200" },
    lifestatus: {
        code: domain_1.MyInfoLifeStatusCode.DECEASED,
        desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(domain_1.MyInfoLifeStatusCode.DECEASED),
    },
    unavailable: false,
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