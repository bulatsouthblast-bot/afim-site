import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";

const academyAdvantages = [
  "Единственная академия со звездой АФК в Кыргызстане.",
  "Высококачественное обучение под руководством опытных тренеров.",
  "Развитие футбольных навыков, характера, дисциплины и командной работы.",
  "Современная учебная база.",
  "Выпускники становятся спортсменами и лидерами.",
];

const history = [
  ["2012", "Федерация футбола Кыргызской Республики обратилась к ФИФА с проектом создания футбольной академии. ФИФА одобрила инициативу и предоставила финансирование для проектов Goal-4 и LESS PRIVILEGE."],
  ["2016—2017", "С августа 2016 по июль 2017 года велось строительство. Комплекс включает административное и гостиничное здание площадью 1600 кв.м, офисы, жилые комнаты для игроков, тренеров и сотрудников, раздевалки, два больших поля с искусственным покрытием и четыре мини-футбольных поля."],
  ["12.10.2017", "В Оше состоялось торжественное открытие Академии футбола имени А. Момунова."],
];

const leadership = [
  ["Владелец академии", "Футбольная Ассоциация города Ош."],
  ["Члены совета", "Представители Футбольного Союза Кыргызстана."],
  ["Директор академии", "Тимур Абдуллаев Эрнстович."],
  ["Технический отдел", "Мирзалиев Алмаз Алимжанович — технический директор Академии футбола имени Асылбека Момунова. Обладатель лицензии AFC A. Бывший игрок национальной сборной Кыргызской Республики и клубов высшей лиги КПФЛ."],
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#111111] text-white">
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
          <div aria-hidden="true" className="absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full border border-[#e31e24]/40" />
          <div aria-hidden="true" className="absolute right-0 top-28 h-80 w-80 rounded-full bg-[#e31e24]/20 blur-3xl" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#e31e24] to-transparent" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff575c]">01 / AFIM</p>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Об академии</h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              Академия футбола имени Асылбека Момунова (АФИМ)
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Центр развития молодых футбольных талантов в Кыргызстане.
            </p>
          </div>
        </section>

        <Sponsors />

        <section className="bg-[#f7f7f5] px-6 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-kicker text-[#e31e24]">История академии</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">От идеи к месту, где растут игроки.</h2>
            </div>
            <div className="mt-14 border-t border-black/10">
              {history.map(([date, text]) => (
                <article key={date} className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:py-10">
                  <p className="text-lg font-black tracking-[-0.04em] text-[#e31e24] sm:text-2xl">{date}</p>
                  <p className="max-w-3xl text-base leading-relaxed text-black/65 sm:text-lg">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff575c]">Имя академии</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Асылбек Момунов</h2>
              <p className="mt-5 text-lg font-semibold text-white/80">Полузащитник и игрок сборной Кыргызстана.</p>
            </div>
            <div className="border-l-2 border-[#e31e24] pl-6 sm:pl-8">
              <p className="text-lg leading-relaxed text-white/75 sm:text-xl">
                Асылбек Манапович Момунов родился 8 марта 1966 года во Фрунзе. Карьеру начал в 1982 году в клубе «Алай», затем играл за «Алга», «Алга-РИИФ», «Хасково», «Пахтакор», «Кайнар».
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
                Играл на позиции полузащитника. В 1992 году представлял сборную Кыргызстана: 9 матчей и 1 гол.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
                Скончался 29 марта 1996 года в Казахстане. Его наследие продолжает вдохновлять молодых футболистов.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff575c]">О нас</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Среда, в которой талант получает направление.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-2 lg:grid-cols-3">
              {academyAdvantages.map((advantage, index) => (
                <article key={advantage} className="min-h-52 bg-[#1b1b1b] p-7 sm:p-9">
                  <p className="text-sm font-bold tracking-[0.16em] text-[#ff575c]">0{index + 1}</p>
                  <p className="mt-12 max-w-sm text-xl font-bold leading-snug tracking-[-0.035em]">{advantage}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e31e24] px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Наша миссия</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Готовить игроков для сборной страны.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              <p>Основная задача академии — обучение и развитие молодых талантов для формирования лучших игроков для национальной сборной Кыргызской Республики.</p>
              <p>Миссия — предоставлять профессиональное обучение, развивать футбольные навыки и интегрировать ценности национальной сборной в каждого спортсмена.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f5] px-6 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-kicker text-[#e31e24]">Обучение и тренировки</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Учимся каждый день — через игру.</h2>
            </div>
            <div className="max-w-3xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
              <p className="text-lg leading-relaxed text-black/70 sm:text-xl">Процесс включает ежедневные тренировки, развитие дриблинга, передач, ударов по воротам, тактики, командного взаимодействия и физической подготовки.</p>
              <div className="mt-8 border-t border-black/10 pt-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e31e24]">Еженедельный ритм</p>
                <p className="mt-3 text-lg leading-relaxed text-black/70">Каждую неделю проводятся тестовые матчи и анализ игр.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff575c]">Руководство</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Люди, создающие систему.</h2>
            <dl className="mt-12 grid gap-4 md:grid-cols-2">
              {leadership.map(([role, name], index) => (
                <div key={role} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8">
                  <dt className="text-sm font-bold uppercase tracking-[0.14em] text-[#ff575c]">0{index + 1} / {role}</dt>
                  <dd className="mt-6 text-xl font-bold leading-snug tracking-[-0.035em] text-white/90">{name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-[#e31e24]/50 bg-gradient-to-br from-[#2d1112] to-[#111111] p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff575c]">Философия</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Свободно думать. Смело играть.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white/75 sm:text-xl">
              <p>С января 2024 года внедряется образовательная философия, основанная на «обучении через игру». Цель — целостный подход к развитию девочек и мальчиков.</p>
              <p>Игроки должны уметь принимать самостоятельные решения на поле и вне его.</p>
              <Link href="/#contacts" className="inline-flex rounded-full bg-[#e31e24] px-7 py-4 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#f1353a]">Записаться на тренировку</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
