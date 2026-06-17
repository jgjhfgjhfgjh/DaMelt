"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/config";

export default function LangSwitch({
  locale,
  tone = "light",
}: {
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname() || `/${locale}`;

  const swap = (target: Locale) => {
    const parts = pathname.split("/");
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  const inactive =
    tone === "dark" ? "text-paper/60 hover:text-paper" : "text-ink/70 hover:text-ink";
  const active =
    tone === "dark" ? "bg-cheese text-ink" : "bg-ink text-cheese";

  return (
    <div className="flex items-center gap-1 font-brand text-sm font-semibold">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={swap(l)}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            l === locale ? active : inactive
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
