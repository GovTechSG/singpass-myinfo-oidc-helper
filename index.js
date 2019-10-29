module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/*! exports provided: createClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClient", function() { return createClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var proxy_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-agent */ "proxy-agent");
/* harmony import */ var proxy_agent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proxy_agent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_RedactorUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/RedactorUtil */ "./src/util/RedactorUtil.ts");



const createClient = (requestConfig = {}) => {
    // Note: Due to axios not being able to automatically pick up proxy env vars, we have manually set the proxy config here
    // We were using axios-https-proxy-fix because of this issue: https://github.com/axios/axios/issues/925
    // Axios 0.19.0 has since fixed the issue and we are now once again using official axios releases
    // const proxyConfig = getProxyConfig();
    const proxyConfig = getProxyConfig();
    if (!!proxyConfig) {
        const proxyAgent = new proxy_agent__WEBPACK_IMPORTED_MODULE_1__(proxyConfig);
        requestConfig = Object.assign({ httpAgent: proxyAgent, httpsAgent: proxyAgent, 
            // proxy: proxyConfig,
            proxy: false }, requestConfig);
    }
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(Object.assign({}, requestConfig));
    addRequestLogs(instance);
    addResponseLogs(instance);
    return instance;
};
const getProxyConfig = () => {
    return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
};
const addRequestLogs = (instance) => {
    instance.interceptors.request.use((request) => {
        if (!!request) {
            log(`Requesting ${request.method} : ${Object(_util_RedactorUtil__WEBPACK_IMPORTED_MODULE_2__["redactNricfinInString"])(request.url)}`);
        }
        return request;
    }, (error) => {
        log(`Error occurred while making a request ${error.message}`, error);
        return Promise.reject(error);
    });
};
const addResponseLogs = (instance) => {
    instance.interceptors.response.use((response) => {
        if (!!response) {
            log(`Responded ${response.config.method}  : ${Object(_util_RedactorUtil__WEBPACK_IMPORTED_MODULE_2__["redactNricfinInString"])(response.config.url)}`);
        }
        return response;
    }, (error) => {
        if (!!error.response) {
            log(`Error occurred while responding to request ${error.response.config.method} :
			${Object(_util_RedactorUtil__WEBPACK_IMPORTED_MODULE_2__["redactNricfinInString"])(error.response.config.url)}`, error);
        }
        else {
            log(`Error occurred while responding to request`, error);
        }
        return Promise.reject(error);
    });
};
const log = (message, ...optionalParams) => {
    // tslint:disable-next-line:no-console
    console.log(message, optionalParams);
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: MyInfo, Singpass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myinfo */ "./src/myinfo/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MyInfo", function() { return _myinfo__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _singpass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singpass */ "./src/singpass/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Singpass", function() { return _singpass__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/myinfo/domain/index.ts":
/*!************************************!*\
  !*** ./src/myinfo/domain/index.ts ***!
  \************************************/
/*! exports provided: myInfoDomain, domainMap, profileStatusDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/myinfo/domain/map.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "domainMap", function() { return _map__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _myinfo_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myinfo-domain */ "./src/myinfo/domain/myinfo-domain.ts");
/* harmony import */ var _myinfo_domain__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_myinfo_domain__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "myInfoDomain", function() { return _myinfo_domain__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _profilestatus_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilestatus-domain */ "./src/myinfo/domain/profilestatus-domain.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "profileStatusDomain", function() { return _profilestatus_domain__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/myinfo/domain/map.ts":
/*!**********************************!*\
  !*** ./src/myinfo/domain/map.ts ***!
  \**********************************/
/*! exports provided: occupation, countryofmarriage, sex, comstatus, lifestatus, validity, hdbtype, residentialstatus, housingtype, marital, edulevel, passtype, status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "occupation", function() { return occupation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryofmarriage", function() { return countryofmarriage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sex", function() { return sex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comstatus", function() { return comstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifestatus", function() { return lifestatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validity", function() { return validity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hdbtype", function() { return hdbtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "residentialstatus", function() { return residentialstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "housingtype", function() { return housingtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marital", function() { return marital; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edulevel", function() { return edulevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passtype", function() { return passtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var occupation;
(function (occupation) {
    const codeToDesc = {
        "11110": "LEGISLATOR",
        "11121": "SENIOR_GOVERNMENT_OFFICIAL",
        "11122": "SENIOR_STATUTORY_BOARD_OFFICIAL",
        "11140": "SENIOR_OFFICIAL_OF_POLITICAL_PARTY_ORGANISATION",
        "11150": "SENIOR_OFFICIAL_OF_EMPLOYERS_WORKERS_AND_OTHER_ECONOMIC_INTEREST_ORGANISATION",
        "11160": "SENIOR_OFFICIAL_OF_HUMANITARIAN_AND_OTHER_SPECIAL_INTEREST_ORGANISATION",
        "11201": "MANAGING_DIRECTOR_CHIEF_EXECUTIVE_OFFICER",
        "11202": "COMPANY_DIRECTOR",
        "11203": "CHIEF_OPERATING_OFFICER_GENERAL_MANAGER",
        "12111": "BUDGETING_AND_FINANCIAL_ACCOUNTING_MANAGER_INCLUDING_FINANCIAL_CONTROLLER",
        "12112": "ADMINISTRATION_MANAGER",
        "12121": "PERSONNEL_HUMAN_RESOURCE_MANAGER",
        "12122": "INDUSTRIAL_RELATIONS_MANAGER",
        "12123": "TRAINING_MANAGER",
        "12130": "POLICY_AND_PLANNING_MANAGER",
        "12191": "PREMISES_AND_FACILITIES_MAINTENANCE_MANAGER",
        "12192": "LANDSCAPE_OPERATIONS_MANAGER",
        "12193": "WORKING_PROPRIETOR_BUSINESS_SERVICES_AND_ADMINISTRATIVE_SERVICES",
        "12199": "OTHER_BUSINESS_SERVICES_AND_ADMINISTRATION_MANAGERS_NEC",
        "12211": "SALES_AND_MARKETING_MANAGER",
        "12212": "BUSINESS_DEVELOPMENT_MANAGER",
        "12220": "ADVERTISING_PUBLIC_RELATIONS_MANAGER",
        "12230": "RESEARCH_AND_DEVELOPMENT_MANAGER",
        "12241": "CUSTOMER_SERVICE_MANAGER",
        "12242": "CALL_CENTRE_MANAGER",
        "13101": "PRODUCTION_MANAGER_IN_AGRICULTURE_AND_FISHERIES",
        "13102": "WORKING_PROPRIETOR_AGRICULTURE_AND_FISHERIES",
        "13211": "MANUFACTURING_PLANT_PRODUCTION_MANAGER",
        "13212": "WORKING_PROPRIETOR_MANUFACTURING",
        "13231": "BUILDING_AND_CONSTRUCTION_PROJECT_MANAGER",
        "13232": "WORKING_PROPRIETOR_CONSTRUCTION",
        "13241": "SUPPLY_AND_DISTRIBUTION_LOGISTICS_WAREHOUSING_MANAGER",
        "13242": "PROCUREMENT_PURCHASING_MANAGER",
        "13243": "TRANSPORT_OPERATIONS_MANAGER",
        "13244": "POSTAL_SERVICE_MANAGER",
        "13245": "WORKING_PROPRIETOR_TRANSPORT_STORAGE_AND_COURIER",
        "13291": "TECHNICAL_ENGINEERING_SERVICES_MANAGER_EG_SHIPYARD_MANAGER",
        "13292": "QUALITY_ASSURANCE_MANAGER",
        "13299": "OTHER_PRODUCTION_AND_OPERATIONS_MANAGERS_NEC_EG_MINING_MANAGER",
        "13301": "CHIEF_INFORMATION_OFFICER_CHIEF_TECHNOLOGY_OFFICER_CHIEF_SECURITY_OFFICER",
        "13302": "SOFTWARE_AND_APPLICATIONS_MANAGER",
        "13303": "NETWORK_AND_COMMUNICATIONS_MANAGER",
        "13304": "IT_SERVICE_MANAGER",
        "13305": "WORKING_PROPRIETOR_INFORMATION_AND_COMMUNICATIONS_TECHNOLOGY_SERVICE",
        "13410": "CHILD_CARE_SERVICES_MANAGER",
        "13420": "HEALTH_SERVICES_MANAGER",
        "13430": "AGED_CARE_SERVICES_MANAGER",
        "13440": "SOCIAL_WELFARE_MANAGER",
        "13451": "SCHOOL_PRINCIPAL",
        "13459": "OTHER_EDUCATION_MANAGERS_INCLUDING_REGISTRARS_AND_DEANS_OF_EDUCATION_INSTITUTIONS",
        "13460": "FINANCIAL_INSURANCE_SERVICES_MANAGER_EG_FINANCIAL_INSTITUTION_BRANCH_MANAGER",
        "13491": "WORKING_PROPRIETOR_PROFESSIONAL_FINANCIAL_COMMUNITY_AND_SOCIAL_SERVICES",
        "13499": "OTHER_PROFESSIONAL_FINANCIAL_COMMUNITY_AND_SOCIAL_SERVICES_MANAGERS_NEC",
        "14111": "HOTEL_OPERATIONS_LODGING_SERVICES_MANAGER",
        "14112": "WORKING_PROPRIETOR_LODGING_SERVICES",
        "14121": "RESTAURANT_MANAGER",
        "14122": "CATERING_SERVICES_MANAGER",
        "14123": "WORKING_PROPRIETOR_RESTAURANT_AND_OTHER_CATERING_SERVICES",
        "14201": "RETAIL_SHOP_SALES_MANAGER",
        "14202": "WHOLESALE_TRADE_MANAGER",
        "14203": "WORKING_PROPRIETOR_RETAIL_TRADE",
        "14204": "WORKING_PROPRIETOR_WHOLESALE_TRADE",
        "14310": "SPORTS_CENTRE_MANAGER",
        "14321": "CASINO_OPERATIONS_MANAGER",
        "14322": "AMUSEMENT_THEME_PARK_MANAGER",
        "14323": "CINEMA_MANAGER",
        "14324": "PARK_GARDEN_NATURE_RESERVE_MANAGER",
        "14325": "DISCOTHEQUE_KARAOKE_NIGHTCLUB_MANAGER",
        "14329": "OTHER_RECREATION_CENTRE_MANAGERS",
        "14330": "ARTS_AND_CULTURAL_CENTRE_MANAGER",
        "14391": "WORKING_PROPRIETOR_SPORTS_RECREATION_ARTS_AND_OTHER_SERVICES",
        "14399": "OTHER_SERVICES_MANAGERS_NEC",
        "21110": "PHYSICIST_ASTRONOMER",
        "21120": "METEOROLOGIST",
        "21130": "CHEMIST",
        "21141": "GEOLOGIST",
        "21142": "GEOPHYSICIST",
        "21149": "OTHER_PHYSICAL_SCIENCE_PROFESSIONALS",
        "21211": "MATHEMATICIAN",
        "21212": "OPERATIONS_RESEARCH_ANALYST",
        "21213": "ACTUARY",
        "21220": "STATISTICIAN",
        "21311": "BIOLOGIST_GENERAL",
        "21312": "BOTANIST",
        "21313": "ZOOLOGIST",
        "21319": "OTHER_BIOLOGISTS_BOTANISTS_ZOOLOGISTS_AND_RELATED_PROFESSIONALS",
        "21321": "AGRONOMIST",
        "21322": "HORTICULTURIST_ARBORIST",
        "21323": "PLANT_PATHOLOGIST",
        "21324": "SOIL_SCIENTIST",
        "21325": "FLORICULTURIST_ORCHIDOLOGIST",
        "21326": "PLANT_TISSUE_CULTURIST",
        "21327": "AQUACULTURIST",
        "21329": "OTHER_FARMING_FORESTRY_AND_FISHERY_ADVISERS",
        "21331": "ENVIRONMENTAL_OFFICER_ENVIRONMENTAL_PROTECTION",
        "21332": "ENVIRONMENT_RESEARCH_SCIENTIST_EG_ECOLOGIST",
        "21333": "ENERGY_MANAGER",
        "21339": "OTHER_ENVIRONMENTAL_PROTECTION_AND_RELATED_PROFESSIONALS",
        "21341": "PHARMACOLOGIST",
        "21342": "ANATOMIST",
        "21343": "BIOCHEMIST",
        "21344": "PHYSIOLOGIST",
        "21345": "ANIMAL_SCIENTIST",
        "21346": "MEDICAL_SCIENTIST",
        "21349": "OTHER_PHARMACOLOGISTS_AND_RELATED_PROFESSIONALS",
        "21411": "MANUFACTURING_ENGINEER_GENERAL",
        "21412": "PRODUCTION_ENGINEER",
        "21413": "AUTOMATION_ENGINEER",
        "21414": "QUALITY_CONTROL_ASSURANCE_ENGINEER",
        "21419": "OTHER_INDUSTRIAL_AND_PRODUCTION_ENGINEERS",
        "21421": "CIVIL_ENGINEER_GENERAL",
        "21422": "STRUCTURAL_ENGINEER_GENERAL",
        "21423": "BUILDING_CONSTRUCTION_ENGINEER",
        "21424": "SOIL_MECHANIC_PILING_ENGINEER",
        "21429": "OTHER_CIVIL_ENGINEERS",
        "21431": "ENVIRONMENTAL_ENGINEER",
        "21432": "SEWERAGE_SANITARY_ENGINEER",
        "21441": "MECHANICAL_ENGINEER_GENERAL",
        "21442": "INDUSTRIAL_MACHINERY_AND_TOOLS_ENGINEER",
        "21443": "MARINE_ENGINEER_SHORE_BASED",
        "21444": "NAVAL_ARCHITECT",
        "21445": "AERONAUTICAL_ENGINEER",
        "21446": "AUTOMOTIVE_ENGINEER",
        "21447": "AIR_CONDITIONING_REFRIGERATION_ENGINEER",
        "21449": "OTHER_MECHANICAL_ENGINEERS",
        "21451": "CHEMICAL_ENGINEER_GENERAL",
        "21452": "CHEMICAL_ENGINEER_PETROLEUM",
        "21453": "CHEMICAL_ENGINEER_PETROCHEMICALS",
        "21459": "OTHER_CHEMICAL_ENGINEERS",
        "21461": "PETROLEUM_NATURAL_GAS_ENGINEER",
        "21462": "METALLURGIST",
        "21469": "OTHER_MINING_ENGINEERS_METALLURGISTS_AND_RELATED_PROFESSIONALS",
        "21491": "BIOMEDICAL_ENGINEER",
        "21492": "MATERIALS_ENGINEER",
        "21493": "INDUSTRIAL_SAFETY_ENGINEER",
        "21494": "QUANTITY_SURVEYOR",
        "21495": "CERAMICS_GLASS_TECHNOLOGIST",
        "21496": "FOOD_AND_DRINK_TECHNOLOGIST",
        "21499": "OTHER_ENGINEERING_PROFESSIONALS_NEC",
        "21511": "ELECTRICAL_ENGINEER_GENERAL",
        "21512": "POWER_GENERATION_AND_DISTRIBUTION_ENGINEER",
        "21513": "LIFT_ENGINEER",
        "21519": "OTHER_ELECTRICAL_ENGINEERS",
        "21521": "ELECTRONICS_ENGINEER_GENERAL",
        "21522": "COMPUTER_ENGINEER",
        "21523": "SEMI_CONDUCTOR_ENGINEER",
        "21524": "AUDIO_AND_VIDEO_EQUIPMENT_ENGINEER",
        "21525": "INSTRUMENTATION_ENGINEER",
        "21526": "EMBEDDED_SYSTEMS_ENGINEER",
        "21529": "OTHER_ELECTRONICS_ENGINEERS",
        "21530": "TELECOMMUNICATIONS_ENGINEER",
        "21610": "BUILDING_ARCHITECT",
        "21620": "LANDSCAPE_ARCHITECT",
        "21641": "TOWN_PLANNER",
        "21649": "OTHER_RELATED_PLANNERS_EG_TRAFFIC_PLANNER",
        "21651": "SURVEYOR_GENERAL",
        "21652": "LAND_SURVEYOR",
        "21653": "HYDROGRAPHIC_SURVEYOR",
        "21654": "CARTOGRAPHER",
        "21659": "OTHER_SURVEYORS_AND_CARTOGRAPHERS",
        "22110": "GENERAL_PRACTITIONER_PHYSICIAN",
        "22121": "CARDIOLOGIST",
        "22122": "DERMATOLOGIST",
        "22123": "GASTROENTEROLOGIST",
        "22124": "INTERNAL_MEDICINE_PHYSICIAN",
        "22125": "MEDICAL_ONCOLOGIST",
        "22126": "PAEDIATRICIAN",
        "22127": "RESPIRATORY_PHYSICIAN",
        "22128": "PSYCHIATRIST",
        "22129": "OTHER_SPECIALIST_MEDICAL_PRACTITIONERS_MEDICAL_EG_ENDOCRINOLOGIST_GERIATRICIAN_HAEMATOLOGIST_INFECTIOUS_DISEASES_PHYSICIAN_NEUROLOGIST_NUCLEAR_MEDICINE_PHYSICIAN_REHABILITATION_PHYSICIAN_RENAL_PHYSICIAN_RHEUMATOLOGIST",
        "22131": "GENERAL_SURGEON",
        "22132": "CARDIOTHORACIC_SURGEON",
        "22133": "HAND_SURGEON",
        "22134": "NEUROSURGEON",
        "22135": "ORTHOPAEDIC_SURGEON",
        "22136": "PAEDIATRIC_SURGEON",
        "22137": "PLASTIC_SURGEON",
        "22138": "UROLOGIST",
        "22139": "OTHER_SPECIALIST_MEDICAL_PRACTITIONERS_SURGICAL",
        "22141": "ANAESTHESIOLOGIST",
        "22142": "DIAGNOSTIC_RADIOLOGIST",
        "22143": "EMERGENCY_PHYSICIAN",
        "22144": "OBSTETRICIAN_GYNAECOLOGIST",
        "22145": "OPHTHALMOLOGIST",
        "22146": "PATHOLOGIST",
        "22147": "PUBLIC_HEALTH_PHYSICIAN",
        "22148": "OTORHINOLARYNGOLOGIST_EAR_NOSE_THROAT_ENT_SURGEON",
        "22149": "OTHER_SPECIALIST_MEDICAL_PRACTITIONERS_OTHER_SPECIALISATIONS_EG_OCCUPATIONAL_PHYSICIAN_RADIATION_ONCOLOGIST",
        "22301": "TRADITIONAL_CHINESE_MEDICINE_PHYSICIAN",
        "22302": "TRADITIONAL_CHINESE_MEDICINE_ACUPUNCTURIST",
        "22500": "VETERINARIAN",
        "22611": "DENTIST_GENERAL",
        "22612": "SPECIALISED_DENTIST_EG_ORTHODONTIST",
        "22621": "PHARMACIST_DISPENSING",
        "22629": "OTHER_PHARMACISTS",
        "22631": "OCCUPATIONAL_HEALTH_PROFESSIONAL",
        "22632": "ENVIRONMENTAL_OFFICER_PUBLIC_HEALTH",
        "22639": "OTHER_ENVIRONMENTAL_AND_OCCUPATIONAL_HEALTH_AND_HYGIENE_PROFESSIONALS",
        "22690": "OTHER_HEALTH_PROFESSIONALS_NEC",
        "23101": "UNIVERSITY_LECTURER",
        "23102": "POLYTECHNIC_LECTURER",
        "23109": "OTHER_UNIVERSITY_POLYTECHNIC_AND_HIGHER_EDUCATION_TEACHERS",
        "23200": "TECHNICAL_VOCATIONAL_COMMERCIAL_EDUCATION_INSTITUTE_TEACHER",
        "23300": "PRE_UNIVERSITY_INCLUDING_JUNIOR_COLLEGE_AND_SECONDARY_SCHOOL_TEACHER",
        "23400": "PRIMARY_SCHOOL_TEACHER",
        "23511": "EDUCATION_METHODS_ADVISER",
        "23512": "TEACHING_AID_SPECIALIST_INCLUDING_AUDIO_VISUAL_AID_SPECIALIST",
        "23519": "OTHER_EDUCATION_METHODS_SPECIALISTS",
        "23521": "TEACHER_OF_THE_BLIND",
        "23522": "TEACHER_OF_THE_DEAF",
        "23523": "TEACHER_OF_THE_MENTALLY_HANDICAPPED",
        "23529": "OTHER_SPECIAL_EDUCATION_TEACHERS",
        "23590": "OTHER_TEACHING_PROFESSIONALS_NEC",
        "24111": "ACCOUNTANT",
        "24112": "AUDITOR_ACCOUNTING",
        "24120": "FINANCIAL_INVESTMENT_ADVISER",
        "24131": "FINANCIAL_ANALYST_EG_EQUITIES_ANALYST_CREDIT_ANALYST",
        "24132": "RISK_ANALYST_FINANCIAL",
        "24133": "FUND_MANAGER",
        "24134": "TREASURY_MANAGER",
        "24139": "OTHER_FINANCIAL_ANALYSTS_AND_RELATED_PROFESSIONALS_EG_FINANCIAL_PRODUCT_STRUCTURER",
        "24211": "MANAGEMENT_CONSULTANT",
        "24212": "BUSINESS_CONSULTANT",
        "24220": "POLICY_ADMINISTRATION_PROFESSIONAL_EG_POLICY_ANALYST",
        "24231": "HUMAN_RESOURCE_CONSULTANT_EXCLUDING_EXECUTIVE_SEARCH_CONSULTANT",
        "24232": "EXECUTIVE_SEARCH_CONSULTANT",
        "24311": "CREATIVE_DIRECTOR_ADVERTISING",
        "24312": "MARKET_RESEARCH_ANALYST",
        "24320": "PUBLIC_RELATIONS_CONSULTANT_AND_RELATED_PROFESSIONAL",
        "25111": "SYSTEMS_DESIGNER_ANALYST",
        "25112": "IT_BUSINESS_PROCESS_CONSULTANT_BUSINESS_ANALYST",
        "25121": "SOFTWARE_DEVELOPER",
        "25122": "WEB_DEVELOPER",
        "25123": "MULTIMEDIA_INCLUDING_COMPUTER_GAMES_DEVELOPER",
        "25140": "APPLICATIONS_SYSTEMS_PROGRAMMER",
        "25151": "INFORMATION_TECHNOLOGY_TESTING_QUALITY_ASSURANCE_SPECIALIST",
        "25152": "INFORMATION_TECHNOLOGY_AUDITOR",
        "25160": "INFORMATION_TECHNOLOGY_PROJECT_MANAGER",
        "25190": "SOFTWARE_AND_APPLICATIONS_DEVELOPER_AND_ANALYST_NEC",
        "25211": "DATABASE_ADMINISTRATOR",
        "25212": "DATABASE_ARCHITECT",
        "25220": "NETWORK_COMPUTER_SYSTEMS_ADMINISTRATOR",
        "25230": "NETWORK_INFRASTRUCTURE_ARCHITECT_AND_ENGINEER",
        "25240": "INFORMATION_TECHNOLOGY_SECURITY_SPECIALIST",
        "25290": "DATABASE_AND_NETWORK_PROFESSIONAL_NEC",
        "26111": "ADVOCATE_SOLICITOR",
        "26112": "LAWYER_EXCLUDING_ADVOCATE_AND_SOLICITOR",
        "26113": "LEGAL_OFFICER",
        "26120": "JUDGE",
        "26211": "ARCHIVIST",
        "26212": "CURATOR_ART_GALLERY_AND_MUSEUM",
        "26213": "CONSERVATOR_ART_WORKS",
        "26221": "LIBRARIAN",
        "26229": "OTHER_INFORMATION_PROFESSIONALS",
        "26310": "ECONOMIST",
        "26321": "SOCIOLOGIST",
        "26322": "ANTHROPOLOGIST",
        "26323": "SOCIAL_RESEARCH_ANALYST",
        "26331": "HISTORIAN",
        "26332": "POLITICAL_SCIENTIST",
        "26339": "OTHER_SOCIAL_SCIENCE_PROFESSIONALS_EG_PHILOSOPHER",
        "26340": "PSYCHOLOGIST",
        "26351": "SOCIAL_WORKER_GENERAL",
        "26352": "SOCIAL_WORKER_DELINQUENCY",
        "26353": "MEDICAL_SOCIAL_WORKER",
        "26354": "COUNSELLOR_REHABILITATION",
        "26355": "COUNSELLOR_DRUGS_AND_ALCOHOL",
        "26356": "COUNSELLOR_FAMILY",
        "26357": "SCHOOL_COUNSELLOR",
        "26359": "OTHER_SOCIAL_WORK_AND_COUNSELLING_PROFESSIONALS",
        "26411": "AUTHOR",
        "26412": "SCRIPT_WRITER",
        "26413": "ADVERTISING_COPYWRITER",
        "26414": "TECHNICAL_WRITER",
        "26415": "CONTINUITY_AND_SCRIPT_EDITOR",
        "26416": "BOOK_EDITOR",
        "26419": "OTHER_AUTHORS_AND_RELATED_WRITERS",
        "26421": "JOURNALIST",
        "26422": "EDITOR_NEWS_AND_PERIODICALS",
        "26511": "SCULPTOR",
        "26512": "PAINTER",
        "26513": "CARTOONIST",
        "26519": "OTHER_VISUAL_ARTISTS",
        "26521": "INSTRUMENTALIST",
        "26522": "COMPOSER_ORCHESTRATOR",
        "26523": "CONDUCTOR_DIRECTOR_OF_ORCHESTRA_BAND_CHOIR",
        "26524": "SINGER",
        "26529": "OTHER_MUSICIANS_COMPOSERS_AND_SINGERS",
        "26531": "DANCER",
        "26532": "CHOREOGRAPHER",
        "26541": "PRODUCER_STAGE_FILM_TELEVISION_COMPUTER_GAMES_VIDEO_AND_RADIO",
        "26542": "DIRECTOR_STAGE_FILM_TELEVISION_AND_RADIO",
        "26543": "ARTISTIC_DIRECTOR_STAGE_FILM_TELEVISION_AND_RADIO",
        "26544": "PRODUCER_DIRECTOR_OF_COMMERCIALS",
        "26545": "EDITOR_RADIO_TELEVISION_AND_VIDEO",
        "26549": "OTHER_FILM_STAGE_AND_RELATED_DIRECTORS_AND_PRODUCERS",
        "26550": "ACTOR",
        "29011": "MINISTER_OF_RELIGION",
        "29019": "OTHER_RELIGIOUS_PROFESSIONALS",
        "29090": "OTHER_PROFESSIONALS_NEC",
        "31001": "ASSISTANT_CIVIL_AND_STRUCTURAL_ENGINEER",
        "31002": "ASSISTANT_ELECTRICAL_ENGINEER",
        "31003": "ASSISTANT_ELECTRONICS_ENGINEER",
        "31004": "ASSISTANT_MECHANICAL_ENGINEER",
        "31005": "ASSISTANT_CHEMICAL_ENGINEER",
        "31006": "ASSISTANT_MANUFACTURING_ENGINEER",
        "31009": "OTHER_ASSISTANT_ENGINEERS",
        "31111": "CHEMISTRY_TECHNICIAN",
        "31112": "PHYSICS_TECHNICIAN",
        "31119": "OTHER_CHEMICAL_AND_PHYSICAL_SCIENCE_TECHNICIANS",
        "31121": "CIVIL_ENGINEERING_TECHNICIAN",
        "31122": "STRUCTURAL_ENGINEERING_TECHNICIAN",
        "31123": "BUILDING_TECHNICIAN",
        "31124": "LAND_SURVEYING_TECHNICIAN",
        "31125": "RESIDENT_TECHNICAL_OFFICER",
        "31129": "OTHER_CIVIL_ENGINEERING_AND_RELATED_TECHNICIANS",
        "31131": "ELECTRICAL_ENGINEERING_TECHNICIAN_GENERAL",
        "31132": "ELECTRICAL_ENGINEERING_TECHNICIAN_HIGH_VOLTAGE",
        "31139": "OTHER_ELECTRICAL_ENGINEERING_TECHNICIANS",
        "31141": "ELECTRONICS_ENGINEERING_TECHNICIAN_GENERAL",
        "31142": "SEMI_CONDUCTOR_TECHNICIAN",
        "31143": "AUDIO_AND_VIDEO_EQUIPMENT_TECHNICIAN",
        "31144": "INSTRUMENTATION_TECHNICIAN",
        "31149": "OTHER_ELECTRONICS_ENGINEERING_TECHNICIANS",
        "31151": "MECHANICAL_ENGINEERING_TECHNICIAN_GENERAL",
        "31152": "AERONAUTICAL_ENGINEERING_TECHNICIAN",
        "31153": "AUTOMOTIVE_ENGINEERING_TECHNICIAN",
        "31154": "AIR_CONDITIONING_REFRIGERATION_ENGINEERING_TECHNICIAN",
        "31155": "MACHINING_TOOLING_TECHNICIAN",
        "31156": "TOOL_MOULD_DESIGNER",
        "31157": "MARINE_SURVEYOR_SHIP_AND_NAUTICAL",
        "31158": "AIRWORTHINESS_SURVEYOR",
        "31159": "OTHER_MECHANICAL_ENGINEERING_TECHNICIANS",
        "31161": "CHEMICAL_ENGINEERING_TECHNICIAN_GENERAL",
        "31162": "CHEMICAL_ENGINEERING_TECHNICIAN_PETROLEUM_AND_NATURAL_GAS",
        "31163": "CHEMICAL_ENGINEERING_TECHNICIAN_PETROCHEMICALS",
        "31169": "OTHER_CHEMICAL_ENGINEERING_TECHNICIANS",
        "31171": "MANUFACTURING_ENGINEERING_TECHNICIAN_GENERAL",
        "31172": "PRODUCTION_ENGINEERING_TECHNICIAN",
        "31173": "AUTOMATION_DESIGNER",
        "31174": "AUTOMATION_TECHNICIAN",
        "31175": "QUALITY_ASSURANCE_TECHNICIAN",
        "31179": "OTHER_MANUFACTURING_ENGINEERING_TECHNICIANS",
        "31181": "DRAUGHTSMAN_GENERAL",
        "31182": "MECHANICAL_DRAUGHTSMAN",
        "31183": "ELECTRICAL_ELECTRONICS_DRAUGHTSMAN",
        "31184": "CIVIL_STRUCTURAL_ENGINEERING_DRAUGHTSMAN",
        "31185": "ARCHITECTURAL_DRAUGHTSMAN",
        "31186": "MARINE_DRAUGHTSMAN",
        "31189": "OTHER_DRAUGHTSMEN_EG_CARTOGRAPHICAL_DRAUGHTSMAN",
        "31191": "MECHATRONICS_TECHNICIAN",
        "31192": "REFINING_SMELTING_TECHNICIAN",
        "31193": "PHYSICAL_METALLURGY_TECHNICIAN",
        "31194": "PETROLEUM_AND_NATURAL_GAS_EXTRACTION_TECHNICIAN",
        "31195": "ELECTRONIC_PRE_PRESS_TECHNICIAN",
        "31196": "PRECISION_OPTICS_TECHNICIAN",
        "31197": "QUANTITY_SURVEYING_TECHNICIAN",
        "31199": "OTHER_PHYSICAL_AND_ENGINEERING_SCIENCE_TECHNICIANS_NEC",
        "31411": "BIOLOGICAL_TECHNICIAN",
        "31412": "FOOD_SCIENCE_TECHNICIAN",
        "31419": "OTHER_LIFE_SCIENCE_TECHNICIANS",
        "31421": "HORTICULTURAL_TECHNICIAN",
        "31422": "PLANT_TISSUE_CULTURE_TECHNICIAN",
        "31423": "FARMING_TECHNICIAN_ANIMAL_PRODUCTION",
        "31429": "OTHER_AGRONOMY_HORTICULTURAL_AND_FARMING_RELATED_TECHNICIANS",
        "31511": "CHIEF_ENGINEER_OFFICER_SHIP",
        "31512": "MARINE_ENGINEER_OFFICER",
        "31513": "MARINE_SUPERINTENDENT_ENGINEER",
        "31521": "SHIP_CAPTAIN",
        "31522": "SHIPS_NAVIGATING_OFFICER",
        "31523": "SHIP_PILOT",
        "31524": "MARINE_SUPERINTENDENT_DECK",
        "31529": "OTHER_SHIPS_DECK_OFFICERS_AND_PILOTS",
        "31531": "COMMERCIAL_AIRLINE_PILOT",
        "31532": "AIRCRAFT_PILOT_EXCEPT_COMMERCIAL_AIRLINE_AND_AIR_FORCE",
        "31533": "FLIGHT_NAVIGATOR",
        "31534": "FLIGHT_ENGINEER",
        "31535": "FLYING_INSTRUCTOR_EXCEPT_AIR_FORCE",
        "31539": "OTHER_AIRCRAFT_PILOTS_AND_RELATED_ASSOCIATE_PROFESSIONALS",
        "31540": "AIR_TRAFFIC_CONTROLLER",
        "31560": "SEA_TRAFFIC_CONTROLLER",
        "31571": "AIR_TRANSPORT_SERVICE_SUPERVISOR",
        "31572": "MRT_SERVICE_SUPERVISOR",
        "31573": "ROAD_TRANSPORT_SUPERVISOR",
        "31574": "PORT_SHIPPING_OPERATIONS_SUPERVISOR",
        "31579": "OTHER_TRANSPORT_OPERATIONS_SUPERVISORS",
        "31591": "PORT_MASTER_DOCKMASTER",
        "31592": "PORT_CAPTAIN",
        "31593": "SHIP_CHARTERER",
        "31594": "FLIGHT_OPERATIONS_OFFICER",
        "31595": "AIR_CARGO_OFFICER",
        "31596": "LOAD_SHEET_OFFICER_AIRCRAFT",
        "31597": "MRT_OPERATIONS_OFFICER",
        "31599": "OTHER_TRANSPORT_CONTROLLERS_AND_RELATED_WORKERS_NEC",
        "31601": "PREMISES_AND_FACILITIES_MAINTENANCE_OFFICER",
        "31602": "LANDSCAPE_OPERATIONS_OFFICER",
        "31603": "PARKS_OFFICER",
        "31711": "FIRE_AND_SAFETY_INSPECTOR",
        "31719": "OTHER_BUILDING_AND_FIRE_INSPECTORS",
        "31720": "SAFETY_INSPECTOR_VEHICLES_PROCESSES_AND_PRODUCTS",
        "32111": "MEDICAL_DIAGNOSTIC_RADIOGRAPHER",
        "32112": "RADIATION_THERAPIST",
        "32113": "SONOGRAPHER",
        "32114": "MEDICAL_X_RAY_TECHNICIAN",
        "32119": "OTHER_MEDICAL_IMAGING_THERAPEUTIC_EQUIPMENT_TECHNICIANS_AND_RELATED_ASSOCIATE_PROFESSIONALS",
        "32120": "MEDICAL_AND_PATHOLOGY_LABORATORY_TECHNICIAN",
        "32130": "PHARMACEUTICAL_TECHNICIAN",
        "32141": "ORTHOPAEDIC_TECHNICIAN",
        "32142": "ORTHOPAEDIC_APPLIANCE_MAKER_AND_REPAIRER",
        "32143": "DENTAL_TECHNICIAN",
        "32201": "REGISTERED_NURSE",
        "32202": "ENROLLED_ASSISTANT_NURSE",
        "32300": "TRADITIONAL_AND_COMPLEMENTARY_MEDICINE_ASSOCIATE_PROFESSIONALS_EG_HOMEOPATH_AND_NATUROPATH",
        "32400": "VETERINARY_TECHNICIAN_ASSISTANT",
        "32511": "DENTAL_NURSE",
        "32512": "DENTAL_ORAL_HEALTH_THERAPIST",
        "32521": "DIETITIAN",
        "32522": "NUTRITIONIST",
        "32531": "AUDIOLOGIST",
        "32532": "SPEECH_THERAPIST",
        "32541": "OPTOMETRIST",
        "32542": "OPTICIAN",
        "32551": "PHYSIOTHERAPIST",
        "32552": "MASSAGE_THERAPIST",
        "32559": "OTHER_PHYSICAL_THERAPISTS_AND_RELATED_ASSOCIATE_PROFESSIONALS",
        "32560": "OCCUPATIONAL_THERAPIST",
        "32571": "ENVIRONMENTAL_INSPECTOR_ENVIRONMENTAL_PUBLIC_HEALTH",
        "32572": "OCCUPATIONAL_HEALTH_INSPECTOR",
        "32591": "OSTEOPATH",
        "32592": "CHIROPRACTOR",
        "32593": "PODIATRIST",
        "32594": "PARAMEDIC",
        "32595": "COMMUNITY_HEALTH_WORKER",
        "32599": "OTHER_HEALTH_ASSOCIATE_PROFESSIONALS_NEC",
        "33111": "SECURITIES_AND_FINANCE_DEALER_BROKER",
        "33112": "FOREIGN_EXCHANGE_DEALER_BROKER",
        "33113": "FINANCIAL_DERIVATIVES_DEALER_BROKER",
        "33114": "COMMODITIES_DERIVATIVES_BROKER",
        "33119": "OTHER_FINANCE_DEALERS_AND_BROKERS",
        "33120": "CREDIT_AND_LOANS_OFFICER",
        "33130": "ACCOUNTING_ASSOCIATE_PROFESSIONAL_EG_ASSISTANT_ACCOUNTANT_AUDIT_ACCOUNTING_EXECUTIVE",
        "33141": "STATISTICAL_OFFICER",
        "33142": "RESEARCH_OFFICER_STATISTICAL",
        "33149": "OTHER_STATISTICAL_MATHEMATICAL_AND_ACTUARIAL_ASSOCIATE_PROFESSIONALS",
        "33151": "APPRAISER_VALUER",
        "33152": "ASSESSOR",
        "33211": "INSURANCE_SALES_AGENT_BROKER_INCLUDING_INDEPENDENT_FINANCIAL_PLANNER",
        "33212": "INSURANCE_UNDERWRITER",
        "33219": "OTHER_INSURANCE_REPRESENTATIVES",
        "33221": "BUSINESS_DEVELOPMENT_EXECUTIVE",
        "33222": "MARKETING_AND_SALES_REPRESENTATIVE_TECHNICAL",
        "33223": "MARKETING_AND_SALES_REPRESENTATIVE_MEDICAL_AND_PHARMACEUTICAL_PRODUCTS",
        "33224": "MARKETING_AND_SALES_REPRESENTATIVE_ICT",
        "33225": "MARKETING_AND_SALES_REPRESENTATIVE_INSTITUTIONAL_SALES_OF_FINANCIAL_PRODUCTS",
        "33226": "AFTER_SALES_ADVISER_CLIENT_ACCOUNT_SERVICE_EXECUTIVE",
        "33229": "OTHER_COMMERCIAL_AND_MARKETING_SALES_REPRESENTATIVES",
        "33231": "BUYER",
        "33232": "PURCHASING_AGENT",
        "33241": "TRADE_BROKER_INCLUDING_OIL_AND_BUNKER_TRADER",
        "33242": "SHIP_BROKER",
        "33290": "SALES_AND_RELATED_ASSOCIATE_PROFESSIONAL_NEC",
        "33311": "CLEARING_AND_FORWARDING_AGENT",
        "33312": "SHIP_AGENT",
        "33320": "EXHIBITION_CONFERENCE_EVENT_PLANNER",
        "33330": "EMPLOYMENT_AGENT_LABOUR_CONTRACTOR",
        "33340": "REAL_ESTATE_AGENT",
        "33391": "AUCTIONEER",
        "33392": "ADVERTISING_SALESMAN",
        "33399": "OTHER_BUSINESS_SERVICES_AGENTS_NEC_EG_SPORTS_AGENT_ARTISTE_AGENT",
        "33450": "PUBLIC_RELATIONS_CORPORATE_COMMUNICATIONS_OFFICER",
        "33461": "PERSONNEL_HUMAN_RESOURCE_OFFICER",
        "33462": "INDUSTRIAL_RELATIONS_OFFICER",
        "33463": "TRAINING_OFFICER",
        "33464": "CREWING_EXECUTIVE_SHIP",
        "33491": "MANAGEMENT_EXECUTIVE",
        "33492": "RESEARCH_OFFICER_NON_STATISTICAL",
        "33493": "OPERATIONS_OFFICER_EXCEPT_TRANSPORT_OPERATIONS",
        "33499": "OTHER_ADMINISTRATIVE_AND_RELATED_ASSOCIATE_PROFESSIONALS_NEC",
        "33510": "CUSTOMS_IMMIGRATION_OFFICER",
        "33550": "POLICE_INSPECTOR",
        "33591": "GOVERNMENT_TAX_AND_EXCISE_OFFICIAL",
        "33592": "GOVERNMENT_SOCIAL_BENEFITS_OFFICIAL",
        "33593": "GOVERNMENT_LICENSING_OFFICIAL",
        "33599": "OTHER_GOVERNMENT_ASSOCIATE_PROFESSIONALS_NEC",
        "34110": "LEGAL_ASSOCIATE_PROFESSIONAL_EG_PARALEGAL",
        "34121": "YOUTH_WORKER",
        "34129": "OTHER_SOCIAL_WORK_ASSOCIATE_PROFESSIONALS",
        "34210": "PROFESSIONAL_SPORTSMAN",
        "34221": "SPORTS_COACH",
        "34222": "MARTIAL_ARTS_INSTRUCTOR",
        "34223": "PHYSICAL_FITNESS_INSTRUCTOR_INCLUDING_YOGA_INSTRUCTOR_AND_AEROBICS_INSTRUCTOR",
        "34224": "SPORTS_OFFICIAL",
        "34229": "OTHER_RELATED_INSTRUCTORS_AND_ASSOCIATE_PROFESSIONALS_EG_ADVENTURE_TRAINING_INSTRUCTOR_AND_SCUBA_DIVING_INSTRUCTOR",
        "34310": "PHOTOGRAPHER",
        "34321": "INTERIOR_DESIGNER",
        "34322": "LANDSCAPE_DESIGNER",
        "34323": "DISPLAY_ARTIST",
        "34324": "DECORATOR_AND_RELATED_WORKER_EG_WINDOW_DRESSER_AND_SET_DESIGNER",
        "34331": "LIBRARY_OFFICER",
        "34332": "GALLERY_MUSEUM_AND_RELATED_TECHNICIAN",
        "34351": "FASHION_GARMENT_DESIGNER",
        "34352": "PRODUCT_DESIGNER",
        "34361": "GRAPHIC_DESIGNER",
        "34362": "MULTIMEDIA_INCLUDING_COMPUTER_GAMES_DESIGNER",
        "34363": "MULTIMEDIA_ARTIST",
        "34364": "ANIMATOR",
        "34369": "OTHER_GRAPHIC_AND_MULTIMEDIA_DESIGNERS_AND_ARTISTS",
        "34391": "COMMERCIAL_ARTIST",
        "34392": "TATTOOIST",
        "34399": "OTHER_ARTISTIC_AND_CULTURAL_ASSOCIATE_PROFESSIONALS_NEC",
        "34411": "RADIO_PRESENTER",
        "34412": "TELEVISION_PRESENTER",
        "34413": "DUBBING_ARTISTE",
        "34414": "DISC_JOCKEY",
        "34419": "OTHER_RADIO_AND_TELEVISION_PRESENTERS_AND_RELATED_ASSOCIATE_PROFESSIONALS",
        "34421": "CLOWN",
        "34422": "MAGICIAN",
        "34423": "ACROBAT",
        "34424": "AERIALIST",
        "34429": "OTHER_CLOWNS_MAGICIANS_AND_RELATED_ASSOCIATE_PROFESSIONALS",
        "35110": "COMPUTER_SYSTEMS_OPERATOR",
        "35120": "COMPUTER_TECHNICIAN_INCLUDING_IT_USER_HELPDESK_TECHNICIAN",
        "35140": "WEBSITE_ADMINISTRATOR_WEBMASTER",
        "35211": "BROADCASTING_OPERATIONS_TECHNICIAN",
        "35212": "VIDEO_CAMERA_OPERATOR",
        "35213": "TELEVISION_MOTION_PICTURE_CAMERA_OPERATOR",
        "35214": "RADIO_AND_TELEVISION_STUDIO_EQUIPMENT_OPERATOR",
        "35215": "SOUND_RECORDING_EQUIPMENT_OPERATOR",
        "35219": "OTHER_BROADCASTING_TECHNICIANS_AND_AUDIO_VISUAL_OPERATORS",
        "35220": "TELECOMMUNICATIONS_TECHNICIAN",
        "35231": "TELECOMMUNICATIONS_SERVICE_SUPERVISOR",
        "35232": "RADIO_TELEPHONE_OPERATOR_LAND_BASED",
        "35233": "SHIPS_RADIO_OFFICER",
        "35234": "FLIGHT_RADIO_OPERATOR",
        "35239": "OTHER_TELECOMMUNICATIONS_EQUIPMENT_OPERATORS",
        "35290": "OPTICAL_AND_ELECTRONIC_EQUIPMENT_OPERATOR_NEC",
        "36100": "PRE_PRIMARY_EDUCATION_TEACHER",
        "36201": "LANGUAGE_INSTRUCTOR_EXTRACURRICULUM",
        "36202": "ART_AND_CRAFT_INSTRUCTOR_EXTRACURRICULUM",
        "36203": "INFORMATION_TECHNOLOGY_TRAINER_EXTRACURRICULUM",
        "36204": "MUSIC_INSTRUCTOR_EXTRACURRICULUM",
        "36205": "DANCE_INSTRUCTOR_EXTRACURRICULUM",
        "36206": "SPEECH_AND_DRAMA_INSTRUCTOR_EXTRACURRICULUM",
        "36209": "OTHER_EXTRACURRICULUM_INSTRUCTORS",
        "36910": "PRIVATE_TUTOR_ACADEMIC",
        "36991": "RELIEF_TEACHER",
        "36999": "OTHER_TEACHING_ASSOCIATE_PROFESSIONALS_NEC",
        "39101": "TRANSLATOR",
        "39102": "INTERPRETER",
        "39910": "NON_ORDAINED_RELIGIOUS_ASSOCIATE_PROFESSIONAL",
        "39990": "OTHER_ASSOCIATE_PROFESSIONALS_NEC",
        "40000": "CLERICAL_SUPERVISOR",
        "41101": "OFFICE_CLERK_GENERAL",
        "41102": "FILING_AND_COPYING_CLERK",
        "41103": "PERSONNEL_HUMAN_RESOURCE_CLERK",
        "41109": "OTHER_ADMINISTRATIVE_CLERKS_EG_PUBLIC_RELATIONS_CLERK",
        "41201": "SECRETARY",
        "41202": "VERBATIM_REPORTER",
        "41311": "STENOGRAPHER",
        "41312": "TYPIST",
        "41319": "OTHER_WORD_PROCESSORS_AND_RELATED_OPERATORS",
        "41320": "DATA_ENTRY_CLERK",
        "42111": "BANK_TELLER",
        "42112": "POSTAL_SERVICE_COUNTER_CLERK",
        "42113": "MONEY_CHANGER",
        "42119": "OTHER_TELLERS_AND_COUNTER_CLERKS",
        "42131": "PAWNBROKER",
        "42132": "MONEYLENDER",
        "42141": "BILL_COLLECTOR",
        "42149": "OTHER_BILL_COLLECTORS_AND_RELATED_WORKERS",
        "42210": "TRAVEL_AGENCY_SERVICE_CLERK",
        "42230": "TELEPHONE_OPERATOR",
        "42241": "RECEPTIONIST_GENERAL",
        "42242": "HOTEL_RECEPTIONIST",
        "42243": "MEDICAL_DENTAL_RECEPTIONIST",
        "42244": "AIRPORT_RECEPTIONIST_CLERK",
        "42245": "CUSTOMER_SERVICE_CLERK",
        "42246": "CONTACT_CENTRE_INFORMATION_CLERK",
        "42249": "OTHER_RECEPTIONISTS_AND_INFORMATION_CLERKS",
        "42290": "CLIENT_INFORMATION_CLERK_NEC",
        "43111": "BOOKKEEPER",
        "43112": "LEDGER_AND_ACCOUNTS_CLERK",
        "43113": "AUDIT_CLERK",
        "43114": "PAYROLL_WAGES_CLERK",
        "43115": "BILLING_CLERK",
        "43116": "PURCHASING_CLERK",
        "43119": "OTHER_ACCOUNTING_CLERKS_EG_COST_CLERK",
        "43121": "BANK_OPERATIONS_CLERK",
        "43122": "INSURANCE_UNDERWRITING_CLERK",
        "43123": "SECURITIES_CLERK",
        "43129": "OTHER_FINANCE_AND_INSURANCE_CLERKS_EG_CREDIT_CLERK",
        "43141": "STATISTICAL_CLERK_GENERAL",
        "43142": "ENUMERATOR_MARKET_RESEARCH_INTERVIEWER",
        "43149": "OTHER_STATISTICAL_CLERKS",
        "43151": "DATA_PROCESSING_CONTROL_CLERK",
        "43159": "OTHER_COMPUTER_OPERATIONS_CLERKS",
        "43211": "STOCK_RECORDS_CLERK",
        "43212": "STOREKEEPER",
        "43219": "OTHER_STOCK_CLERKS",
        "43221": "MATERIAL_PLANNING_CLERK",
        "43222": "PRODUCTION_PLANNING_CLERK",
        "43229": "OTHER_PRODUCTION_CLERKS",
        "43231": "SHIPPING_CLERK",
        "43239": "OTHER_TRANSPORT_CLERKS_EG_LAND_AND_AIR_TRANSPORT",
        "44110": "LIBRARY_CLERK",
        "44170": "LEGAL_CLERK",
        "44191": "PROOFREADING_CLERK",
        "44199": "OTHER_CLERICAL_SUPPORT_WORKERS_NEC",
        "51111": "CHIEF_STEWARD_SHIP",
        "51112": "CABIN_ATTENDANT_STEWARD",
        "51121": "RAIL_STATION_SERVICE_ASSISTANT",
        "51122": "TICKET_INSPECTOR",
        "51129": "OTHER_TRANSPORT_SERVICE_INSPECTORS_AND_RELATED_WORKERS_EG_BUS_CONDUCTOR",
        "51131": "TOUR_GUIDE",
        "51132": "NATURE_GUIDE_INCLUDING_ZOO_BIRDPARK_AND_AQUARIUM",
        "51133": "THEME_PARK_GUIDE",
        "51139": "OTHER_GUIDES_EG_MUSEUM_HISTORICAL_SITES",
        "51201": "CHEF",
        "51202": "COOK",
        "51311": "CAPTAIN_WAITER_WAITER_SUPERVISOR",
        "51312": "WAITER",
        "51320": "BARTENDER",
        "51330": "BAR_LOUNGE_HOSTESS",
        "51390": "WAITER_AND_BARTENDER_NEC_EG_FOOD_CHECKER_CATERING_SERVICES",
        "51411": "HAIR_STYLIST_HAIRDRESSER",
        "51412": "BARBER",
        "51419": "OTHER_HAIR_CARE_WORKERS_EG_HAIR_THERAPIST_CONSULTANT",
        "51421": "BEAUTICIAN",
        "51422": "MANICURIST",
        "51423": "MAKE_UP_ARTIST_STAGE_FILM_AND_STUDIO",
        "51491": "MASSEUR_NON_MEDICAL_INCLUDING_FOOT_REFLEXOLOGIST",
        "51492": "SLIMMING_CONSULTANT",
        "51499": "OTHER_WELLNESS_RELATED_WORKERS_NEC",
        "51501": "HOUSEKEEPER_HOTELS_AND_OTHER_ESTABLISHMENTS",
        "51502": "HOUSE_STEWARD",
        "51503": "HOUSEKEEPING_MATRON",
        "51509": "OTHER_HOUSEKEEPERS_AND_RELATED_WORKERS_EG_PERSONAL_BUTLER",
        "51601": "POSTAL_COURIER_SERVICE_SUPERVISOR",
        "51602": "POSTMAN",
        "51603": "PROCESS_SERVER",
        "51604": "DESPATCH_WORKER",
        "51609": "OTHER_MAIL_DISTRIBUTION_WORKERS_EG_MAIL_SORTER",
        "51701": "GAMING_SUPERVISOR",
        "51702": "BOOKMAKER_CROUPIER_CASINO_DEALER_AND_RELATED_GAMING_WORKER",
        "51910": "ASTROLOGER_FORTUNE_TELLER_AND_RELATED_WORKER",
        "51931": "UNDERTAKER",
        "51932": "EMBALMER",
        "51941": "PET_GROOMER",
        "51942": "KEEPER_TRAINER_IN_ZOOLOGICAL_BIRD_AND_AQUATIC_PARKS",
        "51943": "KEEPER_TRAINER_IN_CROCODILE_FARM",
        "51944": "HORSE_TRAINER",
        "51945": "DOG_TRAINER",
        "51949": "OTHER_ANIMAL_BIRD_KEEPERS_AND_ANIMAL_CARE_WORKERS",
        "51950": "DRIVING_INSTRUCTOR_TESTER",
        "51991": "SOCIAL_ESCORT",
        "51999": "OTHER_PERSONAL_SERVICE_WORKERS_NEC",
        "52110": "HAWKER_STALL_HOLDER_EXCLUDING_PREPARED_FOOD_OR_DRINKS",
        "52120": "HAWKER_STALL_HOLDER_PREPARED_FOOD_OR_DRINKS",
        "52130": "NEWSVENDOR",
        "52190": "OTHER_STALL_SALES_WORKERS",
        "52201": "SALES_SUPERVISOR",
        "52202": "SHOP_SALES_ASSISTANT",
        "52301": "CAGE_COUNT_SUPERVISOR",
        "52302": "CASHIER_GENERAL",
        "52303": "OFFICE_CASHIER",
        "52309": "OTHER_CASHIERS_TICKET_AND_RELATED_CLERKS",
        "52411": "FASHION_MODEL",
        "52419": "OTHER_MODELS_EG_ARTISTS_MODEL",
        "52421": "SALES_DEMONSTRATOR",
        "52422": "SALESPERSON_DOOR_TO_DOOR",
        "52440": "TELEMARKETER",
        "52491": "PETROL_STATION_ATTENDANT",
        "52492": "FOOD_SERVICE_COUNTER_ATTENDANT",
        "52499": "SALES_WORKER_NEC_EG_SHIP_CHANDLER",
        "53111": "BABYSITTER_HOUSEHOLD",
        "53112": "CONFINEMENT_NANNY",
        "53113": "CHILD__AFTER_SCHOOL_CARE_CENTRE_WORKER",
        "53114": "CHILD_YOUTH_RESIDENTIAL_CARE_ASSISTANT",
        "53120": "TEACHERS_AIDE",
        "53201": "HEALTHCARE_ASSISTANT",
        "53209": "OTHER_PERSONAL_CARE_WORKER_EG_OLD_FOLKS_HOME",
        "54110": "FIRE_FIGHTING_AND_RESCUE_OFFICER",
        "54121": "POLICE_OFFICER",
        "54122": "NARCOTICS_OFFICER",
        "54123": "AUXILIARY_POLICE_OFFICER",
        "54130": "PRISON_OFFICER",
        "54140": "PRIVATE_SECURITY_OFFICER",
        "54150": "LIFEGUARD",
        "54191": "PRIVATE_INVESTIGATOR",
        "54192": "INDUSTRIAL_INVESTIGATOR",
        "54193": "INSURANCE_INVESTIGATOR",
        "54194": "PARK_RANGER",
        "54199": "OTHER_PROTECTIVE_SERVICES_AND_RELATED_WORKERS_NEC",
        "59001": "CINEMA_PROJECTIONIST",
        "59009": "OTHER_SERVICE_WORKERS_NEC_EG_MICROPHONE_OPERATOR",
        "61111": "HYDROPONICS_FARM_WORKER",
        "61112": "MUSHROOM_FARM_WORKER",
        "61119": "OTHER_VEGETABLE_FARM_WORKERS",
        "61131": "FLOWER_ORCHID_FARM_WORKER",
        "61132": "NURSERY_WORKER",
        "61139": "OTHER_HORTICULTURAL_AND_NURSERY_FARM_WORKERS",
        "61210": "LIVESTOCK_DAIRY_FARM_WORKER",
        "61221": "POULTRY_FARM_WORKER_GENERAL",
        "61222": "POULTRY_HATCHERY_WORKER",
        "61223": "POULTRY_INSEMINATOR",
        "61229": "OTHER_POULTRY_FARM_WORKERS_EG_POULTRY_VACCINATOR",
        "61900": "AGRICULTURAL_WORKER_NEC",
        "62211": "FISH_PRAWN_FARM_WORKER",
        "62212": "AQUARIUM_FISH_FARM_WORKER",
        "62213": "CROCODILE_FARM_WORKER",
        "62219": "OTHER_AQUATIC_LIFE_CULTIVATION_WORKERS_EG_OYSTER_FARM_WORKER",
        "62220": "COASTAL_WATERS_DEEP_SEA_FISHERY_WORKER",
        "71000": "SUPERVISOR_GENERAL_FOREMAN_BUILDING_AND_RELATED_TRADES",
        "71120": "BRICKLAYER_BLOCKLAYER",
        "71131": "STONE_CUTTER_CARVER",
        "71132": "STONEMASON",
        "71141": "REINFORCED_CONCRETER_GENERAL",
        "71142": "CONCRETE_FORM_WORKER",
        "71143": "CEMENT_FINISHER_SCREEDER",
        "71144": "CEMENTER_PETROLEUM_AND_GAS_WELLS",
        "71149": "OTHER_CONCRETE_PLACERS_CONCRETE_FINISHERS_AND_RELATED_WORKERS",
        "71151": "CARPENTER",
        "71152": "JOINER",
        "71191": "SCAFFOLDER",
        "71192": "DEMOLITION_WORKER",
        "71193": "CLADDING_CURTAIN_WALL_ERECTOR",
        "71199": "OTHER_BUILDING_FRAME_AND_RELATED_TRADES_WORKERS_NEC_EG_STEEPLEJACK",
        "71210": "ROOFER",
        "71220": "FLOOR_WALL_TILER",
        "71230": "PLASTERER",
        "71241": "BUILDING_INSULATOR",
        "71242": "BOILER_PIPE_INSULATOR",
        "71243": "REFRIGERATION_AIR_CONDITIONING_EQUIPMENT_INSULATOR",
        "71244": "REFRACTORY_WORKER",
        "71249": "OTHER_INSULATION_WORKERS",
        "71250": "GLAZIER",
        "71261": "PLUMBER",
        "71262": "PIPE_FITTER",
        "71263": "PIPE_DRAIN_LAYER",
        "71271": "AIR_CONDITIONING__REFRIGERATION_EQUIPMENT_MECHANICS",
        "71272": "AIR_CONDITIONING_REFRIGERATION_PLANT_INSTALLER",
        "71290": "BUILDING_FINISHER_AND_RELATED_TRADES_WORKER_NEC",
        "71311": "BUILDING_PAINTER",
        "71312": "WALL_CEILING_PAPERHANGER",
        "71321": "STRUCTURAL_STEEL_SHIP_PAINTER",
        "71322": "MOTOR_VEHICLE_SPRAY_PAINTER",
        "71323": "SIGN_PAINTER",
        "71324": "SPRAY_PAINTER_EXCEPT_SHIPS_MOTOR_VEHICLES_AND_SIGNS",
        "71329": "OTHER_PAINTERS_AND_RELATED_WORKERS",
        "71331": "BUILDING_MAINTENANCE_WORKER",
        "71332": "BUILDING_STRUCTURE_CLEANER_AND_RELATED_WORKER",
        "72000": "SUPERVISOR_GENERAL_FOREMAN_METAL_MACHINERY_AND_RELATED_TRADES",
        "72111": "METAL_MOULDER",
        "72112": "COREMAKER",
        "72121": "WELDER",
        "72122": "FLAME_CUTTER",
        "72131": "SHEET_METAL_WORKER_GENERAL",
        "72132": "BOILERMAKER",
        "72133": "PANEL_BEATER",
        "72139": "OTHER_SHEET_METAL_WORKERS",
        "72141": "STRUCTURAL_STEEL_WORKER_WORKSHOP_FABRICATOR",
        "72142": "REINFORCING_IRON_WORKER_STEEL_REINFORCEMENT_WORKER",
        "72143": "STRUCTURAL_STEEL_ERECTOR",
        "72144": "METAL_SHIPWRIGHT",
        "72145": "SHIP_PLATER",
        "72146": "MOULD_LOFTER",
        "72149": "OTHER_STRUCTURAL_METAL_PREPARERS_AND_ERECTORS",
        "72151": "HOISTING_EQUIPMENT_RIGGER_GENERAL",
        "72152": "ROPE_AND_CABLE_SPLICER_GENERAL",
        "72153": "HOISTING_EQUIPMENT_RIGGER_CONSTRUCTION",
        "72154": "SHIP_RIGGER",
        "72155": "AIRCRAFT_RIGGER",
        "72156": "OIL_AND_GAS_WELL_DRILLING_RIGGER",
        "72159": "OTHER_RIGGERS_AND_CABLE_SPLICERS",
        "72211": "BLACKSMITH_GENERAL",
        "72212": "FORGING_PRESS_OPERATOR",
        "72219": "OTHER_BLACKSMITHS_HAMMERSMITHS_AND_FORGING_PRESS_WORKERS",
        "72221": "TOOL_AND_DIE_MAKER",
        "72222": "JIG_AND_GAUGE_MAKER",
        "72223": "METAL_PATTERN_MAKER",
        "72224": "LOCKSMITH",
        "72229": "OTHER_TOOLMAKERS_AND_RELATED_WORKERS",
        "72241": "BUFFING_POLISHING_MACHINE_OPERATOR",
        "72242": "TOOL_GRINDER_MACHINE_TOOLS",
        "72249": "OTHER_METAL_POLISHERS_GRINDERS_AND_TOOL_SHARPENERS",
        "72311": "MOTOR_VEHICLE_MECHANIC",
        "72312": "MOTOR_VEHICLE_BODY_BUILDER",
        "72321": "AIRCRAFT_ENGINE_MECHANIC",
        "72322": "AIRCRAFT_ENGINE_FITTER",
        "72331": "MACHINERY_MECHANIC_GENERAL",
        "72332": "MACHINERY_FITTER_GENERAL",
        "72333": "INDUSTRIAL_OFFICE_MACHINERY_MECHANIC",
        "72334": "MARINE_ENGINE_FITTER",
        "72335": "MACHINERY_ERECTOR_INSTALLER",
        "72339": "OTHER_MACHINERY_MECHANICS_AND_REPAIRERS_EG_AGRICULTURAL_MACHINERY_MECHANIC_BICYCLE_REPAIRER",
        "73000": "SUPERVISOR_GENERAL_FOREMAN_PRECISION_HANDICRAFT_PRINTING_AND_RELATED_TRADES",
        "73111": "WATCH_AND_CLOCK_ASSEMBLER",
        "73112": "WATCH_AND_CLOCK_REPAIRER",
        "73113": "OPTICAL_INSTRUMENT_MAKER_REPAIRER",
        "73119": "OTHER_PRECISION_INSTRUMENT_MAKERS_AND_REPAIRERS",
        "73120": "MUSICAL_INSTRUMENT_MAKER_REPAIRER_TUNER",
        "73131": "JEWELLERY_WORKER_GENERAL",
        "73132": "GEM_SETTER_CUTTER_AND_POLISHER",
        "73133": "GOLDSMITH_SILVERSMITH",
        "73134": "JEWELLERY_ENGRAVER",
        "73139": "OTHER_JEWELLERY_AND_PRECIOUS_METAL_WORKERS",
        "73141": "POTTERY_WORKER",
        "73142": "BRICK_AND_TILE_MOULDER",
        "73149": "OTHER_POTTERS_AND_RELATED_WORKERS",
        "73151": "GLASS_BLOWER",
        "73152": "GLASS_LENS_MOULDER",
        "73153": "OPTICAL_GLASS_CUTTER",
        "73154": "LENS_GRINDING_MACHINE_OPERATOR",
        "73155": "LENS_POLISHING_MACHINE_OPERATOR",
        "73159": "OTHER_GLASS_MAKERS_CUTTERS_GRINDERS_AND_FINISHERS",
        "73161": "GLASS_ENGRAVER_ETCHER",
        "73162": "GLASS_AND_CERAMIC_PAINTER_DECORATOR",
        "73169": "OTHER_ENGRAVERS_AND_RELATED_DECORATIVE_PAINTERS",
        "73211": "COMPOSITOR_TYPESETTER",
        "73212": "STEREOTYPER",
        "73213": "ELECTROTYPER",
        "73214": "PHOTO_ENGRAVER",
        "73215": "PHOTOGRAVURE_CAMERAMAN",
        "73216": "PHOTOGRAVURE_RETOUCHER",
        "73217": "PHOTOGRAVURE_ETCHER",
        "73219": "OTHER_PRE_PRESS_TRADES_WORKERS",
        "73221": "SILK_SCREEN_BLOCK_TEXTILE_PRINTER",
        "73229": "OTHER_PRINTERS",
        "74000": "SUPERVISOR_GENERAL_FOREMAN_ELECTRICAL_AND_ELECTRONIC_TRADES",
        "74110": "ELECTRICIAN",
        "74121": "ELECTRICAL_FITTER_GENERAL",
        "74122": "ELECTRICAL_LIFT_ESCALATOR_AND_RELATED_EQUIPMENT_FITTER",
        "74123": "ELECTRICAL_HOUSEHOLD_APPLIANCE_REPAIRER",
        "74129": "OTHER_ELECTRICAL_MECHANICS_AND_FITTERS",
        "74131": "ELECTRICAL_LINE_INSTALLER",
        "74132": "ELECTRIC_CABLE_JOINTER",
        "74139": "OTHER_ELECTRICAL_LINE_INSTALLERS_AND_REPAIRERS",
        "74211": "ELECTRONICS_FITTER_GENERAL",
        "74212": "CONSUMER_AUDIO_AND_VIDEO_EQUIPMENT_MECHANIC",
        "74219": "OTHER_ELECTRONICS_FITTERS",
        "74221": "RADIO_TELEVISION_AND_RADAR_BROADCASTING_TRANSMITTING_EQUIPMENT_FITTER",
        "74222": "COMPUTER_AND_RELATED_ELECTRONIC_EQUIPMENT_MECHANIC",
        "74223": "TELECOMMUNICATIONS_LINEMAN",
        "74224": "TELECOMMUNICATIONS_INSTALLER_SERVICER",
        "75000": "SUPERVISOR_GENERAL_FOREMAN_FOOD_PROCESSING_WOODWORKING_GARMENT_LEATHER_AND_RELATED_TRADES",
        "75111": "SLAUGHTERER",
        "75119": "OTHER_MEAT_AND_FISH_PREPARERS",
        "75121": "BAKER_GENERAL",
        "75122": "BREAD_BAKER",
        "75123": "PASTRY_AND_CONFECTIONERY_MAKER",
        "75151": "COFFEE_AND_TEA_TASTER",
        "75159": "OTHER_FOOD_AND_BEVERAGE_TASTERS_AND_GRADERS",
        "75190": "FOOD_PROCESSING_AND_RELATED_TRADES_WORKER_NEC_EG_FRUIT_PICKLER",
        "75211": "KILN_DRIER",
        "75212": "WOOD_TREATING_WORKER",
        "75219": "OTHER_WOOD_TREATERS",
        "75221": "CABINET_AND_FURNITURE_MAKER",
        "75222": "WOOD_FURNITURE_FINISHER",
        "75223": "PICTURE_FRAME_MAKER",
        "75229": "OTHER_CABINET_MAKERS_AND_WOOD_RELATED_TRADES_WORKERS",
        "75291": "RATTAN_FURNITURE_MAKER",
        "75299": "OTHER_FURNITURE_MAKERS_AND_RELATED_TRADES_WORKERS_NEC",
        "75310": "TAILOR_DRESSMAKER",
        "75321": "GARMENT_CUTTER",
        "75322": "GARMENT_PATTERN_MAKER",
        "75323": "GARMENT_MARKER",
        "75329": "OTHER_GARMENT_AND_RELATED_PATTERN_MAKERS_AND_CUTTERS",
        "75341": "FURNITURE_UPHOLSTERER",
        "75342": "VEHICLE_UPHOLSTERER",
        "75343": "MATTRESS_MAKER",
        "75349": "OTHER_UPHOLSTERERS_AND_RELATED_WORKERS",
        "75361": "SHOEMAKER",
        "75362": "ORTHOPAEDIC_FOOTWEAR_MAKER",
        "75363": "COBBLER",
        "75364": "LEATHER_GOODS_MAKER_ASSEMBLER",
        "75369": "OTHER_SHOEMAKERS_AND_RELATED_WORKERS",
        "75390": "GARMENT_AND_RELATED_TRADES_WORKER_NEC_EG_FELLMONGER_TENT_SEWER_UMBRELLA_MAKER",
        "75401": "FUMIGATORS_PEST_AND_WEED_CONTROLLERS",
        "75402": "UNDERWATER_DIVER",
        "75409": "OTHER_CRAFT_AND_RELATED_WORKERS_NEC",
        "81000": "STATIONARY_PLANT_AND_MACHINE_SUPERVISOR_GENERAL_FOREMAN",
        "81131": "WELL_DRILLER_PETROLEUM_AND_GAS_WELLS",
        "81132": "WELL_DRILLER_BORER_EXCEPT_OIL_AND_GAS_WELLS",
        "81133": "DEEP_BORING_MACHINE_OPERATOR",
        "81139": "OTHER_WELL_DRILLERS_AND_BORERS_AND_OTHER_MINING_RELATED_WORKERS",
        "81141": "PRECAST_CONCRETE_PRODUCT_MAKING_MACHINE_OPERATOR",
        "81142": "ASBESTOS_CEMENT_PRODUCT_MAKING_MACHINE_OPERATOR",
        "81143": "TERRAZZO_TILE_MAKING_MACHINE_OPERATOR",
        "81144": "CONCRETE_MIXING_PLANT_OPERATOR_INCLUDING_CONCRETE_MIXER_OPERATOR",
        "81145": "CONCRETE_PUMP_OPERATOR",
        "81149": "OTHER_MINERAL_PRODUCTS_AND_PROCESSING_MACHINE_OPERATORS",
        "81211": "ORE_AND_METAL_FURNACE_OPERATOR_INCLUDING_FURNACEMAN",
        "81212": "CENTRIFUGAL_CASTING_MACHINE_OPERATOR",
        "81213": "DIE_CASTING_MACHINE_OPERATOR",
        "81214": "CONTINUOUS_ROD_CASTING_MACHINE_OPERATOR_NON_FERROUS_METAL",
        "81215": "METAL_ROLLING_MILL_WORKER",
        "81219": "OTHER_METAL_MELTERS_CASTERS_AND_ROLLING_MILL_OPERATORS",
        "81220": "METAL_HEAT_TREATING_PLANT_OPERATOR",
        "81231": "WIRE_DRAWER",
        "81232": "SEAMLESS_PIPE_AND_TUBE_DRAWER",
        "81233": "EXTRUDER_OPERATOR_METAL",
        "81239": "OTHER_METAL_DRAWERS_AND_EXTRUDERS",
        "81241": "ELECTRO_PLATER",
        "81242": "HOT_DIP_PLATER",
        "81243": "WIRE_COATING_MACHINE_OPERATOR",
        "81244": "GALVANISER",
        "81245": "METAL_SPRAYER",
        "81246": "ANODISER",
        "81247": "SANDBLASTER_SHOTBLASTER_METAL",
        "81248": "METAL_CLEANER",
        "81249": "OTHER_METAL_FINISHING_PLATING_AND_COATING_MACHINE_OPERATORS",
        "81251": "METALWORKING_MACHINE_SETTER_OPERATOR_GENERAL",
        "81252": "LATHE_SETTER_OPERATOR",
        "81253": "MILLING_MACHINE_SETTER_OPERATOR",
        "81254": "PLANING_MACHINE_SETTER_OPERATOR",
        "81255": "BORING_DRILLING_MACHINE_SETTER_OPERATOR",
        "81256": "SHAPING_AND_HONING_MACHINE_SETTER_OPERATOR",
        "81257": "PRECISION_GRINDING_MACHINE_SETTER_OPERATOR",
        "81258": "NUMERICAL_CONTROL_MACHINE_SETTER_OPERATOR",
        "81259": "OTHER_MACHINE_TOOL_SETTER_OPERATORS",
        "81311": "CRUSHING_GRINDING_CHEMICAL_MIXING_EQUIPMENT_OPERATOR",
        "81312": "CHEMICAL_HEAT_TREATING_PLANT_OPERATOR",
        "81313": "CHEMICAL_FILTERING_AND_SEPARATING_EQUIPMENT_OPERATOR",
        "81314": "CHEMICAL_STILL_REACTOR_OPERATOR",
        "81315": "SYNTHETIC_FIBRE_MAKING_MACHINE_OPERATOR",
        "81319": "OTHER_CHEMICAL_PROCESSING_AND_CHEMICAL_PRODUCTS_PLANT_AND_MACHINE_OPERATORS",
        "81320": "PHOTOGRAPHIC_PRODUCTS_MACHINE_OPERATOR",
        "81331": "PHARMACEUTICAL_PRODUCTS_MACHINE_OPERATOR",
        "81332": "SOAP_MAKING_MACHINE_OPERATOR",
        "81339": "OTHER_TOILETRY_PRODUCTS_MACHINE_OPERATORS",
        "81390": "CHEMICAL_PROCESSING_CHEMICAL_AND_PHOTOGRAPHIC_PRODUCTS_PLANT_AND_MACHINE_OPERATOR_NEC",
        "81411": "RUBBER_MILLMAN",
        "81412": "RUBBER_LAMINATING_MACHINE_OPERATOR",
        "81419": "OTHER_RUBBER_PRODUCTS_MACHINE_OPERATORS",
        "81420": "PLASTIC_PRODUCTS_MACHINE_OPERATOR",
        "81431": "CARTON_PAPER_BOX_MAKING_MACHINE_OPERATOR",
        "81432": "PAPER_PRODUCT_MAKING_MACHINE_OPERATOR",
        "81439": "OTHER_PAPER_AND_PAPERBOARD_PRODUCTS_MACHINE_OPERATORS",
        "81511": "SPINNER_THREAD_AND_YARN",
        "81512": "WINDER_THREAD_AND_YARN",
        "81521": "WEAVING_MACHINE_OPERATOR",
        "81522": "KNITTING_MACHINE_OPERATOR",
        "81531": "SEWING_MACHINE_OPERATOR",
        "81532": "MACHINE_EMBROIDERER",
        "81541": "TEXTILE_BLEACHING_MACHINE_OPERATOR",
        "81542": "DYEING_MACHINE_OPERATOR",
        "81543": "TEXTILE_WASHING_SHRINKING_MACHINE_OPERATOR",
        "81549": "OTHER_BLEACHING_DYEING_AND_FABRIC_CLEANING_MACHINE_OPERATORS",
        "81591": "LAUNDRY_AND_DRY_CLEANING_WORKER_MACHINE_NON_HOUSEHOLD",
        "81599": "OTHER_TEXTILE_FUR_AND_LEATHER_PRODUCTS_MACHINE_OPERATORS_NEC_EG_SHOEMAKING_AND_RELATED_MACHINE_OPERATORS",
        "81611": "SAUSAGE_MAKING_MACHINE_OPERATOR",
        "81619": "OTHER_MEAT_AND_FISH_PROCESSING_MACHINE_OPERATORS",
        "81621": "DAIRY_PRODUCT_PROCESSING_MACHINE_OPERATOR_GENERAL",
        "81622": "DAIRY_PRODUCT_PASTEURISING_MACHINE_OPERATOR",
        "81623": "BUTTER_MAKING_MACHINE_OPERATOR",
        "81624": "ICE_CREAM_MAKING_MACHINE_OPERATOR",
        "81625": "CHOCOLATE_MAKING_MACHINE_OPERATOR",
        "81626": "CONFECTIONERY_MAKING_MACHINE_OPERATOR",
        "81629": "OTHER_DAIRY_AND_CONFECTIONERY_PRODUCTS_MACHINE_OPERATORS",
        "81630": "GRAIN_SPICE_MILLING_MACHINE_OPERATOR",
        "81641": "BISCUIT_MAKING_MACHINE_OPERATOR",
        "81642": "MACARONI_NOODLE_VERMICELLI_MAKING_MACHINE_OPERATOR",
        "81649": "OTHER_BAKED_AND_CEREAL_PRODUCTS_MACHINE_OPERATORS",
        "81651": "FRUIT_PRESS_OPERATOR",
        "81652": "OIL_PRESSMAN_EDIBLE_OILS",
        "81653": "REFINING_MACHINE_OPERATOR_OILS_AND_FATS",
        "81654": "HYDROGENATION_OPERATOR_OILS_AND_FATS",
        "81655": "SAUCE_MAKING_MACHINE_OPERATOR",
        "81659": "OTHER_FRUIT_VEGETABLE_AND_NUT_PROCESSING_MACHINE_OPERATORS",
        "81660": "SUGAR_PROCESSING_AND_REFINING_MACHINE_OPERATOR",
        "81671": "GERMINATION_WORKER_MALTING",
        "81672": "KILNMAN_MALTING",
        "81673": "BREWER",
        "81674": "FERMENTING_ROOM_MAN",
        "81675": "PASTEURISER_ATTENDANT_MALT_LIQUOR",
        "81676": "SYRUP_MAKING_MACHINE_OPERATOR",
        "81677": "COFFEE_TEA_BLENDING_MACHINE_OPERATOR",
        "81678": "COFFEE_COCOA_BEAN_ROASTING_AND_GRINDING_MACHINE_OPERATOR",
        "81679": "OTHER_BREWERS_AND_WINE_AND_OTHER_BEVERAGE_MACHINE_OPERATORS",
        "81681": "CIGARETTE_MAKING_MACHINE_OPERATOR",
        "81689": "OTHER_TOBACCO_PRODUCTS_MACHINE_OPERATORS",
        "81691": "BEAN_CURD_MAKING_MACHINE_OPERATOR",
        "81692": "ICE_MAKING_MACHINE_OPERATOR",
        "81693": "FEED_MIXING_MACHINE_OPERATOR",
        "81694": "FISH_FEED_MAKING_MACHINE_OPERATOR",
        "81699": "OTHER_FOOD_AND_RELATED_PRODUCTS_MACHINE_OPERATORS_NEC",
        "81711": "PAPER_PULP_PLANT_OPERATOR",
        "81712": "PAPERMAKING_MACHINE_OPERATOR",
        "81719": "OTHER_PULP_AND_PAPERMAKING_PLANT_OPERATORS",
        "81721": "SAWYER",
        "81722": "VENEER_CUTTER",
        "81723": "PLYWOOD_CORE_LAYER",
        "81724": "PLYWOOD_PRESS_OPERATOR",
        "81725": "WOOD_GRADER",
        "81729": "OTHER_WOOD_PROCESSING_PLANT_OPERATORS",
        "81731": "WOODWORKING_MACHINE_SETTER_OPERATOR",
        "81732": "PRECISION_WOOD_SAWYER",
        "81739": "OTHER_WOOD_PRODUCTS_MACHINE_OPERATORS",
        "81811": "GLASS_CERAMICS_KILN_MACHINE_OPERATOR",
        "81812": "FIBREGLASS_MAKER",
        "81819": "OTHER_GLASS_AND_CERAMICS_PLANT_OPERATORS",
        "81821": "BOILER_FIREMAN",
        "81822": "SHIPS_FIREMAN",
        "81823": "SHIPS_OILER_GREASER",
        "81829": "OTHER_STEAM_TURBINE_BOILER_AND_ENGINE_OPERATORS",
        "81830": "PACKING_BOTTLING_LABELLING_MACHINE_OPERATOR",
        "81841": "PRINTING_MACHINE_OPERATOR",
        "81842": "BOOKBINDING_MACHINE_OPERATOR",
        "81843": "BOOK_EMBOSSING_MACHINE_OPERATOR",
        "81849": "OTHER_PRINTING_BINDING_AND_RELATED_MACHINE_OPERATORS",
        "81851": "STATIONARY_ENGINE_OPERATOR_GENERAL",
        "81852": "COMPRESSOR_OPERATOR",
        "81853": "PUMPING_STATION_OPERATOR",
        "81854": "WATER_TREATMENT_MACHINE_OPERATOR_WATERWORKS",
        "81855": "REFRIGERATION_SYSTEM_OPERATOR",
        "81859": "OTHER_WATER_TREATMENT_AND_RELATED_MACHINE_OPERATORS",
        "81860": "POWER_GENERATING_PLANT_OPERATOR",
        "81871": "PETROLEUM_AND_NATURAL_GAS_REFINING_PLANT_OPERATOR",
        "81872": "CYLINDER_FILLER_TESTER_COMPRESSED_AND_LIQUEFIED_GASES",
        "81880": "AUTOMATED_ASSEMBLY_LINE_INDUSTRIAL_ROBOT_OPERATOR",
        "81890": "STATIONARY_PLANT_AND_MACHINE_OPERATOR_NEC",
        "82000": "SUPERVISOR_GENERAL_FOREMAN_OF_ASSEMBLERS_AND_QUALITY_CHECKERS",
        "82121": "ELECTRICAL_EQUIPMENT_COMPONENT_ASSEMBLER",
        "82122": "ELECTRONIC_EQUIPMENT_COMPONENT_ASSEMBLER",
        "82123": "BATTERY_ASSEMBLER",
        "82131": "ELECTRICAL_ELECTRONIC_PRODUCTS_QUALITY_CHECKER_AND_TESTER",
        "82132": "MECHANICAL_PRODUCTS_QUALITY_CHECKER_AND_TESTER",
        "82139": "OTHER_QUALITY_CHECKERS_AND_TESTERS",
        "82191": "TOY_ASSEMBLER",
        "82199": "OTHER_ASSEMBLERS_NEC_EG_PLASTIC_PRODUCTS_ASSEMBLER_RUBBER_PRODUCTS_ASSEMBLER",
        "83000": "MOBILE_MACHINERY_SUPERVISOR_AND_GENERAL_FOREMAN",
        "83110": "MRT_TRAIN_OPERATOR",
        "83121": "RAILWAY_BRAKEMAN_SIGNALMAN_SHUNTER",
        "83129": "OTHER_RAILWAY_BRAKERS_AND_RELATED_WORKERS",
        "83210": "MOTORCYCLE_DELIVERY_MAN",
        "83221": "TAXI_DRIVER",
        "83222": "CHAUFFEUR",
        "83223": "VAN_DRIVER",
        "83291": "AMBULANCE_DRIVER",
        "83299": "OTHER_CAR_AND_LIGHT_GOODS_VEHICLE_DRIVERS_NEC",
        "83311": "BUS_DRIVER",
        "83312": "TRAM_DRIVER",
        "83321": "LORRY_DRIVER",
        "83322": "TRAILER_TRUCK_DRIVER",
        "83323": "FIRE_ENGINE_DRIVER",
        "83324": "AIRPORT_MOBILE_EQUIPMENT_DRIVER",
        "83329": "OTHER_HEAVY_TRUCK_AND_LORRY_DRIVERS",
        "83421": "EXCAVATING_TRENCH_DIGGING_MACHINE_OPERATOR",
        "83422": "BULLDOZER_OPERATOR",
        "83423": "DREDGE_OPERATOR",
        "83424": "PILE_DRIVER_DRILLING_MACHINE_OPERATOR",
        "83425": "ROAD_MAKING_MACHINE_OPERATOR",
        "83426": "TUNNELLING_MACHINE_OPERATOR_INCLUDING_PIPE_JACKING_MACHINE_OPERATOR",
        "83429": "OTHER_EARTH_MOVING_AND_RELATED_MACHINERY_OPERATORS",
        "83431": "CRANE_HOIST_OPERATOR_GENERAL",
        "83432": "CRANE_OPERATOR_PORT",
        "83439": "OTHER_CRANE_HOIST_AND_RELATED_EQUIPMENT_OPERATORS",
        "83441": "FORK_LIFT_TRUCK_OPERATOR",
        "83449": "OTHER_LIFTING_TRUCK_OPERATORS",
        "83490": "MOBILE_MACHINERY_OPERATOR_NEC_EG_MOBILE_FARM_PLANT_OPERATOR",
        "83501": "HELMSMAN_STEERSMAN",
        "83502": "DECKHAND_INCLUDING_LIGHTERMAN",
        "83509": "OTHER_SHIPS_DECK_CREW_AND_RELATED_WORKERS",
        "91000": "CLEANING_SUPERVISOR",
        "91121": "ROOM_STEWARD_CHAMBERMAID",
        "91122": "HOTEL_CLEANER",
        "91129": "OTHER_CLEANERS_AND_HELPERS_IN_HOTELS_AND_RELATED_ESTABLISHMENTS",
        "91131": "OFFICE_CLEANER",
        "91132": "CLEANER_INDUSTRIAL_ESTABLISHMENT",
        "91139": "CLEANER_IN_OFFICES_AND_OTHER_ESTABLISHMENTS_NEC",
        "91210": "HAND_LAUNDERER_PRESSER_NON_HOUSEHOLD",
        "91220": "MOTOR_VEHICLE_CLEANER_POLISHER",
        "91230": "WINDOW_CLEANER",
        "91291": "SHIP_SHIP_TANK_CLEANER",
        "91292": "AIRCRAFT_CLEANER",
        "91293": "RAILWAY_CARRIAGE_CLEANER_INCLUDE_MRT_LRT_AND_MONORAIL",
        "91299": "OTHER_CLEANING_WORKERS_NEC",
        "91301": "DOMESTIC_HELPER_GENERAL",
        "91302": "LAUNDERER_HOUSEHOLD",
        "91309": "OTHER_DOMESTIC_HELPERS_AND_CLEANERS",
        "92141": "GARDEN_LABOURER",
        "92142": "GRASS_CUTTER",
        "92143": "TREE_CUTTER",
        "92149": "OTHER_PARK_AND_GARDEN_MAINTENANCE_WORKERS_INCLUDING_LANDSCAPE_WORKER",
        "92190": "AGRICULTURAL_AND_FISHERY_LABOURER_AND_RELATED_WORKER_NEC_EG_FARM_LABOURER",
        "93100": "CIVIL_ENGINEERING_BUILDING_CONSTRUCTION_LABOURER",
        "93201": "HAND_PACKER",
        "93209": "MANUFACTURING_LABOURER_AND_RELATED_WORKER_NEC_EG_RUBBER_SHEETS_CLIPPER_AND_SORTER",
        "93310": "HAND_PEDAL_VEHICLE_DRIVER",
        "93331": "STEVEDORE",
        "93332": "RAILWAY_ROAD_VEHICLE_LOADER",
        "93333": "AIRCRAFT_LOADER",
        "93334": "GODOWN_LABOURER",
        "93335": "LORRY_ATTENDANT",
        "93336": "MOVER",
        "93339": "OTHER_MATERIAL_AND_FREIGHT_HANDLING_WORKERS",
        "94101": "KITCHEN_ASSISTANT",
        "94102": "FOOD_DRINK_STALL_ASSISTANT",
        "94103": "FAST_FOOD_PREPARER",
        "94104": "DISH_WASHER_PLATE_COLLECTOR",
        "96111": "GARBAGE_DISPOSAL_WORKER",
        "96112": "REFUSE_SORTER",
        "96119": "OTHER_GARBAGE_AND_RECYCLING_COLLECTORS",
        "96130": "SWEEPER_AND_RELATED_WORKER",
        "96211": "BELL_CAPTAIN",
        "96212": "BELLBOY_HOTEL_PORTER",
        "96213": "PORTER_EXCEPT_HOTEL",
        "96251": "OFFICE_LIBRARY_ATTENDANT",
        "96252": "LABORATORY_ATTENDANT",
        "96253": "HOSPITAL_CLINIC_ATTENDANT",
        "96254": "CAR_PARK_ATTENDANT",
        "96259": "OTHER_ATTENDANTS_EG_SWIMMING_POOL_ATTENDANT",
        "96261": "BUILDING_CARETAKER_WATCHMAN",
        "96262": "DOORMAN",
        "96269": "OTHER_WATCHMEN_AND_RELATED_WORKERS_EG_LIGHTHOUSE_KEEPER",
        "96291": "LEAFLET_AND_NEWSPAPER_DISTRIBUTOR_DELIVERER",
        "96292": "METER_READER_VENDING_MACHINE_COLLECTOR",
        "96293": "ODD_JOB_PERSON",
        "96299": "OTHER_ELEMENTARY_WORKERS_NEC",
    };
    occupation.map = generateTwoWayMap(codeToDesc);
})(occupation || (occupation = {}));
var countryofmarriage;
(function (countryofmarriage) {
    const codeToDesc = {
        "AB": "ARUBA",
        "AD": "ANDORRA",
        "AE": "UNITED_ARAB_EMIRATES",
        "AF": "AFGHANISTAN",
        "AG": "ANTIGUA",
        "AI": "ANGUILLA",
        "AL": "ALBANIA",
        "AM": "ARMENIA",
        "AN": "NETHERLANDS_ANTILILLES",
        "AO": "ANGOLA",
        "AR": "ARGENTINA",
        "AS": "AMERICAN_SAMOA",
        "AT": "AUSTRIA",
        "AU": "AUSTRALIA",
        "AZ": "AZERBAIJAN",
        "BA": "BOSNIA_HERZEGOVINA",
        "BB": "BARBADOS",
        "BD": "BANGLADESH",
        "BE": "BELGIUM",
        "BF": "BURKINA_FASO",
        "BG": "BULGARIA",
        "BH": "BAHRAIN",
        "BI": "BURUNDI",
        "BJ": "BENIN",
        "BL": "BELARUS",
        "BM": "BERMUDA",
        "BN": "BRUNEI",
        "BO": "BOLIVIA",
        "BQ": "BRITISH_ANTARCTIC_TERRITORY",
        "BR": "BRAZIL",
        "BS": "BAHAMAS",
        "BT": "BHUTAN",
        "BU": "MYANMAR",
        "BW": "BOTSWANA",
        "BZ": "BELIZE",
        "CA": "CANADA",
        "CB": "CROATIA",
        "CC": "COCOS_KEELING_ISLAND",
        "CD": "CHANNEL_ISLANDS",
        "CF": "CENTRAL_AFRICAN_REPUBLIC",
        "CG": "CONGO",
        "CH": "SWITZERLAND",
        "CI": "IVORY_COAST",
        "CK": "COOK_ISLANDS",
        "CL": "CHILE",
        "CM": "CAMEROON",
        "CN": "CHINA",
        "CO": "COLOMBIA",
        "CR": "COSTA_RICA",
        "CT": "CANTON_AND_ENDERBURY_ISLANDS",
        "CU": "CUBA",
        "CV": "CAPE_VERDE",
        "CX": "CHRISTMAS_ISLAND",
        "CY": "CYPRUS",
        "CZ": "CZECH_REPUBLIC",
        "DG": "GERMANY",
        "DJ": "DJIBOUTI",
        "DK": "DENMARK",
        "DM": "DOMINICA",
        "DO": "DOMINICAN_REPUBLIC",
        "DZ": "ALGERIA",
        "EC": "ECUADOR",
        "EG": "EGYPT",
        "EH": "WESTERN_SAHARA",
        "EN": "ESTONIA",
        "ER": "ERITREA",
        "ES": "SPAIN",
        "ET": "ETHIOPIA",
        "FI": "FINLAND",
        "FJ": "FIJI",
        "FK": "FALKLAND_ISLANDS",
        "FO": "FAEROE_ISLANDS",
        "FQ": "FRENCH_SOUTHERN_AND_ANTARCTIC_TERRITORIES",
        "FR": "FRANCE",
        "GA": "GABON",
        "GB": "UNITED_KINGDOM",
        "GD": "GRENADA",
        "GF": "FRENCH_GUIANA",
        "GH": "GHANA",
        "GI": "GIBRALTAR",
        "GK": "GUERNSEY",
        "GL": "GREENLAND",
        "GM": "GAMBIA",
        "GN": "GUINEA",
        "GO": "GEORGIA",
        "GP": "GUADELOUPE",
        "GQ": "EQUATORIAL_GUINEA",
        "GR": "GREECE",
        "GT": "GUATEMALA",
        "GU": "GUAM",
        "GW": "GUINEA_BISSAU",
        "GY": "GUYANA",
        "GZ": "GAZA",
        "HK": "HONG_KONG",
        "HM": "HEARD_AND_MCDONALD_ISLAND",
        "HN": "HONDURAS",
        "HS": "HONG_KONG_SAR",
        "HT": "HAITI",
        "HU": "HUNGARY",
        "HV": "UPPER_VOLTA",
        "ID": "INDONESIA",
        "IE": "IRELAND",
        "IL": "ISRAEL",
        "IN": "INDIA",
        "IO": "BRITISH_INDIAN_OCEAN_TERRITORY",
        "IQ": "IRAQ",
        "IR": "IRAN",
        "IS": "ICELAND",
        "IT": "ITALY",
        "JM": "JAMAICA",
        "JO": "JORDAN",
        "JP": "JAPAN",
        "JT": "JOHNSTON_ISLAND",
        "KA": "CAMBODIA",
        "KE": "KENYA",
        "KG": "KIRGHIZIA",
        "KI": "KIRIBATI",
        "KM": "COMOROS",
        "KN": "ST_KITTS_NEVIS",
        "KP": "KOREA_NORTH",
        "KR": "KOREA_SOUTH",
        "KS": "KYRGYZSTAN",
        "KV": "KOSOVO",
        "KW": "KUWAIT",
        "KY": "CAYMAN_ISLANDS",
        "KZ": "KAZAKHSTAN",
        "LA": "LAOS",
        "LB": "LEBANON",
        "LC": "ST_LUCIA",
        "LH": "LITHUANIA",
        "LI": "LIECHTENSTEIN",
        "LK": "SRI_LANKA",
        "LR": "LIBERIA",
        "LS": "LESOTHO",
        "LU": "LUXEMBOURG",
        "LV": "LATVIA",
        "LY": "LIBYA",
        "MA": "MOROCCO",
        "MB": "MACEDONIA",
        "MC": "MONACO",
        "MD": "MOLDOVA",
        "ME": "MAYOTTE",
        "MF": "MACAU_SAR",
        "MG": "MADAGASCAR",
        "MH": "MARSHALL_ISLANDS",
        "MI": "MIDWAY_ISLANDS",
        "MJ": "MONTENEGRO",
        "ML": "MALI",
        "MM": "ISLE_OF_MAN",
        "MN": "MONGOLIA",
        "MO": "MACAO",
        "MQ": "MARTINIQUE",
        "MR": "MAURITANIA",
        "MS": "MONTSERRAT",
        "MT": "MALTA",
        "MU": "MAURITIUS",
        "MV": "MALDIVES",
        "MW": "MALAWI",
        "MX": "MEXICO",
        "MY": "MALAYSIA",
        "MZ": "MOZAMBIQUE",
        "NA": "NAMIBIA",
        "NC": "NEW_CALEDONIA",
        "NE": "NIGER",
        "NF": "NORFOLK_ISLAND",
        "NG": "NIGERIA",
        "NI": "NICARAGUA",
        "NL": "NETHERLANDS",
        "NO": "NORWAY",
        "NP": "NEPAL",
        "NR": "NAURU",
        "NU": "NIUE_ISLAND",
        "NZ": "NEW_ZEALAND",
        "OM": "OMAN",
        "PA": "PANAMA",
        "PB": "PALESTINE",
        "PC": "PACIFIC_ISLAND_TRUST_TERRITORY",
        "PE": "PERU",
        "PF": "FRENCH_POLYNESIA",
        "PG": "PAPUA_NEW_GUINEA",
        "PH": "PHILIPPINES",
        "PK": "PAKISTAN",
        "PL": "POLAND",
        "PM": "ST_PIERRE_AND_MIQUELON",
        "PN": "PITCAIRN_ISLAND",
        "PR": "PUERTO_RICO",
        "PT": "PORTUGAL",
        "PW": "PALAU",
        "PY": "PARAGUAY",
        "PZ": "PANAMA_CANAL_ZONE",
        "QA": "QATAR",
        "RE": "REUNION",
        "RF": "RUSSIA",
        "RO": "ROMANIA",
        "RS": "SERBIA",
        "RW": "RWANDA",
        "SA": "SAUDI_ARABIA",
        "SB": "SOLOMON_ISLANDS",
        "SC": "SEYCHELLES",
        "SD": "SUDAN",
        "SE": "SWEDEN",
        "SF": "SERBIA_MONTENEGRO",
        "SG": "SINGAPORE",
        "SH": "ST_HELENA",
        "SI": "SLOVENIA",
        "SK": "SLOVAK_REPUBLIC",
        "SL": "SIERRA_LEONE",
        "SM": "SAN_MARINO",
        "SN": "SENEGAL",
        "SO": "SOMALIA",
        "SR": "SURINAME",
        "ST": "SAO_TOME_AND_PRINCIPE",
        "SV": "EL_SALVADOR",
        "SY": "SYRIA",
        "SZ": "SWAZILAND",
        "TC": "TURKS_AND_CAICOS_ISLANDS",
        "TD": "CHAD",
        "TE": "TIMOR",
        "TG": "TOGO",
        "TH": "THAILAND",
        "TI": "TAJIKISTAN",
        "TK": "TOKELAU_ISLANDS",
        "TM": "TURKMENISTAN",
        "TN": "TUNISIA",
        "TO": "TONGA",
        "TP": "EAST_TIMOR",
        "TR": "TURKEY",
        "TT": "TRINIDAD_AND_TOBAGO",
        "TV": "TUVALU",
        "TW": "TAIWAN",
        "TZ": "TANZANIA",
        "UG": "UGANDA",
        "UN": "UNKNOWN",
        "UR": "UKRAINE",
        "US": "UNITED_STATES",
        "UY": "URUGUAY",
        "UZ": "UZBEKISTAN",
        "VA": "VATICAN_CITY_STATE",
        "VC": "ST_VINCENT",
        "VE": "VENEZUELA",
        "VG": "BRITISH_VIRGIN_ISLANDS",
        "VI": "US_VIRGIN_ISLANDS",
        "VN": "VIETNAM",
        "VU": "VANUATU",
        "WF": "WALLIS_AND_FUTUNA",
        "WK": "WAKE_ISLAND",
        "WM": "SAMOA",
        "XX": "OTHERS",
        "YM": "YEMEN",
        "YU": "YUGOSLAVIA",
        "ZA": "SOUTH_AFRICA",
        "ZM": "ZAMBIA",
        "ZR": "ZAIRE",
        "ZW": "ZIMBABWE",
    };
    countryofmarriage.map = generateTwoWayMap(codeToDesc);
})(countryofmarriage || (countryofmarriage = {}));
var sex;
(function (sex) {
    const codeToDesc = {
        "F": "Female",
        "M": "Male",
        "U": "Unknown",
    };
    sex.map = generateTwoWayMap(codeToDesc);
})(sex || (sex = {}));
var comstatus;
(function (comstatus) {
    const codeToDesc = {
        "Y": "Eligible",
        "N": "Not Eligible",
    };
    comstatus.map = generateTwoWayMap(codeToDesc);
})(comstatus || (comstatus = {}));
var lifestatus;
(function (lifestatus) {
    const codeToDesc = {
        "A": "ALIVE",
        "D": "DECEASED",
    };
    lifestatus.map = generateTwoWayMap(codeToDesc);
})(lifestatus || (lifestatus = {}));
var validity;
(function (validity) {
    const codeToDesc = {
        "V": "Valid",
        "E": "Expired",
        "I": "Invalid",
        "N": "Not Holding PDL",
    };
    validity.map = generateTwoWayMap(codeToDesc);
})(validity || (validity = {}));
var hdbtype;
(function (hdbtype) {
    const codeToDesc = {
        "111": "1-ROOM FLAT (HDB)",
        "112": "2-ROOM FLAT (HDB)",
        "113": "3-ROOM FLAT (HDB)",
        "114": "4-ROOM FLAT (HDB)",
        "115": "5-ROOM FLAT (HDB)",
        "116": "EXECUTIVE FLAT (HDB)",
        "118": "STUDIO APARTMENT (HDB)",
    };
    hdbtype.map = generateTwoWayMap(codeToDesc);
})(hdbtype || (hdbtype = {}));
var residentialstatus;
(function (residentialstatus) {
    const codeToDesc = {
        "A": "Alien",
        "C": "Citizen",
        "P": "PR",
        "U": "Unknown",
        "N": "NOT APPLICABLE",
    };
    residentialstatus.map = generateTwoWayMap(codeToDesc);
})(residentialstatus || (residentialstatus = {}));
var housingtype;
(function (housingtype) {
    const codeToDesc = {
        "121": "DETACHED HOUSE",
        "122": "SEMI-DETACHED HOUSE",
        "123": "TERRACE HOUSE",
        "131": "CONDOMINIUM",
        "132": "EXECUTIVE CONDOMINIUM",
        "139": "APARTMENT",
    };
    housingtype.map = generateTwoWayMap(codeToDesc);
})(housingtype || (housingtype = {}));
var marital;
(function (marital) {
    const codeToDesc = {
        "1": "SINGLE",
        "2": "MARRIED",
        "3": "WIDOWED",
        "5": "DIVORCED",
    };
    marital.map = generateTwoWayMap(codeToDesc);
})(marital || (marital = {}));
var edulevel;
(function (edulevel) {
    const codeToDesc = {
        "0": "NO FORMAL QUALIFICATION / PRE-PRIMARY / LOWER PRIMARY",
        "1": "PRIMARY",
        "2": "LOWER SECONDARY",
        "3": "SECONDARY",
        "4": "POST-SECONDARY (NON-TERTIARY): GENERAL & VOCATION",
        "5": "POLYTECHNIC DIPLOMA",
        "6": "PROFESSIONAL QUALIFICATION AND OTHER DIPLOMA",
        "7": "BACHELOR'S OR EQUIVALENT",
        "8": "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
        "9": "MASTER'S AND DOCTORATE OR EQUIVALENT",
        "N": "MODULAR CERTIFICATION (NON-AWARD COURSES / NON-FULL QUALIFICATIONS)",
    };
    edulevel.map = generateTwoWayMap(codeToDesc);
})(edulevel || (edulevel = {}));
var passtype;
(function (passtype) {
    const codeToDesc = {
        "RPass": "Work Permit",
        "SPass": "S Pass",
        "P1Pass": "Employment Pass",
        "P2Pass": "Employment Pass",
        "QPass": "Employment Pass",
        "PEP": "Personalised Employment Pass",
        "WHP": "Work Holiday Pass",
        "TEP": "Training Employment Pass",
        "Entre": "EntrePass",
        "DP": "Dependent Pass",
        "LTVP": "Long Term Visit Pass",
        "LOC": "Letter of Consent",
        "MWP": "Miscellaneous Work Pass",
    };
    passtype.map = { codeToDesc };
})(passtype || (passtype = {}));
var status;
(function (status) {
    const codeToDesc = {
        "1": "LIVE",
        "2": "DE-REGISTERED",
    };
    status.map = generateTwoWayMap(codeToDesc);
})(status || (status = {}));
/**
 * Generates codeToDesc, which is a key: value map and descToCode, which is an inverse of codeToDesc
 * Assumes value is a string/number and can be used as a inverse key
 * @param codeToDesc
 */
function generateTwoWayMap(codeToDesc) {
    return {
        codeToDesc,
        descToCode: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["invert"])(codeToDesc),
    };
}


/***/ }),

