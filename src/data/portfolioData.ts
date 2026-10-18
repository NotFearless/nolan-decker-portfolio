export interface VideoProject {
  id: string;
  youtubeId: string;
  title: string;
  platform: 'YouTube' | 'TikTok' | 'Instagram';
  category: 'all' | 'goon-squad' | 'vertical' | 'cinema';
  aspect: '16:9' | '9:16';
  duration: string;
  role: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  organizationType: string;
  period: string;
  location: string;
  badge: string;
  highlights: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Nolan Decker",
  title: "Sports Videographer & Short-Form Content Creator",
  location: "Aubrey / DFW, Texas",
  email: "nolan.decker01@gmail.com",
  phone: "(940) 594-2080",
  bioHeadline: "Documenting elite human performance at 120 frames per second.",
  bio: `I am a sports videographer and digital content creator specializing in high-velocity athletic cinematography, retention-engineered short-form edits, and documentary storytelling. 

Currently filming trackside for the Goon Squad Professional Combined Event Track & Field Team alongside Olympian Chris Huffins, I bridge the raw energy of high-stakes competition with modern social media pacing that commands attention. From high-frame-rate tracking and custom sound design to seamless color grading in Premiere Pro and After Effects, every frame is built to hook viewers within the first three seconds and keep them locked in.`,
  socials: {
    youtube: {
      handle: "@GoonSquadElites",
      url: "https://www.youtube.com/@GoonSquadElites",
      label: "YouTube Channel",
      subscribers: "Official Team Channel",
    },
    tiktok: {
      handle: "@gselites",
      url: "https://www.tiktok.com/@gselites",
      label: "TikTok Profile",
      subscribers: "Short-Form Sports Edits",
    },
    instagram: {
      handle: "@pitchingwithw1tt",
      url: "https://www.instagram.com/pitchingwithw1tt/",
      label: "Instagram",
      subscribers: "Athletic & Pitching Media",
    },
  },
  stats: [
    { label: "High-Speed Capture", value: "4K 120fps", desc: "Silky smooth slow-motion tracking" },
    { label: "Decathlon & Multi-Events", value: "10+ Events", desc: "Sprints, hurdles, jumps & throws" },
    { label: "Fast Social Turnaround", value: "< 24-48h", desc: "Same-meet & practice drops" },
    { label: "Post-Production Pipeline", value: "Full Stack", desc: "Filming, FX, Sound & Color" },
  ],
  toolkit: [
    { name: "Adobe Premiere Pro", category: "Editing & Rhythm Cut", level: "Expert" },
    { name: "Adobe After Effects", category: "Motion Graphics & Kinetic FX", level: "Advanced" },
    { name: "Adobe Photoshop", category: "Thumbnail & Cover Design", level: "Advanced" },
    { name: "Adobe Lightroom", category: "Color Grading & Stills", level: "Advanced" },
    { name: "CapCut Pro", category: "Native Short-Form & Sound Sync", level: "Expert" },
    { name: "Camera & Rig Operations", category: "Gimbal, High-Speed Tracking & Low Angles", level: "Expert" },
    { name: "Sound Design & Audio Mixing", category: "Impact Hits, Risers & Ambience", level: "Advanced" },
    { name: "Retention Strategy", category: "Algorithmic Pacing & Hook Optimization", level: "Expert" },
  ],
};

