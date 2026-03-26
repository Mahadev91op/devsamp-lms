"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewForm from "./ReviewForm";

export default function ToggleReviewSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center relative z-20">
      
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative px-8 py-4 bg-white border border-gray-300 rounded-full overflow-hidden hover:border-blue-500 transition-colors duration-300 shadow-sm"
            >
              <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-3 text-gray-800 font-bold tracking-wider uppercase text-sm group-hover:text-blue-600 transition-colors">
                <span className="text-xl">✍️</span> Write a Review
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="w-full max-w-md mx-auto overflow-hidden"
          >
            <div className="py-10 px-4">
              <ReviewForm onClose={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}