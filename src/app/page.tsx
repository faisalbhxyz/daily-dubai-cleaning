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
import { Testimonials } from "@/components/Testimonials";
import { WhoWeAre } from "@/components/WhoWeAre";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhoWeAre />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <ServiceAreas />
        <Blog />
      </main>
      <Footer />
      <FloatingContact />
      <MobileStickyBar />
    </>
  );
}
