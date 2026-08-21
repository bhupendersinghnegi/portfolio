import React, { useState } from 'react';
import { Gauge, CheckCircle, ArrowRight, ShieldCheck, Zap, Activity, Sliders } from 'lucide-react';
import { CORE_WEB_VITALS_BENCHMARKS } from '../../data/portfolioData';

export const CoreWebVitalsSimulator: React.FC = () => {
  const [enableCodeSplitting, setEnableCodeSplitting] = useState<boolean>(true);
  const [enableLazyLoading, setEnableLazyLoading] = useState<boolean>(true);
  const [enableWebP, setEnableWebP] = useState<boolean>(true);
  const [enableAspectRatio, setEnableAspectRatio] = useState<boolean>(true);
  const [enableDeferScripts, setEnableDeferScripts] = useState<boolean>(true);

  // Compute live scores based on toggles
  const optimizationsActive = [
    enableCodeSplitting,
    enableLazyLoading,
    enableWebP,
    enableAspectRatio,
    enableDeferScripts
  ].filter(Boolean).length;

  const totalOptimizations = 5;

  // Lighthouse score calculation
  const baseScore = 54;
  const computedScore = Math.round(baseScore + ((100 - baseScore) * (optimizationsActive / totalOptimizations)));

  // LCP calculation: base 3.8s down to 1.1s
  const computedLCP = (3.8 - ((3.8 - 1.1) * (
    (Number(enableCodeSplitting) * 0.4 + Number(enableLazyLoading) * 0.3 + Number(enableWebP) * 0.3)
  ))).toFixed(1);

  // CLS calculation: base 0.28 down to 0.00
  const computedCLS = (0.28 - ((0.28 - 0.0) * (
    (Number(enableAspectRatio) * 0.7 + Number(enableLazyLoading) * 0.3)
  ))).toFixed(2);

  // FCP calculation: base 2.1s down to 0.6s
  const computedFCP = (2.1 - ((2.1 - 0.6) * (
    (Number(enableDeferScripts) * 0.5 + Number(enableCodeSplitting) * 0.5)
  ))).toFixed(1);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (score >= 70) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 md:p-6 text-slate-100 font-sans shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base md:text-lg">Core Web Vitals & Performance Benchmark Lab</h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Interactive Profiler
              </span>
            </div>
            <p className="text-xs text-slate-400">Toggle real-world engineering optimizations to observe instantaneous metric impacts</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className={`px-3 py-1.5 rounded-xl border font-mono flex items-center gap-2 ${getScoreColor(computedScore)}`}>
            <Activity className="w-4 h-4" />
            <span className="text-xs">Lighthouse Performance:</span>
            <span className="font-bold text-sm">{computedScore}/100</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Optimizations Control Switchboard (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-300 tracking-wider">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <span>Frontend Optimizations ({optimizationsActive}/{totalOptimizations})</span>
          </div>

          <div className="space-y-2.5">
            <label className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
              <div className="pr-2">
                <span className="text-xs font-medium text-white block">Dynamic JS Code Splitting</span>
                <span className="text-[11px] text-slate-400 block">Reduces initial monolithic bundle from 480KB to 120KB</span>
              </div>
              <input
                type="checkbox"
                checked={enableCodeSplitting}
                onChange={e => setEnableCodeSplitting(e.target.checked)}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 bg-slate-950 mt-1 cursor-pointer"
              />
            </label>

            <label className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
              <div className="pr-2">
                <span className="text-xs font-medium text-white block">Intersection Observer Lazy Loading</span>
                <span className="text-[11px] text-slate-400 block">Defers offscreen images and heavy module cards</span>
              </div>
              <input
                type="checkbox"
                checked={enableLazyLoading}
                onChange={e => setEnableLazyLoading(e.target.checked)}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 bg-slate-950 mt-1 cursor-pointer"
              />
            </label>

            <label className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
              <div className="pr-2">
                <span className="text-xs font-medium text-white block">WebP / AVIF Responsive Assets</span>
                <span className="text-[11px] text-slate-400 block">75% payload compression vs raw PNG/JPEG formats</span>
              </div>
              <input
                type="checkbox"
                checked={enableWebP}
                onChange={e => setEnableWebP(e.target.checked)}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 bg-slate-950 mt-1 cursor-pointer"
              />
            </label>

            <label className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
              <div className="pr-2">
                <span className="text-xs font-medium text-white block">Explicit Aspect-Ratio & Skeleton Placeholders</span>
                <span className="text-[11px] text-slate-400 block">Completely prevents Cumulative Layout Shift (CLS)</span>
              </div>
              <input
                type="checkbox"
                checked={enableAspectRatio}
                onChange={e => setEnableAspectRatio(e.target.checked)}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 bg-slate-950 mt-1 cursor-pointer"
              />
            </label>

            <label className="flex items-start justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
              <div className="pr-2">
                <span className="text-xs font-medium text-white block">Script Deferral & Critical CSS Inlining</span>
                <span className="text-[11px] text-slate-400 block">Eliminates parser-blocking resources for ultra-fast FCP</span>
              </div>
              <input
                type="checkbox"
                checked={enableDeferScripts}
                onChange={e => setEnableDeferScripts(e.target.checked)}
                className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 bg-slate-950 mt-1 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Live Metrics Output Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-semibold uppercase text-slate-300 tracking-wider">
            Live Core Web Vitals Scorecard
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* LCP Card */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">LCP (Load Speed)</span>
                <span className="text-[10px] font-mono text-slate-500">Target &lt;2.5s</span>
              </div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">
                {computedLCP}s
              </div>
              <div className="text-[10px] text-slate-400">
                {Number(computedLCP) <= 2.5 ? '🟢 Good (Fast Perception)' : '🔴 Needs Optimization'}
              </div>
            </div>

            {/* CLS Card */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">CLS (Stability)</span>
                <span className="text-[10px] font-mono text-slate-500">Target &lt;0.10</span>
              </div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">
                {computedCLS}
              </div>
              <div className="text-[10px] text-slate-400">
                {Number(computedCLS) <= 0.1 ? '🟢 Zero Layout Shift' : '🔴 Unstable Jumps'}
              </div>
            </div>

            {/* FCP Card */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300">FCP (First Paint)</span>
                <span className="text-[10px] font-mono text-slate-500">Target &lt;1.8s</span>
              </div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">
                {computedFCP}s
              </div>
              <div className="text-[10px] text-slate-400">
                {Number(computedFCP) <= 1.8 ? '🟢 Instant First Render' : '🔴 Parser Blocked'}
              </div>
            </div>
          </div>

          {/* Real-World Case Studies Table */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h5 className="text-xs font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Real Production Benchmarks Achieved by Bhupender
            </h5>
            <div className="space-y-1.5 text-xs">
              {CORE_WEB_VITALS_BENCHMARKS.map(metric => (
                <div key={metric.acronym} className="p-2 rounded bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-white mr-1.5">{metric.acronym}</span>
                    <span className="text-slate-400 text-[11px]">{metric.name}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-slate-500 line-through">{metric.unoptimizedValue}</span>
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span className="text-emerald-400 font-bold">{metric.optimizedValue}</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] uppercase font-bold">
                      {metric.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
