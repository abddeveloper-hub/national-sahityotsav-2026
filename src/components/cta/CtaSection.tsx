import React from 'react';
import { Compass, Award, Sparkles, ArrowRight, Calendar, MapPin } from 'lucide-react';

interface CtaSectionProps {
  onExplore: () => void;
  onViewResults: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onExplore, onViewResults }) => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#070A12] overflow-hidden">
      {/* Background glow & decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-[#0F172C] via-[#0D1426] to-[#0A0F1E] border border-amber-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Join the Grandest Celebration of Mind & Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-tight uppercase">
            Experience the <br className="hidden sm:block" />
            <span className="gold-gradient-text drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
              National Sahityotsav
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-lg text-slate-300 font-light leading-relaxed">
            Witness 85,000 aspirants synthesize into 450 national finalists. Engage with the discourse, attend the symposia, and follow the live scoring.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>2–4 October 2026</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Compass className="w-5 h-5 text-slate-950" />
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={onViewResults}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800 border-2 border-amber-500/50 hover:border-amber-400 shadow-xl shadow-black/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span>View Results</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
