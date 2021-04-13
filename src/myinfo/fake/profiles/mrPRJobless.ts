import * as _ from "lodash";
import { MyInfoNationalityCode, MyInfoResidentialCode } from "../../domain";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S2599302J";
const name = ProfileArchetype.MR_PR_JOBLESS;

export const mrPRJobless: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.nationality.code = MyInfoNationalityCode.ANDORRAN;
		profile.residentialstatus.code = MyInfoResidentialCode.PR;
		profile.residentialstatus.desc = MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR);

		return profile;
	},
};
