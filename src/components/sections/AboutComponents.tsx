"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const HistoryTimeline = () => {
  const events = [
    { year: '1998', title: 'Foundation', desc: 'Started with a single warehouse in Rotterdam.' },
    { year: '2005', title: 'Global Expansion', desc: 'Opened regional hubs in Shanghai and Los Angeles.' },
    { year: '2012', title: 'Digital Transformation', desc: 'Launched our proprietary AI-driven supply chain platform.' },
    { year: '2020', title: 'Carbon Neutral Pledge', desc: 'Committed to achieving net-zero emissions by 2028.' },
    { year: '2024', title: 'Enterprise Standard', desc: 'Recognized as the leading logistics provider for Fortune 500 companies.' },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">Our History</h2>
        </div>
        <div className="space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-24 shrink-0 text-right">
                <span className="text-2xl font-black text-emerald-500">{event.year}</span>
              </div>
              <div className="w-px bg-slate-200 h-full relative mt-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-900" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                <p className="text-slate-600">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LeadershipCards = () => {
  const leaders = [
    { name: 'Michael Vance', role: 'Chief Executive Officer', initial: 'MV' },
    { name: 'Elena Rostova', role: 'Chief Operating Officer', initial: 'ER' },
    { name: 'David Chen', role: 'Chief Technology Officer', initial: 'DC' },
    { name: 'Sarah Jenkins', role: 'VP of Global Forwarding', initial: 'SJ' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm"
            >
              <div className="w-20 h-20 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {leader.initial}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-1">{leader.name}</h3>
              <p className="text-slate-500 text-sm">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
