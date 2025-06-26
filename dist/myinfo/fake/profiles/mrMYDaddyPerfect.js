"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMYDaddyPerfect = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "F5994458N";
const name = fake_profile_1.ProfileArchetype.MR_MY_DADDY_PERFECT;
exports.mrMYDaddyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.nationality.code = types_1.MyInfoNationalityCitizenshipCode.MALAYSIAN;
        profile.birthcountry.code = types_1.MyInfoCountryPlaceCode.MALAYSIA;
        profile.residentialstatus.code = "";
        profile.residentialstatus.desc = "";
        profile.marital = {
            lastupdated: "2020-09-10",
            code: null,
            source: "2",
            classification: "C",
            desc: null,
        };
        profile.marriagedate = {
            lastupdated: "2020-09-10",
            source: "2",
            classification: "C",
            value: "",
        };
        profile.passtype = {
            code: "RPass",
            desc: "Work Permit",
            classification: "C",
            source: "1",
            lastupdated: "2025-01-01",
        };
        profile.dialect = {
            lastupdated: "2020-09-10",
            code: "",
            source: "2",
            classification: "C",
            desc: "",
        };
        return profile;
    },
};
//# sourceMappingURL=mrMYDaddyPerfect.js.map