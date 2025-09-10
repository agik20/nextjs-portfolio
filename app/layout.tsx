import type { Metadata } from "next"; // remove ReactNode from here
import type { ReactNode } from "react";          // <-- correct import
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Heimy's Portfolio",
  description: "",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${crimson.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
