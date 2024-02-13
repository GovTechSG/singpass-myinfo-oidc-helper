"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrCckResident3 = void 0;
const _ = require("lodash");
const domain_1 = require("../../domain");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S5823426E";
const name = fake_profile_1.ProfileArchetype.MR_CCK_RESIDENT_3;
exports.mrCckResident3 = {
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
            value: "1958-05-15",
        };
        profile.regadd.unit.value = "275";
        profile.regadd.floor.value = "16";
        profile.regadd.block.value = "406";
        profile.regadd.street.value = "CHOA CHU KANG AVENUE 3";
        profile.regadd.postal.value = "680406";
        return profile;
    },
};
//# sourceMappingURL=mrCckResident3.js.map