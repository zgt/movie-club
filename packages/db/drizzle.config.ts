import type { Config } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing DATABASE_URL environment variable.");
}

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: process.env.POSTGRES_URL }, 
  casing: "snake_case",
} satisfies Config;