import React, { useState } from 'react';
import { ExternalLink, Sparkles, FlaskConical, Clock, Copy, Check } from 'lucide-react';
import { AppItem } from '../types';
import { AppThumbnail } from './AppThumbnail';

interface AppCardProps {
  app: AppItem;
  priority?: boolean;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!app.url) return;
    navigator.clipboard.writeText(app.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Status configuration - polished light badges
  const getStatusBadge = () => {
    switch (app.status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live & Available
          </span>
        );
      case 'Prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 shadow-xs">
            <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
            Prototype
          </span>
        );
      case 'Coming Soon':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Coming Soon
          </span>
        );
    }
  };

  // Category Color Accent
  const getCategoryBadgeClass = (category: string) => {
    if (category.includes('Productivity')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (category.includes('E-commerce')) {
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
    if (category.includes('Writing')) {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    if (category.includes('Education')) {
      return 'bg-sky-50 text-sky-700 border-sky-200';
    }
    if (category.includes('Creative')) {
      return 'bg-purple-50 text-purple-700 border-purple-200';
    }
    if (category.includes('AI')) {
      return 'bg-violet-50 text-violet-700 border-violet-200';
    }
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const isComingSoon = app.status === 'Coming Soon' || !app.url;

  return (
    <div 
      id={`app-card-${app.id}`}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-indigo-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 overflow-hidden"
    >
      {/* Featured Ribbon */}
      {app.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 text-amber-800 text-xs font-semibold shadow-xs">
          <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400/40" />
          Featured
        </div>
      )}

      {/* Copy Link quick action (top right) */}
      {app.url && (
        <button
          type="button"
          onClick={handleCopyLink}
          title="Copy external app link"
          className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-white/90 hover:bg-white border border-slate-200/90 text-slate-500 hover:text-slate-900 shadow-xs backdrop-blur-md transition-colors"
          aria-label={`Copy link for ${app.name}`}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      )}

      {/* Top Section: Visual Thumbnail */}
      <div className="relative overflow-hidden bg-slate-50">
        <AppThumbnail thumbnailKey={app.thumbnail} name={app.name} category={app.category} />
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Badges Bar (Category & Type only, zero tool/platform tags) */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {/* Category badge */}
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(app.category)}`}>
              {app.category}
            </span>

            {/* Type badge */}
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/80">
              {app.type}
            </span>
          </div>

          {/* App Name */}
          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
            {app.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {app.description}
          </p>

          {/* Tags if available */}
          {app.tags && app.tags.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {app.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/70">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Area: Status & Direct Action Button */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center">
            {getStatusBadge()}
          </div>

          {/* Action Button */}
          {isComingSoon ? (
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed uppercase tracking-wider"
            >
              <Clock className="w-3.5 h-3.5" />
              {app.buttonText || 'COMING SOON'}
            </button>
          ) : (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                app.status === 'Prototype'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-sm shadow-amber-500/20 hover:shadow-md hover:shadow-amber-500/30'
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30'
              }`}
            >
              <span>{app.buttonText}</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
