import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, AWARDS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdownResume = `# BHUPENDER
**Senior JavaScript Developer | Frontend Engineer | Web Performance | REST APIs**
Email: ${PERSONAL_INFO.email} | Location: India | Experience: 5+ Years

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

## CORE SKILLS
- **Languages & Frameworks:** JavaScript (ES6+), Modern React (18/19), HTML5, CSS3, DOM & Browser APIs, Sass/SCSS, Bootstrap, Tailwind CSS, jQuery
- **Architecture & Performance:** SPA Architecture, History API Routing, Core Web Vitals (LCP, FCP, CLS), Lazy Loading, Code Splitting, DevTools Profiling
- **Backend & APIs:** REST APIs (20+ Endpoints), Java, JSP / Servlets, MySQL, ArangoDB
- **AI-Assisted Development:** ChatGPT, GitHub Copilot, Google Gemini
- **Tools:** Git, GitHub, Adobe XD, Photoshop, Vite

## PROFESSIONAL EXPERIENCE

### Senior Software Developer | VSPAGY (Aug 2023 – Present)
- Own complete frontend architecture for enterprise SPA platform with 10+ major modules.
- Engineered framework-independent SPA navigation via Browser History API & dynamic script loading.
- Integrated and maintained 20+ production REST APIs with Java/JSP, MySQL, and ArangoDB backends.
- Optimized Core Web Vitals achieving sub-second LCP and eliminating Cumulative Layout Shift.
- Award: Hidden Gem — Q1 2026 for outstanding performance and technical delivery.

### UI Developer | Keyideas (May 2022 – Aug 2023)
- Independently owned full commercial client websites from UI design to production.
- Converted Adobe XD designs to responsive interfaces with custom jQuery plugins & vanilla JS utilities.

### Frontend Developer | CLT (Dec 2020 – May 2022)
- Built UPSC Education Platform and online produce e-commerce platforms from scratch with PHP backend integration.

## AWARDS & CERTIFICATIONS
- Hidden Gem Award — Q1 (July 2026) | VSPAGY
- Java Expert — Grade A | Ducat (2020)
- IT-Expert Advanced Diploma | Arth Institute (2016–2018)
`;

    navigator.clipboard.writeText(markdownResume);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-slate-900 rounded-3xl border border-slate-700 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative print:border-none print:shadow-none print:max-h-none print:rounded-none print:bg-white print:text-black">
        {/* Modal Action Bar (Hidden in Print) */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white text-sm sm:text-base">Bhupender — Professional ATS Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Markdown!' : 'Copy ATS Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted ATS Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-200 font-sans print:p-0 print:bg-white print:text-slate-900 space-y-8">
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6 space-y-2 text-center">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight uppercase">
              BHUPENDER
            </h1>
            <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700">
              Senior JavaScript Developer | Frontend Engineer | SPA Architecture | Web Performance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 print:text-slate-600 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span>5+ Years Experience</span>
              <span>•</span>
              <span>India</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Executive Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-300 print:text-slate-800">
              Senior JavaScript Developer / Frontend Engineer with 5+ years of professional experience building, optimizing, and maintaining scalable production web applications. At VSPAGY, owns the complete frontend of an enterprise single-page application with 10+ major modules. Expertise spans framework-independent History API SPA navigation, reusable UI component ecosystems, 20+ REST API integrations, Core Web Vitals tuning (LCP, CLS, FCP), Java/MySQL full-stack collaboration, and AI-assisted development (Copilot, Gemini, ChatGPT).
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Technical Competency Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              <div>
                <span className="font-bold text-white print:text-black">Languages & Frameworks: </span>
                <span>JavaScript (ES6+), Modern React (18/19), DOM & Browser APIs, HTML5, CSS3, Sass/SCSS, Bootstrap, Tailwind CSS, jQuery</span>
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Architecture & Performance: </span>
                <span>SPA Architecture, History API Routing, Core Web Vitals (LCP, FCP, CLS), Lazy Loading, Code Splitting, DevTools Profiling</span>
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Backend & Databases: </span>
                <span>REST APIs (20+ Endpoints), Java, JSP / Servlets, MySQL, ArangoDB (Graph/Document)</span>
              </div>
              <div>
                <span className="font-bold text-white print:text-black">AI & Tooling: </span>
                <span>ChatGPT, GitHub Copilot, Google Gemini, Git, GitHub, Adobe XD, Photoshop, Vite</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Professional Work Experience
            </h2>

            {EXPERIENCES.map(exp => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-sm text-white print:text-black">{exp.role}</span>
                    <span className="text-emerald-400 print:text-emerald-700 font-semibold"> — {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-400 print:text-slate-600 font-medium">{exp.period} | {exp.location}</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800 leading-normal">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Honors & Awards */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Awards & Recognition
            </h2>
            <div className="text-xs text-slate-300 print:text-slate-800 space-y-1">
              <p>
                <strong>Hidden Gem — Q1 Award (July 2026) | VSPAGY:</strong> Recognized for outstanding performance, dedication, exceptional architectural accomplishment, and frontend ownership across all 10+ platform modules.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Education & Technical Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              {EDUCATION_DATA.map(edu => (
                <div key={edu.id} className="p-2 rounded bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                  <div className="font-bold text-white print:text-black">{edu.title}</div>
                  <div className="text-emerald-400 print:text-emerald-700 text-[11px]">{edu.institution}</div>
                  <div className="text-[10px] text-slate-400 print:text-slate-600 font-mono">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
