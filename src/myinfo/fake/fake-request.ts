import { AxiosResponse } from "axios";
import { IMyInfoRequest } from "../helper";

export class FakeMyInfoRequest implements IMyInfoRequest {
	constructor() {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public async get(expectedResponse: any): Promise<AxiosResponse> {
		return expectedResponse;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public async post(expectedResponse: any): Promise<AxiosResponse> {
		return expectedResponse;
	}
}
