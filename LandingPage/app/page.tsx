import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  MetricsSection,
  TestimonialsSection,
  CTASection,
  ContactSection,
} from "./components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <MetricsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
