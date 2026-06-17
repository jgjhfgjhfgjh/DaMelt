import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/lib/config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Preorder from "@/components/Preorder";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <>
      <Header locale={loc} dict={dict} />
      <main>
        <Hero locale={loc} dict={dict} />
        <Marquee dict={dict} />
        <Features dict={dict} />
        <VideoSection dict={dict} />
        <Preorder locale={loc} dict={dict} />
        <Faq dict={dict} />
      </main>
      <Footer locale={loc} dict={dict} />
    </>
  );
}
