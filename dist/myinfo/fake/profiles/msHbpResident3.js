"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msHbpResident3 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S4050256D";
const name = fake_profile_1.ProfileArchetype.MS_HBP_RESIDENT_3;
exports.msHbpResident3 = {
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
            value: "1940-06-27",
        };
        profile.regadd.unit.value = "123";
        profile.regadd.floor.value = "04";
        profile.regadd.block.value = "106";
        profile.regadd.street.value = "GANGSA ROAD";
        profile.regadd.postal.value = "670106";
        return profile;
    },
};
//# sourceMappingURL=msHbpResident3.js.map