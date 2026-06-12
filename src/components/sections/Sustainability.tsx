"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, Zap } from 'lucide-react';

export const Sustainability = () => {
  const stats = [
    { label: 'Carbon‑Neutral Goal', value: '2028', icon: <Leaf className="w-8 h-8 text-emerald-500" /> },
    { label: 'Containers Transported', value: '15M+', icon: <Globe className="w-8 h-8 text-emerald-500" /> },
    { label: 'Renewable Energy Used', value: '45%', icon: <Zap className="w-8 h-8 text-emerald-500" /> },
  ];

  return (
    <section className="py-20 bg-slate-50" id="sustainability">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-blue-900 mb-6"
        >
          Sustainability & Climate Action
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Driving a greener future with low‑carbon logistics, renewable energy, and transparent reporting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{s.value}</h3>
              <p className="text-slate-600">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
