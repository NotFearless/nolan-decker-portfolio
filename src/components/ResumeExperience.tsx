'use client';

import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { RESUME_EXPERIENCES } from '../data/portfolioData';

export default function ResumeExperience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E7E4DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#121211]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6760] font-semibold">
              Professional Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight">
            Sports Videography Background
          </h2>
          <p className="text-[#6B6760] text-sm sm:text-base font-light max-w-2xl">
            Selected professional roles capturing elite athletic motion, collaborating trackside with Olympic coaching staff, and editing dynamic sports media.
          </p>
        </div>

        {/* Experience Dossier Cards */}
        <div className="space-y-8">
          {RESUME_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCD7C9] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Top Accent Indicator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAE7DF] gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-[#6B6760]">
                      {exp.organizationType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121211] pt-1">
                    {exp.role}
                  </h3>

                  <div className="flex items-center space-x-2 text-sm font-semibold text-[#D4A359]">
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-[#6B6760]">
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

              {/* Responsibilities & Impact */}
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

              {/* Skills Tags */}
              <div className="pt-6 border-t border-[#EAE7DF] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#8B877E] mr-1">
                  Key Skills:
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
    </section>
  );
}
