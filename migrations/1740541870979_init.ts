import type { Kysely } from 'kysely'
import type { KyselyDb } from 'src/database/types';

export async function up(db: Kysely<KyselyDb>): Promise<void> {
	await db.schema.createTable('producer')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('cpf', 'text', (col) => col.notNull())
		.addColumn('state', 'text', (col) => col.notNull())
		.addColumn('city', 'text', (col) => col.notNull())
		.execute()

	await db.schema.createTable('farm')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'text', (col) => col.notNull())
		.addColumn('owner_id', 'integer', (col) =>
			col.references('producer.id').onDelete('cascade').notNull(),
		)
		.execute()
}

export async function down(db: Kysely<KyselyDb>): Promise<void> {
	await db.schema.dropTable('producers').execute();
	await db.schema.dropTable('farm').execute();
}
