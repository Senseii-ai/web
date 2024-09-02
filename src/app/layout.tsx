import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";

import AuthProvider from "@/hooks/auth";
import healthCheck from "@/actions/api/connection.health";
const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Senseii Web",
  description: "Web UI for Senseii App",
};

interface Children {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  healthCheck();

  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center ${roboto.className} h-screen w-screen text-black`}
      >
        <AuthProvider> {children}</AuthProvider>
      </body>
    </html>
  );
}
