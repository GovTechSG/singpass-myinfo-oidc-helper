"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMyInfoRequest = void 0;
class FakeMyInfoRequest {
    constructor() {
    }
    async get(expectedResponse) {
        return expectedResponse;
    }
    async post(expectedResponse) {
        return expectedResponse;
    }
}
exports.FakeMyInfoRequest = FakeMyInfoRequest;
//# sourceMappingURL=fake-request.js.map