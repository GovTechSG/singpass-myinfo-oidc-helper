import * as _ from "lodash";
import { MyInfoMerdekaGenerationMessageCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_NON_BENEFITS;

export const mrSGUncleNonBenefits: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.merdekagen.message.code = MyInfoMerdekaGenerationMessageCode.NON_MG;
		profile.merdekagen.eligibility.value = false;
		profile.gstvoucher.exclusion.value = false;
		profile.gstvoucher.signup.value = false;
		profile.gstvoucher.gstregular.value = 0;
		profile.gstvoucher.gstmedisave.value = 0;
		profile.gstvoucher.gstspecial.value = 0;

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `1959-01-01`,
			unavailable: false,
		};

		profile.silversupport = {
			"eligibility": {
				"value": false,
			},
			"lastupdated": "2019-04-01",
			"amount": {
				"value": 0,
			},
			"source": "1",
			"classification": "C",
			"year": {
				"value": 2019,
			},
		};
		return profile;
	},
};
