import LangSwitch from "./LangSwitch";
import { SITE, type Locale } from "@/lib/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-brand text-3xl font-bold italic text-paper">
            DaMelt
          </div>
          <div className="font-display text-xs tracking-[0.2em] text-cheese">
            CHEESE SAUCE
          </div>
          <p className="mt-2 text-paper/70">{dict.footer.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex items-center gap-5 font-brand font-semibold text-paper/80">
            <a href="#produkt" className="hover:text-cheese">
              {dict.nav.product}
            </a>
            <a href="#preorder" className="hover:text-cheese">
              {dict.nav.preorder}
            </a>
            <a href="#faq" className="hover:text-cheese">
              {dict.nav.faq}
            </a>
          </nav>
          <LangSwitch locale={locale} tone="dark" />
        </div>
      </div>
      <div className="border-t border-paper/15 py-4 text-center text-sm text-paper/50">
        {dict.footer.rights} · {SITE.domain}
      </div>
    </footer>
  );
}
