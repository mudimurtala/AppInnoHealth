import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "../../brand.css";

const TEAM_MEMBERS = [
  {
    name: "Nasir Yusuf",
    title: "Co-Founder & Chief Executive Officer (CEO)",
    bio: "Provides strategic leadership and drives InnoHealth’s vision to improve maternal and child healthcare through technology, partnerships, and innovation.",
    location: "Kaduna State",
    image: "/nasir-yusuf-ahmad.webp",
  },
  {
    name: "Yusuf Hamisu",
    title: "Co-Founder & Senior Programme Officer",
    bio: "Leads the design and implementation of maternal and child health programmes, coordinating field activities, partners, and community engagement.",
    location: "Katsina State",
    image: "/yusuf-hamisu.webp",
  },
  {
    name: "Mudi Murtala",
    title: "Chief Technology Officer (CTO)",
    bio: "Oversees the development of InnoHealth’s digital health platforms, ensuring secure, scalable, and cost-effective technology solutions for public health delivery.",
    location: "Katsina State",
    image: "/mudi-murtala-two.webp",
  },
  {
    name: "David Elibe",
    title: "Communications Manager",
    bio: "Manages InnoHealth’s brand, digital presence, and media engagement, ensuring clear communication with partners, donors, and the public.",
    location: "Katsina State",
    image: "/david-elibe.webp",
  },
  {
    name: "Alamin Ahmad",
    title: "Backend Engineer",
    bio: "Builds and maintains the server-side systems that power InnoHealth’s digital platforms, ensuring reliability, data security, and system performance.",
    location: "Katsina State",
    image: "/alamin-ahmad.webp",
  },
  {
    name: "Maryam Muhammad",
    title: "Project Manager",
    bio: "Coordinates project planning, timelines, and team collaboration to ensure health programmes and digital solutions are delivered on time and to standard.",
    location: "Kaduna State",
    image: "/maryam-muhammad.webp",
  },
  {
    name: "Ayuba Amadi",
    title: "Grants & Resource Mobilisation Officer",
    bio: "Identifies funding opportunities, manages grant applications, and builds partnerships to support sustainable health and technology initiatives.",
    location: "Kaduna State",
    image: "/ayuba-amadi.webp",
  },
  {
    name: "Winnie Mark",
    title: "Monitoring & Evaluation Officer",
    bio: "Tracks programme performance, analyses impact data, and supports evidence-based decision-making to improve health outcomes.",
    location: "Kaduna State",
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
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-2 sm:px-4 overflow-x-auto">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-8 snap-x snap-mandatory overflow-x-auto pb-2"
          style={{ scrollBehavior: 'smooth', minWidth: '100%' }}
          onScroll={handleScroll}
        >
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              style={{
                background: 'linear-gradient(135deg, #0B0F39 0%, #2A3558 100%)',
                borderRadius: '24px',
                boxShadow: '0 25px 60px rgba(60, 115, 255, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                maxWidth: 370,
                minWidth: 270,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                fontFamily: 'Comfortaa, cursive',
                marginBottom: 8,
                marginTop: 8,
              }}
              className="flex-shrink-0 snap-center team-carousel-card"
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
              <div
                style={{
                  width: 96,
                  height: 96,
                  marginBottom: 16,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid var(--brand-avatar-border)',
                  background: 'var(--brand-avatar-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    width: '100%',
                    height: '100%',
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{ fontFamily: 'Comfortaa, cursive', fontWeight: 700, fontSize: 18, color: '#00E5CC', marginBottom: 4 }}>{member.name}</div>
              <div style={{ fontFamily: 'Comfortaa, cursive', color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 8 }}>{member.title}</div>
              <div style={{ fontFamily: 'Comfortaa, cursive', color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 8 }}>{member.bio}</div>
              <div style={{ fontFamily: 'Comfortaa, cursive', color: '#00E5CC', fontSize: 13, marginTop: 6 }}>📍 Location: {member.location}</div>
            </div>
          ))}
          {/* Add left and right-side padding for mobile spacing */}
          <div className="block md:hidden" style={{ minWidth: 16, height: 1 }} />
          <div className="block md:hidden" style={{ minWidth: 16, height: 1 }} />
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