/***/ "./src/myinfo/domain/myinfo-domain.ts":
/*!********************************************!*\
  !*** ./src/myinfo/domain/myinfo-domain.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/myinfo/domain/profilestatus-domain.ts":
/*!***************************************************!*\
  !*** ./src/myinfo/domain/profilestatus-domain.ts ***!
  \***************************************************/
/*! exports provided: ProfileStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStatusEnum", function() { return ProfileStatusEnum; });
var ProfileStatusEnum;
(function (ProfileStatusEnum) {
    ProfileStatusEnum["NO_PROFILE"] = "01";
    ProfileStatusEnum["INCOMPLETE_VERIFIED_FIELDS"] = "02";
    ProfileStatusEnum["COMPLETE_VERIFIED_FIELDS"] = "03";
    ProfileStatusEnum["UNKNOWN"] = "04";
})(ProfileStatusEnum || (ProfileStatusEnum = {}));


/***/ }),

/***/ "./src/myinfo/fake/factory/personbasic-factory.ts":
/*!********************************************************!*\
  !*** ./src/myinfo/fake/factory/personbasic-factory.ts ***!
  \********************************************************/
/*! exports provided: PersonBasicFactory, childrenbirthrecordFactory, sponsoredchildrecordFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonBasicFactory", function() { return PersonBasicFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childrenbirthrecordFactory", function() { return childrenbirthrecordFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sponsoredchildrecordFactory", function() { return sponsoredchildrecordFactory; });
/* harmony import */ var rosie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rosie */ "rosie");
/* harmony import */ var rosie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rosie__WEBPACK_IMPORTED_MODULE_0__);

