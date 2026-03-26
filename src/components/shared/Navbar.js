"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/shared/AuthContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [isOpen]);

  // Admin, Dashboard aur Portal (Exam) routes par Navbar hide karein
  if (pathname && (pathname.startsWith("/admin") || pathname.startsWith("/dashboard") || pathname.startsWith("/portal"))) {
    return null;
  }

  // Helper function to get correct href
  const getHref = (item) => {
    if (item === 'Home') return '/';
    if (item === 'About') return '/#about';
    if (item === 'Contact') return '/#contact';
    return `/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* Navbar Container - ALWAYS LIGHT (bg-white) */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-md"
            : "bg-white border-gray-100 py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex-shrink-0 relative z-[101]">
              <Link 
                href="/" 
                className="flex items-center gap-1 group cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-black text-gray-900 tracking-tighter text-2xl md:text-3xl">
                  Dev<span className="text-blue-600">Samp</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Courses', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={getHref(item)} 
                  className="relative text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {!user ? (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-blue-600 font-bold transition-colors text-sm px-2">
                    Login
                  </Link>
                  <Link href="/signup" className="bg-blue-600 text-white font-bold py-2.5 px-6 rounded-full hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm cursor-pointer">
                    Get Started
                  </Link>
                </>
              ) : (
                // Desktop Profile Dropdown
                <div 
                  className="relative py-2"
                  onMouseEnter={() => setIsProfileOpen(true)}
                  onMouseLeave={() => setIsProfileOpen(false)}
                >
                  <button className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full pl-1 pr-4 py-1 transition-all duration-300 group cursor-pointer">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                       {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-xs font-bold text-gray-900 leading-tight">
                        {user.name.split(' ')[0]}
                      </span>
                      <span className="text-[10px] font-medium text-gray-500 max-w-[100px] truncate leading-tight">
                        {user.email}
                      </span>
                    </div>
                    <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180 text-blue-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50 origin-top-right"
                      >
                        <div className="p-4 border-b border-gray-100 bg-gray-50">
                          <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Signed In As</p>
                          <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <div className="p-2">
                          <Link href={user.role === 'admin' ? "/admin/courses" : "/dashboard"} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors">
                            {user.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
                          </Link>
                          <Link href="/profile" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors">
                            Profile
                          </Link>
                          <div className="h-px bg-gray-100 my-1"></div>
                          <button onClick={() => { logout(); setIsProfileOpen(false); }} className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                            Sign out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button - FIXED FOR PHONES */}
            <div className="flex md:hidden relative z-[101]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 -mr-2 text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  // Close Icon (X)
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer - FIXED AND RELIABLE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[105] bg-gray-900/40 backdrop-blur-sm md:hidden cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {/* White Slide-in Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[110] shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <span className="font-black text-2xl text-gray-900">Dev<span className="text-blue-600">Samp</span></span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 p-5 flex flex-col gap-2 mt-4">
                {['Home', 'Courses', 'About', 'Contact'].map((item) => (
                  <Link 
                    key={item} 
                    href={getHref(item)}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all flex items-center justify-between group cursor-pointer"
                  >
                    {item}
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>

              {/* Drawer Footer (Auth) */}
              <div className="p-5 border-t border-gray-100 bg-gray-50 mt-auto">
                {!user ? (
                  <div className="flex flex-col gap-3">
                     <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-3.5 text-center text-gray-700 font-bold bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                        Login
                     </Link>
                     <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full py-3.5 text-center text-white font-bold bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md transition-colors cursor-pointer">
                        Get Started
                     </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-2 p-3 bg-white border border-gray-200 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-gray-900 font-bold truncate text-sm">{user.name}</p>
                        <p className="text-gray-500 text-xs truncate">{user.email}</p>
                      </div>
                    </div>
                    
                    <Link href={user.role === 'admin' ? "/admin/courses" : "/dashboard"} onClick={() => setIsOpen(false)} className="w-full py-3 text-center text-blue-700 font-bold bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                       {user.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
                    </Link>
                    
                    <button onClick={() => { logout(); setIsOpen(false); }} className="w-full py-3 text-center text-red-600 font-bold bg-red-50 rounded-xl hover:bg-red-100 transition-colors cursor-pointer">
                       Logout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}