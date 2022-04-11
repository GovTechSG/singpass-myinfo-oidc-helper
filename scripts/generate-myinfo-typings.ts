// tslint:disable: no-console tsr-detect-non-literal-fs-filename no-commented-code
import axios from "axios";
import dtsgenerator, { parseSchema } from "dtsgenerator";
import * as fs from "fs";
import * as handlebars from "handlebars";
import * as _ from "lodash";
import * as shell from "shelljs";
import * as xlsx from "xlsx";
import * as yargs from "yargs";

console.log(`==============================================================================`);
console.log(`Script: ${__filename}`);
console.log(`This script generates the latest MyInfo typings`);
console.log(`Please ensure that the URL arguments are up to date before running`);
console.log(`==============================================================================`);

/**
 * TODO
 * - generate enums from myinfo code ref table (https://api.singpass.gov.sg/assets/api-lib/myinfo/downloads/myinfo-api-code-tables.xlsx)
 * - generate index file to export all the typings in src/myinfo/domain
 * - might be missing some enums/fields (e.g. merdekagen, gstvoucher, silversupport)
 * - might be missing some enums from singstat (https://www.singstat.gov.sg/standards/standards-and-classifications)
 * - deprecate old typings
 * - update to use new typings and fix static type errors
 */

// =============================================================================
// Input
// =============================================================================

const projectDir = process.cwd();

const argv = yargs
	.command({
		command: `$0 <swagger-path>`,
		describe: `This script parses a MyInfo API swagger file and generates the relevant typings`,
		builder: () => {
			return yargs
				.positional(`swagger-path`, {
					type: `string`,
					describe:
						`The MyInfo API swagger file path
						The latest version may be downloaded from https://api.singpass.gov.sg/developers`
				})
				.option(`output-dir`, {
					alias: "o",
					type: "string",
					requiresArg: true,
					describe: "Set output dir",
					default: `${projectDir}/src/myinfo/domain`,
				})
				.option(`myinfo-code-ref-tables-url`, {
					type: "string",
					requiresArg: true,
					describe: "URL to the latest myinfo code reference tables",
					// NOTE: To be updated where necessary
					default: "https://api.singpass.gov.sg/assets/api-lib/myinfo/downloads/myinfo-api-code-tables.xlsx"
				});
		},
		handler: () => { },
	})
	.help()
	.argv;

const swaggerPath = argv["swagger-path"];
const outputDir = argv["output-dir"];
const myinfoCodeRefTableUrl = argv["myinfo-code-ref-tables-url"];

const header = `// tslint:disable
// =============================================================================
// This file was generated with \`npm run generate-myinfo-typings\` on ${new Date().toISOString().split('T')[0]}
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
`;

// =============================================================================
// Script
// =============================================================================

async function executeScript() {
	shell.mkdir("-p", outputDir + "/generated");

	console.log("Deleting old generated files...");
	clearGeneratedFiles();

	console.log("Generating API typings from MyInfo API swaggger file...");
	const apiSwaggerTypingsFileName = await generateApiSwaggerTypings();


	console.log("Generating enums typings from MyInfo codes table...");
	const myinfoCodesEnumsFileNames = await generateMyInfoCodeEnums();

	console.log("Generating index...");
	await generateIndex([
		apiSwaggerTypingsFileName,
		...myinfoCodesEnumsFileNames,
		"profilestatus-domain.ts"]);
}

// =============================================================================
// Files
// =============================================================================

function clearGeneratedFiles() {
	const generatedDir = outputDir + '/generated';
	fs.readdir(generatedDir, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(`${generatedDir}/${file}`, e => {
				if (e) throw e;
			});
		}
	});
}

// =============================================================================
// MyInfo API Swagger
// =============================================================================

async function generateApiSwaggerTypings(): Promise<string> {
	const swaggerFile = fs.readFileSync(swaggerPath, "utf8");
	let swagger = JSON.parse(swaggerFile);
	swagger = sanitizeSwagger(swagger);

	// For debugging the sanitized swagger
	// fs.writeFileSync(`${outputDir}/debug-clean-swagger.json`, JSON.stringify(swagger, null, 2));

	const fileName = await writeSwaggerTypingsSource(swagger);
	return fileName;
}

/**
 * Recursively executes the map fn for nested array/objects
 */
function deepMapObject(input: any, mapFn: (value: any, key?: string, parent?: any) => any, key?: string): any {
	if (_.isArray(input) && !_.isString(input)) {
		return _.map(input, (value) => deepMapObject(value, mapFn, key));
	}

	if (_.isObject(input)) {
		const result = {};
		_.each(input, (value, objKey) => {
			const mappedValue = deepMapObject(value, mapFn, objKey);
			if (!_.isNil(mappedValue)) {
				result[objKey] = mappedValue;
			}
		});
		return result;
	}

	return mapFn(input, key, input);
}

