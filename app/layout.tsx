import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardutra Agi Ginting — Portfolio",
  description: "Data Scientist & AI Engineer specializing in machine learning and intelligent automation.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