const PersonBasicFactory = new rosie__WEBPACK_IMPORTED_MODULE_0__["Factory"]()
    .sequence("uinfin", (i) => ({
    "lastupdated": "2018-06-01",
    "value": "S123456" + i + "A",
    "source": "1",
    "classification": "C",
}))
    .attrs({
    "edulevel": {
        "lastupdated": "2018-05-10",
        "code": "8",
        "source": "2",
        "classification": "C",
        "desc": "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
    },
    "dialect": {
        "lastupdated": "2018-06-01",
        "code": "HK",
        "source": "1",
        "classification": "C",
        "desc": "HOKKIEN",
    },
    "occupation": {
        "lastupdated": "2018-05-21",
        "code": "11110",
        "source": "2",
        "classification": "C",
        "desc": "LEGISLATOR",
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
            "value": "97399245",
        },
    },
    "passportexpirydate": {
        "lastupdated": "",
        "source": "1",
        "classification": "C",
        "value": "",
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
            "value": true,
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
    "gstvoucher": {
        "gstregular": {
            "value": 300,
        },
        "year": {
            "value": 2019,
        },
        "exclusion": {
            "value": false,
        },
        "gstmedisave": {
            "value": 250,
        },
        "lastupdated": "2019-04-01",
        "gstspecial": {
            "value": 0,
        },
        "source": "1",
        "classification": "C",
        "signup": {
            "value": true,
        },
    },
    "email": {
        "lastupdated": "2019-04-03",
        "source": "4",
        "classification": "C",
        "value": "myinfotesting@gmail.com",
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
        "lastupdated": "",
        "source": "1",
        "classification": "C",
        "value": "",
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
        "value": "1953-10-06",
    },
    "name": {
        "lastupdated": "2018-06-01",
        "source": "1",
        "classification": "C",
        "value": "User-Name",
    },
    "secondaryrace": {
        "lastupdated": "2018-06-01",
        "code": "GM",
        "source": "1",
        "classification": "C",
        "desc": "GERMAN",
    },
})
    .attr("sponsoredChildRecords", () => [sponsoredchildrecordFactory.build(), sponsoredchildrecordFactory.build()])
    .attr("childrenBirthRecords", () => [childrenbirthrecordFactory.build(), childrenbirthrecordFactory.build()]);
