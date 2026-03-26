"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactCard = ({ icon, title, value, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, backgroundColor: "#f8fafc" }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white border border-gray-200 shadow-sm transition-all group cursor-pointer"
  >
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-bold mb-0.5 md:mb-1">{title}</h4>
      <p className="text-gray-900 font-bold text-sm md:text-base group-hover:text-blue-600 transition-colors line-clamp-1">
        {value}
      </p>
    </div>
  </motion.a>
);

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully! We will contact you soon.");
        setFormState({ name: "", email: "", message: "" }); 
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Form Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden" id="contact">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 border border-blue-200 rounded-full bg-blue-50 backdrop-blur-md"
            >
              <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">
                Get in Touch
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black text-gray-900"
            >
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Conversation</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            
            {/* LEFT: Contact Info */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed text-center lg:text-left font-medium">
                    Course ke baare me koi sawal hai ya web dev project banwana hai? Main aur meri team Devsamp humesha aapke liye hazir hain.
                </p>

                <div className="space-y-3 md:space-y-4">
                    <ContactCard 
                        delay={0.2}
                        title="Email Me"
                        value="hello@devsamp.com"
                        href="mailto:hello@devsamp.com"
                        icon={<svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    />
                    <ContactCard 
                        delay={0.3}
                        title="Call Us"
                        value="+91 7449704463"
                        href="tel:+917449704463"
                        icon={<svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                    />
                </div>
            </div>

            {/* RIGHT: Modern Light Form */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-white border border-gray-200 shadow-xl p-5 md:p-8 rounded-2xl md:rounded-3xl order-1 lg:order-2"
            >
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Name</label>
                            <input 
                                type="text" 
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({...formState, name: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400"
                                placeholder="Rahul Kumar"
                            />
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Email</label>
                            <input 
                                type="email" 
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({...formState, email: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400"
                                placeholder="rahul@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 md:space-y-2">
                        <label className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                        <textarea 
                            rows="4"
                            required
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm md:text-base text-gray-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400 resize-none"
                            placeholder="Course ya web development services ke bare me puchiye..."
                        ></textarea>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 md:py-4 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden group text-sm md:text-base"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                           {isSubmitting ? "Sending..." : "Send Message"}
                           {!isSubmitting && (
                               <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                               </svg>
                           )}
                        </span>
                    </motion.button>
                </form>
            </motion.div>

        </div>
      </div>
    </section>
  );
}