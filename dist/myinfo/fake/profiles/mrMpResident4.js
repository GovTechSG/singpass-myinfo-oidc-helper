"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpResident4 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S7456600F";
const name = fake_profile_1.ProfileArchetype.MR_MP_RESIDENT_4;
exports.mrMpResident4 = {
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
            value: "1974-10-17",
        };
        profile.regadd.unit.value = "65";
        profile.regadd.floor.value = "08";
        profile.regadd.block.value = "58";
        profile.regadd.street.value = "MARINE TERRACE";
        profile.regadd.postal.value = "440058";
        return profile;
    },
};
//# sourceMappingURL=mrMpResident4.js.map