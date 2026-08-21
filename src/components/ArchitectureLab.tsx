import React, { useState } from 'react';
import { Cpu, Gauge, Layers, Server, Sparkles, CheckCircle2, ArrowRight, Activity, Terminal, Shield, Zap } from 'lucide-react';
import { CoreWebVitalsSimulator } from './demos/CoreWebVitalsSimulator';
import { SPARouterDemo } from './demos/SPARouterDemo';

export const ArchitectureLab: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'vitals' | 'router' | 'ai' | 'api'>('vitals');

  return (
    <section id="architecture" className="py-20 bg-slate-950/80 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Deep Dive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frontend Architecture & Performance Lab
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              An interactive inspection into how I architect framework-agnostic SPAs, tune sub-second Core Web Vitals, integrate 20+ enterprise APIs, and utilize AI-assisted workflows.
            </p>
          </div>

          {/* Interactive Mode Selector */}
          <div className="flex flex-wrap gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveLabTab('vitals')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeLabTab === 'vitals'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>Core Web Vitals Suite</span>
            </button>

            <button
              onClick={() => setActiveLabTab('router')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeLabTab === 'router'
                  ? 'bg-blue-500 text-slate-950 shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>SPA Routing Architecture</span>
            </button>

            <button
              onClick={() => setActiveLabTab('api')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeLabTab === 'api'
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>20+ REST API Gateway</span>
            </button>

            <button
              onClick={() => setActiveLabTab('ai')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeLabTab === 'ai'
                  ? 'bg-violet-500 text-white shadow-md shadow-violet-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Assisted Workflow</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Tab Views */}
        {activeLabTab === 'vitals' && (
          <div className="space-y-6">
            <CoreWebVitalsSimulator />
          </div>
        )}

        {activeLabTab === 'router' && (
          <div className="space-y-6">
            <SPARouterDemo />
          </div>
        )}

        {activeLabTab === 'api' && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 text-slate-100 font-sans shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full-Stack Data Gateway & 20+ REST APIs Architecture</h3>
                <p className="text-xs text-slate-400">Handling high-throughput video personalization pipelines across Java, MySQL & ArangoDB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1: Client Gateway */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <h4 className="text-sm font-bold text-white">Client Service Layer</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Centralized fetch interceptor with token injection & refresh rotation</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>In-flight request deduplication to prevent double-firing</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Exponential backoff retry policy for flaky network resilience</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Java Backend */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <h4 className="text-sm font-bold text-white">Java / JSP Backend Contract</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Java Servlets handling heavy transcoding job dispatches</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Structured JSON response envelopes with standardized error codes</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Session verification and role-based permissions matrix</span>
                  </li>
                </ul>
              </div>

              {/* Box 3: Multi-Database Tier */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                    03
                  </span>
                  <h4 className="text-sm font-bold text-white">MySQL & ArangoDB Dual Tier</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>MySQL:</strong> Relational users, billing, campaign meta & audit logs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>ArangoDB:</strong> Multi-model graphs for audience tracking & campaign nodes</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Sub-50ms query responses optimized for high concurrent loads</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeLabTab === 'ai' && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 text-slate-100 font-sans shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI-Assisted Engineering Methodology</h3>
                <p className="text-xs text-slate-400">Using ChatGPT, GitHub Copilot & Google Gemini with rigorous human validation & code reviews</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-violet-400 flex items-center gap-2">
                  <span>1. Technical Exploration & PoC</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I use <strong>Google Gemini</strong> and <strong>ChatGPT</strong> to rapidly construct isolated proof-of-concept sandboxes, test obscure browser API edge cases, and explore algorithmic trade-offs before integrating into production.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-teal-400 flex items-center gap-2">
                  <span>2. In-Editor Implementation</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I use <strong>GitHub Copilot</strong> to accelerate repetitive typing, boilerplate creation, unit test scenario coverage, and complex TypeScript interface scaffolding while maintaining total control over architectural boundaries.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span>3. Verification & Code Hardening</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>The Golden Rule:</strong> Never blindly merge AI code. I manually audit, profile runtime memory, benchmark Core Web Vitals, verify accessibility, and adapt generated code to fit strict security and performance standards.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
