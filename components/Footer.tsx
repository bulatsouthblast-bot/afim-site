"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#101512] px-6 py-8 text-white/55 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
        <Link href="/" className="text-xl font-black tracking-[-0.08em] text-white">AFIM</Link>
        <p className="text-center sm:flex-1 sm:px-10">{t("footer.description")}</p>
        <div className="text-center sm:text-right">
          <p className="text-neutral-400">
  © 2025–2026 AFIM
</p>
          <p className="mt-2 cursor-default text-sm text-neutral-500 transition-colors duration-300 hover:text-lime-400">
            Сайт разработан <span className="font-medium">ZiiadinovLab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
