import { NextRequest, NextResponse } from "next/server";

/**
 * Sběr e-mailů (waitlist) pro předobjednávky.
 *
 * Fáze 1 (teď): validace + log. Bez perzistence – dokud nepřipojíme Supabase.
 * Fáze 1b (další krok): insert do Supabase tabulky `leads` + atribuce (utm).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body?.email ?? "").trim();
    const locale = String(body?.locale ?? "cs");
    const utm = body?.utm ?? {};

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    // TODO (Supabase): insert { email, locale, utm, created_at } do tabulky leads.
    console.log("[lead]", { email, locale, utm });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
