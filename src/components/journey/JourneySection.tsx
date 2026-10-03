import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { FESTIVAL_JOURNEY_STAGES } from '../../data/festivalData';
import { JourneyStage } from '../../types/festival';
import { Users, School, Network, Layers, MapPin, Award, Crown, CheckCircle2, ChevronRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<JourneyStage>(FESTIVAL_JOURNEY_STAGES[6]); // default to National

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return Users;
      case 'School': return School;
      case 'Network': return Network;
      case 'Layers': return Layers;
      case 'MapPin': return MapPin;
      case 'Award': return Award;
      case 'Crown': return Crown;
      default: return Award;
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 relative bg-[#070A12] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Seven-Tier Progression"
          title="The Competition"
          highlightedTitle="Journey"
          description="A pyramid of meritocracy designed to discover talent from every corner of India, moving systematically through seven competitive tiers."
        />

        {/* Desktop Horizontal Stepper Bar */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Horizontal Line connecting nodes */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-amber-500/20 via-amber-500 to-amber-300 z-0" />

            {FESTIVAL_JOURNEY_STAGES.map((stage) => {
              const Icon = getIcon(stage.icon);
              const isSelected = selectedStage.step === stage.step;
              const isApex = stage.step === 7;

              return (
                <button
                  key={stage.step}
                  onClick={() => setSelectedStage(stage)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  {/* Step Node */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? isApex
                          ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-400/40 scale-110 border-2 border-white'
                          : 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/30 scale-110 border-2 border-amber-300'
                        : 'bg-[#0E1526] text-amber-300/80 border border-amber-500/30 hover:border-amber-400 hover:text-white hover:scale-105'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Label */}
                  <div className="mt-3 text-center">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                      Tier 0{stage.step}
                    </div>
                    <div
                      className={`text-sm font-serif font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {stage.name}
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  {isSelected && (
                    <div className="w-2 h-2 rotate-45 bg-amber-400 mt-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0F162A] to-[#0A0E1A] border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                {React.createElement(getIcon(selectedStage.icon), { className: 'w-8 h-8' })}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    Tier {selectedStage.step} of 7
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{selectedStage.scope}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {selectedStage.title}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 self-start md:self-auto">
              <Users className="w-4 h-4 text-amber-400" />
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Stage Magnitude</div>
                <div className="text-sm font-bold text-amber-300">{selectedStage.participantsCount}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
                {selectedStage.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Standardized Evaluation Rubric</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct Advancement to Next Higher Tier</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl bg-[#090D18] border border-slate-800/80">
              <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-2">
                Advancement Progression
              </div>
              <div className="text-sm text-slate-300">
                {selectedStage.step < 7 ? (
                  <span>
                    Top qualifiers at this tier advance directly to{' '}
                    <strong className="text-white font-medium">
                      Tier 0{selectedStage.step + 1}: {FESTIVAL_JOURNEY_STAGES[selectedStage.step].name}
                    </strong>
                    .
                  </span>
                ) : (
                  <span className="text-amber-300 font-medium">
                    National Grand Champions receive National Sahityotsav Golden Laurels and Sahitya Rolling Trophy.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper View (Shown on screens < lg) */}
        <div className="lg:hidden mt-8 space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400 text-center mb-4">
            Tap Any Tier Below to Explore
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FESTIVAL_JOURNEY_STAGES.map((stg) => {
              const Icon = getIcon(stg.icon);
              const isSelected = selectedStage.step === stg.step;
              return (
                <button
                  key={stg.step}
                  onClick={() => setSelectedStage(stg)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg'
                      : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-amber-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-amber-400 font-bold uppercase">Tier 0{stg.step}</div>
                      <div className="text-sm font-semibold">{stg.name}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
