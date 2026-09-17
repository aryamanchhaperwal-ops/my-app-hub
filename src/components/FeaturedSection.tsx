import React from 'react';
import { Sparkles } from 'lucide-react';
import { AppItem } from '../types';
import { AppCard } from './AppCard';

interface FeaturedSectionProps {
  apps: AppItem[];
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ apps }) => {
  // Automatically filter any app with featured: true
  const featuredApps = apps.filter((app) => app.featured);

  if (featuredApps.length === 0) return null;

  return (
    <section id="featured" className="py-16 md:py-24 relative border-t border-slate-200/80 bg-slate-50/40">
      {/* Subtle Warm Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Spotlight Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              FEATURED APPS
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Curated highlights showcasing production-ready experiences, innovative workflows, and interactive concepts.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-slate-500 font-mono">
            <span>{featuredApps.length} Projects Highlighted</span>
          </div>
        </div>

        {/* Featured Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} priority />
          ))}
        </div>
      </div>
    </section>
  );
};
