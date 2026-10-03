import React from 'react';
import { FestivalEvent } from '../../types/festival';
import { Modal } from '../common/Modal';
import { Clock, MapPin, Globe, Users, BookOpen, CheckSquare } from 'lucide-react';

interface EventDetailModalProps {
  event: FestivalEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={event.name}
      subtitle={`${event.category} Event • ${event.ageCategory}`}
      maxWidth="3xl"
    >
      <div className="space-y-6 text-slate-200">
        
        {/* Meta badges grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Language</span>
            </div>
            <div className="text-sm font-semibold text-white">{event.language}</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span>Format</span>
            </div>
            <div className="text-sm font-semibold text-white">{event.eventType}</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Duration</span>
            </div>
            <div className="text-sm font-semibold text-white">{event.durationMinutes} Minutes</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Stage / Venue</span>
            </div>
            <div className="text-xs font-semibold text-white truncate" title={event.venueStage}>
              {event.venueStage}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Event Synopsis & Objectives</span>
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#0A0E18] p-4 rounded-xl border border-slate-800">
            {event.description}
          </p>
        </div>

        {/* Competition Rules & Regulations */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <CheckSquare className="w-4 h-4" />
            <span>Regulations & Jury Guidelines</span>
          </h4>
          <div className="space-y-2.5">
            {event.rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  {idx + 1}
                </div>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule & Registration Notice */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase text-amber-300">Slot Scheduled</div>
            <div className="text-sm font-semibold text-white mt-0.5">{event.scheduleTime}</div>
          </div>
          <div className="text-xs text-slate-400">
            * Finalist entry passes verified via Student ID card on entry.
          </div>
        </div>

      </div>
    </Modal>
  );
};
