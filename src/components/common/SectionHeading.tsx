import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedTitle,
  description,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
        {title}{' '}
        {highlightedTitle && (
          <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.25)]">
            {highlightedTitle}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-amber-500" />
        <div className="w-2 h-2 rotate-45 bg-amber-400" />
        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-amber-500" />
      </div>
    </div>
  );
};
