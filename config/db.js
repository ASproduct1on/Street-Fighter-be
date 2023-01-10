import Low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "database.json");

const adapter = new FileSync(dbPath);
const dbAdapter = Low(adapter);

const DEFAULT_DB = { users: [], fighters: [], fights: [] };

dbAdapter.defaults(DEFAULT_DB).write();

export { dbAdapter };
