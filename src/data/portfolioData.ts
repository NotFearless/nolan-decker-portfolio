export interface VideoProject {
  id: string;
  youtubeId: string;
  title: string;
  client: string;
  platform: 'YouTube' | 'TikTok' | 'Instagram';
  category: 'all' | 'client-work' | 'vertical' | 'cinema';
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
  title: "Sports Videographer",
  location: "Aubrey / DFW, Texas",
  email: "nolan.decker01@gmail.com",
  phone: "(940) 594-2080",
  bioHeadline: "I'm Nolan, 24 years old and working to capture you in the best and most explosive light.",
  bio: `I'm Nolan, 24 years old and working to capture you in the best and most explosive light. Working with athletes far and wide, from track to baseball, I have you covered. Every detail in every light, let's bring the best out!`,
  clients: [
    {
      name: "Goon Squad Elites",
      platform: "YouTube",
      handle: "@GoonSquadElites",
      url: "https://www.youtube.com/@GoonSquadElites",
      role: "Lead Videographer & Editor",
      description: "Client channel featuring the 'Road to the Olympics' docuseries, combined-event meet coverage, and athlete vlogs filmed in 4K.",
    },
    {
      name: "Goon Squad Elites",
      platform: "TikTok",
      handle: "@gselites",
      url: "https://www.tiktok.com/@gselites",
      role: "Sports Videographer & Short-Form Editor",
      description: "Client TikTok channel featuring daily high-speed 120fps hurdles, pole vault, high jump, and training highlights.",
    },
    {
      name: "Pitching With Witt",
      platform: "Instagram",
      handle: "@pitchingwithw1tt",
      url: "https://www.instagram.com/pitchingwithw1tt/",
      role: "Videographer & Content Creator",
      description: "Client Instagram featuring pitching mechanics, throwing drills, biomechanics breakdowns, and athletic training reels.",
    },
  ],
  stats: [
    { label: "High-Speed Capture", value: "4K 120fps", desc: "Ultra smooth slow-motion action tracking" },
    { label: "Athletic Disciplines", value: "All Sports", desc: "Track, baseball, speed & conditioning" },
    { label: "Fast Turnaround", value: "< 24-48h", desc: "Rapid game day and meet drops" },
    { label: "End-to-End Pipeline", value: "Full Stack", desc: "Filming, Camera Rigging, Sound & Color" },
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
    badge: "Official Team Videographer",
    highlights: [
      "Film professional combined-event track & field athletes at intensive practices, training blocks, and national/international competitions.",
      "Capture athlete highlights, high-speed slow-motion mechanics, behind-the-scenes footage, and competition moments.",
      "Edit and produce dynamic short-form sports video content optimized for TikTok, Instagram, and other social platforms.",
      "Manage sports content end-to-end from filming and camera operation through final editing, color grading, and posting to grow the team's presence.",
      "Work directly with professional athletes and coaching staff, including Olympian and coach Chris Huffins, to develop engaging sports content."
    ],
    skills: ["Sports Videography", "120fps Slow-Mo", "Olympian Collaboration", "Premiere Pro", "CapCut", "Sound Design", "Athletic Action Tracking"],
  },
  {
    id: "independent-creator",
    role: "Independent Content Creator",
    company: "Sports & Video Creator",
    organizationType: "TikTok & YouTube Operations",
    period: "May 2023 – Present",
    location: "Remote / On-Location",
    badge: "Sports Video Creator",
    highlights: [
      "Create high-energy short-form sports video content with a focus on viewer retention, pacing, and platform-native storytelling.",
      "Edit fast-paced sports videos, speed ramps, sound effects, and graphics using Premiere Pro, After Effects, Photoshop, and Lightroom.",
      "Develop content schedules, optimize posting strategies, and analyze engagement metrics to maximize audience reach and watch time.",
      "Identify emerging visual trends to create engaging, shareable athletic content."
    ],
    skills: ["Sports Video Editing", "Premiere Pro", "After Effects", "Sound Effects", "Photoshop", "Lightroom", "Audience Engagement"],
  },
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "road-to-olympics-ep1",
    youtubeId: "RY1PTJdBYzU",
    title: "Road to the Olympics - EP.1",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "cinema",
    aspect: "16:9",
    duration: "14:22",
    role: "Lead Videographer & Editor",
    description: "Docuseries episode filmed for Goon Squad documenting elite decathletes enduring grueling training sessions under Olympic coach Chris Huffins.",
    tags: ["Docuseries", "16:9 Cinema", "Track & Field", "Coach Chris Huffins", "4K 120fps"],
    featured: true,
  },
  {
    id: "grind-never-stops",
    youtubeId: "-C9oHPbIi2Y",
    title: "Grind Never Stops | Pole Vault & Hurdles",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:28",
    role: "Sports Videographer & Editor",
    description: "120fps slow-motion runway plant and hurdle clearing shot trackside with heavy bass impact sound design.",
    tags: ["Pole Vault", "Hurdles", "120fps", "Slow Motion", "Sports Edit"],
    featured: true,
  },
  {
    id: "edit-gets-better",
    youtubeId: "0hLouJmP_3g",
    title: "This Edit Gets Better Every Clip",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:35",
    role: "Sports Videographer & Editor",
    description: "Escalating highlight reel with rhythm-matched cuts and sound design showcasing elite high jump and sprint form.",
    tags: ["High Jump", "Sports Highlight", "Rhythm Cut", "Sound FX"],
    featured: true,
  },
  {
    id: "touch-the-sky",
    youtubeId: "0jC1GJNTX40",
    title: "Touch The Sky | High Jump Bar Clearance",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:22",
    role: "Camera Operator & Editor",
    description: "Low-angle action tracking capturing explosive takeoff and bar clearance at full speed and slow motion.",
    tags: ["High Jump", "Low Angle", "Explosive Power", "Action Tracking"],
  },
  {
    id: "laws-of-physics",
    youtubeId: "9qaa5UOWuuQ",
    title: "Laws of Physics Who? | Slow-Mo Breakdown",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:30",
    role: "Sports Videographer",
    description: "High-frame-rate capture highlighting the split-second arch and airborne suspension of multi-event athletes.",
    tags: ["High Jump", "Slow Motion", "4K", "Sports Physics"],
  },
  {
    id: "tyrant-combined",
    youtubeId: "T8CZ6vDnrT0",
    title: "TYRANT | Combined Event Athleticism",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:25",
    role: "Sports Videographer & Editor",
    description: "High-energy athletic edit synced to heavy beat drops highlighting raw strength across decathlon disciplines.",
    tags: ["Decathlon", "Beat Match", "High Energy", "Sports Edit"],
  },
  {
    id: "cowgirl-erin",
    youtubeId: "WVmy0i4LoTY",
    title: "Cowgirl Erin | Athlete Spotlight",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:32",
    role: "Videographer & Storyteller",
    description: "Athlete highlight combining candid practice interaction with explosive hurdle reps on the track.",
    tags: ["Athlete Focus", "Hurdles", "BTS", "Trackside"],
  },
  {
    id: "gravity-slowmo",
    youtubeId: "vMPnXnQS6C0",
    title: "Gravity in Slow Motion | High Jump Precision",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:29",
    role: "Cinematographer & Audio Mix",
    description: "Crisp visual study of airborne flight and back arch, paired with atmospheric sub-bass hits.",
    tags: ["Atmospheric", "Slow-Mo", "High Jump", "Sound Design"],
  },
  {
    id: "she-was-close",
    youtubeId: "xtRfCBPXsbI",
    title: "Decastar Championship Hurdles",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:34",
    role: "Live Meet Videographer",
    description: "Trackside coverage of high-stakes championship hurdle racing with authentic crowd roar and athlete emotion.",
    tags: ["Championship", "Decastar", "Live Meet", "Hurdles"],
  },
  {
    id: "goofy-ahh-track",
    youtubeId: "znU3wJ-JC0k",
    title: "Track & Field Speed & Energy Highlights",
    client: "Goon Squad Elites",
    platform: "YouTube",
    category: "vertical",
    aspect: "9:16",
    duration: "0:26",
    role: "Videographer & Editor",
    description: "High-energy sports highlights capturing team camaraderie, high-intensity training, and speed.",
    tags: ["High Energy", "Track Culture", "Athlete Highlights"],
  },
];
