'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';
import { YouTubeIcon, TikTokIcon, InstagramIcon } from '../../components/SocialIcons';
import { PERSONAL_INFO, VIDEO_PROJECTS, VideoProject } from '../../data/portfolioData';
import VideoModal from '../../components/VideoModal';

export default function ClientsPage() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  return (
    <div className="bg-[#FAF8F5] py-14 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-[#EAE7DF] space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7C776E] font-semibold block">
            Featured Productions
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#121211] tracking-tight">
            Clients & Channels I Film For
          </h1>
          <p className="text-[#524E48] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            I work directly with professional combined-event teams, Olympic coaches, and athletic developers. Explore the official channels featuring my videography and editing.
          </p>
        </div>

        {/* 3 Main Client Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Goon Squad YouTube */}
          <div className="bg-white rounded-3xl p-8 border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 p-3">
                  <YouTubeIcon className="w-full h-full" />
                </div>
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                  Track & Field
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#7C776E] tracking-wider block">
                  YouTube Docuseries
                </span>
                <h2 className="font-serif font-bold text-2xl text-[#121211]">
                  Goon Squad Elites
                </h2>
                <p className="text-xs font-mono text-[#EE3B2B] mt-0.5">
                  @GoonSquadElites
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#524E48] font-light leading-relaxed">
                <p className="font-semibold text-[#121211]">Role: Lead Videographer & Editor</p>
                <p>
                  Filming the &apos;Road to the Olympics&apos; docuseries, combined-event training camps alongside Olympic coach Chris Huffins, and 4K competition media.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7C776E]">Long-Form & Shorts</span>
              <a
                href={PERSONAL_INFO.clients[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121211] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2B2926] transition-colors"
              >
                <span>Visit Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Goon Squad TikTok */}
          <div className="bg-white rounded-3xl p-8 border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center p-3">
                  <TikTokIcon className="w-full h-full" />
                </div>
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                  Short-Form Sports
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#7C776E] tracking-wider block">
                  TikTok Channel
                </span>
                <h2 className="font-serif font-bold text-2xl text-[#121211]">
                  Goon Squad TikTok
                </h2>
                <p className="text-xs font-mono text-[#121211] mt-0.5">
                  @gselites
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#524E48] font-light leading-relaxed">
                <p className="font-semibold text-[#121211]">Role: Sports Videographer & Editor</p>
                <p>
                  Trackside 120fps high-speed capture, explosive hurdle and pole vault clips, and rhythmic sound-designed athletic edits.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7C776E]">Daily High-Speed Edits</span>
              <a
                href={PERSONAL_INFO.clients[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121211] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2B2926] transition-colors"
              >
                <span>View TikTok</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Pitching With Witt */}
          <div className="bg-white rounded-3xl p-8 border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center p-3">
                  <InstagramIcon className="w-full h-full" />
                </div>
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                  Baseball
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#7C776E] tracking-wider block">
                  Instagram Reels
                </span>
                <h2 className="font-serif font-bold text-2xl text-[#121211]">
                  Pitching With Witt
                </h2>
                <p className="text-xs font-mono text-rose-600 mt-0.5">
                  @pitchingwithw1tt
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#524E48] font-light leading-relaxed">
                <p className="font-semibold text-[#121211]">Role: Videographer & Content Producer</p>
                <p>
                  Filming pitching mechanics, throwing progression drills, high-speed release points, and athletic training reels.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#7C776E]">Mechanics & Drills</span>
              <a
                href={PERSONAL_INFO.clients[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121211] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2B2926] transition-colors"
              >
                <span>View on IG</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Video Showcase from Clients */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCD7C9] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-[#EAE7DF] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4A359] font-semibold">
                Client Highlight Player
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#121211]">
                Watch Sample Client Edits
              </h3>
            </div>
            <p className="text-xs font-mono text-[#7C776E]">
              Click any video to launch in theater mode
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VIDEO_PROJECTS.filter((v) => v.aspect === '9:16').slice(0, 5).map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group relative rounded-xl overflow-hidden bg-black aspect-[9/15] cursor-pointer border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/95 transition-colors"></div>

                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white z-10">
                  {video.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#121211] flex items-center justify-center group-hover:scale-115 transition-transform shadow-md">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 inset-x-2 text-white z-10">
                  <p className="text-[11px] font-medium line-clamp-2 leading-tight">
                    {video.title}
                  </p>
                  <span className="text-[9px] font-mono text-[#D4A359] mt-0.5 block">
                    Tap to Play
                  </span>
                </div>
              </div>
            ))}
          </div>
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
