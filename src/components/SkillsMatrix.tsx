import React, { useState } from 'react';
import { Code2, Zap, Server, Sparkles, Search, Check, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchedSkills = cat.skills.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            s.tag.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === 'All' || cat.category === selectedCategory;
      return matchesSearch && matchesCat;
    });

    return {
      ...cat,
      skills: matchedSkills
    };
  }).filter(cat => cat.skills.length > 0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      default:
        return <Cpu className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills, Frameworks & Engineering Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              5+ years of battle-tested mastery in modern JavaScript, SPA architectures, web performance tuning, and full-stack integration.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tag, library..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map(cat => (
            <div
              key={cat.category}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-xl"
            >
              {/* Category Titlebar */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{cat.category}</h3>
                  <p className="text-xs text-slate-400">{cat.description}</p>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        {skill.isTopSkill && (
                          <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono uppercase font-bold border border-amber-500/30">
                            ★ Top Skill
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500 font-mono">[{skill.tag}]</span>
                      </div>

                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-[11px] text-slate-400">{skill.years}</span>
                        <span className="text-emerald-400 font-bold text-xs">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
