"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap, Smartphone } from 'lucide-react';

export const DigitalSolutions = () => {
  const features = [
    { title: 'APIs & Integration', description: 'Robust REST & GraphQL APIs to connect your systems.', icon: <Code className="w-8 h-8 text-emerald-500" /> },
    { title: 'Analytics Dashboard', description: 'Real‑time visibility of shipments, performance, and costs.', icon: <Database className="w-8 h-8 text-emerald-500" /> },
    { title: 'AI & Optimization', description: 'Predictive routing, demand forecasting, and cost savings engine.', icon: <Zap className="w-8 h-8 text-emerald-500" /> },
    { title: 'Mobile Experience', description: 'iOS & Android apps for on‑the‑go tracking and quoting.', icon: <Smartphone className="w-8 h-8 text-emerald-500" /> },
  ];

  return (
    <section className="py-20 bg-white" id="digital">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-blue-900 mb-6"
        >
          Digital Solutions for Modern Logistics
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Seamlessly connect, visualize and automate your supply chain with our cutting‑edge digital platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 border border-slate-100 mx-auto">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
