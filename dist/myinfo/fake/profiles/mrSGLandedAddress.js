"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGLandedAddress = void 0;
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const types_1 = require("../../../types");
const id = "S8399420G";
const name = fake_profile_1.ProfileArchetype.MR_SG_LANDED_ADDRESS;
exports.mrSGLandedAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.regadd = {
            country: {
                code: types_1.MyInfoCountryPlaceCode.SINGAPORE,
                desc: types_1.MyInfoCountryPlaceCode.fn.toEnumDesc(types_1.MyInfoCountryPlaceCode.SINGAPORE),
            },
            unit: {
                value: "",
            },
            street: {
                value: "JALAN MANIS",
            },
            lastupdated: "2018-05-10",
            block: {
                value: "10",
            },
            postal: {
                value: "329245",
            },
            source: "1",
            classification: "C",
            floor: {
                value: "",
            },
            type: "SG",
            building: {
                value: "",
            },
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGLandedAddress.js.map