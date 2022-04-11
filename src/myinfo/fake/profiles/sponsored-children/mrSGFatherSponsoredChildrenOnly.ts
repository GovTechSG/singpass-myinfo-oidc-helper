import * as _ from "lodash";
import { MyInfoComponents } from "../../../domain";
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

		const profile: MyInfoComponents.Schemas.Person = BaseProfile.generate(profileName);
		profile.sponsoredchildrenrecords = _.values(SponsoredChildrenRecords);

		profile.cpfcontributions = {
			history: [],
			classification: "C",
			source: "1",
			lastupdated: "2019-03-26",
			unavailable: true
		};
		profile.cpfbalances = {
			ma: { value: 11470.71 },
			oa: { value: 15470.71 },
			sa: { value: 17480.71 },
			lastupdated: "2016-12-01",
			classification: "C",
			source: "1",
			unavailable: false
		};
		return profile;
	},
};
