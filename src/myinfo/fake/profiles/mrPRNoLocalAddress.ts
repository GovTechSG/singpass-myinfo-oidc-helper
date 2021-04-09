import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { MyinfoNationalityCode, MyinfoResidentialCode } from "../../domain";

const id = "S3814379D";
const name = ProfileArchetype.MR_PR_NO_LOCAL_ADDRESS;

export const mrPRNoLocalAddress: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.nationality.code = MyinfoNationalityCode.ANDORRAN;
		profile.residentialstatus.code = MyinfoResidentialCode.PR;
		profile.residentialstatus.desc = MyinfoResidentialCode.fn.toEnumDesc(MyinfoResidentialCode.PR);
		profile.regadd = {
			"type": "Unformatted",
			"line1": { "value": "96 Guild Street" },
			"line2": { "value": "London SE16 1BE" },
			"classification": "C",
			"source": "1",
			"lastupdated": "2018-05-10",
			"unavailable": false,
		};
		profile.dob = {
			"lastupdated": "2018-06-01",
			"source": "1",
			"classification": "C",
			"value": "1983-10-06",
			"unavailable": false,
		};

		return profile;
	},
};
