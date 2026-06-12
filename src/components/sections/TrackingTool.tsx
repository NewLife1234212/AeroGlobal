"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export const TrackingTool = () => {
  const [trackingId, setTrackingId] = React.useState('');
  const [result, setResult] = React.useState<{status: string; location: string; eta: string} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock result – in real app call an API.
    setResult({ status: 'In Transit', location: 'Rotterdam Port', eta: '2024-10-12' });
  };

  return (
    <section className="py-20 bg-white" id="track">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-blue-900 mb-6"
        >
          Track &amp; Trace
        </motion.h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Enter your container number to see real‑time status.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Container # (e.g., ABCD1234567)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-80 px-4 py-2 border border-slate-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 rounded-r-md hover:bg-emerald-600 transition-colors flex items-center"
          >
            <Search className="w-4 h-4 mr-2" /> Search
          </button>
        </form>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-slate-50 border border-slate-200 rounded-lg p-6 text-left max-w-md mx-auto"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">Status: {result.status}</h3>
            <p className="text-slate-600">Location: {result.location}</p>
            <p className="text-slate-600">Estimated Arrival: {result.eta}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
