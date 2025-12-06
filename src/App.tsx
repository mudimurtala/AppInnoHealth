// Main App Component - Clean and Simple!
// All sections are now separate components in /components/sections/

import {
  Navbar,
  HeroSection,
  OurServices,
  HowWeWork,
  ImpactFocus,
  TransformingHealthcare,
  PartnerExcellence,
  Footer
} from "./components/sections";

export default function App() {
  return (
    <div className="w-full">
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

      {/* Transforming Healthcare in Nigeria - Impact showcase */}
      <TransformingHealthcare />

      {/* Your Partner in Healthcare Excellence - Why choose us */}
      <PartnerExcellence />

      {/* Footer - Contact and links */}
      <Footer />
    </div>
  );
}
