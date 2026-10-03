# National Sahityotsav 2026 — Public Portal

> **National Sahityotsav 2026** — India's apex student literary, educational, and cultural festival held on **2–4 October 2026 in Chennai, Tamil Nadu**.

This repository contains the production-ready public homepage frontend built with **React 18, TypeScript, Tailwind CSS, and Lucide Icons**. It delivers a regal, culturally resonant, modern aesthetic designed for national scale.

---

## 🏛️ Sections Built

1. **Header & Sticky Navigation**
   - Festival Crest Logo & Brand Identity
   - Navigation links: Home, About, Events, Schedule, Results, Theme, Gallery, News, Contact
   - "Student Login" button for delegate & institutional authentication
   - Responsive mobile drawer with hamburger toggle & instant live results button
   - Sticky scroll glassmorphism with elevation

2. **Hero Section**
   - Header: `NATIONAL SAHITYOTSAV 2026`
   - Tagline: *"Celebrating the timeless continuum of literature, inspiring boundless creativity, cultivating deep knowledge, and honouring the zenith of cultural excellence."*
   - Event coordinates: `2–4 October 2026 • Chennai, Tamil Nadu`
   - Primary CTA buttons: `Explore Festival` & `View Results`
   - Live Countdown ticker to October 2, 2026
   - Dynamic canvas golden dust / ember particle system

3. **Festival Introduction ("About the Festival")**
   - Mission statement: *"National Sahityotsav is a large-scale literary, educational and cultural festival bringing students and institutions together through competitions, knowledge, creativity and cultural activities."*
   - 3 Foundation Pillars: Multilingual Literary Heritage, Creative & Cultural Synergy, Ethical & Scientific Inquiry
   - "Learn More" modal detailing the non-commercial merit charter and background
   - Authentic visual framing with Indian cultural photography and quote plaque

4. **Festival Statistics (Animated Counters)**
   - Dynamic animated count-up cards on scroll:
     - **28** States
     - **450+** Districts
     - **3,200+** Institutions
     - **85,000+** Participants
     - **120+** Events
     - **15,000+** Families
   - Decoupled into `festivalService.getStats()` ready for real-time Firebase Firestore aggregate sync

5. **Festival Theme: "EUDAEMONIC EQUATIONS"**
   - Philosophical, artistic, and modern technological synthesis
   - Interactive thematic pillars:
     1. *Eudaemonia (Human Flourishing)*
     2. *Equations (Harmonic Order & Scientific Rigor)*
     3. *The Contemporary Synthesis (Ethics in the Machine Era)*
   - Sacred geometry and wave equilibrium visual cues

6. **Festival Journey (Competition Timeline)**
   - Visual 7-Tier Pyramid of Meritocracy:
     `Family ↓ Unit ↓ Sector ↓ Division ↓ District ↓ State ↓ National`
   - Desktop horizontal interactive stepper with active indicator
   - Mobile-first responsive card navigation with stage descriptions and scale metrics

7. **Explore Events Section**
   - Category filtering: `All`, `Literary`, `Language`, `Knowledge`, `Cultural`, `Creative`
   - Real-time search filter by title, description, language, or age category
   - Event Cards containing: Name, Category badge, Language, Format/Type, Age Category, Stage Venue, Flagship indicator
   - "View Details" interactive modal featuring competition syllabus, rules, duration, and reporting instructions

8. **Programme Schedule Preview**
   - Day switcher (`Day 1: Oct 02`, `Day 2: Oct 03`, `Day 3: Oct 04`)
   - Cards showing: Event, Date, Time, Venue, Stage, and "Happening Now" / "Upcoming" status
   - "View Full Schedule" master 3-day grid modal

9. **Results & Leaderboard**
   - **Participant Search**: `[ Enter Participant ID ] [Search]` with instant lookup
   - Test IDs preconfigured: `NS-2026-4821`, `NS-2026-1042`, `NS-2026-3190`, `NS-2026-8819`
   - Adjudicated card with authenticated digital certificate preview modal
   - **State Leaderboard**: Table with medals (Gold, Silver, Bronze), ranks, and aggregate points
   - **National Results Highlights**: Grid of top laureates across universities

