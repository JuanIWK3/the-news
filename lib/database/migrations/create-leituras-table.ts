import type { Kysely } from "kysely";
import type { Database } from "../types";

export async function up(db: Kysely<Database>) {
	await db.schema
		.createTable("leituras")
		.addColumn(
			"id",
			"uuid",
			(col) => col.primaryKey().defaultTo(db.fn("gen_random_uuid")), // Gera UUID automaticamente
		)
		.addColumn("email", "varchar")
		.addColumn("status", "varchar")
		.addColumn("utm_source", "varchar")
		.addColumn("utm_medium", "varchar")
		.addColumn("utm_campaign", "varchar")
		.addColumn("utm_channel", "varchar")
		.addColumn("referring_site", "varchar")
		.addColumn("created_at", "timestamp", (col) => col.defaultTo(db.fn("now")))
		.execute();
}

export async function down(db: Kysely<Database>): Promise<void> {
	await db.schema.dropTable("leituras").execute();
}