const childrenbirthrecordFactory = new rosie__WEBPACK_IMPORTED_MODULE_0__["Factory"]()
    .sequence("birthcertno", (i) => ({
    "value": "S556288" + i,
}))
    .sequence("name", (i) => ({
    "value": "child" + i,
}))
    .attrs({
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
    "lastupdated": "2018-05-16",
    "secondaryrace": {
        "code": "",
        "desc": "",
    },
});
const sponsoredchildrecordFactory = new rosie__WEBPACK_IMPORTED_MODULE_0__["Factory"]()
    .sequence("birthcertno", (i) => ({
    "value": "S556288" + i,
}))
    .sequence("name", (i) => ({
    "value": "child" + i,
}))
    .attrs({
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
        "code": "M",
        "desc": "MALE",
    },
    "source": "1",
    "classification": "C",
    "hanyupinyinname": {
        "value": "Sponsored Child",
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
        "value": "2012-09-10",
    },
    "lastupdated": "2018-05-16",
    "secondaryrace": {
        "code": "",
        "desc": "",
    },
});


/***/ }),

/***/ "./src/myinfo/fake/fake-helper.ts":
/*!****************************************!*\
  !*** ./src/myinfo/fake/fake-helper.ts ***!
  \****************************************/
/*! exports provided: FakeMyInfoHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMyInfoHelper", function() { return FakeMyInfoHelper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain */ "./src/myinfo/domain/index.ts");
/* harmony import */ var _profiles_fake_profiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profiles/fake-profiles */ "./src/myinfo/fake/profiles/fake-profiles.ts");



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
            const mockProfile = _profiles_fake_profiles__WEBPACK_IMPORTED_MODULE_2__["profiles"].find((profile) => profile.name === mockParams.archetype);
            if (!mockProfile) {
                return null;
            }
            const myinfoPerson = Object.assign({}, mockProfile.generate());
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.residentialstatus)) {
                myinfoPerson.residentialstatus.code = mockParams.residentialstatus;
                myinfoPerson.residentialstatus.desc = _domain__WEBPACK_IMPORTED_MODULE_1__["domainMap"].residentialstatus.map.codeToDesc[mockParams.residentialstatus];
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.marital)) {
                myinfoPerson.marital.code = mockParams.marital;
                myinfoPerson.marital.desc = _domain__WEBPACK_IMPORTED_MODULE_1__["domainMap"].marital.map.codeToDesc[mockParams.marital];
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.marriagedate)) {
                myinfoPerson.marriagedate.value = mockParams.marriagedate;
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.marriagecertno)) {
                myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.countryofmarriage)) {
                myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
                myinfoPerson.countryofmarriage.desc = _domain__WEBPACK_IMPORTED_MODULE_1__["domainMap"].countryofmarriage.map.codeToDesc[mockParams.countryofmarriage];
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.dob)) {
                myinfoPerson.dob.value = mockParams.dob;
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.gstvyear)) {
                myinfoPerson.gstvoucher.year.value = mockParams.gstvyear;
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.gvs)) {
                myinfoPerson.gstvoucher.signup.value = (mockParams.gvs || "").toLocaleLowerCase() === GVS.true;
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.occupation)) {
                myinfoPerson.occupation.code = mockParams.occupation;
                myinfoPerson.occupation.desc = _domain__WEBPACK_IMPORTED_MODULE_1__["domainMap"].occupation.map.codeToDesc[mockParams.occupation];
                myinfoPerson.occupation.value = null;
            }
            else {
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.occupationfreeform)) {
                    myinfoPerson.occupation.value = mockParams.occupationfreeform;
                    myinfoPerson.occupation.code = null;
                    myinfoPerson.occupation.desc = null;
                }
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.merdekageneligible)) {
                myinfoPerson.merdekagen.eligibility = { value: mockParams.merdekageneligible };
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.merdekagenmessagecode)) {
                myinfoPerson.merdekagen.message.code = mockParams.merdekagenmessagecode;
            }
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(mockParams.merdekagenquantum)) {
                myinfoPerson.merdekagen.quantum = { value: mockParams.merdekagenquantum };
            }
            if (!this.attributes) {
                return myinfoPerson;
            }
            return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
        };
    }
}
/**
 * @description Returns new fake person with only the attributes listed in attributes param. Does not mutate.
 *
 * For the special field childrenbirthrecords, attributes can include childrenbirthrecords.name, childrenbirthrecords.sex etc.
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person, attributes) {
    const [childrenRawCbrAttributes, childrenNormalAttributes] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["partition"])(attributes, (value) => value.startsWith("childrenbirthrecords."));
    const [sponsoredRawCbrAttributes, sponsoredNormalAttributes] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["partition"])(attributes, (value) => value.startsWith("sponsoredchildrenrecords."));
    const childrenFilteredPerson = filterThroughAttributes(person, childrenNormalAttributes);
    const sponsoredFilteredPerson = filterThroughAttributes(person, sponsoredNormalAttributes);
    if (childrenRawCbrAttributes.length > 0) {
        const childrenbirthrecordsAttributes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(childrenRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredChildrenbirthrecords = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(person.childrenbirthrecords, (cbr) => filterThroughAttributes(cbr, childrenbirthrecordsAttributes));
        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(childrenFilteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
    }
    if (sponsoredRawCbrAttributes.length > 0) {
        const sponsoredBirthrecordsAttributes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(sponsoredRawCbrAttributes, (cbrAttribute) => cbrAttribute.split(".")[1]);
        // get filtered childrenbirthrecords
        const filteredSponsoredChildrenbirthrecords = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(person.sponsoredchildrenrecords, (cbr) => filterThroughAttributes(cbr, sponsoredBirthrecordsAttributes));
        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(sponsoredFilteredPerson, "sponsoredchildrenrecords", filteredSponsoredChildrenbirthrecords);
    }
    return Object.assign(Object.assign({}, childrenFilteredPerson), sponsoredFilteredPerson);
}
function filterThroughAttributes(object, attributes) {
    const attrs = new Set(attributes);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["toPairs"])(object)
        .filter(([k]) => attrs.has(k))
        .reduce((accumulator, [k, v]) => (Object.assign(Object.assign({}, accumulator), { [k]: v })), {});
}


/***/ }),

