/* eslint-disable no-console */
import axios from "axios";
import * as fs from "fs";
import handlebars from "handlebars";
import * as _ from "lodash";
import * as path from "path";
import * as xlsx from "xlsx";
import { EnumNamespace, FILE_HEADER } from "./common";
import { EnumWorksheetParser } from "./enum-worksheet-parser";

interface Options {
	myinfoCodeRefTableUrl: string;
	/** a `generated/<enum>.ts` file is created for each code table in this directory */
	outputDir: string;
	/** folder containing the handlebars template files */
	templateDir?: string;
	/** folder containing custom enums in the shape of `EnumNamespace` */
	customEnumDir?: string;
}

export async function generateMyInfoCodeEnums(options: Options): Promise<string[]> {
	options.templateDir ??= options.outputDir;
	options.customEnumDir ??= path.join(options.outputDir, "custom/enums");

	const myInfoEnums = await getMyInfoCodeEnums(options);
	const customEnums = getCustomEnums(options);

	const enumNamespaces = overrideWithCustomEnums(myInfoEnums, customEnums);
	const namespaces = prepareEnumNamespacesForWriting(enumNamespaces);
	const filePaths = writeEnumsToFiles(options, namespaces);

	return filePaths;
}

// =============================================================================
// Get enum definitions
// =============================================================================

async function getMyInfoCodeEnums(options: Options): Promise<EnumNamespace[]> {
	// Fetch xls
	const { data } = await axios.get(options.myinfoCodeRefTableUrl, { responseType: "arraybuffer" });
	const myInfoCodesXslx = xlsx.read(new Uint8Array(data), { type: "array" });

	const myInfoEnums: EnumNamespace[] = [];

	myInfoCodesXslx.SheetNames.forEach((sheetName) => {
		// Skip unnecessary sheets
		if (sheetName === "Version") {
			return;
		}

		const myInfoCodesSheet: Record<string, string>[] = xlsx.utils.sheet_to_json(myInfoCodesXslx.Sheets[sheetName], {
			header: ["code", "description"],
			raw: false,
			defval: null,
			blankrows: true,
		});

		myInfoEnums.push(new EnumWorksheetParser({ sheetName, rows: myInfoCodesSheet }).parse());
	});

	return myInfoEnums;
}

function getCustomEnums(options: Options): EnumNamespace[] {
	const filenames = fs.readdirSync(options.customEnumDir);
	const customEnums: EnumNamespace[] = [];

	filenames.forEach((file) => {
		if (file.match(/.json$/)) {
			const customEnum: EnumNamespace = JSON.parse(
				fs.readFileSync(path.join(options.customEnumDir, file), "utf8"),
			);
			customEnums.push(customEnum);
		}
	});

	return customEnums;
}

// =============================================================================
// Helpers
// =============================================================================

function overrideWithCustomEnums(namespaces: EnumNamespace[], customNamespaces: EnumNamespace[]): EnumNamespace[] {
	const namespacesWithCustomEnumsAtFront = [...customNamespaces, ...namespaces];
	return _.uniqBy(namespacesWithCustomEnumsAtFront, ({ enumNamespace }) => enumNamespace.toLowerCase());
}

function prepareEnumNamespacesForWriting(namespaces: EnumNamespace[]): EnumNamespace[] {
	const cleanNamespaces: EnumNamespace[] = [];

	namespaces.forEach((namespace) => {
		const { enumNamespace, enumTypings } = namespace;

		// Validate the enum
		if (
			_.isNil(enumNamespace) ||
			_.isEmpty(enumTypings) ||
			enumTypings.some((enumTyping) => _.isEmpty(enumTyping))
		) {
			console.warn(`Malformed enum typing detected, skipping...`, enumNamespace);
			return;
		}

		// Ensure that there is a proper prefix
		let cleanEnumNamespace = enumNamespace;
		if (!enumNamespace.startsWith("MyInfo")) {
			cleanEnumNamespace = `MyInfo${enumNamespace}`;
		}

		const cleanEnumTypings = enumTypings.map((enumTyping) => {
			return renameDuplicateEnums(removeEmptyEnumKeysOrValues(enumTyping));
		});

		cleanNamespaces.push({
			enumNamespace: cleanEnumNamespace,
			enumTypings: cleanEnumTypings,
		});
	});

	return cleanNamespaces;
}

function removeEmptyEnumKeysOrValues(
	enums: EnumNamespace["enumTypings"][number],
): EnumNamespace["enumTypings"][number] {
	const { enumName, enumEntries } = enums;

	const cleanEnumEntries = enumEntries.filter(({ value, key }) => {
		if (_.isEmpty(key) || _.isEmpty(value)) {
			console.warn(`${enumName} has an empty enum entry { key: "${key}" value: "${value}" }, skipping entry...`);
			return false;
		}
		return true;
	});

	return { enumName, enumEntries: cleanEnumEntries };
}

function renameDuplicateEnums(enums: EnumNamespace["enumTypings"][number]): EnumNamespace["enumTypings"][number] {
	const { enumEntries, enumName } = enums;
	const enumEntryKeyList: string[] = [];

	const cleanEnumEntries = enumEntries.map((entry) => {
		let key = entry.key;
		if (enumEntryKeyList.includes(key)) {
			const countInstances = new RegExp(`^${key}`, "i");
			const extractCounter = new RegExp(`^${key}_(.*)`, "i");

			// count instances of key
			const instanceCount = enumEntryKeyList.filter((k) => k.match(countInstances)).length;

			// extract max trailing counter (if any)
			const counter =
				enumEntryKeyList
					.map((k) => {
						const matches = k.match(extractCounter);
						return matches ? Number(matches[1]) : null;
					})
					.filter((k) => k)
					.sort((a, b) => b - a)[0] || 0;

			// assign unique key by finding highest number to append
			const append = Math.max(instanceCount, counter);
			key = `${key}_${append + 1}`;
			console.warn(`MyInfo sheet ${enumName} contains duplicated keys: ${entry.key}, renaming as ${key}`);
		}
		enumEntryKeyList.push(key);
		return { ...entry, key };
	});

	return { enumName, enumEntries: cleanEnumEntries };
}

function writeEnumsToFiles(options: Options, namespaces: EnumNamespace[]): string[] {
	return namespaces.map((namespace) => {
		const filename = `${_.kebabCase(namespace.enumNamespace).replace(/my-info/, "myinfo")}.ts`;

		const generatedFileDir = path.join(options.outputDir, "generated");
		const enumUtilsPath = path.join(__dirname, "../../src/util/EnumUtils");
		const enumUtilsImport = path.relative(generatedFileDir, enumUtilsPath);

		if (namespace.enumTypings.length === 1) {
			return generateFileFromTemplate(options, filename, "enums.hbs", {
				enumUtilsImport,
				enumName: namespace.enumNamespace,
				enumEntries: namespace.enumTypings[0].enumEntries,
			});
		} else {
			return generateFileFromTemplate(options, filename, "enums-multi.hbs", { enumUtilsImport, ...namespace });
		}
	});
}

function generateFileFromTemplate<T>(options: Options, filename: string, template: string, params: T) {
	const enumsHbs = fs.readFileSync(path.join(options.templateDir, template), "utf8");
	const enumsTemplate = handlebars.compile(enumsHbs, { noEscape: true });
	const typingsSource = FILE_HEADER + enumsTemplate(params);

	const filePath = `generated/${filename}`;
	fs.writeFileSync(path.join(options.outputDir, filePath), typingsSource);
	return filePath;
}
