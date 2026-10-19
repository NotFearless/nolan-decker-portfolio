'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Check, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const ff = String(Math.floor((now.getMilliseconds() / 1000) * 24)).padStart(2, '0');
      setTimecode(`${hh}:${mm}:${ss}:${ff}`);
    }, 42);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Selected Work', href: '/work' },
    { label: 'Baseball', href: '/baseball' },
    { label: 'Clients & Channels', href: '/clients' },
    { label: 'Experience & About', href: '/experience' },
    { label: 'Book Shoot', href: '/contact' },
  ];

  return (
    <>
      {/* Top Studio HUD status bar */}
      <div className="bg-[#121211] text-[#E5E1D7] text-[11px] font-mono py-1.5 px-4 sm:px-8 border-b border-[#282725] flex justify-between items-center tracking-wider">
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-[#EE3B2B] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#EE3B2B] inline-block mr-1.5 animate-pulse"></span>
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
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE7DF] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#121211] text-[#FAF8F5] flex items-center justify-center font-mono font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform">
              ND
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-tight text-[#121211] leading-none">
                Nolan Decker
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C776E] mt-0.5">
                Sports Videographer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links Tabs */}
          <nav className="hidden lg:flex items-center p-1 bg-[#F2EFE9] rounded-xl border border-[#E2DDD3] space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#121211] text-[#FAF8F5] shadow-xs'
                      : 'text-[#68645E] hover:text-[#121211] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-[#DCD7C9] bg-white text-[#2B2926] hover:bg-[#F2EFE9] transition-all shadow-xs"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#6B6760]" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2926] transition-colors shadow-sm"
            >
              <span>Book Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#E7E4DC] text-[#121211] bg-white hover:bg-[#F2EFE9]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE7DF] bg-[#FAF8F5] px-4 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-2 font-medium text-sm text-[#2B2926]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#121211] text-[#FAF8F5] font-semibold'
                        : 'hover:bg-[#F2EFE9]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E7E4DC] flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#DCD7C9] bg-white text-xs font-mono font-medium text-[#2B2926]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4 text-[#6B6760]" />}
                {copied ? "Email Copied to Clipboard!" : PERSONAL_INFO.email}
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#121211] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-center"
              >
                <span>Initiate Booking Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
