'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Play } from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function BaseballPage() {
  const baseballHighlights = [
    {
      title: "Hip-to-Shoulder Separation & Lead Leg Block",
      category: "Pitching Biomechanics",
      description: "120fps high-speed mound tracking deconstructing ground force generation, hip rotation timing, and lead leg firmness at landing.",
      specs: "4K 120FPS • Mound Level Angle",
      tags: ["Kinetic Chain", "Hip-Shoulder Separation", "Lead Leg Block", "120fps"],
      url: PERSONAL_INFO.clients[2].url,
      image: "https://images.unsplash.com/photo-1595210382266-2d0077c1f541?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Release Point & Finger Pressure Mechanics",
      category: "Ball Flight & Spin",
      description: "Ultra-crisp high-shutter focus on seam orientation, pronation through release, and finger trace off the leather.",
      specs: "1/1000s Shutter • Seam Detail",
      tags: ["Release Point", "Spin Axis", "Fastball / Slider", "Macro 4K"],
      url: PERSONAL_INFO.clients[2].url,
      image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Plyo Ball & Velocity Progression Routine",
      category: "Training & Arm Speed",
      description: "Fast-paced athletic sequencing covering constraint drills, weighted ball progressions, and arm care protocols.",
      specs: "Rhythm Cut • Impact Sound FX",
      tags: ["Plyocare", "Arm Speed", "Velocity", "Training Routine"],
      url: PERSONAL_INFO.clients[2].url,
      image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Full Bullpen Tunneling & Mound Command",
      category: "Live Bullpen Coverage",
      description: "Behind-the-plate and open-side angles capturing pitch tunneling, late break, and glove pop with authentic field audio.",
      specs: "Dual Angle • Audio Mix",
      tags: ["Pitch Tunneling", "Glove Pop", "Bullpen Session", "Live Mound"],
      url: PERSONAL_INFO.clients[2].url,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-[#EAE7DF] gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-rose-600 font-semibold block">
              Sport Spotlight &bull; Baseball Videography
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#121211] tracking-tight">
              Baseball & Pitching Mechanics
            </h1>
            <p className="text-[#524E48] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              High-frame-rate mound capture, slow-motion release point tracking, and throwing progression breakdowns produced for <strong>Pitching With Witt</strong> (<a href={PERSONAL_INFO.clients[2].url} target="_blank" rel="noopener noreferrer" className="text-rose-600 font-mono hover:underline">@pitchingwithw1tt</a>).
            </p>
          </div>

          <a
            href={PERSONAL_INFO.clients[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-all shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Visit @pitchingwithw1tt on IG</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* Client Spotlight Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCD7C9] shadow-sm mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Bio & Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center p-2.5 shadow-md">
                  <InstagramIcon className="w-full h-full" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-rose-600 tracking-wider font-semibold">
                    Client Collaboration
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#121211]">
                    Pitching With Witt (Tristan Wittau)
                  </h2>
                  <p className="text-xs font-mono text-[#68645E]">
                    Instagram: @pitchingwithw1tt &bull; Baseball Development & Mechanics
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#4A4742] font-light leading-relaxed">
                As a sports videographer, I collaborate with baseball coaches and pitchers to turn technical pitching instruction into visually gripping content. Capturing the split-second mechanics of a 90+ mph fastball requires high shutter speeds, dialed-in frame rates, and disciplined tracking along the arm slot.
              </p>

              {/* 3 Tech Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E4DC] space-y-1">
                  <span className="text-xs font-mono uppercase text-[#D4A359] block font-semibold">120 FPS Slow-Mo</span>
                  <p className="text-[11px] text-[#68645E] font-light">Freezes wrist snap & pronation</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E4DC] space-y-1">
                  <span className="text-xs font-mono uppercase text-rose-600 block font-semibold">Mound Rigging</span>
                  <p className="text-[11px] text-[#68645E] font-light">Low-angle stride tracking</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E4DC] space-y-1">
                  <span className="text-xs font-mono uppercase text-emerald-600 block font-semibold">Audio Design</span>
                  <p className="text-[11px] text-[#68645E] font-light">Heavy leather mitt impact pop</p>
                </div>
              </div>
            </div>

            {/* Right: Simulated Instagram Reel Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-[#121211] text-[#FAF8F5] p-4 border border-[#282725] shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#242321] text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center p-1 text-[10px] font-bold">
                      W
                    </div>
                    <span className="font-semibold text-[#FAF8F5]">pitchingwithw1tt</span>
                  </div>
                  <span className="text-[10px] text-rose-400 uppercase">IG REELS</span>
                </div>

                <div className="relative aspect-[9/12] rounded-xl overflow-hidden bg-black group cursor-pointer">
                  <Image
                    src="https://images.unsplash.com/photo-1595210382266-2d0077c1f541?auto=format&fit=crop&w=800&q=80"
                    alt="Pitching mechanics video preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white">
                    4K 120FPS
                  </div>

                  <a
                    href={PERSONAL_INFO.clients[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#121211] flex items-center justify-center group-hover:scale-115 transition-transform shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </a>

                  <div className="absolute bottom-3 inset-x-3 text-white space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#D4A359] block">
                      Filmed by Nolan Decker
                    </span>
                    <p className="text-xs font-semibold leading-snug">
                      Lead Leg Block & Hip-Shoulder Separation Breakdown
                    </p>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.clients[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#242321] hover:bg-[#33312E] text-xs font-mono text-[#FAF8F5] transition-colors"
                >
                  <span>Watch on Instagram (@pitchingwithw1tt)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Baseball Mechanics Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {baseballHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-[#DCD7C9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B8B3A7] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[9/12] overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 group-hover:from-black/95 transition-colors"></div>

                  <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[10px] font-mono text-white/90">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 uppercase tracking-wider text-[#D4A359]">
                      Baseball
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                      120 FPS
                    </span>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/90 text-[#121211] flex items-center justify-center group-hover:scale-115 transition-transform shadow-md">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </a>

                  <div className="absolute bottom-3 inset-x-3 text-white z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="font-semibold text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <p className="text-xs text-[#524E48] font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FAF8F5] border border-[#DCD7C9] text-[#68645E]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#121211] hover:text-[#FAF8F5] text-xs font-mono font-medium text-[#121211] transition-all border border-[#DCD7C9]"
                >
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
