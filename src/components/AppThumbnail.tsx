import React from 'react';

interface AppThumbnailProps {
  thumbnailKey: string;
  name: string;
  category: string;
}

export const AppThumbnail: React.FC<AppThumbnailProps> = ({ thumbnailKey, name, category }) => {
  switch (thumbnailKey) {
    case 'nova-life':
      // Habits & Productivity: streak circles, checkmark node, glowing pulse wave
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-emerald-950/70 via-zinc-950 to-teal-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.22),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nl-emerald" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="nl-teal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>
            {/* Background Grid Accent */}
            <line x1="30" y1="90" x2="290" y2="90" stroke="#064e3b" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
            <line x1="160" y1="20" x2="160" y2="160" stroke="#064e3b" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />

            {/* Streak Concentric Rings */}
            <circle cx="160" cy="90" r="58" stroke="#064e3b" strokeWidth="8" strokeOpacity="0.35" />
            <circle cx="160" cy="90" r="58" stroke="url(#nl-teal)" strokeWidth="8" strokeLinecap="round" strokeDasharray="364" strokeDashoffset="90" />
            
            <circle cx="160" cy="90" r="42" stroke="#065f46" strokeWidth="6" strokeOpacity="0.4" />
            <circle cx="160" cy="90" r="42" stroke="url(#nl-emerald)" strokeWidth="6" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="55" />

            {/* Habit Vital Pulse Line */}
            <path d="M40 90 L100 90 L115 65 L130 115 L145 75 L160 90 L280 90" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75" />

            {/* Central Completed Habit Node */}
            <circle cx="160" cy="90" r="22" fill="#042f2e" stroke="#34d399" strokeWidth="2.5" />
            <path d="M152 90 L158 96 L170 83" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

            {/* Floating Streak Badges */}
            <g transform="translate(230, 36)">
              <rect width="65" height="24" rx="12" fill="#064e3b" fillOpacity="0.8" stroke="#10b981" strokeWidth="1" />
              <text x="32.5" y="16" fill="#a7f3d0" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">🔥 24 DAYS</text>
            </g>
            <g transform="translate(35, 126)">
              <rect width="76" height="24" rx="12" fill="#042f2e" fillOpacity="0.8" stroke="#2dd4bf" strokeWidth="1" />
              <text x="38" y="16" fill="#99f6e4" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">✓ 98% SCORE</text>
            </g>
          </svg>
        </div>
      );

    case 'shopsphere':
      // E-commerce: modern 3D shopping cart / shopping bag, illuminated product tags & floating cubes
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-indigo-950/80 via-zinc-950 to-purple-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.25),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ss-indigo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
              <linearGradient id="ss-violet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            {/* Perspective Floor Grid */}
            <path d="M70 145 L250 145 L290 170 L30 170 Z" fill="#312e81" fillOpacity="0.15" />
            <line x1="160" y1="145" x2="160" y2="170" stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="115" y1="145" x2="90" y2="170" stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="205" y1="145" x2="230" y2="170" stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.4" />

            {/* Modern Isometric Shopping Basket / Cart Wireframe */}
            <g transform="translate(105, 45)">
              {/* Cart Basket Base & Walls */}
              <polygon points="15,40 95,40 105,80 5,80" fill="#1e1b4b" fillOpacity="0.6" stroke="url(#ss-indigo)" strokeWidth="2.5" />
              {/* Horizontal Grid lines */}
              <line x1="10" y1="55" x2="100" y2="55" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="7" y1="68" x2="103" y2="68" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" />
              {/* Vertical Slats */}
              <line x1="35" y1="40" x2="30" y2="80" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="55" y1="40" x2="55" y2="80" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="75" y1="40" x2="80" y2="80" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Wheels */}
              <circle cx="25" cy="94" r="9" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
              <circle cx="25" cy="94" r="3" fill="#c7d2fe" />
              <circle cx="85" cy="94" r="9" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
              <circle cx="85" cy="94" r="3" fill="#c7d2fe" />

              {/* Cart Handle */}
              <path d="M5 40 L-10 15 L-25 15" stroke="url(#ss-indigo)" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Glowing Digital Product Cubes Floating Out */}
            <g transform="translate(170, 25)">
              <polygon points="25,0 45,12 25,24 5,12" fill="#a855f7" fillOpacity="0.8" />
              <polygon points="5,12 25,24 25,44 5,32" fill="#7e22ce" fillOpacity="0.9" />
              <polygon points="25,24 45,12 45,32 25,44" fill="#9333ea" fillOpacity="0.9" />
            </g>

            {/* Floating Tag */}
            <g transform="translate(50, 48)">
              <rect width="60" height="22" rx="6" fill="#312e81" stroke="#818cf8" strokeWidth="1" />
              <text x="30" y="15" fill="#e0e7ff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">🛍️ PWA STORE</text>
            </g>
          </svg>
        </div>
      );

    case 'author-journal':
      // Writing / Journal: minimalist open journal, golden quill stroke, luminous thoughts
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-amber-950/70 via-zinc-950 to-orange-950/50 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,158,11,0.22),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aj-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            {/* Open Minimalist Book / Journal */}
            <g transform="translate(70, 40)">
              {/* Left Page */}
              <path d="M90 10 C60 5, 20 8, 0 16 L0 88 C20 80, 60 82, 90 92 Z" fill="#1c1917" stroke="#78350f" strokeWidth="2" />
              {/* Left Page Lines */}
              <line x1="18" y1="36" x2="75" y2="30" stroke="#b45309" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
              <line x1="18" y1="50" x2="72" y2="44" stroke="#b45309" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
              <line x1="18" y1="64" x2="65" y2="58" stroke="#b45309" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />

              {/* Right Page */}
              <path d="M90 10 C120 5, 160 8, 180 16 L180 88 C160 80, 120 82, 90 92 Z" fill="#292524" stroke="#b45309" strokeWidth="2" />
              {/* Right Page Lines */}
              <line x1="105" y1="30" x2="162" y2="36" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
              <line x1="105" y1="44" x2="155" y2="50" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
              <line x1="105" y1="58" x2="145" y2="64" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />

              {/* Book Spine Center Glow */}
              <line x1="90" y1="8" x2="90" y2="94" stroke="#fbbf24" strokeWidth="2.5" />
            </g>

            {/* Glowing Golden Quill Pen */}
            <g transform="translate(195, 25) rotate(-25)">
              <path d="M0 0 C15 25, 20 60, 5 95 L0 105 L-5 95 C-20 60, -15 25, 0 0 Z" fill="url(#aj-gold)" />
              <line x1="0" y1="10" x2="0" y2="105" stroke="#78350f" strokeWidth="1.5" />
              {/* Nib Tip */}
              <polygon points="-3,105 3,105 0,115" fill="#fef3c7" />
            </g>

            {/* Flowing Luminous Ink Ribbon */}
            <path d="M120 135 C150 148, 180 120, 205 130 C225 140, 250 135, 275 142" stroke="url(#aj-gold)" strokeWidth="2" strokeDasharray="3 3" />

            {/* Words Badge */}
            <g transform="translate(45, 130)">
              <rect width="80" height="22" rx="11" fill="#451a03" fillOpacity="0.8" stroke="#f59e0b" strokeWidth="1" />
              <text x="40" y="15" fill="#fef3c7" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">✍️ AUTHOR SUITE</text>
            </g>
          </svg>
        </div>
      );

    case 'student-os':
      // Education / Student OS: academic dashboard, graduation cap motif, timeline blocks
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-sky-950/80 via-zinc-950 to-teal-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.22),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="so-sky" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            {/* Desktop Dashboard Canvas */}
            <rect x="45" y="30" width="230" height="120" rx="8" fill="#0c2033" stroke="#0369a1" strokeWidth="1.5" />
            {/* Window Header */}
            <rect x="45" y="30" width="230" height="22" rx="8" fill="#082f49" />
            <circle cx="60" cy="41" r="3.5" fill="#f43f5e" />
            <circle cx="72" cy="41" r="3.5" fill="#fbbf24" />
            <circle cx="84" cy="41" r="3.5" fill="#10b981" />
            <text x="160" y="45" fill="#7dd3fc" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">STUDENT_OS.WORKSPACE</text>

            {/* Left Sidebar Widgets */}
            <rect x="55" y="60" width="60" height="35" rx="4" fill="#075985" fillOpacity="0.5" stroke="#38bdf8" strokeWidth="1" />
            <text x="85" y="75" fill="#e0f2fe" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">COURSES</text>
            <rect x="62" y="81" width="30" height="4" rx="2" fill="#38bdf8" />

            <rect x="55" y="103" width="60" height="38" rx="4" fill="#075985" fillOpacity="0.4" stroke="#0284c7" strokeWidth="1" />
            <text x="85" y="118" fill="#bae6fd" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">DEADLINES</text>
            <rect x="62" y="124" width="44" height="4" rx="2" fill="#f59e0b" />

            {/* Center Academic Mortarboard Glow */}
            <g transform="translate(145, 62)">
              <polygon points="40,0 80,18 40,36 0,18" fill="url(#so-sky)" />
              <polygon points="15,25 40,36 65,25 65,38 C65,48 15,48 15,38 Z" fill="#0369a1" />
              {/* Tassel */}
              <path d="M70 23 L76 34 L78 50" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
              <circle cx="78" cy="50" r="3" fill="#facc15" />
            </g>

            {/* GPA / Progress Pill */}
            <g transform="translate(135, 116)">
              <rect width="125" height="25" rx="5" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1" />
              <text x="15" y="16" fill="#e0f2fe" fontSize="9" fontWeight="600" fontFamily="sans-serif">SEMESTER GPA: </text>
              <text x="92" y="16" fill="#34d399" fontSize="10" fontWeight="700" fontFamily="sans-serif">4.0 ★</text>
            </g>
          </svg>
        </div>
      );

    case 'rhythm-linguist':
      // Education + Music: audio soundwaves morphing into language sound phonetics & music notes
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-fuchsia-950/80 via-zinc-950 to-pink-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,70,239,0.22),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rl-fuchsia" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="50%" stopColor="#e879f9" />
                <stop offset="100%" stopColor="#c026d3" />
              </linearGradient>
            </defs>
            {/* Equalizer Waveform Bars */}
            <g transform="translate(45, 60)">
              <rect x="0" y="30" width="8" height="30" rx="4" fill="#a21caf" />
              <rect x="16" y="15" width="8" height="45" rx="4" fill="#c026d3" />
              <rect x="32" y="0" width="8" height="60" rx="4" fill="#e879f9" />
              <rect x="48" y="20" width="8" height="40" rx="4" fill="#f472b6" />
              <rect x="64" y="35" width="8" height="25" rx="4" fill="#ec4899" />
            </g>

            {/* Central Morphing Ring: Soundwave into Language Speech Bubble */}
            <g transform="translate(130, 40)">
              <circle cx="36" cy="36" r="34" fill="#701a75" fillOpacity="0.5" stroke="url(#rl-fuchsia)" strokeWidth="2.5" />
              {/* Speech bubble tail */}
              <path d="M22 66 L12 78 L34 68 Z" fill="#701a75" stroke="#f472b6" strokeWidth="1.5" />
              {/* Language Characters floating */}
              <text x="36" y="32" fill="#fdf4ff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">A / あ</text>
              <text x="36" y="50" fill="#fbcfe8" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">♫ BEATS</text>
            </g>

            {/* Musical Notes Ascending */}
            <g transform="translate(225, 45)">
              <ellipse cx="15" cy="55" rx="7" ry="5" fill="#f472b6" transform="rotate(-20 15 55)" />
              <line x1="21" y1="52" x2="21" y2="20" stroke="#f472b6" strokeWidth="2.5" />
              <path d="M21 20 C32 20, 36 30, 38 35" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />

              <ellipse cx="50" cy="40" rx="6" ry="4.5" fill="#e879f9" transform="rotate(-20 50 40)" />
              <line x1="55" y1="38" x2="55" y2="10" stroke="#e879f9" strokeWidth="2.5" />
              <path d="M55 10 C63 10, 68 18, 70 22" stroke="#e879f9" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Subtitle Badge */}
            <g transform="translate(100, 138)">
              <rect width="120" height="22" rx="11" fill="#500724" fillOpacity="0.8" stroke="#f472b6" strokeWidth="1" />
              <text x="60" y="15" fill="#fdf2f8" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">🎵 AUDIO + POLYGLOT</text>
            </g>
          </svg>
        </div>
      );

    case 'nova-pet':
      // AI Virtual Pet: holographic cute cyber companion with expressive neon eyes, heart reactor, antenna
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-violet-950/80 via-zinc-950 to-cyan-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.25),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="np-cyber" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {/* Holographic Platform Base */}
            <ellipse cx="160" cy="150" rx="75" ry="16" fill="#4c1d95" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 4" />
            <ellipse cx="160" cy="150" rx="45" ry="9" fill="#06b6d4" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1" />

            {/* Cyber Pet Head Shape */}
            <g transform="translate(115, 35)">
              {/* Holographic Ears */}
              <polygon points="12,25 -2,-5 26,10" fill="#6d28d9" stroke="#a78bfa" strokeWidth="2" />
              <polygon points="78,25 92,-5 64,10" fill="#6d28d9" stroke="#a78bfa" strokeWidth="2" />

              {/* Antenna with Glowing Pulse */}
              <line x1="45" y1="12" x2="45" y2="-10" stroke="#22d3ee" strokeWidth="2.5" />
              <circle cx="45" cy="-10" r="5" fill="#67e8f9" />

              {/* Rounded Cyber Head */}
              <rect x="6" y="10" width="78" height="66" rx="26" fill="#1e1035" stroke="url(#np-cyber)" strokeWidth="3" />
              
              {/* Visor Screen */}
              <rect x="14" y="24" width="62" height="38" rx="14" fill="#090514" stroke="#4c1d95" strokeWidth="1.5" />

              {/* Expressive Glowing Eyes */}
              <ellipse cx="32" cy="42" rx="7" ry="9" fill="#22d3ee" />
              <circle cx="34" cy="39" r="2.5" fill="#ffffff" />

              <ellipse cx="58" cy="42" rx="7" ry="9" fill="#22d3ee" />
              <circle cx="60" cy="39" r="2.5" fill="#ffffff" />

              {/* Cute digital blush / smile */}
              <path d="M41 52 Q45 56 49 52" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />

              {/* Heart Core / AI Reactor */}
              <path d="M45 84 C42 80 34 80 34 87 C34 94 45 101 45 101 C45 101 56 94 56 87 C56 80 48 80 45 84 Z" fill="#ec4899" />
            </g>

            {/* Companion AI Tag */}
            <g transform="translate(195, 30)">
              <rect width="90" height="20" rx="10" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
              <text x="45" y="14" fill="#c7d2fe" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">🐾 AI COMPANION</text>
            </g>
          </svg>
        </div>
      );

    case 'ai-career-navigator':
      // AI & Education: career compass, branching neural path, ascending star destination
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-teal-950/80 via-zinc-950 to-blue-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.22),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cn-nav" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Background Constellation Lines */}
            <line x1="60" y1="120" x2="110" y2="90" stroke="#134e4a" strokeWidth="1.5" />
            <line x1="110" y1="90" x2="160" y2="60" stroke="#134e4a" strokeWidth="1.5" />
            <line x1="160" y1="60" x2="220" y2="40" stroke="#1e3a8a" strokeWidth="1.5" />
            <line x1="110" y1="90" x2="180" y2="120" stroke="#134e4a" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Central Career Compass Ring */}
            <circle cx="160" cy="90" r="50" stroke="#0d9488" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="4 4" />
            <circle cx="160" cy="90" r="36" stroke="url(#cn-nav)" strokeWidth="2" />

            {/* Compass Pointer Needle */}
            <polygon points="160,50 167,90 160,83 153,90" fill="#2dd4bf" />
            <polygon points="160,130 167,90 160,97 153,90" fill="#1e3a8a" />
            <circle cx="160" cy="90" r="4" fill="#ffffff" />

            {/* Milestone Pathway Nodes */}
            <circle cx="60" cy="120" r="8" fill="#115e59" stroke="#2dd4bf" strokeWidth="2" />
            <text x="60" y="142" fill="#99f6e4" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">START</text>

            <circle cx="110" cy="90" r="10" fill="#0f766e" stroke="#5eead4" strokeWidth="2" />
            <text x="110" y="74" fill="#ccfbf1" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">SKILLS</text>

            {/* Destination Target Star */}
            <g transform="translate(230, 35)">
              <polygon points="15,0 19,10 30,12 21,19 24,30 15,24 6,30 9,19 0,12 11,10" fill="#facc15" stroke="#fef08a" strokeWidth="1.5" />
              <text x="15" y="44" fill="#fef08a" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">GOAL</text>
            </g>

            {/* Prototype Badge */}
            <g transform="translate(35, 30)">
              <rect width="80" height="22" rx="11" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1" />
              <text x="40" y="15" fill="#a7f3d0" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">🧭 AI PATHFINDER</text>
            </g>
          </svg>
        </div>
      );

    case 'ai-city-reimagined':
      // AI & Creative: futuristic cyberpunk skyline silhouettes, glowing neural grid, sunset neon horizon
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-purple-950/80 via-zinc-950 to-amber-950/60 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(168,85,247,0.25),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ac-sunset" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#09090b" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="ac-neon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>

            {/* Neon Sun / Horizon Sphere */}
            <circle cx="160" cy="95" r="42" fill="url(#ac-sunset)" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="120" y1="85" x2="200" y2="85" stroke="#fbcfe8" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="125" y1="95" x2="195" y2="95" stroke="#fbcfe8" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="135" y1="105" x2="185" y2="105" stroke="#fbcfe8" strokeWidth="1" strokeOpacity="0.5" />

            {/* Cyber Cityscape Silhouette Towers */}
            {/* Tower 1 (Left) */}
            <rect x="40" y="70" width="28" height="75" fill="#180c2c" stroke="#9333ea" strokeWidth="1.5" />
            <line x1="48" y1="85" x2="48" y2="135" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="58" y1="85" x2="58" y2="135" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 3" />

            {/* Tower 2 (Mid Left) */}
            <polygon points="75,55 95,35 115,55 115,145 75,145" fill="#24103d" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="95" cy="52" r="3" fill="#38bdf8" />

            {/* Tower 3 (Central Spire) */}
            <polygon points="145,30 160,10 175,30 175,145 145,145" fill="#2e1065" stroke="url(#ac-neon)" strokeWidth="2" />
            <line x1="160" y1="10" x2="160" y2="-5" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="160" cy="-5" r="3" fill="#e0f2fe" />

            {/* Tower 4 (Mid Right) */}
            <rect x="185" y="60" width="34" height="85" fill="#1e0e38" stroke="#d946ef" strokeWidth="1.5" />
            <circle cx="202" cy="78" r="5" fill="#f43f5e" />

            {/* Tower 5 (Far Right) */}
            <rect x="230" y="78" width="45" height="67" fill="#140824" stroke="#a855f7" strokeWidth="1.5" />

            {/* Perspective Horizon Ground Line */}
            <line x1="20" y1="145" x2="300" y2="145" stroke="url(#ac-neon)" strokeWidth="2" />

            {/* Neural Matrix Beams */}
            <line x1="160" y1="10" x2="95" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 4" />
            <line x1="160" y1="10" x2="202" y2="78" stroke="#f472b6" strokeWidth="1" strokeDasharray="2 4" />

            {/* Tag Badge */}
            <g transform="translate(195, 20)">
              <rect width="90" height="22" rx="11" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
              <text x="45" y="15" fill="#f5d0fe" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">🏙️ URBAN AI LAB</text>
            </g>
          </svg>
        </div>
      );

    case 'coming-soon-1':
    case 'coming-soon-2':
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-slate-900 via-zinc-950 to-slate-900 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(161,161,170,0.08),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Blueprint Grid Lines */}
            <line x1="40" y1="40" x2="280" y2="40" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="40" y1="90" x2="280" y2="90" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="40" y1="140" x2="280" y2="140" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="100" y1="20" x2="100" y2="160" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="160" y1="20" x2="160" y2="160" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="220" y1="20" x2="220" y2="160" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />

            {/* Glowing Blueprint Hexagon / Circuit Vault */}
            <g transform="translate(160, 90)">
              <circle cx="0" cy="0" r="44" stroke="#52525b" strokeWidth="1.5" strokeDasharray="6 6" />
              <polygon points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16" stroke="#71717a" strokeWidth="2" fill="#18181b" />
              {/* Lock / Pulse Icon in center */}
              <rect x="-10" y="-4" width="20" height="16" rx="3" fill="#27272a" stroke="#a1a1aa" strokeWidth="1.5" />
              <path d="M-6 -4 L-6 -10 C-6 -14 6 -14 6 -10 L6 -4" stroke="#a1a1aa" strokeWidth="1.5" fill="none" />
              <circle cx="0" cy="3" r="2" fill="#a1a1aa" />
            </g>

            {/* Pulse Indicator */}
            <g transform="translate(100, 142)">
              <rect width="120" height="22" rx="11" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
              <circle cx="18" cy="11" r="4" fill="#71717a" />
              <text x="66" y="15" fill="#a1a1aa" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">NEXT IN PIPELINE</text>
            </g>
          </svg>
        </div>
      );

    default:
      // Generic futuristic tech graphic for future added apps
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-t-xl bg-gradient-to-br from-cyan-950/40 via-zinc-950 to-indigo-950/40 flex items-center justify-center border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_70%)]" />
          <svg className="w-full h-full p-4 relative z-10" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="30" width="220" height="120" rx="12" fill="#09090b" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle cx="160" cy="80" r="32" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="160" cy="80" r="16" fill="#0369a1" fillOpacity="0.5" stroke="#7dd3fc" strokeWidth="2" />
            <text x="160" y="130" fill="#bae6fd" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">{name.toUpperCase()}</text>
          </svg>
        </div>
      );
  }
};
