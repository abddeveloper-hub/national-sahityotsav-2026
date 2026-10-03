import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { DistinguishedGuest } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Quote } from 'lucide-react';

export const GuestsSection: React.FC = () => {
  const [guests, setGuests] = useState<DistinguishedGuest[]>([]);
  const [loading, setLoading] = useState(true);

  // Dynamic fetch (structured for admin panel integration via Firestore)
  useEffect(() => {
    let mounted = true;
    festivalService.getGuests().then((data) => {
      if (mounted) {
        setGuests(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="guests" className="py-20 sm:py-28 relative bg-[#070A12] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Intellectual Patrons"
          title="Featured Voices &"
          highlightedTitle="Distinguished Guests"
          description="Eminent scholars, literary laureates, public intellectuals, and scientists presiding over the 2026 assemblies."
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-80 rounded-2xl bg-slate-900/50 border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guests.map((guest) => (
              <div
                key={guest.id}
                className="group rounded-2xl bg-[#0D1324]/85 border border-slate-800 hover:border-amber-500/40 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo with subtle gradient */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <img
                      src={guest.photoUrl}
                      alt={guest.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1324] via-transparent to-transparent opacity-90" />

                    {guest.socialBadge && (
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                        {guest.socialBadge}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {guest.name}
                    </h3>
                    <div className="text-xs font-medium text-amber-400/90 mt-0.5">
                      {guest.designation}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {guest.institutionOrRole}
                    </div>

                    {/* Short Message / Quote */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 relative">
                      <Quote className="w-4 h-4 text-amber-500/30 mb-1" />
                      <p className="text-xs text-slate-300 italic line-clamp-3 leading-relaxed">
                        "{guest.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Session footnote */}
                <div className="px-5 pb-5 pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 block truncate">{guest.sessionTitle}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
