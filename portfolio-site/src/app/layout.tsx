import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displaySans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dataMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed — Aircraft Maintenance Engineer & AI Systems Builder",
  description:
    "Licensed Aircraft Maintenance Engineer (EASA Part-66 A&C, ECAA B1) building AI-powered fleet intelligence and aviation education tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySans.variable} ${dataMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
