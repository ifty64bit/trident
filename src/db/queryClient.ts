import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const isDev = process.env.NODE_ENV === "development";

const HOST = isDev ? "localhost" : process.env.DB_HOST || "localhost";
const PORT = isDev ? 5432 : process.env.DB_PORT || 5432;
const USER = isDev ? "postgres" : process.env.DB_USER;
const PASSWORD = isDev ? "postgres" : process.env.DB_PASSWORD;
const DATABASE = isDev ? "postgres" : process.env.DB_DATABASE;

export const connection = postgres(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
);

const queryClient = drizzle(connection);

export default queryClient;
