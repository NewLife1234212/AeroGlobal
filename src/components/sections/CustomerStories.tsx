"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const CustomerStories = () => {
  const stories = [
    {
      company: 'GlobalTech Electronics',
      quote: "AeroGlobal's digital platform completely transformed how we manage our component supply chain across Asia and Europe. Visibility went from days to seconds.",
      author: 'Sarah Jenkins, VP of Supply Chain',
    },
    {
      company: 'FreshFoods International',
      quote: "When dealing with perishables, reliability isn't just nice to have—it's everything. AeroGlobal's reefer network is unmatched.",
      author: 'Marcus Chen, Logistics Director',
    },
    {
      company: 'AutoMotive Corp',
      quote: "We needed a partner who could handle just-in-time delivery for manufacturing. AeroGlobal delivered beyond expectations.",
      author: 'Elena Rodriguez, Procurement Manager',
    }
  ];

  return (
    <section className="py-24 bg-white" id="customers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Success Stories</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-blue-900 mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative"
            >
              <div className="text-emerald-500 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="text-slate-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
                {story.quote}
              </p>
              <div>
                <h4 className="font-bold text-blue-900">{story.company}</h4>
                <p className="text-sm text-slate-500">{story.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
