"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpbhtcResident4 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S7530228B";
const name = fake_profile_1.ProfileArchetype.MR_MPBHTC_RESIDENT_4;
exports.mrMpbhtcResident4 = {
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
            value: "1984-02-29",
        };
        profile.regadd.unit.value = "752";
        profile.regadd.floor.value = "12";
        profile.regadd.block.value = "846";
        profile.regadd.street.value = "SIMS AVENUE";
        profile.regadd.postal.value = "400846";
        return profile;
    },
};
//# sourceMappingURL=mrMpbhtcResident4.js.map