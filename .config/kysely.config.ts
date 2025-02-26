import {
	PostgresDialect
} from 'kysely'
import { defineConfig } from 'kysely-ctl'
import { Pool } from 'pg'

export default defineConfig({
	// replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
	dialect: new PostgresDialect({
		pool: new Pool({
			host: "ep-autumn-snow-a4b4sgzv-pooler.us-east-1.aws.neon.tech",
			user: "neondb_owner",
			password: "npg_w6hBIf1Egamr",
			database: "neondb",
			ssl: true
		}),
	}),
	migrations: {
		migrationFolder: "migrations",
	},
	plugins: [],
	seeds: {
		seedFolder: "seeds",
	}
})
