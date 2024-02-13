"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSgTeenager17 = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "T0834325F";
const name = fake_profile_1.ProfileArchetype.MR_SG_TEENAGER_17;
exports.mrSgTeenager17 = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.silversupport.eligibility.value = false;
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 17}-01-01`,
        };
        profile.marital = {
            lastupdated: "2021-03-19",
            code: null,
            desc: null,
            source: "2",
            classification: "C",
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
//# sourceMappingURL=mrSGTeenager17.js.map