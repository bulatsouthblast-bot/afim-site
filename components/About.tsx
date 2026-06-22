import Image from "next/image";

const values = [
  ["Профессиональный путь", "Помогаем пройти путь от первых тренировок к серьёзным футбольным целям."],
  ["Высокие достижения", "Закладываем фундамент для интенсивной подготовки и спортивного роста."],
  ["Характер и лидерство", "Воспитываем дисциплину, ответственность и умение вести за собой."],
  ["Футбол страны", "Развиваем будущих тренеров, менеджеров и специалистов индустрии."],
];

export function About() {
  return (
    <section id="about" className="bg-[#f3f5f1] px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">01 / Об академии</p>
          <h2 className="mt-5 max-w-lg text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
            Путь ребёнка — к большому футболу.
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-black/65 sm:text-xl">
            Наша цель — не просто научить ребёнка играть в футбол. Мы создаём среду, в которой дети могут пройти путь от первых тренировок до профессионального футбола и получить ценности, которые помогут им стать лидерами в спорте и жизни.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl rounded-[32px] border border-neutral-200/70 bg-white p-5 shadow-sm sm:p-8">
        <Image
          src="/images/organizations/partners.webp"
          alt="Партнёры академии: FIFA, AFC, KFU и AFIM"
          width={2172}
          height={724}
          className="w-full object-contain"
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-neutral-600 sm:text-lg">
          При поддержке FIFA, AFC и Кыргызского футбольного союза Академия футбола имени Асылбека Момунова реализует современные программы подготовки молодых футболистов и развивает детский футбол в Кыргызстане.
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
