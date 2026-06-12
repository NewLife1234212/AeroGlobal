import { DigitalSolutions } from '@/components/sections/DigitalSolutions';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';

export const metadata = {
  title: 'Digital Solutions | AeroGlobal Logistics',
  description: 'Explore our APIs, dashboards, AI, and mobile apps to modernize your supply chain.',
};

export default function DigitalPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Digital Solutions</h1>
          <p className="text-xl text-blue-200">Modernize your supply chain with our cutting-edge platform.</p>
        </div>
      </div>
      
      <div className="pt-0">
        <DigitalSolutions />
      </div>

      <Footer />
    </main>
  );
}
