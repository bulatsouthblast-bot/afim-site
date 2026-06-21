import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#101512] px-6 py-8 text-white/55 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-black tracking-[-0.08em] text-white">AFIM</Link>
        <p>Воспитываем новое поколение футболистов и лидеров футбола Кыргызстана.</p>
        <Link href="/training" className="font-bold text-white transition-opacity hover:opacity-70">Подготовка</Link>
        <p>© {new Date().getFullYear()} AFIM</p>
      </div>
    </footer>
  );
}
