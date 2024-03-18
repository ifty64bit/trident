import type { Config } from "drizzle-kit";

const HOST = process.env.DB_HOST || "localhost";
const PORT = process.env.DB_PORT || 5432;
const USER = process.env.DB_USER || "postgres";
const PASSWORD = process.env.DB_PASSWORD || "toor";
const DATABASE = process.env.DB_DATABASE || "bangla-memes-hub";

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE,
    },
} satisfies Config;
 