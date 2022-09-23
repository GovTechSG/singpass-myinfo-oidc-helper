import axios from "axios";
import * as path from "path";
import * as shell from "shelljs";
import * as xlsx from "xlsx";
import { generateMyInfoCodeEnums } from "../../../../scripts/generate-myinfo-typings/generate-enums";
import { MyInfoCustomTable } from "./fixtures/baseline/myinfo-custom-table";
import { MyInfoMultipleTable } from "./fixtures/baseline/myinfo-multiple-table";
import { MyInfoSingleTable } from "./fixtures/baseline/myinfo-single-table";

const mockSingleTableSheetJson = [
	{ code: "List Name:", description: "Vehicle Status" },
	{ code: "for attribute:", description: "vehicle.status.code" },
	{ code: null, description: null },
	{ code: "Note:", description: "-" },
	{ code: null, description: null },
	{ code: "Vehicle Status  Code", description: "Description" },
	{ code: "1", description: "Live" },
	{ code: "2", description: "Deregistered" },
];

const mockMultipleTableSheetJson = [
	{ code: "List Name:", description: "Insurer Code" },
	{
		code: "for attribute:",
		description: "cpfdependantprotectionscheme",
	},
	{ code: null, description: null },
	{ code: "Note:", description: "-" },
	{ code: null, description: null },
	{ code: "Insurer Code", description: "Description" },
	{ code: "9GEL", description: "GREAT EASTERN LIFE INSURANCE" },
	{ code: "9NTU", description: "NTUC INCOME" },
	{ code: null, description: null },
	{ code: null, description: null },
	{ code: "for attribute:", description: "cpfmedishieldlife" },
	{ code: null, description: null },
	{ code: "Insurer Code", description: "Description" },
	{ code: "NTU", description: "NTUC INCOME" },
	{ code: "AIA", description: "AIA" },
	{ code: "GEL", description: "GREAT EASTERN" },
	{ code: "PRU", description: "PRUDENTIAL" },
	{ code: "AVI", description: "SINGLIFE" },
	{ code: "AXA", description: "AXA" },
	{ code: "RHI", description: "RAFFLES HEALTH INSURANCE" },
];

const mockCustomTableSheetJson = [
	{ code: "List Name:", description: "Custom Code" },
	{ code: "for attribute:", description: "custom.code" },
	{ code: null, description: null },
	{ code: "Note:", description: "-" },
	{ code: null, description: null },
	{ code: "Custom Code", description: "Description" },
	{ code: "A", description: "Alligator" },
	{ code: "B", description: "Baboon" },
];

const mockSingleTableSheet = xlsx.utils.json_to_sheet(mockSingleTableSheetJson, { skipHeader: true });
const mockMultipleTableSheet = xlsx.utils.json_to_sheet(mockMultipleTableSheetJson, { skipHeader: true });
const mockCustomTableSheet = xlsx.utils.json_to_sheet(mockCustomTableSheetJson, { skipHeader: true });

const mockMyInfoCodeSheet = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(mockMyInfoCodeSheet, mockSingleTableSheet, "SingleTable");
xlsx.utils.book_append_sheet(mockMyInfoCodeSheet, mockMultipleTableSheet, "MultipleTable");
xlsx.utils.book_append_sheet(mockMyInfoCodeSheet, mockCustomTableSheet, "CustomTable");

describe("MyInfoDomain", () => {
	const generatedFolder = path.join(__dirname, "fixtures/output/generated");

	beforeAll(async () => {
		shell.rm('-rf', generatedFolder);
		shell.mkdir("-p", generatedFolder);

		// mock
		jest.spyOn(axios, "get").mockResolvedValue({ data: Buffer.from("dummy response") });
		jest.spyOn(xlsx, "read").mockReturnValue(mockMyInfoCodeSheet);

		// generate typings
		await generateMyInfoCodeEnums({
			myinfoCodeRefTableUrl: "https://example.com",
			outputDir: path.join(__dirname, "fixtures/output"),
			customEnumDir: path.join(__dirname, "fixtures/custom/enums"),
			templateDir: path.join(__dirname, "../../domain"),
		});
	});

	beforeEach(() => {
		jest.resetModules();
	});

	afterAll(() => {
		// clean up generated files so they don't get tracked
		shell.rm('-rf', generatedFolder);
	});

	describe("Single Table", () => {
		it("should provide access to enums", () => {
			const NewMyInfoSingleTable: typeof MyInfoSingleTable = require("./fixtures/output/generated/myinfo-single-table").MyInfoSingleTable;
			expect(NewMyInfoSingleTable).toHaveProperty("DEREGISTERED");
			expect(NewMyInfoSingleTable.DEREGISTERED).toEqual("2");
		});
		it("should provide access to EnumUtil methods", () => {
			const NewMyInfoSingleTable: typeof MyInfoSingleTable = require("./fixtures/output/generated/myinfo-single-table").MyInfoSingleTable;
			const enumKey = "DEREGISTERED";
			const enumValue = NewMyInfoSingleTable.fn.toEnumValue("2");

			expect(enumValue).toBeDefined();
			expect(NewMyInfoSingleTable.fn.toEnumKey(enumValue)).toEqual(enumKey);
			expect(NewMyInfoSingleTable.fn.toEnumDesc(enumValue)).toBeDefined();
		});
	});

	describe("Multiple Table", () => {
		it("should provide access to enums", () => {
			const NewMyInfoMultipleTable: typeof MyInfoMultipleTable =
				require("./fixtures/output/generated/myinfo-multiple-table").MyInfoMultipleTable;
			expect(NewMyInfoMultipleTable).toHaveProperty("Cpfdependantprotectionscheme");
			expect(NewMyInfoMultipleTable).toHaveProperty("Cpfmedishieldlife");

			expect(NewMyInfoMultipleTable.Cpfdependantprotectionscheme).toHaveProperty("GREAT_EASTERN_LIFE_INSURANCE");
			expect(NewMyInfoMultipleTable.Cpfmedishieldlife).toHaveProperty("RAFFLES_HEALTH_INSURANCE");

			expect(NewMyInfoMultipleTable.Cpfdependantprotectionscheme.GREAT_EASTERN_LIFE_INSURANCE).toEqual("9GEL");
			expect(NewMyInfoMultipleTable.Cpfmedishieldlife.RAFFLES_HEALTH_INSURANCE).toEqual("RHI");
		});
		it("should provide access to EnumUtil methods", () => {
			const NewMyInfoMultipleTable: typeof MyInfoMultipleTable =
				require("./fixtures/output/generated/myinfo-multiple-table").MyInfoMultipleTable;
			const enumKey = "NTUC_INCOME";
			const enumValue = NewMyInfoMultipleTable.Cpfdependantprotectionscheme.fn.toEnumValue("9ntu");

			expect(enumValue).toBeDefined();
			expect(NewMyInfoMultipleTable.Cpfdependantprotectionscheme.fn.toEnumKey(enumValue)).toEqual(enumKey);
			expect(NewMyInfoMultipleTable.Cpfdependantprotectionscheme.fn.toEnumDesc(enumValue)).toBeDefined();
		});
	});

	describe("Custom Table", () => {
		it("should override MyInfo enums with custom enums", () => {
			const NewMyInfoCustomTable: typeof MyInfoCustomTable = require("./fixtures/output/generated/myinfo-custom-table").MyInfoCustomTable;
			expect(NewMyInfoCustomTable).toHaveProperty("Apple");
			expect(NewMyInfoCustomTable.Apple).toEqual("A");
		});
	});
});
