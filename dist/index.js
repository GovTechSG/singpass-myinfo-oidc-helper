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
__webpack_require__.d(profilestatus_domain_namespaceObject, "ProfileStautsEnum", function() { return ProfileStautsEnum; });
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
__webpack_require__.d(myinfo_namespaceObject, "domain", function() { return myinfo_domain; });
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

// CONCATENATED MODULE: ./src/myinfo/domain/map.ts

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
];

// EXTERNAL MODULE: ./src/myinfo/domain/myinfo-domain.ts
var myinfo_domain = __webpack_require__(5);

// CONCATENATED MODULE: ./src/myinfo/domain/profilestatus-domain.ts
var ProfileStautsEnum;
(function (ProfileStautsEnum) {
    ProfileStautsEnum["NO_PROFILE"] = "01";
    ProfileStautsEnum["INCOMPLETE_VERIFIED_FIELDS"] = "02";
    ProfileStautsEnum["COMPLETE_VERIFIED_FIELDS"] = "03";
    ProfileStautsEnum["UNKNOWN"] = "04";
})(ProfileStautsEnum || (ProfileStautsEnum = {}));

// CONCATENATED MODULE: ./src/myinfo/domain/index.ts





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
                // FIXME: to add code to desc mapping for countries
                myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage;
                myinfoPerson.countryofmarriage.desc = "";
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.dob)) {
                myinfoPerson.dob.value = mockParams.dob;
            }
            if (!Object(external_lodash_["isEmpty"])(mockParams.occupation)) {
                // FIXME: to add code to desc mapping for occupations
                myinfoPerson.occupation.code = mockParams.occupation;
                myinfoPerson.occupation.desc = "";
            }
            else {
                if (!Object(external_lodash_["isEmpty"])(mockParams.occupationfreeform)) {
                    myinfoPerson.occupation.value = mockParams.occupationfreeform;
                    myinfoPerson.occupation.code = "";
                    myinfoPerson.occupation.desc = "";
                }
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