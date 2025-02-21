import {
	Kysely,
	SqliteDialect,
	type Generated,
	type Insertable,
	type Selectable,
	type Updateable,
} from "kysely";

export interface KyselyDatabase {
	leituras: LeituraTable[];
}

export interface LeituraTable {
	id: string;
	email: string;
	status: string;
	// utm_source: string;
	// utm_medium: string;
	// utm_campaign: string;
	// utm_channel: string;
	// referring_site: string;
	// created_at: Date;
}

export type Leitura = Selectable<LeituraTable>;
export type NewLeitura = Insertable<LeituraTable>;
export type UpdateLeitura = Updateable<LeituraTable>;
