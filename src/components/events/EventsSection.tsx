import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { EventCard } from './EventCard';
import { EventDetailModal } from './EventDetailModal';
import { FestivalEvent, EventCategory } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Search, Sparkles, BookOpen } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<FestivalEvent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<FestivalEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories: EventCategory[] = [
    'All',
    'Literary',
    'Language',
    'Knowledge',
    'Cultural',
    'Creative'
  ];

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    festivalService.getEvents(selectedCategory).then((data) => {
      if (mounted) {
        setEvents(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [selectedCategory]);

  const filteredEvents = events.filter((e) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      e.name.toLowerCase().includes(query) ||
      e.description.toLowerCase().includes(query) ||
      e.language.toLowerCase().includes(query) ||
      e.category.toLowerCase().includes(query)
    );
  });

  const handleOpenDetails = (event: FestivalEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section id="events" className="py-20 sm:py-28 relative bg-[#070A12] overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-sky-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="National Arena"
          title="Explore"
          highlightedTitle="Festival Events"
          description="Over 120 championship events spanning classical verse, contemporary discourse, scientific logic, and dramatic arts."
        />

        {/* Filters and Search Bar Container */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event, language, or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>

        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-slate-900/50 border border-slate-800" />
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <BookOpen className="w-10 h-10 text-amber-400/60 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-white">No Events Found</h3>
            <p className="text-sm text-slate-400 mt-1">
              No matching competitions found for "{searchQuery}". Try selecting another category or clear your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} onViewDetails={handleOpenDetails} />
            ))}
          </div>
        )}

        {/* View All Events Action Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-slate-900/60 px-4 py-2 rounded-full border border-slate-800">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Showing sample flagship events • Over 120 national items curated for 2–4 October 2026</span>
          </div>
        </div>

      </div>

      {/* Event Details Modal */}
      <EventDetailModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
