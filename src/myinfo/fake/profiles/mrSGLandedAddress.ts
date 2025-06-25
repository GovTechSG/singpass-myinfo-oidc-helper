import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyInfoCountryPlaceCode } from "src/types";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_LANDED_ADDRESS;

export const mrSGLandedAddress: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.regadd = {
			country: {
				code: MyInfoCountryPlaceCode.SINGAPORE,
				desc: MyInfoCountryPlaceCode.fn.toEnumDesc(MyInfoCountryPlaceCode.SINGAPORE),
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
