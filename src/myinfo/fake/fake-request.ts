import { AxiosResponse } from "axios";
import { IMyInfoRequest } from "../helper";

export class FakeMyInfoRequest implements IMyInfoRequest {
	constructor() {
	}

	public async get(
		expectedResponse: any,
	): Promise<AxiosResponse> {
		return expectedResponse;
	}

	public async post(
		expectedResponse: any,
	): Promise<AxiosResponse> {
		return expectedResponse;
	}
}
