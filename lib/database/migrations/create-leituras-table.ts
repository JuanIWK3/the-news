import type { Kysely } from "kysely";
import type { KyselyDatabase } from "../types";

export async function up(db: Kysely<KyselyDatabase>) {
	await db.schema
		.createTable("leituras")
		.addColumn("id", "integer", (col) => col.primaryKey())
		.addColumn("email", "varchar", (col) => col.notNull())
		.addColumn("status", "varchar", (col) => col.notNull())
		// .addColumn("utm_source", "varchar")
		// .addColumn("utm_medium", "varchar")
		// .addColumn("utm_campaign", "varchar")
		// .addColumn("utm_channel", "varchar")
		// .addColumn("referring_site", "varchar")
		// .addColumn("created_at", "date")
		.execute();
}

export async function down(db: Kysely<KyselyDatabase>): Promise<void> {
	await db.schema.dropTable("leituras").execute();
}
