"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ReviewForm({ onClose }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    message: "",
    rating: 5
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", role: "", message: "", rating: 5 });
        router.refresh();
        setTimeout(() => {
          setSuccess(false);
          if (onClose) onClose();
        }, 1500);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs md:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300";

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-100 blur-[50px] rounded-full pointer-events-none"></div>

      <div className="relative p-5 md:p-6">
        
        <div className="text-center mb-5 md:mb-6">
          <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-wide">ADD REVIEW</h3>
          <p className="text-gray-500 text-[10px] md:text-xs mt-1">Share your learning experience.</p>
        </div>

        {success ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 border border-green-200 text-green-600 p-8 rounded-xl text-center py-10"
          >
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-lg font-bold">Review Posted!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase ml-1 mb-1 block">Name</label>
                <input 
                  type="text" required
                  className={inputStyle}
                  placeholder="Rahul"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase ml-1 mb-1 block">Status/Role</label>
                <input 
                  type="text" required
                  className={inputStyle}
                  placeholder="Student / Fresher"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase ml-1 mb-1 block">Rating</label>
              <div className="flex gap-1 bg-gray-50 w-full justify-center py-2 rounded-lg border border-gray-200">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star} type="button"
                    onClick={() => setFormData({...formData, rating: star})}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-xl md:text-2xl transition-transform hover:scale-110 focus:outline-none px-1"
                  >
                    <span className={star <= (hoverRating || formData.rating) ? "text-yellow-400 drop-shadow-sm" : "text-gray-300"}>★</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase ml-1 mb-1 block">Message</label>
              <textarea 
                required rows="3"
                className={inputStyle}
                placeholder="Course kaisa laga?..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2.5 md:py-3 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-md transition-all mt-1"
            >
              {loading ? "..." : "Submit"}
            </motion.button>
            
          </form>
        )}
      </div>
    </div>
  );
}