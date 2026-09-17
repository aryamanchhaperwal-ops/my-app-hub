import React from 'react';
import { ArrowDown, Sparkles, Layers, Rocket, Zap, Clock } from 'lucide-react';
import { AppItem } from '../types';

interface HeroSectionProps {
  apps: AppItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ apps }) => {
  // Automatically calculate statistics from app data
  const activeApps = apps.filter((a) => a.status === 'Available' || a.status === 'Prototype');
  const totalAppsCount = activeApps.length;
  const fullAppsCount = apps.filter((a) => a.type === 'Full App' && a.status === 'Available').length;
  const prototypeCount = apps.filter((a) => a.status === 'Prototype').length;

  const handleExploreClick = () => {
    const appsSection = document.querySelector('#apps');
    if (appsSection) {
      appsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeaturedClick = () => {
    const featuredSection = document.querySelector('#featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Ambience / Soft Colorful Light Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-blue-200/35 via-indigo-200/25 to-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[320px] bg-gradient-to-br from-violet-200/25 via-pink-100/20 to-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Digital Showcase Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-medium">
            Digital Projects & Experiments Showcase
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 uppercase max-w-4xl mx-auto">
          ARYAMAN'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">APP HUB</span>
        </h1>

        {/* Tagline / Required exact wording: "Apps, prototypes & digital projects I've built." */}
        <p className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-slate-800 max-w-2xl mx-auto">
          "Apps, prototypes & digital projects I've built."
        </p>

        {/* Sub-description focused purely on apps and purpose */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A centralized portfolio launching web applications, functional prototypes, and creative tools crafted for productivity, learning, e-commerce, and everyday digital utility.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleExploreClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>EXPLORE APPS</span>
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={handleFeaturedClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Featured Apps</span>
          </button>
        </div>

        {/* Automatically Calculated Statistics Bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1: Total Apps */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-2.5">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                {totalAppsCount}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Apps
              </span>
            </div>

            {/* Stat 2: Full Apps */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2.5">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                {fullAppsCount}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Full Apps
              </span>
            </div>

            {/* Stat 3: Prototypes */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-2.5">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                {prototypeCount}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Prototypes
              </span>
            </div>

            {/* Stat 4: Coming Soon */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                More
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