/***/ "./src/myinfo/fake/fake-request.ts":
/*!*****************************************!*\
  !*** ./src/myinfo/fake/fake-request.ts ***!
  \*****************************************/
/*! exports provided: FakeMyInfoRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMyInfoRequest", function() { return FakeMyInfoRequest; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FakeMyInfoRequest {
    constructor() {
    }
    get(expectedResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            return expectedResponse;
        });
    }
    postForm(expectedResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            return expectedResponse;
        });
    }
}


/***/ }),

/***/ "./src/myinfo/fake/index.ts":
/*!**********************************!*\
  !*** ./src/myinfo/fake/index.ts ***!
  \**********************************/
/*! exports provided: factory, Helper, Request, ProfileArchetype, profiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_personbasic_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/personbasic-factory */ "./src/myinfo/fake/factory/personbasic-factory.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return _factory_personbasic_factory__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _fake_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-helper */ "./src/myinfo/fake/fake-helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return _fake_helper__WEBPACK_IMPORTED_MODULE_1__["FakeMyInfoHelper"]; });

/* harmony import */ var _fake_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-request */ "./src/myinfo/fake/fake-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _fake_request__WEBPACK_IMPORTED_MODULE_2__["FakeMyInfoRequest"]; });

/* harmony import */ var _profiles_fake_profiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profiles/fake-profiles */ "./src/myinfo/fake/profiles/fake-profiles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "profiles", function() { return _profiles_fake_profiles__WEBPACK_IMPORTED_MODULE_3__["profiles"]; });

/* harmony import */ var _profiles_fake_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profiles/fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileArchetype", function() { return _profiles_fake_profile__WEBPACK_IMPORTED_MODULE_4__["ProfileArchetype"]; });









/***/ }),

/***/ "./src/myinfo/fake/profiles/childbirthRecords.ts":
/*!*******************************************************!*\
  !*** ./src/myinfo/fake/profiles/childbirthRecords.ts ***!
  \*******************************************************/
/*! exports provided: ChildrenRecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenRecords", function() { return ChildrenRecords; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYY-MM-DD").toString();
};
const childYoungest = {
    birthcertno: { value: "T1828432J" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
const child1MonthOld = {
    birthcertno: { value: "T4383608G" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "months")) },
};
const child2MonthsOld = {
    birthcertno: { value: "T7153144E" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "months")) },
};
const childMiddle1 = {
    birthcertno: { value: "T1694727F" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "years")) },
};
const childMiddle2 = {
    birthcertno: { value: "T1669632Z" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "years")) },
};
const childMiddle3 = {
    birthcertno: { value: "T1509027D" },
    name: { value: "Tan Boy" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, "years")) },
};
const childMiddle4 = {
    birthcertno: { value: "T1422931G" },
    name: { value: "Tan Girl" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, "years")) },
};
const childMiddle5 = {
    birthcertno: { value: "T1511326F" },
    name: { value: "Tan Girl Younger" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, "years")) },
};
const childSuperOld = {
    birthcertno: { value: "T0050832I" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(8, "years")) },
};
const child6YearsOld = {
    birthcertno: { value: "T0202564C" },
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    birthcertno: { value: "T1210114C" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, "years").endOf("year")) },
};
const childDeceased1 = {
    birthcertno: { value: "T0492081Z" },
    name: { value: "Deceased child 1" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
const childDeceased2 = {
    birthcertno: { value: "T1756880E" },
    name: { value: "Deceased child 2" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, "years").endOf("year")) },
    lifestatus: { code: "D", desc: "DECEASED" },
};
const ChildrenRecords = {
    childYoungest,
    child1MonthOld,
    child2MonthsOld,
    childMiddle1,
    childMiddle2,
    childMiddle3,
    childMiddle4,
    childMiddle5,
    childSuperOld,
    child6YearsOld,
    child7YearsOld,
    childDeceased1,
    childDeceased2,
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/common.ts":
/*!********************************************!*\
  !*** ./src/myinfo/fake/profiles/common.ts ***!
  \********************************************/
/*! exports provided: unavailableField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unavailableField", function() { return unavailableField; });
const unavailableField = {
    lastupdated: "2018-05-10",
    source: "1",
    classification: "C",
    unavailable: true,
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/fake-profile.ts":
/*!**************************************************!*\
  !*** ./src/myinfo/fake/profiles/fake-profile.ts ***!
  \**************************************************/
/*! exports provided: ProfileArchetype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArchetype", function() { return ProfileArchetype; });
/**
 * Used in MyInfo.Fake.Helper.getPersonData to get a archetype person
 */
var ProfileArchetype;
(function (ProfileArchetype) {
    // Sponsored Children profiles
    ProfileArchetype["MR_SG_FATHER_ONLY_SPONSORED"] = "Mr SG Father with only sponsored children";
    ProfileArchetype["MR_SG_FATHER_NORMAL_CHILDREN"] = "Mr SG Father with only normal children";
    ProfileArchetype["MS_SG_MOTHER_HAVING_BOTH_CHILDREN"] = "Ms SG Mother having normal and sponsored children";
    // Regular Profiles
    ProfileArchetype["MR_PR_DADDY_ONE_CHILD"] = "Mr PR Daddy with One Child";
    ProfileArchetype["MR_PR_DADDY_PERFECT"] = "Mr PR Daddy Perfect";
    ProfileArchetype["MR_SG_DADDY_CHILD_IS_OLD"] = "Mr SG with 1 old child";
    ProfileArchetype["MR_SG_DADDY_CHILD_NONE"] = "Mr SG with no children";
    ProfileArchetype["MR_SG_DADDY_LONG_NAMES"] = "Mr SG daddy with long names";
    ProfileArchetype["MR_SG_DADDY_MANY_CHILDREN"] = "Mr SG with many children";
    ProfileArchetype["MR_SG_DADDY_MISSING_FIELDS"] = "Mr SG Daddy Missing Fields";
    ProfileArchetype["MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS"] = "Mr SG Daddy Missing Uneditable Fields";
    ProfileArchetype["MR_SG_DADDY_PERFECT"] = "Mr SG Daddy Perfect";
    ProfileArchetype["MR_SG_PRESCHOOL_CHILDREN"] = "Mr SG Preschool Children";
    ProfileArchetype["MRS_MY_MOMMY_PERFECT"] = "Mrs MY Mommy Perfect";
    ProfileArchetype["MRS_SG_MOMMY_PERFECT"] = "Mrs SG Mommy Perfect";
    ProfileArchetype["MR_MY_DADDY_PERFECT"] = "Mr MY Daddy Perfect";
    ProfileArchetype["MR_SG_UNCLE_NON_MG"] = "Mr SG Uncle Non MG";
    ProfileArchetype["MR_SG_UNCLE_MG_ALL_OK"] = "Mr SG Uncle MG All Ok";
    ProfileArchetype["MR_SG_UNCLE_MG_NEED_ADDR_UPDATE"] = "Mr SG Uncle MG needs address update";
    ProfileArchetype["MR_SG_UNCLE_MG_NEED_MEDISAVE"] = "Mr SG Uncle MG need medisave";
    ProfileArchetype["MR_SG_UNCLE_MG_CALL_RECEIVE"] = "Mr SG Uncle MG call to receive";
    ProfileArchetype["MR_SG_UNCLE_OPT_OUT"] = "Mr SG Uncle Opt-out";
    ProfileArchetype["MR_SG_UNCLE_MG_NIL_STATUS"] = "Mr SG Uncle MG nil status";
    ProfileArchetype["MR_SG_UNCLE_NON_BENEFITS"] = "Mr SG Uncle Non Benefits";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_1A"] = "Mr GSTV Uncle 1a no exclusion got signup got $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_1A2"] = "Mr GSTV Uncle 1a2 no exclusion got signup got gst regular only";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_1B"] = "Mr GSTV Uncle 1b no exclusion got signup no $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2A"] = "Mr GSTV Uncle 2a no exclusion no signup got $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2A2"] = "Mr GSTV Uncle 2a2 no exclusion no signup got gst bicentennial only";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2A3"] = "Mr GSTV Uncle 2a3 no exclusion no signup got gst regular & medisave only";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_2B"] = "Mr GSTV Uncle 2b no exclusion no signup no $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_3"] = "Mr GSTV Uncle 3 got exclusion got signup got $";
    ProfileArchetype["MR_SG_UNCLE_GST_SCENARIO_4"] = "Mr GSTV Uncle 4 got exclusion no signup got $";
    ProfileArchetype["MR_MY_DAD_JOBLESS"] = "Mr MY Dad Jobless";
    ProfileArchetype["MRS_MY_MOM_JOBLESS"] = "Mrs MY Mom Jobless";
    ProfileArchetype["MR_SG_JOBLESS"] = "Mr SG Jobless";
    ProfileArchetype["MR_SG_NO_LOCAL_ADDRESS"] = "Mr SG No Local Address";
    ProfileArchetype["MR_PR_NO_LOCAL_ADDRESS"] = "Mr PR No Local Address";
    ProfileArchetype["MR_JAPANESE_NO_ADDRESS_OBJECT"] = "Mr Japanese No Address Object";
    ProfileArchetype["MR_JAPANESE_ADDRESS_BLANK"] = "Mr Japanese Address Blank";
    ProfileArchetype["MR_PR_JOBLESS"] = "Mr PR Jobless";
    ProfileArchetype["MR_SG_DADDY_TWO_DECEASED_CHILD"] = "My SG Daddy with Two Deceased Child";
})(ProfileArchetype || (ProfileArchetype = {}));


