import { migrate } from "drizzle-orm/postgres-js/migrator";
import queryClient, { connection } from "./queryClient";

(async () => {
    await migrate(queryClient, {
        migrationsFolder: "./drizzle",
    });

    console.log("Migration complete");

    await connection.end();
})();