export const RESUME_EXPERIENCES: ExperienceItem[] = [
  {
    id: "goon-squad",
    role: "Videographer & Social Media Content Creator",
    company: "Goons Squad",
    organizationType: "Professional Combined Event Track & Field Team",
    period: "2026 – Present",
    location: "Trackside & Travel",
    badge: "Official Team Media",
    highlights: [
      "Film professional combined-event track & field athletes at intense daily practices, national/international competitions, and showcase events.",
      "Capture athlete highlights, high-speed slow-motion mechanics, behind-the-scenes moments, and championship victories for multi-platform distribution.",
      "Edit and produce high-retention short-form video content optimized specifically for TikTok, Instagram Reels, and YouTube Shorts.",
      "Work directly with elite world-class athletes and Olympic coaching staff, including Olympian and Coach Chris Huffins, to develop engaging sports content.",
      "Manage complete content pipelines from camera operation and gear rigging through sound design, color grading, and final publishing to scale the team's digital presence."
    ],
    skills: ["Sports Cinematography", "120fps Slow-Mo", "Olympian Collaboration", "Premiere Pro", "CapCut", "Sound Design", "Platform Growth"],
  },
  {
    id: "independent-creator",
    role: "Independent Content Creator",
    company: "Multi-Niche Video Creator",
    organizationType: "TikTok & YouTube Operations",
    period: "May 2023 – Present",
    location: "Remote / Digital",
    badge: "Short-Form Strategist",
    highlights: [
      "Create high-velocity short-form video content across multiple channels and niches with a strict focus on viewer retention, trend hijacking, and platform-native storytelling.",
      "Edit advanced video, speed ramping, beat matching, and graphic packages using Adobe Premiere Pro, After Effects, Photoshop, and Lightroom.",
      "Develop structured content calendars, optimize posting times and audio curves for individual algorithms, and track deep analytics to continuously boost watch time.",
      "Identify emerging audio trends and audience interests to engineer shareable, high-conversion visual moments."
    ],
    skills: ["Viral Hooks", "Audience Retention", "After Effects", "Trend Analysis", "A/B Testing", "Photoshop", "Content Calendars"],
  },
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "road-to-olympics-ep1",
    youtubeId: "RY1PTJdBYzU",
    title: "Road to the Olympics - EP.1",
    platform: "YouTube",
    category: "cinema",
    aspect: "16:9",
    duration: "14:22",
    role: "Cinematographer & Lead Editor",
    description: "The premiere episode documenting the Goon Squad decathletes as they endure punishing training sessions and technical masterclasses under Olympian Chris Huffins.",
    tags: ["Docuseries", "16:9 Cinema", "Track & Field", "Coach Chris Huffins", "4K"],
    featured: true,
  },
  {
    id: "grind-never-stops",
    youtubeId: "-C9oHPbIi2Y",
    title: "Grind Never Stops | Pole Vault & Hurdles",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:28",
    role: "Videographer & Sound Designer",
    description: "Raw slow-motion runway acceleration and vault plant mechanics with crisp athletic audio and kinetic sound hits.",
    tags: ["Pole Vault", "Hurdles", "120fps", "Slow Motion", "Sound FX"],
    featured: true,
  },
  {
    id: "edit-gets-better",
    youtubeId: "0hLouJmP_3g",
    title: "This Edit Gets Better Every Clip",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:35",
    role: "Short-Form Editor & Hook Strategist",
    description: "Multi-athlete compilation structured around escalating pacing, micro-transitions, and bass drops to maximize completion rate.",
    tags: ["Retention Edit", "High Jump", "Pacing", "Viral Reel"],
    featured: true,
  },
  {
    id: "touch-the-sky",
    youtubeId: "0jC1GJNTX40",
    title: "Touch The Sky | High Jump Bar Clearance",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:22",
    role: "Camera Operator & Colorist",
    description: "Low-angle tracking capturing the dramatic moment an athlete converts horizontal runway velocity into pure vertical lift.",
    tags: ["High Jump", "Low Angle", "Bar Flex", "Shorts"],
  },
  {
    id: "laws-of-physics",
    youtubeId: "9qaa5UOWuuQ",
    title: "Laws of Physics Who? | Slow-Mo Breakdown",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:30",
    role: "Cinematographer & Editor",
    description: "Deconstructing the Fosbury flop at high frame rate, emphasizing the split-second arch clearing the crossbar without a graze.",
    tags: ["Physics of Sport", "High Jump", "Slow Motion", "4K"],
  },
  {
    id: "tyrant-combined",
    youtubeId: "T8CZ6vDnrT0",
    title: "TYRANT | Combined Event Athleticism",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:25",
    role: "Editor & Motion FX",
    description: "Hard-hitting edit showcasing the explosive power demands required to compete across 10 decathlon disciplines.",
    tags: ["Decathlon Power", "Hard Cut", "Beat Match", "TikTok"],
  },
  {
    id: "cowgirl-erin",
    youtubeId: "WVmy0i4LoTY",
    title: "Cowgirl Erin | Athlete Spotlight",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:32",
    role: "Videographer & Storyteller",
    description: "Intimate practice highlight pairing focused athlete personality with rapid hurdle clearing and technical drill reps.",
    tags: ["Athlete Focus", "Hurdles", "BTS", "Reels"],
  },
  {
    id: "gravity-slowmo",
    youtubeId: "vMPnXnQS6C0",
    title: "Gravity in Slow Motion | High Jump Precision",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:29",
    role: "Cinematographer & Audio Mix",
    description: "Ultra-crisp visual study of airborne flight and back arch, paired with atmospheric sub-bass hits.",
    tags: ["Atmospheric", "Slow-Mo", "High Jump", "Sound Design"],
  },
  {
    id: "she-was-close",
    youtubeId: "xtRfCBPXsbI",
    title: "Decastar Championship Hurdles",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:34",
    role: "Live Meet Videographer",
    description: "Direct trackside perspective of high-stakes hurdle championship racing with authentic crowd roar and athlete emotion.",
    tags: ["Championship", "Decastar", "Live Meet", "Hurdles"],
  },
  {
    id: "goofy-ahh-track",
    youtubeId: "znU3wJ-JC0k",
    title: "Track & Field Speed & Energy Highlights",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:26",
    role: "Social Media Strategist",
    description: "High-retention social humor mixed with elite athletic prowess designed to connect with Gen-Z and track enthusiasts on TikTok.",
    tags: ["TikTok Native", "Relatable", "Track Culture", "Growth"],
  },
];
