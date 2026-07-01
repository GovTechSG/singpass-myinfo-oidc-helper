"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msPrpgResident1 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const fake_profile_1 = require("./fake-profile");
const BaseProfile_1 = require("./sponsored-children/BaseProfile");
const id = "S6003491E";
const name = fake_profile_1.ProfileArchetype.MS_PRPG_RESIDENT_1;
exports.msPrpgResident1 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2023-12-20",
            source: "1",
            classification: "C",
            value: "1960-06-04",
        };
        profile.regadd.unit.value = "317";
        profile.regadd.floor.value = "12";
        profile.regadd.block.value = "458";
        profile.regadd.street.value = "PASIR RIS DRIVE 4";
        profile.regadd.postal.value = "510458";
        return profile;
    },
};
//# sourceMappingURL=msPrpgResident1.js.map