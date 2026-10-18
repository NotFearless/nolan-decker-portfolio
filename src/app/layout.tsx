import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nolan Decker | Sports Videographer & Content Creator",
  description:
    "Official videographer for Goon Squad Professional Combined Event Track & Field Team. Specializing in high-octane sports cinematography, 120fps slow-motion capture, and high-retention short-form video storytelling.",
  keywords: [
    "Nolan Decker",
    "Sports Videographer",
    "Goon Squad",
    "Track and Field Videographer",
    "Chris Huffins",
    "Content Creator",
    "Video Editor",
    "Texas Videographer",
    "Dallas Videographer",
    "TikTok Editor",
    "Sports Edits",
  ],
  authors: [{ name: "Nolan Decker" }],
  creator: "Nolan Decker",
  openGraph: {
    title: "Nolan Decker | Sports Videographer & Content Creator",
    description:
      "Capturing elite athletic motion, 120fps slow-mo, and high-retention video stories for Goon Squad and professional athletes.",
    type: "website",
    locale: "en_US",
    siteName: "Nolan Decker Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nolan Decker | Sports Videographer & Content Creator",
    description:
      "Official videographer for Goon Squad Professional Track & Field Team. 4K high-speed capture, short-form editing, and athlete storytelling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans bg-[#FAF8F5] text-[#121211] antialiased selection:bg-[#121211] selection:text-[#FAF8F5]`}
      >
        {children}
      </body>
    </html>
  );
}
