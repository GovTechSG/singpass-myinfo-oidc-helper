import * as _ from "lodash";
import { MyInfoComponentsV4 } from "../../../../types";
import { FakeProfile, ProfileArchetype } from "../fake-profile";
import { BaseProfile } from "./BaseProfile";
import { SponsoredChildrenRecords } from "./sponsoredChildBirthRecords";

const id = "S9116045E";
const name = ProfileArchetype.MR_SG_FATHER_ONLY_SPONSORED;

export const mrSGFatherSponsoredChildrenOnly: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile: MyInfoComponentsV4.Schemas.Person = BaseProfile.generate(profileName);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		profile.cpfcontributions = {
			history: [],
			classification: "C",
			source: "1",
			lastupdated: "2019-03-26",
		};
		profile.cpfbalances = {
			ma: {
				value: 11470.71,
				lastupdated: `${new Date().toISOString().split("T")[0]}`,
				classification: "C",
				source: "1",
			},
			oa: {
				value: 15470.71,
				lastupdated: `${new Date().toISOString().split("T")[0]}`,
				classification: "C",
				source: "1",
			},
			sa: {
				value: 17480.71,
				lastupdated: `${new Date().toISOString().split("T")[0]}`,
				classification: "C",
				source: "1",
			},
		};
		return profile;
	},
};
