import type { Dictionary } from "@/i18n/dictionaries";

export default function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="produkt" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="headline text-center text-4xl text-ink sm:text-5xl">
          {dict.features.title}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {dict.features.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-ink bg-paper p-6 shadow-[4px_4px_0_#2b2724]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-2xl text-paper">
                <i className={`ti ${item.icon}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-brand text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-ink/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
