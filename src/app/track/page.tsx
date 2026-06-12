import { TrackingTool } from '@/components/sections/TrackingTool';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';

export const metadata = {
  title: 'Track & Trace | AeroGlobal Logistics',
  description: 'Track your containers in real-time.',
};

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Track & Trace</h1>
          <p className="text-xl text-blue-200">Real-time visibility for all your shipments worldwide.</p>
        </div>
      </div>
      
      <div className="pt-0 pb-24">
        <TrackingTool />
      </div>

      <Footer />
    </main>
  );
}
