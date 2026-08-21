import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureLab } from './components/ArchitectureLab';
import { SkillsMatrix } from './components/SkillsMatrix';
import { AwardsEducation } from './components/AwardsEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [accentColor, setAccentColor] = useState<string>('emerald');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 relative">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Career & Experience Timeline */}
        <ExperienceTimeline />

        {/* Projects & Live Interactive Sandboxes */}
        <ProjectsSection />

        {/* Architecture, Core Web Vitals & AI Lab */}
        <ArchitectureLab />

        {/* Skills & Engineering Competency Matrix */}
        <SkillsMatrix />

        {/* Honors, Awards & Education */}
        <AwardsEducation />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS-Compliant Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

