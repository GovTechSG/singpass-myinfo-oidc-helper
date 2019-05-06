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
	race: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	secondaryrace?: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	dialect?: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	nationality: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	dob: StringValue;
	birthcountry?: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	residentialstatus?: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	passportnumber?: StringValue; // Refer to MyInfo [Code reference tables](#section/Support) for list of possible values.
	passportexpirydate?: StringValue;
	regadd: AddressLocal;
	mailadd?: AddressLocal;
	billadd?: AddressLocal;
	housingtype?: StringValue; 			// non-HDB only
	hdbtype?: StringValue; 					// HDB only
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
	gradyear?: StringValue;							// Format: YYYY
	schoolname?: SchoolNameValue;
	occupation?: OccupationValue;
	employment?: StringValue;
	workpassstatus?: WorkPassStatusValue;
	workpassexpirydate?: StringValue;
	householdincome?: HouseholdIncomeValue;
	assessableincome?: StringValue;
	assessyear?: StringValue;
	cpfcontributions?: CPFContributions;
	// new
	cpfbalances?: CPFBalance;
	vehno?: StringValue;						// Vehicle Number of Person
}

// =============================================================================
// Fields
// =============================================================================

// Common to all fields
export interface BaseField {
	// Data classification of data field. Default 'C' - Confidential
	classification: "" | "C";
	/*
	Source of data
	'1' - Government-verified
	'2' - User provided
	'3' - Field is Not Applicable to Person
	'4' - Verified by SingPass
	*/
	source: "" | "1" | "2" | "3" | "4";
	// Last updated date of data field
	lastupdated: string;
}

// Fields with a value key
export interface StringValue extends BaseField {
	value: string;
}

export interface SchoolNameValue extends BaseField {
	value: string;
	desc: string;
}

export interface EduLevelValue extends BaseField {
	/*
	Highest Education Level of Person.
	* '0' - NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY
	* '1' - PRIMARY
	* '2' - LOWER SECONDARY
	* '3' - SECONDARY
	* '4' - POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION
	* '5' - POLYTECHNIC DIPLOMA
	* '6' - PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA
	* '7' - BACHELOR'S OR EQUIVALENT
	* '8' - POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)
	* '9' - MASTER'S AND DOCTORATE OR EQUIVALENT
	* 'N' - MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)",
	*/
	value: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "N";
}

export interface HousingTypeValue extends BaseField {
	/* Housing Type of Person (non-HDB only)
	This value will be null if housing type is HDB;
	* '121' - DETACHED HOUSE
	* '122' - SEMI-DETACHED HOUSE
	* '123' - TERRACE HOUSE
	* '131' - CONDOMINIUM
	* '132' - EXECUTIVE CONDOMINIUM
	* '139' - APARTMENT"
	*/
	value: "121" | "122" | "123" | "131" | "132" | "139";
}

export interface HdbTypeValue extends BaseField {
	/*HDB Type of Person (HDB only).
	This value will be null if housing type is not HDB.
	* '111' - 1-ROOM FLAT (HDB)
	* '112' - 2-ROOM FLAT (HDB)
	* '113' - 3-ROOM FLAT (HDB)
	* '114' - 4-ROOM FLAT (HDB)
	* '115' - 5-ROOM FLAT (HDB)
	* '116' - EXECUTIVE FLAT (HDB)
	* '118' - STUDIO APARTMENT (HDB)"
	*/

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
	/* Code value of occupation based on SSOC 2015.
	For full list, refer to SSOC 2015 at https://www.singstat.gov.sg/standards/standards-and-classifications/ssoc.
	For FIN holders, blank will be returned.
	**Note:** value and desc are mutually exclusive.
	*/
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
	// Country of Address. For AddressLocal this will always be "SG"
	country: string;
}

export interface PhoneNumLocal extends BaseField {
	code: string; // Area Code of Phone Number. Default to '065'
	prefix: string;	// Prefix of Phone Number. Defaults to '+'
	nbr: string;		// Phone Number
}

export interface CPFContribution {
	employer: string;
	date: string;
	// Month for which CPF Contribution was paid. Format: YYYY-MM
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
	// Time of Birth of child. Format: HHMM
	tob: string;
}
