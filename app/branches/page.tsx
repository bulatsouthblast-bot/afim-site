import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";

const approach = [
  ["⚽", "технические навыки"],
  ["🧠", "игровое мышление"],
  ["💪", "физическую подготовку"],
  ["⭐", "дисциплину и лидерские качества"],
  ["🤝", "умение работать в команде"],
];

const benefits = [
  "Групповые и индивидуальные тренировки",
  "Внутренние чемпионаты и товарищеские матчи",
  "Учебно-тренировочные сборы",
  "Мероприятия с приглашёнными специалистами и профессиональными футболистами",
];

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
    address: ["Ош көчөсү 86/2"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D0%90%D0%BB%D0%B0%20%D0%A2%D0%BE%D0%BE%20%D0%90%D0%88%D0%90%2C%20%D0%9E%D1%88%20%D0%BA%D3%A9%D1%87%D3%A9%D1%81%D2%AF%2086%2F2%2C%20%D0%9A%D0%B0%D1%88%D0%BA%D0%B0%D1%80-%D0%9A%D1%8B%D1%88%D1%82%D0%B0%D0%BA",
  },
  {
    district: "село Фуркат",
    venue: "Тренировочная площадка AFIM",
    address: ["ул. Абдивали Насирдинова 1-я"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D1%83%D0%BB.%20%D0%90%D0%B1%D0%B4%D0%B8%D0%B2%D0%B0%D0%BB%D0%B8%20%D0%9D%D0%B0%D1%81%D0%B8%D1%80%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%201-%D1%8F%2C%20%D0%A4%D1%83%D1%80%D0%BA%D0%B0%D1%82%2C%20%D0%9E%D1%88",
  },
];

export default function BranchesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#101512] text-white">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
          <div aria-hidden="true" className="absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full border border-[#b6ff3b]/20" />
          <div aria-hidden="true" className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#b6ff3b]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6ff3b]">04 / Филиалы</p>
            <h1 className="mt-7 text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Кузница талантов</h1>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/75 sm:text-2xl">Филиалы Футбольной академии имени Асылбека Момунова — это современная система подготовки молодых футболистов, где дети делают первые шаги на пути к большому футболу.</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">Наша задача — не просто проводить тренировки, а создавать среду, в которой каждый ребёнок может раскрыть свой потенциал, полюбить игру и получить возможность стать частью будущего кыргызского футбола.</p>
          </div>
        </section>

        <Sponsors />

        <section className="border-y border-white/10 bg-white/[0.035] px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="section-kicker text-white/45">Наш подход</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Развитие игрока — в каждой детали.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {approach.map(([icon, item]) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#181e1a] p-5 text-lg font-medium">
                  <span className="text-2xl" aria-hidden="true">{icon}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker text-white/45">Что получают воспитанники</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Больше возможностей для роста в игре.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <article key={benefit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <p className="text-sm font-bold tracking-[0.16em] text-[#b6ff3b]">0{index + 1}</p>
                  <p className="mt-12 text-lg font-bold leading-snug">{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5f1] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Наши филиалы</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Четыре площадки AFIM в Оше.</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {branches.map((branch, index) => (
                <article key={branch.district} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_14px_32px_rgb(16_21_18/0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgb(16_21_18/0.14)]">
                  <div className={`branch-placeholder branch-placeholder-${index + 1} relative h-48 p-6 text-white`}>
                    <span className="relative text-xs font-bold uppercase tracking-[0.18em] text-white/70">Филиал AFIM 0{index + 1}</span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl font-black tracking-[-0.04em]">{branch.district}</h3>
                    <p className="mt-4 text-sm font-bold text-black/75">{branch.venue}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/55">{branch.address.map((line) => <span key={line} className="block">{line}</span>)}</p>
                    <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-[#101512] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105">Показать на карте</a>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-12 min-h-80 overflow-hidden rounded-3xl border border-black/10 bg-[#101512] p-7 text-white shadow-[0_14px_32px_rgb(16_21_18/0.12)] sm:p-10">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,transparent_49.5%,rgba(255,255,255,.25)_50%,transparent_50.5%),linear-gradient(transparent_49.5%,rgba(255,255,255,.25)_50%,transparent_50.5%)] [background-size:5rem_5rem]" />
              <div className="absolute -left-20 top-20 h-96 w-[42rem] -rotate-12 rounded-[50%] border border-white/10" />
              <div className="absolute -right-28 -top-32 h-96 w-[34rem] rotate-12 rounded-[50%] border border-white/10" />
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/45">Карта филиалов</p>
              <p className="relative mt-3 text-4xl font-black tracking-[-0.06em]">Ош</p>
              <div className="relative mx-auto mt-12 h-32 max-w-3xl">
                {[["left-[8%] top-[20%]", "Кулатов"], ["left-[42%] top-[3%]", "Он-Адыр"], ["left-[34%] top-[72%]", "Кашкар-Кыштак"], ["right-[8%] top-[56%]", "Фуркат"]].map(([position, label]) => (
                  <div key={label} className={`absolute ${position}`}>
                    <span className="block h-3 w-3 rounded-full bg-[#b6ff3b] ring-8 ring-[#b6ff3b]/15" />
                    <span className="mt-3 block text-xs font-bold text-white/70">{label}</span>
                  </div>
                ))}
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-white/60">Выберите карточку филиала выше, чтобы построить маршрут в привычном сервисе карт.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-[#b6ff3b] p-7 text-[#101512] sm:p-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Начните свой путь в большой футбол уже сегодня.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/70">Наша цель — подготовить новое поколение игроков для профессиональных клубов и национальной сборной Кыргызстана, а также воспитать будущих тренеров, менеджеров и лидеров, которые будут развивать футбол страны.</p>
            </div>
            <Link href="/#contacts" className="inline-flex shrink-0 justify-center rounded-full bg-[#101512] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:scale-105">Записаться на тренировку</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
