"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/lib/config";

type State = "idle" | "loading" | "ok" | "err";

export default function ReserveForm({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const utm =
        typeof window !== "undefined"
          ? Object.fromEntries(new URLSearchParams(window.location.search))
          : {};
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, utm }),
      });
      setState(res.ok ? "ok" : "err");
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <p className="rounded-2xl border-2 border-ink bg-cheese px-5 py-4 font-brand font-bold text-ink">
        {dict.preorder.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={dict.preorder.emailPlaceholder}
        className="flex-1 rounded-full border-2 border-ink bg-paper px-5 py-3 text-ink outline-none placeholder:text-ink/50 focus:ring-2 focus:ring-ink"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-pop rounded-full border-[2.5px] border-ink bg-cheese px-6 py-3 font-brand font-bold text-ink disabled:opacity-60"
      >
        {state === "loading" ? "…" : dict.preorder.submit}
      </button>
      {state === "err" && (
        <p className="text-sm font-medium text-brand-900 sm:hidden">
          {dict.preorder.error}
        </p>
      )}
    </form>
  );
}
