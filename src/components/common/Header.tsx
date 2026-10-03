import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, Phone, Award } from 'lucide-react';

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogin, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'about', 'events', 'schedule', 'results', 'theme', 'journey', 'gallery', 'news', 'sponsors'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Events', href: '#events', id: 'events' },
    { label: 'Schedule', href: '#schedule', id: 'schedule' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Theme', href: '#theme', id: 'theme' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'News', href: '#news', id: 'news' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A12]/92 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-black/50 py-2.5'
          : 'bg-gradient-to-b from-[#070A12]/90 via-[#070A12]/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Festival Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            {/* Festival Crest Logo */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent" />
                {/* Traditional Diya & Quill SVG Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2c.5 2 2.5 3.5 2.5 5.5A2.5 2.5 0 0 1 12 10a2.5 2.5 0 0 1-2.5-2.5C9.5 5.5 11.5 4 12 2z" fill="#D4AF37" />
                  <path d="M4 14c0 3.3 3.6 6 8 6s8-2.7 8-6H4z" fill="#AA771C" />
                  <path d="M12 20v2" />
                  <path d="M8 22h8" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-widest text-amber-400/90 font-semibold font-sans">
                  National
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-amber-400/80" />
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">2026</span>
              </div>
              <span className="text-base sm:text-lg md:text-xl font-serif font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                SAHITYOTSAV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Contact Button in Desktop Bar */}
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Live Results badge on desktop */}
            <a
              href="#results"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Results</span>
            </a>

            {/* Student Login Button */}
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-slate-900 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <LogIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              <span className="font-bold">Student Login</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/60 border border-slate-700/60 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E1A]/98 backdrop-blur-2xl border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-300 bg-amber-500/15 font-semibold border-l-2 border-amber-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/60 hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact Secretariat</span>
            </button>

            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Search Live Results</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
