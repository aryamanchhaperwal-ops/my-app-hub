import React from 'react';
import { Info, Sparkles, Compass, Lightbulb, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/80 bg-slate-50/50">
      {/* Background Ambience / Subtle colorful glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-tr from-indigo-200/30 via-blue-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          {/* Subtle Corner Accent Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-100/60 via-cyan-50/40 to-transparent pointer-events-none rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-50/50 to-transparent pointer-events-none rounded-bl-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-6">
            <Info className="w-3.5 h-3.5 text-indigo-600" />
            <span>Behind The Portfolio</span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase mb-6">
            ABOUT
          </h2>

          {/* Exact Required Statement */}
          <blockquote className="border-l-4 border-indigo-600 pl-5 my-6 text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic bg-slate-50 py-4 pr-6 rounded-r-2xl border-y border-r border-slate-200/60">
            "This is my personal collection of apps, prototypes, experiments and digital projects. Each project is built for a different purpose and hosted on its respective platform."
          </blockquote>

          {/* About Aryaman's Apps, Purpose, and Portfolio */}
          <div className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
              Driven by curiosity and a passion for practical problem-solving, this hub brings together a diverse spectrum of software — from daily habit trackers and student academic workspaces to immersive music-learning tools, digital journaling environments, and experimental intelligence concepts.
            </p>
            <p>
              Each project is designed as an interactive exploration into intuitive user experiences, responsive layouts, and genuine utility. As a central launcher, <strong>Aryaman's App Hub</strong> connects you directly to the live deployments on their native hosts, allowing each app to run in its optimal environment while keeping everything accessible in one cohesive showcase.
            </p>
          </div>

          {/* Portfolio Highlights: Focus on Projects & Purpose */}
          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-indigo-200 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Purpose-Driven Apps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focused on solving everyday challenges across productivity, writing, learning, and commerce.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-teal-200 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Creative Prototypes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hands-on experimental tools testing new paradigms in audio cadence, virtual companions, and urban design.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-200 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Continuous Evolution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                An active laboratory where new ideas, functional releases, and prototypes are consistently added.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
