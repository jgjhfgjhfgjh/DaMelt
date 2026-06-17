import type { Dictionary } from "@/i18n/dictionaries";

export default function VideoSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="video" className="bg-brand text-ink">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="headline text-4xl text-ink sm:text-5xl">
          {dict.video.title}
        </h2>
        <p className="mt-3 font-medium">{dict.video.sub}</p>

        <div className="relative mt-8 flex aspect-video items-center justify-center overflow-hidden rounded-3xl border-2 border-ink bg-ink shadow-[6px_6px_0_#2b2724]">
          {/* TODO: nahradit reálným embedem z funnel videa */}
          <button
            type="button"
            aria-label={dict.video.title}
            className="btn-pop flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-cheese text-3xl text-ink"
          >
            <i className="ti ti-player-play" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
