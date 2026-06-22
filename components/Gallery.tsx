"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export function Gallery() {
  const { t } = useLanguage();
  const galleryItems = [
    { title: t("gallery.card1.title"), description: t("gallery.card1.description"), image: "/images/technique.webp" },
    { title: t("gallery.card2.title"), description: t("gallery.card2.description"), image: "/images/team.webp" },
    { title: t("gallery.card3.title"), description: t("gallery.card3.description"), image: "/images/character.webp" },
    { title: t("gallery.card4.title"), description: t("gallery.card4.description"), image: "/images/game.webp" },
  ];

  return (
    <section id="gallery" className="bg-[#101512] px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker text-white/45">{t("gallery.eyebrow")}</p>
        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">{t("gallery.title")}</h2>
          <a
            href="https://www.instagram.com/academiaosh"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold text-[#b6ff3b] transition-opacity hover:opacity-70"
          >
            {t("gallery.follow")}
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryItems.map(({ title, description, image }, index) => (
            <article key={title} className={`gallery-tile gallery-tile-${index + 1} group relative flex min-h-52 items-end rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgb(0_0_0/0.28)] sm:min-h-72 sm:p-6`}>
              <Image
                src={image}
                alt={`${t("gallery.imageAlt")}: ${title}`}
                fill
                sizes="(max-width: 767px) 50vw, 25vw"
                className="z-0 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="gallery-tile-content">
                <h3 className="text-lg font-black uppercase tracking-[0.12em]">{title}</h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
