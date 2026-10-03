import React from 'react';
import { FestivalEvent } from '../../types/festival';
import { Globe, Users, MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface EventCardProps {
  event: FestivalEvent;
  onViewDetails: (event: FestivalEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Literary': return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Language': return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Knowledge': return 'bg-sky-500/10 text-sky-300 border-sky-500/30';
      case 'Cultural': return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      case 'Creative': return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      default: return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
    }
  };

  return (
    <div className="group relative rounded-2xl p-6 bg-[#0E1528]/85 border border-slate-800 hover:border-amber-500/40 backdrop-blur-md shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover:via-amber-400 transition-colors" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          {event.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Flagship</span>
            </span>
          )}
        </div>

        {/* Event Name */}
        <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
          {event.name}
        </h3>

        {/* Short Synopsis */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Key Attributes Grid */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 truncate">
            <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{event.language}</span>
          </div>

          <div className="flex items-center gap-1.5 truncate">
            <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">{event.eventType}</span>
          </div>

          <div className="flex items-center gap-1.5 truncate col-span-2">
            <span className="text-slate-500 font-medium">Age:</span>
            <span className="truncate text-slate-300">{event.ageCategory}</span>
          </div>
        </div>
      </div>

      {/* Footer with Stage and View Details Button */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 truncate">
          <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span className="truncate">{event.venueStage}</span>
        </div>

        <button
          onClick={() => onViewDetails(event)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 transition-all duration-200 group-hover:bg-amber-400 group-hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
