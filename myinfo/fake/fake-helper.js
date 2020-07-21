"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                const age = new Date().getFullYear() - new Date(myinfoPerson.dob.value).getFullYear();
                myinfoPerson.merdekagen.eligibility.value = (age >= 60);
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
    const childrenFilteredPerson = filterThroughAttributes(person, childrenNormalAttributes);
    const sponsoredFilteredPerson = filterThroughAttributes(person, sponsoredNormalAttributes);
    if (childrenRawCbrAttributes.length > 0) {
        const childrenbirthrecordsAttributes = lodash_1.map(childrenRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredChildrenbirthrecords = lodash_1.map(person.childrenbirthrecords, (cbr) => filterThroughAttributes(cbr, childrenbirthrecordsAttributes));
        lodash_1.set(childrenFilteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
    }
    if (sponsoredRawCbrAttributes.length > 0) {
        const sponsoredBirthrecordsAttributes = lodash_1.map(sponsoredRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredSponsoredChildrenbirthrecords = lodash_1.map(person.sponsoredchildrenrecords, (cbr) => filterThroughAttributes(cbr, sponsoredBirthrecordsAttributes));
        lodash_1.set(sponsoredFilteredPerson, "sponsoredchildrenrecords", filteredSponsoredChildrenbirthrecords);
    }
    return Object.assign(Object.assign({}, childrenFilteredPerson), sponsoredFilteredPerson);
}
function filterThroughAttributes(object, attributes) {
    const attrs = new Set(attributes);
    return lodash_1.toPairs(object)
        .filter(([k]) => attrs.has(k))
        .reduce((accumulator, [k, v]) => (Object.assign(Object.assign({}, accumulator), { [k]: v })), {});
}
//# sourceMappingURL=fake-helper.js.map