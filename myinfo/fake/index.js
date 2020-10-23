"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const factory = require("./factory/personbasic-factory");
exports.factory = factory;
var fake_helper_1 = require("./fake-helper");
exports.Helper = fake_helper_1.FakeMyInfoHelper;
var fake_request_1 = require("./fake-request");
exports.Request = fake_request_1.FakeMyInfoRequest;
__export(require("./profiles/fake-profiles"));
var fake_profile_1 = require("./profiles/fake-profile");
exports.ProfileArchetype = fake_profile_1.ProfileArchetype;
//# sourceMappingURL=index.js.map