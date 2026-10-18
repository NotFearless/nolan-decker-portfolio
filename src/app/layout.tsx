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
  title: "Nolan Decker | Sports Videographer",
  description:
    "Sports videographer specializing in high-speed 4K 120fps athletic cinematography, game day highlights, and athlete storytelling. Official videographer for Goon Squad Professional Combined Event Track & Field Team.",
  keywords: [
    "Nolan Decker",
    "Sports Videographer",
    "Texas Sports Videographer",
    "DFW Sports Videographer",
    "Track and Field Videographer",
    "Baseball Videographer",
    "Athlete Highlights",
    "Goon Squad",
    "Chris Huffins",
    "4K 120fps Sports",
  ],
  authors: [{ name: "Nolan Decker" }],
  creator: "Nolan Decker",
  openGraph: {
    title: "Nolan Decker | Sports Videographer",
    description:
      "High-speed sports videography capturing explosive athletic performance across all sports. Official videographer for Goon Squad Track & Field.",
    type: "website",
    locale: "en_US",
    siteName: "Nolan Decker | Sports Videographer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nolan Decker | Sports Videographer",
    description:
      "Capturing athletic speed, power, and competition in 4K 120fps. Official videographer for Goon Squad Track & Field.",
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
