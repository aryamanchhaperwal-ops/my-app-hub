import React, { useState } from 'react';
import { Compass, Github, Mail, ArrowUp, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const contactEmail = 'aryamanchhaperwal@gmail.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <footer className="bg-white border-t border-slate-200 py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
            {/* Brand & Subtitle */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-xs">
                  <Compass className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">
                  ARYAMAN'S APP HUB
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500 font-mono">
                "More projects coming soon."
              </p>
            </div>

            {/* Placeholders for GitHub & Contact */}
            <div className="flex items-center gap-3">
              {/* GitHub Link */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* Contact Button / Interactive Modal trigger */}
              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-xs transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Contact</span>
              </button>

              {/* Back to top button */}
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs transition-colors"
                title="Scroll to top"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Aryaman. All rights reserved. Central Portfolio & Launcher.
            </div>
            <div className="flex items-center gap-4">
              <span>Crafted with React, Vite & Tailwind CSS</span>
              <span>•</span>
              <span className="text-indigo-600 font-mono font-medium">Expandable Architecture</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-xl relative animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-600" />
              Get In Touch
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Have feedback on one of the projects, a collaboration idea, or want to discuss a new app prototype? Reach out directly:
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2 mb-6 font-mono text-xs text-slate-800">
              <span className="truncate">{contactEmail}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-sans font-medium border border-slate-200 shadow-xs transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex items-center justify-end gap-2">
              <a
                href={`mailto:${contactEmail}`}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
              >
                Open Email Client
              </a>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
