"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const GlobalMap = () => {
  return (
    <section className="py-20 bg-slate-50" id="network">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-blue-900 mb-6"
        >
          Our Global Footprint
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          From major ports to inland hubs, explore our physical infrastructure connecting 120+ countries.
        </p>
        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-200">
          {/* Placeholder for an interactive Leaflet/Mapbox map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000000!2d0!3d30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow font-bold text-sm text-blue-900 border border-slate-200">
            Interactive Network Map
          </div>
        </div>
      </div>
    </section>
  );
};
