"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrAmktcResident1 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8199715B";
const name = fake_profile_1.ProfileArchetype.MR_AMKTC_RESIDENT_1;
exports.mrAmktcResident1 = {
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
            value: "1949-01-11",
        };
        profile.regadd.unit.value = "244";
        profile.regadd.floor.value = "04";
        profile.regadd.block.value = "400C";
        profile.regadd.street.value = "FERNVALE LANE";
        profile.regadd.postal.value = "793400";
        return profile;
    },
};
//# sourceMappingURL=mrAmktcResident1.js.map