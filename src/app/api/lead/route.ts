import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/**
 * Sběr e-mailů (waitlist) pro předobjednávky.
 * Ukládá do Supabase tabulky `leads` (přes anon klíč + RLS insert policy).
 * Pokud Supabase env nejsou nastavené, jen zaloguje (fallback).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body?.email ?? "").trim().toLowerCase();
    const locale = String(body?.locale ?? "cs");
    const utm = body?.utm ?? {};

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from("leads")
        .insert({ email, locale, utm });
      if (error) {
        console.error("[lead] supabase insert error:", error.message);
        return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
      }
    } else {
      console.log("[lead] (Supabase nenakonfigurováno)", { email, locale, utm });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
