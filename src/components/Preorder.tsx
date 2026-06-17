import Image from "next/image";
import ReserveForm from "./ReserveForm";
import { PRODUCT, formatPrice, type Locale } from "@/lib/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Preorder({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const price = formatPrice(PRODUCT.price, PRODUCT.currency, locale);

  return (
    <section id="preorder" className="bg-cream">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* Vizuál */}
          <div className="flex items-center justify-center rounded-3xl border-2 border-ink bg-brand p-8 shadow-[6px_6px_0_#2b2724]">
            <Image
              src="/brand/logo.png"
              alt={`${PRODUCT.name} — ${PRODUCT.variant}`}
              width={1414}
              height={2000}
              className="h-auto w-44 drop-shadow-xl sm:w-52"
            />
          </div>

          {/* Nabídka */}
          <div className="flex flex-col">
            <span className="font-brand text-sm font-bold tracking-widest text-brand-700">
              {dict.preorder.kicker}
            </span>
            <h2 className="headline mt-2 text-4xl text-ink sm:text-5xl">
              {dict.preorder.title}
            </h2>
            <p className="mt-3 text-ink/80">{dict.preorder.desc}</p>

            <div className="mt-6 flex items-end gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-ink/60">
                  {dict.preorder.priceLabel}
                </div>
                <div className="font-display text-4xl text-ink">{price}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-ink/60">
                  {dict.preorder.sizeLabel}
                </div>
                <div className="font-brand text-xl font-bold text-ink">
                  {PRODUCT.size}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-2">
              {dict.preorder.includes.map((line, i) => (
                <li key={i} className="flex items-center gap-2 text-ink">
                  <i
                    className="ti ti-check text-brand-700"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <p className="mb-3 font-brand font-bold text-ink">
                {dict.preorder.formTitle}
              </p>
              <ReserveForm dict={dict} locale={locale} />
              <p className="mt-3 flex items-center gap-2 text-sm text-ink/60">
                <i className="ti ti-lock" aria-hidden="true" />
                {dict.preorder.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
