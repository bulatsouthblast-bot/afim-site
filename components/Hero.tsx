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
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#101512] text-white">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 grid w-full grid-cols-3 gap-2 p-3 opacity-70 sm:gap-4 sm:p-6 lg:w-[68%] lg:opacity-100">
        {heroImages.map(({ src, alt }, index) => {
          const hasImage = existsSync(join(process.cwd(), "public", src.slice(1)));

          return (
            <div key={src} className={`hero-collage-tile hero-collage-tile-${index + 1} group relative overflow-hidden rounded-3xl`}>
              {hasImage && (
                <Image
                  src={src}
                  alt={alt}
                  fill
                  preload={index === 0}
                  sizes="(max-width: 1023px) 33vw, 23vw"
                  className="hero-image object-cover transition duration-500 group-hover:scale-105"
                />
              )}
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#101512_0%,rgba(16,21,18,.96)_31%,rgba(16,21,18,.74)_52%,rgba(16,21,18,.2)_100%)] lg:bg-[linear-gradient(to_right,#101512_0%,rgba(16,21,18,.95)_34%,rgba(16,21,18,.62)_53%,rgba(16,21,18,.08)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101512]/70 via-transparent to-[#101512]/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-32 sm:px-8 sm:py-36 lg:px-10 lg:py-28">
        <div className="hero-content max-w-3xl">
          <span className="mb-6 block text-[10px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/60 sm:text-xs">
            Football Academy <span aria-hidden="true">•</span> Osh{" "}
            <span aria-hidden="true">•</span> Since 2016
          </span>

          <h1 className="max-w-[14ch] text-4xl font-black leading-[0.98] tracking-[-0.055em] text-balance sm:text-5xl lg:max-w-[12ch] lg:text-7xl">
            Футбольная академия имени Асылбека Момунова
          </h1>

          <div className="mt-7 max-w-[40.625rem] leading-relaxed">
            <span className="inline-block border-b-2 border-lime-400 pb-1 font-semibold text-white">
              Набор детей от 6 до 16 лет.
            </span>
            <p className="mt-3 text-lg leading-relaxed text-white/80 sm:text-xl">
              Мы готовим будущих игроков национальной сборной Кыргызстана и профессиональных клубов, а также воспитываем тренеров, менеджеров и лидеров, которые будут развивать футбол страны.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a href="#contact" className="rounded-full bg-white px-8 py-4 text-center text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
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
