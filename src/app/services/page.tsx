import { Navbar } from '@/components/sections/HeroToCapabilities';
import { ProductShowcase as Facilities } from '@/components/sections/ShowcaseToIntegrations';
import { FinalCta, Footer } from '@/components/sections/PricingToFooter';
import { ServiceTabs } from '@/components/sections/ServiceTabs';

export const metadata = {
  title: 'Our Services | AeroGlobal Logistics',
  description: 'Ocean freight, air cargo, cross-border trucking, and contract logistics.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Our Services</h1>
          <p className="text-xl text-blue-200">End-to-end supply chain solutions tailored for your industry.</p>
        </div>
      </div>
      
      <div className="pt-0">
        <ServiceTabs />
        <Facilities />
        <FinalCta />
      </div>

      <Footer />
    </main>
  );
}
