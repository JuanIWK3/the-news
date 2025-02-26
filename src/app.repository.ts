import type { Database } from "./database/types";

export class ProducersRepository {
    constructor(private readonly db: Database) { }

    async getProducers() {
        const producers = await this.db
            .selectFrom("producer")
            .selectAll()
            .execute();

        return producers;
    }

    async createProducer() {
        const producer = await this.db.insertInto("producer").values({
            name: "John Doe",
            city: "New York",
            cpf: "12345678901",
            state: "NY",
        }).returningAll().executeTakeFirstOrThrow();

        return producer;
    }
}