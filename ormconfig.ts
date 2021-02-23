import * as dotenv from "dotenv";
dotenv.config({ path: './config/.env' });

module.exports = {
  "type": "mysql",
  "url": process.env.CLEARDB_DATABASE_URL,
  "synchronize": true,
  "logging": true,
  "migrationsTableName": "custom_migration_table",
  "entities": [
    "dist/db/models/**/*.js"
  ],
  "migrations": [
    "dist/db/migrations/*.js"
  ],
  "cli": {
    "entitiesDir": "src/db/models",
    "migrationsDir": "src/db/migrations"
  }
}