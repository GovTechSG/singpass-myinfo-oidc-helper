"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrNsResident2 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S8993188F";
const name = fake_profile_1.ProfileArchetype.MR_NS_RESIDENT_2;
exports.mrNsResident2 = {
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
            value: "1989-07-23",
        };
        profile.regadd.unit.value = "3549";
        profile.regadd.floor.value = "10";
        profile.regadd.block.value = "855";
        profile.regadd.street.value = "YISHUN RING ROAD";
        profile.regadd.postal.value = "760855";
        return profile;
    },
};
//# sourceMappingURL=mrNsResident2.js.map