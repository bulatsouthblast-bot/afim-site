import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";

type SectionPageProps = {
  number: string;
  title: string;
  description: string;
};

export function SectionPage({ number, title, description }: SectionPageProps) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100svh-5rem)] bg-[#101512] px-6 pb-20 pt-32 text-white sm:px-8 sm:pb-28 sm:pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6ff3b]">{number} / AFIM</p>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-8xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{description}</p>
          <Link href="/#contacts" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90">
            Записаться в AFIM
          </Link>
        </div>
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
