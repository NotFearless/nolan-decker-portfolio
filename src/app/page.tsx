'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import BaseballSection from '../components/BaseballSection';
import SocialHub from '../components/SocialHub';
import ResumeExperience from '../components/ResumeExperience';
import AboutSection from '../components/AboutSection';
import ToolkitSection from '../components/ToolkitSection';
import InquiryEstimator from '../components/InquiryEstimator';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';
import { VideoProject } from '../data/portfolioData';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#121211] flex flex-col selection:bg-[#121211] selection:text-[#FAF8F5]">
      {/* Sticky Studio HUD & Navigation */}
      <Navbar />

      {/* Hero Showcase with Viewfinder HUD & Featured Reel */}
      <Hero onPlayVideo={(video) => setActiveVideo(video)} />

      {/* Selected Video Works (Filterable 9:16 and 16:9) */}
      <WorkSection onSelectVideo={(video) => setActiveVideo(video)} />

      {/* Dedicated Baseball & Pitching With Witt Section */}
      <BaseballSection />

      {/* Client Channels Hub: YouTube, TikTok, Instagram */}
      <SocialHub onPlayVideo={(video) => setActiveVideo(video)} />

      {/* Resume Dossier: Goon Squad & Independent Content Creator */}
      <ResumeExperience />

      {/* About Nolan Decker */}
      <AboutSection />

      {/* Gear, Software & Production Craft */}
      <ToolkitSection />

      {/* Interactive Shoot Configurator & Rate Estimator */}
      <InquiryEstimator />

      {/* Footer & Direct Contact */}
      <Footer />

      {/* Responsive Theater Video Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </main>
  );
}
