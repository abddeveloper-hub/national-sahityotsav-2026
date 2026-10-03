export type EventCategory = 
  | 'All' 
  | 'Literary' 
  | 'Language' 
  | 'Knowledge' 
  | 'Cultural' 
  | 'Creative';

export interface FestivalStats {
  states: number;
  districts: number;
  institutions: number;
  participants: number;
  events: number;
  families: number;
  lastUpdated?: string;
}

export interface FestivalEvent {
  id: string;
  name: string;
  category: 'Literary' | 'Language' | 'Knowledge' | 'Cultural' | 'Creative';
  language: string; // e.g., 'English', 'Tamil', 'Hindi', 'Malayalam', 'Multi-Lingual'
  ageCategory: string; // e.g., 'Junior (Under 15)', 'Senior (15-18)', 'Campus / Open'
  eventType: 'Individual' | 'Group' | 'Team Debate' | 'Stage Performance';
  description: string;
  rules: string[];
  durationMinutes: number;
  venueStage: string;
  scheduleTime: string;
  maxParticipantsPerUnit?: number;
  iconName?: string;
  featured?: boolean;
}

export interface ScheduleItem {
  id: string;
  eventId?: string;
  eventName: string;
  category: string;
  day: 'Day 1' | 'Day 2' | 'Day 3';
  date: string; // '2026-10-02'
  displayDate: string; // 'Oct 02, 2026'
  time: string; // '09:30 AM - 11:30 AM'
  venue: string; // 'Thiruvalluvar Main Auditorium'
  stage: string; // 'Stage 1 (Kurinji)'
  status: 'Upcoming' | 'Live Now' | 'Completed';
}

export interface ParticipantResult {
  id: string; // e.g., 'NS-2026-4821'
  participantName: string;
  institution: string;
  state: string;
  district: string;
  eventName: string;
  category: string;
  position: '1st Place (Gold)' | '2nd Place (Silver)' | '3rd Place (Bronze)' | 'A Grade (Distinction)' | 'Qualified' | 'Participant';
  points: number;
  publishedAt: string;
  certificateId: string;
  avatarUrl?: string;
}

export interface StateLeaderboardEntry {
  rank: number;
  state: string;
  zone: string;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
  totalPoints: number;
  code: string;
}

export interface DistinguishedGuest {
  id: string;
  name: string;
  designation: string;
  institutionOrRole: string;
  quote: string;
  sessionTitle: string;
  photoUrl: string;
  socialBadge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Cultural' | 'Guests' | 'Campus' | 'Ceremonies';
  imageUrl: string;
  thumbnailUrl?: string;
  caption: string;
  year?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  displayDate: string;
  summary: string;
  content: string[];
  thumbnailUrl: string;
  readTime: string;
  author: string;
}

export interface SponsorPartner {
  id: string;
  name: string;
  tier: 'Title Sponsor' | 'Cultural Partner' | 'Knowledge Partner' | 'Media Partner' | 'Associate Partner';
  logoUrl: string;
  websiteUrl: string;
  description?: string;
}

export interface JourneyStage {
  step: number;
  name: string;
  title: string;
  scope: string;
  description: string;
  participantsCount: string;
  icon: string;
}
