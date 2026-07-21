import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sabilytics } from "./components/sections/Sabilytics";
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
      <Sabilytics />
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