/***/ }),

/***/ "./src/myinfo/fake/profiles/fake-profiles.ts":
/*!***************************************************!*\
  !*** ./src/myinfo/fake/profiles/fake-profiles.ts ***!
  \***************************************************/
/*! exports provided: profiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profiles", function() { return profiles; });
/* harmony import */ var _sponsored_children_mrSGFatherSponsoredChildrenOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsored-children/mrSGFatherSponsoredChildrenOnly */ "./src/myinfo/fake/profiles/sponsored-children/mrSGFatherSponsoredChildrenOnly.ts");
/* harmony import */ var _mrGSTVUncleScenario1a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mrGSTVUncleScenario1a */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario1a.ts");
/* harmony import */ var _mrGSTVUncleScenario1a2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrGSTVUncleScenario1a2 */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario1a2.ts");
/* harmony import */ var _mrGSTVUncleScenario1b__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrGSTVUncleScenario1b */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario1b.ts");
/* harmony import */ var _mrGSTVUncleScenario2a__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mrGSTVUncleScenario2a */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2a.ts");
/* harmony import */ var _mrGSTVUncleScenario2a2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mrGSTVUncleScenario2a2 */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2a2.ts");
/* harmony import */ var _mrGSTVUncleScenario2a3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mrGSTVUncleScenario2a3 */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2a3.ts");
/* harmony import */ var _mrGSTVUncleScenario2b__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mrGSTVUncleScenario2b */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2b.ts");
/* harmony import */ var _mrGSTVUncleScenario3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mrGSTVUncleScenario3 */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario3.ts");
/* harmony import */ var _mrGSTVUncleScenario4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mrGSTVUncleScenario4 */ "./src/myinfo/fake/profiles/mrGSTVUncleScenario4.ts");
/* harmony import */ var _mrMYDaddyPerfect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mrMYDaddyPerfect */ "./src/myinfo/fake/profiles/mrMYDaddyPerfect.ts");
/* harmony import */ var _mrMYDadJobless__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mrMYDadJobless */ "./src/myinfo/fake/profiles/mrMYDadJobless.ts");
/* harmony import */ var _mrPRDaddyOneChild__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mrPRDaddyOneChild */ "./src/myinfo/fake/profiles/mrPRDaddyOneChild.ts");
/* harmony import */ var _mrPRDaddyPerfect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mrPRDaddyPerfect */ "./src/myinfo/fake/profiles/mrPRDaddyPerfect.ts");
/* harmony import */ var _mrPRJobless__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mrPRJobless */ "./src/myinfo/fake/profiles/mrPRJobless.ts");
/* harmony import */ var _mrSGDaddyChildIsOld__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mrSGDaddyChildIsOld */ "./src/myinfo/fake/profiles/mrSGDaddyChildIsOld.ts");
/* harmony import */ var _mrSGDaddyChildNone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mrSGDaddyChildNone */ "./src/myinfo/fake/profiles/mrSGDaddyChildNone.ts");
/* harmony import */ var _mrSGDaddyLongNames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mrSGDaddyLongNames */ "./src/myinfo/fake/profiles/mrSGDaddyLongNames.ts");
/* harmony import */ var _mrSGDaddyManyChildren__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mrSGDaddyManyChildren */ "./src/myinfo/fake/profiles/mrSGDaddyManyChildren.ts");
/* harmony import */ var _mrSGDaddyMissingFields__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mrSGDaddyMissingFields */ "./src/myinfo/fake/profiles/mrSGDaddyMissingFields.ts");
/* harmony import */ var _mrSGDaddyMissingUneditableFields__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mrSGDaddyMissingUneditableFields */ "./src/myinfo/fake/profiles/mrSGDaddyMissingUneditableFields.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _mrSGDaddyTwoDeceasedChild__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mrSGDaddyTwoDeceasedChild */ "./src/myinfo/fake/profiles/mrSGDaddyTwoDeceasedChild.ts");
/* harmony import */ var _mrSGJobless__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mrSGJobless */ "./src/myinfo/fake/profiles/mrSGJobless.ts");
/* harmony import */ var _mrSGPreschoolRegister__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mrSGPreschoolRegister */ "./src/myinfo/fake/profiles/mrSGPreschoolRegister.ts");
/* harmony import */ var _mrSGUncleMgAllOk__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mrSGUncleMgAllOk */ "./src/myinfo/fake/profiles/mrSGUncleMgAllOk.ts");
/* harmony import */ var _mrSGUncleMgCallReceive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mrSGUncleMgCallReceive */ "./src/myinfo/fake/profiles/mrSGUncleMgCallReceive.ts");
/* harmony import */ var _mrSGUncleMgNeedAddress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mrSGUncleMgNeedAddress */ "./src/myinfo/fake/profiles/mrSGUncleMgNeedAddress.ts");
/* harmony import */ var _mrSGUncleMgNeedMedisave__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mrSGUncleMgNeedMedisave */ "./src/myinfo/fake/profiles/mrSGUncleMgNeedMedisave.ts");
/* harmony import */ var _mrSGUncleMgNilStatus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mrSGUncleMgNilStatus */ "./src/myinfo/fake/profiles/mrSGUncleMgNilStatus.ts");
/* harmony import */ var _mrSGUncleNonBenefits__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mrSGUncleNonBenefits */ "./src/myinfo/fake/profiles/mrSGUncleNonBenefits.ts");
/* harmony import */ var _mrSGUncleNonMg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mrSGUncleNonMg */ "./src/myinfo/fake/profiles/mrSGUncleNonMg.ts");
/* harmony import */ var _mrSGUncleOptOut__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mrSGUncleOptOut */ "./src/myinfo/fake/profiles/mrSGUncleOptOut.ts");
/* harmony import */ var _mrsMYMomJobless__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mrsMYMomJobless */ "./src/myinfo/fake/profiles/mrsMYMomJobless.ts");
/* harmony import */ var _mrsMYMommyPerfect__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mrsMYMommyPerfect */ "./src/myinfo/fake/profiles/mrsMYMommyPerfect.ts");
/* harmony import */ var _mrsSGMommyPerfect__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./mrsSGMommyPerfect */ "./src/myinfo/fake/profiles/mrsSGMommyPerfect.ts");
/* harmony import */ var _sponsored_children_mrSGFatherNormalChildrenOnly__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sponsored-children/mrSGFatherNormalChildrenOnly */ "./src/myinfo/fake/profiles/sponsored-children/mrSGFatherNormalChildrenOnly.ts");
/* harmony import */ var _sponsored_children_msSGMotherBothChildren__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sponsored-children/msSGMotherBothChildren */ "./src/myinfo/fake/profiles/sponsored-children/msSGMotherBothChildren.ts");
/* harmony import */ var _mrSGNoLocalAddress___WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./mrSGNoLocalAddress  */ "./src/myinfo/fake/profiles/mrSGNoLocalAddress .ts");
/* harmony import */ var _mrPRNoLocalAddress__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./mrPRNoLocalAddress */ "./src/myinfo/fake/profiles/mrPRNoLocalAddress.ts");
/* harmony import */ var _mrJapaneseAddressBlank__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mrJapaneseAddressBlank */ "./src/myinfo/fake/profiles/mrJapaneseAddressBlank.ts");
/* harmony import */ var _mrJapaneseNoAddressObject__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mrJapaneseNoAddressObject */ "./src/myinfo/fake/profiles/mrJapaneseNoAddressObject.ts");










































/**
 * Exhaustive list of our MyInfo archetype profiles
 */
const profiles = [
    _sponsored_children_mrSGFatherNormalChildrenOnly__WEBPACK_IMPORTED_MODULE_36__["mrSGFatherNormalChildrenOnly"],
    _sponsored_children_mrSGFatherSponsoredChildrenOnly__WEBPACK_IMPORTED_MODULE_0__["mrSGFatherSponsoredChildrenOnly"],
    _sponsored_children_msSGMotherBothChildren__WEBPACK_IMPORTED_MODULE_37__["msSGMotherBothChildren"],
    _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_21__["mrSGDaddyPerfect"],
    _mrsSGMommyPerfect__WEBPACK_IMPORTED_MODULE_35__["mrsSGMommyPerfect"],
    _mrSGNoLocalAddress___WEBPACK_IMPORTED_MODULE_38__["mrSGNoLocalAddress"],
    _mrPRNoLocalAddress__WEBPACK_IMPORTED_MODULE_39__["mrPRNoLocalAddress"],
    _mrJapaneseNoAddressObject__WEBPACK_IMPORTED_MODULE_41__["mrJapaneseNoAddressObject"],
    _mrJapaneseAddressBlank__WEBPACK_IMPORTED_MODULE_40__["mrJapaneseAddressBlank"],
    _mrPRDaddyPerfect__WEBPACK_IMPORTED_MODULE_13__["mrPRDaddyPerfect"],
    _mrsMYMommyPerfect__WEBPACK_IMPORTED_MODULE_34__["mrsMYMommyPerfect"],
    _mrSGDaddyChildNone__WEBPACK_IMPORTED_MODULE_16__["mrSGDaddyChildNone"],
    _mrPRDaddyOneChild__WEBPACK_IMPORTED_MODULE_12__["mrPRDaddyOneChild"],
    _mrSGDaddyChildIsOld__WEBPACK_IMPORTED_MODULE_15__["mrSGDaddyChildIsOld"],
    _mrSGDaddyManyChildren__WEBPACK_IMPORTED_MODULE_18__["mrSGDaddyManyChildren"],
    _mrSGPreschoolRegister__WEBPACK_IMPORTED_MODULE_24__["mrPreschoolRegister"],
    _mrSGDaddyLongNames__WEBPACK_IMPORTED_MODULE_17__["mrSGDaddyLongNames"],
    _mrSGDaddyMissingFields__WEBPACK_IMPORTED_MODULE_19__["mrSGDaddyMissingFields"],
    _mrSGDaddyMissingUneditableFields__WEBPACK_IMPORTED_MODULE_20__["mrSGDaddyMissingUneditableFields"],
    _mrMYDaddyPerfect__WEBPACK_IMPORTED_MODULE_10__["mrMYDaddyPerfect"],
    _mrSGUncleMgNeedAddress__WEBPACK_IMPORTED_MODULE_27__["mrSGUncleMgNeedAddress"],
    _mrSGUncleNonMg__WEBPACK_IMPORTED_MODULE_31__["mrSGUncleNonMg"],
    _mrSGUncleMgAllOk__WEBPACK_IMPORTED_MODULE_25__["mrSGUncleMgAllOk"],
    _mrSGUncleMgNeedMedisave__WEBPACK_IMPORTED_MODULE_28__["mrSGUncleMgNeedMedisave"],
    _mrSGUncleMgCallReceive__WEBPACK_IMPORTED_MODULE_26__["mrSGUncleMgCallReceive"],
    _mrSGUncleOptOut__WEBPACK_IMPORTED_MODULE_32__["mrSGUncleOptOut"],
    _mrSGUncleMgNilStatus__WEBPACK_IMPORTED_MODULE_29__["mrSGUncleMgNilStatus"],
    _mrSGUncleNonBenefits__WEBPACK_IMPORTED_MODULE_30__["mrSGUncleNonBenefits"],
    _mrGSTVUncleScenario1a__WEBPACK_IMPORTED_MODULE_1__["mrGstvUncle1a"],
    _mrGSTVUncleScenario1a2__WEBPACK_IMPORTED_MODULE_2__["mrGstvUncle1a2"],
    _mrGSTVUncleScenario1b__WEBPACK_IMPORTED_MODULE_3__["mrGstvUncle1b"],
    _mrGSTVUncleScenario2a__WEBPACK_IMPORTED_MODULE_4__["mrGstvUncle2a"],
    _mrGSTVUncleScenario2a2__WEBPACK_IMPORTED_MODULE_5__["mrGstvUncle2a2"],
    _mrGSTVUncleScenario2a3__WEBPACK_IMPORTED_MODULE_6__["mrGstvUncle2a3"],
    _mrGSTVUncleScenario2b__WEBPACK_IMPORTED_MODULE_7__["mrGstvUncle2b"],
    _mrGSTVUncleScenario3__WEBPACK_IMPORTED_MODULE_8__["mrGstvUncle3"],
    _mrGSTVUncleScenario4__WEBPACK_IMPORTED_MODULE_9__["mrGstvUncle4"],
    _mrMYDadJobless__WEBPACK_IMPORTED_MODULE_11__["mrMYDadJobless"],
    _mrsMYMomJobless__WEBPACK_IMPORTED_MODULE_33__["mrsMYMomJobless"],
    _mrSGJobless__WEBPACK_IMPORTED_MODULE_23__["mrSGJobless"],
    _mrPRJobless__WEBPACK_IMPORTED_MODULE_14__["mrPRJobless"],
    _mrSGDaddyTwoDeceasedChild__WEBPACK_IMPORTED_MODULE_22__["mrSGDaddyTwoDeceasedChild"],
];


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario1a.ts":
/*!***********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario1a.ts ***!
  \***********************************************************/
/*! exports provided: mrGstvUncle1a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle1a", function() { return mrGstvUncle1a; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_1A;
const mrGstvUncle1a = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = true;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 300;
        profile.gstvoucher.gstspecial.value = 300;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario1a2.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario1a2.ts ***!
  \************************************************************/
/*! exports provided: mrGstvUncle1a2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle1a2", function() { return mrGstvUncle1a2; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_1A2;
const mrGstvUncle1a2 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = true;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 0;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario1b.ts":
/*!***********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario1b.ts ***!
  \***********************************************************/
/*! exports provided: mrGstvUncle1b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle1b", function() { return mrGstvUncle1b; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_1B;
const mrGstvUncle1b = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = true;
        profile.gstvoucher.gstregular.value = 0;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 0;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2a.ts":
/*!***********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario2a.ts ***!
  \***********************************************************/
/*! exports provided: mrGstvUncle2a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle2a", function() { return mrGstvUncle2a; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_2A;
const mrGstvUncle2a = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 200;
        profile.gstvoucher.gstspecial.value = 300;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2a2.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario2a2.ts ***!
  \************************************************************/
/*! exports provided: mrGstvUncle2a2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle2a2", function() { return mrGstvUncle2a2; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_2A2;
const mrGstvUncle2a2 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 0;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 300;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2a3.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario2a3.ts ***!
  \************************************************************/
/*! exports provided: mrGstvUncle2a3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle2a3", function() { return mrGstvUncle2a3; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_2A3;
const mrGstvUncle2a3 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 200;
        profile.gstvoucher.gstspecial.value = undefined;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario2b.ts":
/*!***********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario2b.ts ***!
  \***********************************************************/
/*! exports provided: mrGstvUncle2b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle2b", function() { return mrGstvUncle2b; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_2B;
const mrGstvUncle2b = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 0;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 0;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario3.ts":
/*!**********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario3.ts ***!
  \**********************************************************/
/*! exports provided: mrGstvUncle3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle3", function() { return mrGstvUncle3; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_3;
const mrGstvUncle3 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = true;
        profile.gstvoucher.signup.value = true;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 200;
        profile.gstvoucher.gstspecial.value = 0;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrGSTVUncleScenario4.ts":
/*!**********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrGSTVUncleScenario4.ts ***!
  \**********************************************************/
/*! exports provided: mrGstvUncle4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrGstvUncle4", function() { return mrGstvUncle4; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S1234567D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_GST_SCENARIO_4;
const mrGstvUncle4 = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.gstvoucher.exclusion.value = true;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 100;
        profile.gstvoucher.gstmedisave.value = 200;
        profile.gstvoucher.gstspecial.value = 0;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrJapaneseAddressBlank.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrJapaneseAddressBlank.ts ***!
  \************************************************************/
/*! exports provided: mrJapaneseAddressBlank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrJapaneseAddressBlank", function() { return mrJapaneseAddressBlank; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "F5316757T";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_JAPANESE_ADDRESS_BLANK;
const mrJapaneseAddressBlank = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.residentialstatus = {
            "code": "",
            "desc": "",
            "source": "3",
            "classification": "C",
            "lastupdated": "",
        };
        profile.nationality = {
            "code": "JP",
            "desc": "JAPANESE",
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.birthcountry = {
            "code": "JP",
            "desc": "JAPAN",
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.regadd = {
            "type": "",
            "unit": { "value": "" },
            "block": { "value": "" },
            "floor": { "value": "" },
            "postal": { "value": "" },
            "street": { "value": "" },
            "building": { "value": "" },
            "country": {
                "code": "",
                "desc": "",
            },
            "classification": "C",
            "source": "3",
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


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrJapaneseNoAddressObject.ts":
/*!***************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrJapaneseNoAddressObject.ts ***!
  \***************************************************************/
/*! exports provided: mrJapaneseNoAddressObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrJapaneseNoAddressObject", function() { return mrJapaneseNoAddressObject; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "F2734981K";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_JAPANESE_NO_ADDRESS_OBJECT;
const mrJapaneseNoAddressObject = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.residentialstatus = {
            "code": "",
            "desc": "",
            "source": "3",
            "classification": "C",
            "lastupdated": "",
        };
        profile.nationality = {
            "code": "JP",
            "desc": "JAPANESE",
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.birthcountry = {
            "code": "JP",
            "desc": "JAPAN",
            "source": "1",
            "classification": "C",
            "lastupdated": "2019-09-18",
        };
        profile.dob = {
            "lastupdated": "2018-06-01",
            "source": "1",
            "classification": "C",
            "value": "1983-10-06",
        };
        profile.regadd = undefined;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrMYDadJobless.ts":
/*!****************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrMYDadJobless.ts ***!
  \****************************************************/
/*! exports provided: mrMYDadJobless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrMYDadJobless", function() { return mrMYDadJobless; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrMYDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrMYDaddyPerfect */ "./src/myinfo/fake/profiles/mrMYDaddyPerfect.ts");



const id = "G9403340W";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_MY_DAD_JOBLESS;
const mrMYDadJobless = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrMYDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrMYDaddyPerfect"].generate(profileName);
        profile.occupation = {
            "lastupdated": null,
            "code": null,
            "source": null,
            "classification": null,
            "desc": null,
        };
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrMYDaddyPerfect.ts":
/*!******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrMYDaddyPerfect.ts ***!
  \******************************************************/
/*! exports provided: mrMYDaddyPerfect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrMYDaddyPerfect", function() { return mrMYDaddyPerfect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");




const id = "F5994458N";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_MY_DADDY_PERFECT;
const mrMYDaddyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.sex.code = "M";
        profile.sex.desc = _domain_map__WEBPACK_IMPORTED_MODULE_3__["sex"].map.codeToDesc[profile.residentialstatus.code];
        profile.nationality.code = "MY";
        profile.birthcountry.code = "MY";
        profile.residentialstatus.code = "";
        profile.residentialstatus.desc = "";
        profile.passportnumber.value = "A00000000";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrPRDaddyOneChild.ts":
/*!*******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrPRDaddyOneChild.ts ***!
  \*******************************************************/
/*! exports provided: mrPRDaddyOneChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrPRDaddyOneChild", function() { return mrPRDaddyOneChild; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _childbirthRecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childbirthRecords */ "./src/myinfo/fake/profiles/childbirthRecords.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");





const id = "S7936715Z";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_PR_DADDY_ONE_CHILD;
const mrPRDaddyOneChild = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = _domain_map__WEBPACK_IMPORTED_MODULE_4__["residentialstatus"].map.codeToDesc[profile.residentialstatus.code];
        profile.childrenbirthrecords = [_childbirthRecords__WEBPACK_IMPORTED_MODULE_3__["ChildrenRecords"].childYoungest];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrPRDaddyPerfect.ts":
/*!******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrPRDaddyPerfect.ts ***!
  \******************************************************/
/*! exports provided: mrPRDaddyPerfect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrPRDaddyPerfect", function() { return mrPRDaddyPerfect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");




const id = "S2599302J";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_PR_DADDY_PERFECT;
const mrPRDaddyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = _domain_map__WEBPACK_IMPORTED_MODULE_3__["residentialstatus"].map.codeToDesc[profile.residentialstatus.code];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrPRJobless.ts":
/*!*************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrPRJobless.ts ***!
  \*************************************************/
/*! exports provided: mrPRJobless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrPRJobless", function() { return mrPRJobless; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");




const id = "S2599302J";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_PR_JOBLESS;
const mrPRJobless = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = _domain_map__WEBPACK_IMPORTED_MODULE_3__["residentialstatus"].map.codeToDesc[profile.residentialstatus.code];
        profile.occupation = {
            "lastupdated": null,
            "code": null,
            "source": null,
            "classification": null,
            "desc": null,
        };
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrPRNoLocalAddress.ts":
/*!********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrPRNoLocalAddress.ts ***!
  \********************************************************/
/*! exports provided: mrPRNoLocalAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrPRNoLocalAddress", function() { return mrPRNoLocalAddress; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");




const id = "S3814379D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_PR_NO_LOCAL_ADDRESS;
const mrPRNoLocalAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = _domain_map__WEBPACK_IMPORTED_MODULE_3__["residentialstatus"].map.codeToDesc[profile.residentialstatus.code];
        profile.regadd = {
            "type": "Unformatted",
            "line1": { "value": "96 Guild Street" },
            "line2": { "value": "London SE16 1BE" },
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


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyChildIsOld.ts":
/*!*********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyChildIsOld.ts ***!
  \*********************************************************/
/*! exports provided: mrSGDaddyChildIsOld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyChildIsOld", function() { return mrSGDaddyChildIsOld; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _childbirthRecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childbirthRecords */ "./src/myinfo/fake/profiles/childbirthRecords.ts");




const id = "T2446959F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_CHILD_IS_OLD;
const mrSGDaddyChildIsOld = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.childrenbirthrecords = [_childbirthRecords__WEBPACK_IMPORTED_MODULE_3__["ChildrenRecords"].childSuperOld];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyChildNone.ts":
/*!********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyChildNone.ts ***!
  \********************************************************/
/*! exports provided: mrSGDaddyChildNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyChildNone", function() { return mrSGDaddyChildNone; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "T2446959F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_CHILD_NONE;
const mrSGDaddyChildNone = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.childrenbirthrecords = [];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyLongNames.ts":
/*!********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyLongNames.ts ***!
  \********************************************************/
/*! exports provided: mrSGDaddyLongNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyLongNames", function() { return mrSGDaddyLongNames; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _childbirthRecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childbirthRecords */ "./src/myinfo/fake/profiles/childbirthRecords.ts");




