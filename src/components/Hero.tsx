'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ArrowDown, Trophy, Zap } from 'lucide-react';
import { PERSONAL_INFO, VIDEO_PROJECTS, VideoProject } from '../data/portfolioData';

interface HeroProps {
  onPlayVideo: (video: VideoProject) => void;
}

export default function Hero({ onPlayVideo }: HeroProps) {
  const featuredVideo = VIDEO_PROJECTS.find((v) => v.featured && v.aspect === '16:9') || VIDEO_PROJECTS[0];

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#E7E4DC] bg-subtle-grain">
      {/* Decorative Viewfinder Corner Marks */}
      <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#C6C2B8]/70 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#C6C2B8]/70 pointer-events-none hidden sm:block"></div>
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#C6C2B8]/70 pointer-events-none hidden sm:block"></div>
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#C6C2B8]/70 pointer-events-none hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Eyebrow / Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCD7C9] text-xs font-mono text-[#2B2926] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#EE3B2B] animate-pulse"></span>
            <span>Sports Videographer</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121211] text-[#FAF8F5] text-xs font-mono">
            <Trophy className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Official Videographer: Goon Squad Track & Field</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCD7C9] text-xs font-mono text-[#6B6760] shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>4K 120 FPS High-Speed Capture</span>
          </div>
        </div>

        {/* Grid: Headline + Video Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Big Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#6B6760] font-semibold">
                High-Speed Sports Cinematography &bull; Athlete Media
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#121211] leading-[1.05]">
                Capturing <span className="italic font-normal">explosive</span> athletic motion.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#4A4742] leading-relaxed max-w-2xl font-light">
              Hi, I’m <strong className="font-semibold text-[#121211]">Nolan Decker</strong>. I’m a sports videographer capturing the speed, grit, and biomechanics of elite athletes in action. From trackside championship meets with Olympic coach Chris Huffins to high-impact baseball and athletic training sessions, I bring sports to life with cinematic camera craft.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onPlayVideo(featuredVideo)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#121211] text-[#FAF8F5] font-medium text-sm hover:bg-[#2B2926] transition-all shadow-md group"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF8F5] text-[#121211] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Play Featured Reel</span>
              </button>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#DCD7C9] text-[#121211] font-medium text-sm hover:bg-[#F2EFE9] transition-all shadow-xs"
              >
                <span>Browse Selected Work</span>
                <ArrowDown className="w-4 h-4 text-[#6B6760]" />
              </a>
            </div>

            {/* Credentials Row */}
            <div className="pt-4 border-t border-[#E7E4DC] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#6B6760]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121211]"></span>
                <span className="text-[#121211] font-semibold">Track & Field:</span> Goon Squad Combined Events
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121211]"></span>
                <span className="text-[#121211] font-semibold">Baseball & Training:</span> Pitching With Witt
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121211]"></span>
                <span className="text-[#121211] font-semibold">Capability:</span> 120fps Slow-Mo &bull; Dynamic Gimbal &bull; Fast Delivery
              </div>
            </div>
          </div>

          {/* Right Column: Hero Video Feature Card with Viewfinder HUD */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl p-2.5 bg-white border border-[#DCD7C9] shadow-xl hover:shadow-2xl transition-all">
              {/* Camera Frame Viewfinder Overlay */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#181817] cursor-pointer" onClick={() => onPlayVideo(featuredVideo)}>
                <Image
                  src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
                  alt={featuredVideo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40"></div>

                {/* HUD Top Bar inside viewfinder */}
                <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[11px] font-mono text-white/90">
                  <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-[#EE3B2B] animate-pulse"></span>
                    <span>CLIENT PRODUCTION</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                    <span>{featuredVideo.duration}</span>
                  </div>
                </div>

                {/* Center Big Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/95 text-[#121211] flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#FAF8F5] transition-all">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* HUD Bottom Info inside viewfinder */}
                <div className="absolute bottom-3 inset-x-3">
                  <div className="bg-black/75 backdrop-blur-md p-3 rounded-lg border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#D4A359]">
                      <span>Client: Goon Squad Elites</span>
                      <span>16:9 4K Feature</span>
                    </div>
                    <h2 className="text-white font-medium text-sm truncate">
                      {featuredVideo.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Viewfinder Spec Row below video card */}
              <div className="mt-3 px-2 py-1.5 bg-[#FAF8F5] rounded-lg border border-[#E7E4DC] flex justify-between items-center text-[10px] font-mono text-[#6B6760]">
                <span>ISO 400 &bull; 1/240 &bull; 4K 120FPS</span>
                <span className="text-[#121211] font-semibold">CLICK TO WATCH REEL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Stats Row */}
        <div className="mt-14 pt-8 border-t border-[#E7E4DC] grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#121211]">
                {stat.value}
              </span>
              <p className="text-xs font-mono uppercase tracking-wider text-[#2B2926] font-semibold">
                {stat.label}
              </p>
              <p className="text-xs text-[#6B6760] font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
