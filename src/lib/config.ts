export const LOCALES = ["cs", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "cs";

export const SITE = {
  name: "DaMelt",
  domain: "damelt.com",
};

/**
 * TODO: potvrdit reálné hodnoty s majitelem (velikost balení + cena).
 * Tyto hodnoty řídí celou předobjednávkovou sekci i budoucí Stripe Checkout.
 */
export const PRODUCT = {
  name: "DaMelt Cheese Sauce",
  variant: "Original",
  size: "1 kg", // TODO
  price: 12.9, // TODO (EUR)
  currency: "EUR",
  image: "/brand/product.png",
  // Limit pro "limitovaná první šarže" – jen marketingový údaj
  batchLimit: 500,
  waitlistCount: 1248,
};

export function formatPrice(
  price: number,
  currency: string,
  locale: Locale,
): string {
  const loc = locale === "cs" ? "cs-CZ" : "en-IE";
  return new Intl.NumberFormat(loc, {
    style: "currency",
    currency,
  }).format(price);
}
