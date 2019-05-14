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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

module.exports = require("node-jose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("is-base64");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("node-apex-api-security");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios-https-proxy-fix");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SigningUtil_namespaceObject = {};
__webpack_require__.r(SigningUtil_namespaceObject);
__webpack_require__.d(SigningUtil_namespaceObject, "HttpMethod", function() { return HttpMethod; });
__webpack_require__.d(SigningUtil_namespaceObject, "generateAuthorizationHeader", function() { return generateAuthorizationHeader; });
var JweUtil_namespaceObject = {};
__webpack_require__.r(JweUtil_namespaceObject);
__webpack_require__.d(JweUtil_namespaceObject, "decryptJWE", function() { return decryptJWE; });
__webpack_require__.d(JweUtil_namespaceObject, "verifyJWS", function() { return verifyJWS; });
var fake_namespaceObject = {};
__webpack_require__.r(fake_namespaceObject);
__webpack_require__.d(fake_namespaceObject, "Helper", function() { return fake_helper_FakeMyInfoHelper; });
__webpack_require__.d(fake_namespaceObject, "Request", function() { return FakeMyInfoRequest; });
__webpack_require__.d(fake_namespaceObject, "ProfileArchetype", function() { return ProfileArchetype; });
__webpack_require__.d(fake_namespaceObject, "profiles", function() { return profiles; });
var myinfo_namespaceObject = {};
__webpack_require__.r(myinfo_namespaceObject);
__webpack_require__.d(myinfo_namespaceObject, "Helper", function() { return myinfo_helper_MyInfoHelper; });
__webpack_require__.d(myinfo_namespaceObject, "Request", function() { return myinfo_request_MyInfoRequest; });
__webpack_require__.d(myinfo_namespaceObject, "Fake", function() { return fake_namespaceObject; });
var singpass_namespaceObject = {};
__webpack_require__.r(singpass_namespaceObject);
__webpack_require__.d(singpass_namespaceObject, "SessionRefreshResult", function() { return SessionRefreshResult; });
__webpack_require__.d(singpass_namespaceObject, "SessionLogoutResult", function() { return SessionLogoutResult; });
__webpack_require__.d(singpass_namespaceObject, "OidcHelper", function() { return singpass_helper_OidcHelper; });

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/util/ConfigUtils.ts
var displayWarnings = true;
function disableMissingEnvWarnings() {
    displayWarnings = false;
}
function getValueFromEnv(key, defaultValue) {
    var value = !!process.env[key] ? process.env[key].trim() : defaultValue;
    if (!value && displayWarnings) {
        console.warn("Configuration key not found or empty: " + key);
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
            console.warn("Configuration " + key + " is not a valid integer: " + stringValue);
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
        console.warn("Configuration " + key + " is not a valid boolean: " + stringValue);
    }
    return stringValue === "true";
}

// EXTERNAL MODULE: external "is-base64"
var external_is_base64_ = __webpack_require__(4);

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

// CONCATENATED MODULE: ./src/util/JestUtil.ts
/**
 * @returns Whether the code is currently running in Jest or not
 */
function isTest() {
    return global.describe && global.it;
}

// EXTERNAL MODULE: external "node-apex-api-security"
var external_node_apex_api_security_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/util/SigningUtil.ts


var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
})(HttpMethod || (HttpMethod = {}));
function generateAuthorizationHeader(realm, authPrefix, httpMethod, url, appId, formJson, privateKeyContent, privateKeyPassword, bearer, nonce, timestamp) {
    // const eRealm = _.replace(realm, ".api.gov.sg", ".e.api.gov.sg");
    var eURL = external_lodash_["replace"](url, ".api.gov.sg", ".e.api.gov.sg");
    var rsaHeader = external_node_apex_api_security_["ApiSigningUtil"].getSignatureToken({
        authPrefix: authPrefix,
        appId: appId,
        urlPath: eURL,
        httpMethod: httpMethod,
        realm: realm,
        keyString: privateKeyContent,
        passphrase: privateKeyPassword,
        queryString: formJson,
        nonce: nonce,
        timestamp: timestamp,
    });
    if (bearer && bearer.length > 0) {
        return rsaHeader + ", Bearer " + bearer;
    }
    else {
        return rsaHeader;
    }
}

// EXTERNAL MODULE: external "node-jose"
var external_node_jose_ = __webpack_require__(2);

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

// CONCATENATED MODULE: ./src/util/index.ts







