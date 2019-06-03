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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("node-jose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("rosie");

/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("is-base64");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("nonce");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios-https-proxy-fix");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var JweUtil_namespaceObject = {};
__webpack_require__.r(JweUtil_namespaceObject);
__webpack_require__.d(JweUtil_namespaceObject, "decryptJWE", function() { return decryptJWE; });
__webpack_require__.d(JweUtil_namespaceObject, "verifyJWS", function() { return verifyJWS; });
var SigningUtil_namespaceObject = {};
__webpack_require__.r(SigningUtil_namespaceObject);
__webpack_require__.d(SigningUtil_namespaceObject, "HttpMethod", function() { return HttpMethod; });
__webpack_require__.d(SigningUtil_namespaceObject, "generateMyInfoAuthorizationHeader", function() { return generateMyInfoAuthorizationHeader; });
var personbasic_factory_namespaceObject = {};
__webpack_require__.r(personbasic_factory_namespaceObject);
__webpack_require__.d(personbasic_factory_namespaceObject, "PersonBasicFactory", function() { return PersonBasicFactory; });
__webpack_require__.d(personbasic_factory_namespaceObject, "childrenbirthrecordFactory", function() { return childrenbirthrecordFactory; });
var map_namespaceObject = {};
__webpack_require__.r(map_namespaceObject);
__webpack_require__.d(map_namespaceObject, "occupation", function() { return occupation; });
__webpack_require__.d(map_namespaceObject, "countryofmarriage", function() { return countryofmarriage; });
__webpack_require__.d(map_namespaceObject, "sex", function() { return sex; });
__webpack_require__.d(map_namespaceObject, "comstatus", function() { return comstatus; });
__webpack_require__.d(map_namespaceObject, "lifestatus", function() { return lifestatus; });
__webpack_require__.d(map_namespaceObject, "validity", function() { return validity; });
__webpack_require__.d(map_namespaceObject, "hdbtype", function() { return hdbtype; });
__webpack_require__.d(map_namespaceObject, "residentialstatus", function() { return residentialstatus; });
__webpack_require__.d(map_namespaceObject, "housingtype", function() { return housingtype; });
__webpack_require__.d(map_namespaceObject, "marital", function() { return marital; });
__webpack_require__.d(map_namespaceObject, "edulevel", function() { return edulevel; });
__webpack_require__.d(map_namespaceObject, "passtype", function() { return passtype; });
__webpack_require__.d(map_namespaceObject, "status", function() { return map_status; });
var profilestatus_domain_namespaceObject = {};
__webpack_require__.r(profilestatus_domain_namespaceObject);
__webpack_require__.d(profilestatus_domain_namespaceObject, "ProfileStatusEnum", function() { return ProfileStatusEnum; });
var fake_namespaceObject = {};
__webpack_require__.r(fake_namespaceObject);
__webpack_require__.d(fake_namespaceObject, "factory", function() { return personbasic_factory_namespaceObject; });
__webpack_require__.d(fake_namespaceObject, "Helper", function() { return fake_helper_FakeMyInfoHelper; });
__webpack_require__.d(fake_namespaceObject, "Request", function() { return FakeMyInfoRequest; });
__webpack_require__.d(fake_namespaceObject, "ProfileArchetype", function() { return ProfileArchetype; });
__webpack_require__.d(fake_namespaceObject, "profiles", function() { return profiles; });
var myinfo_namespaceObject = {};
__webpack_require__.r(myinfo_namespaceObject);
__webpack_require__.d(myinfo_namespaceObject, "Helper", function() { return myinfo_helper_MyInfoHelper; });
__webpack_require__.d(myinfo_namespaceObject, "Request", function() { return myinfo_request_MyInfoRequest; });
__webpack_require__.d(myinfo_namespaceObject, "Fake", function() { return fake_namespaceObject; });
__webpack_require__.d(myinfo_namespaceObject, "myInfoDomain", function() { return myinfo_domain; });
__webpack_require__.d(myinfo_namespaceObject, "domainMap", function() { return map_namespaceObject; });
__webpack_require__.d(myinfo_namespaceObject, "profileStatusDomain", function() { return profilestatus_domain_namespaceObject; });
var singpass_namespaceObject = {};
__webpack_require__.r(singpass_namespaceObject);
__webpack_require__.d(singpass_namespaceObject, "SessionRefreshResult", function() { return SessionRefreshResult; });
__webpack_require__.d(singpass_namespaceObject, "SessionLogoutResult", function() { return SessionLogoutResult; });
__webpack_require__.d(singpass_namespaceObject, "OidcHelper", function() { return singpass_helper_OidcHelper; });

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/util/Logger.ts
var Logger = console;

// CONCATENATED MODULE: ./src/util/ConfigUtils.ts

var displayWarnings = true;
function disableMissingEnvWarnings() {
    displayWarnings = false;
}
function getValueFromEnv(key, defaultValue) {
    var value = !!process.env[key] ? process.env[key].trim() : defaultValue;
    if (!value && displayWarnings) {
        Logger.warn("Configuration key not found or empty: " + key);
    }
    return value;
}
function getValueFromEnvWithoutWarn(key, defaultValue) {
    var value = !!process.env[key] ? process.env[key].trim() : defaultValue;
    return value;
}
function getIntValueFromEnv(key, defaultValue) {
    var stringValue = getValueFromEnv(key, null);
    if (!stringValue) {
        return defaultValue;
    }
    var intValue = parseInt(stringValue, 10);
    if (isNaN(intValue)) {
        if (displayWarnings) {
            Logger.warn("Configuration " + key + " is not a valid integer: " + stringValue);
        }
        return defaultValue;
    }
    return intValue;
}
function getBooleanValueFromEnv(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var stringValue = getValueFromEnv(key, null);
    if (!stringValue) {
        return defaultValue;
    }
    if (stringValue !== "true" && stringValue !== "false") {
        Logger.warn("Configuration " + key + " is not a valid boolean: " + stringValue);
    }
    return stringValue === "true";
}

// CONCATENATED MODULE: ./src/util/JestUtil.ts
/**
 * @returns Whether the code is currently running in Jest or not
 */
function isTest() {
    return global.describe && global.it;
}

// EXTERNAL MODULE: external "node-jose"
var external_node_jose_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/util/JweUtil.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function decryptJWE(jwe, decryptKey) {
    return __awaiter(this, void 0, void 0, function () {
        var key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!jwe)
                        throw new Error("Missing JWE data.");
                    if (!decryptKey)
                        throw new Error("Missing key to decrypt JWE payload.");
                    return [4 /*yield*/, external_node_jose_["JWK"].asKey(decryptKey, "pem")];
                case 1:
                    key = _a.sent();
                    // allow all supported algorithms
                    return [2 /*return*/, external_node_jose_["JWE"].createDecrypt(key, { algorithms: ["*"] }).decrypt(jwe)];
            }
        });
    });
}
function verifyJWS(jws, verifyCert) {
    return __awaiter(this, void 0, void 0, function () {
        var jwsKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!jws)
                        throw new Error("Missing JWS data.");
                    if (!verifyCert)
                        throw new Error("Missing cert to verify JWS payload.");
                    return [4 /*yield*/, external_node_jose_["JWK"].asKey(verifyCert, "pem")];
                case 1:
                    jwsKey = _a.sent();
                    return [2 /*return*/, external_node_jose_["JWS"].createVerify(jwsKey).verify(jws)];
            }
        });
    });
}

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(2);

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/util/SigningUtil.ts



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
    var authHeaderObj = {
        app_id: appId,
        nonce: nonce,
        signature_method: "RS256",
        timestamp: timestamp,
    };
    var signature = generateSignature(authHeaderObj, queryParams, method, url, signingKey, signingKeyPassphrase);
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
    var baseParams = external_lodash_["merge"](authHeader, queryParams);
    var sortedKeys = Object.keys(baseParams).sort();
    var initialAccObj = {};
    var sortedParams = sortedKeys.reduce(function (accObj, paramKey) {
        return external_lodash_["set"](accObj, paramKey, baseParams[paramKey]);
    }, initialAccObj);
    var baseParamsStr = external_querystring_["unescape"](external_querystring_["stringify"](sortedParams)); // url safe
    var baseString = method.toUpperCase() + "&" + url + "&" + baseParamsStr;
    var signWith = { key: key };
    if (!!keyPassphrase) {
        external_lodash_["set"](signWith, "passphrase", keyPassphrase);
    }
    var signature = external_crypto_["createSign"]("RSA-SHA256")
        .update(baseString)
        .sign(signWith, "base64");
    return signature;
}

