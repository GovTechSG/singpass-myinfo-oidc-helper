"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msSgTeenager17 = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const map_1 = require("../../domain/map");
const id = "T0834325F";
const name = fake_profile_1.ProfileArchetype.MS_SG_TEENAGER_17;
exports.msSgTeenager17 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.silversupport.eligibility.value = false;
        profile.sex.code = "F";
        profile.sex.desc = map_1.sex.map.codeToDesc[profile.sex.code];
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 17}-01-01`,
        };
        profile.marital = {
            lastupdated: "2021-03-19",
            code: "",
            source: "2",
            classification: "C",
            desc: "",
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