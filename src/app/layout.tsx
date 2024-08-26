import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

import AuthProvider from "@/hooks/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Senseii Web",
  description: "Web UI for Senseii App",
};

interface Children {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 h-screen w-screen text-white`}
      >
        <AuthProvider> {children}</AuthProvider>
      </body>
    </html>
  );
}
