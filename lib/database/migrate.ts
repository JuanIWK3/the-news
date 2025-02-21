import { FileMigrationProvider, Kysely, Migrator } from "kysely";
import type { KyselyDatabase } from "./types";
import { BunSqliteDialect } from "kysely-bun-sqlite";
import { Database } from "bun:sqlite";
import fs from "node:fs/promises";
import path from "node:path";

async function migrateToLatest() {
	const db = new Kysely<KyselyDatabase>({
		dialect: new BunSqliteDialect({
			database: new Database("db.sqlite"),
		}),
	});

	const migrator = new Migrator({
		db,
		provider: new FileMigrationProvider({
			fs,
			path,
			// This needs to be an absolute path.
			migrationFolder: path.join(__dirname, "./migrations"),
		}),
	});

	const { error, results } = await migrator.migrateToLatest();

	if (results) {
		for (const it of results) {
			if (it.status === "Success") {
				console.log(
					`migration "${it.migrationName}" was executed successfully`,
				);
			} else if (it.status === "Error") {
				console.error(`failed to execute migration "${it.migrationName}"`);
			}
		}
	}

	if (error) {
		console.error("failed to migrate");
		console.error(error);
		process.exit(1);
	}
}

migrateToLatest();
