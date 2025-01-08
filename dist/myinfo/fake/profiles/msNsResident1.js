"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msNsResident1 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S7952261I";
const name = fake_profile_1.ProfileArchetype.MS_NS_RESIDENT_1;
exports.msNsResident1 = {
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
            value: "1979-10-18",
        };
        profile.regadd.unit.value = "174";
        profile.regadd.floor.value = "01";
        profile.regadd.block.value = "105";
        profile.regadd.street.value = "YISHUN RING ROAD";
        profile.regadd.postal.value = "760105";
        return profile;
    },
};
//# sourceMappingURL=msNsResident1.js.map