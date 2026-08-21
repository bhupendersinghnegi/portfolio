import React from 'react';
import { Award, GraduationCap, Trophy, CheckCircle2, Sparkles, BookOpen, Star } from 'lucide-react';
import { EDUCATION_DATA, AWARDS_DATA } from '../data/portfolioData';

export const AwardsEducation: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-slate-950/70 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Awards, Certifications & Technical Training
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Recognized for outstanding engineering delivery, deep Java & web foundations, and continuous advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Awards Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-400">
              <Award className="w-4 h-4" />
              <span>Honors & Recognition</span>
            </div>

            {AWARDS_DATA.map(award => (
              <div
                key={award.id}
                className="bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 rounded-2xl border border-amber-500/40 p-6 space-y-4 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
                    {award.date}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-white">{award.title}</h3>
                    <span className="text-amber-400">★</span>
                  </div>
                  <p className="text-xs font-mono text-amber-400/90 font-semibold mt-0.5">
                    {award.organization} • {award.quarter}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {award.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Category: Engineering Excellence</span>
                  <span className="text-emerald-400">Verified Corporate Honor</span>
                </div>
              </div>
            ))}
          </div>

          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-400">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Technical Diplomas</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map(edu => (
                <div
                  key={edu.id}
                  className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 space-y-3 shadow-md hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span>{edu.title}</span>
                        {edu.gradeOrScore && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] uppercase font-bold border border-emerald-500/30">
                            {edu.gradeOrScore}
                          </span>
                        )}
                      </h4>
                      <p className="text-xs font-medium text-emerald-400">{edu.institution}</p>
                    </div>

                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {edu.skillsAcquired.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
