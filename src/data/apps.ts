import { AppItem } from '../types';

/**
 * ============================================================================
 * CENTRAL APP DATA REPOSITORY - ARYAMAN'S APP HUB
 * ============================================================================
 * 
 * All portfolio apps, prototypes, and upcoming projects are managed in this
 * single central array. UI components dynamically read, filter, calculate stats,
 * and render cards from this data structure.
 * 
 * ============================================================================
 * HOW TO ADD FUTURE APPS (SUPPORTS 20+ APPS WITH ZERO CODE CHANGES ELSEWHERE):
 * ============================================================================
 * 
 * To add a new app, simply append another object to the `appsData` array below:
 * 
 * {
 *   id: 11,
 *   name: "Your New App Name",
 *   description: "A concise overview of what your app does.",
 *   category: "Productivity", // Choose: 'Productivity' | 'AI' | 'Education' | 'Writing' | 'E-commerce' | 'Creative' | 'Other'
 *   type: "Full App",        // Choose: 'Full App' | 'Prototype'
 *   platform: "Replit",      // e.g., Base44, Lovable, Bolt, Cloudflare, Softgen, Rocket, Vercel, etc.
 *   url: "https://your-app-url.com", // Destination URL (opens in a new tab)
 *   status: "Available",     // Choose: 'Available' | 'Prototype' | 'Coming Soon'
 *   thumbnail: "default",    // Or use custom thumbnail key
 *   featured: false,         // Set to true to highlight in the Featured Apps section
 *   buttonText: "OPEN APP"   // 'OPEN APP' | 'TRY PROTOTYPE' | 'COMING SOON'
 * }
 * 
 * That's it! The hero statistics, category filters, status filters, search engine,
 * and responsive grids will automatically recalculate and display the new project.
 * ============================================================================
 */

export const appsData: AppItem[] = [
  // APP 1
  {
    id: 1,
    name: "Nova Life",
    description: "A habit tracker designed to help users build and maintain better daily habits.",
    category: "Productivity",
    type: "Full App",
    platform: "Base44",
    url: "https://calm-nova-life-flow.base44.app",
    status: "Available",
    thumbnail: "nova-life",
    featured: true,
    buttonText: "OPEN APP",
    tags: ["Habits", "Streak Tracker", "Productivity Flow"]
  },

  // APP 2
  {
    id: 2,
    name: "ShopSphere",
    description: "A modern e-commerce store prototype for browsing products and exploring an online shopping experience.",
    category: "E-commerce",
    type: "Full App",
    platform: "Lovable",
    url: "https://shopsphere-pwa-app.lovable.app",
    status: "Available",
    thumbnail: "shopsphere",
    featured: true,
    buttonText: "OPEN APP",
    tags: ["E-commerce", "PWA", "Online Store"]
  },

  // APP 3
  {
    id: 3,
    name: "Author's Digital Journal",
    description: "A digital journaling and writing workspace designed for authors to organize their thoughts and writing.",
    category: "Writing",
    type: "Full App",
    platform: "Bolt",
    url: "https://author-s-digital-jou-sui2.bolt.host",
    status: "Available",
    thumbnail: "author-journal",
    featured: false,
    buttonText: "OPEN APP",
    tags: ["Writing", "Distraction-Free", "Manuscripts"]
  },

  // APP 4
  {
    id: 4,
    name: "Student OS",
    description: "A productivity workspace designed specifically for students to organize their academic life.",
    category: "Education",
    type: "Full App",
    platform: "Lovable",
    url: "https://evernote-for-students.lovable.app",
    status: "Available",
    thumbnail: "student-os",
    featured: true,
    buttonText: "OPEN APP",
    tags: ["Academics", "Student Life", "Task Management"]
  },

  // APP 5
  {
    id: 5,
    name: "Rhythm Linguist",
    description: "An experimental app combining language learning and music into one interactive experience.",
    category: "Education",
    type: "Full App",
    platform: "Lovable",
    url: "https://rhythm-linguist-sound.lovable.app",
    status: "Available",
    thumbnail: "rhythm-linguist",
    featured: true,
    buttonText: "OPEN APP",
    tags: ["Audio Learning", "Polyglot", "Musical Cadence"]
  },

  // APP 6
  {
    id: 6,
    name: "Nova Pet",
    description: "An interactive AI-powered virtual pet experience.",
    category: "AI",
    type: "Full App",
    platform: "Cloudflare",
    url: "https://nova-pet.aryamanchhaperwal.workers.dev",
    status: "Available",
    thumbnail: "nova-pet",
    featured: true,
    buttonText: "OPEN APP",
    tags: ["AI Companion", "Virtual Pet", "Interactive Agent"]
  },

  // APP 7
  {
    id: 7,
    name: "AI Career Navigator",
    description: "An AI-powered career exploration and guidance tool designed for students.",
    category: "AI & Education",
    type: "Prototype",
    platform: "Built with Rocket",
    url: "https://aicareernavigator-739ta46.public.builtwithrocket.new",
    status: "Prototype",
    thumbnail: "ai-career-navigator",
    featured: false,
    buttonText: "TRY PROTOTYPE",
    tags: ["Career Mapping", "AI Guidance", "Future Pathways"]
  },

  // APP 8
  {
    id: 8,
    name: "AI City Reimagined",
    description: "An experimental AI-powered city and image transformation experience.",
    category: "AI & Creative",
    type: "Prototype",
    platform: "Softgen",
    url: "https://3000-1661757c-1151-4a2d-b48c-d9acea125f4a.softgen.dev",
    status: "Prototype",
    thumbnail: "ai-city-reimagined",
    featured: false,
    buttonText: "TRY PROTOTYPE",
    tags: ["Generative Urbanism", "Diffusion Art", "Creative AI"]
  },

  // APP 9 (Coming Soon slot 1)
  {
    id: 9,
    name: "Coming Soon",
    description: "A new intelligent productivity workflow tool currently under active development.",
    category: "Other",
    type: "Full App",
    platform: "In Development",
    url: "",
    status: "Coming Soon",
    thumbnail: "coming-soon-1",
    featured: false,
    buttonText: "COMING SOON",
    tags: ["Next-Gen", "Stealth Project"]
  },

  // APP 10 (Coming Soon slot 2)
  {
    id: 10,
    name: "Coming Soon",
    description: "An experimental AI agent playground exploring generative interaction models.",
    category: "AI",
    type: "Prototype",
    platform: "In Development",
    url: "",
    status: "Coming Soon",
    thumbnail: "coming-soon-2",
    featured: false,
    buttonText: "COMING SOON",
    tags: ["AI Labs", "Prototype"]
  }

  /*
   * ==========================================================================
   * ADD FUTURE APPS BELOW (App 11, 12, ... 20+)
   * Example:
   * 
   * ,{
   *   id: 11,
   *   name: "Quantum Flow",
   *   description: "Personal workflow optimization engine with predictive task routing.",
   *   category: "Productivity",
   *   type: "Full App",
   *   platform: "Base44",
   *   url: "https://quantum-flow.example.app",
   *   status: "Available",
   *   thumbnail: "default",
   *   featured: true,
   *   buttonText: "OPEN APP"
   * }
   * ==========================================================================
   */
];
