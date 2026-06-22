import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Франшиза футбольной академии | AFIM",
  "Откройте филиал Академии футбола имени Асылбека Момунова в своём городе. Франшиза детской футбольной академии в Кыргызстане.",
  ["франшиза футбольной школы", "франшиза футбольной академии", "детский футбол бизнес", "AFIM франшиза"],
  "/franchise",
);

const pdfProps = {
  href: "/files/franchise-afim.pdf",
  download: true,
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function FranchisePage() {
  return (
    <>
      <Header />
      <main className="bg-[#101512] text-white">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
          <div aria-hidden="true" className="absolute -right-36 -top-40 h-[42rem] w-[42rem] rounded-full border border-[#b6ff3b]/20" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6ff3b]">06 / Франчайзинг</p>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Развивайте футбольное образование вместе с AFIM.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">Создавайте сильную среду для будущих игроков, тренеров и лидеров футбола Кыргызстана вместе с академией AFIM.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a {...pdfProps} className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90">Скачать предложение PDF</a>
              <a href="#contacts" className="inline-flex justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-white/10">Обсудить сотрудничество</a>
            </div>
          </div>
        </section>

        <Sponsors />

        <section className="border-y border-white/10 bg-white/[0.035] px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker text-white/45">Партнёрство с AFIM</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Общая цель — сильнее футбол в регионах.</h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">Франчайзинговое партнёрство AFIM помогает создавать системные футбольные площадки, где дети получают качественную подготовку, а тренеры и руководители — понятные стандарты развития академии.</p>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {["Стандарты тренировочного процесса", "Поддержка в развитии академии", "Единая миссия и сильное сообщество"].map((point, index) => (
              <article key={point} className="rounded-3xl border border-white/10 bg-[#181e1a] p-7 sm:p-8">
                <p className="text-sm font-bold tracking-[0.16em] text-[#b6ff3b]">0{index + 1}</p>
                <h3 className="mt-12 text-2xl font-bold tracking-[-0.04em]">{point}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-[#b6ff3b] p-7 text-[#101512] sm:p-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Предложение AFIM</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Получите подробное предложение по франчайзингу.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">Изучите формат сотрудничества, стандарты академии и возможности совместного развития футбола.</p>
            </div>
            <a {...pdfProps} className="inline-flex shrink-0 justify-center rounded-full bg-[#101512] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:scale-105">Скачать предложение PDF</a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
