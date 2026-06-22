import type { Metadata } from "next";
import Link from "next/link";
import { CoachRoster } from "@/components/CoachRoster";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Программы подготовки | AFIM",
  "Программы подготовки футболистов от 6 до 16 лет. Техническая, физическая и тактическая подготовка детей в Академии футбола имени Асылбека Момунова.",
  ["футбольные тренировки Ош", "подготовка футболистов", "детские футбольные секции", "футбол для детей Кыргызстан"],
  "/training",
);

const advantages = [
  ["⚽", "Индивидуальные и групповые тренировки"],
  ["🏆", "Квалифицированные тренеры"],
  ["🥇", "Внутренние чемпионаты"],
  ["📍", "Удобные филиалы"],
  ["🎓", "Возможность обучения на бюджетной основе"],
  ["🚀", "Возможность построить спортивную карьеру"],
];

const groups = [
  ["6–8 лет", "Первые шаги в футболе", "Первые шаги в футболе, развитие координации, любви к игре и базовой техники."],
  ["9–11 лет", "Фундамент игрока", "Совершенствование техники, дисциплины и понимания командной игры."],
  ["12–14 лет", "Игровое развитие", "Тактическая подготовка, физическое развитие и участие в соревнованиях."],
  ["15–16 лет", "Следующий уровень", "Подготовка к профессиональному футболу, просмотрам в клубах и дальнейшему спортивному развитию."],
];

export default function TrainingPage() {
  return (
    <>
      <Header />
      <main className="bg-[#101512] text-white">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
          <div aria-hidden="true" className="absolute -right-32 -top-36 h-[34rem] w-[34rem] rounded-full border border-[#b6ff3b]/20" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6ff3b]">02 / Подготовка</p>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Подготовка будущих футболистов и лидеров футбола Кыргызстана</h1>
            <p className="mt-9 max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">Мы создаём систему развития, которая помогает детям пройти путь от первых тренировок до профессионального футбола.</p>
          </div>
        </section>

        <Sponsors />

        <section className="border-y border-white/10 bg-white/[0.035] px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker text-white/45">Уникальность учебного процесса</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Система, в которой ребёнок растёт как игрок и личность.</h2>
            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {advantages.map(([icon, title]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-[#181e1a] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#263028]">
                  <span className="text-2xl" aria-hidden="true">{icon}</span>
                  <h3 className="mt-8 text-lg font-bold leading-snug tracking-[-0.02em]">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5f1] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Группы подготовки</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">План развития для каждого возраста.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {groups.map(([age, title, description]) => (
                <article key={age} className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_12px_30px_rgb(16_21_18/0.06)] sm:p-8">
                  <p className="text-sm font-bold tracking-[0.16em] text-[#2d591e]">{age}</p>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-black/60">{description}</p>
                  <p className="mt-7 text-sm font-medium text-black/50">Тренировок в неделю: уточняется при записи</p>
                  <Link href="/#contacts" className="mt-6 inline-flex rounded-full bg-[#101512] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105">Записаться</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CoachRoster />

        <section className="border-t border-white/10 px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-white/45">Ваш следующий шаг</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Начните путь в большой футбол вместе с AFIM.</h2>
            </div>
            <Link href="/#contacts" className="inline-flex shrink-0 justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90">Записаться на тренировку</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
