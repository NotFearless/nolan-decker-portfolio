'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ExternalLink, Camera } from 'lucide-react';
import { YouTubeIcon, TikTokIcon, InstagramIcon } from './SocialIcons';
import { PERSONAL_INFO, VIDEO_PROJECTS, VideoProject } from '../data/portfolioData';

interface SocialHubProps {
  onPlayVideo: (video: VideoProject) => void;
}

export default function SocialHub({ onPlayVideo }: SocialHubProps) {
  return (
    <section id="clients" className="py-16 md:py-24 bg-[#F5F3EC] border-b border-[#E7E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCD7C9] text-xs font-mono text-[#6B6760]">
            <Camera className="w-3.5 h-3.5 text-[#EE3B2B]" />
            <span>Featured Client Productions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight">
            Channels & Teams I Film For
          </h2>
          <p className="text-[#6B6760] text-sm sm:text-base font-light">
            I work directly with professional teams, coaches, and elite athletes to capture their story. Explore the official client channels featuring my videography and editing work.
          </p>
        </div>

        {/* 3 Main Client Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Goon Squad YouTube */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 p-2.5">
                  <YouTubeIcon className="w-full h-full" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                  Client: Track & Field
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8B877E] tracking-wider block">
                  YouTube Production
                </span>
                <h3 className="font-serif font-bold text-xl text-[#121211]">
                  Goon Squad Elites
                </h3>
                <p className="text-xs font-mono text-[#EE3B2B] mt-0.5">
                  @GoonSquadElites
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#6B6760] font-light leading-relaxed">
                <p className="font-semibold text-[#121211]">My Role: Lead Videographer & Editor</p>
                <p>
                  Filming the &apos;Road to the Olympics&apos; docuseries, combined-event training camps with Coach Chris Huffins, and 4K competition media.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8B877E]">Long-Form & Shorts</span>
              <a
                href={PERSONAL_INFO.clients[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-medium hover:bg-[#2B2926] transition-colors"
              >
                <span>Visit Client Channel</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Goon Squad TikTok */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center p-2.5">
                  <TikTokIcon className="w-full h-full" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                  Client: TikTok Channel
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8B877E] tracking-wider block">
                  Short-Form Sports Media
                </span>
                <h3 className="font-serif font-bold text-xl text-[#121211]">
                  Goon Squad TikTok
                </h3>
                <p className="text-xs font-mono text-[#121211] mt-0.5">
                  @gselites
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#6B6760] font-light leading-relaxed">
                <p className="font-semibold text-[#121211]">My Role: Sports Videographer & Editor</p>
                <p>
                  Trackside 120fps high-speed capture, explosive hurdle and pole vault clips, and rhythmic sound-designed athletic edits.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8B877E]">High-Speed Sports Edits</span>
              <a
                href={PERSONAL_INFO.clients[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-medium hover:bg-[#2B2926] transition-colors"
              >
                <span>View Client TikTok</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Pitching With Witt */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center p-2.5">
                  <InstagramIcon className="w-full h-full" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#121211] text-[#FAF8F5] tracking-wider font-medium">
                  Client: Baseball & Training
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8B877E] tracking-wider block">
                  Baseball Mechanics
                </span>
                <h3 className="font-serif font-bold text-xl text-[#121211]">
                  Pitching With Witt
                </h3>
                <p className="text-xs font-mono text-rose-600 mt-0.5">
                  @pitchingwithw1tt
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#6B6760] font-light leading-relaxed">
                <p className="font-semibold text-[#121211]">My Role: Videographer & Content Producer</p>
                <p>
                  Filming pitching mechanics, throwing progression drills, high-speed release points, and athletic training reels.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8B877E]">Training & Drill Reels</span>
              <a
                href={PERSONAL_INFO.clients[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-medium hover:bg-[#2B2926] transition-colors"
              >
                <span>View Client IG</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Video Vault Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCD7C9] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-[#EAE7DF] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4A359] font-semibold">
                Instant Video Preview Player
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#121211]">
                Watch Featured Client Highlights
              </h3>
            </div>
            <p className="text-xs font-mono text-[#6B6760]">
              Click any video to launch in theater mode with sound
            </p>
          </div>

          {/* Reel Carousel of Featured Vertical Clips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VIDEO_PROJECTS.filter((v) => v.aspect === '9:16').slice(0, 5).map((video) => (
              <div
                key={video.id}
                onClick={() => onPlayVideo(video)}
                className="group relative rounded-xl overflow-hidden bg-[#181817] aspect-[9/15] cursor-pointer border border-[#DCD7C9] shadow-xs hover:shadow-lg transition-all"
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
    </section>
  );
}
