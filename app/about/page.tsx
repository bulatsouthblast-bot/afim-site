import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";

const developmentAreas = [
  ["Футбольный интеллект", "Техника, игровое мышление и уверенные решения в динамике современного футбола."],
  ["Характер", "Дисциплина, ответственность и внутренняя устойчивость, которые остаются с ребёнком за пределами поля."],
  ["Команда", "Умение слышать партнёров, работать ради общей цели и быть частью сильного коллектива."],
  ["Лидерство", "Качества будущих игроков, тренеров, менеджеров и тех, кто будет развивать футбол Кыргызстана."],
];

const trustPoints = [
  "Опытные тренеры и системный подход к развитию каждого игрока.",
  "Современная учебно-тренировочная база для регулярной практики.",
  "Внимание не только к результату, но и к ценностям ребёнка.",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#101512] text-white">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
          <div aria-hidden="true" className="absolute -right-40 -top-48 h-[42rem] w-[42rem] rounded-full border border-[#b6ff3b]/20" />
          <div aria-hidden="true" className="absolute right-12 top-20 h-72 w-72 rounded-full bg-[#b6ff3b]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6ff3b]">01 / Об академии</p>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
              Футбольная академия имени Асылбека Момунова
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/75 sm:text-2xl">
              Центр развития молодых талантов в Кыргызстане. Единственная академия со звездой АФК в Кыргызстане.
            </p>
          </div>
        </section>

        <Sponsors />

        <section className="border-y border-white/10 bg-white/[0.035] px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-kicker text-white/45">Кто мы</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Больше, чем футбольная школа.</h2>
            </div>
            <p className="max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">
              AFIM объединяет качественное обучение, опытных тренеров и современную тренировочную среду. Здесь дети получают прочную футбольную основу, растут как атлеты и учатся быть лидерами в команде и сообществе.
            </p>
          </div>
        </section>

        <section className="bg-[#f3f5f1] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">Наша миссия</p>
              <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Открывать детям путь к их большому футболу.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-black/65 sm:text-xl">
              Мы воспитываем не только будущих чемпионов. Академия помогает детям обрести ценности, которые делают сильнее на поле и в жизни: справедливость, уважение и содружество. Эти принципы становятся опорой для спортсменов и людей, которые будут формировать будущее футбола страны.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker text-white/45">Что мы развиваем</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Навыки для игры. Качества для будущего.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-2">
              {developmentAreas.map(([title, description], index) => (
                <article key={title} className="bg-[#181e1a] p-7 transition-colors duration-300 hover:bg-[#263028] sm:p-9">
                  <p className="text-sm font-bold tracking-[0.16em] text-[#b6ff3b]">0{index + 1}</p>
                  <h3 className="mt-12 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-white/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-[#b6ff3b] p-7 text-[#101512] sm:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-kicker">Почему нам доверяют</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Сильная среда для сильного старта.</h2>
            </div>
            <ul className="space-y-5">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-4 text-lg leading-relaxed text-black/75">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#101512]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-white/45">Следующий шаг</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Начните путь ребёнка в AFIM.</h2>
            </div>
            <Link href="/#contact" className="inline-flex shrink-0 justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90">
              Записаться на тренировку
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
