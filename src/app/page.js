import HeroSection from "../components/homepage/HeroSection";
import Features from "../components/homepage/Features";
import CoursesSection from "../components/homepage/CoursesSection";
import AboutSection from "../components/homepage/AboutSection";
import StudentReviews from "../components/homepage/StudentReviews";
import ContactSection from "../components/homepage/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-800 overflow-hidden bg-[#f8fafc]">
      
      {/* --- UNIQUE ANIMATED BACKGROUND (Mesh Gradient) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-300/40 rounded-full blur-[120px] mix-blend-multiply animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-300/40 rounded-full blur-[120px] mix-blend-multiply animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-fuchsia-300/30 rounded-full blur-[120px] mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite]"></div>
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Main Content (Glassmorphism effect in child components will overlay on this) */}
      <div className="relative z-10">
        <HeroSection />
        <Features />
        <CoursesSection />
        <AboutSection />
        <StudentReviews />
        <ContactSection /> 
      </div>
    </main>
  );
}