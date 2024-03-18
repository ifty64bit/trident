import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const HOST = process.env.DB_HOST || "localhost";
const PORT = process.env.DB_PORT || 5432;
const USER = process.env.DB_USER || "postgres";
const PASSWORD = process.env.DB_PASSWORD || "toor";
const DATABASE = process.env.DB_DATABASE || "bangla-memes-hub";

export const connection = postgres(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
);

const queryClient = drizzle(connection);

export default queryClient;
