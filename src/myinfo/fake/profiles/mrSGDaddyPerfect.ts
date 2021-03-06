import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { preschoolEligibleChild2_IC, preschoolEligibleChild2_K1 } from "./childbirthRecords";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_DADDY_PERFECT;

export const mrSGDaddyPerfect: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		return {
			"edulevel": {
				"lastupdated": "2020-09-10",
				"code": "",
				"source": "2",
				"classification": "C",
				"desc": "",
			},
			"dialect": {
				"lastupdated": "2018-06-01",
				"code": "HK",
				"source": "1",
				"classification": "C",
				"desc": "HOKKIEN",
			},
			"occupation": {
				"lastupdated": "2020-09-10",
				"code": "",
				"source": "2",
				"classification": "C",
				"desc": "",
			},
			"regadd": {
				"country": {
					"code": "SG",
					"desc": "SINGAPORE",
				},
				"unit": {
					"value": "22",
				},
				"street": {
					"value": "TOA PAYOH LORONG 1",
				},
				"lastupdated": "2018-05-10",
				"block": {
					"value": "123",
				},
				"postal": {
					"value": "310123",
				},
				"source": "1",
				"classification": "C",
				"floor": {
					"value": "12",
				},
				"type": "SG",
				"building": {
					"value": "",
				},
			},
			"mobileno": {
				"lastupdated": "2019-04-03",
				"source": "4",
				"classification": "C",
				"areacode": {
					"value": "65",
				},
				"prefix": {
					"value": "+",
				},
				"nbr": {
					"value": "88158701",
				},
			},
			"passportexpirydate": {
				"lastupdated": "2021-01-01",
				"source": "1",
				"classification": "C",
				"value": "2030-09-10",
			},
			"divorcedate": {
				"lastupdated": "",
				"source": "1",
				"classification": "C",
				"value": "",
			},
			"marriagecertno": {
				"lastupdated": "2018-05-10",
				"source": "1",
				"classification": "C",
				"value": "M525997",
			},
			"merdekagen": {
				"eligibility": {
					"value": false,
				},
				"lastupdated": "2019-04-01",
				"quantum": {
					"value": 200,
				},
				"source": "1",
				"classification": "C",
				"message": {
					"code": "2",
					"desc": "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
				},
			},
			"pioneergen": {
				"eligibility": {
					"value": false,
				},
				"lastupdated": "2021-01-15",
				"quantum": {
					"value": "0.00",
				},
				"source": "1",
				"classification": "C",
				"message": {
					"code": "1",
					"desc": "We regret that you are not eligible for the Pioneer Generation Package.  For further enquiries, please contact 1800-2222-888.",
				},
			},
			"gstvoucher": {
				"gstregular": {
					"value": 300,
				},
				"year": {
					"value": 2018,
				},
				"exclusion": {
					"value": false,
				},
				"gstmedisave": {
					"value": 250,
				},
				"lastupdated": "2019-04-01",
				"gstspecial": {
					"value": 300,
				},
				"source": "1",
				"classification": "C",
				"signup": {
					"value": false,
				},
			},
			"email": {
				"lastupdated": "2019-04-03",
				"source": "4",
				"classification": "C",
				"value": "gt.govandi@gmail.com",
			},
			"birthcountry": {
				"lastupdated": "2018-06-01",
				"code": "SG",
				"source": "1",
				"classification": "C",
				"desc": "SINGAPORE",
			},
			"race": {
				"lastupdated": "2018-06-01",
				"code": "CN",
				"source": "1",
				"classification": "C",
				"desc": "CHINESE",
			},
			"silversupport": {
				"eligibility": {
					"value": true,
				},
				"lastupdated": "2019-04-01",
				"amount": {
					"value": 300,
				},
				"source": "1",
				"classification": "C",
				"year": {
					"value": 2019,
				},
			},
			"countryofmarriage": {
				"lastupdated": "2018-05-10",
				"code": "SG",
				"source": "1",
				"classification": "C",
				"desc": "SINGAPORE",
			},
			"sex": {
				"lastupdated": "2018-06-01",
				"code": "M",
				"source": "1",
				"classification": "C",
				"desc": "Male",
			},
			"marriagedate": {
				"lastupdated": "1993-10-22",
				"source": "1",
				"classification": "C",
				"value": "1993-10-22",
			},
			"residentialstatus": {
				"lastupdated": "2018-06-01",
				"code": "C",
				"source": "1",
				"classification": "C",
				"desc": "Citizen",
			},
			"passportnumber": {
				"lastupdated": "2021-01-01",
				"source": "1",
				"classification": "C",
				"value": "L3280033",
			},
			"marital": {
				"lastupdated": "2018-05-10",
				"code": "2",
				"source": "1",
				"classification": "C",
				"desc": "MARRIED",
			},
			"aliasname": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"value": "JASCKSON LIM YONG XIANG",
			},
			"childrenbirthrecords": [
				{
					"dialect": {
						"code": "HK",
						"desc": "Hokkien",
					},
					"race": {
						"code": "CN",
						"desc": "Chinese",
					},
					"lifestatus": {
						"code": "A",
						"desc": "ALIVE",
					},
					"tob": {
						"value": "0901",
					},
					"sex": {
						"code": "F",
						"desc": "Female",
					},
					"source": "1",
					"classification": "C",
					"birthcertno": {
						"value": "S5562882C",
					},
					"hanyupinyinname": {
						"value": "Cheng Pei Ni",
					},
					"hanyupinyinaliasname": {
						"value": "",
					},
					"marriedname": {
						"value": "",
					},
					"aliasname": {
						"value": "",
					},
					"dob": {
						"value": "2011-09-10",
					},
					"name": {
						"value": "Jo Lee Pei Ni",
					},
					"lastupdated": "2018-05-16",
					"secondaryrace": {
						"code": "",
						"desc": "",
					},
				},
				preschoolEligibleChild2_IC,
				preschoolEligibleChild2_K1,
			],
			"sponsoredchildrenrecords": [],
			"nationality": {
				"lastupdated": "2018-06-01",
				"code": "SG",
				"source": "1",
				"classification": "C",
				"desc": "SINGAPORE CITIZEN",
			},
			"dob": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"value": "1975-10-06",
			},
			"name": {
				"lastupdated": "2018-06-01",
				"source": "1",
				"classification": "C",
				"value": profileName,
			},
			"secondaryrace": {
				"lastupdated": "2018-06-01",
				"code": "GM",
				"source": "1",
				"classification": "C",
				"desc": "GERMAN",
			},
			"hdbtype": {
				"lastupdated": "2020-08-26",
				"code": "",
				"source": "1",
				"classification": "C",
				"desc": "",
			},
			"housingtype": {
				"lastupdated": "2020-08-26",
				"code": "",
				"source": "1",
				"classification": "C",
				"desc": "",
			},
			"drivinglicence": {
				"revocation": {
					"startdate": {
						"value": "",
					},
					"enddate": {
						"value": "",
					},
				},
				"totaldemeritpoints": {
					"value": 0,
				},
				"disqualification": {
					"startdate": {
						"value": "",
					},
					"enddate": {
						"value": "",
					},
				},
				"qdl": {
					"expirydate": {
						"value": "",
					},
					"validity": {
						"code": "",
						"desc": "",
					},
					"classes": [],
				},
				"lastupdated": "2020-08-26",
				"pdl": {
					"expirydate": {
						"value": "",
					},
					"validity": {
						"code": "",
						"desc": "",
					},
					"classes": [],
				},
				"source": "1",
				"classification": "C",
				"comstatus": {
					"code": "",
					"desc": "",
				},
				"photocardserialno": {
					"value": "",
				},
				"suspension": {
					"startdate": {
						"value": "",
					},
					"enddate": {
						"value": "",
					},
				},
			},
			"vehicles": [],
		};
	},
};
