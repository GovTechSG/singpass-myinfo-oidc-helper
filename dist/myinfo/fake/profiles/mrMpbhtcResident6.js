"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpbhtcResident6 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S1363668J";
const name = fake_profile_1.ProfileArchetype.MR_MPBHTC_RESIDENT_6;
exports.mrMpbhtcResident6 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-08-01",
            source: "1",
            classification: "C",
            value: "2004-10-17",
        };
        profile.regadd.unit.value = "180";
        profile.regadd.floor.value = "16";
        profile.regadd.block.value = "65";
        profile.regadd.street.value = "MARINE DRIVE";
        profile.regadd.postal.value = "440065";
        return profile;
    },
};
//# sourceMappingURL=mrMpbhtcResident6.js.map