import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Anton, Fredoka, Inter } from "next/font/google";
import "../globals.css";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import { LOCALES, type Locale } from "@/lib/config";
import { getDictionary } from "@/i18n/dictionaries";

const anton = Anton({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-anton",
  display: "swap",
});
const fredoka = Fredoka({
  weight: ["500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-fredoka",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary((locale as Locale) ?? "cs");
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${anton.variable} ${fredoka.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
