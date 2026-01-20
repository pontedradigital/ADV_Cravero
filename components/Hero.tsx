import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { WHATSAPP_LINK, OAB_NUMBER } from '../constants';
import { smoothScrollTo } from '../utils/scrollUtils';
import { Shield, MessageCircle, CheckCircle2 } from 'lucide-react';

// --- Sub-component for Number Animation ---
// Added 'duration' prop to control finish time individually
const AnimatedCounter: React.FC<{ value: string; isVisible: boolean; duration?: number }> = ({ value, isVisible, duration = 5000 }) => {
  const [count, setCount] = useState(0);

  // Extract number and non-number parts (e.g., "500+" -> 500 and "+")
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Ease Out Expo function for a very premium, slow settling effect
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(easeOutExpo(percentage) * numericValue);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue); // Ensure it lands exactly on the final number
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth entry animation coordination
    setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-40 md:pt-32 pb-12 overflow-hidden bg-dark-900 selection:bg-gold-500 selection:text-white">

      {/* --- Dynamic Background --- */}
      {/* Noise Texture Overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Animated Gradient Orbs (Parallax Effect) */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-600/10 rounded-full blur-[120px] transition-transform duration-100 ease-out z-0"
        style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dark-800/50 rounded-full blur-[100px] transition-transform duration-300 ease-out z-0"
        style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

        {/* --- Left Column: Content --- */}
        <div className="lg:col-span-7 space-y-8 relative">

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 backdrop-blur-md transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Shield size={14} className="text-gold-500" />
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Excelência Jurídica</span>
          </div>

          {/* Headline - Typography Update */}
          <h1 className="font-serif text-white relative z-20">
            <span className={`block text-5xl md:text-7xl lg:text-[5.5rem] leading-none font-normal tracking-tight transition-all duration-1000 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Justiça e
            </span>
            <span className={`block text-6xl md:text-8xl lg:text-[7.5rem] leading-none italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200 pb-4 -mt-2 md:-mt-4 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Estratégia
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Soluções jurídicas sofisticadas e personalizadas para a proteção do seu patrimônio e garantias fundamentais com o rigor da tradição.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-5 pt-4 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group">
              <Button className="h-14 px-8 text-base shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] !border-none relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Consultoria
                  <MessageCircle size={18} className="transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                </span>
                {/* Shimmer Effect overlay */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </Button>
            </a>
            <a href="#atuacao" onClick={(e) => { e.preventDefault(); smoothScrollTo('#atuacao', 1000); }} className="group">
              <Button variant="outline" className="h-14 px-8 text-base !border-gray-700 !text-gray-300 hover:!border-gold-500 hover:!text-gold-400 hover:!bg-dark-800">
                <span className="relative">
                  Conhecer Áreas de Atuação
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[1px] bg-gold-400 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Button>
            </a>
          </div>

          {/* Trust Indicators / Stats - IMPROVED LAYOUT & ANIMATION */}
          <div className="pt-12 mt-8 border-t border-gold-500/20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: "Anos de Experiência", value: "10+", duration: 3500 },     // Ends first (3.5s)
              { label: "Causas Favoráveis", value: "98%", duration: 4500 },       // Ends second (4.5s)
              { label: "Clientes Atendidos", value: "500+", duration: 5500 }      // Ends last (5.5s)
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-start transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${800 + (i * 200)}ms` }} // Staggered delay for appearance
              >
                <span className="font-serif text-4xl lg:text-5xl text-gold-400 font-medium tabular-nums mb-2 leading-none">
                  <AnimatedCounter
                    value={stat.value}
                    isVisible={isLoaded}
                    duration={stat.duration}
                  />
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-bold flex items-center gap-2 border-l-2 border-gold-900 pl-3">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Column: Visual Motion --- */}
        <div className={`lg:col-span-5 relative hidden lg:block h-[600px] perspective-1000 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

          {/* Decorative Back Frame (Parallax Reverse) */}
          <div
            className="absolute top-10 right-0 w-[85%] h-[90%] border border-gold-500/30 rounded-2xl z-0 transition-transform duration-100 ease-out"
            style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}
          ></div>

          {/* Solid Backing Card */}
          <div className="absolute top-6 right-4 w-[85%] h-[90%] bg-dark-800 rounded-2xl z-10 shadow-2xl"></div>

          {/* Main Image (Floating Animation) */}
          <div
            className="absolute top-0 right-8 w-[85%] h-[90%] rounded-2xl overflow-hidden z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent z-10"></div>
            <img
              src="/Hero.webp"
              alt="Dr. Caio Cravero Advogado"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
            />

            {/* Glassmorphism Card on Image */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg z-20">
              <p className="font-serif text-white text-xl">Dr. Caio Cravero</p>
              <div className="h-0.5 w-10 bg-gold-500 my-2"></div>
              <p className="text-gray-300 text-xs uppercase tracking-widest">Advogado • OAB/SP {OAB_NUMBER}</p>
            </div>
          </div>

          {/* Floating Element 2 (Golden Badge) */}
          <div className="absolute -bottom-4 -left-4 z-30 animate-[float_5s_ease-in-out_infinite_1s]">
            <div className="bg-dark-900 border border-gold-500/40 p-4 rounded-full shadow-2xl flex items-center justify-center w-24 h-24 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-[spin_10s_linear_infinite] opacity-30">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fill="#D4AF37" fontSize="14" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">
                    ADVOCACIA • REFERÊNCIA •
                  </textPath>
                </text>
              </svg>
              <Shield size={24} className="text-gold-500" />
            </div>
          </div>

        </div>
      </div>

      {/* Tailwind Custom Animations (Inline for simplicity in this context) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
};