import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { ParticleBackground } from './components/common/ParticleBackground';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { StatsSection } from './components/stats/StatsSection';
import { ThemeSection } from './components/theme/ThemeSection';
import { JourneySection } from './components/journey/JourneySection';
import { EventsSection } from './components/events/EventsSection';
import { ScheduleSection } from './components/schedule/ScheduleSection';
import { ResultsSection } from './components/results/ResultsSection';
import { GuestsSection } from './components/guests/GuestsSection';
import { GallerySection } from './components/gallery/GallerySection';
import { NewsSection } from './components/news/NewsSection';
import { SponsorsSection } from './components/sponsors/SponsorsSection';
import { CtaSection } from './components/cta/CtaSection';
import { Footer } from './components/common/Footer';
import { StudentLoginModal } from './components/auth/StudentLoginModal';
import { ContactModal } from './components/common/ContactModal';
import { PolicyModals } from './components/common/PolicyModals';

export const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleExplore = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewResults = () => {
    const el = document.getElementById('results');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 relative selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Dynamic Particle Canvas Animation (lightweight & high performance) */}
      <ParticleBackground />

      {/* 1. Header / Navigation */}
      <Header
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <main className="relative z-10">
        {/* 2. Hero Section */}
        <HeroSection
          onExplore={handleExplore}
          onViewResults={handleViewResults}
        />

        {/* 3. Festival Introduction */}
        <AboutSection />

        {/* 4. Festival Statistics */}
        <StatsSection />

        {/* 5. Festival Theme (Eudaemonic Equations) */}
        <ThemeSection />

        {/* 6. Festival Journey (Family -> Unit -> Sector -> Division -> District -> State -> National) */}
        <JourneySection />

        {/* 7. Events Section */}
        <EventsSection />

        {/* 8. Schedule Preview */}
        <ScheduleSection />

        {/* 9. Results & Leaderboard */}
        <ResultsSection />

        {/* 10. Featured Voices / Guests */}
        <GuestsSection />

        {/* 11. Gallery Preview */}
        <GallerySection />

        {/* 12. News & Updates */}
        <NewsSection />

        {/* 13. Sponsors / Partners */}
        <SponsorsSection />

        {/* 14. Final CTA */}
        <CtaSection
          onExplore={handleExplore}
          onViewResults={handleViewResults}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <StudentLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <PolicyModals
        privacyOpen={isPrivacyModalOpen}
        termsOpen={isTermsModalOpen}
        onClosePrivacy={() => setIsPrivacyModalOpen(false)}
        onCloseTerms={() => setIsTermsModalOpen(false)}
      />

    </div>
  );
};

export default App;
