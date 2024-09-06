"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrHbpResident5 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "T0892280I";
const name = fake_profile_1.ProfileArchetype.MR_HBP_RESIDENT_5;
exports.mrHbpResident5 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-22",
            source: "1",
            classification: "C",
            value: "2008-02-26",
        };
        profile.regadd.unit.value = "63";
        profile.regadd.floor.value = "03";
        profile.regadd.block.value = "15";
        profile.regadd.street.value = "TOH YI DRIVE";
        profile.regadd.postal.value = "590015";
        return profile;
    },
};
//# sourceMappingURL=mrHbpResident5.js.map