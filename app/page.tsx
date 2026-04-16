import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { PortalTeaser } from "@/components/portal-teaser";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { StickyCTA } from "@/components/sticky-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <HowItWorks />
        <Pricing />
        <PortalTeaser />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
