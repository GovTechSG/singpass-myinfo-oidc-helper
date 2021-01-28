"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoHelper = void 0;
const _ = require("lodash");
const util_1 = require("../../util");
const SingpassMyinfoError_1 = require("../../util/error/SingpassMyinfoError");
const JweUtil_1 = require("../../util/JweUtil");
const myinfo_request_1 = require("./myinfo-request");
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
                util_1.Logger.error("Error requesting for person data (JWE) from MyInfo", error);
                throw error;
            }
            try {
                // Decrypt person data
                const encryptedPersonJWE = response.data;
                const jwe = yield JweUtil_1.decryptJWE(encryptedPersonJWE, this.keyToDecryptJWE);
                const jws = JSON.parse(jwe.payload.toString());
                const verifiedJws = yield JweUtil_1.verifyJWS(jws, this.certToVerifyJWS);
                const personData = JSON.parse(verifiedJws.payload.toString());
                if (personData == null) {
                    throw new SingpassMyinfoError_1.SingpassMyInfoError("Person data cannot be null");
                }
                return personData;
            }
            catch (error) {
                util_1.Logger.error("Error verifying person data from MyInfo", error);
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
            throw new SingpassMyinfoError_1.SingpassMyInfoError("getProfileStatus response does not include the `msg` field as singpass-myinfo lib expected");
        });
        if (_.isEmpty(props.attributes)) {
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Attribute list must contain values");
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
        this.myInfoRequest = new myinfo_request_1.MyInfoRequest(requestProps);
    }
    getUrl(overrideUrl, defaultUrl, env) {
        return (!_.isEmpty(overrideUrl))
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
exports.MyInfoHelper = MyInfoHelper;
//# sourceMappingURL=myinfo-helper.js.map