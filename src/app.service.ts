import { Injectable } from '@nestjs/common';
import type { Kysely } from 'kysely';
import { InjectKysely } from 'nestjs-kysely';
import type { KyselyDb } from './database/types';
import type { ProducersRepository } from './app.repository';

@Injectable()
export class AppService {
    constructor(private readonly producersRepository: ProducersRepository) { }

    async getProducers() {
        const producers = await this.producersRepository.getProducers();

        return producers;
    }

    async createProducer() {
        const producer = await this.producersRepository.createProducer();

        return producer;
    }
}
