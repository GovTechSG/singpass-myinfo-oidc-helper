/**
 * Schema of Person from MyInfo Person API
 */
export interface Person {
    name: StringValue;
    hanyupinyinname?: StringValue;
    aliasname?: StringValue;
    hanyupinyinaliasname?: StringValue;
    marriedname?: StringValue;
    sex: StringValue;
    race: StringValue;
    secondaryrace?: StringValue;
    dialect?: StringValue;
    nationality: StringValue;
    dob: StringValue;
    birthcountry?: StringValue;
    residentialstatus?: StringValue;
    passportnumber?: StringValue;
    passportexpirydate?: StringValue;
    regadd: AddressLocal;
    mailadd?: AddressLocal;
    billadd?: AddressLocal;
    housingtype?: StringValue;
    hdbtype?: StringValue;
    ownerprivate?: BooleanValue;
    email: StringValue;
    homeno?: PhoneNumLocal;
    mobileno?: PhoneNumLocal;
    marital?: StringValue;
    marriagecertno?: StringValue;
    countryofmarriage?: StringValue;
    marriagedate?: StringValue;
    divorcedate?: StringValue;
    childrenbirthrecords?: ChildBirthRecord[];
    edulevel?: EduLevelValue;
    gradyear?: StringValue;
    schoolname?: SchoolNameValue;
    occupation?: OccupationValue;
    employment?: StringValue;
    workpassstatus?: WorkPassStatusValue;
    workpassexpirydate?: StringValue;
    householdincome?: HouseholdIncomeValue;
    assessableincome?: StringValue;
    assessyear?: StringValue;
    cpfcontributions?: CPFContributions;
    cpfbalances?: CPFBalance;
    vehno?: StringValue;
}
export interface BaseField {
    classification: "" | "C";
    source: "" | "1" | "2" | "3" | "4";
    lastupdated: string;
}
export interface StringValue extends BaseField {
    value: string;
}
export interface SchoolNameValue extends BaseField {
    value: string;
    desc: string;
}
export interface EduLevelValue extends BaseField {
    value: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "N";
}
export interface HousingTypeValue extends BaseField {
    value: "121" | "122" | "123" | "131" | "132" | "139";
}
export interface HdbTypeValue extends BaseField {
    value: "111" | "112" | "113" | "114" | "115" | "116" | "118";
}
export interface HouseholdIncomeValue extends BaseField {
    high: string;
    low: string;
}
export interface WorkPassStatusValue extends BaseField {
    value: "Live" | "Approved";
}
export interface OccupationValue extends BaseField {
    value: string;
    desc: string;
}
export interface BooleanValue extends BaseField {
    value: "Y" | "N";
}
export interface AddressLocal extends BaseField {
    block: string;
    building: string;
    floor: string;
    unit: string;
    street: string;
    postal: string;
    country: string;
}
export interface PhoneNumLocal extends BaseField {
    code: string;
    prefix: string;
    nbr: string;
}
export interface CPFContribution {
    employer: string;
    date: string;
    month: string;
    amount: string;
}
export interface CPFContributions extends BaseField {
    cpfcontribution: CPFContribution[];
}
export interface CPFBalance extends BaseField {
    oa: string;
    ma: string;
    sa: string;
    ra: string;
}
export interface ChildBirthRecord extends BaseField {
    birthcertno: string;
    name: string;
    hanyupinyinname: string;
    aliasname: string;
    hanyupinyinaliasname: string;
    marriedname: string;
    sex: string;
    race: string;
    secondaryrace: string;
    dialect: string;
    dob: string;
    tob: string;
}
