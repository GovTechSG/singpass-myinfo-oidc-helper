"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msNsResident6 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8844367E";
const name = fake_profile_1.ProfileArchetype.MS_NS_RESIDENT_6;
exports.msNsResident6 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = domain_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = domain_1.MyInfoSexCode.fn.toEnumDesc(domain_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2023-01-22",
            source: "1",
            classification: "C",
            value: "1988-08-08",
        };
        profile.regadd.unit.value = "221";
        profile.regadd.floor.value = "05";
        profile.regadd.block.value = "250";
        profile.regadd.street.value = "YISHUN AVENUE 9";
        profile.regadd.postal.value = "760250";
        return profile;
    },
};
//# sourceMappingURL=msNsResident6.js.map