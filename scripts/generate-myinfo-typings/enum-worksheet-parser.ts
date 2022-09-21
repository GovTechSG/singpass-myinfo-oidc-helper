import * as _ from "lodash";
import { EnumNamespace, EnumTyping } from "./common";

interface Worksheet {
	sheetName: string;
	rows: Record<string, string>[];
}

interface Table {
	tableName: string;
	start: number;
	end: number;
}

export class EnumWorksheetParser {
	private sheetName: string;
	private rows: Record<string, string>[];

	constructor(params: Worksheet) {
		Object.assign(this, params);
	}

	public parse(): EnumNamespace {
		const tables = this.getTables(this.rows);
		const enumTypings = this.getEnumTypingsFromTables(tables);

		const enumNamespace = this.generateEnumNamespace(this.sheetName);

		return {
			enumNamespace,
			enumTypings,
		};
	}

	private getTables(rows: Record<string, string>[]): Table[] {
		const tableIndexes: { start: number; end: number }[] = [];
		const tableNames: string[] = [];

		rows.forEach((row, index) => {
			const isEmptyRow = row?.code === null && row?.description === null;
			const latestTable = tableIndexes[tableIndexes.length - 1];
			const isLastRowNotSet = latestTable && latestTable.end === 0;
			const isAttributeName = row?.code?.match(/for\sattribute:/gi);

			if (isAttributeName) {
				tableNames.push(_.capitalize(row?.description));
			}

			if (row?.code?.match(/code/gi) && row?.description?.toLowerCase() === "description") {
				tableIndexes.push({ start: index, end: 0 });
			}

			if (isEmptyRow && isLastRowNotSet) {
				latestTable.end = index - 1;
			}
			// Last row of sheet assumed to be last row of last table
			if (index === rows.length - 1) {
				latestTable.end = index;
			}
		});

		if (_.isEmpty(tableIndexes)) {
			throw new Error(
				`Sheet: ${this.sheetName} does not have any headers of the correct format (e.g. | ... code | Descripton |), format has likely changed.`
			);
		}

		return _.zipWith(tableNames, tableIndexes, (tableName, tableIndex) => {
			return {
				tableName,
				...tableIndex,
			};
		});
	}

	private getEnumTypingsFromTables(tables: Table[]): EnumTyping[] {
		return tables.map((table) => {
			const enumEntries = [];
			for (let i = table.start + 1; i <= table.end; i++) {
				const row = this.rows[i];
				enumEntries.push({
					key: _.snakeCase(row.description).toUpperCase(),
					value: row.code,
					desc: row.description.toUpperCase(),
				});
			}

			return {
				enumName: table.tableName,
				enumEntries,
			};
		});
	}

	private generateEnumNamespace(initialValue: string) {
		return _.startCase(initialValue).replace(/\s/g, "");
	}
}
