import {
	Kysely,
	type ColumnType,
	type Generated,
	type Insertable,
	type JSONColumnType,
	type Selectable,
	type Updateable,
} from "kysely";

export interface KyselyDb {
	producer: ProducerTable;
	farm: FarmTable;
}

export class Database extends Kysely<KyselyDb> { }

export interface ProducerTable {
	id: Generated<number>;
	name: string;
	cpf: string;
	state: string;
	city: string;
}

export type Producer = Selectable<ProducerTable>;
export type NewProducer = Insertable<ProducerTable>;
export type ProducerUpdate = Updateable<ProducerTable>;

export interface FarmTable {
	id: Generated<number>;
	name: string;
	owner_id: number;
}

export type Farm = Selectable<FarmTable>;
export type NewFarm = Insertable<FarmTable>;
export type FarmUpdate = Updateable<FarmTable>;