const id = "T2446959F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_LONG_NAMES;
const mrSGDaddyLongNames = {
    id,
    name,
    generate: (profileName) => {
        const longName = "Princess Aura Nurr Ermily Amara Auliya Bidadari S/O (Nawal), El@Björk' María-Jose!";
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? longName : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.childrenbirthrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_childbirthRecords__WEBPACK_IMPORTED_MODULE_3__["ChildrenRecords"]);
        profile.childrenbirthrecords[0].name.value = longName + " JR";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyManyChildren.ts":
/*!***********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyManyChildren.ts ***!
  \***********************************************************/
/*! exports provided: mrSGDaddyManyChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyManyChildren", function() { return mrSGDaddyManyChildren; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _childbirthRecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childbirthRecords */ "./src/myinfo/fake/profiles/childbirthRecords.ts");




const id = "T2446959F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_MANY_CHILDREN;
const mrSGDaddyManyChildren = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.childrenbirthrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_childbirthRecords__WEBPACK_IMPORTED_MODULE_3__["ChildrenRecords"]);
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyMissingFields.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyMissingFields.ts ***!
  \************************************************************/
/*! exports provided: mrSGDaddyMissingFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyMissingFields", function() { return mrSGDaddyMissingFields; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/myinfo/fake/profiles/common.ts");




const id = "S8779834H";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_MISSING_FIELDS;
const mrSGDaddyMissingFields = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.hanyupinyinname = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.aliasname = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.hanyupinyinaliasname = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.secondaryrace = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.residentialstatus = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.homeno = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.marriagecertno = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.countryofmarriage = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        if (!!profile.childrenbirthrecords) {
            profile.childrenbirthrecords = profile.childrenbirthrecords.slice(0, 1);
        }
        profile.edulevel = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.occupation = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyMissingUneditableFields.ts":
/*!**********************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyMissingUneditableFields.ts ***!
  \**********************************************************************/
/*! exports provided: mrSGDaddyMissingUneditableFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyMissingUneditableFields", function() { return mrSGDaddyMissingUneditableFields; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/myinfo/fake/profiles/common.ts");




const id = "S8974352D";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS;
const mrSGDaddyMissingUneditableFields = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        // Uneditable field
        profile.nationality = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.dob = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        profile.regadd = _common__WEBPACK_IMPORTED_MODULE_3__["unavailableField"];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts":
/*!******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts ***!
  \******************************************************/
/*! exports provided: mrSGDaddyPerfect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyPerfect", function() { return mrSGDaddyPerfect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");


const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_DADDY_PERFECT;
const mrSGDaddyPerfect = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        return {
            "edulevel": {
                "lastupdated": "2018-05-10",
                "code": "8",
                "source": "2",
                "classification": "C",
                "desc": "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
            },
            "dialect": {
                "lastupdated": "2018-06-01",
                "code": "HK",
                "source": "1",
                "classification": "C",
                "desc": "HOKKIEN",
            },
            "occupation": {
                "lastupdated": "2018-05-21",
                "code": "11110",
                "source": "2",
                "classification": "C",
                "desc": "LEGISLATOR",
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
                    "value": "97399245",
                },
            },
            "passportexpirydate": {
                "lastupdated": "",
                "source": "1",
                "classification": "C",
                "value": "",
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
                    "value": true,
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
                "value": "myinfotesting@gmail.com",
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
                "lastupdated": "",
                "source": "1",
                "classification": "C",
                "value": "",
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
                        "value": "Jo Tan Pei Ni",
                    },
                    "lastupdated": "2018-05-16",
                    "secondaryrace": {
                        "code": "",
                        "desc": "",
                    },
                },
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
                "value": "1953-10-06",
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
        };
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGDaddyTwoDeceasedChild.ts":
/*!***************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGDaddyTwoDeceasedChild.ts ***!
  \***************************************************************/
/*! exports provided: mrSGDaddyTwoDeceasedChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGDaddyTwoDeceasedChild", function() { return mrSGDaddyTwoDeceasedChild; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _childbirthRecords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./childbirthRecords */ "./src/myinfo/fake/profiles/childbirthRecords.ts");
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");




const id = "S4315482F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_2__["ProfileArchetype"].MR_SG_DADDY_TWO_DECEASED_CHILD;
const mrSGDaddyTwoDeceasedChild = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_3__["mrSGDaddyPerfect"].generate(profileName);
        profile.childrenbirthrecords = [_childbirthRecords__WEBPACK_IMPORTED_MODULE_1__["ChildrenRecords"].child2MonthsOld, _childbirthRecords__WEBPACK_IMPORTED_MODULE_1__["ChildrenRecords"].childDeceased1, _childbirthRecords__WEBPACK_IMPORTED_MODULE_1__["ChildrenRecords"].childDeceased2];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGJobless.ts":
/*!*************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGJobless.ts ***!
  \*************************************************/
/*! exports provided: mrSGJobless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGJobless", function() { return mrSGJobless; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_JOBLESS;
const mrSGJobless = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.occupation = {
            "lastupdated": null,
            "code": null,
            "source": null,
            "classification": null,
            "desc": null,
        };
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGNoLocalAddress .ts":
/*!*********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGNoLocalAddress .ts ***!
  \*********************************************************/
/*! exports provided: mrSGNoLocalAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGNoLocalAddress", function() { return mrSGNoLocalAddress; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S4875477E";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_NO_LOCAL_ADDRESS;
const mrSGNoLocalAddress = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.regadd = {
            "type": "Unformatted",
            "line1": { "value": "96 Guild Street" },
            "line2": { "value": "London SE16 1BE" },
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


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGPreschoolRegister.ts":
/*!***********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGPreschoolRegister.ts ***!
  \***********************************************************/
/*! exports provided: mrPreschoolRegister, ChildrenRecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrPreschoolRegister", function() { return mrPreschoolRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenRecords", function() { return ChildrenRecords; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");




const id = "S0350934F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_2__["ProfileArchetype"].MR_SG_PRESCHOOL_CHILDREN;
const mrPreschoolRegister = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_3__["mrSGDaddyPerfect"].generate(profileName);
        profile.childrenbirthrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](ChildrenRecords);
        return profile;
    },
};
const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD").toString();
};
// the children here have birthcertno related to the preschool interest registration mock
const c1 = {
    birthcertno: { value: "T1639540J" },
    name: { value: "Child w level not offered" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(2, "years")) },
};
const c2 = {
    birthcertno: { value: "T1717003H" },
    name: { value: "Child w ineligible" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(2, "years")) },
};
const c3 = {
    birthcertno: { value: "T1728256A" },
    name: { value: "Child w registered" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(3, "years")) },
};
const c4 = {
    birthcertno: { value: "T1766863Z" },
    name: { value: "Child w nothing" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(4, "years")) },
};
const c5 = {
    birthcertno: { value: "T1783246D" },
    name: { value: "Child2 w level not offered " },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(5, "years")) },
};
const c6 = {
    birthcertno: { value: "T1790160A" },
    name: { value: "Child2 w ineligible" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(6, "years")) },
};
const ChildrenRecords = {
    c1, c2, c3, c4, c5, c6,
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleMgAllOk.ts":
/*!******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleMgAllOk.ts ***!
  \******************************************************/
/*! exports provided: mrSGUncleMgAllOk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleMgAllOk", function() { return mrSGUncleMgAllOk; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_MG_ALL_OK;
const mrSGUncleMgAllOk = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "2";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleMgCallReceive.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleMgCallReceive.ts ***!
  \************************************************************/
/*! exports provided: mrSGUncleMgCallReceive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleMgCallReceive", function() { return mrSGUncleMgCallReceive; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_MG_CALL_RECEIVE;
const mrSGUncleMgCallReceive = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "5";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleMgNeedAddress.ts":
/*!************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleMgNeedAddress.ts ***!
  \************************************************************/
/*! exports provided: mrSGUncleMgNeedAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleMgNeedAddress", function() { return mrSGUncleMgNeedAddress; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_MG_NEED_ADDR_UPDATE;
const mrSGUncleMgNeedAddress = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "3";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleMgNeedMedisave.ts":
/*!*************************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleMgNeedMedisave.ts ***!
  \*************************************************************/
/*! exports provided: mrSGUncleMgNeedMedisave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleMgNeedMedisave", function() { return mrSGUncleMgNeedMedisave; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_MG_NEED_MEDISAVE;
const mrSGUncleMgNeedMedisave = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "4";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleMgNilStatus.ts":
/*!**********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleMgNilStatus.ts ***!
  \**********************************************************/
/*! exports provided: mrSGUncleMgNilStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleMgNilStatus", function() { return mrSGUncleMgNilStatus; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_MG_NIL_STATUS;
const mrSGUncleMgNilStatus = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "7";
        profile.merdekagen.eligibility.value = false;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleNonBenefits.ts":
/*!**********************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleNonBenefits.ts ***!
  \**********************************************************/
/*! exports provided: mrSGUncleNonBenefits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleNonBenefits", function() { return mrSGUncleNonBenefits; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_NON_BENEFITS;
const mrSGUncleNonBenefits = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "1";
        profile.merdekagen.eligibility.value = false;
        profile.gstvoucher.exclusion.value = false;
        profile.gstvoucher.signup.value = false;
        profile.gstvoucher.gstregular.value = 0;
        profile.gstvoucher.gstmedisave.value = 0;
        profile.gstvoucher.gstspecial.value = 0;
        profile.silversupport = {
            "eligibility": {
                "value": false,
            },
            "lastupdated": "2019-04-01",
            "amount": {
                "value": 0,
            },
            "source": "1",
            "classification": "C",
            "year": {
                "value": 2019,
            },
        };
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleNonMg.ts":
/*!****************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleNonMg.ts ***!
  \****************************************************/
/*! exports provided: mrSGUncleNonMg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleNonMg", function() { return mrSGUncleNonMg; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_NON_MG;
const mrSGUncleNonMg = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "1";
        profile.merdekagen.eligibility.value = false;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrSGUncleOptOut.ts":
/*!*****************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrSGUncleOptOut.ts ***!
  \*****************************************************/
/*! exports provided: mrSGUncleOptOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGUncleOptOut", function() { return mrSGUncleOptOut; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");



const id = "S8399420G";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_UNCLE_OPT_OUT;
const mrSGUncleOptOut = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.merdekagen.message.code = "6";
        profile.merdekagen.eligibility.value = false;
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrsMYMomJobless.ts":
/*!*****************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrsMYMomJobless.ts ***!
  \*****************************************************/
/*! exports provided: mrsMYMomJobless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrsMYMomJobless", function() { return mrsMYMomJobless; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrsMYMommyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrsMYMommyPerfect */ "./src/myinfo/fake/profiles/mrsMYMommyPerfect.ts");
/* harmony import */ var _childbirthRecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childbirthRecords */ "./src/myinfo/fake/profiles/childbirthRecords.ts");




const id = "G9403340W";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MRS_MY_MOM_JOBLESS;
const mrsMYMomJobless = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrsMYMommyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrsMYMommyPerfect"].generate(profileName);
        profile.occupation = {
            "lastupdated": null,
            "code": null,
            "source": null,
            "classification": null,
            "desc": null,
        };
        profile.childrenbirthrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_childbirthRecords__WEBPACK_IMPORTED_MODULE_3__["ChildrenRecords"]);
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrsMYMommyPerfect.ts":
/*!*******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrsMYMommyPerfect.ts ***!
  \*******************************************************/
/*! exports provided: mrsMYMommyPerfect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrsMYMommyPerfect", function() { return mrsMYMommyPerfect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");




const id = "F5994458N";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MRS_MY_MOMMY_PERFECT;
const mrsMYMommyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = _domain_map__WEBPACK_IMPORTED_MODULE_3__["sex"].map.codeToDesc[profile.sex.code];
        profile.nationality.code = "MY";
        profile.birthcountry.code = "MY";
        profile.residentialstatus.code = "";
        profile.residentialstatus.desc = "";
        profile.passportnumber.value = "A00000000";
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/mrsSGMommyPerfect.ts":
/*!*******************************************************!*\
  !*** ./src/myinfo/fake/profiles/mrsSGMommyPerfect.ts ***!
  \*******************************************************/
/*! exports provided: mrsSGMommyPerfect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrsSGMommyPerfect", function() { return mrsSGMommyPerfect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrSGDaddyPerfect */ "./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts");
/* harmony import */ var _domain_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/map */ "./src/myinfo/domain/map.ts");




const id = "T2446959F";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MRS_SG_MOMMY_PERFECT;
const mrsSGMommyPerfect = {
    id,
    name,
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _mrSGDaddyPerfect__WEBPACK_IMPORTED_MODULE_2__["mrSGDaddyPerfect"].generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = _domain_map__WEBPACK_IMPORTED_MODULE_3__["sex"].map.codeToDesc[profile.sex.code];
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/sponsored-children/BaseProfile.ts":
/*!********************************************************************!*\
  !*** ./src/myinfo/fake/profiles/sponsored-children/BaseProfile.ts ***!
  \********************************************************************/
/*! exports provided: BaseProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProfile", function() { return BaseProfile; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const id = "S8399420G";
const BaseProfile = {
    id,
    name: null,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? "" : profileName;
        return {
            name: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: profileName,
            },
            countryofmarriage: {
                lastupdated: "2018-05-10",
                code: "SG",
                source: "1",
                classification: "C",
                desc: "SINGAPORE",
            },
            sex: {
                lastupdated: "2018-06-01",
                code: "M",
                source: "1",
                classification: "C",
                desc: "Male",
            },
            regadd: address(),
            mobileno: mobileno(),
            dialect: {
                lastupdated: "2018-06-01",
                code: "HK",
                source: "1",
                classification: "C",
                desc: "HOKKIEN",
            },
            occupation: {
                lastupdated: "2018-05-21",
                code: "11110",
                source: "2",
                classification: "C",
                desc: "LEGISLATOR",
            },
            nationality: {
                lastupdated: "2018-06-01",
                code: "SG",
                source: "1",
                classification: "C",
                desc: "SINGAPORE CITIZEN",
            },
            dob: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: "1960-01-01",
            },
            secondaryrace: {
                lastupdated: "2018-06-01",
                code: "",
                source: "1",
                classification: "C",
                desc: "",
            },
            edulevel: {
                lastupdated: "2018-05-10",
                code: "8",
                source: "2",
                classification: "C",
                desc: "POSTGRADUATE DIPLOMA / CERTIFICATE (EXCLUDING MASTER'S AND DOCTORATE)",
            },
            passportexpirydate: {
                lastupdated: "",
                source: "1",
                classification: "C",
                value: "",
            },
            divorcedate: {
                lastupdated: "",
                source: "1",
                classification: "C",
                value: "",
            },
            marriagecertno: {
                lastupdated: "2018-05-10",
                source: "1",
                classification: "C",
                value: "M525997",
            },
            merdekagen: {
                eligibility: {
                    value: true,
                },
                lastupdated: "2019-04-01",
                quantum: {
                    value: 200,
                },
                source: "1",
                classification: "C",
                message: {
                    code: "2",
                    desc: "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
                },
            },
            gstvoucher: {
                gstregular: {
                    value: 300,
                },
                year: {
                    value: 2018,
                },
                exclusion: {
                    value: false,
                },
                gstmedisave: {
                    value: 250,
                },
                lastupdated: "2019-04-01",
                gstspecial: {
                    value: 300,
                },
                source: "1",
                classification: "C",
                signup: {
                    value: false,
                },
            },
            email: {
                lastupdated: "2019-04-03",
                source: "4",
                classification: "C",
                value: "baseprofile@singapore.sg",
            },
            birthcountry: {
                lastupdated: "2018-06-01",
                code: "SG",
                source: "1",
                classification: "C",
                desc: "SINGAPORE",
            },
            race: {
                lastupdated: "2018-06-01",
                code: "CN",
                source: "1",
                classification: "C",
                desc: "CHINESE",
            },
            silversupport: {
                eligibility: {
                    value: true,
                },
                lastupdated: "2019-04-01",
                amount: {
                    value: 300,
                },
                source: "1",
                classification: "C",
                year: {
                    value: 2019,
                },
            },
            marriagedate: {
                lastupdated: "1993-10-22",
                source: "1",
                classification: "C",
                value: "1988-01-01",
            },
            residentialstatus: {
                lastupdated: "2018-06-01",
                code: "C",
                source: "1",
                classification: "C",
                desc: "Citizen",
            },
            passportnumber: {
                lastupdated: "",
                source: "1",
                classification: "C",
                value: "",
            },
            marital: {
                lastupdated: "2018-05-10",
                code: "2",
                source: "1",
                classification: "C",
                desc: "MARRIED",
            },
            aliasname: {
                lastupdated: "2018-06-01",
                source: "1",
                classification: "C",
                value: "LEE XIU",
            },
            childrenbirthrecords: [],
            sponsoredchildrenrecords: [],
        };
    },
};
const address = () => ({
    country: {
        code: "SG",
        desc: "SINGAPORE",
    },
    unit: {
        value: "22",
    },
    street: {
        value: "UBI 1",
    },
    lastupdated: "2018-05-10",
    block: {
        value: "123",
    },
    postal: {
        value: "900743",
    },
    source: "1",
    classification: "C",
    floor: {
        value: "15",
    },
    type: "SG",
    building: {
        value: "",
    },
});
const mobileno = () => ({
    areacode: {
        value: "65",
    },
    prefix: {
        value: "+",
    },
    nbr: {
        value: "91234567",
    },
});


/***/ }),

/***/ "./src/myinfo/fake/profiles/sponsored-children/mrSGFatherNormalChildrenOnly.ts":
/*!*************************************************************************************!*\
  !*** ./src/myinfo/fake/profiles/sponsored-children/mrSGFatherNormalChildrenOnly.ts ***!
  \*************************************************************************************/
/*! exports provided: mrSGFatherNormalChildrenOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGFatherNormalChildrenOnly", function() { return mrSGFatherNormalChildrenOnly; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _BaseProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseProfile */ "./src/myinfo/fake/profiles/sponsored-children/BaseProfile.ts");
/* harmony import */ var _normalChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalChildren */ "./src/myinfo/fake/profiles/sponsored-children/normalChildren.ts");




const id = "S9116045E";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_FATHER_NORMAL_CHILDREN;
const mrSGFatherNormalChildrenOnly = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _BaseProfile__WEBPACK_IMPORTED_MODULE_2__["BaseProfile"].generate(profileName);
        profile.childrenbirthrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_normalChildren__WEBPACK_IMPORTED_MODULE_3__["Childrenbirthrecords"]);
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/sponsored-children/mrSGFatherSponsoredChildrenOnly.ts":
/*!****************************************************************************************!*\
  !*** ./src/myinfo/fake/profiles/sponsored-children/mrSGFatherSponsoredChildrenOnly.ts ***!
  \****************************************************************************************/
/*! exports provided: mrSGFatherSponsoredChildrenOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrSGFatherSponsoredChildrenOnly", function() { return mrSGFatherSponsoredChildrenOnly; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _BaseProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseProfile */ "./src/myinfo/fake/profiles/sponsored-children/BaseProfile.ts");
/* harmony import */ var _sponsoredChildBirthRecords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsoredChildBirthRecords */ "./src/myinfo/fake/profiles/sponsored-children/sponsoredChildBirthRecords.ts");




const id = "S9116045E";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MR_SG_FATHER_ONLY_SPONSORED;
const mrSGFatherSponsoredChildrenOnly = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _BaseProfile__WEBPACK_IMPORTED_MODULE_2__["BaseProfile"].generate(profileName);
        profile.sponsoredchildrenrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_sponsoredChildBirthRecords__WEBPACK_IMPORTED_MODULE_3__["SponsoredChildrenRecords"]);
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/sponsored-children/msSGMotherBothChildren.ts":
/*!*******************************************************************************!*\
  !*** ./src/myinfo/fake/profiles/sponsored-children/msSGMotherBothChildren.ts ***!
  \*******************************************************************************/
/*! exports provided: msSGMotherBothChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msSGMotherBothChildren", function() { return msSGMotherBothChildren; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fake_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-profile */ "./src/myinfo/fake/profiles/fake-profile.ts");
/* harmony import */ var _BaseProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseProfile */ "./src/myinfo/fake/profiles/sponsored-children/BaseProfile.ts");
/* harmony import */ var _normalChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalChildren */ "./src/myinfo/fake/profiles/sponsored-children/normalChildren.ts");
/* harmony import */ var _sponsoredChildBirthRecords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sponsoredChildBirthRecords */ "./src/myinfo/fake/profiles/sponsored-children/sponsoredChildBirthRecords.ts");





const id = "S9116045E";
const name = _fake_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileArchetype"].MS_SG_MOTHER_HAVING_BOTH_CHILDREN;
const msSGMotherBothChildren = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](profileName) ? name : profileName;
        const profile = _BaseProfile__WEBPACK_IMPORTED_MODULE_2__["BaseProfile"].generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = "Female";
        profile.sex.unavailable = false;
        profile.childrenbirthrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_normalChildren__WEBPACK_IMPORTED_MODULE_3__["Childrenbirthrecords"]);
        profile.sponsoredchildrenrecords = lodash__WEBPACK_IMPORTED_MODULE_0__["values"](_sponsoredChildBirthRecords__WEBPACK_IMPORTED_MODULE_4__["SponsoredChildrenRecords"]);
        return profile;
    },
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/sponsored-children/normalChildren.ts":
/*!***********************************************************************!*\
  !*** ./src/myinfo/fake/profiles/sponsored-children/normalChildren.ts ***!
  \***********************************************************************/
/*! exports provided: Childrenbirthrecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Childrenbirthrecords", function() { return Childrenbirthrecords; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYY-MM-DD").toString();
};
const childYoungest = {
    birthcertno: { value: "S1915980I" },
    name: { value: "Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
const child1MonthOld = {
    birthcertno: { value: "S1985973H" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "months")) },
};
const child2MonthsOld = {
    birthcertno: { value: "S1934480J" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "months")) },
};
const childMiddle1 = {
    birthcertno: { value: "S7337031J" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "years")) },
};
const childMiddle2 = {
    birthcertno: { value: "S0836115J" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "years")) },
};
const childMiddle3 = {
    birthcertno: { value: "S3159159G" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, "years")) },
};
const childMiddle4 = {
    birthcertno: { value: "S0758717A" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, "years")) },
};
const childMiddle5 = {
    birthcertno: { value: "S4886773A" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, "years")) },
};
const child6YearsOld = {
    birthcertno: { value: "S8767263H" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    birthcertno: { value: "S8359810G" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, "years").endOf("year")) },
};
const childSuperOld = {
    birthcertno: { value: "S6680318Z" },
    name: { value: "Tan Ke Wei" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(8, "years")) },
};
const Childrenbirthrecords = {
    childYoungest,
    child1MonthOld,
    child2MonthsOld,
    childMiddle1,
    childMiddle2,
    childMiddle3,
    childMiddle4,
    childMiddle5,
    child6YearsOld,
    child7YearsOld,
    childSuperOld,
};


/***/ }),

/***/ "./src/myinfo/fake/profiles/sponsored-children/sponsoredChildBirthRecords.ts":
/*!***********************************************************************************!*\
  !*** ./src/myinfo/fake/profiles/sponsored-children/sponsoredChildBirthRecords.ts ***!
  \***********************************************************************************/
/*! exports provided: SponsoredChildrenRecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsoredChildrenRecords", function() { return SponsoredChildrenRecords; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYY-MM-DD").toString();
};
const childYoungest = {
    nric: { value: "T1828432J" },
    name: { value: "Sponsored Child Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
const child1MonthOld = {
    nric: { value: "T4383608G" },
    name: { value: "Sponsored Child Tan Ke Yu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "months")) },
};
const child2MonthsOld = {
    nric: { value: "T7153144E" },
    name: { value: "Sponsored Child Tan Keh Guan" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "months")) },
};
const childMiddle1 = {
    nric: { value: "T1694727F" },
    name: { value: "Sponsored Child Tan Chiu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "years")) },
};
const childMiddle2 = {
    nric: { value: "T1669632Z" },
    name: { value: "Sponsored Child Tan Chua" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, "years")) },
};
const childMiddle3 = {
    nric: { value: "T1509027D" },
    name: { value: "Sponsored Child Tan Su" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, "years")) },
};
const childMiddle4 = {
    nric: { value: "T1422931G" },
    name: { value: "Sponsored Child Tan Go" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, "years")) },
};
const childMiddle5 = {
    nric: { value: "T1511326F" },
    name: { value: "Sponsored Child Tan Sy" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, "years")) },
};
const childSuperOld = {
    nric: { value: "T0050832I" },
    name: { value: "Sponsored Child Tan Ke Wei" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(8, "years")) },
};
const child6YearsOld = {
    nric: { value: "T1364674G" },
    name: { value: "Sponsored Child Tan Kim" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(6, "years").startOf("year")) },
};
const child7YearsOld = {
    nric: { value: "T1210114C" },
    name: { value: "Sponsored Child Tan Liu" },
    dob: { value: formatDateToString(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, "years").endOf("year")) },
};
const SponsoredChildrenRecords = {
    childYoungest,
    child1MonthOld,
    child2MonthsOld,
    childMiddle1,
    childMiddle2,
    childMiddle3,
    childMiddle4,
    childMiddle5,
    child6YearsOld,
    child7YearsOld,
    childSuperOld,
};


/***/ }),

