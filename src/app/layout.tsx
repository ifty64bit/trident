import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bangla Memes Hub",
    description: "A hub for Bangla memes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} `}>
                    <Header />
                    <main className="mx-4">{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}

export const runtime = 'edge'
