import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFIM — Футбольная академия в Оше",
  description: "Футбольная академия имени Асылбека Момунова. Набор детей от 6 до 16 лет в Оше.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
