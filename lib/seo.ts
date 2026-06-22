import type { Metadata } from "next";

export const siteUrl = "https://afim.kg";
export const siteName = "Академия футбола имени Асылбека Момунова | AFIM";

export function createPageMetadata(title: string, description: string, keywords: string[], pathname: string): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${siteUrl}${pathname}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${pathname}`,
      siteName: "AFIM",
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
