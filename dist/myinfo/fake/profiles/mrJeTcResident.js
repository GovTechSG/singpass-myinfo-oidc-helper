"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrJeTcResident = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9890162J";
const name = fake_profile_1.ProfileArchetype.MR_JETC_RESIDENT;
exports.mrJeTcResident = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.MALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.MALE);
        profile.dob = {
            lastupdated: "2024-01-24",
            source: "1",
            classification: "C",
            value: "1998-11-24",
        };
        profile.regadd.unit.value = "180";
        profile.regadd.floor.value = "08";
        profile.regadd.block.value = "101";
        profile.regadd.street.value = "JURONG EAST STREET 13";
        profile.regadd.postal.value = "600101";
        return profile;
    },
};
//# sourceMappingURL=mrJeTcResident.js.map