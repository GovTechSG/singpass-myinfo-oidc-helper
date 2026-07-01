"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrJyTcResident = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8723243C";
const name = fake_profile_1.ProfileArchetype.MR_JYTC_RESIDENT;
exports.mrJyTcResident = {
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
            value: "1987-11-24",
        };
        profile.regadd.unit.value = "176";
        profile.regadd.floor.value = "12";
        profile.regadd.block.value = "436B";
        profile.regadd.street.value = "FERNVALE ROAD";
        profile.regadd.postal.value = "792436";
        return profile;
    },
};
//# sourceMappingURL=mrJyTcResident.js.map