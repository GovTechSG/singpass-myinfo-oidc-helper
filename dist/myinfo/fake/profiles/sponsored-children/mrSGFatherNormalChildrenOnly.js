"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mrSGFatherNormalChildrenOnly = void 0;
const _ = require("lodash");
const fake_profile_1 = require("../fake-profile");
const BaseProfile_1 = require("./BaseProfile");
const normalChildren_1 = require("./normalChildren");
const id = "S9116045E";
const name = fake_profile_1.ProfileArchetype.MR_SG_FATHER_NORMAL_CHILDREN;
const cpfContributions = [
    {
        "date": {
            "value": "2016-12-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2016-11"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2016-12-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2016-12"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2016-12-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2016-12"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-01-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2016-12"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-01-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-01"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-01-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-01"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-02-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-01"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-02-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-02"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-02-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-02"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-03-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-02"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-03-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-03"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-03-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-03"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-04-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-03"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-04-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-04"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-04-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-04"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-05-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-04"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-05-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-05"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-05-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-05"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-06-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-05"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-06-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-06"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-06-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-06"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-07-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-06"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-07-12"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-07"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-07-21"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-07"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-08-01"
        },
        "amount": {
            "value": 500
        },
        "month": {
            "value": "2017-07"
        },
        "employer": {
            "value": "Crystal Horse Invest Pte Ltd"
        }
    },
    {
        "date": {
            "value": "2017-08-12"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-08"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-08-21"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-08"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-09-01"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-08"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-09-12"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-09"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-09-21"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-09"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-10-01"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-09"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-10-12"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-10"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-10-21"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-10"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-11-01"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-10"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-11-12"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-11"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-11-21"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-11"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-12-01"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-11"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-12-12"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-12"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2017-12-21"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-12"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2018-01-01"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2017-12"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2018-01-12"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2018-01"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    },
    {
        "date": {
            "value": "2018-01-21"
        },
        "amount": {
            "value": 750
        },
        "month": {
            "value": "2018-01"
        },
        "employer": {
            "value": "Delta Marine Consultants PL"
        }
    }
];
exports.mrSGFatherNormalChildrenOnly = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = BaseProfile_1.BaseProfile.generate(profileName);
        profile.childrenbirthrecords = _.values(normalChildren_1.Childrenbirthrecords);
        profile.cpfcontributions = {
            history: cpfContributions,
            classification: "C",
            source: "1",
            lastupdated: `${new Date().toISOString().split('T')[0]}`,
        };
        profile.cpfbalances = {
            ma: { value: 11470.71 },
            oa: { value: 11470.71 },
            sa: { value: 11470.71 },
            ra: { value: 11470.71 },
            lastupdated: `${new Date().toISOString().split('T')[0]}`,
            classification: "C",
            source: "1",
        };
        profile["noa-basic"] = {
            amount: {
                value: 1234
            },
            yearofassessment: {
                value: "2019",
            },
            lastupdated: `${new Date().toISOString().split('T')[0]}`,
            classification: "C",
            source: "1",
        };
        return profile;
    },
};
//# sourceMappingURL=mrSGFatherNormalChildrenOnly.js.map