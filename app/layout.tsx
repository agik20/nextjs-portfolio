import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased leading-8 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}