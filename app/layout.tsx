import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransition } from "@/components/PageTransition";
import { siteUrl } from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  title: "Футбольная академия имени Асылбека Момунова | AFIM",
  description: "Академия футбола имени Асылбека Момунова в городе Ош. Подготовка детей от 6 до 16 лет, профессиональные тренировки и развитие будущих игроков национальной сборной Кыргызстана.",
  keywords: ["футбольная академия Ош", "футбольная школа Ош", "детский футбол Ош", "футбол для детей Кыргызстан", "AFIM", "Академия имени Асылбека Момунова"],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Футбольная академия имени Асылбека Момунова | AFIM",
    description: "Футбольная академия в городе Ош. Подготовка детей от 6 до 16 лет.",
    url: siteUrl,
    siteName: "AFIM",
    locale: "ru_RU",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Академия футбола имени Асылбека Момунова",
    alternateName: "AFIM",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    address: { "@type": "PostalAddress", addressLocality: "Ош", addressCountry: "KG" },
    sameAs: ["https://www.instagram.com/academiaosh"],
  },
  {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Академия футбола имени Асылбека Момунова",
    alternateName: "AFIM",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    address: { "@type": "PostalAddress", addressLocality: "Ош", addressCountry: "KG" },
    sameAs: ["https://www.instagram.com/academiaosh"],
  },
];

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <LanguageProvider>
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
