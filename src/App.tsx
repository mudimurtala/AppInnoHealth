// Main App Component - Clean and Simple!
// All sections are now separate components in /components/sections/



import React, { useEffect, useRef, useState } from "react";
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
  BlogList
} from "./components/sections";

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
