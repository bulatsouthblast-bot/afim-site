const coaches = [
  {
    role: "Главный тренер",
    specialization: "Подготовка игроков и игровое мышление",
  },
  {
    role: "Тренер академии",
    specialization: "Техника, координация и индивидуальное развитие",
  },
  {
    role: "Тренер академии",
    specialization: "Физическая подготовка и командная игра",
  },
];

export function CoachRoster() {
  return (
    <section id="coaches" className="px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker text-white/45">Тренерский состав</p>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Наставники, которые помогают раскрыть потенциал.</h2>
          <p className="max-w-sm leading-relaxed text-white/60">Профили тренеров подготовлены для заполнения подтверждёнными данными академии.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <article key={`${coach.role}-${index}`} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className={`coach-placeholder coach-placeholder-${index + 1} relative flex h-64 items-end p-6`}>
                <span className="relative text-xs font-bold uppercase tracking-[0.18em] text-white/65">Фото тренера</span>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-sm font-bold text-[#b6ff3b]">{coach.role}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">ФИО тренера</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">Специализация: {coach.specialization}</p>
                <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/55">
                  <p><span className="font-bold text-white/75">Лицензии и достижения:</span> данные добавляются.</p>
                  <p className="mt-3"><span className="font-bold text-white/75">О тренере:</span> краткая биография будет опубликована после подтверждения академией.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
