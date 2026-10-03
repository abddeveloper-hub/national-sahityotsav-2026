import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { NewsArticle } from '../../types/festival';
import { festivalService } from '../../services/festivalService';
import { Modal } from '../common/Modal';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    festivalService.getNews().then((data) => {
      if (mounted) {
        setArticles(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="news" className="py-20 sm:py-28 relative bg-[#070A12] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Press & Dispatches"
          title="News &"
          highlightedTitle="Updates"
          description="Official announcements, editorial commentaries, daily festival bulletins, and jury decisions."
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-80 rounded-2xl bg-slate-900/50 border border-slate-800" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl bg-[#0D1324]/85 border border-slate-800 hover:border-amber-500/40 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <img
                      src={article.thumbnailUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1324] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{article.displayDate}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-400 hover:text-slate-950 transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-amber-400 group-hover:text-slate-950"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </article>
            ))}
          </div>
        )}

        {/* View All News CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveArticle(articles[0] || null)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-300 bg-slate-900 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <Newspaper className="w-4 h-4 text-amber-400" />
            <span>View All Festival Press Releases</span>
          </button>
        </div>

      </div>

      {/* Full Article Modal */}
      <Modal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title}
        subtitle={`${activeArticle?.category} • ${activeArticle?.displayDate}`}
        maxWidth="3xl"
      >
        {activeArticle && (
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-slate-950">
              <img
                src={activeArticle.thumbnailUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
              <span className="font-semibold text-amber-300">By {activeArticle.author}</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <p className="text-base sm:text-lg font-serif italic text-amber-100/90 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
              {activeArticle.summary}
            </p>

            <div className="space-y-3 pt-2">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
