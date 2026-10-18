'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { VideoProject } from '../data/portfolioData';

interface VideoModalProps {
  video: VideoProject | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const isVertical = video.aspect === '9:16';
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  const directUrl = isVertical
    ? `https://www.youtube.com/shorts/${video.youtubeId}`
    : `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0E0E0D]/90 backdrop-blur-md animate-fade-in">
      {/* Background backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div
        className={`relative z-10 w-full bg-[#181817] text-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden border border-[#2E2D2A] flex flex-col transition-all max-h-[95vh] ${
          isVertical ? 'max-w-xl' : 'max-w-5xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#1F1E1C] border-b border-[#2C2A27]">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EE3B2B] animate-pulse shrink-0"></span>
            <div className="truncate">
              <span className="text-xs font-mono text-[#D4A359] uppercase tracking-wider block">
                {video.aspect === '9:16' ? 'Vertical Short (9:16)' : 'Cinematic Feature (16:9)'}
              </span>
              <h3 className="text-sm font-semibold truncate text-[#FAF8F5]">
                {video.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#2B2926] hover:bg-[#3E3C38] text-[#C6C2B8] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black flex items-center justify-center">
          {isVertical ? (
            <div className="w-full flex justify-center py-4 bg-[#111110]">
              <div className="relative w-[340px] max-w-[85vw] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-[#33312D]">
                <iframe
                  src={embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={embedUrl}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Video Metadata & Credits Footer */}
        <div className="p-5 sm:p-6 bg-[#181817] space-y-4 overflow-y-auto max-h-[30vh]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#9C978E] uppercase tracking-wider">
                Role & Production
              </span>
              <p className="text-sm font-medium text-[#FAF8F5]">
                {video.role} • <span className="text-[#D4A359]">Goon Squad Media</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2B2926] hover:bg-[#3E3C38] text-xs font-medium text-[#FAF8F5] transition-colors border border-[#3E3C38]"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p className="text-sm text-[#C6C2B8] leading-relaxed">
            {video.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {video.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#242321] text-[#A8A49C] border border-[#33312E]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
