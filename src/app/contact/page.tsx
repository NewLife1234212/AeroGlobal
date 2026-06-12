import { Navbar } from '@/components/sections/HeroToCapabilities';
import { Pricing as QuoteForm, Faq, Footer } from '@/components/sections/PricingToFooter';
import { JobApplicationForm } from '@/components/sections/JobApplicationForm';

export const metadata = {
  title: 'Contact & Quote | AeroGlobal Logistics',
  description: 'Request a freight quote or contact our global logistics team.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#0a1930] pb-24">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200">Our global team is ready to optimize your supply chain.</p>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="w-full h-96 bg-slate-200 relative -mt-10 z-10 border-y border-slate-300">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156543.60677103442!2d4.341490214811559!3d51.90226349925208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5c3515f58fd%3A0x89b05ca4b3b19b48!2sPort%20of%20Rotterdam!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-80"
        />
      </div>

      <QuoteForm />
      <JobApplicationForm />
      <Faq />
      <Footer />
    </main>
  );
}
