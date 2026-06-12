"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Briefcase, MapPin, Clock, ArrowRight, Globe, Laptop, 
  TrendingUp, CheckCircle2, Users, Target, Zap, Shield, ChevronDown, 
  ChevronUp, FileText, Video, Award, CircleDollarSign 
} from 'lucide-react';

export const JobDescriptions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const jobs = [
    {
      id: 'logistics-coordinator',
      title: 'Remote Logistics Coordinator',
      type: 'Full-Time / Remote',
      location: 'Anywhere',
      salary: '$40k - $60k / year',
      posted: '2 days ago',
      department: 'Operations',
      desc: 'Coordinate international shipments, manage documentation, and ensure smooth operations between our global hubs. You will be the central communication point between carriers, customs, and clients.',
      reqs: ['3+ years in freight forwarding', 'Familiarity with customs regulations', 'Strong English communication'],
      pdfLink: 'https://raw.githubusercontent.com/NewLife1234212/123123/25130f84a275f2a7e549a760a368fafad6fbe711/Job%20Description%20AeroGlobal%202026.zip' 
    },
    {
      id: 'supply-chain-analyst',
      title: 'Remote Supply Chain Analyst',
      type: 'Full-Time / Remote',
      location: 'Anywhere',
      salary: '$70k - $100k / year',
      posted: '1 week ago',
      department: 'Data & Analytics',
      desc: 'Analyze supply chain data to optimize routes, reduce costs, and improve overall operational efficiency. You will build predictive models to forecast demand and mitigate global supply chain risks.',
      reqs: ['SQL & Python proficiency', 'Experience with PowerBI/Tableau', 'Background in logistics data'],
      pdfLink: 'https://raw.githubusercontent.com/NewLife1234212/123123/25130f84a275f2a7e549a760a368fafad6fbe711/Job%20Description%20AeroGlobal%202026.zip'
    },
    {
      id: 'freight-broker',
      title: 'Remote Freight Broker',
      type: 'Contract / Remote',
      location: 'North America / Europe',
      salary: '$50k base + Uncapped Commission',
      posted: '2 weeks ago',
      department: 'Sales & Brokerage',
      desc: 'Build relationships with carriers and shippers, negotiate rates, and manage freight movements across North America and Europe. High commission potential in a fast-paced environment.',
      reqs: ['Existing book of business preferred', 'Strong negotiation skills', 'Resilience and drive'],
      pdfLink: 'https://raw.githubusercontent.com/NewLife1234212/123123/25130f84a275f2a7e549a760a368fafad6fbe711/Job%20Description%20AeroGlobal%202026.zip'
    },
    {
      id: 'software-engineer',
      title: 'Senior Software Engineer (Logistics Platform)',
      type: 'Full-Time / Remote',
      location: 'Anywhere',
      salary: '$120k - $160k / year',
      posted: '3 weeks ago',
      department: 'Engineering',
      desc: 'Help build our next-generation digital logistics platform. You will work on real-time tracking systems, routing algorithms, and API integrations with global shipping lines.',
      reqs: ['5+ years with React/Node.js', 'Experience with high-throughput systems', 'AWS/GCP knowledge'],
      pdfLink: 'https://raw.githubusercontent.com/NewLife1234212/123123/25130f84a275f2a7e549a760a368fafad6fbe711/Job%20Description%20AeroGlobal%202026.zip'
    },
    {
      id: 'telesales-specialist',
      title: 'Logistics Telesales Specialist',
      type: 'Full-Time / Remote',
      location: 'Anywhere',
      salary: '$35k base + Commission',
      posted: '1 day ago',
      department: 'Sales',
      desc: 'Conduct high-volume outbound calls to prospective clients, introducing them to our global logistics solutions. Identify shipping pain points and schedule meetings for Account Executives.',
      reqs: ['2+ years in B2B telesales', 'Excellent phone communication', 'Comfortable with cold calling'],
      pdfLink: 'https://raw.githubusercontent.com/NewLife1234212/123123/25130f84a275f2a7e549a760a368fafad6fbe711/Job%20Description%20AeroGlobal%202026.zip'
    },
    {
      id: 'freight-sales-rep',
      title: 'Remote Freight Sales Representative (B2B)',
      type: 'Full-Time / Remote',
      location: 'North America / Asia',
      salary: '$45k base + High Commission',
      posted: '3 days ago',
      department: 'Sales',
      desc: 'Close deals over the phone with SMBs looking for reliable ocean and air freight solutions. You will manage the entire sales cycle from initial contact to first shipment.',
      reqs: ['Proven track record in closing sales', 'Knowledge of freight forwarding', 'CRM software experience'],
      pdfLink: 'https://raw.githubusercontent.com/NewLife1234212/123123/25130f84a275f2a7e549a760a368fafad6fbe711/Job%20Description%20AeroGlobal%202026.zip'
    }
  ];

  const faqs = [
    {
      q: 'Do I need to work specific hours?',
      a: 'We are a global team and operate asynchronously. While you will need to overlap 3-4 hours with your core team (usually EST or CET mornings), the rest of your schedule is entirely up to you.'
    },
    {
      q: 'What equipment does AeroGlobal provide?',
      a: 'Every new remote employee receives a $2,500 USD stipend to set up their home office. You can use this for a laptop, monitor, ergonomic chair, standing desk, or any other productivity tools you need.'
    },
    {
      q: 'Is there opportunities for global travel?',
      a: 'Yes! We host an annual all-hands company retreat in a different global city each year. Additionally, some roles may require periodic travel to our mega-hubs in Rotterdam, Shanghai, or Los Angeles.'
    },
    {
      q: 'What is the interview process like?',
      a: 'Typically it involves: 1) A 30-minute introductory call with HR. 2) A 45-minute hiring manager interview. 3) A take-home case study or technical assessment. 4) A final culture-fit interview with a department head.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Featured Hero Image Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center">
        <Image src="/career_hero.png" alt="Remote Logistics Career" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930] via-[#0a1930]/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold border border-emerald-500/30 mb-8 backdrop-blur-sm">
                <Globe className="w-4 h-4" /> Global Remote Team
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                Shape the future of <br/><span className="text-emerald-400">global logistics.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium leading-relaxed max-w-2xl">
                Join our decentralized team of experts. Work from anywhere in the world and help us build the most efficient, transparent supply chain network on earth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#open-roles" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded shadow-lg hover:bg-emerald-600 transition-all hover:scale-105">
                  View Open Roles <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#culture" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                  Discover Our Culture
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-[#0a1930] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">120+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Remote Employees</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">18</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Countries Represented</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">$2.5k</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Home Office Stipend</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">4+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Weeks Min. PTO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Our DNA</p>
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">Core Values</h2>
            <p className="text-lg text-slate-600 font-medium">
              We operate in a complex, fast-paced industry. These are the principles that guide our decentralized team to achieve extraordinary results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <Shield className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Radical Ownership</h3>
              <p className="text-slate-600">We don't micromanage. We give you complex problems and the autonomy to solve them your way. You own the results.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
              <Zap className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Bias for Action</h3>
              <p className="text-slate-600">In logistics, speed is everything. We prefer making a fast decision and iterating rather than waiting for perfect information.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors">
              <Users className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Default to Open</h3>
              <p className="text-slate-600">Transparency is crucial for remote teams. We share documents, record meetings, and communicate openly in public channels.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
              <Target className="w-10 h-10 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Obsession</h3>
              <p className="text-slate-600">Every piece of code we write and every route we optimize must ultimately serve to make our customers' supply chains better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Team Section */}
      <section id="culture" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div>
                <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2">Life at AeroGlobal</p>
                <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6 leading-tight">We are remote,<br/>but never isolated.</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our culture is built on trust, transparency, and async communication. While we are distributed across 18+ time zones, our digital headquarters keeps everyone connected and aligned on our mission to revolutionize logistics.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                <div className="absolute -left-3 -top-3 text-6xl text-emerald-200 font-serif">"</div>
                <p className="text-slate-700 italic font-medium relative z-10 mb-4 text-lg">
                  Working at AeroGlobal has completely changed my perspective on work-life balance. I can coordinate shipments across Asia in the morning, and spend the afternoon hiking near my home in Colorado.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Jane Doe</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Senior Logistics Coordinator</div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8 group">
                  <Image src="/career_benefits.png" alt="Remote workspace" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                  <Image src="/career_team.png" alt="AeroGlobal Team" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">Our Hiring Process</h2>
            <p className="text-lg text-slate-600 font-medium">
              We respect your time. Our process is designed to be rigorous but fast, giving both of us the chance to see if we are a perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-slate-100 z-0" />
            
            {[
              { icon: <FileText/>, title: '1. Application', desc: 'Submit your resume and cover letter. We read every single one.' },
              { icon: <Video/>, title: '2. Video Interview', desc: 'A 30-min chat with our talent team to discuss your background and remote work style.' },
              { icon: <Laptop/>, title: '3. Assessment', desc: 'A role-specific case study or technical test to showcase your actual skills.' },
              { icon: <Award/>, title: '4. Final Offer', desc: 'A final chat with leadership, followed by a competitive offer.' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-emerald-500 mb-6">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
              We are actively hiring!
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-blue-900 mb-6">
              Open Opportunities
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Find your perfect role and apply today. Don't see a fit? Send us your resume anyway to jobs@aeroglobal.com.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="border border-slate-200 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 transition-all duration-300 bg-white group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-emerald-500 transition-all duration-500 group-hover:h-full" />
                
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm tracking-wide uppercase">
                        {job.department}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        <Briefcase className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold">
                        <CircleDollarSign className="w-3.5 h-3.5" /> {job.salary}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-blue-900 mb-4 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium text-lg mb-6 max-w-3xl">
                      {job.desc}
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="text-sm font-bold text-slate-900 mb-2">Requirements preview:</div>
                      <ul className="flex flex-wrap gap-4">
                        {job.reqs.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 shrink-0 lg:w-[240px]">
                    <a href={job.pdfLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-blue-900 font-bold rounded-xl border-2 border-blue-100 hover:border-blue-900 hover:bg-slate-50 transition-colors">
                      <Download className="w-4 h-4" /> Download Full JD
                    </a>
                    <a href="/contact" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-blue-900 text-white font-bold rounded-xl border-2 border-blue-900 hover:bg-emerald-500 hover:border-emerald-500 transition-colors shadow-lg hover:shadow-xl">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                <button 
                  className="w-full px-8 py-6 text-left flex items-center justify-between font-bold text-lg text-blue-900 hover:bg-slate-100 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-emerald-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-slate-600 font-medium leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
