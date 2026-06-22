"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const values = [
    [t("about.value1.title"), t("about.value1.description")],
    [t("about.value2.title"), t("about.value2.description")],
    [t("about.value3.title"), t("about.value3.description")],
    [t("about.value4.title"), t("about.value4.description")],
  ];

  return (
    <section id="about" className="bg-[#f3f5f1] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">{t("about.eyebrow")}</p>
          <h2 className="mt-5 max-w-lg text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
            {t("about.title")}
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-black/65 sm:text-xl">
            {t("about.description")}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl rounded-[32px] border border-neutral-200/70 bg-white p-5 shadow-sm sm:p-8">
        <Image
          src="/images/organizations/partners.webp"
          alt={t("about.partners")}
          width={2172}
          height={724}
          className="w-full object-contain"
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-neutral-600 sm:text-lg">
          {t("about.partnersText")}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl border-t border-black/10 md:grid-cols-4">
        {values.map(([title, description], index) => (
          <article key={title} className="border-b border-black/10 py-8 md:border-b-0 md:px-8 md:first:pl-0 md:not-last:border-r md:last:pr-0">
            <span className="text-sm font-bold text-black/35">0{index + 1}</span>
            <h3 className="mt-8 text-2xl font-bold tracking-[-0.035em]">{title}</h3>
            <p className="mt-3 max-w-xs leading-relaxed text-black/60">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
