-- DaMelt — initial schema (Phase 1: leads/waitlist + forward-looking CRM/ERP)
-- Aplikováno přes Supabase MCP (apply_migration). Verzováno v repu.

create extension if not exists "pgcrypto";

-- Products (ERP forward) -----------------------------------------------------
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text unique,
  name text not null,
  variant text,
  size text,
  price numeric(10,2),
  currency text not null default 'EUR',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Leads / waitlist (Phase 1 — sběr e-mailů z landing page) --------------------
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text,
  utm jsonb not null default '{}'::jsonb,
  source text,
  created_at timestamptz not null default now()
);
create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_created_idx on public.leads (created_at);

-- Customers (CRM forward) -----------------------------------------------------
create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  phone text,
  locale text,
  marketing_consent boolean not null default false,
  utm jsonb not null default '{}'::jsonb,           -- first-touch atribuce
  created_at timestamptz not null default now()
);

-- Orders / preorders (CRM + ERP forward) -------------------------------------
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  qty integer not null default 1,
  unit_price numeric(10,2),
  currency text not null default 'EUR',
  amount numeric(10,2),
  status text not null default 'pending',           -- pending|paid|shipped|cancelled|refunded
  stripe_checkout_session_id text,
  stripe_payment_intent_id text,
  shipping_name text,
  shipping_address jsonb,
  utm jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists orders_customer_idx on public.orders (customer_id);
create index if not exists orders_status_idx on public.orders (status);

-- Row Level Security ---------------------------------------------------------
alter table public.products  enable row level security;
alter table public.leads     enable row level security;
alter table public.customers enable row level security;
alter table public.orders    enable row level security;

-- Veřejnost smí pouze VLOŽIT lead (waitlist). Žádné čtení anonymně.
drop policy if exists "leads_insert_anon" on public.leads;
create policy "leads_insert_anon" on public.leads
  for insert to anon, authenticated with check (true);

-- Aktivní produkty čitelné veřejně (pro zobrazení ceny/produktu na webu).
drop policy if exists "products_select_public" on public.products;
create policy "products_select_public" on public.products
  for select to anon, authenticated using (active = true);

-- customers a orders: RLS zapnuté bez public policy => přístup jen přes
-- service role (server / Stripe webhook ve Fázi 1b).

-- Seed produktu (placeholder cena/velikost — TODO potvrdit s majitelem) -------
insert into public.products (sku, name, variant, size, price, currency)
values ('damelt-original', 'DaMelt Cheese Sauce', 'Original', '1 kg', 12.90, 'EUR')
on conflict (sku) do nothing;
