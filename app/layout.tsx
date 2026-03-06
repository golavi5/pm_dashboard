import type { Metadata } from "next";
import { RootLayoutClient } from "./RootLayoutClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Dashboard - Project Management",
  description: "Executive dashboard for project tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
