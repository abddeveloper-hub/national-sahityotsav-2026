import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { GalleryItem } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Modal } from '../common/Modal';
import { Maximize2, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Events', 'Cultural', 'Guests', 'Campus', 'Ceremonies'];

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    festivalService.getGallery(selectedCategory).then((data) => {
      if (mounted) {
        setItems(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-[#070A12] border-t border-amber-500/15 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Visual Archive"
          title="Moments of"
          highlightedTitle="Sahityotsav"
          description="Visual glimpses capturing the intensity, passion, elegance, and camraderie of the national gatherings."
        />

        {/* Category Filter Chips */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-slate-900/50 border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400/40 shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    {item.category}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Title & Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all duration-200"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>View Full Festival Gallery Archive</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeLightbox}
        onClose={() => setActiveLightbox(null)}
        title={activeLightbox?.title}
        subtitle={`${activeLightbox?.category} • National Sahityotsav 2026 Archive`}
        maxWidth="3xl"
      >
        {activeLightbox && (
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden bg-black max-h-[60vh] flex items-center justify-center">
              <img
                src={activeLightbox.imageUrl}
                alt={activeLightbox.title}
                className="w-full h-auto max-h-[58vh] object-contain"
              />
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              {activeLightbox.caption}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
