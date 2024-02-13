import * as http from "http";
import * as nock from "nock";
import { createClient } from "../axios-client";

describe("Axios Client", () => {
	let consoleLogSpy: jest.SpyInstance;

	beforeAll(() => {
		nock.disableNetConnect();
	});

	beforeEach(() => {
		if (!nock.isActive()) {
			nock.activate();
		}

		consoleLogSpy = jest.spyOn(console, "log");
	});

	afterEach(() => {
		jest.resetAllMocks();
		jest.restoreAllMocks();
		nock.cleanAll();
	});

	const baseURL = "http://base.com";
	const uinfin = "S1111111D";

	it("should be able to make successful requests", async () => {
		nock(baseURL).get("/").reply(204);

		const client = createClient();
		const response = await client.get(baseURL);

		expect(response.status).toEqual(204);
	});

	it("should not log any uinfin when making a request with successful response", async () => {
		const reponseData = `something ${uinfin} something`;

		nock(baseURL).get(/.*/).query(true).reply(200, reponseData);

		const client = createClient();
		const response = await client.get(uinfin, {
			baseURL,
			headers: {
				uinfin,
			},
			params: {
				uinfin,
			},
		});

		expect(response.status).toEqual(200);
		expect(response.data).toEqual(reponseData);
		expect(consoleLogSpy).toHaveBeenCalledTimes(2);
		expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "Requesting", { method: "get", url: "S***1111D" });
		expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Responded", { method: "get", url: "S***1111D" });
	});

	it("should not log any uinfin when making a request with failure response", async () => {
		const reponseData = `something ${uinfin} something`;

		nock(baseURL).get(/.*/).query(true).reply(400, reponseData);

		try {
			const client = createClient();
			await client.get(uinfin, {
				baseURL,
				headers: {
					uinfin,
				},
				params: {
					uinfin,
				},
			});
			fail("Should not reach here");
		} catch (error) {
			expect(error.response.status).toEqual(400);
			expect(error.response.data).toEqual(reponseData);
			expect(consoleLogSpy).toHaveBeenCalledTimes(2);
			expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "Requesting", { method: "get", url: "S***1111D" });
			expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Error occurred while responding to request", {
				method: "get",
				url: "S***1111D",
				status: 400,
				data: "something S***1111D something",
			});
		}
	});

	it("should not log any uinfin when failing to make a request", async () => {
		try {
			const client = createClient();
			client.interceptors.request.use(() => {
				throw new Error(`something ${uinfin} something`);
			});

			await client.get(uinfin, {
				baseURL,
				headers: {
					uinfin,
				},
				params: {
					uinfin,
				},
			});
			fail("Should not reach here");
		} catch (error) {
			expect(consoleLogSpy).toHaveBeenCalledTimes(2);
			expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "Error occurred while making a request", {
				name: "Error",
				message: `something S***1111D something`,
				stack: expect.any(String),
			});
			expect(consoleLogSpy.mock.calls[0][1].stack).not.toContain(uinfin);
			expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Error occurred while responding to request", {
				name: "Error",
				message: `something S***1111D something`,
				stack: expect.any(String),
			});
			expect(consoleLogSpy.mock.calls[1][1].stack).not.toContain(uinfin);
		}
	});

	it("should not log any uinfin when failing to receive a response", async () => {
		jest.spyOn(http, "request").mockImplementation(() => {
			throw new Error(`something ${uinfin} something`);
		});

		try {
			const client = createClient();
			await client.get(uinfin, {
				baseURL,
				headers: {
					uinfin,
				},
				params: {
					uinfin,
				},
			});
			fail("Should not reach here");
		} catch (error) {
			expect(consoleLogSpy).toHaveBeenCalledTimes(2);
			expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "Requesting", { method: "get", url: "S***1111D" });
			expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Error occurred while responding to request", {
				name: "Error",
				message: `something S***1111D something`,
				stack: expect.any(String),
			});
			expect(consoleLogSpy.mock.calls[1][1].stack).not.toContain(uinfin);
		}
	});
});
