"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrCckResident1 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8939392B";
const name = fake_profile_1.ProfileArchetype.MR_CCK_RESIDENT_1;
exports.mrCckResident1 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.MALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2023-12-20",
            source: "1",
            classification: "C",
            value: "1989-04-24",
        };
        profile.regadd.unit.value = "32";
        profile.regadd.floor.value = "07";
        profile.regadd.block.value = "130";
        profile.regadd.street.value = "CHOA CHU KANG AVENUE 1";
        profile.regadd.postal.value = "680130";
        return profile;
    },
};
//# sourceMappingURL=mrCckResident1.js.map