// Main App Component - Clean and Simple!
// All sections are now separate components in /components/sections/

import {
  Navbar,
  HeroSection,
  LeadingInnovation,
  HealthcareSolutions,
  FingertipsSection,
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

      {/* Leading Healthcare Innovation - About section */}
      <LeadingInnovation />

      {/* Comprehensive Healthcare Solutions - Service cards */}
      <HealthcareSolutions />

      {/* Healthcare at Your Fingertips - Features */}
      <FingertipsSection />

      {/* Transforming Healthcare in Nigeria - Impact showcase */}
      <TransformingHealthcare />

      {/* Your Partner in Healthcare Excellence - Why choose us */}
      <PartnerExcellence />

      {/* Footer - Contact and links */}
      <Footer />
    </div>
  );
}
