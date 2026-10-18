'use client';

import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { YouTubeIcon, TikTokIcon, InstagramIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121211] text-[#FAF8F5] pt-16 pb-12 border-t border-[#282725]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#282725]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-[#FAF8F5] text-[#121211] flex items-center justify-center font-mono font-bold text-xs">
                ND
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-[#FAF8F5]">
                Nolan Decker
              </span>
            </div>

            <p className="text-sm text-[#9C978E] font-light leading-relaxed max-w-sm">
              Sports videographer, trackside cinematographer, and retention-focused content creator. Capturing elite human movement and producing platform-native video content.
            </p>

            <div className="flex items-center space-x-3 pt-1 text-xs font-mono text-[#D4A359]">
              <span>Official Media: Goon Squad Track & Field</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#8B877E] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#C6C2B8] font-light">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Nolan
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience (Goon Squad)
                </a>
              </li>
              <li>
                <a href="#socials" className="hover:text-white transition-colors">
                  Social Channels
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-white transition-colors">
                  Gear & Software
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white transition-colors">
                  Rate Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#8B877E] font-semibold">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-sm text-[#C6C2B8]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8B877E]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors font-mono text-xs">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B877E]" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors font-mono text-xs">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B877E]" />
                <span className="font-mono text-xs">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="pt-3 flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1C1B19] border border-[#2E2C28] flex items-center justify-center text-[#FAF8F5] hover:bg-[#EE3B2B] hover:border-[#EE3B2B] transition-colors p-2"
                title="Goon Squad Elites on YouTube"
              >
                <YouTubeIcon className="w-full h-full" />
              </a>
              <a
                href={PERSONAL_INFO.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1C1B19] border border-[#2E2C28] flex items-center justify-center text-[#FAF8F5] hover:bg-black hover:border-white transition-colors p-2"
                title="Goon Squad Elites on TikTok"
              >
                <TikTokIcon className="w-full h-full" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1C1B19] border border-[#2E2C28] flex items-center justify-center text-[#FAF8F5] hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 hover:border-transparent transition-all p-2"
                title="Pitching with Witt on Instagram"
              >
                <InstagramIcon className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8B877E] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Nolan Decker. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span>4K &bull; 120FPS &bull; PRORES</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C6C2B8] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
