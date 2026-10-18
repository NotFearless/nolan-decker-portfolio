'use client';

import React from 'react';
import { Film, Sliders, Video, Volume2 } from 'lucide-react';

export default function ToolkitSection() {
  const categories = [
    {
      title: "Editing & Post-Production",
      icon: <Film className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "Adobe Premiere Pro", desc: "Long-form docuseries, timeline organization, multi-cam sports sync" },
        { name: "CapCut Pro", desc: "High-speed mobile sequencing, viral audio sync, kinetic transitions" },
        { name: "Adobe After Effects", desc: "Kinetic typography, motion graphics, clean tracking and visual accents" },
      ],
    },
    {
      title: "Color & Visual Polish",
      icon: <Sliders className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "Adobe Lightroom", desc: "Thumbnail grading, hero stills, contrast balance, and skin tone curves" },
        { name: "Adobe Photoshop", desc: "High-CTR YouTube thumbnails, social covers, and graphic assets" },
        { name: "Custom LUT Pipeline", desc: "Consistent rich tones designed for athletic outdoor track lighting" },
      ],
    },
    {
      title: "Camera & Field Production",
      icon: <Video className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "4K 120fps High-Speed Capture", desc: "Ultra slow-motion breakdown for hurdles, high jump, and pole vault" },
        { name: "Gimbal & Dynamic Tracking", desc: "Fluid athlete tracking down the runway and sprint lanes" },
        { name: "Low-Angle & Trackside Rigging", desc: "Dramatic perspectives emphasizing verticality and physical power" },
      ],
    },
    {
      title: "Sound Design & Retention",
      icon: <Volume2 className="w-5 h-5 text-[#121211]" />,
      items: [
        { name: "Athletic Sound FX Design", desc: "Sub-bass impacts, bar rattles, breath, and spike clicks layered with beat drops" },
        { name: "Algorithmic Retention Tuning", desc: "Pacing engineered around the critical 3-second hook and zero dead-time" },
        { name: "Platform Distribution", desc: "Native metadata, aspect ratio optimization, and upload timing" },
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
            Software, Hardware & Craft
          </h2>
          <p className="text-[#6B6760] text-sm sm:text-base font-light max-w-2xl">
            A comprehensive look at the tools, software, and production techniques powering every frame.
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
