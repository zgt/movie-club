import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

// --- Next.js Development Hot-Reload Fix ---
// This pattern prevents new database connections from being created on every hot reload
// during development, which can exhaust your connection pool.
declare global {
  // eslint-disable-next-line no-var
  var dbClient: postgres.Sql | undefined;
}

let client: postgres.Sql;
let db: ReturnType<typeof drizzle>;

if (process.env.NODE_ENV === 'production') {
  // In production, create a new client.
  // Configure postgres.js specific options here.
  // While RDS Proxy handles the main pooling, postgres.js also maintains its own connection pool.
  client = postgres(connectionString, {
    max: 10, // Max number of concurrent connections from THIS client to the proxy
    idle_timeout: 30, // seconds: how long an idle connection stays open
    connect_timeout: 10, // seconds: how long to wait for a connection to establish
  });
  db = drizzle(client, { schema, casing: "snake_case" });
} else {
  // In development, reuse the client instance
  if (!global.dbClient) {
    global.dbClient = postgres(connectionString);
  }
  client = global.dbClient;
  db = drizzle(client, { schema, casing: "snake_case" });
}

export { db };