import React, { useState } from 'react';
import { Layers, ArrowLeft, ArrowRight, RefreshCw, Database, Terminal, Shield, CheckCircle2, Cpu } from 'lucide-react';

interface RouteDef {
  path: string;
  name: string;
  moduleName: string;
  loadTime: number;
  apiEndpoints: string[];
  dbSources: string[];
  renderView: React.ReactNode;
}

export const SPARouterDemo: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('/campaigns/analytics');
  const [historyStack, setHistoryStack] = useState<string[]>(['/dashboard', '/campaigns', '/campaigns/analytics']);
  const [historyIndex, setHistoryIndex] = useState<number>(2);
  const [logs, setLogs] = useState<string[]>([
    '⚡ Initialized custom Vanilla History API Router',
    '🔗 Intercepted popstate & link clicks with e.preventDefault()',
    '📦 Loaded module: [Analytics & Metrics Suite] in 42ms'
  ]);
  const [isLoadingModule, setIsLoadingModule] = useState<boolean>(false);

  const routes: Record<string, RouteDef> = {
    '/dashboard': {
      path: '/dashboard',
      name: 'Overview Hub',
      moduleName: 'Core Platform Hub (Module #1)',
      loadTime: 32,
      apiEndpoints: ['GET /api/v2/overview/summary', 'GET /api/v2/user/session'],
      dbSources: ['MySQL (User metadata)', 'ArangoDB (Real-time graph stats)'],
      renderView: (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Active Campaigns</span>
              <span className="text-lg font-mono font-bold text-emerald-400">142</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Video Renders</span>
              <span className="text-lg font-mono font-bold text-indigo-400">84.2K</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">API Latency</span>
              <span className="text-lg font-mono font-bold text-amber-400">28ms</span>
            </div>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-300">
            ✅ Module dynamically loaded via custom AMD-style script injector without full page refresh.
          </div>
        </div>
      )
    },
    '/campaigns': {
      path: '/campaigns',
      name: 'Campaign Builder',
      moduleName: 'Interactive Campaign Studio (Module #2)',
      loadTime: 48,
      apiEndpoints: ['GET /api/v2/campaigns/list', 'POST /api/v2/campaigns/draft'],
      dbSources: ['MySQL (Relational templates)', 'ArangoDB (Dynamic element nodes)'],
      renderView: (
        <div className="space-y-3">
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
            <div>
              <h5 className="font-semibold text-xs text-white">Q3 Personalized Video Blast</h5>
              <p className="text-[11px] text-slate-400">12,500 personalized customer video tokens</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
              Live & Streaming
            </span>
          </div>
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center">
            <div>
              <h5 className="font-semibold text-xs text-white">Onboarding Journey Walkthrough</h5>
              <p className="text-[11px] text-slate-400">Interactive branching video decision tree</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono">
              Draft
            </span>
          </div>
        </div>
      )
    },
    '/campaigns/analytics': {
      path: '/campaigns/analytics',
      name: 'Real-time Analytics',
      moduleName: 'Audience Analytics & CTR Engine (Module #3)',
      loadTime: 42,
      apiEndpoints: ['GET /api/v2/analytics/views', 'GET /api/v2/analytics/dropoff'],
      dbSources: ['ArangoDB (Graph tracking)', 'MySQL (Aggregate reports)'],
      renderView: (
        <div className="space-y-3">
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-white">Video Engagement Retention Curve</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">89.4% Avg Completion</span>
            </div>
            <div className="flex items-end gap-1.5 h-16 pt-2">
              {[40, 65, 80, 92, 85, 96, 88, 94, 98, 90, 85, 92].map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t transition-all hover:opacity-80"
                  style={{ height: `${height}%` }}
                  title={`Segment ${idx + 1}: ${height}% retention`}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    '/assets/media': {
      path: '/assets/media',
      name: 'Asset Pipeline',
      moduleName: 'Media CDN & Asset Pipeline (Module #5)',
      loadTime: 39,
      apiEndpoints: ['GET /api/v2/assets/cdn-list', 'POST /api/v2/assets/transcode'],
      dbSources: ['MySQL (Asset metadata)', 'S3/CDN Storage Cache'],
      renderView: (
        <div className="space-y-2">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎬</span>
              <div>
                <p className="font-semibold text-white">intro_hero_4k.mp4</p>
                <p className="text-[10px] text-slate-400">AV1 / H.264 Transcoded • 2.4 MB</p>
              </div>
            </div>
            <span className="text-emerald-400 font-mono text-[10px]">CDN Cached (Edge)</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-lg">🖼️</span>
              <div>
                <p className="font-semibold text-white">brand_watermark.webp</p>
                <p className="text-[10px] text-slate-400">Optimized WebP • 14 KB</p>
              </div>
            </div>
            <span className="text-emerald-400 font-mono text-[10px]">LCP Ready</span>
          </div>
        </div>
      )
    }
  };

  const navigateTo = (path: string) => {
    if (path === currentPath) return;
    setIsLoadingModule(true);

    const targetRoute = routes[path] || routes['/dashboard'];

    // Push state simulation
    const newStack = historyStack.slice(0, historyIndex + 1);
    newStack.push(path);
    setHistoryStack(newStack);
    setHistoryIndex(newStack.length - 1);
    setCurrentPath(path);

    setTimeout(() => {
      setIsLoadingModule(false);
      setLogs(prev => [
        `🌐 history.pushState({}, '', '${path}')`,
        `📦 Resolved module: [${targetRoute.moduleName}] (${targetRoute.loadTime}ms)`,
        `🔌 Dispatched ${targetRoute.apiEndpoints.length} REST calls to backend gateway`,
        ...prev.slice(0, 7)
      ]);
    }, targetRoute.loadTime * 4);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const prevIdx = historyIndex - 1;
      const prevPath = historyStack[prevIdx];
      setHistoryIndex(prevIdx);
      setCurrentPath(prevPath);
      setLogs(prev => [`⬅️ popstate event -> Navigated back to '${prevPath}'`, ...prev.slice(0, 7)]);
    }
  };

  const goForward = () => {
    if (historyIndex < historyStack.length - 1) {
      const nextIdx = historyIndex + 1;
      const nextPath = historyStack[nextIdx];
      setHistoryIndex(nextIdx);
      setCurrentPath(nextPath);
      setLogs(prev => [`➡️ popstate event -> Navigated forward to '${nextPath}'`, ...prev.slice(0, 7)]);
    }
  };

  const currentRoute = routes[currentPath] || routes['/dashboard'];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 md:p-6 text-slate-100 font-sans shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base md:text-lg">Vanilla History API Router Architecture</h3>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                10+ Enterprise Modules
              </span>
            </div>
            <p className="text-xs text-slate-400">Simulating VSPAGY's zero-dependency SPA routing engine & multi-tier API orchestrator</p>
          </div>
        </div>
      </div>

      {/* Browser Bar Simulator */}
      <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button
              onClick={goBack}
              disabled={historyIndex === 0}
              aria-label="Navigate back"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={goForward}
              disabled={historyIndex >= historyStack.length - 1}
              aria-label="Navigate forward"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigateTo(currentPath)}
              aria-label="Refresh current route"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingModule ? 'animate-spin text-blue-400' : ''}`} />
            </button>
          </div>

          <div className="flex-1 flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-xs text-slate-300">
            <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-slate-500">https://platform.vspagy.com</span>
            <span className="text-white font-semibold">{currentPath}</span>
          </div>
        </div>

        {/* Quick Route Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {Object.entries(routes).map(([path, r]) => (
            <button
              key={path}
              onClick={() => navigateTo(path)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                currentPath === path
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{r.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main View Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Module Content (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-white">{currentRoute.moduleName}</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {currentRoute.loadTime}ms async load
              </span>
            </div>

            {isLoadingModule ? (
              <div className="py-12 flex flex-col items-center justify-center gap-2 text-slate-400">
                <RefreshCw className="w-6 h-6 animate-spin text-blue-400" />
                <span className="text-xs font-mono">Resolving dynamic script & fetching API contracts...</span>
              </div>
            ) : (
              currentRoute.renderView
            )}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-indigo-400" />
              <span>Connected: {currentRoute.dbSources.join(' & ')}</span>
            </div>
            <span className="text-slate-500 font-mono">History Stack: {historyIndex + 1}/{historyStack.length}</span>
          </div>
        </div>

        {/* Live Event Bus & Router Telemetry (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-3.5 border border-slate-800 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-800 text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold text-[11px] uppercase tracking-wider text-slate-300">Router Event Bus Telemetry</span>
            </div>

            <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1 text-[11px]">
              {logs.map((log, i) => (
                <div key={i} className="text-slate-300 font-mono border-l-2 border-blue-500/40 pl-2 py-0.5">
                  {log}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between">
            <span>Framework: Zero-Dep Vanilla JS</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Clean History Sync
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