10. **Featured Voices & Distinguished Guests**
    - Cards containing: High-resolution portrait, Name, Designation, Role, and Inspiring Quote
    - Structured model ready for administrative CMS management

11. **Gallery Preview & Lightbox**
    - Categories: `All`, `Events`, `Cultural`, `Guests`, `Campus`, `Ceremonies`
    - High-definition cultural photography with hover interactions
    - Fullscreen Lightbox modal preview with descriptive captions

12. **News & Press Dispatches**
    - Cards with Thumbnail, Publication Date, Category, Title, Read time, and Synopsis
    - Interactive "Read Full Dispatch" modal for press releases

13. **Institutional Partners & Sponsors**
    - Clean tier grid: Title Sponsor, Knowledge Partner, Cultural Partner, Media Partner, Associate Partner
    - Decoupled data model for sponsor logo management

14. **Final Call-to-Action**
    - *"Experience the National Sahityotsav"*
    - Dual actions: `Explore Events` & `View Results`

15. **Footer**
    - Festival Emblem & Tagline
    - Quick navigation links
    - Contact Secretariat coordinates (Address, Toll-free helpline, Email)
    - Social Media connections
    - Privacy Policy and Terms & Conditions modals
    - Copyright 2026 Notice

---

## 🛠️ Project Structure

```
├── index.html                   # HTML entry point with Google Fonts (Cinzel, Plus Jakarta Sans)
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite bundler configuration
├── tailwind.config.js           # Royal Sahityotsav color palette & styling
├── src/
│   ├── types/
│   │   └── festival.ts          # Core TypeScript data schemas
│   ├── data/
│   │   └── festivalData.ts      # Comprehensive mock datasets
│   ├── services/
│   │   └── festivalService.ts   # Service abstraction layer (ready for Firebase)
│   ├── components/
│   │   ├── common/              # Header, Footer, Modals, SectionHeading, ParticleCanvas
│   │   ├── hero/                # HeroSection, Countdown
│   │   ├── about/               # AboutSection, Mission Modal
│   │   ├── stats/               # Animated StatsSection
│   │   ├── theme/               # Eudaemonic Equations Theme Section
│   │   ├── journey/             # 7-Tier Journey Timeline
│   │   ├── events/              # EventsSection, EventCard, EventDetailModal
│   │   ├── schedule/            # ScheduleSection, Schedule Modal
│   │   ├── results/             # ResultsSection, Participant Search, Leaderboard, Certificate Modal
│   │   ├── guests/              # GuestsSection
│   │   ├── gallery/             # GallerySection, LightboxModal
│   │   ├── news/                # NewsSection, NewsArticleModal
│   │   ├── sponsors/            # SponsorsSection
│   │   ├── cta/                 # CtaSection
│   │   └── auth/                # StudentLoginModal
│   ├── App.tsx                  # Root application combining all sections
│   ├── index.css                # Tailwind base & custom styles
│   └── main.tsx                 # React DOM mount
```

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

---

## 🔮 Future Firebase Integration Guide

The frontend is intentionally designed with a clean abstraction layer in `src/services/festivalService.ts` to allow 1-to-1 migration to Firebase without modifying any React components:

1. **Firebase Authentication (`src/components/auth/StudentLoginModal.tsx`)**:
   - Connect `signInWithEmailAndPassword` or custom token auth for Student IDs / Institution credentials.
2. **Firestore Database (`src/services/festivalService.ts`)**:
   - Replace `festivalService.getStats()` with `getDoc(doc(db, 'stats', 'aggregate'))`
   - Replace `festivalService.getEvents()` with `getDocs(collection(db, 'events'))`
   - Replace `festivalService.getSchedule()` with `getDocs(collection(db, 'schedule'))`
   - Replace `festivalService.searchParticipant()` with query `where('participantId', '==', query)`
3. **Firebase Storage**:
   - Media URLs for gallery, news thumbnails, and sponsor logos can be served directly from Firebase Storage buckets.
4. **Firebase Hosting**:
   - Run `firebase deploy --only hosting` to serve the `dist/` folder globally with SSL.
