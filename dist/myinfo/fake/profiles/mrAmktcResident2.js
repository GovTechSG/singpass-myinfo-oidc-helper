"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrAmktcResident2 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S9898141A";
const name = fake_profile_1.ProfileArchetype.MR_AMKTC_RESIDENT_2;
exports.mrAmktcResident2 = {
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
        profile.regadd.unit.value = "1853";
        profile.regadd.floor.value = "08";
        profile.regadd.block.value = "128";
        profile.regadd.street.value = "ANG MO KIO AVENUE 3";
        profile.regadd.postal.value = "560128";
        return profile;
    },
};
//# sourceMappingURL=mrAmktcResident2.js.map