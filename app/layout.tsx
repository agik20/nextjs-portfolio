import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

// Body text (serif, pengganti Charter)
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson",
});

// Heading/UI (sans, pengganti Kievit/Lato-ish)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My Medium-ish Website",
  description: "Next.js with Medium-inspired typography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${crimson.variable} ${inter.variable} scroll-smooth antialiased leading-8 overflow-x-hidden`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
