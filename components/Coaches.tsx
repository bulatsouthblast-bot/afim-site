export function Coaches() {
  return (
    <section id="coaches" className="bg-white px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <p className="section-kicker">03 / Тренеры</p>
          <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Наставники для пути в большой футбол.</h2>
        </div>
        <div className="border-l-2 border-[#b6ff3b] pl-6 sm:pl-8">
          <p className="text-xl leading-relaxed text-black/70 sm:text-2xl">Наши тренеры помогают ребёнку расти как игроку, лидеру и будущему представителю футбольной индустрии. Требовательность здесь всегда идёт рядом с вниманием и поддержкой.</p>
          <a href="#contacts" className="mt-8 inline-flex border-b border-black pb-1 text-sm font-bold transition-opacity hover:opacity-55">Узнать о тренировках</a>
        </div>
      </div>
    </section>
  );
}
