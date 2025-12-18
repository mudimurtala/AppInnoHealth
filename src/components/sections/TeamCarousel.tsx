import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "../../brand.css";

const TEAM_MEMBERS = [
  {
    name: "Nasir Yusuf",
    title: "Co-Founder & Chief Executive Officer (CEO)",
    // bio and location removed
    image: "/nasir-yusuf-ahmad.webp",
  },
  {
    name: "Yusuf Hamisu",
    title: "Co-Founder & Senior Programme Officer",
    // bio and location removed
    image: "/yusuf-hamisu.webp",
  },
  {
    name: "Mudi Murtala",
    title: "Chief Technology Officer (CTO)",
    // bio and location removed
    image: "/mudi-murtala-two.webp",
  },
  {
    name: "David Elibe",
    title: "Communications Manager",
    // bio and location removed
    image: "/david-elibe.webp",
  },
  {
    name: "Alamin Ahmad",
    title: "Backend Engineer",
    // bio and location removed
    image: "/alamin-ahmad.webp",
  },
  {
    name: "Maryam Muhammad",
    title: "Project Manager",
    // bio and location removed
    image: "/maryam-muhammad.webp",
  },
  {
    name: "Ayuba Amadi",
    title: "Grants & Resource Mobilisation Officer",
    // bio and location removed
    image: "/ayuba-amadi.webp",
  },
  {
    name: "Winnie Mark",
    title: "Monitoring & Evaluation Officer",
    // bio and location removed
    image: "/winnie-mark.webp",
  },
];


const CARD_WIDTH = 370;
const CARD_GAP = 32;





export const TeamCarousel: React.FC = () => {

  // Infinite carousel logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 370 + 32; // Card width + gap

  // Scroll to the current card on mount and when virtualIndex changes
  // No-op: no need to scroll to center on mount

  // On scroll, update virtualIndex if user scrolls to the ends (reset to middle for endless effect)
  // No special scroll logic needed
  const handleScroll = () => {};

  // Optional: scroll left/right by one card
  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    }
  };
  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    }
  };

  // Inline style fallback for brand colors and fonts
  const brandVars = {
    '--brand-primary': '#1D32F2',
    '--brand-accent': '#3C73FF',
    '--brand-bg': '#fff',
    '--brand-card-border': '#B5CCFF',
    '--brand-card-shadow': '0 4px 24px 0 rgba(44, 62, 80, 0.10)',
    '--brand-card-radius': '1rem',
    '--brand-font-main': 'Poppins, system-ui, sans-serif',
    '--brand-font-alt': 'Comfortaa, cursive',
    '--brand-text-dark': '#0B0F39',
    '--brand-text-accent': '#3C73FF',
    '--brand-text-primary': '#1D32F2',
    '--brand-card-bg': '#fff',
    '--brand-avatar-border': '#1D32F2',
    '--brand-avatar-bg': '#B5CCFF',
  } as React.CSSProperties;

  return (
    <div
      style={brandVars}
      className="w-full flex flex-col items-center py-6 sm:py-8 bg-[var(--brand-bg)] rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
    >
      <div className="flex items-center justify-between w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-4 sm:mb-6 px-2 sm:px-4">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          style={{ background: 'var(--brand-primary)', color: '#fff', borderRadius: '9999px', padding: 8, border: 'none' }}
        >
          <ChevronLeftIcon className="w-7 h-7" style={{ color: '#fff' }} />
        </button>
        <div style={{ width: 32 }} />
        <button
          aria-label="Next"
          onClick={handleNext}
          style={{ background: 'var(--brand-primary)', color: '#fff', borderRadius: '9999px', padding: 8, border: 'none' }}
        >
          <ChevronRightIcon className="w-7 h-7" style={{ color: '#fff' }} />
        </button>
      </div>
      <div className="w-full px-2 sm:px-4 overflow-x-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-8 snap-x snap-mandatory overflow-x-auto pb-2"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={handleScroll}
        >
          {/* Left-side spacer for symmetry */}
          <div style={{ width: 24, minWidth: 24, flexShrink: 0 }} />
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex-shrink-0 team-carousel-card relative overflow-hidden snap-start"
              style={{
                borderRadius: '24px',
                boxShadow: '0 25px 60px rgba(60, 115, 255, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                maxWidth: 370,
                minWidth: 270,
                width: 320,
                aspectRatio: '3/4',
                marginBottom: 8,
                marginTop: 8,
                fontFamily: 'Comfortaa, cursive',
              }}
            >
              {/* Responsive mobile card width only for mobile view */}
              <style>{`
                @media (max-width: 640px) {
                  .team-carousel-card {
                    width: 90vw !important;
                    max-width: 90vw !important;
                  }
                }
              `}</style>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                  zIndex: 1,
                  transition: 'transform 0.3s',
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.1) 100%)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)', marginBottom: 2 }}>{member.name}</div>
                <div style={{ color: '#00E5CC', fontSize: 14, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{member.title}</div>
              </div>
            </div>
          ))}
          {/* Right-side spacer to ensure last card is fully visible on all screens */}
          <div style={{ width: 100, minWidth: 100, flexShrink: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
