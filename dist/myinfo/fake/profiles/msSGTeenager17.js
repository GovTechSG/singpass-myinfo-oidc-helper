"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msSgTeenager17 = void 0;
const _ = require("lodash");
const types_1 = require("../../../types");
const common_1 = require("../profiles/common");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "T0834325F";
const name = fake_profile_1.ProfileArchetype.MS_SG_TEENAGER_17;
exports.msSgTeenager17 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.aliasname = {
            lastupdated: "2021-03-19",
            source: "1",
            classification: "C",
            value: common_1.aliasName.LEE_XIU,
        };
        profile.sex.code = types_1.MyInfoSexCode.FEMALE;
        profile.sex.desc = types_1.MyInfoSexCode.fn.toEnumDesc(types_1.MyInfoSexCode.FEMALE);
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 17}-01-01`,
        };
        profile.marital = {
            lastupdated: "2021-03-19",
            code: null,
            source: "2",
            classification: "C",
            desc: null,
        };
        profile.marriagedate = {
            lastupdated: "2021-03-19",
            source: "2",
            classification: "C",
            value: "",
        };
        profile.childrenbirthrecords = [];
        profile.sponsoredchildrenrecords = [];
        return profile;
    },
};
//# sourceMappingURL=msSGTeenager17.js.map