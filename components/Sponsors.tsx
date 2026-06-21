import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const logoPath = "/images/sponsors/megaline.png";
const logos = Array.from({ length: 6 });

export function Sponsors() {
  const hasLogo = existsSync(join(process.cwd(), "public", logoPath.slice(1)));

  return (
    <section aria-label="Партнёр Megaline" className="flex h-32 overflow-hidden bg-[#f5f5f5] sm:h-36">
      <div className="sponsor-marquee-track flex w-max items-center gap-20 pr-20">
        {[...logos, ...logos].map((_, index) => (
          <div key={index} className="flex h-16 w-40 shrink-0 items-center justify-center sm:w-52">
            {hasLogo ? (
              <Image src={logoPath} alt="" width={208} height={72} className="h-10 w-auto max-w-full object-contain sm:h-14" />
            ) : (
              <span className="text-lg font-black uppercase tracking-[-0.04em] text-black/35 sm:text-2xl">Megaline</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
