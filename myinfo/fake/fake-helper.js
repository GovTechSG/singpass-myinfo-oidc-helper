"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMyInfoHelper = void 0;
const lodash_1 = require("lodash");
const domain_1 = require("../domain");
const fake_profiles_1 = require("./profiles/fake-profiles");
var GVS;
(function (GVS) {
    GVS["true"] = "true";
    GVS["false"] = "false";
})(GVS || (GVS = {}));
class FakeMyInfoHelper {
    /**
     * @param attributes attributes to return in the MyInfoPerson in getPersonData
     */
    constructor(attributes) {
        this.attributes = attributes;
        /**
         * fake getPersonData
         * @param input the mock profile parameters.
         * See FakeMyInfoPersonArchetypes for the actual person.
         */
        // tslint:disable-next-line: no-big-function
        this.getPersonBasic = (mockParams) => {
            const mockProfile = fake_profiles_1.profiles.find((profile) => profile.name === mockParams.archetype);
            if (!mockProfile) {
                return null;
            }
            const myinfoPerson = Object.assign({}, mockProfile.generate());
            if (!lodash_1.isEmpty(mockParams.residentialstatus)) {
                myinfoPerson.residentialstatus.code = mockParams.residentialstatus;
                myinfoPerson.residentialstatus.desc = domain_1.domainMap.residentialstatus.map.codeToDesc[mockParams.residentialstatus];
            }
            if (!lodash_1.isEmpty(mockParams.marital)) {
                myinfoPerson.marital.code = mockParams.marital;
                myinfoPerson.marital.desc = domain_1.domainMap.marital.map.codeToDesc[mockParams.marital];
            }
            if (!lodash_1.isEmpty(mockParams.marriagedate)) {
                myinfoPerson.marriagedate.value = mockParams.marriagedate;
            }
            if (!lodash_1.isEmpty(mockParams.marriagecertno)) {
                myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
            }
            if (!lodash_1.isEmpty(mockParams.countryofmarriage)) {
                myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
                myinfoPerson.countryofmarriage.desc = domain_1.domainMap.countryofmarriage.map.codeToDesc[mockParams.countryofmarriage];
            }
            if (!lodash_1.isEmpty(mockParams.dob)) {
                myinfoPerson.dob.value = mockParams.dob;
                const birthYear = new Date(myinfoPerson.dob.value).getFullYear();
                if (birthYear <= 1949) {
                    // pioneergen
                    myinfoPerson.merdekagen.eligibility.value = false;
                    myinfoPerson.pioneergen.eligibility.value = true;
                }
                else if (birthYear > 1949 && birthYear <= 1959) {
                    // merdekagen
                    myinfoPerson.merdekagen.eligibility.value = true;
                    myinfoPerson.pioneergen.eligibility.value = false;
                }
            }
            if (!lodash_1.isEmpty(mockParams.gstvyear)) {
                myinfoPerson.gstvoucher.year.value = mockParams.gstvyear;
            }
            if (!lodash_1.isEmpty(mockParams.gvs)) {
                myinfoPerson.gstvoucher.signup.value = (mockParams.gvs || "").toLocaleLowerCase() === GVS.true;
            }
            if (!lodash_1.isEmpty(mockParams.occupation)) {
                myinfoPerson.occupation.code = mockParams.occupation;
                myinfoPerson.occupation.desc = domain_1.domainMap.occupation.map.codeToDesc[mockParams.occupation];
                myinfoPerson.occupation.value = null;
            }
            else {
                if (!lodash_1.isEmpty(mockParams.occupationfreeform)) {
                    myinfoPerson.occupation.value = mockParams.occupationfreeform;
                    myinfoPerson.occupation.code = null;
                    myinfoPerson.occupation.desc = null;
                }
            }
            if (!lodash_1.isEmpty(mockParams.merdekageneligible)) {
                myinfoPerson.merdekagen.eligibility = { value: mockParams.merdekageneligible };
            }
            if (!lodash_1.isEmpty(mockParams.merdekagenmessagecode)) {
                myinfoPerson.merdekagen.message.code = mockParams.merdekagenmessagecode;
            }
            if (!lodash_1.isEmpty(mockParams.merdekagenquantum)) {
                myinfoPerson.merdekagen.quantum = { value: mockParams.merdekagenquantum };
            }
            if (!lodash_1.isEmpty(mockParams.hdbtype)) {
                myinfoPerson.hdbtype = {
                    lastupdated: "2018-06-01",
                    source: "1",
                    classification: "C",
                    code: mockParams.hdbtype,
                    desc: domain_1.domainMap.hdbtype.map.codeToDesc[mockParams.hdbtype],
                };
                myinfoPerson.housingtype = {
                    lastupdated: "2020-08-26",
                    code: "",
                    source: "1",
                    classification: "C",
                    desc: "",
                };
            }
            else if (!lodash_1.isEmpty(mockParams.housingtype)) {
                myinfoPerson.housingtype = {
                    lastupdated: "2018-06-01",
                    source: "1",
                    classification: "C",
                    code: mockParams.housingtype,
                    desc: domain_1.domainMap.housingtype.map.codeToDesc[mockParams.housingtype],
                };
                myinfoPerson.hdbtype = {
                    lastupdated: "2020-08-26",
                    code: "",
                    source: "1",
                    classification: "C",
                    desc: "",
                };
            }
            if (!lodash_1.isEmpty(mockParams.drivingqdlvalidity)) {
                myinfoPerson.drivinglicence = {
                    revocation: {
                        startdate: {
                            value: "",
                        },
                        enddate: {
                            value: "",
                        },
                    },
                    totaldemeritpoints: {
                        value: 0,
                    },
                    disqualification: {
                        startdate: {
                            value: "",
                        },
                        enddate: {
                            value: "",
                        },
                    },
                    qdl: {
                        expirydate: {
                            value: "",
                        },
                        validity: {
                            code: mockParams.drivingqdlvalidity,
                            desc: domain_1.domainMap.qdlValidity.map.codeToDesc[mockParams.drivingqdlvalidity],
                        },
                        classes: [
                            {
                                class: {
                                    value: "3CA",
                                },
                                issuedate: {
                                    value: "2017-12-31",
                                },
                            },
                        ],
                    },
                    lastupdated: "2020-08-26",
                    pdl: {
                        expirydate: {
                            value: "",
                        },
                        validity: {
                            code: "",
                            desc: "",
                        },
                        classes: [],
                    },
                    source: "1",
                    classification: "C",
                    comstatus: {
                        code: "Y",
                        desc: "Eligible",
                    },
                    photocardserialno: {
                        value: "",
                    },
                    suspension: {
                        startdate: {
                            value: "",
                        },
                        enddate: {
                            value: "",
                        },
                    },
                };
                if (mockParams.drivingqdlvalidity === "N") {
                    myinfoPerson.drivinglicence.qdl.classes = [];
                }
            }
            if (!lodash_1.isEmpty(mockParams.vehiclestatus)) {
                myinfoPerson.vehicles = [
                    {
                        roadtaxexpirydate: {
                            value: "2020-06-06",
                        },
                        engineno: {
                            value: "4G13NU1453",
                        },
                        attachment3: {
                            value: "",
                        },
                        effectiveownership: {
                            value: "2010-06-06T12:09:05",
                        },
                        scheme: {
                            value: "OPC - OFF PEAK CAR",
                        },
                        powerrate: {
                            value: 1.7,
                        },
                        source: "1",
                        primarycolour: {
                            value: "MAROON",
                        },
                        type: {
                            value: "STATION WAGON/JEEP/LAND ROVER",
                        },
                        vehicleno: {
                            value: "SBP1818T",
                        },
                        coeexpirydate: {
                            value: "2020-06-06",
                        },
                        chassisno: {
                            value: "TUU28391334KL189",
                        },
                        noxemission: {
                            value: 0.013456,
                        },
                        model: {
                            value: "FORESTER",
                        },
                        openmarketvalue: {
                            value: 23485.3,
                        },
                        coemission: {
                            value: 0.153209,
                        },
                        attachment2: {
                            value: "",
                        },
                        attachment1: {
                            value: "CONTINENTAL TIRE",
                        },
                        make: {
                            value: "SUBARU",
                        },
                        pmemission: {
                            value: 0.199,
                        },
                        originalregistrationdate: {
                            value: "2009-12-06",
                        },
                        yearofmanufacture: {
                            value: "2010",
                        },
                        vpc: {
                            value: "",
                        },
                        enginecapacity: {
                            value: 1600,
                        },
                        classification: "C",
                        nooftransfers: {
                            value: 1,
                        },
                        propellant: {
                            value: "Petrol",
                        },
                        co2emission: {
                            value: 145,
                        },
                        motorno: {
                            value: "",
                        },
                        minimumparfbenefit: {
                            value: 2500,
                        },
                        thcemission: {
                            value: 0.187765,
                        },
                        firstregistrationdate: {
                            value: "2010-06-06",
                        },
                        lastupdated: "2020-08-26",
                        maximumunladenweight: {
                            value: 1500,
                        },
                        coecategory: {
                            value: "A - CAR UP TO 1600CC & 97KW (130BHP)",
                        },
                        maximumladenweight: {
                            value: 2000,
                        },
                        secondarycolour: {
                            value: "",
                        },
                        iulabelno: {
                            value: "",
                        },
                        quotapremium: {
                            value: 0,
                        },
                        status: {
                            code: mockParams.vehiclestatus,
                            desc: domain_1.domainMap.status.map.codeToDesc[mockParams.vehiclestatus],
                        },
                    },
                ];
            }
            if (!lodash_1.isEmpty(mockParams.userdisplayname)) {
                myinfoPerson.name.value = mockParams.userdisplayname;
            }
            if (!this.attributes) {
                return myinfoPerson;
            }
            return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
        };
    }
}
exports.FakeMyInfoHelper = FakeMyInfoHelper;
/**
 * @description Returns new fake person with only the attributes listed in attributes param. Does not mutate.
 *
 * For the special field childrenbirthrecords, attributes can include childrenbirthrecords.name, childrenbirthrecords.sex etc.
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person, attributes) {
    const [childrenRawCbrAttributes, childrenNormalAttributes] = lodash_1.partition(attributes, (value) => value.startsWith("childrenbirthrecords."));
    const [sponsoredRawCbrAttributes, sponsoredNormalAttributes] = lodash_1.partition(attributes, (value) => value.startsWith("sponsoredchildrenrecords."));
    const [vehiclesRawCbrAttributes, vehiclesNormalAttributes] = lodash_1.partition(attributes, (value) => value.startsWith("vehicles."));
    const [drivinglicenceRawCbrAttributes] = lodash_1.partition(attributes, (value) => value.startsWith("drivinglicence."));
    const childrenFilteredPerson = filterThroughAttributes(person, childrenNormalAttributes);
    const sponsoredFilteredPerson = filterThroughAttributes(person, sponsoredNormalAttributes);
    const vehicleFilteredPerson = filterThroughAttributes(person, vehiclesNormalAttributes);
    let drivinglicenceFilteredPerson = {};
    if (childrenRawCbrAttributes.length > 0) {
        const childrenbirthrecordsAttributes = lodash_1.map(childrenRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredChildrenbirthrecords = lodash_1.map(person.childrenbirthrecords, (cbr) => {
            const result = filterThroughAttributes(cbr, childrenbirthrecordsAttributes);
            return Object.assign(Object.assign({}, result), generateDefaultMockResponse());
        });
        lodash_1.set(childrenFilteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
    }
    if (sponsoredRawCbrAttributes.length > 0) {
        const sponsoredBirthrecordsAttributes = lodash_1.map(sponsoredRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredSponsoredChildrenbirthrecords = lodash_1.map(person.sponsoredchildrenrecords, (cbr) => {
            const result = filterThroughAttributes(cbr, sponsoredBirthrecordsAttributes);
            return Object.assign(Object.assign({}, result), generateDefaultMockResponse());
        });
        lodash_1.set(sponsoredFilteredPerson, "sponsoredchildrenrecords", filteredSponsoredChildrenbirthrecords);
    }
    if (vehiclesRawCbrAttributes.length > 0) {
        const vehicleBirthrecordsAttributes = lodash_1.map(vehiclesRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered vehicles
        const filteredVehicleChildrenbirthrecords = lodash_1.map(person.vehicles, (cbr) => {
            const result = filterThroughAttributes(cbr, vehicleBirthrecordsAttributes);
            return Object.assign(Object.assign({}, result), generateDefaultMockResponse());
        });
        lodash_1.set(vehicleFilteredPerson, "vehicles", filteredVehicleChildrenbirthrecords);
    }
    if (drivinglicenceRawCbrAttributes.length > 0) {
        // get filtered driving licences
        const drivingLicence = filterThroughDeepAttributes(person, drivinglicenceRawCbrAttributes);
        drivinglicenceFilteredPerson = {
            drivinglicence: Object.assign(Object.assign({}, drivingLicence["drivinglicence"]), generateDefaultMockResponse()),
        };
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, childrenFilteredPerson), sponsoredFilteredPerson), vehicleFilteredPerson), drivinglicenceFilteredPerson);
}
/**
 * @description Checks for nested attribute paths, does not work for object paths with array values
 * @param object fake person object
 * @param attributes array of attributes to filter for, e.g ['vehicles.status', 'drivinglicence.qdl.validity']
 */
function filterThroughAttributes(object, attributes) {
    return attributes.reduce((accumulator, attrPath) => {
        const key = attrPath.split(".")[0];
        const attrValue = lodash_1.get(object, attrPath, null);
        if (!!attrValue) {
            return Object.assign(Object.assign({}, accumulator), { [key]: object[key] });
        }
        return accumulator;
    }, {});
}
/**
 * @description Checks for nested attribute paths, it only works for deep attributes objects with 3 layers e.g ['a.b.c']
 * @param object fake person object
 * @param attributes array of attributes to filter for, e.g ['drivinglicence.qdl.validity', 'drivinglicence.qdl.validity']
 */
function filterThroughDeepAttributes(object, attributes) {
    return attributes.reduce((acc, current) => {
        const result = lodash_1.get(object, current);
        const tmp = Object.assign({}, acc);
        lodash_1.set(tmp, current, result);
        return tmp;
    }, {});
}
/**
 * @description Return a set of require fields event if the consent attributes are not requesting such keys
 */
function generateDefaultMockResponse() {
    return {
        lastupdated: "2020-09-10",
        source: "1",
        classification: "C",
    };
}
//# sourceMappingURL=fake-helper.js.map