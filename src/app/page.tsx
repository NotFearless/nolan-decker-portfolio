'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight, ArrowUpRight, Trophy } from 'lucide-react';
import { VIDEO_PROJECTS, VideoProject } from '../data/portfolioData';
import VideoModal from '../components/VideoModal';

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const featuredVideo = VIDEO_PROJECTS.find((v) => v.featured && v.aspect === '16:9') || VIDEO_PROJECTS[0];
  const teaserShorts = VIDEO_PROJECTS.filter((v) => v.aspect === '9:16').slice(0, 3);

  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#EAE7DF] bg-subtle-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCD7C9] text-xs font-mono text-[#68645E]">
              <span className="w-2 h-2 rounded-full bg-[#EE3B2B] animate-pulse"></span>
              Sports Videographer &bull; DFW, Texas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCD7C9] text-xs font-mono text-[#68645E]">
              <Trophy className="w-3.5 h-3.5 text-[#D4A359]" />
              Collab: Olympian Chris Huffins
            </span>
          </div>

          {/* Headline & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#121211] leading-[1.08]">
                Capturing <span className="italic font-normal">explosive</span> athletic motion.
              </h1>
              <p className="text-lg sm:text-2xl text-[#121211] font-medium leading-relaxed max-w-2xl">
                I&apos;m Nolan, 24 years old and working to capture you in the best and most explosive light.
              </p>
              <p className="text-base sm:text-lg text-[#524E48] font-light leading-relaxed max-w-2xl">
                Working with athletes far and wide, from track to baseball, I have you covered. Every detail in every light, let&apos;s bring the best out!
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121211] text-[#FAF8F5] text-sm font-semibold hover:bg-[#2B2926] transition-all shadow-sm"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#DCD7C9] text-[#121211] text-sm font-semibold hover:bg-[#F2EFE9] transition-all"
                >
                  <span>Book a Shoot</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8B877E]" />
                </Link>
              </div>
            </div>

            {/* Quick Spec Dossier */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#EAE7DF] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE1] text-xs font-mono text-[#7C776E]">
                <span>CORE SPECIFICATIONS</span>
                <span className="text-[#121211] font-semibold">2026 READY</span>
              </div>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#7C776E]">HIGH SPEED:</span>
                  <span className="font-semibold text-[#121211]">4K 120 FPS Slow-Mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C776E]">DISCIPLINES:</span>
                  <span className="font-semibold text-[#121211]">Track, Baseball, All Sports</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C776E]">POST-PRODUCTION:</span>
                  <span className="font-semibold text-[#121211]">Premiere &bull; CapCut &bull; Sound FX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C776E]">TURNAROUND:</span>
                  <span className="font-semibold text-[#121211]">&lt; 24-48h Game Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Featured Video Showpiece */}
          <div className="relative group rounded-3xl p-3 bg-white border border-[#DCD7C9] shadow-lg">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-black cursor-pointer"
              onClick={() => setActiveVideo(featuredVideo)}
            >
              <Image
                src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
                alt={featuredVideo.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30"></div>

              {/* Viewfinder Badges */}
              <div className="absolute top-4 inset-x-4 flex justify-between items-center text-xs font-mono text-white/90">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#EE3B2B] animate-pulse"></span>
                  <span>FEATURED PRODUCTION REEL</span>
                </div>
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span>{featuredVideo.duration}</span>
                </div>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-18 h-18 rounded-full bg-white/95 text-[#121211] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="absolute bottom-4 inset-x-4">
                <div className="bg-black/75 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-[#D4A359] uppercase tracking-wider block">
                      Client: Goon Squad Elites &bull; Track & Field Docuseries
                    </span>
                    <h2 className="text-white font-serif font-bold text-lg sm:text-xl">
                      {featuredVideo.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-white/80 self-start sm:self-auto px-3 py-1.5 rounded bg-white/10">
                    Click to Watch 4K Master &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Work Teaser Section */}
      <section className="py-20 md:py-28 border-b border-[#EAE7DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#EAE7DF] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7C776E] font-semibold block mb-1">
                Recent Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121211]">
                High-Speed Athletic Shorts
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121211] hover:text-[#EE3B2B] transition-colors"
            >
              <span>View Full Portfolio (10 Projects)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Featured Shorts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teaserShorts.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl border border-[#DCD7C9] overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-[9/13] bg-black overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/90 transition-colors"></div>

                  <div className="absolute top-3 inset-x-3 flex justify-between items-center text-[10px] font-mono text-white/90">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 uppercase tracking-wider text-[#D4A359]">
                      Client: {video.client}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                      {video.duration}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#121211] flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF8F5]/80 block">
                      {video.role}
                    </span>
                    <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-white flex items-center justify-between text-xs font-mono text-[#68645E]">
                  <span>4K 120FPS Slow-Mo</span>
                  <span className="text-[#121211] font-semibold group-hover:text-[#EE3B2B] transition-colors">
                    Watch Reel &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Baseball Spotlight Banner */}
      <section className="py-16 md:py-24 bg-[#F5F3EC] border-b border-[#EAE7DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCD7C9] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-rose-600 font-semibold block">
                Sport Focus &bull; Baseball Videography
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121211] tracking-tight">
                Pitching Mechanics & Bullpen Breakdowns
              </h2>
              <p className="text-[#524E48] text-sm sm:text-base font-light leading-relaxed">
                Explore specialized high-frame-rate baseball videography produced for <strong>Pitching With Witt</strong> (@pitchingwithw1tt), capturing hip-to-shoulder separation, lead leg blocks, and slow-motion release point details.
              </p>
              <div className="pt-2">
                <Link
                  href="/baseball"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121211] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2926] transition-colors"
                >
                  <span>Explore Baseball Videography</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1595210382266-2d0077c1f541?auto=format&fit=crop&w=600&q=80"
                alt="Baseball Pitching"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-[11px] font-mono">
                @pitchingwithw1tt &bull; 120 FPS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Call To Action Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7C776E] font-semibold">
            Ready For Your Next Shoot
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#121211] tracking-tight">
            Elevate your team, meet, or athletic brand.
          </h2>
          <p className="text-[#524E48] text-base sm:text-lg font-light leading-relaxed">
            Available for sports videography commissions, game day meet coverage, and recruitment reels across Texas and travel.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121211] text-[#FAF8F5] text-sm font-semibold hover:bg-[#2B2926] transition-all shadow-sm"
            >
              <span>Book Nolan Decker</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#DCD7C9] text-[#121211] text-sm font-semibold hover:bg-[#F2EFE9] transition-all"
            >
              <span>View Client Channels</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
