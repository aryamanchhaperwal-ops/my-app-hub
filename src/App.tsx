/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedSection } from './components/FeaturedSection';
import { AppLibrary } from './components/AppLibrary';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { appsData } from './data/apps';

export default function App() {
  // Count of active/live apps for navbar badge
  const liveAppsCount = appsData.filter(
    (app) => app.status === 'Available' || app.status === 'Prototype'
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Top Fixed Navigation */}
      <Navbar totalAppsCount={liveAppsCount} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Calculated Stats */}
        <HeroSection apps={appsData} />

        {/* Featured Apps Section (driven by featured: true in appsData) */}
        <FeaturedSection apps={appsData} />

        {/* Full Interactive App Library with Category & Status Filters */}
        <AppLibrary apps={appsData} />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer with GitHub and Contact Placeholders */}
      <Footer />
    </div>
  );
}
