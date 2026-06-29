"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msMpResident5 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "T0704234A";
const name = fake_profile_1.ProfileArchetype.MS_MP_RESIDENT_5;
exports.msMpResident5 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "2007-08-30",
        };
        profile.regadd.unit.value = "97";
        profile.regadd.floor.value = "03";
        profile.regadd.block.value = "262";
        profile.regadd.street.value = "SERANGOON CENTRAL DRIVE";
        profile.regadd.postal.value = "550262";
        return profile;
    },
};
//# sourceMappingURL=msMpResident5.js.map