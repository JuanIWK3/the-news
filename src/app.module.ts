import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { KyselyModule } from "nestjs-kysely";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { KyselyDb } from "./database/types";
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		DatabaseModule.forRootAsync({
			useFactory: () => ({
				host: "ep-autumn-snow-a4b4sgzv-pooler.us-east-1.aws.neon.tech",
				user: "neondb_owner",
				password: "npg_w6hBIf1Egamr",
				database: "neondb",
				ssl: true
			})
		}),
		DatabaseModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