// EXTERNAL MODULE: external "axios-https-proxy-fix"
var external_axios_https_proxy_fix_ = __webpack_require__(6);
var external_axios_https_proxy_fix_default = /*#__PURE__*/__webpack_require__.n(external_axios_https_proxy_fix_);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(7);

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


var AUTH_PREFIX = "apex_l2_eg";
var TIMEOUT = 20000;
/**
 * Expose a request class for MyInfo endpoints other than those defined in MyInfoHelper
 */
var myinfo_request_MyInfoRequest = /** @class */ (function () {
    function MyInfoRequest(props) {
        this.axiosClient = createClient({
            timeout: 10000,
        });
        this.realm = props.realm;
        this.appId = props.appId;
        this.privateKeyContent = props.privateKeyContent;
        this.privateKeyPassword = props.privateKeyPassword;
    }
    MyInfoRequest.prototype.get = function (uri, params, bearer) {
        return myinfo_request_awaiter(this, void 0, void 0, function () {
            var authHeader, requestConfig, response;
            return myinfo_request_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHeader = SigningUtil_namespaceObject.generateAuthorizationHeader(this.realm, AUTH_PREFIX, SigningUtil_namespaceObject.HttpMethod.GET, uri, this.appId, params, this.privateKeyContent, this.privateKeyPassword, bearer);
                        requestConfig = {
                            params: params,
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
    MyInfoRequest.prototype.postForm = function (uri, formData, bearer) {
        return myinfo_request_awaiter(this, void 0, void 0, function () {
            var authHeader, requestConfig, response;
            return myinfo_request_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHeader = SigningUtil_namespaceObject.generateAuthorizationHeader(this.realm, AUTH_PREFIX, SigningUtil_namespaceObject.HttpMethod.POST, uri, this.appId, formData, this.privateKeyContent, this.privateKeyPassword, bearer);
                        requestConfig = {
                            headers: {
                                "Authorization": authHeader,
                                "Cache-Control": "no-cache",
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        };
                        return [4 /*yield*/, this.axiosClient.post(uri, formData, requestConfig)];
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



var myinfo_helper_MyInfoHelper = /** @class */ (function () {
    function MyInfoHelper(props) {
        var _this = this;
        /**
         * Obtain person data using uinfin.
         * In the generic K, pass in the list of string literal of the attributes you expect to get back.
         * getPersonData will return an object with only the properties matching the keys.
         * e.g. when K = "name" | "email", getPersonData returns an object looking like { name, email }
         */
        this.getPersonData = function (uinfin) { return myinfo_helper_awaiter(_this, void 0, void 0, function () {
            var url, params, response, error_1, encryptedPersonJWE, jwe, personData, error_2;
            return myinfo_helper_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.personBasicURL + "/" + uinfin;
                        params = {
                            client_id: this.clientID,
                            singpassEserviceId: this.singpassEserviceID,
                            attributes: external_lodash_["join"](this.attributes, ","),
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
                        console.error("Error requesting for person data (JWE) from MyInfo", error_1);
                        throw error_1;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        encryptedPersonJWE = response.data;
                        return [4 /*yield*/, decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE)];
                    case 5:
                        jwe = _a.sent();
                        personData = JSON.parse(jwe.payload.toString());
                        if (personData === undefined || personData == null) {
                            throw new Error("Person data cannot be null");
                        }
                        return [2 /*return*/, personData];
                    case 6:
                        error_2 = _a.sent();
                        console.error("Error verifying person data from MyInfo", error_2);
                        throw error_2;
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        if (external_lodash_["isEmpty"](props.attributes)) {
            throw new Error("Attribute list must contain values");
        }
        this.attributes = props.attributes;
        this.clientID = props.clientID;
        this.personBasicURL = props.personBasicURL;
        this.singpassEserviceID = props.singpassEserviceID;
        this.keyToDecryptJWE = props.keyToDecryptJWE;
        var requestProps = {
            realm: props.apexSigningURL,
            appId: props.clientID,
            privateKeyContent: props.apexPrivateCert,
            privateKeyPassword: props.apexPrivateCertPass,
        };
        this.myInfoRequest = new myinfo_request_MyInfoRequest(requestProps);
    }
    return MyInfoHelper;
}());


// CONCATENATED MODULE: ./src/myinfo/helper/index.ts



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
    generate: function (profileName) {
        profileName = external_lodash_["isEmpty"](profileName) ? mrSGDaddyPerfect_name : profileName;
        return {
            "name": {
                "lastupdated": "2015-06-01",
                "source": "1",
                "classification": "C",
                "value": profileName,
            },
            "hanyupinyinname": {
                "lastupdated": "2015-06-01",
                "source": "1",
                "classification": "C",
                "value": "CHEN XIAO HUI",
            },
            "aliasname": {
                "lastupdated": "2015-06-01",
                "source": "1",
                "classification": "C",
                "value": "TRICIA TAN XIAO HUI",
            },
            "hanyupinyinaliasname": {
                "lastupdated": "2015-06-01",
                "source": "1",
                "classification": "C",
                "value": "IUH OAIX NAT AICIRT",
            },
            "marriedname": {
                "lastupdated": "2015-06-01",
                "source": "1",
                "classification": "C",
                "value": "",
            },
            "sex": {
                "lastupdated": "2016-03-11",
                "source": "1",
                "classification": "C",
                "value": "M",
            },
            "race": {
                "lastupdated": "2016-03-11",
                "source": "1",
                "classification": "C",
                "value": "CN",
            },
            "secondaryrace": {
                "lastupdated": "2017-08-25",
                "source": "1",
                "classification": "C",
                "value": "EU",
            },
            "dialect": {
                "lastupdated": "2016-03-11",
                "source": "1",
                "classification": "C",
                "value": "SG",
            },
            "nationality": {
                "lastupdated": "2016-03-11",
                "source": "1",
                "classification": "C",
                "value": "SG",
            },
            "dob": {
                "lastupdated": "2016-03-11",
                "source": "1",
                "classification": "C",
                "value": "1983-05-17",
            },
            "birthcountry": {
                "lastupdated": "2016-03-11",
                "source": "1",
                "classification": "C",
                "value": "SG",
            },
            "residentialstatus": {
                "lastupdated": "2017-08-25",
                "source": "1",
                "classification": "C",
                "value": "C",
            },
            "passportnumber": {
                "lastupdated": "2017-08-25",
                "source": "1",
                "classification": "C",
                "value": "E35463874W",
            },
            "passportexpirydate": {
                "lastupdated": "2017-08-25",
                "source": "1",
                "classification": "C",
                "value": "2020-01-01",
            },
            "regadd": {
                "country": "SG",
                "unit": "128",
                "street": "BEDOK NORTH AVENUE 1",
                "lastupdated": "2016-03-11",
                "block": "548",
                "source": "1",
                "postal": "460548",
                "classification": "C",
                "floor": "09",
                "building": "",
            },
            "mailadd": {
                "country": "SG",
                "unit": "128",
                "street": "BEDOK NORTH AVENUE 1",
                "lastupdated": "2016-03-11",
                "block": "548",
                "source": "2",
                "postal": "460548",
                "classification": "C",
                "floor": "09",
                "building": "",
            },
            "billadd": {
                "country": "SG",
                "unit": "",
                "street": "",
                "lastupdated": "",
                "block": "",
                "source": "",
                "postal": "",
                "classification": "",
                "floor": "",
                "building": "",
            },
            "housingtype": {
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
                "value": "",
            },
            "hdbtype": {
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
                "value": "116",
            },
            "ownerprivate": {
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
                "value": "N",
            },
            "email": {
                "lastupdated": "2017-12-13",
                "source": "4",
                "classification": "C",
                "value": "test@gmail.com",
            },
            "homeno": {
                "code": "65",
                "prefix": "+",
                "lastupdated": "2017-11-20",
                "source": "2",
                "classification": "C",
                "nbr": "83416847",
            },
            "mobileno": {
                "code": "65",
                "prefix": "+",
                "lastupdated": "2017-12-13",
                "source": "4",
                "classification": "C",
                "nbr": "83416847",
            },
            "marital": {
                "lastupdated": "2017-03-29",
                "source": "1",
                "classification": "C",
                "value": "2",
            },
            "marriagecertno": {
                "lastupdated": "2018-03-02",
                "source": "1",
                "classification": "C",
                "value": "M1234",
            },
            "countryofmarriage": {
                "lastupdated": "2018-03-02",
                "source": "1",
                "classification": "C",
                "value": "SG",
            },
            "marriagedate": {
                "lastupdated": "",
                "source": "1",
                "classification": "C",
                "value": "2017-01-03",
            },
            "divorcedate": {
                "lastupdated": "",
                "source": "1",
                "classification": "C",
                "value": "",
            },
            "childrenbirthrecords": [
                {
                    "dialect": "HK",
                    "race": "CN",
                    "tob": "0901",
                    "sex": "F",
                    "source": "1",
                    "classification": "C",
                    "birthcertno": "S5562882C",
                    "hanyupinyinname": "Cheng Pei Ni",
                    "hanyupinyinaliasname": "",
                    "marriedname": "",
                    "aliasname": "",
                    "dob": "2011-09-10",
                    "name": "Jo Tan Pei Ni",
                    "lastupdated": "2018-05-16",
                    "secondaryrace": "",
                },
                {
                    "dialect": "HK",
                    "race": "CN",
                    "tob": "2021",
                    "sex": "F",
                    "source": "1",
                    "classification": "C",
                    "birthcertno": "S8816582I",
                    "hanyupinyinname": "Cheng Wei Ling",
                    "hanyupinyinaliasname": "",
                    "marriedname": "",
                    "aliasname": "",
                    "dob": "2015-07-18",
                    "name": "Joyce Tan Wei Ling",
                    "lastupdated": "2018-05-16",
                    "secondaryrace": "",
                },
                {
                    "dialect": "HK",
                    "race": "CN",
                    "tob": "0901",
                    "sex": "F",
                    "source": "1",
                    "classification": "C",
                    "birthcertno": "T0202564C",
                    "hanyupinyinname": "Cheng Shu Hui",
                    "hanyupinyinaliasname": "",
                    "marriedname": "",
                    "aliasname": "",
                    "dob": "2012-09-10",
                    "name": "Joycelyn Tan Shu Hui",
                    "lastupdated": "2018-05-16",
                    "secondaryrace": "",
                },
            ],
            "edulevel": {
                "lastupdated": "2017-10-11",
                "source": "2",
                "classification": "C",
                "value": "9",
            },
            "gradyear": {
                "lastupdated": "2017-10-11",
                "source": "2",
                "classification": "C",
                "value": "1998",
            },
            "schoolname": {
                "lastupdated": "2017-10-11",
                "source": "2",
                "classification": "C",
                "value": "T07GS3011J",
                "desc": "SIGLAP SECONDARY SCHOOL",
            },
            "occupation": {
                "lastupdated": "2017-10-11",
                "source": "2",
                "classification": "C",
                "value": "53201",
                "desc": "HEALTHCARE ASSISTANT",
            },
            "employment": {
                "lastupdated": "2017-10-11",
                "source": "2",
                "classification": "C",
                "value": "ALPHA",
            },
            "workpassstatus": {
                "lastupdated": "2018-03-02",
                "source": "1",
                "classification": "C",
                "value": "Live",
            },
            "workpassexpirydate": {
                "lastupdated": "2018-03-02",
                "source": "1",
                "classification": "C",
                "value": "2018-12-31",
            },
            "householdincome": {
                "high": "5999",
                "low": "5000",
                "lastupdated": "2017-10-24",
                "source": "2",
                "classification": "C",
            },
            "assessableincome": {
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
                "value": "1456789.00",
            },
            "assessyear": {
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
                "value": "2015",
            },
            "cpfcontributions": {
                "cpfcontribution": [
                    {
                        "date": "2016-12-01",
                        "amount": "500.00",
                        "month": "2016-11",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2016-12-12",
                        "amount": "500.00",
                        "month": "2016-12",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2016-12-21",
                        "amount": "500.00",
                        "month": "2016-12",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-01-01",
                        "amount": "500.00",
                        "month": "2016-12",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-01-12",
                        "amount": "500.00",
                        "month": "2017-01",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-01-21",
                        "amount": "500.00",
                        "month": "2017-01",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-02-01",
                        "amount": "500.00",
                        "month": "2017-01",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-02-12",
                        "amount": "500.00",
                        "month": "2017-02",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-02-21",
                        "amount": "500.00",
                        "month": "2017-02",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-03-01",
                        "amount": "500.00",
                        "month": "2017-02",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-03-12",
                        "amount": "500.00",
                        "month": "2017-03",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-03-21",
                        "amount": "500.00",
                        "month": "2017-03",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-04-01",
                        "amount": "500.00",
                        "month": "2017-03",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-04-12",
                        "amount": "500.00",
                        "month": "2017-04",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-04-21",
                        "amount": "500.00",
                        "month": "2017-04",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-05-01",
                        "amount": "500.00",
                        "month": "2017-04",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-05-12",
                        "amount": "500.00",
                        "month": "2017-05",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-05-21",
                        "amount": "500.00",
                        "month": "2017-05",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-06-01",
                        "amount": "500.00",
                        "month": "2017-05",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-06-12",
                        "amount": "500.00",
                        "month": "2017-06",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-06-21",
                        "amount": "500.00",
                        "month": "2017-06",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-07-01",
                        "amount": "500.00",
                        "month": "2017-06",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-07-12",
                        "amount": "500.00",
                        "month": "2017-07",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-07-21",
                        "amount": "500.00",
                        "month": "2017-07",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-08-01",
                        "amount": "500.00",
                        "month": "2017-07",
                        "employer": "Crystal Horse Invest Pte Ltd",
                    },
                    {
                        "date": "2017-08-12",
                        "amount": "750.00",
                        "month": "2017-08",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-08-21",
                        "amount": "750.00",
                        "month": "2017-08",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-09-01",
                        "amount": "750.00",
                        "month": "2017-08",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-09-12",
                        "amount": "750.00",
                        "month": "2017-09",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-09-21",
                        "amount": "750.00",
                        "month": "2017-09",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-10-01",
                        "amount": "750.00",
                        "month": "2017-09",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-10-12",
                        "amount": "750.00",
                        "month": "2017-10",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-10-21",
                        "amount": "750.00",
                        "month": "2017-10",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-11-01",
                        "amount": "750.00",
                        "month": "2017-10",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-11-12",
                        "amount": "750.00",
                        "month": "2017-11",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-11-21",
                        "amount": "750.00",
                        "month": "2017-11",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-12-01",
                        "amount": "750.00",
                        "month": "2017-11",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-12-12",
                        "amount": "750.00",
                        "month": "2017-12",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2017-12-21",
                        "amount": "750.00",
                        "month": "2017-12",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2018-01-01",
                        "amount": "750.00",
                        "month": "2017-12",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2018-01-12",
                        "amount": "750.00",
                        "month": "2018-01",
                        "employer": "Delta Marine Consultants PL",
                    },
                    {
                        "date": "2018-01-21",
                        "amount": "750.00",
                        "month": "2018-01",
                        "employer": "Delta Marine Consultants PL",
                    },
                ],
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
            },
            "cpfbalances": {
                "oa": "1581.48",
                "ma": "11470.70",
                "lastupdated": "2015-12-23",
                "source": "1",
                "classification": "C",
                "sa": "21967.09",
                "ra": "51967.09",
            },
            "vehno": {
                "lastupdated": "",
                "source": "2",
                "classification": "C",
                "value": "",
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
        profile.nationality.value = "AD";
        profile.residentialstatus.value = "P";
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
    birthcertno: "T1828432J",
    name: "Youngest Tan Ke Xuan",
    dob: formatDateToString(),
};
var child1MonthOld = {
    birthcertno: "T4383608G",
    name: "1 Month Tan Ke Yu",
    dob: formatDateToString(external_moment_().subtract(1, "months")),
};
var child2MonthsOld = {
    birthcertno: "T7153144E",
    name: "2 Months Tan Keh Guan",
    dob: formatDateToString(external_moment_().subtract(2, "months")),
};
var childMiddle1 = {
    birthcertno: "T1694727F",
    name: "Middle Tan Twin1",
    dob: formatDateToString(external_moment_().subtract(2, "years")),
};
var childMiddle2 = {
    birthcertno: "T1669632Z",
    name: "Middle Tan Twin2",
    dob: formatDateToString(external_moment_().subtract(2, "years")),
};
var childMiddle3 = {
    birthcertno: "T1509027D",
    name: "Tan Boy",
    dob: formatDateToString(external_moment_().subtract(3, "years")),
};
var childMiddle4 = {
    birthcertno: "T1422931G",
    name: "Tan Girl",
    dob: formatDateToString(external_moment_().subtract(4, "years")),
};
var childMiddle5 = {
    birthcertno: "T1511326F",
    name: "Tan Girl Younger",
    dob: formatDateToString(external_moment_().subtract(5, "years")),
};
var childSuperOld = {
    birthcertno: "T0050832I",
    name: "Super Old Tan Ke Wei",
    dob: formatDateToString(external_moment_().subtract(8, "years")),
};
var child6YearsOld = {
    birthcertno: "T1364674G",
    name: "Turning 6 Tan Kid born Jan 1st",
    dob: formatDateToString(external_moment_().subtract(6, "years").startOf("year")),
};
var child7YearsOld = {
    birthcertno: "T1210114C",
    name: "Turning 7 Tan Kid born Dec 31",
    dob: formatDateToString(external_moment_().subtract(7, "years").endOf("year")),
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
        profile.childrenbirthrecords[0].name = longName + " JR";
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
    birthcertno: "T1639540J",
    name: "Child w level not offered",
    dob: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(2, "years")),
};
var c2 = {
    birthcertno: "T1717003H",
    name: "Child w ineligible",
    dob: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(2, "years")),
};
var c3 = {
    birthcertno: "T1728256A",
    name: "Child w registered",
    dob: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(3, "years")),
};
var c4 = {
    birthcertno: "T1766863Z",
    name: "Child w nothing",
    dob: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(4, "years")),
};
var c5 = {
    birthcertno: "T1783246D",
    name: "Child2 w level not offered ",
    dob: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(5, "years")),
};
var c6 = {
    birthcertno: "T1790160A",
    name: "Child2 w ineligible",
    dob: mrSGPreschoolRegister_formatDateToString(external_moment_().subtract(6, "years")),
};
var mrSGPreschoolRegister_ChildrenRecords = {
    c1: c1, c2: c2, c3: c3, c4: c4, c5: c5, c6: c6,
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
        profile.hanyupinyinname.value = "";
        profile.aliasname.value = null;
        profile.hanyupinyinaliasname.value = "";
        profile.secondaryrace.value = "";
        profile.residentialstatus.value = "U";
        profile.homeno.nbr = "";
        profile.marriagecertno.value = "";
        profile.countryofmarriage.value = "";
        profile.childrenbirthrecords = profile.childrenbirthrecords.slice(0, 1);
        profile.edulevel.value = "0";
        profile.occupation.desc = "SPACE PIRATE";
        profile.occupation.value = "";
        profile.cpfcontributions.cpfcontribution = profile.cpfcontributions.cpfcontribution.slice(0, 1);
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
        profile.nationality.value = "";
        profile.dob.value = "";
        profile.regadd.block = "";
        profile.regadd.building = "";
        profile.regadd.classification = "";
        profile.regadd.country = "";
        profile.regadd.floor = "";
        profile.regadd.postal = "";
        profile.regadd.street = "";
        profile.regadd.unit = "";
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
        profile.residentialstatus.value = "P";
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
        profile.sex.value = "F";
        profile.nationality.value = "MY";
        profile.birthcountry.value = "MY";
        profile.residentialstatus.value = "A";
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
        profile.sex.value = "F";
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
        profile.sex.value = "M";
        profile.nationality.value = "MY";
        profile.birthcountry.value = "MY";
        profile.residentialstatus.value = "A";
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
        this.getPersonData = function (mockParams) {
            var mockProfile = profiles.find(function (profile) { return profile.name === mockParams.archetype; });
            if (!mockProfile)
                return null;
            var myinfoPerson = fake_helper_assign({}, mockProfile.generate());
            if (!external_lodash_["isEmpty"](mockParams.marital)) {
                myinfoPerson.marital.value = mockParams.marital;
            }
            if (!external_lodash_["isEmpty"](mockParams.marriagedate)) {
                myinfoPerson.marriagedate.value = mockParams.marriagedate;
            }
            if (!external_lodash_["isEmpty"](mockParams.marriagecertno)) {
                myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
            }
            if (!external_lodash_["isEmpty"](mockParams.countryofmarriage)) {
                myinfoPerson.countryofmarriage.value = mockParams.countryofmarriage;
            }
            if (!external_lodash_["isEmpty"](mockParams.dob)) {
                myinfoPerson.dob.value = mockParams.dob;
            }
            if (!external_lodash_["isEmpty"](mockParams.occupation)) {
                myinfoPerson.occupation.value = mockParams.occupation;
            }
            else {
                if (!external_lodash_["isEmpty"](mockParams.occupationfreeform)) {
                    myinfoPerson.occupation.value = "";
                    myinfoPerson.occupation.desc = mockParams.occupationfreeform;
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
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person, attributes) {
    var attrs = new Set(attributes);
    return external_lodash_["toPairs"](person)
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




// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(3);

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
                            console.error("Failed to get ID token: invalid response data", response.data);
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
                        console.error("Failed to get token payload", e_1);
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
                            console.warn("Attempted to refresh session with invalid session ID " + sessionId);
                            return [2 /*return*/, SessionRefreshResult.INVALID_SESSION_ID];
                        }
                        return [2 /*return*/, SessionRefreshResult.SUCCESS];
                    case 3:
                        e_2 = _a.sent();
                        console.warn("Singpass Error while attempting to refresh session for sessionId: " + sessionId + "\nError:", e_2);
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
                        console.warn("Singpass Error while attempting to logout of Singpass session", e_3);
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