import { Navbar, PlatformCapabilities as Infrastructure } from '@/components/sections/HeroToCapabilities';
import { Integrations as Certifications, Results, CaseStudies } from '@/components/sections/ShowcaseToIntegrations';
import { FinalCta, Footer } from '@/components/sections/PricingToFooter';
import { HistoryTimeline, LeadershipCards } from '@/components/sections/AboutComponents';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | AeroGlobal Logistics',
  description: 'Learn about our history, global infrastructure, and compliance.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">About AeroGlobal</h1>
          <p className="text-xl text-blue-200">Building the physical infrastructure of global trade since 1998.</p>
        </div>
      </div>
      
      <div className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
            At AeroGlobal, we believe that software alone cannot move cargo. It takes physical assets, dedicated teams, and an uncompromising commitment to reliability to keep global supply chains flowing.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            From our humble beginnings operating a single warehouse in Rotterdam, we have grown into a multi-national logistics powerhouse with over 12,000 employees and physical operations in 120 countries.
          </p>
        </div>
        <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image src="/warehouse.png" alt="AeroGlobal Headquarters" fill className="object-cover" />
        </div>
      </div>

      <HistoryTimeline />
      <Results />
      <Infrastructure />
      <LeadershipCards />
      <CaseStudies />
      <Certifications />
      <FinalCta />
      <Footer />
    </main>
  );
}
