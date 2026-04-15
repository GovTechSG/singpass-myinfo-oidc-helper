"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileArchetype = exports.Request = exports.Helper = exports.factory = void 0;
const factory = require("./factory/person-basic-factory");
exports.factory = factory;
var fake_helper_1 = require("./fake-helper");
Object.defineProperty(exports, "Helper", { enumerable: true, get: function () { return fake_helper_1.FakeMyInfoHelper; } });
var fake_request_1 = require("./fake-request");
Object.defineProperty(exports, "Request", { enumerable: true, get: function () { return fake_request_1.FakeMyInfoRequest; } });
__exportStar(require("./profiles/fake-profiles"), exports);
var fake_profile_1 = require("./profiles/fake-profile");
Object.defineProperty(exports, "ProfileArchetype", { enumerable: true, get: function () { return fake_profile_1.ProfileArchetype; } });
//# sourceMappingURL=index.js.map