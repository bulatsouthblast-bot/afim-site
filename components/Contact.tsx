const phone = "+996(501) 80 48 04";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20 text-[#101512] sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">07 / Контакты</p>
          <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">Начните путь ребёнка в большой футбол.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-black/65">Оставьте заявку — команда AFIM поможет выбрать группу и сделать первый шаг к футбольным достижениям.</p>
        </div>
        <div className="rounded-2xl bg-[#f3f5f1] p-7 sm:p-10">
          <a href="tel:+996501804804" className="block text-2xl font-black tracking-[-0.04em] transition-opacity hover:opacity-60 sm:text-3xl">{phone}</a>
          <a href="mailto:AFIMOSH@yandex.com" className="mt-3 block text-base font-medium text-black/60 transition-colors hover:text-black">AFIMOSH@yandex.com</a>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-black/45">г. Ош</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://chat.whatsapp.com/FdMrplldeD48owVCiEAbOB" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#101512] px-6 py-3.5 text-center text-sm font-bold text-white transition duration-300 hover:scale-105">WhatsApp</a>
            <a href="https://www.instagram.com/academiaosh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3.5 text-center text-sm font-bold transition duration-300 hover:bg-black/5">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
              </svg>
              Наш Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
