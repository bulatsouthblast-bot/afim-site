import Image from "next/image";
import Link from "next/link";

export function Header() {
  const links = [
    ["Главная", "/"],
    ["Об академии", "/about"],
    ["Подготовка", "/training"],
    ["Филиалы", "/branches"],
    ["Галерея", "/gallery"],
    ["Франчайзинг", "/franchise"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="AFIM Football Academy — на главную"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Image
            src="/images/logo.png"
            alt="AFIM Football Academy"
            width={52}
            height={52}
            preload
            className="h-auto w-full"
          />
        </Link>

        <nav className="hidden items-center gap-10 text-base font-medium text-white/80 xl:flex">
          {links.map(([label, href]) => (
            <Link key={href} className="transition-colors hover:text-white" href={href}>{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <details className="relative xl:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 text-lg text-white marker:hidden transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">☰<span className="sr-only">Открыть меню</span></summary>
            <nav className="absolute right-0 top-14 w-64 rounded-xl border border-white/10 bg-[#101512]/95 p-3 shadow-2xl backdrop-blur-xl">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">{label}</Link>
              ))}
            </nav>
          </details>
          <Link
            href="/#contacts"
            className="rounded-full bg-white px-4 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5"
          >
            Записаться
          </Link>
        </div>
      </div>
    </header>
  );
}
