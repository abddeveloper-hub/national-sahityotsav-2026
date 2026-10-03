import {
  FestivalStats,
  FestivalEvent,
  ScheduleItem,
  ParticipantResult,
  StateLeaderboardEntry,
  DistinguishedGuest,
  GalleryItem,
  NewsArticle,
  SponsorPartner,
  JourneyStage
} from '../types/festival';
import {
  INITIAL_FESTIVAL_STATS,
  FESTIVAL_JOURNEY_STAGES,
  SAMPLE_EVENTS,
  SAMPLE_SCHEDULE,
  STATE_LEADERBOARD,
  SAMPLE_PARTICIPANT_RESULTS,
  DISTINGUISHED_GUESTS,
  GALLERY_ITEMS,
  NEWS_ARTICLES,
  SPONSORS_PARTNERS
} from '../data/festivalData';

/**
 * festivalService:
 * Abstraction layer for fetching festival data.
 * Prepared for Firebase Firestore / Firebase Functions / REST API integration.
 * In production with Firebase, replace these in-memory promises with collection queries
 * e.g., getDocs(collection(db, 'events'))
 */
export const festivalService = {
  async getStats(): Promise<FestivalStats> {
    // Simulates dynamic data fetch (e.g., from Firestore document 'stats/overview')
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...INITIAL_FESTIVAL_STATS }), 50);
    });
  },

  async getJourneyStages(): Promise<JourneyStage[]> {
    return Promise.resolve([...FESTIVAL_JOURNEY_STAGES]);
  },

  async getEvents(category?: string): Promise<FestivalEvent[]> {
    return new Promise((resolve) => {
      if (!category || category === 'All') {
        resolve([...SAMPLE_EVENTS]);
      } else {
        resolve(SAMPLE_EVENTS.filter((e) => e.category.toLowerCase() === category.toLowerCase()));
      }
    });
  },

  async getSchedule(day?: string): Promise<ScheduleItem[]> {
    return new Promise((resolve) => {
      if (!day || day === 'All') {
        resolve([...SAMPLE_SCHEDULE]);
      } else {
        resolve(SAMPLE_SCHEDULE.filter((s) => s.day === day));
      }
    });
  },

  async getStateLeaderboard(): Promise<StateLeaderboardEntry[]> {
    return Promise.resolve([...STATE_LEADERBOARD]);
  },

  async searchParticipant(query: string): Promise<ParticipantResult | null> {
    return new Promise((resolve) => {
      const clean = query.trim().toUpperCase();
      if (!clean) {
        resolve(null);
        return;
      }
      const match = SAMPLE_PARTICIPANT_RESULTS.find(
        (p) =>
          p.id.toUpperCase() === clean ||
          p.participantName.toUpperCase().includes(clean) ||
          p.certificateId.toUpperCase().includes(clean)
      );
      resolve(match || null);
    });
  },

  async getAllResults(): Promise<ParticipantResult[]> {
    return Promise.resolve([...SAMPLE_PARTICIPANT_RESULTS]);
  },

  async getGuests(): Promise<DistinguishedGuest[]> {
    return Promise.resolve([...DISTINGUISHED_GUESTS]);
  },

  async getGallery(category?: string): Promise<GalleryItem[]> {
    return new Promise((resolve) => {
      if (!category || category === 'All') {
        resolve([...GALLERY_ITEMS]);
      } else {
        resolve(GALLERY_ITEMS.filter((g) => g.category.toLowerCase() === category.toLowerCase()));
      }
    });
  },

  async getNews(): Promise<NewsArticle[]> {
    return Promise.resolve([...NEWS_ARTICLES]);
  },

  async getSponsors(): Promise<SponsorPartner[]> {
    return Promise.resolve([...SPONSORS_PARTNERS]);
  }
};
