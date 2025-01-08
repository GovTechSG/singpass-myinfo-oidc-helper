"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msHbpResident6 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S6217524I";
const name = fake_profile_1.ProfileArchetype.MS_HBP_RESIDENT_6;
exports.msHbpResident6 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2023-12-20",
            source: "1",
            classification: "C",
            value: "1962-11-24",
        };
        profile.regadd.unit.value = "167";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "21";
        profile.regadd.street.value = "GHIM MOH ROAD";
        profile.regadd.postal.value = "270021";
        return profile;
    },
};
//# sourceMappingURL=msHbpResident6.js.map