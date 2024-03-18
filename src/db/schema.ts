import { sql } from "drizzle-orm";
import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

//ID will come from clerk auth which is a string
export const users = pgTable("users", {
    id: varchar("id", { length: 256 }).primaryKey(),
    username: varchar("username", { length: 256 }).notNull().unique(),
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    email: varchar("email", { length: 256 }).notNull().array(),
    created_at: timestamp("created_at").default(sql`now()`),
    updated_at: timestamp("updated_at").default(sql`now()`),
});

export type User = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;

export const memes = pgTable("memes", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    tags: text("tags").array().notNull(),
    imageUrl: text("image_url").notNull(),
    uploaderId: varchar("uploader_id", { length: 256 })
        .notNull()
        .references(() => users.id),
    creatorId: varchar("creator_id", { length: 256 })
        .notNull()
        .references(() => users.id),
    created_at: timestamp("created_at").default(sql`now()`),
    updated_at: timestamp("updated_at").default(sql`now()`),
});

export type Meme = typeof memes.$inferSelect;
export type MemeInsert = typeof memes.$inferInsert;
