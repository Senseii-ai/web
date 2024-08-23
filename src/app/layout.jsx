import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Senseii Web",
  description: "Web UI for Senseii App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 h-screen text-white`}>
        {children}
      </body>
    </html>
  );
}
