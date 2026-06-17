import Link from "next/link";
import LangSwitch from "./LangSwitch";
import type { Locale } from "@/lib/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-brand">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex flex-col leading-none">
          <span className="wordmark text-2xl">DaMelt</span>
          <span className="font-display text-[10px] tracking-[0.2em] text-ink">
            CHEESE SAUCE
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-brand font-semibold text-ink md:flex">
          <a href="#produkt" className="hover:text-brand-900">
            {dict.nav.product}
          </a>
          <a href="#video" className="hover:text-brand-900">
            {dict.nav.story}
          </a>
          <a href="#faq" className="hover:text-brand-900">
            {dict.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} />
          <a
            href="#preorder"
            className="btn-pop rounded-full border-2 border-ink bg-cheese px-4 py-2 font-brand text-sm font-bold text-ink"
          >
            {dict.nav.preorder}
          </a>
        </div>
      </div>
    </header>
  );
}
