"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Franchise() {
  const { t } = useLanguage();

  return (
    <section id="franchise" className="bg-[#b6ff3b] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="section-kicker">{t("franchise.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">{t("franchise.title")}</h2>
        </div>
        <div>
          <p className="max-w-md text-lg leading-relaxed text-black/70">{t("franchise.description")}</p>
          <a href="#contacts" className="mt-7 inline-flex rounded-full bg-[#101512] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:scale-105">{t("franchise.cta")}</a>
        </div>
      </div>
    </section>
  );
}
