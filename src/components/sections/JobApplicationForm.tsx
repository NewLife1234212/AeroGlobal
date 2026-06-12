"use client";

import React, { useState } from "react";
import { Send, Briefcase } from "lucide-react";

export const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "Remote Logistics Coordinator",
    linkedin: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Reusing the same API route for simplicity, just formatting the message differently
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: 'Job Application', // Hack to reuse the DB schema
          freightType: 'Career', 
          message: `Position: ${formData.position}\nLinkedIn/Portfolio: ${formData.linkedin}\n\nCover Letter:\n${formData.message}`
        })
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFormData({ name: "", email: "", position: "Remote Logistics Coordinator", linkedin: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="apply" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Join Our Team</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900 mb-6">
            Apply for a Position
          </h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">
            Ready to shape the future of global logistics? Submit your application below. Our talent acquisition team reviews every submission carefully.
          </p>
          
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
            {status === "success" && (
              <div className="absolute inset-0 bg-slate-50 z-10 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8 text-emerald-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-2">Application Received</h3>
                <p className="text-slate-600">Thank you for applying. Our recruitment team will review your profile and get back to you soon.</p>
                <button 
                  type="button" 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-800"
                >
                  Submit another application
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Position Applied For</label>
              <select value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Remote Logistics Coordinator</option>
                <option>Remote Supply Chain Analyst</option>
                <option>Remote Freight Broker</option>
                <option>Senior Software Engineer</option>
                <option>Logistics Telesales Specialist</option>
                <option>Remote Freight Sales Representative (B2B)</option>
                <option>Other / General Application</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">LinkedIn Profile or Resume Link</label>
              <input required type="url" placeholder="https://linkedin.com/in/..." value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Cover Letter (Optional)</label>
              <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us why you'd be a great fit..." className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
            </div>
            
            <button disabled={status === "submitting"} type="submit" className="w-full bg-emerald-500 text-white font-bold py-3.5 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              {status === "submitting" ? "Submitting..." : "Submit Application"} <Send className="w-4 h-4" />
            </button>
            {status === "error" && <p className="text-red-500 text-sm mt-2 text-center">Failed to submit. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
