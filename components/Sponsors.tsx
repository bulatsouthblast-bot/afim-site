import Image from "next/image";

export type Sponsor = {
  src: string;
  name: string;
};

const defaultSponsors: Sponsor[] = [
  { src: "/images/sponsors/megaline.png", name: "Megaline" },
];

type SponsorsProps = {
  sponsors?: readonly Sponsor[];
};

export function Sponsors({ sponsors = defaultSponsors }: SponsorsProps) {
  if (sponsors.length === 0) {
    return null;
  }

  // A longer first run keeps the belt filled even on wide screens. The second
  // identical run is what lets it return to its initial position seamlessly.
  const filledSponsors = Array.from({ length: 12 }, () => sponsors).flat();
  const marqueeSponsors = [...filledSponsors, ...filledSponsors];

  return (
    <section aria-label="Партнёры AFIM" className="overflow-hidden bg-white py-3 sm:py-4">
      <div className="sponsor-marquee-track flex w-max items-center gap-3 pr-3 sm:gap-6 sm:pr-6">
        {marqueeSponsors.map((sponsor, index) => (
          <div
            key={`${sponsor.src}-${index}`}
            className="flex h-[4.5rem] w-28 shrink-0 items-center justify-center sm:h-28 sm:w-36"
          >
            <Image
              src={sponsor.src}
              alt=""
              aria-hidden="true"
              width={184}
              height={144}
              className="h-16 w-auto max-w-full object-contain sm:h-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
