import type { Metadata } from "next";
import Head from "next/head"; // Importing the Head component
import "./globals.css";
import Navbar from "@components/Navbar";

export const metadata: Metadata = {
  title: "Eric",
  description: "Portfolio of Eric Daniels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* You can add more head elements here as needed */}
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
