import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyInfoNationalityCitizenshipCode, MyInfoResidentialCode } from "../../domain";

const id = "S3814379D";
const name = ProfileArchetype.MR_PR_NO_LOCAL_ADDRESS;

export const mrPRNoLocalAddress: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.nationality.code = MyInfoNationalityCitizenshipCode.ANDORRAN;
		profile.residentialstatus.code = MyInfoResidentialCode.PR;
		profile.residentialstatus.desc = MyInfoResidentialCode.fn.toEnumDesc(MyInfoResidentialCode.PR);
		profile.regadd = {
			"type": "UNFORMATTED",
			"line1": { "value": "96 GUILD STREET" },
			"line2": { "value": "LONDON SE16 1BE" },
			"classification": "C",
			"source": "1",
			"lastupdated": "2018-05-10",
		};
		profile.dob = {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "1983-10-06",
		};

		return profile;
	},
};
