import { CustomerStories } from '@/components/sections/CustomerStories';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';

export const metadata = {
  title: 'Customer Stories | AeroGlobal Logistics',
  description: 'Hear from our clients about how AeroGlobal transformed their supply chains.',
};

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Customer Success</h1>
          <p className="text-xl text-blue-200">Real stories from the brands that trust us.</p>
        </div>
      </div>
      <CustomerStories />
      <Footer />
    </main>
  );
}
