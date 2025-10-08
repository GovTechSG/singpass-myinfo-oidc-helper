"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msHbpResident4 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S6223030D";
const name = fake_profile_1.ProfileArchetype.MS_HBP_RESIDENT_4;
exports.msHbpResident4 = {
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
            value: "1962-11-24",
        };
        profile.regadd.unit.value = "123";
        profile.regadd.floor.value = "04";
        profile.regadd.block.value = "106";
        profile.regadd.street.value = "GANGSA ROAD";
        profile.regadd.postal.value = "670106";
        return profile;
    },
};
//# sourceMappingURL=msHbpResident4.js.map