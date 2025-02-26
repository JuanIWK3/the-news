import { Module } from '@nestjs/common';
import { Database } from './types';
import { ConfigurableDatabaseModule, DATABASE_OPTIONS } from './database.module-definition';
import type { DatabaseOptions } from './databaseOptions';
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

@Module({
    exports: [Database],
    providers: [{
        provide: Database,
        inject: [DATABASE_OPTIONS],
        useFactory: (options: DatabaseOptions) => {
            const dialect = new PostgresDialect({
                pool: new Pool({
                    host: options.host,
                    user: options.user,
                    password: options.password,
                    database: options.database,
                    ssl: true
                })
            })

            return new Database(
                { dialect }
            );
        }
    }]
})
export class DatabaseModule extends ConfigurableDatabaseModule { }
