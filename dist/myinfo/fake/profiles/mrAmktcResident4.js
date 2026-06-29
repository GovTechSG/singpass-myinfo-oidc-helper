"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrAmktcResident4 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S0070404J";
const name = fake_profile_1.ProfileArchetype.MR_AMKTC_RESIDENT_4;
exports.mrAmktcResident4 = {
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
            value: "1988-08-08",
        };
        profile.regadd.unit.value = "11";
        profile.regadd.floor.value = "26";
        profile.regadd.block.value = "407B";
        profile.regadd.street.value = "FERNVALE ROAD";
        profile.regadd.postal.value = "792407";
        return profile;
    },
};
//# sourceMappingURL=mrAmktcResident4.js.map