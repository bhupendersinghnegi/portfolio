import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight, Layers, Database, Sparkles, Building2, Code2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('vspagy');

  const currentExperience = EXPERIENCES.find(e => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            5+ Years of Production Engineering Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            From single-developer website ownership to architecting enterprise-scale single-page platforms with 10+ modules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Interactive Company List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-2 relative ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono ${
                        isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {exp.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-white">{exp.company}</h3>
                        <p className="text-[11px] text-slate-400 font-mono">{exp.period}</p>
                      </div>
                    </div>

                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] uppercase font-bold">
                        Current Role
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 font-medium line-clamp-1">{exp.role}</p>

                  {exp.awardReceived && (
                    <div className="mt-1 flex items-center gap-1.5 text-[10px] text-amber-300 font-mono bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                      <Award className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">Awarded: Hidden Gem 2026</span>
                    </div>
                  )}

                  {isSelected && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border-t border-r border-emerald-500 rotate-45" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Deep-Dive Experience Card (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
            {/* Header with Role & Company */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    {currentExperience.type} Position
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {currentExperience.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {currentExperience.role} <span className="text-emerald-400">@ {currentExperience.company}</span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {currentExperience.period}
                </p>
              </div>

              {/* Award Callout */}
              {currentExperience.awardReceived && (
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-start gap-2.5 max-w-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-300">Hidden Gem — Q1 Award (July 2026)</h4>
                    <p className="text-[11px] text-amber-200/80 leading-tight mt-0.5">
                      Recognized for exceptional performance, technical ownership, and architectural contributions across all 10+ platform modules.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Role Summary */}
            <div className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {currentExperience.description}
            </div>

            {/* Modules Owned (Special Highlight for VSPAGY) */}
            {currentExperience.modulesOwned && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    10+ Platform Modules Owned & Architected at VSPAGY
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentExperience.modulesOwned.map((module, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <span className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-medium truncate">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Responsibilities & Impact */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Contributions & Architectural Highlights
              </h4>

              <div className="space-y-2">
                {currentExperience.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Key Metrics */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Technologies Applied:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentExperience.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono text-[11px] border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
