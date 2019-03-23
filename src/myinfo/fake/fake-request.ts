import * as request from "request";
import { IMyInfoRequest } from "../helper";

export class FakeMyInfoRequest implements IMyInfoRequest {
	constructor() {
	}

	public async get(
		expectedResponse: any,
	): Promise<request.RequestResponse> {
		return expectedResponse;
	}

	public async postForm(
		expectedResponse: any,
	): Promise<request.RequestResponse> {
		return expectedResponse;
	}
}
