"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatCard = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
    whileHover={{ y: -5, scale: 1.05, shadow: "0px 10px 30px rgba(59, 130, 246, 0.15)" }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
    className="relative group flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl overflow-hidden cursor-pointer bg-white border border-gray-100 shadow-sm"
  >
    <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-xl border border-blue-100/50 rounded-2xl z-0 transition-all duration-500 group-hover:border-blue-300 group-hover:bg-blue-50"></div>
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-400/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

    <h3 className="relative z-10 text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight group-hover:scale-110 transition-transform duration-300">
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-indigo-800">
        {number}
      </span>
    </h3>
    <p className="relative z-10 text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-blue-700 transition-colors">
      {label}
    </p>
  </motion.div>
);

const ValueCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
  >
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border border-blue-200 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-900 font-bold text-base mb-0.5">{title}</h4>
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default function AboutSection() {
  const ref = useRef(null);

  return (
    <section className="relative py-12 md:py-20 bg-gray-50 overflow-hidden flex items-center justify-center min-h-[90vh] md:min-h-[80vh]" id="about">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 border border-blue-200 rounded-full bg-white backdrop-blur-md shadow-sm"
            >
              <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                About Devsamp
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-gray-900 leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mahadev</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50 to-transparent py-2 rounded-r-lg font-medium"
            >
              Mera naam Mahadev hai. Main ek Full-Stack Next.js, MongoDB aur JavaScript Developer hoon. Apni agency "Devsamp" ke through main apne industry experience ko directly aap tak is course me la raha hoon.
            </motion.p>

            <div className="space-y-3 pt-2">
              <ValueCard 
                delay={0.3}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                title="Practical Coding"
                desc="Sirf theory nahi, hum real-world projects aur production-ready apps banana sikhenge."
              />
              <ValueCard 
                 delay={0.4}
                 icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                 title="Fast & Modern Stack"
                 desc="Next.js aur MongoDB ke sath modern web standards ko master karein."
              />
            </div>
          </div>

          {/* RIGHT SIDE: Visuals & Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10">
              <StatCard number="100+" label="Projects Built" delay={0.2} />
              <StatCard number="MERN" label="Tech Stack" delay={0.3} />
              <StatCard number="24/7" label="Community Support" delay={0.4} />
              <StatCard number="100%" label="Practical Learning" delay={0.5} />
            </div>

            {/* Quote Box */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="mt-6 p-5 bg-white border border-gray-200 rounded-2xl relative overflow-hidden shadow-lg"
            >
               <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-100 rounded-full blur-xl"></div>
               <p className="text-sm md:text-base font-medium italic text-gray-700 relative z-10 leading-relaxed">
                 "Code is like humor. When you have to explain it, it’s bad. Let's write code that builds the future."
               </p>
               <div className="flex items-center gap-3 mt-3 border-t border-gray-100 pt-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md">M</div>
                  <span className="text-xs font-bold text-gray-900 tracking-wide">Mahadev, Devsamp</span>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}