/**
 * Use https://editor.swagger.io/ to try to debug syntax errors
 */
function sanitizeSwagger(swagger: any): any {
	// Remove keys we don't need
	delete swagger.servers;
	delete swagger.tags;
	delete swagger["x-tagGroups"];
	delete swagger.info;
	delete swagger.paths;

	// Remove components we don't need
	delete swagger.components.requestBodies;
	delete swagger.components.securitySchemes;
	delete swagger.components.schemas["AuthTokenResponse"];
	delete swagger.components.schemas["JWTAccessToken"];
	delete swagger.components.schemas["TokenError"];
	delete swagger.components.schemas["Error"];

	// Ad hoc fix for mixing old and new swagger specs https://github.com/swagger-api/swagger-editor/issues/1519
	swagger.components.schemas["DataFieldProperties"].required.push("unavailable");
	delete swagger.components.schemas["DataFieldProperties"].properties["unavailable"].required;

	// Fix nulls
	swagger = deepMapObject(swagger, (value) => value ?? "");

	// Fix enum must be string
	swagger = deepMapObject(swagger, (value, key) => {
		if (key !== "enum") {
			return value;
		}

		return _.isNumber(value) ? _.toString(value) : value;
	});

	return swagger;
}

async function writeSwaggerTypingsSource(swagger: any): Promise<string> {
	const schema = parseSchema(swagger);
	const { components } = (schema.content as any);

	// add custom data items to domains
	const customDataItems = [
		{folder: "person", domain: "Person"},
		{folder: "person-common", domain: "PersonCommon"},
	];
	customDataItems.forEach(customDataItem => {
		const inputDirectory = `${outputDir}/custom/${customDataItem.folder}`;
		if (fs.existsSync(inputDirectory)) {
			const filenames = fs.readdirSync(inputDirectory);
			filenames.forEach(file => {
				if (file.match(/.json$/)) {
					const dataItem = JSON.parse(fs.readFileSync(`${inputDirectory}/${file}`, "utf8"));
					components.schemas = { ...components.schemas, ...dataItem };
					if (!components.schemas[customDataItem.domain].properties) components.schemas[customDataItem.domain].properties = {};
					Object.keys(dataItem).forEach((key) => {
						components.schemas[customDataItem.domain].properties[key] = { "allOf": [{ "$ref": "#/components/schemas/" + key }] };
					});
				}
			});
		}
	});

	let typingsSource = await dtsgenerator({ contents: [schema] });
	typingsSource = typingsSource.replace("declare namespace Components {", "export declare namespace MyInfoComponents {");
	typingsSource = typingsSource.replace("namespace Schemas {", "export namespace Schemas {");

	const filename = "myinfo-domain.ts";
	fs.writeFileSync(`${outputDir}/${filename}`, header + typingsSource);
	return filename;
}

// =============================================================================
// Enum helpers
// =============================================================================

interface EnumTyping {
	enumName: string;
	enumEntries: Record<string, string>[];
}

function writeEnumTypingsSource(enumTyping: EnumTyping): string {
	// Ensure that there is a proper prefix
	if (!enumTyping.enumName.startsWith("MyInfo")) {
		enumTyping.enumName = `MyInfo${_.startCase(enumTyping.enumName).replace(/\s/g, "")}`;
	}

	// Validate the enum
	if (_.isNil(enumTyping.enumName) || _.isEmpty(enumTyping.enumEntries)) {
		console.warn(`Malformed enum typing detected, skipping...`, enumTyping);
		return;
	}

	// Append number to duplicated keys
	const enumEntryKeyList: string[] = [];
	enumTyping.enumEntries = enumTyping.enumEntries.map(entry => {
		let key = entry.key;
		if (enumEntryKeyList.includes(key)) {
			// tslint:disable: tsr-detect-non-literal-regexp
			const countInstances = new RegExp(`^${key}`, "i");
			const extractCounter = new RegExp(`^${key}_(.*)`, "i");
			// tslint:enable: tsr-detect-non-literal-regexp

			// count instances of key
			const instanceCount = enumEntryKeyList.filter(k => k.match(countInstances)).length;

			// extract max trailing counter (if any)
			const counter = enumEntryKeyList.map(k => {
				const matches = k.match(extractCounter);
				return matches ? Number(matches[1]) : null;
			}).filter(k => k).sort((a, b) => (b - a))[0] || 0;

			// assign unique key by finding highest number to append
			const append = Math.max(instanceCount, counter);
			key = `${key}_${append + 1}`;
			console.warn(`MyInfo sheet ${enumTyping.enumName} contains duplicated keys: ${entry.key}, renaming as ${key}`);
		}
		enumEntryKeyList.push(key);
		return { ...entry, key };
	});

	// Remove empty keys or values
	enumTyping.enumEntries = _.omitBy<Record<string, string>[]>(enumTyping.enumEntries, (value, key) => {
		if (_.isEmpty(key) || _.isEmpty(value)) {
			console.warn(`${enumTyping.enumName} has an empty enum entry { key: "${key}" value: "${value}" }, skipping entry...`);
			return true;
		}
		return false;
	});

	// Write enum file
	const enumsHbs = fs.readFileSync(`${outputDir}/enums.hbs`, "utf8");
	const enumsTemplate = handlebars.compile(enumsHbs, { noEscape: true });
	const typingsSource = header + enumsTemplate(enumTyping);

	const filename = `generated/${_.kebabCase(enumTyping.enumName).replace(/my\-info/, "myinfo")}.ts`;
	fs.writeFileSync(`${outputDir}/${filename}`, typingsSource);
	return filename;
}

