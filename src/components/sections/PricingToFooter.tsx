"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Globe, Mail, Phone, MapPin, Send } from "lucide-react";

// ==========================================
// SECTION 10: REQUEST QUOTE FORM
// ==========================================
export const Pricing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    freightType: "Sea Freight",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFormData({ name: "", email: "", company: "", freightType: "Sea Freight", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900 mb-6">
            Request a Freight Quote
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">
            Provide details about your upcoming shipment, and our logistics experts will respond within 2 hours with optimized routing options and pricing.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Urgent Charters</div>
                <div className="text-xl font-black text-blue-900">+1 (800) 555-0199</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
            {status === "success" && (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-2">Quote Request Received</h3>
                <p className="text-slate-600">Our pricing team is reviewing your requirements and will contact you shortly.</p>
                <button 
                  type="button" 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-800"
                >
                  Submit another request
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company</label>
                <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Freight Type</label>
                <select value={formData.freightType} onChange={e => setFormData({...formData, freightType: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sea Freight</option>
                  <option>Air Freight</option>
                  <option>Road Transport</option>
                  <option>Warehousing</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Shipment Details</label>
              <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Origin, destination, cargo type, estimated volume..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            
            <button disabled={status === "submitting"} type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              {status === "submitting" ? "Sending..." : "Submit Request"} <Send className="w-4 h-4" />
            </button>
            {status === "error" && <p className="text-red-500 text-sm mt-2 text-center">Failed to submit. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

// Helper for check circle icon
const CheckCircleIcon = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ==========================================
// SECTION 11: FAQ
// ==========================================
const FaqItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-blue-900">{q}</span>
        <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed font-medium">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Faq = () => {
  const faqs = [
    { q: "What is your global coverage for sea freight?", a: "We operate across all major global trade lanes with direct port-side facilities in North America, Europe, and Asia-Pacific." },
    { q: "Do you offer door-to-door delivery?", a: "Yes. Our multi-modal operations allow us to handle your cargo from the manufacturer's door directly to the final distribution center or retail store." },
    { q: "How do you handle customs clearance?", a: "We have in-house licensed customs brokers at all major ports who manage document preparation, filing, and duty payments on your behalf." },
    { q: "Can I track my cargo in real-time?", a: "Absolutely. All customers receive access to our proprietary tracking portal with live satellite positioning for ocean and air freight." },
    { q: "Do you handle hazardous materials (DG)?", a: "Yes, our teams are fully certified to handle, store, and transport Dangerous Goods classes 1 through 9 under strict compliance." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900 mb-12 text-center">
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 12: FINAL CTA
// ==========================================
export const FinalCta = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0a1930]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-500 blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-emerald-500 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
          Ready to optimize your supply chain?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
          Speak with our logistics experts today to design a physical network that scales with your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#quote" className="bg-emerald-500 text-white px-8 py-4 rounded text-sm font-bold hover:bg-emerald-600 transition-colors shadow-lg">
            Request a Quote
          </a>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded text-sm font-bold hover:bg-white/10 transition-colors">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 13: FOOTER
// ==========================================
export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-900 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              AeroGlobal
            </div>
            <p className="text-slate-600 max-w-sm mb-8 leading-relaxed font-medium">
              Global headquarters in Rotterdam, NL. Operating 45+ mega-facilities and moving millions of tons of cargo annually across the globe.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <MapPin className="w-4 h-4 text-blue-600" />
                Port of Rotterdam, Netherlands
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-xs">Our Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="/services" className="hover:text-blue-600 transition-colors">Ocean Freight (FCL/LCL)</a></li>
              <li><a href="/services" className="hover:text-blue-600 transition-colors">Air Freight Charters</a></li>
              <li><a href="/services" className="hover:text-blue-600 transition-colors">Cross-border Trucking</a></li>
              <li><a href="/services" className="hover:text-blue-600 transition-colors">Contract Logistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="/news" className="hover:text-blue-600 transition-colors">Market News</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">Facility Locations</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Tracking Portal</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Schedules</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-xs">Corporate</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About AeroGlobal</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">Careers & Drivers</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">Sustainability (ESG)</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-medium text-slate-500">© {new Date().getFullYear()} AeroGlobal Logistics. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">ISO 9001 & AEO Certified Logistics Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
