'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Check, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Realistic timecode clock based on current time + frames
    const interval = setInterval(() => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const ff = String(Math.floor((now.getMilliseconds() / 1000) * 24)).padStart(2, '0');
      setTimecode(`${hh}:${mm}:${ss}:${ff}`);
    }, 42);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      {/* Top Studio HUD status bar */}
      <div className="bg-[#121211] text-[#E5E1D7] text-[11px] font-mono py-1.5 px-4 sm:px-8 border-b border-[#282725] flex justify-between items-center tracking-wider">
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-[#EE3B2B] font-semibold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#EE3B2B] inline-block mr-1.5"></span>
            REC
          </span>
          <span className="text-[#8B877E] hidden md:inline">|</span>
          <span className="text-[#FAF8F5] hidden md:inline">4K 120FPS UHD</span>
          <span className="text-[#8B877E] hidden sm:inline">|</span>
          <span className="text-[#C6C2B8] hidden sm:inline">DFW, TX // WORLDWIDE</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-[#FAF8F5] font-mono tracking-widest">{timecode}</span>
          <div className="h-2.5 w-[1px] bg-[#3E3C38] hidden sm:block"></div>
          <span className="text-[#4ADE80] text-[10px] uppercase font-sans font-medium hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
            Available For Bookings
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E7E4DC]'
            : 'bg-[#FAF8F5] border-b border-[#EAE7DF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#" className="group flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded bg-[#121211] text-[#FAF8F5] flex items-center justify-center font-mono font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform">
              ND
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-tight text-[#121211] leading-none">
                Nolan Decker
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6760] mt-0.5">
                Sports Videographer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#4A4742]">
            <a href="#work" className="hover:text-[#121211] transition-colors py-1">
              Selected Work
            </a>
            <a href="#baseball" className="hover:text-[#121211] transition-colors py-1">
              Baseball
            </a>
            <a href="#clients" className="hover:text-[#121211] transition-colors py-1">
              Client Channels
            </a>
            <a href="#experience" className="hover:text-[#121211] transition-colors py-1">
              Experience
            </a>
            <a href="#about" className="hover:text-[#121211] transition-colors py-1">
              About
            </a>
            <a href="#toolkit" className="hover:text-[#121211] transition-colors py-1">
              Gear & Software
            </a>
            <a href="#inquiry" className="hover:text-[#121211] transition-colors py-1">
              Book Shoot
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-[#DCD7C9] bg-white text-[#2B2926] hover:bg-[#F2EFE9] transition-all shadow-xs"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#6B6760]" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <a
              href="#inquiry"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#121211] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2926] transition-colors shadow-sm"
            >
              <span>Book Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#E7E4DC] text-[#121211] bg-white hover:bg-[#F2EFE9]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE7DF] bg-[#FAF8F5] px-4 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-medium text-base text-[#2B2926]">
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                Selected Work
              </a>
              <a
                href="#baseball"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                Baseball & Pitching
              </a>
              <a
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                Client Channels & Work
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                Experience (Goon Squad)
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                About Nolan
              </a>
              <a
                href="#toolkit"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                Gear & Software
              </a>
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#F2EFE9]"
              >
                Book a Shoot
              </a>
            </div>

            <div className="pt-4 border-t border-[#E7E4DC] flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded border border-[#DCD7C9] bg-white text-xs font-mono font-medium text-[#2B2926]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4 text-[#6B6760]" />}
                {copied ? "Email Copied to Clipboard!" : PERSONAL_INFO.email}
              </button>
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded bg-[#121211] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-center"
              >
                <span>Initiate Booking Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
