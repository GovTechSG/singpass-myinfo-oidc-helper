// tslint:disable: no-console tsr-detect-non-literal-fs-filename no-commented-code
import axios from "axios";
import dtsgenerator, { parseSchema } from "dtsgenerator";
import * as fs from "fs";
import * as handlebars from "handlebars";
import * as _ from "lodash";
import * as shell from "shelljs";
import * as yargs from "yargs";

console.log(`==============================================================================`);
console.log(`Script: ${__filename}`);
console.log(`This script generates the latest Myinfo typings`);
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
		describe: `This script parses a Myinfo API swagger file and generates the relevant typings`,
		builder: () => {
			return yargs
				.positional(`swagger-path`, {
					type: `string`,
					describe:
						`The Myinfo API swagger file path
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

const header = `
// tslint:disable
// =============================================================================
// This file was generated with \`npm run generate-myinfo-typings\` on ${new Date().toISOString().split('T')[0]}
// Any modifications to this file may be overwritten when the script runs again
// =============================================================================
`;

// =============================================================================
// Script
// =============================================================================

async function executeScript() {
	shell.mkdir("-p", outputDir);

	console.log("Generating API typings from Myinfo API swaggger file...");
	const apiSwaggerTypingsFileName = await generateApiSwaggerTypings();


	console.log("Generating enums typings from Myinfo codes table...");
	const myinfoCodesEnumsFileNames = await generateMyinfoCodesEnums();

	console.log("Generating index...");
	await generateIndex([
		apiSwaggerTypingsFileName,
		...myinfoCodesEnumsFileNames,
		"profilestatus-domain.ts"]);
}

// =============================================================================
// Myinfo API Swagger
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
 * Recusrively executes the map fn for nested array/objects
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
	let typingsSource = await dtsgenerator({ contents: [parseSchema(swagger)] });
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
	enumEntries: Record<string, string>;
}

function writeEnumTypingsSource(enumTyping: EnumTyping): string {
	// Ensure that there is a proper prefix
	if (!enumTyping.enumName.startsWith("Myinfo")) {
		enumTyping.enumName = `Myinfo${_.startCase(enumTyping.enumName)}`
	}

	// Validate the enum
	if (_.isNil(enumTyping.enumName) || _.isEmpty(enumTyping.enumEntries)) {
		console.warn(`Malformed enum typing detected, skipping...`, enumTyping);
		return;
	}

	// Remove empty keys or values
	enumTyping.enumEntries = _.omitBy(enumTyping.enumEntries, (value, key) => {
		if (_.isEmpty(key) || _.isEmpty(value)) {
			console.warn(`${enumTyping.enumName} has an empty enum entry { key: "${key}" value: "${value}" }, skipping entry...`);
			return true;
		}
		return false;
	})

	// Write enum file
	const enumsHbs = fs.readFileSync(`${outputDir}/enums.hbs`, "utf8");
	const enumsTemplate = handlebars.compile(enumsHbs, { noEscape: true });
	const typingsSource = header + enumsTemplate(enumTyping);

	const filename = `${enumTyping.enumName}.ts`;
	fs.writeFileSync(`${outputDir}/${filename}`, typingsSource);
	return filename;
}

// =============================================================================
// Myinfo codes enums
// =============================================================================

async function generateMyinfoCodesEnums(): Promise<string[]> {
	// Fetch xls
	const myInfoCodesTableResponse = await axios.get(myinfoCodeRefTableUrl);
	const myInfoCodesTableXls = myInfoCodesTableResponse?.data;

	// Parse xls
	// TODO
	const enumTypingsArr: EnumTyping[] = []

	// Write to files
	const fileNames = _.map(enumTypingsArr, (enumTypings) => writeEnumTypingsSource(enumTypings));
	return fileNames;
}

// =============================================================================
// Index
// =============================================================================

/**
 * Generate index file for typings export using handlebars
 */
function generateIndex(fileNames: string[]): string {
	// Prepare module names
	let moduleNames = fileNames.map((fileName) => {
		return fileName.endsWith(".ts") ? fileName.slice(0, -3) : fileName;
	})
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
