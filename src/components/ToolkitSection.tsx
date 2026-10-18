'use client';

import React from 'react';
import { Film, Sliders, Video, Volume2 } from 'lucide-react';

export default function ToolkitSection() {
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
    <section id="toolkit" className="py-16 md:py-24 bg-[#F5F3EC] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#121211]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6760] font-semibold">
              Arsenal & Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight">
            Gear, Software & Craft
          </h2>
          <p className="text-[#6B6760] text-sm sm:text-base font-light max-w-2xl">
            The equipment, editing suites, and sports videography craft powering every shoot.
          </p>
        </div>

        {/* 4 Category Cards */}
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
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#121211]">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B6760] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
