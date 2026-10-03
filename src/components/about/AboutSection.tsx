import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Modal } from '../common/Modal';
import { BookOpen, Feather, Sparkles, Compass, Users2, ShieldCheck, ChevronRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  const pillars = [
    {
      icon: BookOpen,
      title: 'Multilingual Literary Heritage',
      description: 'Celebrating classical and modern languages of India through debates, poetry symposia, calligraphy, and critical literary scholarship.'
    },
    {
      icon: Feather,
      title: 'Creative & Cultural Synergy',
      description: 'Providing a national stage for dramatic arts, mystical choral music, theatrical sketches, and visual storytelling.'
    },
    {
      icon: Compass,
      title: 'Ethical & Scientific Inquiry',
      description: 'Challenging emerging thinkers through philosophy colloquiums, live quizzes, and debates on the intersection of human ethics and technology.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#070A12] via-[#0B101D] to-[#070A12]">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Genesis & Purpose"
          title="About the"
          highlightedTitle="Festival"
          description="A sacred confluence where youthful idealism meets centuries of literary conscience, elevating the collective spirit of India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1424]/90 border border-amber-500/20 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>The National Confluence</span>
              </div>

              <p className="text-lg sm:text-xl text-slate-100 font-serif leading-relaxed">
                National Sahityotsav is a large-scale literary, educational and cultural festival bringing students and institutions together through competitions, knowledge, creativity and cultural activities.
              </p>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Conceived as a nationwide movement that originates inside living rooms through family reading leagues and extends through school, college, sector, divisional, and state tiers, Sahityotsav culminates in this three-day apex summit in Chennai. Over 85,000 students across 28 states have participated in the multi-tier selection process.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Non-Commercial & Merit-Driven</div>
                    <div className="text-xs text-slate-400">Evaluated by state academies & literary juries</div>
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setLearnMoreOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Three Foundation Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-xl bg-[#0F1628]/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Visual Element Column: Artistic Cultural Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame with Indian Architectural Motifs */}
              <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-amber-500/40 via-amber-700/20 to-rose-900/40 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                    alt="National Sahityotsav Ceremony and Intellectual Gathering"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-80" />

                  {/* Floating Festival Quote Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080B14]/90 backdrop-blur-md border border-amber-500/30">
                    <p className="text-xs italic text-amber-200 font-serif">
                      "Words carry the torch of civilizations; students are its rightful torchbearers."
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-amber-400">Festival Charter 2026</span>
                      <span>Chennai Assembly</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 p-4 rounded-2xl shadow-xl shadow-amber-500/20 border-2 border-[#070A12] flex items-center gap-3">
                <Users2 className="w-6 h-6 shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">Reach</div>
                  <div className="text-xl font-bold font-serif leading-none">85,000+</div>
                  <div className="text-[10px] font-medium text-slate-900">Youth Aspirants</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Learn More Modal Dialog */}
      <Modal
        isOpen={learnMoreOpen}
        onClose={() => setLearnMoreOpen(false)}
        title="The Vision of National Sahityotsav"
        subtitle="Bridging Heritage, Youth Imagination, and Intellectual Integrity"
        maxWidth="3xl"
      >
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Established as an all-inclusive national platform, <strong className="text-amber-300">National Sahityotsav</strong> stands apart from typical competitive fests. Its core philosophy recognizes that cultural and intellectual awakening must begin not in isolated arenas, but organically in homes, neighborhood institutions, and regional communities.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <h4 className="font-serif font-bold text-amber-300 mb-1">Our Core Mission:</h4>
            <p className="text-xs sm:text-sm text-slate-200">
              "To kindle literary sensitivity, encourage critical thought free from dogmatism, promote multilingual solidarity, and prepare the youth to be ethical leaders of tomorrow."
            </p>
          </div>
          <h4 className="text-white font-serif font-bold text-lg pt-2">The Multi-Tiered Merit Structure:</h4>
          <p>
            Unlike open invitation contests, every finalist competing at the National Grand Festival in Chennai has proven their mettle through six rigorous preparatory tiers: Family reading circles, Unit institutional contests, Sector clusters, Divisional meets, District championships, and State festivals.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold font-serif text-lg">28</div>
              <div className="text-[11px] text-slate-400">States Represented</div>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold font-serif text-lg">120+</div>
              <div className="text-[11px] text-slate-400">Competitive Events</div>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold font-serif text-lg">100%</div>
              <div className="text-[11px] text-slate-400">Transparent Scoring</div>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold font-serif text-lg">3 Days</div>
              <div className="text-[11px] text-slate-400">Epic Cultural Immersion</div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
