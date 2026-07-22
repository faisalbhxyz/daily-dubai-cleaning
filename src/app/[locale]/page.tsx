import { notFound } from "next/navigation";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { WhoWeAre } from "@/components/WhoWeAre";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <HowItWorks dict={dict} />
        <WhoWeAre dict={dict} />
        <WhyChooseUs dict={dict} />
        <Services dict={dict} />
        <QuoteForm dict={dict} />
        <FAQ dict={dict} />
        <ServiceAreas dict={dict} />
        <Blog dict={dict} />
      </main>
      <Footer dict={dict} />
      <FloatingContact dict={dict} />
      <MobileStickyBar dict={dict} />
    </>
  );
}
