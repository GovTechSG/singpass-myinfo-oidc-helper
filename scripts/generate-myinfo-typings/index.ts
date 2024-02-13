/* eslint-disable no-console */
import dtsgenerator, { parseSchema } from "dtsgenerator";
import * as fs from "fs";
import * as handlebars from "handlebars";
import * as _ from "lodash";
import * as shell from "shelljs";
import * as yargs from "yargs";
import { generateMyInfoCodeEnums } from "./generate-enums";
import { FILE_HEADER } from "./common";

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
					describe: `The MyInfo API swagger file path
						The latest version may be downloaded from https://api.singpass.gov.sg/developers`,
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
					default:
						"https://public.cloud.myinfo.gov.sg/dpp/frontend/assets/api-lib/myinfo/downloads/myinfo-api-code-tables.xlsx",
				});
		},
		handler: () => {},
	})
	.help().argv;

const swaggerPath = argv["swagger-path"];
const outputDir = argv["output-dir"];
const myinfoCodeRefTableUrl = argv["myinfo-code-ref-tables-url"];

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
	const myinfoCodesEnumsFileNames = await generateMyInfoCodeEnums({ myinfoCodeRefTableUrl, outputDir });

	console.log("Generating index...");
	await generateIndex([apiSwaggerTypingsFileName, ...myinfoCodesEnumsFileNames, "profilestatus-domain.ts"]);
}

// =============================================================================
// Files
// =============================================================================

function clearGeneratedFiles() {
	const generatedDir = outputDir + "/generated";
	fs.readdir(generatedDir, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(`${generatedDir}/${file}`, (e) => {
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
	delete swagger.components.schemas.AuthTokenResponse;
	delete swagger.components.schemas.JWTAccessToken;
	delete swagger.components.schemas.TokenError;
	delete swagger.components.schemas.Error;

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
	const { components } = schema.content as any;

	// add custom data items to domains
	const customDataItems = [
		{ folder: "person", domain: "Person" },
		{ folder: "person-common", domain: "PersonCommon" },
	];
	customDataItems.forEach((customDataItem) => {
		const inputDirectory = `${outputDir}/custom/${customDataItem.folder}`;
		if (fs.existsSync(inputDirectory)) {
			const filenames = fs.readdirSync(inputDirectory);
			filenames.forEach((file) => {
				if (file.match(/.json$/)) {
					const dataItem = JSON.parse(fs.readFileSync(`${inputDirectory}/${file}`, "utf8"));
					components.schemas = { ...components.schemas, ...dataItem };
					if (!components.schemas[customDataItem.domain].properties)
						components.schemas[customDataItem.domain].properties = {};
					Object.keys(dataItem).forEach((key) => {
						components.schemas[customDataItem.domain].properties[key] = {
							allOf: [{ $ref: "#/components/schemas/" + key }],
						};
					});
				}
			});
		}
	});

	let typingsSource = await dtsgenerator({ contents: [schema] });
	typingsSource = typingsSource.replace(
		"declare namespace Components {",
		"export declare namespace MyInfoComponents {",
	);
	typingsSource = typingsSource.replace("namespace Schemas {", "export namespace Schemas {");

	const filename = "myinfo-domain.ts";
	fs.writeFileSync(`${outputDir}/${filename}`, FILE_HEADER + typingsSource);
	return filename;
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
	const indexSource = FILE_HEADER + indexTemplate({ moduleNames });

	const filename = `index.ts`;
	fs.writeFileSync(`${outputDir}/${filename}`, indexSource);
	return filename;
}

// =============================================================================
// Execute script
// =============================================================================

executeScript();
