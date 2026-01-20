import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = true
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium ${light ? 'text-white' : 'text-dark-900'} relative inline-block`}>
        {title}
        <span className={`block h-1 w-24 bg-gold-500 mt-4 ${centered ? 'mx-auto' : ''}`}></span>
      </h2>
    </div>
  );
};