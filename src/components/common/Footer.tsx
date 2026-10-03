import { Mail, Phone, MapPin, Twitter, Instagram, Youtube, Facebook, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Results & Leaderboard', href: '#results' },
    { label: 'Theme (Eudaemonic Equations)', href: '#theme' },
    { label: 'Competition Journey', href: '#journey' },
    { label: 'Gallery Archive', href: '#gallery' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Partners & Patrons', href: '#sponsors' },
  ];

  return (
    <footer id="contact" className="relative bg-[#05070D] border-t border-amber-500/20 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Background fine elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Motto (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1.5px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-amber-400"
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
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                  National
                </span>
                <span className="text-lg font-serif font-bold text-white tracking-wide">
                  SAHITYOTSAV 2026
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier national platform celebrating literature, multilingual heritage, ethical inquiry, and cultural excellence among Indian students.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Central Campus Arena, Chennai, Tamil Nadu — 600001</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:secretariat@sahityotsav2026.org" className="hover:text-white transition-colors">
                  secretariat@sahityotsav2026.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Helpline: +91 44 2850 2026 (Toll-free 9 AM – 7 PM IST)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              {[
                { icon: Twitter, href: '#', label: 'Twitter / X' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column (Col 6-8) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-amber-300 transition-colors py-1 truncate"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Festival Support & Contact Trigger (Col 9-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-4">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have queries regarding delegate registration, campus transport, or event guidelines?
            </p>
            <button
              onClick={onOpenContact}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
            >
              Open Contact Helpdesk
            </button>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
              Host State: <span className="text-white font-medium">Tamil Nadu</span> • Venue: Chennai Central
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 National Sahityotsav Organization. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={onOpenPrivacy} className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-amber-300 transition-colors">
              Terms & Regulations
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-amber-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