// EXTERNAL MODULE: external "is-base64"
var external_is_base64_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/util/StringUtil.ts

function replaceLineBreaks(input) {
    if (!input) {
        return input;
    }
    return input.replace(/\\n/g, "\n");
}
function isBase64Valid(test) {
    return external_is_base64_(test, { paddingRequired: false });
}

// CONCATENATED MODULE: ./src/util/index.ts








// EXTERNAL MODULE: external "nonce"
var external_nonce_ = __webpack_require__(8);

// EXTERNAL MODULE: external "axios-https-proxy-fix"
var external_axios_https_proxy_fix_ = __webpack_require__(9);
var external_axios_https_proxy_fix_default = /*#__PURE__*/__webpack_require__.n(external_axios_https_proxy_fix_);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/util/RedactorUtil.ts
var redactNricfinInString = function (input) {
    var indexOfNric = getIndexOfNricInString(input);
    if (indexOfNric !== -1) {
        var nric = input.substr(indexOfNric, 9);
        var redactedNric = redactNricfin(nric);
        return input.replace(nric, redactedNric);
    }
    return input;
};
var redactNricfin = function (nricfin) {
    if (nricfin && isValidNricfin(nricfin)) {
        var firstThreeDigits = nricfin.substring(1, 4);
        return nricfin.replace(firstThreeDigits, "***");
    }
    return nricfin;
};
var isValidNricfin = function (value) {
    var result = /[STFG]\d{7}[A-Z]/i.exec(value);
    return result;
};
var getIndexOfNricInString = function (value) {
    var result = /[STFG]\d{7}[A-Z]/i.exec(value);
    if (!!result) {
        return result.index;
    }
    return -1;
};

// CONCATENATED MODULE: ./src/client/index.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var createClient = function (requestConfig) {
    if (requestConfig === void 0) { requestConfig = {}; }
    // Note: Due to axios not being able to automatically pick up proxy env vars
    // correctly, we have manually set the proxy config here.
    // That alone is not enough to resolve the issue as there is a bug with axios
    // where requesting a https endpoint through Nectar's http proxy does not work
    // Hence, we have to use a forked library called axios-https-proxy-fix
    // Hopefully the next stable release of axios (post 0.18.0) will fix this
    // Also to note: tested 0.19.0-beta.1 version of axios and still encountering proxy errors
    var proxyConfig = getProxyConfig();
    requestConfig = proxyConfig ? __assign({ proxy: proxyConfig }, requestConfig) : requestConfig;
    var instance = external_axios_https_proxy_fix_default.a.create(__assign({}, requestConfig));
    addRequestLogs(instance);
    addResponseLogs(instance);
    return instance;
};
var getProxyConfig = function () {
    var proxyUrl = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
    if (proxyUrl) {
        var parsed = external_url_["parse"](proxyUrl);
        var proxyConfig = {
            host: parsed.hostname,
            port: parseInt(parsed.port, 10),
        };
        if (!!parsed.auth) {
            var _a = parsed.auth.split(":"), username = _a[0], password = _a[1];
            Object(external_lodash_["set"])(proxyConfig, "auth", {
                username: username,
                password: password,
            });
        }
        return proxyConfig;
    }
    return null;
};
var addRequestLogs = function (instance) {
    instance.interceptors.request.use(function (request) {
        if (!!request) {
            log("Requesting " + request.method + " : " + redactNricfinInString(request.url));
        }
        return request;
    }, function (error) {
        log("Error occurred while making a request " + error.message, error);
        return Promise.reject(error);
    });
};
var addResponseLogs = function (instance) {
    instance.interceptors.response.use(function (response) {
        if (!!response) {
            log("Responded " + response.config.method + "  : " + redactNricfinInString(response.config.url));
        }
        return response;
    }, function (error) {
        if (!!error.response) {
            log("Error occurred while responding to request " + error.response.config.method + " :\n\t\t\t" + redactNricfinInString(error.response.config.url), error);
        }
        else {
            log("Error occurred while responding to request", error);
        }
        return Promise.reject(error);
    });
};
var log = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    // tslint:disable-next-line:no-console
    console.log(message, optionalParams);
};

