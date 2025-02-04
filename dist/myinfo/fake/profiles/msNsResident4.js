"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msNsResident4 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8838208J";
const name = fake_profile_1.ProfileArchetype.MS_NS_RESIDENT_4;
exports.msNsResident4 = {
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
            value: "1988-08-08",
        };
        profile.regadd.unit.value = "229";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "131";
        profile.regadd.street.value = "YISHUN STREET 11";
        profile.regadd.postal.value = "760131";
        return profile;
    },
};
//# sourceMappingURL=msNsResident4.js.map