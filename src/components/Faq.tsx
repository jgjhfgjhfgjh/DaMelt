import type { Dictionary } from "@/i18n/dictionaries";

export default function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="headline text-center text-4xl text-ink sm:text-5xl">
          {dict.faq.title}
        </h2>
        <div className="mt-8 space-y-3">
          {dict.faq.items.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border-2 border-ink bg-cream px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-brand text-lg font-bold text-ink">
                {f.q}
                <i
                  className="ti ti-plus transition group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
