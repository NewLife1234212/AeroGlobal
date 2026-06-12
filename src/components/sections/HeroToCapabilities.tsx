"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight, Ship, Plane, Warehouse, Globe, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

// ==========================================
// SECTION 1: NAVBAR
// ==========================================
import { ChevronDown, Search, HelpCircle, MessageSquare } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Global Network", href: "/network" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Customer Stories", href: "/customers" },
    { name: "News & Insights", href: "/news" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" : "py-4 bg-transparent"
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between">
          
          {/* LEFT SECTION: Logo & Main Links */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-900 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className={`text-2xl font-black tracking-tight ${isScrolled ? "text-blue-900" : "text-white"}`}>AeroGlobal</span>
            </a>

            <div className={`hidden lg:flex items-center gap-6 text-sm font-bold ${isScrolled ? "text-slate-700" : "text-slate-200"}`}>
              <a href="/services" className="hover:text-emerald-500 transition-colors">Services</a>
              <a href="/track" className="hover:text-emerald-500 transition-colors">Tracking</a>
              <a href="/digital" className="hover:text-emerald-500 transition-colors">Digital Solutions</a>
              
              {/* Company Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-emerald-500 transition-colors py-2">
                  Company <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100">
                  {companyLinks.map(link => (
                    <a key={link.name} href={link.href} className="block px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/apply" className="hover:text-emerald-500 transition-colors">Apply</a>
            </div>
          </div>

          {/* RIGHT SECTION: Utilities & Buttons */}
          <div className={`hidden lg:flex items-center gap-6 text-sm font-medium ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>
            
            <button className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-colors ${isScrolled ? 'border-slate-300 hover:border-blue-900' : 'border-slate-500 hover:border-white'}`}>
              <Search className="w-4 h-4" /> Ask AeroGlobal
            </button>

            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"><Globe className="w-4 h-4" /> EN</button>
              <button className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"><HelpCircle className="w-4 h-4" /> Support</button>
              <a href="/contact" className={`px-5 py-2 ml-2 text-sm font-bold rounded transition-colors ${isScrolled ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-emerald-500 text-white hover:bg-emerald-600'}`}>
                Contact & Quote
              </a>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button className={`lg:hidden ${isScrolled ? "text-slate-900" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a1930] pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl font-bold text-white pb-20">
              <a href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors border-b border-white/10 pb-4">Services</a>
              <a href="/track" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors border-b border-white/10 pb-4">Tracking</a>
              <a href="/digital" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors border-b border-white/10 pb-4">Digital Solutions</a>
              <a href="/apply" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors border-b border-white/10 pb-4">Apply</a>
              
              <div className="pt-2">
                <span className="text-slate-400 text-sm uppercase tracking-widest mb-4 block">Company</span>
                <div className="flex flex-col gap-4 pl-4 border-l border-white/20">
                  {companyLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-emerald-400 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/20 flex flex-col gap-4">
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-emerald-500 text-white text-center py-3 rounded hover:bg-emerald-600">Contact & Quote</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ==========================================
// SECTION 2: HERO
// ==========================================
export const Hero = () => {
  return (
    <section className="relative min-h-[85dvh] flex items-center overflow-hidden bg-white">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full md:w-[55%] h-full bg-[#0a1930] relative z-10">
          <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-r from-[#0a1930] to-transparent z-20 translate-x-full hidden md:block" />
        </div>
        <div className="hidden md:block md:w-[45%] h-full relative">
          <Image src="/warehouse.png" alt="AeroGlobal Warehouse Facilities" fill className="object-cover object-center opacity-80" priority />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-30 flex pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-blue-200">New Mega-Hub opened in Rotterdam</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-balance">
            Moving your cargo <span className="text-emerald-400">across the globe.</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed font-medium max-w-xl">
            From heavy ocean freight to time-critical air charters, AeroGlobal provides end-to-end physical supply chain solutions with unmatched reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-emerald-500 text-white px-8 py-4 rounded text-sm font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 text-center flex items-center justify-center gap-2">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded text-sm font-bold hover:bg-white/20 transition-colors text-center">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 3: TRUSTED BY
// ==========================================
export const TrustedBy = () => {
  return (
    <section className="py-12 border-b border-slate-200 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Delivering for the world's most demanding industries</p>
      </div>
      <div className="flex whitespace-nowrap opacity-40 grayscale">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-20 items-center shrink-0"
        >
          {['VOLKSWAGEN', 'SAMSUNG', 'BOSCH', 'SIEMENS', 'PFIZER', 'SONY', 'PANASONIC', 'NESTLE', 'TOYOTA'].map((logo, i) => (
            <div key={i} className="text-2xl font-black tracking-tighter text-blue-900">{logo}</div>
          ))}
        </motion.div>
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-20 items-center shrink-0 ml-20"
        >
           {['VOLKSWAGEN', 'SAMSUNG', 'BOSCH', 'SIEMENS', 'PFIZER', 'SONY', 'PANASONIC', 'NESTLE', 'TOYOTA'].map((logo, i) => (
            <div key={i} className="text-2xl font-black tracking-tighter text-blue-900">{logo}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 4: CORE SERVICES
// ==========================================
export const CoreUsers = () => {
  const services = [
    {
      title: "Ocean Freight",
      icon: <Ship className="w-6 h-6 text-emerald-500" />,
      desc: "FCL and LCL shipping across all major trade lanes with guaranteed space allocations from premium ocean carriers."
    },
    {
      title: "Air Freight",
      icon: <Plane className="w-6 h-6 text-emerald-500" />,
      desc: "Time-definite global air charter and consolidated cargo services for when your supply chain cannot wait."
    },
    {
      title: "Contract Logistics",
      icon: <Warehouse className="w-6 h-6 text-emerald-500" />,
      desc: "State-of-the-art fulfillment centers, cross-docking, and inventory management at strategic global ports."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-blue-900 mb-6">
            Complete Logistics Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We handle the heavy lifting. From factory floor to final destination, our physical assets and expert teams ensure your cargo arrives on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-8">{service.desc}</p>
              
              <a href="#quote" className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:text-emerald-500 transition-colors">
                Request Service <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 5: GLOBAL INFRASTRUCTURE
// ==========================================
export const PlatformCapabilities = () => {
  return (
    <section id="infrastructure" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Global Footprint</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900">
            Infrastructure you can rely on
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 leading-tight">Strategically located assets worldwide.</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-5xl font-black text-emerald-500 mb-2">45+</div>
                <div className="text-sm text-slate-600 font-bold">Mega-Warehouses</div>
              </div>
              <div>
                <div className="text-5xl font-black text-emerald-500 mb-2">120</div>
                <div className="text-sm text-slate-600 font-bold">Countries Served</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Port-side Operations</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">Direct access facilities at Rotterdam, Shanghai, Los Angeles, and Jebel Ali.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">AEO Certified Security</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">Highest tier of customs compliance and cargo security across all physical locations.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
              <Image src="/hero.png" alt="AeroGlobal Operations" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
