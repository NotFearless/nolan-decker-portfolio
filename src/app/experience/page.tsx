'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Film, Sliders, Video, Volume2 } from 'lucide-react';
import { RESUME_EXPERIENCES } from '../../data/portfolioData';

export default function ExperiencePage() {
  const steps = [
    {
      step: '01',
      title: 'Action & Field Filming',
      desc: 'Mobile, responsive camera operation capturing high-velocity sprints, swings, jumps, and game action at 4K 120fps.',
    },
    {
      step: '02',
      title: 'Precision Sports Pacing',
      desc: 'Crafted in Premiere Pro and CapCut with tight cuts that match athlete momentum and keep viewers locked in.',
    },
    {
      step: '03',
      title: 'Athletic Sound Design',
      desc: 'Layered sound effects—cleat turf strikes, bat cracks, bar vibrations, and impact bass drops that make you feel the force.',
    },
    {
      step: '04',
      title: 'Color Grading & Delivery',
      desc: 'Rich athletic contrast, vibrant team colors, and fast turnaround delivery ready for team socials, athlete profiles, and scouts.',
    },
  ];

  const categories = [
    {
      title: "Editing & Sports Pacing",
      icon: <Film className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "Adobe Premiere Pro", desc: "Full docuseries edits, multi-cam sports timeline sync, speed ramping, and match cuts" },
        { name: "CapCut Pro", desc: "Fast-turnaround mobile delivery, viral sports pacing, sound syncing, and dynamic text" },
        { name: "Adobe After Effects", desc: "Kinetic sports typography, motion tracking, stat overlays, and visual effects" },
      ],
    },
    {
      title: "Color & Visual Finishing",
      icon: <Sliders className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "Adobe Lightroom", desc: "High-contrast athletic stills, thumbnail color balancing, and skin tone grading" },
        { name: "Adobe Photoshop", desc: "Sports graphic packages, recruitment posters, YouTube covers, and athlete thumbnails" },
        { name: "Custom Sports LUTs", desc: "Engineered for challenging outdoor sunlight, stadium lights, and indoor gym venues" },
      ],
    },
    {
      title: "Camera & Field Operation",
      icon: <Video className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "4K 120fps High-Speed Capture", desc: "Silky smooth slow-motion action tracking for sprints, pitches, swings, and jumps" },
        { name: "Dynamic Gimbal Tracking", desc: "Low-angle tracking and high-speed motion following athletes across the field" },
        { name: "Game Day & Practice Rigging", desc: "Lightweight, agile camera setups built to move rapidly with the flow of competition" },
      ],
    },
    {
      title: "Sound FX & Sports Audio",
      icon: <Volume2 className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "Impact Sound Design", desc: "Bat cracks, turf cleat cuts, crossbar rattles, and heavy sub-bass athletic drops" },
        { name: "Audio Dynamics & Beat Sync", desc: "Edits timed to the rhythm of movement and bass lines to build intensity" },
        { name: "Multi-Platform Delivery", desc: "Native formats for team channels, athlete recruitment profiles, and social feeds" },
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] py-14 sm:py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="pb-8 border-b border-[#EAE7DF] space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7C776E] font-semibold block">
            Background & Credentials
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#121211] tracking-tight">
            Experience & About
          </h1>
          <p className="text-[#524E48] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Nolan Decker is a sports videographer based in Aubrey / DFW, Texas, dedicated to capturing high-performance athletic motion, competition energy, and athlete journeys across all sports.
          </p>
        </div>

        {/* Curated Resume Cards */}
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C776E] font-semibold">
              Professional Work History
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#121211]">
              Curated Experience
            </h2>
          </div>

          <div className="space-y-6">
            {RESUME_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCD7C9] shadow-xs relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAE7DF] gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2.5">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-[#7C776E]">
                        {exp.organizationType}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121211] pt-1">
                      {exp.role}
                    </h3>

                    <div className="text-sm font-semibold text-[#D4A359]">
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-[#7C776E]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8B877E]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8B877E]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="py-6 space-y-3.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B877E] font-semibold block">
                    Core Responsibilities & Impact
                  </span>

                  <ul className="space-y-3">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-3 text-sm text-[#4A4742] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#121211] mt-2 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#EAE7DF] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-[#8B877E] mr-1">
                    Key Competencies:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DCD7C9] text-[#2B2926]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Production Workflow */}
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C776E] font-semibold">
              Behind The Scenes
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#121211]">
              Production Workflow: Field to Screen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#DCD7C9] shadow-xs space-y-2">
                <span className="text-xs font-mono font-bold text-[#121211] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#DCD7C9]">
                  {item.step}
                </span>
                <h4 className="font-semibold text-base text-[#121211] pt-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#524E48] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gear & Software Toolkit */}
        <div className="space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C776E] font-semibold">
              Hardware & Software
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#121211]">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCD7C9] shadow-xs space-y-6"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-[#EAE7DF]">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#DCD7C9]">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#121211]">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="space-y-1">
                      <span className="font-semibold text-sm text-[#121211]">
                        {item.name}
                      </span>
                      <p className="text-xs text-[#68645E] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next step banner */}
        <div className="p-8 rounded-3xl bg-[#121211] text-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl font-serif font-bold">Interested in collaborating?</h3>
            <p className="text-xs font-mono text-[#C6C2B8] mt-1">Available for meet coverage, training sessions, and athlete profiles.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF8F5] text-[#121211] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
          >
            <span>Book a Shoot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
