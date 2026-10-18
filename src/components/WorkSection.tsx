'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Smartphone, MonitorPlay, ExternalLink } from 'lucide-react';
import { VIDEO_PROJECTS, VideoProject } from '../data/portfolioData';

interface WorkSectionProps {
  onSelectVideo: (video: VideoProject) => void;
}

export default function WorkSection({ onSelectVideo }: WorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vertical' | 'cinema'>('all');

  const filteredVideos = VIDEO_PROJECTS.filter((v) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'vertical') return v.aspect === '9:16';
    if (activeFilter === 'cinema') return v.aspect === '16:9';
    return true;
  });

  return (
    <section id="work" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E7E4DC] gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#121211]"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6760] font-semibold">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight">
              Selected Works & Edits
            </h2>
            <p className="text-[#6B6760] text-sm sm:text-base max-w-xl font-light">
              High-velocity sports media filmed trackside for Goon Squad combined-event athletes, plus retention-focused short-form edits.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2EFE9] rounded-xl border border-[#DCD7C9]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                  : 'text-[#6B6760] hover:text-[#121211]'
              }`}
            >
              All Projects ({VIDEO_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('vertical')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                activeFilter === 'vertical'
                  ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                  : 'text-[#6B6760] hover:text-[#121211]'
              }`}
            >
              <Smartphone className="w-3 h-3" />
              <span>9:16 Shorts ({VIDEO_PROJECTS.filter((v) => v.aspect === '9:16').length})</span>
            </button>
            <button
              onClick={() => setActiveFilter('cinema')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                activeFilter === 'cinema'
                  ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                  : 'text-[#6B6760] hover:text-[#121211]'
              }`}
            >
              <MonitorPlay className="w-3 h-3" />
              <span>16:9 Cinema ({VIDEO_PROJECTS.filter((v) => v.aspect === '16:9').length})</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => {
            const isCinema = video.aspect === '16:9';
            return (
              <div
                key={video.id}
                className={`group relative bg-white rounded-2xl border border-[#DCD7C9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B8B3A7] transition-all duration-300 flex flex-col ${
                  isCinema ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Thumbnail Container */}
                <div
                  className={`relative overflow-hidden bg-[#181817] cursor-pointer ${
                    isCinema ? 'aspect-video' : 'aspect-[9/14]'
                  }`}
                  onClick={() => onSelectVideo(video)}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes={isCinema ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                  />

                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:from-black/90 transition-colors z-10"></div>

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[10px] font-mono text-white/90 z-20">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 uppercase tracking-wider text-[#D4A359]">
                      {video.aspect}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-13 h-13 rounded-full bg-white/90 text-[#121211] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Preview Overlay */}
                  <div className="absolute bottom-3 inset-x-3 text-white z-20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF8F5]/80 block mb-0.5">
                      {video.role}
                    </span>
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body & Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#FAF8F5]/50">
                  <p className="text-xs text-[#6B6760] line-clamp-2 font-light leading-relaxed">
                    {video.description}
                  </p>

                  <div className="space-y-3 pt-2 border-t border-[#EAE7DF]">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {video.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#DCD7C9] text-[#6B6760]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Card Action Buttons */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => onSelectVideo(video)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121211] hover:text-[#EE3B2B] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Embedded</span>
                      </button>

                      <a
                        href={
                          video.aspect === '9:16'
                            ? `https://www.youtube.com/shorts/${video.youtubeId}`
                            : `https://www.youtube.com/watch?v=${video.youtubeId}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[#8B877E] hover:text-[#121211] hover:bg-[#F2EFE9] transition-colors"
                        title="Open on YouTube"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Channel Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#DCD7C9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#121211] text-[#FAF8F5] flex items-center justify-center font-mono font-bold text-sm">
              GS
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#D4A359] tracking-wider font-semibold">
                Official YouTube Hub
              </span>
              <h4 className="text-lg font-serif font-bold text-[#121211]">
                Goon Squad Elites Channel
              </h4>
              <p className="text-xs text-[#6B6760] font-light">
                Follow all docuseries episodes, athlete vlogs, and meet highlights.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@GoonSquadElites"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121211] hover:bg-[#2B2926] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Visit @GoonSquadElites</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
