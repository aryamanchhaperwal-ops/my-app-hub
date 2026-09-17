import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sparkles, LayoutGrid, AlertCircle, RefreshCw } from 'lucide-react';
import { AppItem, CategoryFilter, StatusFilter } from '../types';
import { AppCard } from './AppCard';

interface AppLibraryProps {
  apps: AppItem[];
}

const CATEGORIES: CategoryFilter[] = [
  'ALL',
  'AI',
  'PRODUCTIVITY',
  'EDUCATION',
  'WRITING',
  'E-COMMERCE',
  'CREATIVE',
  'OTHER',
];

const STATUSES: StatusFilter[] = [
  'ALL',
  'AVAILABLE',
  'PROTOTYPES',
  'COMING SOON',
];

export const AppLibrary: React.FC<AppLibraryProps> = ({ apps }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>('ALL');

  // Filter logic
  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      // 1. Search filter (focuses on name, description, tags)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = app.name.toLowerCase().includes(q);
        const matchesDesc = app.description.toLowerCase().includes(q);
        const matchesTags = app.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        if (!matchesName && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== 'ALL') {
        const cat = app.category.toLowerCase();
        switch (selectedCategory) {
          case 'AI':
            if (!cat.includes('ai')) return false;
            break;
          case 'PRODUCTIVITY':
            if (!cat.includes('productivity')) return false;
            break;
          case 'EDUCATION':
            if (!cat.includes('education')) return false;
            break;
          case 'WRITING':
            if (!cat.includes('writing')) return false;
            break;
          case 'E-COMMERCE':
            if (!cat.includes('e-commerce') && !cat.includes('ecommerce') && !cat.includes('commerce')) return false;
            break;
          case 'CREATIVE':
            if (!cat.includes('creative')) return false;
            break;
          case 'OTHER':
            // An app is "OTHER" if it doesn't match the primary standard buckets
            const isStandard = 
              cat.includes('ai') || 
              cat.includes('productivity') || 
              cat.includes('education') || 
              cat.includes('writing') || 
              cat.includes('commerce') || 
              cat.includes('creative');
            if (isStandard && cat !== 'other') return false;
            break;
          default:
            if (!cat.includes(selectedCategory.toLowerCase())) return false;
        }
      }

      // 3. Status filter
      if (selectedStatus !== 'ALL') {
        switch (selectedStatus) {
          case 'AVAILABLE':
            if (app.status !== 'Available') return false;
            break;
          case 'PROTOTYPES':
            if (app.status !== 'Prototype') return false;
            break;
          case 'COMING SOON':
            if (app.status !== 'Coming Soon') return false;
            break;
        }
      }

      return true;
    });
  }, [apps, searchQuery, selectedCategory, selectedStatus]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'ALL' || selectedStatus !== 'ALL';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedStatus('ALL');
  };

  // Category counts
  const getCategoryCount = (category: CategoryFilter) => {
    if (category === 'ALL') return apps.length;
    return apps.filter((app) => {
      const cat = app.category.toLowerCase();
      if (category === 'AI') return cat.includes('ai');
      if (category === 'PRODUCTIVITY') return cat.includes('productivity');
      if (category === 'EDUCATION') return cat.includes('education');
      if (category === 'WRITING') return cat.includes('writing');
      if (category === 'E-COMMERCE') return cat.includes('e-commerce') || cat.includes('commerce');
      if (category === 'CREATIVE') return cat.includes('creative');
      if (category === 'OTHER') {
        return cat === 'other' || (!cat.includes('ai') && !cat.includes('productivity') && !cat.includes('education') && !cat.includes('writing') && !cat.includes('commerce') && !cat.includes('creative'));
      }
      return false;
    }).length;
  };

  return (
    <section id="apps" className="py-20 md:py-28 relative border-t border-slate-200/80 bg-slate-50/50">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-3 shadow-xs">
            <LayoutGrid className="w-3.5 h-3.5 text-indigo-600" />
            <span>Central Portfolio Launcher</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            MY APPS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse through functional web apps, live prototypes, and experimental digital projects. Every application opens directly in its live deployment environment.
          </p>
        </div>

        {/* Controls & Filter Bar Container */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
          {/* Top Row: Search Bar & Live Counter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-5 border-b border-slate-100">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="app-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search apps by name, description, tags..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl pl-10 pr-9 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results Count & Reset */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono text-slate-500">
                Showing <strong className="text-indigo-600 font-semibold">{filteredApps.length}</strong> of {apps.length} projects
              </span>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Middle Row: Category Filter Pills */}
          <div className="pt-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <span>Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = getCategoryCount(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25'
                        : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-indigo-700/60 text-white' : 'bg-slate-200/80 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Status Filter Pills */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
              <span>Filter by Status:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {STATUSES.map((status) => {
                const isSelected = selectedStatus === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white font-bold shadow-xs'
                        : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    {status}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white border border-slate-200/80 rounded-2xl max-w-lg mx-auto shadow-xs">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matching projects found</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              No apps matched your current search query or filter selection. Try clearing filters or searching for something else.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Show All Projects</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
