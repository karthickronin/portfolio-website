import { useEffect, useState } from "react";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Scroll effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    // Cursor movement effect
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-gray-800 font-sans antialiased selection:bg-pink-200 selection:text-pink-900">
      {/* Animated cursor spotlight */}
      <div 
        className="fixed w-64 h-64 rounded-full bg-pink-100/20 blur-3xl pointer-events-none z-0 transition-all duration-200"
        style={{ 
          left: `${cursorPosition.x - 128}px`, 
          top: `${cursorPosition.y - 128}px` 
        }}
      />
      
      {/* Extraordinary Gradient Background with Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-pink-50 to-white animate-gradient-slow">
          {/* Abstract geometric shapes */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute right-[10%] top-[5%] w-96 h-96 rounded-full border border-pink-300/30 rotate-12"></div>
            <div className="absolute left-[15%] top-[20%] w-72 h-72 rounded-full border border-pink-300/30 -rotate-6"></div>
            <div className="absolute right-[25%] bottom-[15%] w-64 h-64 rounded-full border border-pink-300/30 rotate-45"></div>
          </div>
          
          {/* Subtle pink grid overlay with parallax effect */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#fce7f3_1px,transparent_1px),linear-gradient(to_bottom,#fce7f3_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"
            style={{ transform: `translateY(${scrollPosition * 0.02}px)` }}
          ></div>

          {/* Central glowing pink radial light with parallax */}
          <div 
            className="absolute left-1/2 top-[-20%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_450px_at_center,rgba(252,231,243,0.9),transparent)] blur-2xl pointer-events-none"
            style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}
          ></div>
          
          {/* Additional pink accent blobs with parallax effect */}
          <div 
            className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-gradient-to-tr from-pink-200/40 to-pink-100/20 blur-3xl pointer-events-none"
            style={{ transform: `translate(${scrollPosition * 0.03}px, ${scrollPosition * -0.02}px)` }}
          ></div>
          <div 
            className="absolute left-[15%] bottom-[20%] h-96 w-96 rounded-full bg-gradient-to-br from-pink-100/40 to-pink-200/20 blur-3xl pointer-events-none"
            style={{ transform: `translate(${scrollPosition * -0.03}px, ${scrollPosition * 0.02}px)` }}
          ></div>
          
          {/* Subtle floating particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 rounded-full bg-pink-200/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Container with Extraordinary Glassmorphism */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-16">
        {/* Decorative elements around main container */}
        <div className="absolute top-0 left-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-300/20 to-pink-200/5 rounded-full blur-xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 bg-gradient-to-bl from-pink-300/20 to-pink-200/5 rounded-full blur-xl"></div>
        
        {/* Main container with advanced glassmorphism */}
        <div className="rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl shadow-pink-100/20 ring-1 ring-pink-100/60 p-6 sm:p-10 relative overflow-hidden transition-all duration-500">
          {/* Subtle gradient accent line at the top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/60 to-transparent"></div>
          
          <Navbar />
          <div className="mt-16 space-y-32">
            <Hero />
            <Technologies />
            <Projects />
            <Bio />
            <Education />
            <Contact />
            <Footer />
          </div>
          
          {/* Subtle gradient accent line at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/60 to-transparent"></div>
        </div>
      </div>
      
      {/* Global animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        
        @keyframes animate-gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: animate-gradient-slow 15s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;