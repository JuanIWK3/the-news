import { Database } from "bun:sqlite";
import { Kysely } from "kysely";
import { BunSqliteDialect } from "kysely-bun-sqlite";
import type { KyselyDatabase } from "./types";

export const db = new Kysely<KyselyDatabase>({
	dialect: new BunSqliteDialect({
		database: new Database("db.sqlite"),
	}),
});
