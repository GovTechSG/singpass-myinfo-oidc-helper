describe("Logger", () => {
	describe("setLogger", () => {
		let loggerModule;
		beforeEach(() => {
			jest.clearAllMocks();
			jest.isolateModules(() => {
				loggerModule = require("../Logger");
			});
		});

		it.each(["log", "debug", "info", "trace", "warn", "error"])(
			"should overwrite %s method of logger",
			(overrideLogKey: string) => {
				const mockLog = jest.fn();
				const newLogger = {
					[overrideLogKey]: (message: string, param?: any) => {
						mockLog(`[Override] ${message}`, `[Override] ${param}`);
					},
				};

				// test the original log function (something that is not overrideLogKey)
				const logKey = overrideLogKey === "log" ? "debug" : "log";

				loggerModule.setLogger(newLogger);

				const logSpy = jest.spyOn(console, logKey);

				const originalMessage = "message";
				const originalParam = "param";

				const overrideMessage = "[Override] message";
				const overrideParam = "[Override] param";

				loggerModule.logger[logKey](originalMessage, originalParam);
				expect(logSpy).toHaveBeenCalledWith(originalMessage, originalParam);

				loggerModule.logger[overrideLogKey](originalMessage, originalParam);
				expect(mockLog).toHaveBeenCalledWith(overrideMessage, overrideParam);
			},
		);
	});
});
