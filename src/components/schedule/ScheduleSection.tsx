import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ScheduleItem } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Modal } from '../common/Modal';
import { Calendar, Clock, MapPin, Radio, CalendarDays } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [selectedDay, setSelectedDay] = useState<'All' | 'Day 1' | 'Day 2' | 'Day 3'>('Day 1');
  const [fullScheduleModalOpen, setFullScheduleModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    festivalService.getSchedule(selectedDay === 'All' ? undefined : selectedDay).then((data) => {
      if (mounted) {
        setSchedule(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [selectedDay]);

  const daysList: { id: 'Day 1' | 'Day 2' | 'Day 3'; label: string; date: string }[] = [
    { id: 'Day 1', label: 'Day 01 (Inaugural)', date: 'Friday, Oct 02, 2026' },
    { id: 'Day 2', label: 'Day 02 (Championships)', date: 'Saturday, Oct 03, 2026' },
    { id: 'Day 3', label: 'Day 03 (Grand Finale)', date: 'Sunday, Oct 04, 2026' },
  ];

  return (
    <section id="schedule" className="py-20 sm:py-28 relative bg-[#090E1C] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Programme Roadmap"
          title="Programme"
          highlightedTitle="Schedule"
          description="Detailed timeline of championship events, keynotes, symposia, and evening cultural galas across the Chennai campus."
        />

        {/* Day Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
          {daysList.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDay(d.id)}
              className={`px-5 py-3 rounded-2xl text-left transition-all duration-200 border ${
                selectedDay === d.id
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/10 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
                {d.label}
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">{d.date}</div>
            </button>
          ))}
        </div>

        {/* Schedule List Cards */}
        {loading ? (
          <div className="space-y-4 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 rounded-2xl bg-slate-900/40 border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {schedule.map((item) => (
              <div
                key={item.id}
                className="group p-5 sm:p-6 rounded-2xl bg-[#0D1324]/85 border border-slate-800 hover:border-amber-500/40 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                    {item.status === 'Live Now' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
                        <Radio className="w-3 h-3 text-rose-400" />
                        <span>Happening Now</span>
                      </span>
                    )}
                    <span className="text-xs text-slate-400">• {item.stage}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.eventName}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.time}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                      <span>{item.displayDate}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{item.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="self-end md:self-center shrink-0">
                  <span className="text-xs text-amber-400/90 font-medium px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    Audience Permitted
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Schedule Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setFullScheduleModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <CalendarDays className="w-4 h-4 text-slate-950" />
            <span>View Full Schedule (3-Day Master Guide)</span>
          </button>
        </div>

      </div>

      {/* Full Schedule Modal */}
      <Modal
        isOpen={fullScheduleModalOpen}
        onClose={() => setFullScheduleModalOpen(false)}
        title="Complete 3-Day Festival Programme Master Schedule"
        subtitle="National Sahityotsav 2026 • Chennai Campus Master Grid"
        maxWidth="4xl"
      >
        <div className="space-y-6">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
            * Note for institutional delegations: Reporting time for all participants is strictly 45 minutes prior to listed stage slots.
          </div>

          <div className="divide-y divide-slate-800">
            {daysList.map((dayObj) => (
              <div key={dayObj.id} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center justify-between">
                  <span>{dayObj.label} ({dayObj.date})</span>
                </h4>
                <div className="space-y-2">
                  {schedule
                    .filter((s) => s.day === dayObj.id || dayObj.id === 'Day 1')
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                      >
                        <div>
                          <div className="font-semibold text-white">{item.eventName}</div>
                          <div className="text-slate-400 text-[11px] mt-0.5">{item.venue} ({item.stage})</div>
                        </div>
                        <div className="text-amber-300 font-mono shrink-0">{item.time}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};
