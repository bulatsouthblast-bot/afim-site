"use client";

import { useLanguage } from "@/components/LanguageProvider";

const branches = [
  {
    district: "Микрорайон Кулатов",
    venue: "МАБ «Керме Тоо»",
    address: ["Кулатов к району", "Анар 1А/20"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D0%9C%D0%90%D0%91%20%D0%9A%D0%B5%D1%80%D0%BC%D0%B5%20%D0%A2%D0%BE%D0%BE%2C%20%D0%90%D0%BD%D0%B0%D1%80%201%D0%90%2F20%2C%20%D0%9E%D1%88",
  },
  {
    district: "Он-Адыр район",
    venue: "МАБ «Жибек Жолу»",
    address: ["Он-Адыр к району", "101-көчө 85"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D0%9C%D0%90%D0%91%20%D0%96%D0%B8%D0%B1%D0%B5%D0%BA%20%D0%96%D0%BE%D0%BB%D1%83%2C%20101-%D0%BA%D3%A9%D1%87%D3%A9%2085%2C%20%D0%9E%D1%88",
  },
  {
    district: "село Кашкар-Кыштак",
    venue: "Ала Тоо АЈА",
    address: ["Кашкар-Кыштак а.", "Ош көчөсү 86/2"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D0%90%D0%BB%D0%B0%20%D0%A2%D0%BE%D0%BE%20%D0%90%D0%88%D0%90%2C%20%D0%9E%D1%88%20%D0%BA%D3%A9%D1%87%D3%A9%D1%81%D2%AF%2086%2F2%2C%20%D0%9A%D0%B0%D1%88%D0%BA%D0%B0%D1%80-%D0%9A%D1%8B%D1%88%D1%82%D0%B0%D0%BA",
  },
  {
    district: "село Фуркат",
    venue: "Тренировочная площадка AFIM",
    address: ["ул. Абдивали Насирдинова", "1-я"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D1%83%D0%BB.%20%D0%90%D0%B1%D0%B4%D0%B8%D0%B2%D0%B0%D0%BB%D0%B8%20%D0%9D%D0%B0%D1%81%D0%B8%D1%80%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%201-%D1%8F%2C%20%D0%A4%D1%83%D1%80%D0%BA%D0%B0%D1%82%2C%20%D0%9E%D1%88",
  },
];

export function Branches() {
  const { t } = useLanguage();

  return (
    <section id="branches" className="bg-[#dce2d8] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-kicker">{t("branches.eyebrow")}</p>
          <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">{t("branches.title")}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/65">{t("branches.description")}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {branches.map((branch, index) => (
              <article key={branch.district} className="group min-h-60 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_30px_rgb(16_21_18/0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgb(16_21_18/0.12)] sm:p-7">
                <p className="text-xs font-bold tracking-[0.18em] text-black/35">{t("branches.label")} 0{index + 1}</p>
                <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.04em]">{branch.district}</h3>
                <p className="mt-4 text-sm font-bold text-black/75">{branch.venue}</p>
                <p className="mt-1 text-sm leading-relaxed text-black/55">{branch.address.map((line) => <span key={line} className="block">{line}</span>)}</p>
                <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d591e] transition-colors hover:text-black">
                  {t("branches.map")} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <aside className="relative min-h-80 overflow-hidden rounded-3xl border border-black/10 bg-[#101512] p-7 text-white shadow-[0_12px_30px_rgb(16_21_18/0.12)] sm:p-9 lg:sticky lg:top-28">
            <div className="absolute -left-24 top-20 h-72 w-[32rem] -rotate-12 rounded-[50%] border border-white/10" />
            <div className="absolute -right-32 -top-20 h-80 w-[28rem] rotate-12 rounded-[50%] border border-white/10" />
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,transparent_49.5%,rgba(255,255,255,.25)_50%,transparent_50.5%),linear-gradient(transparent_49.5%,rgba(255,255,255,.25)_50%,transparent_50.5%)] [background-size:4.5rem_4.5rem]" />
            <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/45">{t("branches.mapTitle")}</p>
            <p className="relative mt-3 text-4xl font-black tracking-[-0.06em]">Ош</p>
            <div className="relative mt-12 h-28">
              <span className="absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-[#b6ff3b] ring-8 ring-[#b6ff3b]/15" />
              <span className="absolute left-[57%] top-[5%] h-3 w-3 rounded-full bg-[#b6ff3b] ring-8 ring-[#b6ff3b]/15" />
              <span className="absolute left-[35%] top-[65%] h-3 w-3 rounded-full bg-[#b6ff3b] ring-8 ring-[#b6ff3b]/15" />
              <span className="absolute right-[12%] top-[55%] h-3 w-3 rounded-full bg-[#b6ff3b] ring-8 ring-[#b6ff3b]/15" />
              <span className="absolute left-[16%] top-[22%] h-px w-[45%] -rotate-12 bg-white/25" />
              <span className="absolute left-[38%] top-[58%] h-px w-[42%] -rotate-6 bg-white/25" />
            </div>
            <p className="relative max-w-xs text-sm leading-relaxed text-white/60">{t("branches.mapDescription")}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
