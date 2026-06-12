"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Plane, Truck, Warehouse, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('ocean');

  const tabs = [
    { id: 'ocean', label: 'Ocean Freight', icon: <Ship className="w-5 h-5" /> },
    { id: 'air', label: 'Air Freight', icon: <Plane className="w-5 h-5" /> },
    { id: 'road', label: 'Road Transport', icon: <Truck className="w-5 h-5" /> },
    { id: 'contract', label: 'Contract Logistics', icon: <Warehouse className="w-5 h-5" /> },
  ];

  const content = {
    ocean: {
      title: 'Global Ocean Freight Solutions',
      desc: 'FCL and LCL shipping across all major trade lanes with guaranteed space allocations from premium ocean carriers. We provide seamless end-to-end maritime logistics, ensuring your cargo navigates the complexities of global ports with unmatched efficiency.',
      features: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Refrigerated Cargo', 'Breakbulk & Project Cargo']
    },
    air: {
      title: 'Time-Definite Air Cargo',
      desc: 'When time is of the essence, our global air freight network delivers. From priority express services to full aircraft charters, we provide the speed and security required for your most critical shipments.',
      features: ['Next Flight Out (NFO)', 'Deferred Air Freight', 'Full & Part Charters', 'Temperature-Controlled Air']
    },
    road: {
      title: 'Cross-Border Trucking & Rail',
      desc: 'Our expansive ground network provides reliable inland connections. We operate state-of-the-art fleets and rail solutions across Europe, North America, and Asia for seamless door-to-door delivery.',
      features: ['Full Truckload (FTL)', 'Less than Truckload (LTL)', 'Intermodal Rail Services', 'Last Mile Delivery']
    },
    contract: {
      title: 'Integrated Fulfillment & Warehousing',
      desc: 'Beyond transportation, we offer strategic warehousing, inventory management, and value-added services. Our mega-hubs act as an extension of your own operations, optimizing your supply chain from factory to final consumer.',
      features: ['Cross-Docking', 'Pick & Pack Fulfillment', 'Reverse Logistics', 'Customs Bonded Facilities']
    }
  };

  const activeContent = content[activeTab as keyof typeof content];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tabs Header */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold text-sm transition-colors relative ${
                activeTab === tab.id ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeServiceTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl font-black text-blue-900 mb-6">{activeContent.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {activeContent.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {activeContent.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded text-sm font-bold hover:bg-blue-800 transition-colors">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-slate-100 rounded-3xl aspect-square p-6">
                <div className="w-full h-full rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
                  {activeTab === 'ocean' && <Image src="/service_ocean.png" alt="Ocean Freight" fill className="object-cover" />}
                  {activeTab === 'air' && <Image src="/service_air.png" alt="Air Freight" fill className="object-cover" />}
                  {activeTab === 'road' && <Image src="/service_road.png" alt="Road Transport" fill className="object-cover" />}
                  {activeTab === 'contract' && <Image src="/service_warehouse.png" alt="Contract Logistics" fill className="object-cover" />}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
