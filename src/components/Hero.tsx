import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, Terminal, Award, Zap, Layers, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'vitals' | 'stack'>('architecture');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({ particleCount: 40, spread: 45, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs font-medium text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-emerald-400 font-semibold">Senior Frontend & SPA Architect</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">5+ Years Production Experience</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Bhupender</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-200 tracking-tight">
                Senior JavaScript Developer & Frontend Engineer
              </p>
            </div>

            {/* Core Value Proposition Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              I architect, scale, and deliver resilient single-page web applications. Currently owning the complete frontend of <span className="text-emerald-400 font-semibold">VSPAGY's 10+ module enterprise platform</span>, integrating 20+ REST APIs, and optimizing Core Web Vitals with zero-refresh Vanilla History SPA routing, modern React, and AI-augmented velocity.
            </p>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Experience</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">5+ Years</div>
                <div className="text-[10px] text-slate-500">Production Web Apps</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Layers className="w-3.5 h-3.5 text-teal-400" />
                  <span>VSPAGY Scope</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">10+ Modules</div>
                <div className="text-[10px] text-slate-500">Frontend Ownership</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>API Gateways</span>
                </div>
                <div className="text-xl font-extrabold text-white font-mono">20+ APIs</div>
                <div className="text-[10px] text-slate-500">REST & Graph Endpoints</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Recognition</span>
                </div>
                <div className="text-sm font-extrabold text-amber-300 font-mono">Hidden Gem</div>
                <div className="text-[10px] text-slate-500">Q1 2026 VSPAGY Award</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Interactive Demos & Code</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:border-slate-600"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View ATS Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium text-xs sm:text-sm flex items-center gap-2 transition-all font-mono"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Terminal Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Terminal Titlebar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    bhupender.config.ts
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'architecture' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('vitals')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'vitals' ? 'bg-slate-800 text-teal-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Vitals
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'stack' ? 'bg-slate-800 text-blue-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Code / Content Area */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[310px] flex flex-col justify-between">
                {activeTab === 'architecture' && (
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500">// 🏢 VSPAGY Production SPA Architecture</p>
                    <p><span className="text-purple-400">export const</span> <span className="text-yellow-300">vspagyFrontend</span> = &#123;</p>
                    <p className="pl-4">role: <span className="text-emerald-300">"Senior Software Developer"</span>,</p>
                    <p className="pl-4">modulesOwned: <span className="text-teal-300">10</span>, <span className="text-slate-500">// End-to-end full platform ownership</span></p>
                    <p className="pl-4">routingEngine: <span className="text-blue-300">"Vanilla History API + URL Parser"</span>,</p>
                    <p className="pl-4">apiGateway: &#123;</p>
                    <p className="pl-8">endpoints: <span className="text-emerald-300">20+</span>,</p>
                    <p className="pl-8">backendStack: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"JSP/Servlets"</span>, <span className="text-amber-300">"MySQL"</span>, <span className="text-amber-300">"ArangoDB"</span>],</p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">award: <span className="text-amber-400">"Hidden Gem (Q1 2026) 🏆"</span></p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'vitals' && (
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500">// ⚡ Web Performance & Core Web Vitals Tuning</p>
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">performanceBudget</span> = &#123;</p>
                    <p className="pl-4">LCP: <span className="text-emerald-400">"1.1s"</span>, <span className="text-slate-500">// Target &lt; 2.5s (Preloaded hero & WebP)</span></p>
                    <p className="pl-4">CLS: <span className="text-emerald-400">"0.00"</span>, <span className="text-slate-500">// Zero layout jumping (Aspect-ratio)</span></p>
                    <p className="pl-4">FCP: <span className="text-emerald-400">"0.6s"</span>, <span className="text-slate-500">// Defer scripts & inline critical CSS</span></p>
                    <p className="pl-4">INP: <span className="text-emerald-400">"35ms"</span>, <span className="text-slate-500">// Optimized event loop</span></p>
                    <p className="pl-4">lighthouseScore: <span className="text-emerald-400">98</span></p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500">// 🛠️ Core Engineering Toolset</p>
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">coreCapabilities</span> = [</p>
                    <p className="pl-4 text-emerald-300">"JavaScript (ES6+) / DOM & Browser APIs",</p>
                    <p className="pl-4 text-teal-300">"Modern React 18/19 / Redux / Hooks",</p>
                    <p className="pl-4 text-blue-300">"SPA Architecture / REST APIs (20+)",</p>
                    <p className="pl-4 text-amber-300">"Java, MySQL & ArangoDB Integration",</p>
                    <p className="pl-4 text-purple-300">"AI-Assisted Dev (Gemini / Copilot / ChatGPT)"</p>
                    <p>];</p>
                  </div>
                )}

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Tested
                  </span>
                  <span>UTF-8 • TypeScript 5.8 • ESM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
