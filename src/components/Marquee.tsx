import type { Dictionary } from "@/i18n/dictionaries";

export default function Marquee({ dict }: { dict: Dictionary }) {
  const items = [...dict.marquee, ...dict.marquee, ...dict.marquee, ...dict.marquee];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={i}
            className="mx-6 font-display text-2xl text-cheese sm:text-3xl"
          >
            {word}
            <span className="ml-12 text-brand" aria-hidden="true">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
