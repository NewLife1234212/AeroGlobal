import { GlobalMap } from '@/components/sections/GlobalMap';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';

export const metadata = {
  title: 'Global Network | AeroGlobal Logistics',
  description: 'Explore our global infrastructure connecting 120+ countries.',
};

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Global Network</h1>
          <p className="text-xl text-blue-200">Infrastructure you can rely on across 120+ countries.</p>
        </div>
      </div>
      
      <div className="pt-0">
        <GlobalMap />
      </div>

      <Footer />
    </main>
  );
}
