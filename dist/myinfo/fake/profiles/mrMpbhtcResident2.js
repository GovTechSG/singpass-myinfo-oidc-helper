"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrMpbhtcResident2 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8160393F";
const name = fake_profile_1.ProfileArchetype.MR_MPBHTC_RESIDENT_2;
exports.mrMpbhtcResident2 = {
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
            value: "1962-11-24",
        };
        profile.regadd.unit.value = "3";
        profile.regadd.floor.value = "03";
        profile.regadd.block.value = "261";
        profile.regadd.street.value = "SERANGOON CENTRAL DRIVE";
        profile.regadd.postal.value = "550261";
        return profile;
    },
};
//# sourceMappingURL=mrMpbhtcResident2.js.map