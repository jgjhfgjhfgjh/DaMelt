import type { Locale } from "@/lib/config";

export type Dictionary = {
  nav: { product: string; story: string; faq: string; preorder: string };
  hero: {
    badge: string;
    h1: [string, string, string];
    sub: string;
    cta: string;
    ctaVideo: string;
    proof: string;
  };
  marquee: string[];
  features: {
    title: string;
    items: { icon: string; title: string; text: string }[];
  };
  video: { title: string; sub: string };
  preorder: {
    kicker: string;
    title: string;
    desc: string;
    sizeLabel: string;
    priceLabel: string;
    includes: string[];
    cta: string;
    note: string;
    formTitle: string;
    emailPlaceholder: string;
    submit: string;
    success: string;
    error: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  footer: { tagline: string; rights: string };
  meta: { title: string; description: string };
};

const cs: Dictionary = {
  nav: { product: "Produkt", story: "Příběh", faq: "FAQ", preorder: "Předobjednat" },
  hero: {
    badge: "HOT · SMOOTH · TASTY",
    h1: ["SÝR, CO", "ROZTAVÍ", "INTERNET."],
    sub: "DaMelt Cheese Sauce — Original. Limitovaná první šarže. Předobjednej dřív, než se celá rozteče.",
    cta: "Předobjednat teď",
    ctaVideo: "Jak to teče",
    proof: "lidí už je na čekačce",
  },
  marquee: ["HOT", "SMOOTH", "TASTY", "MELTY", "DaMelt"],
  features: {
    title: "Proč DaMelt?",
    items: [
      {
        icon: "ti-droplet",
        title: "Roztaví se na všechno",
        text: "Nachos, hranolky, burger, prsty — DaMelt teče tam, kde má.",
      },
      {
        icon: "ti-flame",
        title: "Hot, smooth & tasty",
        text: "Nová a vylepšená receptura tavené sýrové omáčky. Krémová, ne gumová.",
      },
      {
        icon: "ti-bolt",
        title: "Limitovaná první šarže",
        text: "Vyrábíme jen tolik, kolik se předobjedná. Žádné police, žádné čekání ve skladu.",
      },
    ],
  },
  video: {
    title: "Podívej se, jak teče",
    sub: "Jedno video řekne víc než litr omáčky.",
  },
  preorder: {
    kicker: "PŘEDOBJEDNÁVKA",
    title: "Zajisti si první šarži",
    desc: "Platba předem, posíláme jakmile dovaříme první limitovanou šarži.",
    sizeLabel: "Balení",
    priceLabel: "Cena",
    includes: [
      "1× DaMelt Cheese Sauce — Original",
      "Limitovaná první šarže",
      "Přednostní doručení",
    ],
    cta: "Předobjednat",
    note: "Platba předem přes Stripe · EUR · doručení po spuštění výroby",
    formTitle: "Rezervuj si místo v první šarži",
    emailPlaceholder: "tvuj@email.cz",
    submit: "Chci být u toho",
    success: "Hotovo! Ozveme se ti, jakmile spustíme předobjednávky. 🧀",
    error: "Něco se pokazilo. Zkus to prosím znovu.",
  },
  faq: {
    title: "Časté dotazy",
    items: [
      {
        q: "Co je DaMelt Cheese Sauce?",
        a: "Tavená sýrová omáčka — krémová, lesklá a roztékavá. Hot, smooth & tasty.",
      },
      {
        q: "Kdy mi to dorazí?",
        a: "První limitovanou šarži vyrábíme podle počtu předobjednávek. Termín dodání ti pošleme e-mailem hned po objednávce.",
      },
      {
        q: "Jak probíhá platba?",
        a: "Platíš předem kartou přes zabezpečený Stripe Checkout. V eurech (EUR).",
      },
      {
        q: "Můžu objednat víc kusů?",
        a: "Jasně — počet zvolíš při předobjednávce.",
      },
    ],
  },
  footer: {
    tagline: "Sýr, co roztaví internet.",
    rights: "© 2026 DaMelt. Všechna práva vyhrazena.",
  },
  meta: {
    title: "DaMelt Cheese Sauce — Předobjednej první šarži",
    description:
      "Krémová tavená sýrová omáčka. Hot, smooth & tasty. Předobjednej limitovanou první šarži DaMelt Cheese Sauce.",
  },
};

const en: Dictionary = {
  nav: { product: "Product", story: "Story", faq: "FAQ", preorder: "Pre-order" },
  hero: {
    badge: "HOT · SMOOTH · TASTY",
    h1: ["CHEESE THAT", "BREAKS THE", "INTERNET."],
    sub: "DaMelt Cheese Sauce — Original. Limited first batch. Pre-order before it all melts away.",
    cta: "Pre-order now",
    ctaVideo: "See it drip",
    proof: "people already on the waitlist",
  },
  marquee: ["HOT", "SMOOTH", "TASTY", "MELTY", "DaMelt"],
  features: {
    title: "Why DaMelt?",
    items: [
      {
        icon: "ti-droplet",
        title: "Melts onto everything",
        text: "Nachos, fries, burgers, fingers — DaMelt drips where it counts.",
      },
      {
        icon: "ti-flame",
        title: "Hot, smooth & tasty",
        text: "New & improved processed cheese formula. Creamy, never rubbery.",
      },
      {
        icon: "ti-bolt",
        title: "Limited first batch",
        text: "We only make what gets pre-ordered. No shelves, no warehouse waiting.",
      },
    ],
  },
  video: {
    title: "Watch it drip",
    sub: "One video says more than a litre of sauce.",
  },
  preorder: {
    kicker: "PRE-ORDER",
    title: "Lock in the first batch",
    desc: "Pay upfront, we ship as soon as the limited first batch is cooked.",
    sizeLabel: "Size",
    priceLabel: "Price",
    includes: [
      "1× DaMelt Cheese Sauce — Original",
      "Limited first batch",
      "Priority shipping",
    ],
    cta: "Pre-order",
    note: "Pay upfront via Stripe · EUR · ships when production starts",
    formTitle: "Reserve your spot in the first batch",
    emailPlaceholder: "you@email.com",
    submit: "Count me in",
    success: "Done! We'll reach out the moment pre-orders open. 🧀",
    error: "Something went wrong. Please try again.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "What is DaMelt Cheese Sauce?",
        a: "A melted cheese sauce — creamy, glossy and drippy. Hot, smooth & tasty.",
      },
      {
        q: "When will it arrive?",
        a: "We cook the limited first batch based on pre-order numbers. We'll email you the delivery date right after you order.",
      },
      {
        q: "How does payment work?",
        a: "You pay upfront by card via secure Stripe Checkout, in euros (EUR).",
      },
      {
        q: "Can I order more than one?",
        a: "Sure — pick the quantity at pre-order.",
      },
    ],
  },
  footer: {
    tagline: "Cheese that breaks the internet.",
    rights: "© 2026 DaMelt. All rights reserved.",
  },
  meta: {
    title: "DaMelt Cheese Sauce — Pre-order the first batch",
    description:
      "Creamy melted cheese sauce. Hot, smooth & tasty. Pre-order the limited first batch of DaMelt Cheese Sauce.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { cs, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.cs;
}