// CONCATENATED MODULE: ./src/myinfo/helper/myinfo-request.ts
var myinfo_request_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var myinfo_request_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * For most cases, myinfo-helper will suffice.
 * This class is used only for special MyInfo endpoints.
 * Request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
var myinfo_request_MyInfoRequest = /** @class */ (function () {
    function MyInfoRequest(props) {
        this.axiosClient = createClient({
            timeout: 10000,
        });
        this.appId = props.appId;
        this.privateKeyContent = props.privateKeyToSignRequest;
        this.privateKeyPassword = props.privateKeyPassword;
    }
    MyInfoRequest.prototype.get = function (uri, queryParams) {
        return myinfo_request_awaiter(this, void 0, void 0, function () {
            var authHeader, nonce, timestamp, requestConfig, response;
            return myinfo_request_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHeader = "";
                        nonce = external_nonce_()();
                        timestamp = new Date().getTime();
                        authHeader = SigningUtil_namespaceObject.generateMyInfoAuthorizationHeader(uri, queryParams, SigningUtil_namespaceObject.HttpMethod.GET, this.appId, this.privateKeyContent, nonce, timestamp, this.privateKeyPassword);
                        requestConfig = {
                            params: queryParams,
                            paramsSerializer: external_querystring_["stringify"],
                            headers: {
                                Authorization: authHeader,
                            },
                        };
                        return [4 /*yield*/, this.axiosClient.get(uri, requestConfig)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return MyInfoRequest;
}());


// CONCATENATED MODULE: ./src/myinfo/helper/myinfo-helper.ts
var myinfo_helper_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var myinfo_helper_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PERSON_BASIC_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic";
var PROFILE_STATUS_BASE_URL = "api.myinfo.gov.sg/gov/v3/person-basic/status";
var myinfo_helper_MyInfoHelper = /** @class */ (function () {
    function MyInfoHelper(props) {
        var _this = this;
        /**
         * Obtain V3 person data using uinfin.
         * In the generic K, pass in the list of string literal of the attributes you expect to get back.
         * getPersonBasicV3 will return an object with only the properties matching the keys.
         * e.g. when K = "name" | "email", getPersonBasicV3 returns an object looking like { name, email }
         */
        this.getPersonBasic = function (uinfin) { return myinfo_helper_awaiter(_this, void 0, void 0, function () {
            var url, params, response, error_1, encryptedPersonJWE, jwe, jws, verifiedJws, personData, error_2;
            return myinfo_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.personBasicUrl + "/" + uinfin;
                        params = {
                            client_id: this.clientID,
                            sp_esvcId: this.singpassEserviceID,
                            attributes: this.attributes.join(","),
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.myInfoRequest.get(url, params)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        Logger.error("Error requesting for person data (JWE) from MyInfo", error_1);
                        throw error_1;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        encryptedPersonJWE = response.data;
                        return [4 /*yield*/, decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE)];
                    case 5:
                        jwe = _a.sent();
                        jws = JSON.parse(jwe.payload.toString());
                        return [4 /*yield*/, verifyJWS(jws, this.certToVerifyJWS)];
                    case 6:
                        verifiedJws = _a.sent();
                        personData = JSON.parse(verifiedJws.payload.toString());
                        if (personData == null) {
                            throw new Error("Person data cannot be null");
                        }
                        return [2 /*return*/, personData];
                    case 7:
                        error_2 = _a.sent();
                        Logger.error("Error verifying person data from MyInfo", error_2);
                        throw error_2;
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Obtain myinfo profile status of an individual using uinfin.
         * This is an endpoint that requires permission from the myinfo team.
         * Do approach the team if you need to access it.
         */
        this.getProfileStatus = function (uinfin) { return myinfo_helper_awaiter(_this, void 0, void 0, function () {
            var url, response;
            return myinfo_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.profileStatusUrl + "/" + uinfin;
                        return [4 /*yield*/, this.myInfoRequest.get(url)];
                    case 1:
                        response = _a.sent();
                        if (!!response.data.msg && typeof response.data.msg === "string") {
                            return [2 /*return*/, JSON.parse(response.data.msg)];
                        }
                        throw new Error("getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected");
                }
            });
        }); };
        if (external_lodash_["isEmpty"](props.attributes)) {
            throw new Error("Attribute list must contain values");
        }
        this.attributes = props.attributes;
        this.clientID = props.clientID;
        this.singpassEserviceID = props.singpassEserviceID;
        this.keyToDecryptJWE = props.keyToDecryptJWE;
        this.certToVerifyJWS = props.certToVerifyJWS;
        this.personBasicUrl = this.getUrl(props.overridePersonBasicUrl, PERSON_BASIC_BASE_URL, props.environment);
        this.profileStatusUrl = this.getUrl(props.overrideProfileStatusUrl, PROFILE_STATUS_BASE_URL, props.environment);
        var requestProps = {
            appId: props.clientID,
            privateKeyToSignRequest: props.privateKeyToSignRequest,
            privateKeyPassword: props.privateKeyPassword,
        };
        this.myInfoRequest = new myinfo_request_MyInfoRequest(requestProps);
    }
    MyInfoHelper.prototype.getUrl = function (overrideUrl, defaultUrl, env) {
        return (!external_lodash_["isEmpty"](overrideUrl))
            ? overrideUrl
            : this.constructUrl(env, defaultUrl);
    };
    MyInfoHelper.prototype.constructUrl = function (environment, baseUrl) {
        switch (environment) {
            case "sandbox":
                return "https://sandbox." + baseUrl;
            case "prod":
                return "https://" + baseUrl;
            case "test":
            default:
                return "https://test." + baseUrl;
        }
    };
    return MyInfoHelper;
}());


// CONCATENATED MODULE: ./src/myinfo/helper/index.ts



// EXTERNAL MODULE: external "rosie"
var external_rosie_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/myinfo/fake/factory/personbasic-factory.ts

var PersonBasicFactory = new external_rosie_["Factory"]()
    .sequence("uinfin", function (i) { return ({
    "lastupdated": "2018-06-01",
    "value": "S123456" + i + "A",
    "source": "1",
    "classification": "C",
}); })
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
            "value": 55,
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
    .attr("childrenBirthRecords", function () { return [childrenbirthrecordFactory.build(), childrenbirthrecordFactory.build()]; });
var childrenbirthrecordFactory = new external_rosie_["Factory"]()
    .sequence("birthcertno", function (i) { return ({
    "value": "S556288" + i,
}); })
    .sequence("name", function (i) { return ({
    "value": "child" + i,
}); })
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

// CONCATENATED MODULE: ./src/myinfo/domain/map.ts

var occupation;
(function (occupation) {
    var codeToDesc = {
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
    var codeToDesc = {
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
    var codeToDesc = {
        "F": "Female",
        "M": "Male",
        "U": "Unknown",
    };
    sex.map = generateTwoWayMap(codeToDesc);
})(sex || (sex = {}));
var comstatus;
(function (comstatus) {
    var codeToDesc = {
        "Y": "Eligible",
        "N": "Not Eligible",
    };
    comstatus.map = generateTwoWayMap(codeToDesc);
})(comstatus || (comstatus = {}));
var lifestatus;
(function (lifestatus) {
    var codeToDesc = {
        "A": "ALIVE",
        "D": "DECEASED",
    };
    lifestatus.map = generateTwoWayMap(codeToDesc);
})(lifestatus || (lifestatus = {}));
var validity;
(function (validity) {
    var codeToDesc = {
        "V": "Valid",
        "E": "Expired",
        "I": "Invalid",
        "N": "Not Holding PDL",
    };
    validity.map = generateTwoWayMap(codeToDesc);
})(validity || (validity = {}));
var hdbtype;
(function (hdbtype) {
    var codeToDesc = {
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
    var codeToDesc = {
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
    var codeToDesc = {
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
    var codeToDesc = {
        "1": "SINGLE",
        "2": "MARRIED",
        "3": "WIDOWED",
        "5": "DIVORCED",
    };
    marital.map = generateTwoWayMap(codeToDesc);
})(marital || (marital = {}));
var edulevel;
(function (edulevel) {
    var codeToDesc = {
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
    var codeToDesc = {
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
    passtype.map = { codeToDesc: codeToDesc };
})(passtype || (passtype = {}));
var map_status;
(function (status) {
    var codeToDesc = {
        "1": "LIVE",
        "2": "DE-REGISTERED",
    };
    status.map = generateTwoWayMap(codeToDesc);
})(map_status || (map_status = {}));
/**
 * Generates codeToDesc, which is a key: value map and descToCode, which is an inverse of codeToDesc
 * Assumes value is a string/number and can be used as a inverse key
 * @param codeToDesc
 */
function generateTwoWayMap(codeToDesc) {
    return {
        codeToDesc: codeToDesc,
        descToCode: Object(external_lodash_["invert"])(codeToDesc),
    };
}

// EXTERNAL MODULE: ./src/myinfo/domain/myinfo-domain.ts
var myinfo_domain = __webpack_require__(5);

// CONCATENATED MODULE: ./src/myinfo/domain/profilestatus-domain.ts
var ProfileStatusEnum;
(function (ProfileStatusEnum) {
    ProfileStatusEnum["NO_PROFILE"] = "01";
    ProfileStatusEnum["INCOMPLETE_VERIFIED_FIELDS"] = "02";
    ProfileStatusEnum["COMPLETE_VERIFIED_FIELDS"] = "03";
    ProfileStatusEnum["UNKNOWN"] = "04";
})(ProfileStatusEnum || (ProfileStatusEnum = {}));

// CONCATENATED MODULE: ./src/myinfo/domain/index.ts





// CONCATENATED MODULE: ./src/myinfo/fake/profiles/fake-profile.ts
/**
 * Used in MyInfo.Fake.Helper.getPersonData to get a archetype person
 */
var ProfileArchetype;
(function (ProfileArchetype) {
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
    ProfileArchetype["MR_SG_UNCLE_MG_NEED_ADDR_UPDATE"] = "Mr SG Uncle, MG needs address update";
})(ProfileArchetype || (ProfileArchetype = {}));

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyPerfect.ts


var id = "S8399420G";
var mrSGDaddyPerfect_name = ProfileArchetype.MR_SG_DADDY_PERFECT;
var mrSGDaddyPerfect = {
    id: id,
    name: mrSGDaddyPerfect_name,
    // tslint:disable-next-line: no-big-function
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyPerfect_name : profileName;
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
                    "value": 55,
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

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrPRDaddyPerfect.ts




var mrPRDaddyPerfect_id = "S2599302J";
var mrPRDaddyPerfect_name = ProfileArchetype.MR_PR_DADDY_PERFECT;
var mrPRDaddyPerfect = {
    id: mrPRDaddyPerfect_id,
    name: mrPRDaddyPerfect_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrPRDaddyPerfect_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.nationality.code = "AD";
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        return profile;
    },
};

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/childbirthRecords.ts

var formatDateToString = function (date) {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return external_moment_().format("YYYY-MM-DD").toString();
};
var childYoungest = {
    birthcertno: { value: "T1828432J" },
    name: { value: "Youngest Tan Ke Xuan" },
    dob: { value: formatDateToString() },
};
var child1MonthOld = {
    birthcertno: { value: "T4383608G" },
    name: { value: "1 Month Tan Ke Yu" },
    dob: { value: formatDateToString(external_moment_().subtract(1, "months")) },
};
var child2MonthsOld = {
    birthcertno: { value: "T7153144E" },
    name: { value: "2 Months Tan Keh Guan" },
    dob: { value: formatDateToString(external_moment_().subtract(2, "months")) },
};
var childMiddle1 = {
    birthcertno: { value: "T1694727F" },
    name: { value: "Middle Tan Twin1" },
    dob: { value: formatDateToString(external_moment_().subtract(2, "years")) },
};
var childMiddle2 = {
    birthcertno: { value: "T1669632Z" },
    name: { value: "Middle Tan Twin2" },
    dob: { value: formatDateToString(external_moment_().subtract(2, "years")) },
};
var childMiddle3 = {
    birthcertno: { value: "T1509027D" },
    name: { value: "Tan Boy" },
    dob: { value: formatDateToString(external_moment_().subtract(3, "years")) },
};
var childMiddle4 = {
    birthcertno: { value: "T1422931G" },
    name: { value: "Tan Girl" },
    dob: { value: formatDateToString(external_moment_().subtract(4, "years")) },
};
var childMiddle5 = {
    birthcertno: { value: "T1511326F" },
    name: { value: "Tan Girl Younger" },
    dob: { value: formatDateToString(external_moment_().subtract(5, "years")) },
};
var childSuperOld = {
    birthcertno: { value: "T0050832I" },
    name: { value: "Super Old Tan Ke Wei" },
    dob: { value: formatDateToString(external_moment_().subtract(8, "years")) },
};
var child6YearsOld = {
    birthcertno: { value: "T1364674G" },
    name: { value: "Turning 6 Tan Kid born Jan 1st" },
    dob: { value: formatDateToString(external_moment_().subtract(6, "years").startOf("year")) },
};
var child7YearsOld = {
    birthcertno: { value: "T1210114C" },
    name: { value: "Turning 7 Tan Kid born Dec 31" },
    dob: { value: formatDateToString(external_moment_().subtract(7, "years").endOf("year")) },
};
var ChildrenRecords = {
    childYoungest: childYoungest,
    child1MonthOld: child1MonthOld,
    child2MonthsOld: child2MonthsOld,
    childMiddle1: childMiddle1,
    childMiddle2: childMiddle2,
    childMiddle3: childMiddle3,
    childMiddle4: childMiddle4,
    childMiddle5: childMiddle5,
    childSuperOld: childSuperOld,
    child6YearsOld: child6YearsOld,
    child7YearsOld: child7YearsOld,
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyChildIsOld.ts




var mrSGDaddyChildIsOld_id = "T2446959F";
var mrSGDaddyChildIsOld_name = ProfileArchetype.MR_SG_DADDY_CHILD_IS_OLD;
var mrSGDaddyChildIsOld = {
    id: mrSGDaddyChildIsOld_id,
    name: mrSGDaddyChildIsOld_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyChildIsOld_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = [ChildrenRecords.childSuperOld];
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyChildNone.ts



var mrSGDaddyChildNone_id = "T2446959F";
var mrSGDaddyChildNone_name = ProfileArchetype.MR_SG_DADDY_CHILD_NONE;
var mrSGDaddyChildNone = {
    id: mrSGDaddyChildNone_id,
    name: mrSGDaddyChildNone_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyChildNone_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = [];
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyLongNames.ts




var mrSGDaddyLongNames_id = "T2446959F";
var mrSGDaddyLongNames_name = ProfileArchetype.MR_SG_DADDY_LONG_NAMES;
var mrSGDaddyLongNames = {
    id: mrSGDaddyLongNames_id,
    name: mrSGDaddyLongNames_name,
    generate: function (profileName) {
        var longName = "Princess Aura Nurr Ermily Amara Auliya Bidadari S/O (Nawal), El@Björk' María-Jose!";
        profileName = external_lodash_["isEmpty"](profileName) ? longName : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = external_lodash_["values"](ChildrenRecords);
        profile.childrenbirthrecords[0].name.value = longName + " JR";
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyManyChildren.ts




var mrSGDaddyManyChildren_id = "T2446959F";
var mrSGDaddyManyChildren_name = ProfileArchetype.MR_SG_DADDY_MANY_CHILDREN;
var mrSGDaddyManyChildren = {
    id: mrSGDaddyManyChildren_id,
    name: mrSGDaddyManyChildren_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyManyChildren_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = external_lodash_["values"](ChildrenRecords);
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGPreschoolRegister.ts




var mrSGPreschoolRegister_id = "S0350934F";
var mrSGPreschoolRegister_name = ProfileArchetype.MR_SG_PRESCHOOL_CHILDREN;
var mrPreschoolRegister = {
    id: mrSGPreschoolRegister_id,
    name: mrSGPreschoolRegister_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGPreschoolRegister_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = external_lodash_["values"](mrSGPreschoolRegister_ChildrenRecords);
        return profile;
    },
};
var mrSGPreschoolRegister_formatDateToString = function (date) {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return external_moment_().format("YYYY-MM-DD").toString();
};
// the children here have birthcertno related to the preschool interest registration mock
var c1 = {
    birthcertno: { value: "T1639540J" },
    name: { value: "Child w level not offered" },
    dob: { value: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(2, "years")) },
};
var c2 = {
    birthcertno: { value: "T1717003H" },
    name: { value: "Child w ineligible" },
    dob: { value: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(2, "years")) },
};
var c3 = {
    birthcertno: { value: "T1728256A" },
    name: { value: "Child w registered" },
    dob: { value: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(3, "years")) },
};
var c4 = {
    birthcertno: { value: "T1766863Z" },
    name: { value: "Child w nothing" },
    dob: { value: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(4, "years")) },
};
var c5 = {
    birthcertno: { value: "T1783246D" },
    name: { value: "Child2 w level not offered " },
    dob: { value: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(5, "years")) },
};
var c6 = {
    birthcertno: { value: "T1790160A" },
    name: { value: "Child2 w ineligible" },
    dob: { value: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(6, "years")) },
};
var mrSGPreschoolRegister_ChildrenRecords = {
    c1: c1, c2: c2, c3: c3, c4: c4, c5: c5, c6: c6,
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/common.ts
var unavailableField = {
    lastupdated: "2018-05-10",
    source: "1",
    classification: "C",
    unavailable: true,
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyMissingFields.ts




var mrSGDaddyMissingFields_id = "S8779834H";
var mrSGDaddyMissingFields_name = ProfileArchetype.MR_SG_DADDY_MISSING_FIELDS;
var mrSGDaddyMissingFields = {
    id: mrSGDaddyMissingFields_id,
    name: mrSGDaddyMissingFields_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyMissingFields_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.hanyupinyinname = unavailableField;
        profile.aliasname = unavailableField;
        profile.hanyupinyinaliasname = unavailableField;
        profile.secondaryrace = unavailableField;
        profile.residentialstatus = unavailableField;
        profile.homeno = unavailableField;
        profile.marriagecertno = unavailableField;
        profile.countryofmarriage = unavailableField;
        if (!!profile.childrenbirthrecords) {
            profile.childrenbirthrecords = profile.childrenbirthrecords.slice(0, 1);
        }
        profile.edulevel = unavailableField;
        profile.occupation = unavailableField;
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGDaddyMissingUneditableFields.ts




var mrSGDaddyMissingUneditableFields_id = "S8974352D";
var mrSGDaddyMissingUneditableFields_name = ProfileArchetype.MR_SG_DADDY_MISSING_UNEDITABLE_FIELDS;
var mrSGDaddyMissingUneditableFields = {
    id: mrSGDaddyMissingUneditableFields_id,
    name: mrSGDaddyMissingUneditableFields_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyMissingUneditableFields_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        // Uneditable field
        profile.nationality = unavailableField;
        profile.dob = unavailableField;
        profile.regadd = unavailableField;
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrPRDaddyOneChild.ts





var mrPRDaddyOneChild_id = "S7936715Z";
var mrPRDaddyOneChild_name = ProfileArchetype.MR_PR_DADDY_ONE_CHILD;
var mrPRDaddyOneChild = {
    id: mrPRDaddyOneChild_id,
    name: mrPRDaddyOneChild_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrPRDaddyOneChild_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.residentialstatus.code = "P";
        profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        profile.childrenbirthrecords = [ChildrenRecords.childYoungest];
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrsMYMommyPerfect.ts




var mrsMYMommyPerfect_id = "F5994458N";
var mrsMYMommyPerfect_name = ProfileArchetype.MRS_MY_MOMMY_PERFECT;
var mrsMYMommyPerfect = {
    id: mrsMYMommyPerfect_id,
    name: mrsMYMommyPerfect_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrsMYMommyPerfect_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = sex.map.codeToDesc[profile.sex.code];
        profile.nationality.code = "MY";
        profile.birthcountry.code = "MY";
        profile.residentialstatus.code = "A";
        profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        profile.passportnumber.value = "A00000000";
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrsSGMommyPerfect.ts




var mrsSGMommyPerfect_id = "T2446959F";
var mrsSGMommyPerfect_name = ProfileArchetype.MRS_SG_MOMMY_PERFECT;
var mrsSGMommyPerfect = {
    id: mrsSGMommyPerfect_id,
    name: mrsSGMommyPerfect_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrsSGMommyPerfect_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = "F";
        profile.sex.desc = sex.map.codeToDesc[profile.sex.code];
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrMYDaddyPerfect.ts




var mrMYDaddyPerfect_id = "F5994458N";
var mrMYDaddyPerfect_name = ProfileArchetype.MR_MY_DADDY_PERFECT;
var mrMYDaddyPerfect = {
    id: mrMYDaddyPerfect_id,
    name: mrMYDaddyPerfect_name,
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrMYDaddyPerfect_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.sex.code = "M";
        profile.sex.desc = sex.map.codeToDesc[profile.residentialstatus.code];
        profile.nationality.code = "MY";
        profile.birthcountry.code = "MY";
        profile.residentialstatus.code = "A";
        profile.residentialstatus.desc = residentialstatus.map.codeToDesc[profile.residentialstatus.code];
        profile.passportnumber.value = "A00000000";
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/mrSGUncleMgNeedAddress.ts



var mrSGUncleMgNeedAddress_id = "S8399420G";
var mrSGUncleMgNeedAddress_name = ProfileArchetype.MR_SG_UNCLE_MG_NEED_ADDR_UPDATE;
var mrSGUncleMgNeedAddress = {
    id: mrSGUncleMgNeedAddress_id,
    name: mrSGUncleMgNeedAddress_name,
    // tslint:disable-next-line: no-big-function
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGUncleMgNeedAddress_name : profileName;
        var profile = mrSGDaddyPerfect.generate(profileName);
        profile.merdekagen.message.code = "3";
        return profile;
    },
};

// CONCATENATED MODULE: ./src/myinfo/fake/profiles/fake-profiles.ts














/**
 * Exhaustive list of our MyInfo archetype profiles
 */
var profiles = [
    mrSGDaddyPerfect,
    mrsSGMommyPerfect,
    mrPRDaddyPerfect,
    mrsMYMommyPerfect,
    mrSGDaddyChildNone,
    mrPRDaddyOneChild,
    mrSGDaddyChildIsOld,
    mrSGDaddyManyChildren,
    mrPreschoolRegister,
    mrSGDaddyLongNames,
    mrSGDaddyMissingFields,
    mrSGDaddyMissingUneditableFields,
    mrMYDaddyPerfect,
    mrSGUncleMgNeedAddress,
];

// CONCATENATED MODULE: ./src/myinfo/fake/fake-helper.ts
var fake_helper_assign = (undefined && undefined.__assign) || function () {
    fake_helper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return fake_helper_assign.apply(this, arguments);
};



var fake_helper_FakeMyInfoHelper = /** @class */ (function () {
    /**
     * @param attributes attributes to return in the MyInfoPerson in getPersonData
     */
    function FakeMyInfoHelper(attributes) {
        var _this = this;
        this.attributes = attributes;
        /**
         * fake getPersonData
         * @param input the mock profile parameters.
         * See FakeMyInfoPersonArchetypes for the actual person.
         */
        this.getPersonBasic = function (mockParams) {
            var mockProfile = profiles.find(function (profile) { return profile.name === mockParams.archetype; });
            if (!mockProfile) {
                return null;
            }
            var myinfoPerson = fake_helper_assign({}, mockProfile.generate());
            if (!Object(external_lodash_["isEmpty"])(mockParams.marital)) {
                myinfoPerson.marital.code = mockParams.marital;
                myinfoPerson.marital.desc = map_namespaceObject.marital.map.codeToDesc[mockParams.marital];
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.marriagedate)) {
                myinfoPerson.marriagedate.value = mockParams.marriagedate;
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.marriagecertno)) {
                myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.countryofmarriage)) {
                myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
                myinfoPerson.countryofmarriage.desc = map_namespaceObject.countryofmarriage.map.codeToDesc[mockParams.countryofmarriage];
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.dob)) {
                myinfoPerson.dob.value = mockParams.dob;
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.occupation)) {
                myinfoPerson.occupation.code = mockParams.occupation;
                myinfoPerson.occupation.desc = map_namespaceObject.occupation.map.codeToDesc[mockParams.occupation];
                myinfoPerson.occupation.value = null;
            }
            else {
                if (!Object(external_lodash_["isEmpty"])(mockParams.occupationfreeform)) {
                    myinfoPerson.occupation.value = mockParams.occupationfreeform;
                    myinfoPerson.occupation.code = null;
                    myinfoPerson.occupation.desc = null;
                }
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.merdekageneligible)) {
                myinfoPerson.merdekagen.eligibility = { value: mockParams.merdekageneligible };
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.merdekagenmessagecode)) {
                myinfoPerson.merdekagen.message.code = mockParams.merdekagenmessagecode;
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.merdekagenquantum)) {
                myinfoPerson.merdekagen.quantum = { value: mockParams.merdekagenquantum };
            }
            if (!_this.attributes) {
                return myinfoPerson;
            }
            return filterThroughMyInfoAttributes(myinfoPerson, _this.attributes);
        };
    }
    return FakeMyInfoHelper;
}());

/**
 * @description Returns new fake person with only the attributes listed in attributes param. Does not mutate.
 *
 * For the special field childrenbirthrecords, attributes can include childrenbirthrecords.name, childrenbirthrecords.sex etc.
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person, attributes) {
    var _a = Object(external_lodash_["partition"])(attributes, function (value) { return value.startsWith("childrenbirthrecords."); }), rawCbrAttributes = _a[0], normalAttributes = _a[1];
    var filteredPerson = filterThroughAttributes(person, normalAttributes);
    if (rawCbrAttributes.length > 0) {
        var childrenbirthrecordsAttributes_1 = Object(external_lodash_["map"])(rawCbrAttributes, function (cbrAttribute) { return cbrAttribute.split(".")[1]; });
        // get filtered childrenbirthrecords
        var filteredChildrenbirthrecords = Object(external_lodash_["map"])(person.childrenbirthrecords, function (cbr) { return filterThroughAttributes(cbr, childrenbirthrecordsAttributes_1); });
        Object(external_lodash_["set"])(filteredPerson, "childrenbirthrecords", filteredChildrenbirthrecords);
    }
    return filteredPerson;
}
function filterThroughAttributes(object, attributes) {
    var attrs = new Set(attributes);
    return Object(external_lodash_["toPairs"])(object)
        .filter(function (_a) {
        var k = _a[0];
        return attrs.has(k);
    })
        .reduce(function (accumulator, _a) {
        var _b;
        var k = _a[0], v = _a[1];
        return (fake_helper_assign({}, accumulator, (_b = {}, _b[k] = v, _b)));
    }, {});
}

// CONCATENATED MODULE: ./src/myinfo/fake/fake-request.ts
var fake_request_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var fake_request_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FakeMyInfoRequest = /** @class */ (function () {
    function FakeMyInfoRequest() {
    }
    FakeMyInfoRequest.prototype.get = function (expectedResponse) {
        return fake_request_awaiter(this, void 0, void 0, function () {
            return fake_request_generator(this, function (_a) {
                return [2 /*return*/, expectedResponse];
            });
        });
    };
    FakeMyInfoRequest.prototype.postForm = function (expectedResponse) {
        return fake_request_awaiter(this, void 0, void 0, function () {
            return fake_request_generator(this, function (_a) {
                return [2 /*return*/, expectedResponse];
            });
        });
    };
    return FakeMyInfoRequest;
}());


// CONCATENATED MODULE: ./src/myinfo/fake/index.ts







// CONCATENATED MODULE: ./src/myinfo/index.ts





// CONCATENATED MODULE: ./src/singpass/singpass-helper.ts
var singpass_helper_assign = (undefined && undefined.__assign) || function () {
    singpass_helper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return singpass_helper_assign.apply(this, arguments);
};
var singpass_helper_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var singpass_helper_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SessionRefreshResult;
(function (SessionRefreshResult) {
    SessionRefreshResult["SUCCESS"] = "SUCCESS";
    SessionRefreshResult["SINGPASS_ERROR"] = "SINGPASS_ERROR";
    SessionRefreshResult["INVALID_SESSION_ID"] = "INVALID_SESSION_ID";
})(SessionRefreshResult || (SessionRefreshResult = {}));
var SessionLogoutResult;
(function (SessionLogoutResult) {
    SessionLogoutResult["SUCCESS"] = "SUCCESS";
    SessionLogoutResult["SINGPASS_ERROR"] = "SINGPASS_ERROR";
})(SessionLogoutResult || (SessionLogoutResult = {}));
var singpass_helper_OidcHelper = /** @class */ (function () {
    function OidcHelper(props) {
        var _this = this;
        this.SINGPASS_SESSION_COOKIE_NAME = "PD-S-SESSION-ID";
        this.axiosClient = createClient({
            timeout: 10000,
        });
        this.constructAuthorizationUrl = function (state, nonce) {
            var queryParams = singpass_helper_assign({ state: state }, (nonce ? { nonce: nonce } : {}), { redirect_uri: _this.redirectUri, scope: "openid", client_id: _this.clientID, response_type: "code" });
            var queryString = external_querystring_["stringify"](queryParams);
            return _this.authorizationUrl + "?" + queryString;
        };
        /**
         * Get tokens from Singpass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = function (authCode, axiosRequestConfig) { return singpass_helper_awaiter(_this, void 0, void 0, function () {
            var params, body, config, response;
            return singpass_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            grant_type: "authorization_code",
                            code: authCode,
                            client_id: this.clientID,
                            client_secret: this.clientSecret,
                            redirect_uri: this.redirectUri,
                        };
                        body = external_querystring_["stringify"](params);
                        config = singpass_helper_assign({ headers: { "content-type": "application/x-www-form-urlencoded" } }, axiosRequestConfig);
                        return [4 /*yield*/, this.axiosClient.post(this.tokenUrl, body, config)];
                    case 1:
                        response = _a.sent();
                        if (!response.data.id_token) {
                            Logger.error("Failed to get ID token: invalid response data", response.data);
                            throw new Error("Failed to get ID token");
                        }
                        return [2 /*return*/, response.data];
                }
            });
        }); };
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
    OidcHelper.prototype.getIdTokenPayload = function (tokens) {
        return singpass_helper_awaiter(this, void 0, void 0, function () {
            var id_token, decryptedJwe, jwsPayload, verifiedJws, e_1;
            return singpass_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id_token = tokens.id_token;
                        return [4 /*yield*/, JweUtil_namespaceObject.decryptJWE(id_token, this.jweDecryptKey)];
                    case 1:
                        decryptedJwe = _a.sent();
                        jwsPayload = decryptedJwe.payload.toString();
                        return [4 /*yield*/, JweUtil_namespaceObject.verifyJWS(jwsPayload, this.jwsVerifyKey)];
                    case 2:
                        verifiedJws = _a.sent();
                        return [2 /*return*/, JSON.parse(verifiedJws.payload.toString())];
                    case 3:
                        e_1 = _a.sent();
                        Logger.error("Failed to get token payload", e_1);
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the nric and uuid from the token payload
     */
    OidcHelper.prototype.extractNricAndUuidFromPayload = function (payload) {
        var sub = payload.sub;
        if (sub) {
            var extractionRegex = /s=([STFG]\d{7}[A-Z]).*,u=(.*)/i;
            var matchResult = sub.match(extractionRegex);
            if (!matchResult) {
                throw Error("Token payload sub property is invalid, does not contain valid NRIC and uuid string");
            }
            var nric = matchResult[1];
            var uuid = matchResult[2];
            return { nric: nric, uuid: uuid };
        }
        throw Error("Token payload sub property is not defined");
    };
    /**
     * [DEPRECATED] Refresh the Singpass session, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     * @param state state that will be passed to the your redirect uri from this refresh call. defaults to "dummyState"
     * @returns INVALID_SESSION_ID - the sessionId param is no longer valid
     * @returns SINGPASS_ERROR - the call to Singpass server to refresh is not successful
     * @returns SUCCESS - refresh sessionId successfully
     */
    OidcHelper.prototype.refreshSession = function (sessionId, state) {
        if (state === void 0) { state = "dummyState"; }
        return singpass_helper_awaiter(this, void 0, void 0, function () {
            var authorizationUrl, requestConfig, result, e_2;
            return singpass_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authorizationUrl = this.constructAuthorizationUrl(state);
                        requestConfig = { headers: { Cookie: this.SINGPASS_SESSION_COOKIE_NAME + "=" + sessionId } };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosClient.get(authorizationUrl, requestConfig)];
                    case 2:
                        result = _a.sent();
                        if (result.request.res.responseUrl.includes("saml.singpass.gov.sg")) {
                            Logger.warn("Attempted to refresh session with invalid session ID " + sessionId);
                            return [2 /*return*/, SessionRefreshResult.INVALID_SESSION_ID];
                        }
                        return [2 /*return*/, SessionRefreshResult.SUCCESS];
                    case 3:
                        e_2 = _a.sent();
                        Logger.warn("Singpass Error while attempting to refresh session for sessionId: " + sessionId + "\nError:", e_2);
                        return [2 /*return*/, SessionRefreshResult.SINGPASS_ERROR];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * [DEPRECATED] Log user out of Singpass, using a valid session id (that is retrieved from Singpass domain cookie)
     * @param sessionId the session id extracted from PD-S-SESSION-ID in the user agent
     */
    OidcHelper.prototype.logoutOfSession = function (sessionId) {
        return singpass_helper_awaiter(this, void 0, void 0, function () {
            var requestConfig, e_3;
            return singpass_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestConfig = { headers: { Cookie: this.SINGPASS_SESSION_COOKIE_NAME + "=" + sessionId } };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosClient.get(this.logoutUrl, requestConfig)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, SessionLogoutResult.SUCCESS];
                    case 3:
                        e_3 = _a.sent();
                        Logger.warn("Singpass Error while attempting to logout of Singpass session", e_3);
                        return [2 /*return*/, SessionLogoutResult.SINGPASS_ERROR];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return OidcHelper;
}());


// CONCATENATED MODULE: ./src/singpass/index.ts


// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport MyInfo */__webpack_require__.d(__webpack_exports__, "MyInfo", function() { return myinfo_namespaceObject; });
/* concated harmony reexport Singpass */__webpack_require__.d(__webpack_exports__, "Singpass", function() { return singpass_namespaceObject; });





/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map