'use client';

import React, { useState } from 'react';
import { Check, Copy, Mail, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function InquiryEstimator() {
  const [projectType, setProjectType] = useState<string>('meet-coverage');
  const [format, setFormat] = useState<string>('hybrid');
  const [turnaround, setTurnaround] = useState<string>('priority');
  const [location, setLocation] = useState<string>('DFW, Texas');
  const [clientName, setClientName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const projectTypes = [
    { id: 'meet-coverage', name: 'Track Meet / Competition Coverage', desc: 'On-field multi-event filming, 120fps slow-motion highlights' },
    { id: 'athlete-reel', name: 'Athlete Showcase & Recruitment Reel', desc: 'High-impact personal highlight reel for scouts and sponsors' },
    { id: 'social-retainer', name: 'Monthly Content Retainer', desc: 'Regular training sessions, weekly short-form drops for TikTok & IG' },
    { id: 'commercial', name: 'Commercial & Brand Campaign', desc: 'Narrative storytelling, brand product integration, high-production' },
  ];

  const formats = [
    { id: 'vertical', name: '9:16 Vertical Reels', desc: 'Engineered for TikTok, Reels & YouTube Shorts' },
    { id: 'cinema', name: '16:9 Cinematic 4K', desc: 'Docuseries, YouTube feature, landscape' },
    { id: 'hybrid', name: 'Hybrid Package (Both)', desc: 'Full length YouTube edit + cutdown vertical reels' },
  ];

  const turnarounds = [
    { id: 'same-day', name: 'Same-Day Flash (< 24h)', desc: 'Immediate viral drop while meet is still trending' },
    { id: 'priority', name: 'Priority (48 – 72 Hours)', desc: 'Fast turnaround with sound design & color grade' },
    { id: 'standard', name: 'Standard (5 – 7 Days)', desc: 'Full deep-dive editing and multi-round revisions' },
  ];

  const selectedProject = projectTypes.find((p) => p.id === projectType)?.name;
  const selectedFormat = formats.find((f) => f.id === format)?.name;
  const selectedTurnaround = turnarounds.find((t) => t.id === turnaround)?.name;

  const generatedEmailSubject = `Videography Inquiry: ${selectedProject} (${clientName || 'New Client'})`;
  const generatedEmailBody = `Hi Nolan,

I would like to inquire about booking your videography and content creation services.

Project Scope:
- Project Type: ${selectedProject}
- Deliverable Format: ${selectedFormat}
- Desired Turnaround: ${selectedTurnaround}
- Location / Meet: ${location || 'DFW, Texas'}

Additional Notes:
${notes || 'We would love to discuss dates and get your availability for an upcoming shoot.'}

Best regards,
${clientName || 'Prospective Client'}`;

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    generatedEmailSubject
  )}&body=${encodeURIComponent(generatedEmailBody)}`;

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(generatedEmailBody);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EE3B2B', '#D4A359', '#121211', '#4ADE80'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="inquiry" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#121211]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6760] font-semibold">
              Interactive Project Builder
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight">
            Configure Your Production
          </h2>
          <p className="text-[#6B6760] text-sm sm:text-base font-light max-w-2xl">
            Select your project parameters to generate a custom production brief and instant direct inquiry to Nolan.
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#121211] font-semibold flex items-center justify-between">
                <span>01. Select Project Type</span>
                <span className="text-[#8B877E] text-[10px]">Step 1 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setProjectType(pt.id)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      projectType === pt.id
                        ? 'bg-[#121211] text-[#FAF8F5] border-[#121211] shadow-md'
                        : 'bg-white text-[#2B2926] border-[#DCD7C9] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <p className="font-semibold text-sm leading-snug">{pt.name}</p>
                    <p className={`text-xs mt-1 font-light ${projectType === pt.id ? 'text-[#C6C2B8]' : 'text-[#6B6760]'}`}>
                      {pt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Format */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#121211] font-semibold flex items-center justify-between">
                <span>02. Deliverable Format</span>
                <span className="text-[#8B877E] text-[10px]">Step 2 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {formats.map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setFormat(fmt.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      format === fmt.id
                        ? 'bg-[#121211] text-[#FAF8F5] border-[#121211] shadow-md'
                        : 'bg-white text-[#2B2926] border-[#DCD7C9] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <p className="font-semibold text-xs leading-snug">{fmt.name}</p>
                    <p className={`text-[11px] mt-1 font-light line-clamp-2 ${format === fmt.id ? 'text-[#C6C2B8]' : 'text-[#6B6760]'}`}>
                      {fmt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Turnaround */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#121211] font-semibold flex items-center justify-between">
                <span>03. Desired Turnaround</span>
                <span className="text-[#8B877E] text-[10px]">Step 3 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {turnarounds.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTurnaround(t.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      turnaround === t.id
                        ? 'bg-[#121211] text-[#FAF8F5] border-[#121211] shadow-md'
                        : 'bg-white text-[#2B2926] border-[#DCD7C9] hover:bg-[#F2EFE9]'
                    }`}
                  >
                    <p className="font-semibold text-xs leading-snug">{t.name}</p>
                    <p className={`text-[11px] mt-1 font-light line-clamp-2 ${turnaround === t.id ? 'text-[#C6C2B8]' : 'text-[#6B6760]'}`}>
                      {t.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Info Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#6B6760]">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dallas Track Club / Marcus Smith"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD7C9] text-sm text-[#121211] focus:outline-hidden focus:border-[#121211]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-[#6B6760]">
                  Location / Meet Venue
                </label>
                <input
                  type="text"
                  placeholder="e.g. Austin, TX / Remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD7C9] text-sm text-[#121211] focus:outline-hidden focus:border-[#121211]"
                />
              </div>
            </div>

            {/* Notes textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#6B6760]">
                Additional Shoot Details or Specific Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share any specific dates, target athlete events, or creative vision..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DCD7C9] text-sm text-[#121211] focus:outline-hidden focus:border-[#121211] resize-none"
              />
            </div>
          </div>

          {/* Realtime Output Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#121211] text-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#282725] shadow-2xl space-y-6 sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-[#282725]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359]">
                    Configured Production Brief
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#8B877E]">DFW & Travel</span>
              </div>

              {/* Brief Specs */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-[#222120]">
                  <span className="text-[#8B877E]">PROJECT:</span>
                  <span className="text-[#FAF8F5] font-semibold text-right">{selectedProject}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222120]">
                  <span className="text-[#D4A359]">FORMAT:</span>
                  <span className="text-[#D4A359] font-semibold text-right">{selectedFormat}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222120]">
                  <span className="text-[#8B877E]">DELIVERY:</span>
                  <span className="text-[#FAF8F5] font-semibold text-right">{selectedTurnaround}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222120]">
                  <span className="text-[#8B877E]">LOCATION:</span>
                  <span className="text-[#FAF8F5] font-semibold text-right">{location || 'DFW, TX'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#222120]">
                  <span className="text-[#8B877E]">SPEC:</span>
                  <span className="text-[#FAF8F5] font-semibold text-right">4K 120fps &bull; Sound FX &bull; Color Grade</span>
                </div>
              </div>

              {/* Email Brief Preview */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#8B877E] tracking-wider block">
                  Generated Message Draft
                </span>
                <div className="p-3.5 rounded-xl bg-[#1C1B19] border border-[#2E2C28] text-xs font-mono text-[#C6C2B8] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                  {generatedEmailBody}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={mailtoLink}
                  onClick={handleSendClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FAF8F5] hover:bg-white text-[#121211] font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email to Nolan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#3E3C38] bg-[#1C1B19] hover:bg-[#282725] text-xs font-mono text-[#FAF8F5] transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Brief Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8B877E]" />
                      <span>Copy Inquiry Text</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Contact info */}
              <div className="pt-2 text-center text-xs text-[#8B877E] font-mono">
                Direct: {PERSONAL_INFO.email} &bull; {PERSONAL_INFO.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
