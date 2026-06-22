import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const heroImages = [
  { src: "/images/hero-1.webp", alt: "Тренировка воспитанников AFIM с мячом" },
  { src: "/images/hero-2.webp", alt: "Командная тренировка футбольной академии AFIM" },
  { src: "/images/hero-3.webp", alt: "Игровой момент на тренировке AFIM" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] overflow-hidden bg-[#101512] text-white md:min-h-[100svh]">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 grid w-full grid-cols-1 gap-0 p-0 opacity-100 md:grid-cols-3 md:gap-4 md:p-6 md:opacity-70 lg:w-[68%] lg:opacity-100">
        {heroImages.map(({ src, alt }, index) => {
          const hasImage = existsSync(join(process.cwd(), "public", src.slice(1)));

          return (
            <div key={src} className={`hero-collage-tile hero-collage-tile-${index + 1} group relative overflow-hidden md:rounded-3xl ${index === 1 ? "" : "hidden md:block"}`}>
              {hasImage && (
                <Image
                  src={src}
                  alt={alt}
                  fill
                  preload={index === 1}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 23vw"
                  className="hero-image object-cover object-[center_top] transition duration-500 group-hover:scale-105 md:object-center"
                />
              )}
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/50 md:bg-[linear-gradient(to_right,#101512_0%,rgba(16,21,18,.96)_31%,rgba(16,21,18,.74)_52%,rgba(16,21,18,.2)_100%)] lg:bg-[linear-gradient(to_right,#101512_0%,rgba(16,21,18,.95)_34%,rgba(16,21,18,.62)_53%,rgba(16,21,18,.08)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#101512]/70 via-transparent to-[#101512]/20 md:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-24 sm:px-8 md:py-36 lg:px-10 lg:py-28">
        <div className="hero-content max-w-3xl rounded-3xl bg-black/65 p-6 backdrop-blur-sm md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none">
          <span className="mb-6 block text-[10px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/80 drop-shadow sm:text-xs md:text-white/60 md:drop-shadow-none">
            Football Academy <span aria-hidden="true">•</span> Osh{" "}
            <span aria-hidden="true">•</span> Since 2016
          </span>

          <h1 className="max-w-[14ch] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-balance drop-shadow md:text-5xl md:drop-shadow-none lg:max-w-[12ch] lg:text-7xl">
            Футбольная академия имени Асылбека Момунова
          </h1>

          <div className="mt-7 max-w-[40.625rem] leading-relaxed">
            <span className="inline-block border-b-2 border-lime-400 pb-1 font-semibold text-white">
              Набор детей от 6 до 16 лет.
            </span>
            <p className="mt-3 text-lg leading-relaxed text-white/90 drop-shadow md:text-xl md:text-white/80 md:drop-shadow-none">
              Мы готовим будущих игроков национальной сборной Кыргызстана и профессиональных клубов, а также воспитываем тренеров, менеджеров и лидеров, которые будут развивать футбол страны.
            </p>
          </div>

          <a
            href="https://www.instagram.com/academiaosh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-lime-400"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
            </svg>
            <span>Следите за нами →</span>
          </a>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:gap-4">
            <a href="#contacts" className="rounded-full bg-white px-8 py-4 text-center text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Записаться
            </a>
            <a href="#branches" className="rounded-full border border-white/30 px-8 py-4 text-center text-sm font-bold text-white transition duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Наши филиалы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
