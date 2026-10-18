'use client';

import React from 'react';

export default function AboutSection() {
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

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#121211]"></span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6760] font-semibold">
                  About Nolan Decker
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight leading-tight">
                Behind the lens. <br />
                <span className="italic font-normal">Dedicated to sports.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#4A4742] leading-relaxed font-light">
              I’m an Aubrey & DFW-based <strong>sports videographer</strong> capturing high-performance athletic motion, competition energy, and athlete journeys across sports.
            </p>

            <p className="text-sm sm:text-base text-[#6B6760] leading-relaxed font-light">
              Whether I’m filming trackside for the <strong>Goon Squad Professional Track & Field Team</strong> alongside Olympic medalist and coach Chris Huffins, capturing pitching mechanics for <strong>Pitching With Witt</strong>, or working with individual athletes on recruitment and highlight reels, my mission is simple: bring cinema-quality camera craft to sports.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#DCD7C9] space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#EE3B2B] animate-pulse"></div>
                <h4 className="font-serif font-bold text-[#121211] text-base">
                  What Sets My Sports Videography Apart
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4742] leading-relaxed font-light">
                I take sports video from raw camera framing all the way through speed ramping, custom audio design, and color finishing. Fast turnaround, high-energy edits, and visuals that do justice to the athlete’s work.
              </p>
            </div>
          </div>

          {/* Right Column: Production Workflow Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#DCD7C9] shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE7DF]">
                <h3 className="text-xl font-serif font-bold text-[#121211]">
                  Production Workflow
                </h3>
                <span className="text-xs font-mono text-[#D4A359] uppercase tracking-wider font-semibold">
                  Field to Screen
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {steps.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E4DC] space-y-2">
                    <span className="text-xs font-mono font-bold text-[#121211] bg-white px-2 py-0.5 rounded border border-[#DCD7C9]">
                      {item.step}
                    </span>
                    <h4 className="font-semibold text-sm text-[#121211]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B6760] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick specs banner */}
              <div className="pt-4 border-t border-[#EAE7DF] flex flex-wrap justify-between items-center text-xs font-mono text-[#6B6760] gap-2">
                <span>📍 DFW, Texas & Worldwide Travel</span>
                <span className="text-[#121211] font-semibold">Available for All Sports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
