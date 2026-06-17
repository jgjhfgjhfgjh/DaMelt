import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

/**
 * Vrací Supabase klienta, nebo null pokud nejsou nastavené env proměnné.
 * Pro DaMelt zatím používáme anon/publishable klíč + RLS politiku, která
 * povoluje pouze INSERT do tabulky `leads` (žádné čtení anonymně).
 */
export function getSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
