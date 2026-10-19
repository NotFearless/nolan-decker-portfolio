'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Smartphone, MonitorPlay, ExternalLink } from 'lucide-react';
import { VIDEO_PROJECTS, VideoProject } from '../../data/portfolioData';
import VideoModal from '../../components/VideoModal';

export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'vertical' | 'cinema'>('all');

  const filteredVideos = VIDEO_PROJECTS.filter((v) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'vertical') return v.aspect === '9:16';
    if (activeFilter === 'cinema') return v.aspect === '16:9';
    return true;
  });

  return (
    <div className="bg-[#FAF8F5] py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#EAE7DF] gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7C776E] font-semibold block">
              Portfolio &bull; All Disciplines
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#121211] tracking-tight">
              Selected Works
            </h1>
            <p className="text-[#524E48] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              High-velocity sports cinematography filmed for teams and athletes. Click any video to play the full 4K or high-speed vertical edit.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2EFE9] rounded-xl border border-[#DCD7C9]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                  : 'text-[#68645E] hover:text-[#121211]'
              }`}
            >
              All Projects ({VIDEO_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('vertical')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                activeFilter === 'vertical'
                  ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                  : 'text-[#68645E] hover:text-[#121211]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>9:16 Shorts ({VIDEO_PROJECTS.filter((v) => v.aspect === '9:16').length})</span>
            </button>
            <button
              onClick={() => setActiveFilter('cinema')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                activeFilter === 'cinema'
                  ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                  : 'text-[#68645E] hover:text-[#121211]'
              }`}
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>16:9 Cinema ({VIDEO_PROJECTS.filter((v) => v.aspect === '16:9').length})</span>
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => {
            const isCinema = video.aspect === '16:9';
            return (
              <div
                key={video.id}
                className={`group bg-white rounded-2xl border border-[#DCD7C9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B8B3A7] transition-all duration-300 flex flex-col ${
                  isCinema ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden bg-black cursor-pointer ${
                    isCinema ? 'aspect-video' : 'aspect-[9/14]'
                  }`}
                  onClick={() => setActiveVideo(video)}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes={isCinema ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/90 transition-colors z-10"></div>

                  <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[10px] font-mono text-white/90 z-20">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 uppercase tracking-wider text-[#D4A359]">
                      Client: {video.client}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                      {video.duration}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-13 h-13 rounded-full bg-white/90 text-[#121211] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 text-white z-20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF8F5]/80 block mb-0.5">
                      {video.role}
                    </span>
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#FAF8F5]/40">
                  <p className="text-xs text-[#524E48] line-clamp-2 font-light leading-relaxed">
                    {video.description}
                  </p>

                  <div className="space-y-3 pt-2 border-t border-[#EAE7DF]">
                    <div className="flex flex-wrap gap-1">
                      {video.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#DCD7C9] text-[#68645E]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setActiveVideo(video)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121211] hover:text-[#EE3B2B] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Video</span>
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
      </div>

      {/* Video Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