// =============================================================================
// MyInfo codes enums
// =============================================================================

async function generateMyInfoCodeEnums(): Promise<string[]> {
	// Fetch xls
	const { data } = await axios.get(myinfoCodeRefTableUrl, { responseType: "arraybuffer" });
	const myInfoCodesXslx = xlsx.read(new Uint8Array(data), { type: "array" });

	// Parse xls
	let enumTypingsArr: EnumTyping[] = myInfoCodesXslx.SheetNames.map((sheetName): EnumTyping => {
		// Skip unnecessary sheets
		if (sheetName === "Version") return null;

		// Convert to JSON and format accordingly
		const myInfoCodesSheet: Record<string, string>[] = xlsx.utils.sheet_to_json(myInfoCodesXslx.Sheets[sheetName], { header: ["code", "description"], raw: false, defval: null, blankrows: true });

		// Rudimentary validation by cell value in case the sheet changed its format
		// Expecting row 6 to be the header; values should contain code and description
		if (!myInfoCodesSheet[5]?.code?.match(/code/gi) || myInfoCodesSheet[5]?.description?.toLowerCase() !== "description") {
			throw new Error(`Unexpected cell values in MyInfo xlsx sheet ${sheetName} row 6, format has likely changed`);
		}

		const enumEntries = myInfoCodesSheet.map((row: Record<string, string>, i: number) => {
			if (i >= 6) {
				return {
					key: _.snakeCase(row.description).toUpperCase(),
					value: row.code,
					desc: row.description.toUpperCase(),
				};
			}
			return null;
		}).filter((entry: Record<string, string>) => entry);
		return { enumName: sheetName, enumEntries };
	}).filter(entry => entry);

	// add custom enums
	const customDirectory = outputDir + "/custom/enums";
	const filenames = fs.readdirSync(customDirectory);
	filenames.forEach(file => {
		if (file.match(/.json$/)) {
			const customEnum = JSON.parse(fs.readFileSync(`${customDirectory}/${file}`, "utf8"));
			enumTypingsArr.push(customEnum);
		}
	});

	// remove duplicated sheets
	// custom enums will overwrite enums from xlsx
	const enumSheetNameList: string[] = [];
	enumTypingsArr.reverse();
	enumTypingsArr = enumTypingsArr.filter(enumTyping => {
		const sheetNameWithoutPrependMatches = enumTyping.enumName.match(/^myinfo(.*)/i);
		const sheetNameWithoutPrepend = sheetNameWithoutPrependMatches ? sheetNameWithoutPrependMatches[1].toLowerCase() : enumTyping.enumName.toLowerCase();
		if (!!enumTyping && enumSheetNameList.indexOf(sheetNameWithoutPrepend) === -1 && enumSheetNameList.indexOf("myinfo" + sheetNameWithoutPrepend) === -1) {
			enumSheetNameList.push(enumTyping.enumName.toLowerCase());
			return enumTyping;
		}
		return null;
	});

	// Write to files
	return _.map(enumTypingsArr, (enumTypings) => writeEnumTypingsSource(enumTypings));
}

// =============================================================================
// Index
// =============================================================================

/**
 * Generate index file for typings export using handlebars
 */
function generateIndex(fileNames: string[]): string {
	// Prepare module names
	const moduleNames = fileNames.map((fileName) => {
		return fileName.endsWith(".ts") ? fileName.slice(0, -3) : fileName;
	});
	moduleNames.sort();

	const indexHbs = fs.readFileSync(`${outputDir}/index.hbs`, "utf8");
	const indexTemplate = handlebars.compile(indexHbs, { noEscape: true });
	const indexSource = header + indexTemplate({ moduleNames });

	const filename = `index.ts`;
	fs.writeFileSync(`${outputDir}/${filename}`, indexSource);
	return filename;
}

// =============================================================================
// Execute script
// =============================================================================

executeScript();
