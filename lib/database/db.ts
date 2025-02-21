import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { Database } from "./types";

const dialect = new PostgresDialect({
	pool: new Pool({
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		host: process.env.POSTGRES_HOST,
		database: process.env.POSTGRES_DATABASE,
		ssl: true,
	}),
});

export const db = new Kysely<Database>({
	dialect,
});
