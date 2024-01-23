"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformItemsWithAdditionalMock = exports.transformItems = exports.transformChildBirthRecord = exports.FakeMyInfoHelper = void 0;
const lodash_1 = require("lodash");
// tslint:disable-next-line: max-line-length
const domain_1 = require("../domain");
const fake_profiles_1 = require("./profiles/fake-profiles");
const types_1 = require("./types");
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
        this.getPersonInfo = (mockParams) => {
            var _a;
            const mockProfile = fake_profiles_1.profiles.find((profile) => profile.name === mockParams.archetype);
            if (!mockProfile) {
                return null;
            }
            const myinfoPerson = {
                ...mockProfile.generate(),
            };
            if (!(0, lodash_1.isEmpty)(mockParams.residentialstatus)) {
                myinfoPerson.residentialstatus.code = mockParams.residentialstatus;
                myinfoPerson.residentialstatus.desc = domain_1.MyInfoResidentialCode.fn.toEnumDesc(mockParams.residentialstatus);
            }
            if (!(0, lodash_1.isEmpty)(mockParams.marital)) {
                myinfoPerson.marital.code = mockParams.marital;
                myinfoPerson.marital.desc = domain_1.MyInfoMaritalStatusCode.fn.toEnumDesc(mockParams.marital);
            }
            if (!(0, lodash_1.isEmpty)(mockParams.marriagedate)) {
                myinfoPerson.marriagedate.value = mockParams.marriagedate;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.divorcedate)) {
                myinfoPerson.divorcedate.value = mockParams.divorcedate;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.marriagecertno)) {
                myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.countryofmarriage)) {
                myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
                myinfoPerson.countryofmarriage.desc = domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(mockParams.countryofmarriage);
            }
            if (!(0, lodash_1.isEmpty)(mockParams.dob) || !(0, lodash_1.isEmpty)((_a = myinfoPerson.dob) === null || _a === void 0 ? void 0 : _a.value)) {
                myinfoPerson.dob.value = mockParams.dob || myinfoPerson.dob.value;
                const birthYear = new Date(myinfoPerson.dob.value).getFullYear();
                if (birthYear <= 1949) {
                    // pioneergen
                    myinfoPerson.merdekagen.eligibility.value = false;
                    if (myinfoPerson.pioneergen.message.code !== "6")
                        myinfoPerson.pioneergen.eligibility.value = true;
                    if (birthYear >= 1945) {
                        myinfoPerson.pioneergen.quantum.value = "200.00";
                    }
                    else if (birthYear >= 1940) {
                        myinfoPerson.pioneergen.quantum.value = "400.00";
                    }
                    else if (birthYear >= 1935) {
                        myinfoPerson.pioneergen.quantum.value = "600.00";
                    }
                    else {
                        myinfoPerson.pioneergen.quantum.value = "800.00";
                    }
                }
                else if (birthYear > 1949 && birthYear <= 1959) {
                    // merdekagen
                    if (myinfoPerson.merdekagen.message.code !== "6")
                        myinfoPerson.merdekagen.eligibility.value = true;
                    myinfoPerson.pioneergen.eligibility.value = false;
                }
                else {
                    myinfoPerson.merdekagen.eligibility.value = false;
                    myinfoPerson.pioneergen.eligibility.value = false;
                    myinfoPerson.merdekagen.quantum.value = 0;
                }
            }
            if (!(0, lodash_1.isEmpty)(mockParams.gstvyear)) {
                myinfoPerson.gstvoucher.year.value = mockParams.gstvyear;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.gvs)) {
                myinfoPerson.gstvoucher.signup.value = (mockParams.gvs || null).toLocaleLowerCase() === types_1.GVS.true;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.merdekageneligible)) {
                myinfoPerson.merdekagen.eligibility = { value: mockParams.merdekageneligible };
            }
            if (!(0, lodash_1.isEmpty)(mockParams.merdekagenmessagecode)) {
                myinfoPerson.merdekagen.message.code = mockParams.merdekagenmessagecode;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.merdekagenquantum)) {
                myinfoPerson.merdekagen.quantum = { value: mockParams.merdekagenquantum };
            }
            if (!(0, lodash_1.isEmpty)(mockParams.regadd)) {
                const sgProps = ["block", "building", "country", "floor", "postal", "street", "unit"];
                const unformattedProps = ["line1", "line2"];
                if (mockParams.regadd.type === "SG") {
                    const regadd = myinfoPerson.regadd;
                    myinfoPerson.regadd = {
                        ...myinfoPerson.regadd,
                        type: "SG",
                        country: {
                            code: domain_1.MyInfoCountryPlaceCode.SINGAPORE,
                            desc: domain_1.MyInfoCountryPlaceCode.fn.toEnumDesc(domain_1.MyInfoCountryPlaceCode.SINGAPORE),
                        },
                        block: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.block) ? mockParams.regadd.block : regadd.block.value },
                        building: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.building) ? mockParams.regadd.building : regadd.building.value },
                        floor: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.floor) ? mockParams.regadd.floor : regadd.floor.value },
                        postal: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.postal) ? mockParams.regadd.postal : regadd.postal.value },
                        street: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.street) ? mockParams.regadd.street : regadd.street.value },
                        unit: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.unit) ? mockParams.regadd.unit : regadd.unit.value },
                    };
                    myinfoPerson.regadd = (0, lodash_1.omit)(myinfoPerson.regadd, unformattedProps);
                }
                if (mockParams.regadd.type === "UNFORMATTED") {
                    const regadd = myinfoPerson.regadd;
                    myinfoPerson.regadd = {
                        ...myinfoPerson.regadd,
                        type: "UNFORMATTED",
                        line1: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.line1) ? mockParams.regadd.line1 : regadd.line1.value },
                        line2: { value: !(0, lodash_1.isEmpty)(mockParams.regadd.line2) ? mockParams.regadd.line2 : regadd.line2.value },
                    };
                    myinfoPerson.regadd = (0, lodash_1.omit)(myinfoPerson.regadd, sgProps);
                }
            }
            if (!(0, lodash_1.isEmpty)(mockParams.hdbtype)) {
                myinfoPerson.hdbtype = {
                    lastupdated: "2018-06-01",
                    source: "1",
                    classification: "C",
                    code: mockParams.hdbtype,
                    desc: domain_1.MyInfoHDBTypeCode.fn.toEnumDesc(mockParams.hdbtype),
                    unavailable: false,
                };
                myinfoPerson.housingtype = {
                    lastupdated: "2020-08-26",
                    code: null,
                    source: "1",
                    classification: "C",
                    desc: null,
                    unavailable: false,
                };
            }
            else if (!(0, lodash_1.isEmpty)(mockParams.housingtype)) {
                myinfoPerson.housingtype = {
                    lastupdated: "2018-06-01",
                    source: "1",
                    classification: "C",
                    code: mockParams.housingtype,
                    desc: domain_1.MyInfoHousingTypeCode.fn.toEnumDesc(mockParams.housingtype),
                    unavailable: false,
                };
                myinfoPerson.hdbtype = {
                    lastupdated: "2020-08-26",
                    code: null,
                    source: "1",
                    classification: "C",
                    desc: null,
                    unavailable: false,
                };
            }
            if (!(0, lodash_1.isEmpty)(mockParams.drivingqdlvalidity)) {
                myinfoPerson.drivinglicence = {
                    revocation: {
                        startdate: {
                            value: null,
                        },
                        enddate: {
                            value: null,
                        },
                    },
                    totaldemeritpoints: {
                        value: 0,
                    },
                    disqualification: {
                        startdate: {
                            value: null,
                        },
                        enddate: {
                            value: null,
                        },
                    },
                    qdl: {
                        expirydate: {
                            value: null,
                        },
                        validity: {
                            code: mockParams.drivingqdlvalidity,
                            desc: domain_1.MyInfoDrivingLicenceValidityCode.fn.toEnumDesc(mockParams.drivingqdlvalidity),
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
                            value: null,
                        },
                        validity: {
                            code: null,
                            desc: null,
                        },
                        classes: [],
                    },
                    source: "1",
                    classification: "C",
                    comstatus: {
                        code: domain_1.MyInfoComStatusCode.ELIGIBLE,
                        desc: domain_1.MyInfoComStatusCode.fn.toEnumDesc(domain_1.MyInfoComStatusCode.ELIGIBLE),
                    },
                    photocardserialno: {
                        value: null,
                    },
                    suspension: {
                        startdate: {
                            value: null,
                        },
                        enddate: {
                            value: null,
                        },
                    },
                    unavailable: false,
                };
                if (mockParams.drivingqdlvalidity === "N") {
                    myinfoPerson.drivinglicence.qdl.classes = [];
                }
            }
            if (!(0, lodash_1.isEmpty)(mockParams.vehicles)) {
                myinfoPerson.vehicles =
                    mockParams.vehicles.map(vehicle => {
                        return {
                            roadtaxexpirydate: {
                                value: "2020-06-06",
                            },
                            engineno: {
                                value: "4G13NU1453",
                            },
                            attachment3: {
                                value: null,
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
                                value: vehicle.vehicleno,
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
                                value: null,
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
                                value: null,
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
                                value: null,
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
                                value: null,
                            },
                            iulabelno: {
                                value: vehicle.iulabelno,
                            },
                            quotapremium: {
                                value: 0,
                            },
                            status: {
                                code: vehicle.status,
                                desc: domain_1.MyInfoVehicleStatus.fn.toEnumDesc(vehicle.status),
                            },
                            unavailable: false,
                        };
                    });
            }
            if (!(0, lodash_1.isEmpty)(mockParams.userdisplayname)) {
                myinfoPerson.name.value = mockParams.userdisplayname;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.employment)) {
                myinfoPerson.employment.value = mockParams.employment;
            }
            if (!(0, lodash_1.isEmpty)(mockParams.childrenbirthrecords)) {
                const childrenBirthRecords = mockParams.childrenbirthrecords.map(transformChildBirthRecord);
                switch (mockParams.childrenoverridemode) {
                    case types_1.OverrideMode.appendToExisting:
                        myinfoPerson.childrenbirthrecords = [...myinfoPerson.childrenbirthrecords, ...childrenBirthRecords];
                        break;
                    case types_1.OverrideMode.partial:
                        if (childrenBirthRecords.length < myinfoPerson.childrenbirthrecords.length) {
                            childrenBirthRecords.forEach((childBirthRecord, index) => {
                                myinfoPerson.childrenbirthrecords[index] = childBirthRecord;
                            });
                        }
                        else {
                            myinfoPerson.childrenbirthrecords = childrenBirthRecords;
                        }
                        break;
                    case types_1.OverrideMode.full:
                        myinfoPerson.childrenbirthrecords = childrenBirthRecords;
                        break;
                }
            }
            if (!(0, lodash_1.isEmpty)(mockParams.race)) {
                myinfoPerson.race.code = mockParams.race;
                myinfoPerson.race.desc = domain_1.MyInfoRaceCode.fn.toEnumDesc(mockParams.race);
            }
            return myinfoPerson;
        };
        this.getPersonBasic = (mockParams) => {
            const myinfoPerson = this.getPersonInfo(mockParams);
            if (!this.attributes) {
                return myinfoPerson;
            }
            return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
        };
        this.getPerson = (mockParams) => {
            var _a, _b, _c, _d, _e, _f;
            const myinfoPerson = this.getPersonInfo(mockParams);
            if (!(0, lodash_1.isEmpty)(mockParams.cpfcontributions)) {
                const cpfContributionHistory = mockParams.cpfcontributions.map(cpfContribution => transformItems(cpfContribution));
                if (!myinfoPerson.cpfcontributions) {
                    myinfoPerson.cpfcontributions = {
                        history: [],
                        classification: "C",
                        source: "1",
                        lastupdated: null
                    };
                }
                switch (mockParams.cpfcontributionhistoryoverridemode) {
                    case types_1.OverrideMode.appendToExisting:
                        myinfoPerson.cpfcontributions.history = [...myinfoPerson.cpfcontributions.history, ...cpfContributionHistory];
                        break;
                    case types_1.OverrideMode.partial:
                        if (cpfContributionHistory.length < myinfoPerson.cpfcontributions.history.length) {
                            cpfContributionHistory.forEach((cpfContributionHistoryItem, index) => {
                                myinfoPerson.cpfcontributions.history[index] = cpfContributionHistoryItem;
                            });
                        }
                        else {
                            myinfoPerson.cpfcontributions.history = cpfContributionHistory;
                        }
                        break;
                    case types_1.OverrideMode.full:
                        myinfoPerson.cpfcontributions.history = cpfContributionHistory;
                        break;
                }
            }
            if (((_a = mockParams.cpfbalances) === null || _a === void 0 ? void 0 : _a.ma) || ((_b = mockParams.cpfbalances) === null || _b === void 0 ? void 0 : _b.oa) || ((_c = mockParams.cpfbalances) === null || _c === void 0 ? void 0 : _c.ra) || ((_d = mockParams.cpfbalances) === null || _d === void 0 ? void 0 : _d.sa)) {
                myinfoPerson.cpfbalances = transformItemsWithAdditionalMock(mockParams.cpfbalances);
            }
            if (((_e = mockParams.noabasic) === null || _e === void 0 ? void 0 : _e.amount) || !(0, lodash_1.isEmpty)((_f = mockParams.noabasic) === null || _f === void 0 ? void 0 : _f.yearofassessment)) {
                myinfoPerson["noa-basic"] = transformItemsWithAdditionalMock(mockParams.noabasic);
            }
            if (!this.attributes) {
                return myinfoPerson;
            }
            return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
        };
    }
    checkIsSingaporeanOrPr(residentialStatusValue) {
        return (residentialStatusValue === domain_1.MyInfoResidentialCode.CITIZEN || residentialStatusValue === domain_1.MyInfoResidentialCode.PR);
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
    const [childrenRawCbrAttributes, childrenNormalAttributes] = (0, lodash_1.partition)(attributes, (value) => value.startsWith("childrenbirthrecords."));
    const [sponsoredRawCbrAttributes, sponsoredNormalAttributes] = (0, lodash_1.partition)(attributes, (value) => value.startsWith("sponsoredchildrenrecords."));
    const [vehiclesRawCbrAttributes, vehiclesNormalAttributes] = (0, lodash_1.partition)(attributes, (value) => value.startsWith("vehicles."));
    const [drivinglicenceRawCbrAttributes] = (0, lodash_1.partition)(attributes, (value) => value.startsWith("drivinglicence."));
    const childrenFilteredPerson = filterThroughAttributes(person, childrenNormalAttributes);
    const sponsoredFilteredPerson = filterThroughAttributes(person, sponsoredNormalAttributes);
    const vehicleFilteredPerson = filterThroughAttributes(person, vehiclesNormalAttributes);
    let drivinglicenceFilteredPerson = {};
    if (childrenRawCbrAttributes.length > 0) {
        const childrenbirthrecordsAttributes = (0, lodash_1.map)(childrenRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredChildrenbirthrecords = (0, lodash_1.map)(person.childrenbirthrecords, (cbr) => {
            const result = filterThroughAttributes(cbr, childrenbirthrecordsAttributes);
            return { ...result, ...generateDefaultMockResponse() };
        });
        (0, lodash_1.set)(childrenFilteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
    }
    if (sponsoredRawCbrAttributes.length > 0) {
        const sponsoredBirthrecordsAttributes = (0, lodash_1.map)(sponsoredRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredSponsoredChildrenbirthrecords = (0, lodash_1.map)(person.sponsoredchildrenrecords, (cbr) => {
            const result = filterThroughAttributes(cbr, sponsoredBirthrecordsAttributes);
            return { ...result, ...generateDefaultMockResponse() };
        });
        (0, lodash_1.set)(sponsoredFilteredPerson, "sponsoredchildrenrecords", filteredSponsoredChildrenbirthrecords);
    }
    if (vehiclesRawCbrAttributes.length > 0) {
        const vehicleBirthrecordsAttributes = (0, lodash_1.map)(vehiclesRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered vehicles
        const filteredVehicleChildrenbirthrecords = (0, lodash_1.map)(person.vehicles, (cbr) => {
            const result = filterThroughAttributes(cbr, vehicleBirthrecordsAttributes);
            return { ...result, ...generateDefaultMockResponse() };
        });
        (0, lodash_1.set)(vehicleFilteredPerson, "vehicles", filteredVehicleChildrenbirthrecords);
    }
    if (drivinglicenceRawCbrAttributes.length > 0) {
        // get filtered driving licences
        const drivingLicence = filterThroughDeepAttributes(person, drivinglicenceRawCbrAttributes);
        drivinglicenceFilteredPerson = {
            drivinglicence: {
                ...drivingLicence["drivinglicence"],
                ...generateDefaultMockResponse(),
            },
        };
    }
    return {
        ...childrenFilteredPerson,
        ...sponsoredFilteredPerson,
        ...vehicleFilteredPerson,
        ...drivinglicenceFilteredPerson,
    };
}
/**
 * @description Checks for nested attribute paths, does not work for object paths with array values
 * @param object fake person object
 * @param attributes array of attributes to filter for, e.g ['vehicles.status', 'drivinglicence.qdl.validity']
 */
function filterThroughAttributes(object, attributes) {
    return attributes.reduce((accumulator, attrPath) => {
        const key = attrPath.split(".")[0];
        const attrValue = (0, lodash_1.get)(object, attrPath, null);
        if (!!attrValue) {
            return { ...accumulator, [key]: object[key] };
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
        const result = (0, lodash_1.get)(object, current);
        const tmp = { ...acc };
        (0, lodash_1.set)(tmp, current, result);
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
function transformChildBirthRecord(childbirthrecord, index) {
    return {
        source: "1",
        classification: "C",
        lastupdated: null,
        birthcertno: { value: childbirthrecord.birthcertno },
        name: { value: childbirthrecord.name || `nameless child ${index + 1}` },
        sex: { code: childbirthrecord.sex, desc: domain_1.MyInfoSexCode.fn.toEnumDesc(childbirthrecord.sex) },
        lifestatus: { code: childbirthrecord.lifestatus, desc: domain_1.MyInfoLifeStatusCode.fn.toEnumDesc(childbirthrecord.lifestatus) },
        dob: { value: isNaN(Date.parse(childbirthrecord.dob)) ? "2020-01-01" : childbirthrecord.dob },
        tob: { value: childbirthrecord.tob || "0000" },
        unavailable: false,
    };
}
exports.transformChildBirthRecord = transformChildBirthRecord;
function transformItems(item) {
    return Object.keys(item).reduce((objectKey, key) => {
        if (item[key] === "") {
            return objectKey;
        }
        objectKey[key] = { value: key !== 'yearofassessment' && !isNaN(+item[key]) ? +item[key] : item[key] };
        return objectKey;
    }, {});
}
exports.transformItems = transformItems;
function transformItemsWithAdditionalMock(item, defaultMockParams = true) {
    const transformedItems = transformItems(item);
    const defaultItems = {
        source: "1",
        classification: "C",
        lastupdated: `${new Date().toISOString().split('T')[0]}`,
    };
    return { ...transformedItems, ...defaultItems };
}
exports.transformItemsWithAdditionalMock = transformItemsWithAdditionalMock;
//# sourceMappingURL=fake-helper.js.map