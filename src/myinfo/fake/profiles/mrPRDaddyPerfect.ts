import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { preschoolEligibleChild2_K2, preschoolEligibleChild2_N2, preschoolEligibleChild2_PG, preschoolIneligibleChild2 } from "./childbirthRecords";
import { MyinfoNationalityCode, MyinfoResidentialCode } from "../../domain";

const id = "S2599302J";
const name = ProfileArchetype.MR_PR_DADDY_PERFECT;

export const mrPRDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.nationality.code = MyinfoNationalityCode.ANDORRAN;
		profile.residentialstatus.code = MyinfoResidentialCode.PR;
		profile.residentialstatus.desc = MyinfoResidentialCode.fn.toEnumKey(MyinfoResidentialCode.PR);

		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: "1979-06-14",
			unavailable: false,
		};

		profile.childrenbirthrecords = [
			preschoolEligibleChild2_N2,
			preschoolEligibleChild2_PG,
			preschoolEligibleChild2_K2,
			preschoolIneligibleChild2,
		];

		return profile;
	},
};
