// Main App Component - Clean and Simple!
// All sections are now separate components in /components/sections/



import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  HeroSection,
  OurServices,
  HowWeWork,
  ImpactFocus,
  GovernanceAccountability,
  Partnerships,
  Footer
} from "./components/sections";
import confetti from "canvas-confetti";


export default function App() {
  const [showBanner, setShowBanner] = useState(true);
  const confettiInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showBanner) {
      // Start continuous confetti
      confettiInterval.current = setInterval(() => {
        confetti({
          particleCount: 60,
          spread: 120,
          origin: { y: 0.2 },
          zIndex: 99999,
          colors: ["#00E5CC", "#3C73FF", "#fff"],
        });
      }, 700);
    } else if (confettiInterval.current) {
      clearInterval(confettiInterval.current);
    }
    return () => {
      if (confettiInterval.current) clearInterval(confettiInterval.current);
    };
  }, [showBanner]);

  return (
    <div className="w-full">
      {/* Launch Banner */}
      {showBanner && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 10000,
            background: "linear-gradient(90deg, #00E5CC 0%, #3C73FF 100%)",
            color: "#fff",
            textAlign: "center",
            fontFamily: "Comfortaa, Poppins, sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 4vw, 1.35rem)',
            letterSpacing: 1,
            padding: '0.9rem 0.5rem 0.9rem 0.5rem',
            boxShadow: "0 4px 24px 0 rgba(60,115,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: 'wrap',
            minHeight: 60,
          }}
        >
          <span role="img" aria-label="party popper" style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)', marginRight: 8 }}>🎉</span>
          <span style={{ flex: 1, minWidth: 0 }}>InnoHealth Africa Technology is officially launched!</span>
          <button
            onClick={() => setShowBanner(false)}
            style={{
              marginLeft: 12,
              background: "#0B0F39",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.5rem 1.2rem",
              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              boxShadow: "0 2px 8px 0 rgba(13,19,57,0.10)",
            }}
          >
            Close
          </button>
        </div>
      )}
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section - Main banner with company tagline */}
      <HeroSection />
      {/* Our Services - Service cards carousel */}
      <OurServices />
      {/* How We Work - Hybrid model and governance */}
      <HowWeWork />
      {/* Impact Focus - Our impact goals */}
      <ImpactFocus />
      {/* Governance & Accountability */}
      <GovernanceAccountability />
      {/* Partnerships - Our collaborators */}
      <Partnerships />
      {/* Footer - Contact and links */}
      <Footer />
    </div>
  );
}
