import Image from "next/image";
import { PRODUCT, type Locale } from "@/lib/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const count = PRODUCT.waitlistCount.toLocaleString(
    locale === "cs" ? "cs-CZ" : "en-IE",
  );

  return (
    <section className="relative overflow-hidden bg-brand text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-brand text-xs font-bold tracking-widest text-cheese">
            <i className="ti ti-flame" aria-hidden="true" />
            {dict.hero.badge}
          </span>

          <h1 className="headline mt-5 text-6xl text-ink sm:text-7xl md:text-8xl">
            <span className="block">{dict.hero.h1[0]}</span>
            <span
              className="block text-white"
              style={{ WebkitTextStroke: "2px #2b2724" }}
            >
              {dict.hero.h1[1]}
            </span>
            <span className="block">{dict.hero.h1[2]}</span>
          </h1>

          <p className="mt-5 max-w-md text-base font-medium sm:text-lg">
            {dict.hero.sub}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#preorder"
              className="btn-pop inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-cheese px-6 py-3 font-brand font-bold text-ink"
            >
              {dict.hero.cta}
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink px-5 py-3 font-brand font-bold text-ink transition hover:bg-ink hover:text-cheese"
            >
              <i className="ti ti-player-play" aria-hidden="true" />
              {dict.hero.ctaVideo}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium">
            <i className="ti ti-users" aria-hidden="true" />
            <span>
              {count} {dict.hero.proof}
            </span>
            <span className="ml-1 tracking-tight text-cheese-700">★★★★★</span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <span className="absolute -top-2 right-4 z-10 rotate-12 rounded-full border-2 border-ink bg-cheese px-3 py-2 font-display text-sm text-ink">
            NEW &amp; IMPROVED
          </span>
          <Image
            src={PRODUCT.image}
            alt={`${PRODUCT.name} — ${PRODUCT.variant}`}
            width={2560}
            height={1280}
            priority
            className="h-auto w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
