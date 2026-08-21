import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Senior Frontend Role Inquiry');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedTemplates = [
    {
      title: '💼 Senior Frontend / Lead Role',
      subject: 'Interview Invitation: Senior Frontend Engineer Role',
      text: "Hi Bhupender,\n\nWe came across your portfolio and were very impressed with your work on VSPAGY's 10+ module SPA architecture and Core Web Vitals optimization. We'd love to schedule a conversation regarding a Senior Frontend role with our team.\n\nBest regards,"
    },
    {
      title: '⚡ SPA & Performance Consultation',
      subject: 'Consultation: Frontend Performance & Architecture',
      text: "Hi Bhupender,\n\nWe are looking for an expert in Single Page Application architecture and Web Performance (LCP, CLS, Core Web Vitals) to help review our frontend systems. Could we discuss availability?\n\nThanks,"
    },
    {
      title: '👋 General Networking',
      subject: 'Hello from a fellow engineer / recruiter',
      text: "Hi Bhupender,\n\nLoved checking out your interactive portfolio and projects. Would love to connect and keep in touch for future engineering collaborations.\n\nCheers,"
    }
  ];

  const handleApplyTemplate = (tpl: typeof predefinedTemplates[0]) => {
    setSubject(tpl.subject);
    setMessage(tpl.text);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    // Create mailto fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`
    )}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something High-Performance Together
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Currently open to Senior Frontend Engineer, JavaScript Specialist, and Technical Lead opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white">Direct Contact Details</h3>
                <p className="text-xs text-slate-400 mt-1">Feel free to reach out directly via email or message.</p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Primary Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-mono font-bold text-white hover:text-emerald-400 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Key Highlights Pill list */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>5+ Years JavaScript & Modern Frontend Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complete Frontend Ownership of 10+ Module SPA (VSPAGY)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second Core Web Vitals & REST API Gateways</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hidden Gem Award Winner (Q1 2026)</span>
                </div>
              </div>

              {/* Status */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">Notice Period / Availability: Open for Discussion</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Composer & Quick Templates (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white">Send a Direct Inquiry</h3>
                <span className="text-[11px] font-mono text-slate-500">Fast Response Guaranteed</span>
              </div>
              <p className="text-xs text-slate-400">Click a template below to auto-fill the message:</p>
            </div>

            {/* Quick Templates Buttons */}
            <div className="flex flex-wrap gap-2">
              {predefinedTemplates.map((tpl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleApplyTemplate(tpl)}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800 hover:border-slate-700 transition-all text-left"
                >
                  {tpl.title}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor / Hiring Manager"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={senderEmail}
                    onChange={e => setSenderEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1 font-medium">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Type your message, project details, or interview schedule here..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-slate-500">
                  Transfers directly to default email client with pre-filled content.
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Message dispatched to email client! I will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
