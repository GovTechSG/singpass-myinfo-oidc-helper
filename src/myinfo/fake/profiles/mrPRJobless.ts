import * as _ from "lodash";
import { MyinfoNationalityCode, MyinfoResidentialCode } from "../../domain";
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
		profile.nationality.code = MyinfoNationalityCode.ANDORRAN;
		profile.residentialstatus.code = MyinfoResidentialCode.PR;
		profile.residentialstatus.desc = MyinfoResidentialCode.fn.toEnumDesc(MyinfoResidentialCode.PR);

		return profile;
	},
};
