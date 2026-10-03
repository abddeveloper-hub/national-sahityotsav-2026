import React, { useEffect, useState, useRef } from 'react';
import { FestivalStats } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Map, Landmark, School, Users, Trophy, HeartHandshake } from 'lucide-react';

interface StatItemProps {
  label: string;
  targetValue: number;
  suffix?: string;
  icon: React.ElementType;
  description: string;
}

const StatCounterCard: React.FC<StatItemProps> = ({
  label,
  targetValue,
  suffix = '+',
  icon: Icon,
  description
}) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000; // 2 seconds
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            // Ease out quad
            const progress = frame / totalFrames;
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.round(easeOutProgress * targetValue);

            setCount(currentVal);

            if (frame === totalFrames) {
              setCount(targetValue);
              clearInterval(timer);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div
      ref={cardRef}
      className="relative p-6 sm:p-7 rounded-2xl bg-[#0F1628]/80 border border-amber-500/20 hover:border-amber-500/50 backdrop-blur-md shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group overflow-hidden"
    >
      {/* Corner light reflection */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-3xl pointer-events-none group-hover:scale-125 transition-transform" />

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest bg-slate-900/60 px-2 py-1 rounded-md border border-slate-800">
          Verified
        </span>
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight flex items-baseline">
        <span className="gold-gradient-text">
          {count.toLocaleString()}
        </span>
        <span className="text-amber-400 text-2xl sm:text-3xl ml-1 font-sans">{suffix}</span>
      </div>

      <div className="mt-2 text-base font-semibold text-slate-200 tracking-wide">
        {label}
      </div>

      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const [stats, setStats] = useState<FestivalStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Dynamic loading from service (ready for Firebase/Firestore hookup)
  useEffect(() => {
    let mounted = true;
    festivalService.getStats().then((data) => {
      if (mounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 relative bg-[#070A12] border-y border-amber-500/15 overflow-hidden">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.7px,transparent_0.7px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 mb-3">
            <span>National Scale & Participation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            A Republic-Wide <span className="gold-gradient-text">Movement</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From grassroots family circles to the national podium, the festival brings together communities across linguistic and geographical frontiers.
          </p>
        </div>

        {loading || !stats ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 rounded-2xl bg-slate-900/60 border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
            <StatCounterCard
              label="States"
              targetValue={stats.states}
              suffix=""
              icon={Map}
              description="Pan-Indian state delegations participating"
            />
            <StatCounterCard
              label="Districts"
              targetValue={stats.districts}
              suffix="+"
              icon={Landmark}
              description="District champions advancing through selections"
            />
            <StatCounterCard
              label="Institutions"
              targetValue={stats.institutions}
              suffix="+"
              icon={School}
              description="Universities, colleges and secondary schools"
            />
            <StatCounterCard
              label="Participants"
              targetValue={stats.participants}
              suffix="+"
              icon={Users}
              description="Total students enrolled across all preliminary tiers"
            />
            <StatCounterCard
              label="Events"
              targetValue={stats.events}
              suffix="+"
              icon={Trophy}
              description="Diverse categories spanning arts & sciences"
            />
            <StatCounterCard
              label="Families"
              targetValue={stats.families}
              suffix="+"
              icon={HeartHandshake}
              description="Household reading & cultural units activated"
            />
          </div>
        )}

        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Real-time aggregate data synchronized with National Coordination Secretariat</span>
        </div>

      </div>
    </section>
  );
};
