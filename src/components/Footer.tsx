import React from 'react';
import { ArrowUp, Heart, Code2, ShieldCheck, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
              B
            </div>
            <div>
              <div className="font-bold text-white text-sm">Bhupender</div>
              <p className="text-[11px] text-slate-500">Senior JavaScript Developer & Frontend Engineer</p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects & Demos</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture & Vitals</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#awards" className="hover:text-white transition-colors">Awards</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-mono text-[11px]"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bhupender. Built with React 19, TypeScript & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4 font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Core Web Vitals Tuned (98/100)
            </span>
            <span className="text-slate-600">•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
