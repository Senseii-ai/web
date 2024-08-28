import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";

import AuthProvider from "@/hooks/auth";
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

export default async function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center ${roboto.className} bg-[#ffffff] bg-[#cecde1] h-screen w-screen text-white`}
      >
        <AuthProvider> {children}</AuthProvider>
      </body>
    </html>
  );
}
