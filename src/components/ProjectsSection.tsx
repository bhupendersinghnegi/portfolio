import React, { useState } from 'react';
import { FolderGit2, Play, Sparkles, ExternalLink, Code2, ArrowRight, X, Layers, Cpu, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { PizzaDemo } from './demos/PizzaDemo';
import { TravelListDemo } from './demos/TravelListDemo';
import { QuizDemo } from './demos/QuizDemo';
import { SPARouterDemo } from './demos/SPARouterDemo';
import { CoreWebVitalsSimulator } from './demos/CoreWebVitalsSimulator';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Enterprise SPA',
    'React Applications',
    'Vanilla JS & APIs',
    'Performance & Architecture'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const renderActiveDemo = (demoType?: string) => {
    switch (demoType) {
      case 'pizza':
        return <PizzaDemo />;
      case 'travel':
        return <TravelListDemo />;
      case 'quiz':
        return <QuizDemo />;
      case 'router':
        return <SPARouterDemo />;
      case 'vitals':
        return <CoreWebVitalsSimulator />;
      default:
        return (
          <div className="p-8 text-center text-slate-400 font-mono text-xs">
            Interactive playground not available for this project.
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Live Interactive Sandboxes
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Real-world enterprise systems, modern React applications, and interactive performance simulators you can test live.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`bg-slate-900/90 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:border-slate-700 ${
                project.featured
                  ? 'border-emerald-500/30 ring-1 ring-emerald-500/20'
                  : 'border-slate-800'
              }`}
            >
              {/* Card Header & Badges */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                      <span className="text-xs font-mono font-bold text-emerald-300">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 text-[10px] font-mono border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-slate-500 text-[10px] font-mono">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 font-mono truncate">
                  {project.companyOrContext}
                </span>

                {project.demoType ? (
                  <button
                    onClick={() => setActiveDemoProject(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs font-mono border border-emerald-500/30 flex items-center gap-1.5 transition-all active:scale-95 shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Live Demo</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveDemoProject(project)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs flex items-center gap-1 transition-colors shrink-0"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep-Dive & Live Demo Modal */}
      {activeDemoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 rounded-3xl border border-slate-700 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                    {activeDemoProject.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 font-mono">{activeDemoProject.companyOrContext}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeDemoProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">{activeDemoProject.subtitle}</p>
              </div>

              <button
                onClick={() => setActiveDemoProject(null)}
                aria-label="Close Project Modal"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {/* If there's a playable live demo, render it prominently! */}
              {activeDemoProject.demoType && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5" />
                      Live Playable Sandbox Simulation
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Full React Interactive State</span>
                  </div>
                  {renderActiveDemo(activeDemoProject.demoType)}
                </div>
              )}

              {/* Architecture Deep Dive */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  Engineering Architecture & Problem-Solution Fit
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">The Challenge</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{activeDemoProject.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">The Engineering Solution</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{activeDemoProject.solution}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Key Technical Highlights
                  </span>
                  <div className="space-y-2">
                    {activeDemoProject.architectureHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase">Technologies & Standards:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeDemoProject.tags.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveDemoProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
