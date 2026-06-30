import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  WebinarAnnouncementBar,
  WebinarLandingPage,
} from "./components/sections";

function AppContent() {
  const location = useLocation();

  // hide the announcement bar on the dedicated webinar page
  const showAnnouncement = location.pathname !== "/webinar";

  return (
    <>
      {showAnnouncement && <WebinarAnnouncementBar />}
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
          <Route path="/webinar" element={<WebinarLandingPage />} />
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
