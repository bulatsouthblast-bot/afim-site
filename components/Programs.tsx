"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Programs() {
  const { t } = useLanguage();
  const programs = [
    [t("programs.age1"), t("programs.card1.title"), t("programs.card1.description")],
    [t("programs.age2"), t("programs.card2.title"), t("programs.card2.description")],
    [t("programs.age3"), t("programs.card3.title"), t("programs.card3.description")],
  ];

  return (
    <section id="groups" className="bg-[#101512] px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker text-white/45">{t("programs.eyebrow")}</p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">{t("programs.title")}</h2>
          <p className="max-w-sm leading-relaxed text-white/60">{t("programs.description")}</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-3">
          {programs.map(([age, title, description]) => (
            <article key={age} className="group bg-[#181e1a] p-7 transition-colors duration-300 hover:bg-[#263028] sm:p-8">
              <p className="text-sm font-bold tracking-wide text-[#b6ff3b]">{age}</p>
              <h3 className="mt-12 text-2xl font-bold tracking-[-0.035em]">{title}</h3>
              <p className="mt-4 leading-relaxed text-white/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
