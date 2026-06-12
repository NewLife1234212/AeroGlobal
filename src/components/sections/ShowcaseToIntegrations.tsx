"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// ==========================================
// SECTION 6: FLEET & FACILITIES (TABS)
// ==========================================
export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Ocean Fleet", "Air Cargo", "Road Transport", "Cold Storage", "Customs Teams"];
  
  const tabContent = [
    {
      title: "Global Ocean Fleet Access",
      desc: "Guaranteed space allocations on major container vessels across Trans-Pacific and Asia-Europe lanes.",
      image: "/fleet.png"
    },
    {
      title: "Dedicated Air Charters",
      desc: "Exclusive access to Boeing 747-8F and 777F freighters for expedited cargo movement.",
      image: "/warehouse.png"
    },
    {
      title: "Cross-Border Trucking",
      desc: "A modern fleet of 500+ Euro 6 compliant trucks serving the entirety of the European Union.",
      image: "/hero.png"
    },
    {
      title: "Temperature-Controlled Storage",
      desc: "State-of-the-art cold chain facilities for pharmaceuticals and perishable goods.",
      image: "/warehouse.png"
    },
    {
      title: "In-House Customs Brokers",
      desc: "Local experts at every major port ensuring your cargo clears borders without delay.",
      image: "/fleet.png"
    }
  ];

  return (
    <section id="network" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900 mb-4">
            Built for any challenge
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">From oversized industrial machinery to temperature-sensitive vaccines, we have the specialized assets required.</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all relative ${
                activeTab === i ? "text-white" : "text-slate-500 hover:text-blue-900 hover:bg-slate-100"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="activeTabLight"
                  className="absolute inset-0 bg-blue-900 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-slate-200 bg-slate-100 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image src={tabContent[activeTab].image} alt={tabContent[activeTab].title} fill className="object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent" />
              
              <div className="absolute inset-x-8 bottom-8 md:bottom-12 flex flex-col justify-end">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{tabContent[activeTab].title}</h3>
                  <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed">{tabContent[activeTab].desc}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 7: RESULTS (ANIMATED COUNTERS)
// ==========================================
const Counter = ({ value, label, suffix = "", prefix = "" }: { value: number, label: string, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }}
      className="flex flex-col items-center justify-center p-8 border-r border-slate-200 last:border-0"
    >
      <div className="text-5xl md:text-7xl font-black text-blue-900 mb-2 tracking-tighter">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm font-bold text-emerald-500 uppercase tracking-widest text-center">{label}</div>
    </motion.div>
  );
};

export const Results = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
          <Counter value={5} suffix="M+" label="TEUs Shipped Annually" />
          <Counter value={150} suffix="K+" label="Tons of Air Freight" />
          <Counter value={12} suffix="M" label="Sq Ft of Warehousing" />
          <Counter value={99} suffix=".8%" label="On-Time Delivery Rate" />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 8: CASE STUDIES
// ==========================================
export const CaseStudies = () => {
  const cases = [
    {
      company: "Global Automaker Supply",
      challenge: "Urgent need to bypass port congestion to keep assembly lines running.",
      solution: "Chartered 4 dedicated Boeing 747s and established priority tarmac handling.",
      results: "Prevented $40M in factory downtime."
    },
    {
      company: "PharmaCorp Vaccines",
      challenge: "Distributing 10M doses requiring strict -70°C cold chain integrity.",
      solution: "Deployed specialized active cooling containers and direct-to-hospital routing.",
      results: "0% temperature excursions. 100% successful delivery."
    },
    {
      company: "Fast Fashion Retailer",
      challenge: "Inventory stockouts during peak holiday season due to delayed ocean freight.",
      solution: "Converted LCL sea freight into sea-air multi-modal via Dubai hub.",
      results: "Transit time cut by 18 days, saving the holiday season."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900 mb-4">
            We deliver when it matters
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">Real-world logistics challenges solved by our global operations teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="text-xl font-black text-blue-900 mb-6 pb-6 border-b border-slate-200">{c.company}</div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1.5">The Challenge</div>
                  <div className="text-sm text-slate-700 font-medium leading-relaxed">{c.challenge}</div>
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-1.5">Our Solution</div>
                  <div className="text-sm text-slate-700 font-medium leading-relaxed">{c.solution}</div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100 mt-4">
                  <div className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-1.5">The Impact</div>
                  <div className="text-sm font-bold text-emerald-800 leading-relaxed">{c.results}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 9: CERTIFICATIONS
// ==========================================
export const Integrations = () => {
  const certs = ["ISO 9001", "ISO 14001", "AEO Certified", "TAPA Class A", "IATA Agent", "FMC Licensed"];
  
  return (
    <section className="py-24 px-6 text-center bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
          Uncompromising Compliance & Security
        </h2>
        <p className="text-lg text-slate-400 mb-12 font-medium">
          Our global operations maintain the highest industry standards for quality, security, and environmental management.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              <span className="font-bold text-slate-300 text-center">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
