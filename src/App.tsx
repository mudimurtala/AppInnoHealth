import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  HeroSection,
  OurServices,
  HowWeWork,
  ImpactFocus,
  GovernanceAccountability,
  Partnerships,
  Footer,
  BlogList,
  FloatingBlogButton,
} from "./components/sections";

function AppContent() {
  return (
    <>
      <FloatingBlogButton />
      <div className="w-full pt-16">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <OurServices />
                <HowWeWork />
                <ImpactFocus />
                <GovernanceAccountability />
                <Partnerships />
              </>
            }
          />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


import { useEffect } from "react";

export function Sabilytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://sabilytics.vercel.app/script.js";
    script.setAttribute("data-site", "8sj835pw3yxz");
    script.setAttribute("data-domain", "innohealth.tech");
    document.head.appendChild(script);
  }, []);

  return null;
}