import { Sustainability } from '@/components/sections/Sustainability';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';

export const metadata = {
  title: 'Sustainability | AeroGlobal Logistics',
  description: 'Our commitment to a carbon-neutral supply chain by 2028.',
};

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Sustainability</h1>
          <p className="text-xl text-blue-200">Our commitment to a carbon-neutral supply chain by 2028.</p>
        </div>
      </div>
      
      <div className="pt-0">
        <Sustainability />
      </div>

      <Footer />
    </main>
  );
}
