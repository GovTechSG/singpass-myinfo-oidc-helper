"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msCckResident2 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8379286H";
const name = fake_profile_1.ProfileArchetype.MS_CCK_RESIDENT_2;
exports.msCckResident2 = {
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
            value: "1983-03-04",
        };
        profile.regadd.unit.value = "372";
        profile.regadd.floor.value = "11";
        profile.regadd.block.value = "388";
        profile.regadd.street.value = "BUKIT BATOK WEST AVENUE 5";
        profile.regadd.postal.value = "650388";
        return profile;
    },
};
//# sourceMappingURL=msCckResident2.js.map