"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msHbpResident1 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S6743158H";
const name = fake_profile_1.ProfileArchetype.MS_HBP_RESIDENT_1;
exports.msHbpResident1 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "1967-11-12",
        };
        profile.regadd.unit.value = "10";
        profile.regadd.floor.value = "16";
        profile.regadd.block.value = "181";
        profile.regadd.street.value = "JELEBU ROAD";
        profile.regadd.postal.value = "670181";
        return profile;
    },
};
//# sourceMappingURL=msHbpResident1.js.map