/***/ "./src/myinfo/helper/index.ts":
/*!************************************!*\
  !*** ./src/myinfo/helper/index.ts ***!
  \************************************/
/*! exports provided: MyInfoHelper, MyInfoRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myinfo_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myinfo-helper */ "./src/myinfo/helper/myinfo-helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyInfoHelper", function() { return _myinfo_helper__WEBPACK_IMPORTED_MODULE_0__["MyInfoHelper"]; });

/* harmony import */ var _myinfo_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myinfo-request */ "./src/myinfo/helper/myinfo-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyInfoRequest", function() { return _myinfo_request__WEBPACK_IMPORTED_MODULE_1__["MyInfoRequest"]; });





/***/ }),

/***/ "./src/myinfo/helper/myinfo-helper.ts":
/*!********************************************!*\
  !*** ./src/myinfo/helper/myinfo-helper.ts ***!
  \********************************************/
/*! exports provided: MyInfoHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInfoHelper", function() { return MyInfoHelper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");
/* harmony import */ var _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/error/SingpassMyinfoError */ "./src/util/error/SingpassMyinfoError.ts");
/* harmony import */ var _util_JweUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/JweUtil */ "./src/util/JweUtil.ts");
/* harmony import */ var _myinfo_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myinfo-request */ "./src/myinfo/helper/myinfo-request.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const PERSON_BASIC_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic";
const PROFILE_STATUS_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic/status";
class MyInfoHelper {
    constructor(props) {
        /**
         * Obtain V3 person data using uinfin.
         * In the generic K, pass in the list of string literal of the attributes you expect to get back.
         * getPersonBasicV3 will return an object with only the properties matching the keys.
         * e.g. when K = "name" | "email", getPersonBasicV3 returns an object looking like { name, email }
         */
        this.getPersonBasic = (uinfin) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.personBasicUrl}/${uinfin}`;
            const params = {
                client_id: this.clientID,
                sp_esvcId: this.singpassEserviceID,
                attributes: this.attributes.join(","),
            };
            let response;
            try {
                response = yield this.myInfoRequest.get(url, params);
            }
            catch (error) {
                _util__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Error requesting for person data (JWE) from MyInfo", error);
                throw error;
            }
            try {
                // Decrypt person data
                const encryptedPersonJWE = response.data;
                const jwe = yield Object(_util_JweUtil__WEBPACK_IMPORTED_MODULE_3__["decryptJWE"])(encryptedPersonJWE, this.keyToDecryptJWE);
                const jws = JSON.parse(jwe.payload.toString());
                const verifiedJws = yield Object(_util_JweUtil__WEBPACK_IMPORTED_MODULE_3__["verifyJWS"])(jws, this.certToVerifyJWS);
                const personData = JSON.parse(verifiedJws.payload.toString());
                if (personData == null) {
                    throw new _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_2__["SingpassMyInfoError"]("Person data cannot be null");
                }
                return personData;
            }
            catch (error) {
                _util__WEBPACK_IMPORTED_MODULE_1__["Logger"].error("Error verifying person data from MyInfo", error);
                throw error;
            }
        });
        /**
         * Obtain myinfo profile status of an individual using uinfin.
         * This is an endpoint that requires permission from the myinfo team.
         * Do approach the team if you need to access it.
         */
        this.getProfileStatus = (uinfin) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.profileStatusUrl}/${uinfin}`;
            const response = yield this.myInfoRequest.get(url);
            if (!!response.data.msg && typeof response.data.msg === "string") {
                return JSON.parse(response.data.msg);
            }
            throw new _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_2__["SingpassMyInfoError"]("getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected");
        });
        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](props.attributes)) {
            throw new _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_2__["SingpassMyInfoError"]("Attribute list must contain values");
        }
        this.attributes = props.attributes;
        this.clientID = props.clientID;
        this.singpassEserviceID = props.singpassEserviceID;
        this.keyToDecryptJWE = props.keyToDecryptJWE;
        this.certToVerifyJWS = props.certToVerifyJWS;
        this.personBasicUrl = this.getUrl(props.overridePersonBasicUrl, PERSON_BASIC_BASE_URL, props.environment);
        this.profileStatusUrl = this.getUrl(props.overrideProfileStatusUrl, PROFILE_STATUS_BASE_URL, props.environment);
        const requestProps = {
            appId: props.clientID,
            privateKeyToSignRequest: props.privateKeyToSignRequest,
            privateKeyPassword: props.privateKeyPassword,
        };
        this.myInfoRequest = new _myinfo_request__WEBPACK_IMPORTED_MODULE_4__["MyInfoRequest"](requestProps);
    }
    getUrl(overrideUrl, defaultUrl, env) {
        return (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](overrideUrl))
            ? overrideUrl
            : this.constructUrl(env, defaultUrl);
    }
    constructUrl(environment, baseUrl) {
        switch (environment) {
            case "sandbox":
                return `https://sandbox.${baseUrl}`;
            case "prod":
                return `https://${baseUrl}`;
            case "test":
            default:
                return `https://test.${baseUrl}`;
        }
    }
}


/***/ }),

/***/ "./src/myinfo/helper/myinfo-request.ts":
/*!*********************************************!*\
  !*** ./src/myinfo/helper/myinfo-request.ts ***!
  \*********************************************/
/*! exports provided: MyInfoRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInfoRequest", function() { return MyInfoRequest; });
/* harmony import */ var nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nonce */ "nonce");
/* harmony import */ var nonce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nonce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./src/client/index.ts");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
class MyInfoRequest {
    constructor(props) {
        this.axiosClient = Object(_client__WEBPACK_IMPORTED_MODULE_2__["createClient"])({
            timeout: 10000,
        });
        this.appId = props.appId;
        this.privateKeyContent = props.privateKeyToSignRequest;
        this.privateKeyPassword = props.privateKeyPassword;
    }
    get(uri, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let authHeader = "";
            const nonce = nonce__WEBPACK_IMPORTED_MODULE_0__()();
            const timestamp = new Date().getTime();
            authHeader = _util__WEBPACK_IMPORTED_MODULE_1__["SigningUtil"].generateMyInfoAuthorizationHeader(uri, queryParams, _util__WEBPACK_IMPORTED_MODULE_1__["SigningUtil"].HttpMethod.GET, this.appId, this.privateKeyContent, nonce, timestamp, this.privateKeyPassword);
            const requestConfig = {
                params: queryParams,
                paramsSerializer: querystring__WEBPACK_IMPORTED_MODULE_3__["stringify"],
                headers: {
                    Authorization: authHeader,
                },
            };
            const response = yield this.axiosClient.get(uri, requestConfig);
            return response;
        });
    }
}


/***/ }),

/***/ "./src/myinfo/index.ts":
/*!*****************************!*\
  !*** ./src/myinfo/index.ts ***!
  \*****************************/
/*! exports provided: Helper, Request, Fake, myInfoDomain, domainMap, profileStatusDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/myinfo/helper/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return _helper__WEBPACK_IMPORTED_MODULE_0__["MyInfoHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _helper__WEBPACK_IMPORTED_MODULE_0__["MyInfoRequest"]; });

/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake */ "./src/myinfo/fake/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Fake", function() { return _fake__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain */ "./src/myinfo/domain/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myInfoDomain", function() { return _domain__WEBPACK_IMPORTED_MODULE_2__["myInfoDomain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "domainMap", function() { return _domain__WEBPACK_IMPORTED_MODULE_2__["domainMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "profileStatusDomain", function() { return _domain__WEBPACK_IMPORTED_MODULE_2__["profileStatusDomain"]; });







/***/ }),

/***/ "./src/singpass/index.ts":
/*!*******************************!*\
  !*** ./src/singpass/index.ts ***!
  \*******************************/
/*! exports provided: SessionLogoutResult, OidcHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singpass_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singpass-helper */ "./src/singpass/singpass-helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionLogoutResult", function() { return _singpass_helper__WEBPACK_IMPORTED_MODULE_0__["SessionLogoutResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OidcHelper", function() { return _singpass_helper__WEBPACK_IMPORTED_MODULE_0__["OidcHelper"]; });




/***/ }),

/***/ "./src/singpass/singpass-helper.ts":
/*!*****************************************!*\
  !*** ./src/singpass/singpass-helper.ts ***!
  \*****************************************/
/*! exports provided: SessionLogoutResult, OidcHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionLogoutResult", function() { return SessionLogoutResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OidcHelper", function() { return OidcHelper; });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./src/client/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/error/SingpassMyinfoError */ "./src/util/error/SingpassMyinfoError.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





var SessionLogoutResult;
(function (SessionLogoutResult) {
    SessionLogoutResult["SUCCESS"] = "SUCCESS";
    SessionLogoutResult["SINGPASS_ERROR"] = "SINGPASS_ERROR";
})(SessionLogoutResult || (SessionLogoutResult = {}));
class OidcHelper {
    constructor(props) {
        this.SINGPASS_SESSION_COOKIE_NAME = "PD-S-SESSION-ID";
        this.axiosClient = Object(_client__WEBPACK_IMPORTED_MODULE_1__["createClient"])({
            timeout: 10000,
        });
        this.constructAuthorizationUrl = (state, nonce) => {
            const queryParams = Object.assign(Object.assign({ state }, (nonce ? { nonce } : {})), { redirect_uri: this.redirectUri, scope: "openid", client_id: this.clientID, response_type: "code" });
            const queryString = querystring__WEBPACK_IMPORTED_MODULE_0__["stringify"](queryParams);
            return `${this.authorizationUrl}?${queryString}`;
        };
        /**
         * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = (authCode, axiosRequestConfig) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                grant_type: "authorization_code",
                code: authCode,
                client_id: this.clientID,
                client_secret: this.clientSecret,
                redirect_uri: this.redirectUri,
            };
            const body = querystring__WEBPACK_IMPORTED_MODULE_0__["stringify"](params);
            const config = Object.assign({ headers: { "content-type": "application/x-www-form-urlencoded" } }, axiosRequestConfig);
            const response = yield this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                _util__WEBPACK_IMPORTED_MODULE_2__["Logger"].error("Failed to get ID token: invalid response data", response.data);
                throw new _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_4__["SingpassMyInfoError"]("Failed to get ID token");
            }
            return response.data;
        });
        this._testExports = {
            singpassClient: this.axiosClient,
        };
        this.authorizationUrl = props.authorizationUrl;
        this.logoutUrl = props.logoutUrl;
        this.tokenUrl = props.tokenUrl;
        this.clientID = props.clientID;
        this.clientSecret = props.clientSecret;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.jwsVerifyKey = props.jwsVerifyKey;
    }
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractNricAndUuidFromPayload on the returned Token Payload to get the NRIC and UUID
     */
    getIdTokenPayload(tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_token } = tokens;
                const decryptedJwe = yield _util__WEBPACK_IMPORTED_MODULE_2__["JweUtil"].decryptJWE(id_token, this.jweDecryptKey);
                const jwsPayload = decryptedJwe.payload.toString();
                const verifiedJws = yield _util__WEBPACK_IMPORTED_MODULE_2__["JweUtil"].verifyJWS(jwsPayload, this.jwsVerifyKey);
                return JSON.parse(verifiedJws.payload.toString());
            }
            catch (e) {
                _util__WEBPACK_IMPORTED_MODULE_2__["Logger"].error("Failed to get token payload", e);
                throw e;
            }
        });
    }
    /**
     * Returns the nric and uuid from the token payload
     */
    extractNricAndUuidFromPayload(payload) {
        const { sub } = payload;
        if (sub) {
            const extractionRegex = /s=([STFG]\d{7}[A-Z]).*,u=(.*)/i;
            const matchResult = sub.match(extractionRegex);
            if (!matchResult) {
                throw Error("Token payload sub property is invalid, does not contain valid NRIC and uuid string");
            }
            const nric = matchResult[1];
            const uuid = matchResult[2];
            return { nric, uuid };
        }
        throw Error("Token payload sub property is not defined");
    }
    /**
     * [DEPRECATED] Singpass is not managing the logged in user's session anymore thus there is no need to log out.
     * Keeping for other use cases.
     *
     * Log user out of Singpass, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     */
    logoutOfSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.logoutUrl)) {
                throw new _util_error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_4__["SingpassMyInfoError"]("Trying to call singpass-helper logoutOfSession without setting the logout URL");
            }
            const requestConfig = { headers: { Cookie: `${this.SINGPASS_SESSION_COOKIE_NAME}=${sessionId}` } };
            try {
                yield this.axiosClient.get(this.logoutUrl, requestConfig);
                return SessionLogoutResult.SUCCESS;
            }
            catch (e) {
                _util__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("Singpass Error while attempting to logout of Singpass session", e);
                return SessionLogoutResult.SINGPASS_ERROR;
            }
        });
    }
}


/***/ }),

/***/ "./src/util/ConfigUtils.ts":
/*!*********************************!*\
  !*** ./src/util/ConfigUtils.ts ***!
  \*********************************/
/*! exports provided: disableMissingEnvWarnings, getValueFromEnv, getValueFromEnvWithoutWarn, getIntValueFromEnv, getBooleanValueFromEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableMissingEnvWarnings", function() { return disableMissingEnvWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromEnv", function() { return getValueFromEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromEnvWithoutWarn", function() { return getValueFromEnvWithoutWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntValueFromEnv", function() { return getIntValueFromEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBooleanValueFromEnv", function() { return getBooleanValueFromEnv; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/util/Logger.ts");

let displayWarnings = true;
function disableMissingEnvWarnings() {
    displayWarnings = false;
}
function getValueFromEnv(key, defaultValue) {
    const value = !!process.env[key] ? process.env[key].trim() : defaultValue;
    if (!value && displayWarnings) {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn(`Configuration key not found or empty: ${key}`);
    }
    return value;
}
function getValueFromEnvWithoutWarn(key, defaultValue) {
    const value = !!process.env[key] ? process.env[key].trim() : defaultValue;
    return value;
}
function getIntValueFromEnv(key, defaultValue) {
    const stringValue = getValueFromEnv(key, null);
    if (!stringValue) {
        return defaultValue;
    }
    const intValue = parseInt(stringValue, 10);
    if (isNaN(intValue)) {
        if (displayWarnings) {
            _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn(`Configuration ${key} is not a valid integer: ${stringValue}`);
        }
        return defaultValue;
    }
    return intValue;
}
function getBooleanValueFromEnv(key, defaultValue = false) {
    const stringValue = getValueFromEnv(key, null);
    if (!stringValue) {
        return defaultValue;
    }
    if (stringValue !== "true" && stringValue !== "false") {
        _Logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn(`Configuration ${key} is not a valid boolean: ${stringValue}`);
    }
    return stringValue === "true";
}


/***/ }),

/***/ "./src/util/JestUtil.ts":
/*!******************************!*\
  !*** ./src/util/JestUtil.ts ***!
  \******************************/
/*! exports provided: isTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
/**
 * @returns Whether the code is currently running in Jest or not
 */
function isTest() {
    return global.describe && global.it;
}


/***/ }),

/***/ "./src/util/JweUtil.ts":
/*!*****************************!*\
  !*** ./src/util/JweUtil.ts ***!
  \*****************************/
/*! exports provided: decryptJWE, verifyJWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptJWE", function() { return decryptJWE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyJWS", function() { return verifyJWS; });
/* harmony import */ var node_jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-jose */ "node-jose");
/* harmony import */ var node_jose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_jose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/SingpassMyinfoError */ "./src/util/error/SingpassMyinfoError.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function decryptJWE(jwe, decryptKey) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!jwe)
            throw new _error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_1__["SingpassMyInfoError"]("Missing JWE data.");
        if (!decryptKey)
            throw new _error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_1__["SingpassMyInfoError"]("Missing key to decrypt JWE payload.");
        // TODO: can be further optimized by caching key in memory instead of regenerating each time
        const key = yield node_jose__WEBPACK_IMPORTED_MODULE_0__["JWK"].asKey(decryptKey, "pem");
        // allow all supported algorithms
        return node_jose__WEBPACK_IMPORTED_MODULE_0__["JWE"].createDecrypt(key, { algorithms: ["*"] }).decrypt(jwe);
    });
}
function verifyJWS(jws, verifyCert) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!jws)
            throw new _error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_1__["SingpassMyInfoError"]("Missing JWS data.");
        if (!verifyCert)
            throw new _error_SingpassMyinfoError__WEBPACK_IMPORTED_MODULE_1__["SingpassMyInfoError"]("Missing cert to verify JWS payload.");
        // TODO: can be further optimized by caching key in memory instead of regenerating each time
        const jwsKey = yield node_jose__WEBPACK_IMPORTED_MODULE_0__["JWK"].asKey(verifyCert, "pem");
        return node_jose__WEBPACK_IMPORTED_MODULE_0__["JWS"].createVerify(jwsKey).verify(jws);
    });
}


/***/ }),

/***/ "./src/util/Logger.ts":
/*!****************************!*\
  !*** ./src/util/Logger.ts ***!
  \****************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
const Logger = console;


/***/ }),

/***/ "./src/util/RedactorUtil.ts":
/*!**********************************!*\
  !*** ./src/util/RedactorUtil.ts ***!
  \**********************************/
/*! exports provided: redactNricfinInString, redactNricfin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redactNricfinInString", function() { return redactNricfinInString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redactNricfin", function() { return redactNricfin; });
const redactNricfinInString = (input) => {
    const indexOfNric = getIndexOfNricInString(input);
    if (indexOfNric !== -1) {
        const nric = input.substr(indexOfNric, 9);
        const redactedNric = redactNricfin(nric);
        return input.replace(nric, redactedNric);
    }
    return input;
};
const redactNricfin = (nricfin) => {
    if (nricfin && isValidNricfin(nricfin)) {
        const firstThreeDigits = nricfin.substring(1, 4);
        return nricfin.replace(firstThreeDigits, "***");
    }
    return nricfin;
};
const isValidNricfin = (value) => {
    const result = /[STFG]\d{7}[A-Z]/i.exec(value);
    return result;
};
const getIndexOfNricInString = (value) => {
    const result = /[STFG]\d{7}[A-Z]/i.exec(value);
    if (!!result) {
        return result.index;
    }
    return -1;
};


/***/ }),

/***/ "./src/util/SigningUtil.ts":
/*!*********************************!*\
  !*** ./src/util/SigningUtil.ts ***!
  \*********************************/
/*! exports provided: HttpMethod, generateMyInfoAuthorizationHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMethod", function() { return HttpMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMyInfoAuthorizationHeader", function() { return generateMyInfoAuthorizationHeader; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);



var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
})(HttpMethod || (HttpMethod = {}));
/**
 * Generate the Authorization header for requests to V3 MyInfo
 * @param url
 * @param queryParams
 * @param method
 * @param appId
 * @param signingKey
 * @param signingKeyPassphrase
 */
// tslint:disable-next-line: parameters-max-number
function generateMyInfoAuthorizationHeader(url, queryParams, method, appId, signingKey, nonce, timestamp, signingKeyPassphrase) {
    const authHeaderObj = {
        app_id: appId,
        nonce,
        signature_method: "RS256",
        timestamp,
    };
    const signature = generateSignature(authHeaderObj, queryParams, method, url, signingKey, signingKeyPassphrase);
    return generateAuthHeaderString(appId, nonce, signature, timestamp);
}
function generateAuthHeaderString(appId, nonceValue, signature, timestamp) {
    return "PKI_SIGN app_id=\"" + appId + // Defaults to 1st part of incoming request hostname
        "\",nonce=\"" + nonceValue +
        "\",signature_method=\"RS256\"" +
        ",signature=\"" + signature +
        "\",timestamp=\"" + timestamp +
        "\"";
}
/**
 * Function to generate signature for authenticated requests to myinfo v3
 * @param authHeader
 * @param queryParams
 * @param method
 * @param url
 * @param key
 * @param keyPassphrase
 */
function generateSignature(authHeader, queryParams, method, url, key, keyPassphrase) {
    const baseParams = lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](authHeader, queryParams);
    const sortedKeys = Object.keys(baseParams).sort();
    const initialAccObj = {};
    const sortedParams = sortedKeys.reduce((accObj, paramKey) => {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["set"](accObj, paramKey, baseParams[paramKey]);
    }, initialAccObj);
    const baseParamsStr = querystring__WEBPACK_IMPORTED_MODULE_1__["unescape"](querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"](sortedParams)); // url safe
    const baseString = method.toUpperCase() + "&" + url + "&" + baseParamsStr;
    const signWith = { key };
    if (!!keyPassphrase) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["set"](signWith, "passphrase", keyPassphrase);
    }
    const signature = crypto__WEBPACK_IMPORTED_MODULE_2__["createSign"]("RSA-SHA256")
        .update(baseString)
        .sign(signWith, "base64");
    return signature;
}


/***/ }),

/***/ "./src/util/StringUtil.ts":
/*!********************************!*\
  !*** ./src/util/StringUtil.ts ***!
  \********************************/
/*! exports provided: replaceLineBreaks, isBase64Valid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceLineBreaks", function() { return replaceLineBreaks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBase64Valid", function() { return isBase64Valid; });
/* harmony import */ var is_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-base64 */ "is-base64");
/* harmony import */ var is_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_base64__WEBPACK_IMPORTED_MODULE_0__);

function replaceLineBreaks(input) {
    if (!input) {
        return input;
    }
    return input.replace(/\\n/g, "\n");
}
function isBase64Valid(test) {
    return is_base64__WEBPACK_IMPORTED_MODULE_0__(test, { paddingRequired: false });
}


/***/ }),

/***/ "./src/util/error/SingpassMyinfoError.ts":
/*!***********************************************!*\
  !*** ./src/util/error/SingpassMyinfoError.ts ***!
  \***********************************************/
/*! exports provided: SingpassMyInfoError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingpassMyInfoError", function() { return SingpassMyInfoError; });
/**
 * TODO: [DY] replace this SP-MY lib's console.log with an appended error stack. Doesn't make sense to do logging in a library.
 * Should return the full error and let the library user use do what they want with the error.
 *
 * Note: axios doesn't return the full error.
 * For example, if myinfo-request gets a 401 error, only the error stack is surfaced.
 * in axios response interceptors, the error actually contains a config property, this is lost.
 */
class SingpassMyInfoError extends Error {
    constructor(message, wrappedError) {
        super(`[singpass-myinfo-oidc-helper] ${message}`);
        Error.captureStackTrace(this, SingpassMyInfoError);
        Object.setPrototypeOf(this, SingpassMyInfoError.prototype);
        if (wrappedError) {
            this.stack = this.stack + "\n" + wrappedError.stack;
        }
        return this;
    }
}


/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: ConfigUtils, StringUtil, JestUtil, SigningUtil, JweUtil, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigUtils */ "./src/util/ConfigUtils.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ConfigUtils", function() { return _ConfigUtils__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _JestUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JestUtil */ "./src/util/JestUtil.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "JestUtil", function() { return _JestUtil__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _JweUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JweUtil */ "./src/util/JweUtil.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "JweUtil", function() { return _JweUtil__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger */ "./src/util/Logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]; });

/* harmony import */ var _SigningUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SigningUtil */ "./src/util/SigningUtil.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SigningUtil", function() { return _SigningUtil__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _StringUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StringUtil */ "./src/util/StringUtil.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "StringUtil", function() { return _StringUtil__WEBPACK_IMPORTED_MODULE_5__; });









/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "is-base64":
/*!****************************!*\
  !*** external "is-base64" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-base64");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "node-jose":
/*!****************************!*\
  !*** external "node-jose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-jose");

/***/ }),

/***/ "nonce":
/*!************************!*\
  !*** external "nonce" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nonce");

/***/ }),

/***/ "proxy-agent":
/*!******************************!*\
  !*** external "proxy-agent" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("proxy-agent");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "rosie":
/*!************************!*\
  !*** external "rosie" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rosie");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map