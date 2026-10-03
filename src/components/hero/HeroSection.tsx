import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, ChevronDown, Compass, Award, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onViewResults: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onViewResults }) => {
  // Countdown to festival (2 October 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-02T08:30:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else {
        // Event is in progress or completed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Art: Radial festival glow & layered Indian geometric motifs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glowing aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[800px] h-[340px] sm:h-[600px] md:h-[800px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-sky-600/5 rounded-full blur-[90px] sm:blur-[130px] opacity-75" />
        
        {/* Subtle rotating sacred geometric / mandala watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] md:w-[950px] h-[500px] sm:h-[750px] md:h-[950px] opacity-[0.06] animate-spin-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full text-amber-300 stroke-current" fill="none" strokeWidth="1">
            <circle cx="250" cy="250" r="230" strokeDasharray="4 6" />
            <circle cx="250" cy="250" r="190" />
            <circle cx="250" cy="250" r="140" strokeDasharray="8 8" />
            <circle cx="250" cy="250" r="80" />
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              return (
                <g key={i} transform={`rotate(${angle} 250 250)`}>
                  <path d="M250 20 L260 80 L250 110 L240 80 Z" fill="currentColor" fillOpacity="0.1" />
                  <line x1="250" y1="140" x2="250" y2="230" strokeOpacity="0.4" />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Ambient corner glows */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl" />
        
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Prestigious badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 backdrop-blur-md shadow-md shadow-amber-950/20 animate-in fade-in duration-500">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>India’s Apex Student Literary & Cultural Confluence</span>
        </div>

        {/* Festival Name / Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-[1.08] sm:leading-[1.1]">
          <span className="block text-slate-200 text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-widest text-amber-200/90 mb-1 sm:mb-2">
            NATIONAL
          </span>
          <span className="gold-gradient-text drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
            SAHITYOTSAV
          </span>
          <span className="block text-xl sm:text-3xl md:text-4xl font-sans font-light tracking-[0.25em] text-slate-300 mt-2 sm:mt-3">
            2026
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
          Celebrating the timeless continuum of <span className="text-amber-300 font-medium">literature</span>, inspiring boundless <span className="text-amber-300 font-medium">creativity</span>, cultivating deep <span className="text-amber-300 font-medium">knowledge</span>, and honouring the zenith of <span className="text-amber-300 font-medium">cultural excellence</span>.
        </p>

        {/* Date & Venue Bar */}
        <div className="mt-8 sm:mt-10 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 sm:px-8 py-3.5 rounded-2xl bg-[#0F1628]/85 border border-amber-500/25 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2.5 text-slate-200 text-sm sm:text-base font-medium">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            <span>2–4 October 2026</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-amber-500/30" />
          <div className="flex items-center gap-2.5 text-slate-200 text-sm sm:text-base font-medium">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0" />
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>

        {/* Two Main Call-to-Action Buttons */}
        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto sm:max-w-none">
          {/* Explore Festival */}
          <button
            onClick={onExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Compass className="w-5 h-5 text-slate-950" />
            <span>Explore Festival</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          {/* View Results */}
          <button
            onClick={onViewResults}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-slate-900/90 hover:bg-slate-800 border-2 border-amber-500/50 hover:border-amber-400 shadow-xl shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span>View Results</span>
          </button>
        </div>

        {/* Live Countdown Grid */}
        <div className="mt-12 sm:mt-14 max-w-xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-semibold">
            Festival Horizon
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0C1220]/90 border border-amber-500/20 rounded-xl p-2.5 sm:p-3 text-center shadow-lg"
              >
                <div className="text-xl sm:text-3xl font-serif font-bold text-amber-300">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-amber-300 transition-colors"
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold">Discover More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
