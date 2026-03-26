"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 pt-28 pb-12 md:pt-36 md:pb-24 overflow-hidden min-h-[100dvh] flex items-center">
      
      {/* Light Theme Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http/www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-blue-200/50 rounded-full blur-[80px] md:blur-[100px] z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-indigo-200/50 rounded-full blur-[80px] md:blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="md:col-span-7 space-y-6 md:space-y-8 text-center md:text-left flex flex-col items-center md:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-white border border-blue-100 shadow-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
              <span className="text-[11px] md:text-xs font-bold text-gray-700 tracking-tight">
                Launch Offer: Enroll in <span className="text-blue-600">Devsamp Academy</span>
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tighter leading-[1.05] md:leading-[0.95]">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Full Stack</span> Development. <br/>Built by Pros.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
              Tutorial hell se bahar nikaliye. <Link href="https://devsamp.com" target="_blank" className="font-bold text-blue-600 hover:text-indigo-600 underline decoration-blue-200 decoration-2 underline-offset-2 transition-colors">Devsamp Agency</Link> ke real-world Next.js, MongoDB, aur JavaScript projects ke sath practical coding sikhiye.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
              <Link href="/courses" className="w-full sm:w-auto">
                <div className="group relative w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-2xl hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                        <span>Explore Courses</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                </div>
              </Link>
              <Link href="/#about" className="w-full sm:w-auto">
                <div className="group w-full flex items-center justify-center gap-2.5 bg-white text-gray-800 font-semibold py-3.5 md:py-4 px-8 rounded-2xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all cursor-pointer">
                    Why Devsamp?
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 md:pt-10 border-t border-gray-200 space-y-4 w-full text-center md:text-left">
              <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Industry Standard Stack you'll master</p>
              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="h-6 md:h-7 w-auto" title="React.js" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-6 md:h-7 w-auto" title="Next.js" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-6 md:h-7 w-auto" title="MongoDB" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="h-6 md:h-7 w-auto" title="Tailwind CSS" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="h-6 md:h-7 w-auto" title="Node.js" />
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Code Visual */}
          <motion.div 
            className="md:col-span-5 relative h-[320px] sm:h-[400px] md:h-[550px] mt-8 md:mt-0 origin-center scale-[0.9] sm:scale-100"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-[2rem] p-4 md:p-6 shadow-2xl shadow-blue-900/5 overflow-hidden transform rotate-2">
                
                <div className="flex items-center gap-1.5 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-100">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                    <span className="text-[10px] md:text-xs text-gray-500 font-mono ml-4">devsamp_course.js</span>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 font-mono text-[9px] md:text-[11px] text-gray-700 leading-relaxed">
                    <div className="space-y-2 md:space-y-3 bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100 col-span-2">
                        <span className="text-blue-600 font-bold">const</span> course = <span className="text-indigo-600">&#123;</span><br/>
                        &nbsp;&nbsp;title: <span className="text-green-600">'Next.js Full Stack'</span>,<br/>
                        &nbsp;&nbsp;instructor: <span className="text-green-600">'Mahadev @ Devsamp'</span>,<br/>
                        &nbsp;&nbsp;stack: <span className="text-indigo-600">[</span>'Next.js', 'MongoDB'<span className="text-indigo-600">]</span><br/>
                        <span className="text-indigo-600">&#125;</span>;
                    </div>
                    
                    <div className="space-y-1.5 md:space-y-2 bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100 transform -rotate-2">
                        <span className="text-blue-600 font-bold">async function</span> <span className="text-purple-600">db</span>() <span className="text-gray-900">&#123;</span><br/>
                        &nbsp;&nbsp;<span className="text-blue-600 font-bold">await</span> connect();<br/>
                        <span className="text-gray-900">&#125;</span>
                    </div>

                    <div className="bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100 flex items-center justify-center transform rotate-3">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-black text-gray-900">100%</span>
                            <span className="text-[8px] md:text-[10px] text-gray-500 text-center font-sans mt-1">Practical Learning</span>
                        </div>
                    </div>

                    <div className="space-y-2 md:space-y-3 bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100 col-span-2 transform -rotate-1">
                        &lt;<span className="text-blue-600">HeroSection</span>&gt;<br/>
                        &nbsp;&nbsp;&lt;<span className="text-blue-600">motion.div</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-900">&#123;</span>/* Learn by Doing */<span className="text-gray-900">&#125;</span><br/>
                        &nbsp;&nbsp;&lt;/<span className="text-blue-600">motion.div</span>&gt;<br/>
                        &lt;/<span className="text-blue-600">HeroSection</span>&gt;
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
            </div>

            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center z-20 border border-gray-100"
            >
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" className="h-6 md:h-8 w-auto" />
            </motion.div>
            
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 right-6 md:-bottom-8 md:right-10 w-14 h-14 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-20 border border-gray-100"
            >
                <span className="text-xl md:text-3xl font-black text-blue-600 tracking-tighter">&lt;/&gt;</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}