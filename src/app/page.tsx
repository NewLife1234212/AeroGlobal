import { Navbar, Hero, TrustedBy, CoreUsers as Services } from "@/components/sections/HeroToCapabilities";
import { Results } from "@/components/sections/ShowcaseToIntegrations";
import { FinalCta, Footer } from "@/components/sections/PricingToFooter";
import { DigitalSolutions } from "@/components/sections/DigitalSolutions";
import { Sustainability } from "@/components/sections/Sustainability";
import { TrackingTool } from "@/components/sections/TrackingTool";
import { CustomerStories } from "@/components/sections/CustomerStories";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <TrackingTool />
      <TrustedBy />
      <Services />
      <DigitalSolutions />
      <Results />
      <CustomerStories />
      <Sustainability />
      <FinalCta />
      <Footer />
    </main>
  );
}
