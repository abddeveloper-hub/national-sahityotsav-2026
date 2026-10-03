import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, Atom, BookMarked, Cpu, ChevronRight } from 'lucide-react';

export const ThemeSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const themePillars = [
    {
      id: 0,
      title: 'Eudaemonia (Human Flourishing)',
      subtitle: 'The Moral & Aesthetic Conscience',
      icon: BookMarked,
      tag: 'Philosophical Core',
      description:
        'Rooted in Aristotle’s supreme virtue of human fulfillment and classical Indian concepts of Anandam and Dharma, eudaemonia calls for an existence where intellectual excellence and moral integrity walk hand-in-hand.',
      quote: '"Happiness is not passive pleasure, but purposeful activity in accordance with the highest virtue."'
    },
    {
      id: 1,
      title: 'Equations (Order & Rigor)',
      subtitle: 'The Geometry of Truth & Balance',
      icon: Atom,
      tag: 'Scientific Foundation',
      description:
        'Equations represent equilibrium, symmetry, and verifiable truth. Whether in poetic meter (Chhandas), musical pitch (Shruti), or modern mathematical algorithmics, equations seek harmonic resolution in apparent chaos.',
      quote: '"In every living rhythm, from cosmological physics to classical verse, balance is the divine constant."'
    },
    {
      id: 2,
      title: 'The Contemporary Synthesis',
      subtitle: 'Human Agency in the Machine Era',
      icon: Cpu,
      tag: 'Modern Imperative',
      description:
        'As synthetic intelligence accelerates, the defining question for the next generation is not merely what can be computed, but what must be nurtured in human empathy, civil debate, and cultural memory.',
      quote: '"The equation of tomorrow belongs to minds that can code with mathematical precision and feel with literary depth."'
    }
  ];

  return (
    <section id="theme" className="py-20 sm:py-32 relative bg-[#070B16] overflow-hidden">
      {/* Background futuristic & philosophical glowing elements */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-gradient-to-bl from-amber-500/10 via-teal-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-rose-500/10 via-amber-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      {/* Harmonic wave SVG vector backdrop */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 400" className="w-full h-full stroke-amber-400" fill="none" strokeWidth="0.75">
          <path d="M0,200 Q250,50 500,200 T1000,200" strokeDasharray="6 4" />
          <path d="M0,200 Q250,350 500,200 T1000,200" strokeDasharray="4 6" />
          <circle cx="500" cy="200" r="160" strokeDasharray="3 3" />
          <circle cx="500" cy="200" r="90" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Official Central Theme"
          title="The Festival Theme"
          highlightedTitle="2026"
          description="A daring synthesis of ancient philosophical virtue, literary discernment, and futuristic technological consciousness."
        />

        {/* Grand Theme Hero Display */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#0C1324] via-[#0E172C] to-[#0A0F1E] border border-amber-500/30 shadow-2xl overflow-hidden">
          
          {/* Subtle Golden Glow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-teal-400 to-rose-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Main Thematic Typography */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-950/60 border border-teal-500/30">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Thematic Thesis</span>
              </div>

              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-tight uppercase">
                <span className="block text-amber-200/90 drop-shadow-[0_2px_15px_rgba(212,175,55,0.3)]">
                  EUDAEMONIC
                </span>
                <span className="block gold-gradient-text">
                  EQUATIONS
                </span>
              </h3>

              <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
                In a fractured, hyper-accelerated epoch, <strong className="text-amber-300 font-semibold">Eudaemonic Equations</strong> proposes that genuine progress is not measured merely in technological compute or material velocity, but in the deliberate equilibrium of human flourishing, classical moral aesthetics, and scientific conscience.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#080D1A]/90 border border-slate-800">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  The Curatorial Premise
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic font-serif">
                  "Can the soul retain its lyricism while the intellect deciphers the universe? Sahityotsav 2026 invites our youth to solve this singular, beautiful equation."
                </p>
              </div>

              {/* Pillar Selector Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {themePillars.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(idx)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                      activePillar === idx
                        ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                        : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{p.title.split(' ')[0]}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>

            </div>

            {/* Right Interactive Philosophical Showcase Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl p-6 sm:p-8 bg-[#090E1B]/95 border border-amber-500/25 shadow-2xl backdrop-blur-xl">
                
                {/* Visual Icon Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    {React.createElement(themePillars[activePillar].icon, {
                      className: 'w-8 h-8 text-amber-400'
                    })}
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                        {themePillars[activePillar].tag}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        {themePillars[activePillar].title}
                      </h4>
                    </div>
                  </div>
                  <div className="text-2xl font-serif font-bold text-slate-700">
                    0{activePillar + 1}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {themePillars[activePillar].description}
                  </p>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-2 border-amber-400">
                    <p className="text-xs sm:text-sm italic font-serif text-amber-200/90">
                      {themePillars[activePillar].quote}
                    </p>
                  </div>
                </div>

                {/* Mathematical/Artistic Equilibrium Badges */}
                <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="text-xs font-bold text-amber-300">Ethics</div>
                    <div className="text-[10px] text-slate-400">Dharmic Rigor</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="text-xs font-bold text-teal-300">Aesthetics</div>
                    <div className="text-[10px] text-slate-400">Rasa & Chhandas</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="text-xs font-bold text-rose-300">Intellect</div>
                    <div className="text-[10px] text-slate-400">Scientific Logic</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
