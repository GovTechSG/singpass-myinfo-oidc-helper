"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrHbpResident2 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8672262C";
const name = fake_profile_1.ProfileArchetype.MR_HBP_RESIDENT_2;
exports.mrHbpResident2 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "1986-09-28",
        };
        profile.regadd.unit.value = "161";
        profile.regadd.floor.value = "13";
        profile.regadd.block.value = "311A";
        profile.regadd.street.value = "CLEMENTI AVENUE 4";
        profile.regadd.postal.value = "121311";
        return profile;
    },
};
//# sourceMappingURL=mrHbpResident2.js.map