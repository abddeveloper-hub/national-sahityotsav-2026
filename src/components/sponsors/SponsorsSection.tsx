import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SponsorPartner } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { ShieldCheck } from 'lucide-react';

export const SponsorsSection: React.FC = () => {
  const [sponsors, setSponsors] = useState<SponsorPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    festivalService.getSponsors().then((data) => {
      if (mounted) {
        setSponsors(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="sponsors" className="py-20 sm:py-24 relative bg-[#090E1B] border-t border-amber-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Patrons & Collaborators"
          title="Institutional"
          highlightedTitle="Partners & Sponsors"
          description="Endorsed and supported by apex academies, cultural trusts, and educational patrons committed to nurturing youth excellence."
        />

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 animate-pulse">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-32 rounded-2xl bg-slate-900/50 border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {sponsors.map((sp) => (
              <div
                key={sp.id}
                className="group p-5 rounded-2xl bg-[#0D1424]/90 border border-slate-800 hover:border-amber-400/40 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center"
              >
                <div className="w-full flex items-center justify-between mb-3 text-[10px] uppercase font-bold tracking-wider text-amber-400/90">
                  <span className="truncate">{sp.tier}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                </div>

                {/* Logo Image */}
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-950/80 p-2 flex items-center justify-center border border-slate-800/80 group-hover:border-amber-500/30 transition-colors">
                  <img
                    src={sp.logoUrl}
                    alt={sp.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {sp.name}
                  </h4>
                  {sp.description && (
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {sp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center text-xs text-slate-400">
          Interested in partnering with the National Sahityotsav?{' '}
          <a href="#contact" className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4">
            Connect with our Secretariat
          </a>
        </div>

      </div>
    </section>
  );
};
