import { JobDescriptions } from '@/components/sections/JobDescriptions';
import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Footer } from '@/components/sections/PricingToFooter';

export const metadata = {
  title: 'Job Descriptions | AeroGlobal Logistics',
  description: 'Join our remote logistics team. Browse our remote job opportunities and download detailed Job Descriptions (JD).',
};

export default function JDPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <JobDescriptions />
      <Footer />
    </main>
  );
}
