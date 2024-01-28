import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

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
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
