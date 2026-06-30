import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

// Speaker images - using the webinar images as speaker/topic showcase
const speakerImages = [
  {
    src: "/images/webinar/image1.jpeg",
    title: "Expert Speaker 1",
    role: "Maternal Health Specialist",
  },
  {
    src: "/images/webinar/image2.jpeg",
    title: "Expert Speaker 2",
    role: "Public Health Leader",
  },
  {
    src: "/images/webinar/image3.jpeg",
    title: "Expert Speaker 3",
    role: "Community Health Officer",
  },
  {
    src: "/images/webinar/image4.jpeg",
    title: "Expert Speaker 4",
    role: "Health Technology Innovator",
  },
  {
    src: "/images/webinar/image5.jpeg",
    title: "Expert Speaker 5",
    role: "Policy & Implementation Expert",
  },
];

export default function WebinarLandingPage() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate countdown
  useEffect(() => {
    const calculateCountdown = () => {
      const webinarDate = new Date("2026-07-04T10:00:00Z").getTime();
      const now = new Date().getTime();
      const timeRemaining = webinarDate - now;

      if (timeRemaining <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLive: true,
        });
      } else {
        setCountdown({
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
          seconds: Math.floor((timeRemaining / 1000) % 60),
          isLive: false,
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % speakerImages.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + speakerImages.length) % speakerImages.length,
    );
  };

  const registrationLink = "https://forms.gle/fDdp4hNjgfZKfr317"; // Google Form for registration

  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  const sectionPadding = isMobile ? "28px 16px" : "60px 24px";
  const heroPadding = isMobile ? "100px 16px 40px" : "120px 24px 60px";

  return (
    <div style={{ background: "#F8FAFF", minHeight: "100vh" }}>
      <style>{`
        @keyframes secondsBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.985); }
        }
        @keyframes countdownGlow {
          0%, 100% { box-shadow: 0 10px 25px rgba(60, 115, 255, 0.16); }
          50% { box-shadow: 0 14px 34px rgba(0, 229, 204, 0.22); }
        }
      `}</style>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0B0F39 0%, #1a2156 50%, #2A3558 100%)",
          padding: heroPadding,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 229, 204, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "-50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(60, 115, 255, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <motion.a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              background: "rgba(0, 229, 204, 0.15)",
              border: "1px solid #00E5CC",
              borderRadius: "50px",
              padding: "8px 16px",
              marginBottom: "16px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 229, 204, 0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 229, 204, 0.15)";
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#00E5CC",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              🎯 Live Webinar Registration
            </span>
          </motion.a>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontSize: isMobile ? "28px" : "56px",
              fontWeight: 700,
              color: "white",
              marginBottom: "20px",
              lineHeight: 1.15,
              background: "linear-gradient(135deg, #ffffff 0%, #00E5CC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Reducing Maternal Mortality in Northern Nigeria
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.85)",
              marginBottom: "32px",
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            Join leading maternal health experts and innovators as we explore
            cutting-edge solutions, successful interventions, and actionable
            strategies to reduce maternal mortality and improve health outcomes
            in underserved communities across Northern Nigeria.
          </motion.p>

          {/* Key Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, minmax(0, 1fr))",
              gap: "12px",
              marginBottom: "32px",
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {[
              {
                icon: Calendar,
                title: "Saturday, 4 July 2026",
                detail: "Webinar date",
              },
              { icon: Clock, title: "10:00 AM UTC", detail: "Start time" },
              {
                icon: Users,
                title: "Microsoft Teams • Free",
                detail: "Live online session",
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 16px",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, rgba(0, 229, 204, 0.1), rgba(60, 115, 255, 0.08))",
                    border: "1px solid rgba(0, 229, 204, 0.25)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 16px rgba(0, 229, 204, 0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "12px",
                      background: "rgba(0, 229, 204, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: "1px solid rgba(0, 229, 204, 0.25)",
                    }}
                  >
                    <IconComponent size={18} color="#00E5CC" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#fff",
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        color: "#B5CCFF",
                        opacity: 0.9,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Countdown */}
          {!countdown.isLive ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 229, 204, 0.22)",
                borderRadius: "24px",
                padding: isMobile ? "18px" : "24px",
                marginBottom: "32px",
                animation: "countdownGlow 4s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#B5CCFF",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "16px",
                }}
              >
                Time Until Webinar Starts
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "repeat(2, minmax(0, 1fr))"
                    : "repeat(4, minmax(0, 1fr))",
                  gap: isMobile ? "10px" : "14px",
                }}
              >
                {countdownItems.map((item) => {
                  const isSeconds = item.label === "Seconds";
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "relative",
                        background: isSeconds
                          ? "linear-gradient(180deg, rgba(0, 229, 204, 0.18), rgba(60, 115, 255, 0.16))"
                          : "rgba(60, 115, 255, 0.12)",
                        border: isSeconds
                          ? "1px solid rgba(0, 229, 204, 0.5)"
                          : "1px solid rgba(60, 115, 255, 0.45)",
                        borderRadius: "18px",
                        padding: isMobile ? "14px 10px" : "18px 14px",
                        textAlign: "center",
                        boxShadow: isSeconds
                          ? "0 10px 22px rgba(0, 229, 204, 0.16)"
                          : "0 8px 18px rgba(60, 115, 255, 0.14)",
                        overflow: "hidden",
                      }}
                    >
                      {isSeconds && (
                        <span
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "9999px",
                            background: "#00E5CC",
                            boxShadow: "0 0 0 6px rgba(0, 229, 204, 0.14)",
                            animation: "secondsBlink 1s ease-in-out infinite",
                          }}
                        />
                      )}
                      <div
                        style={{
                          fontSize: isMobile ? "30px" : "40px",
                          fontWeight: 700,
                          color: isSeconds ? "#ffffff" : "#00E5CC",
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: 1,
                          marginBottom: "4px",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: 500,
                          color: isSeconds ? "#ffffff" : "#B5CCFF",
                          fontFamily: "'Inter', sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "rgba(0, 229, 204, 0.15)",
                border: "2px solid #00E5CC",
                borderRadius: "20px",
                padding: "24px",
                marginBottom: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <CheckCircle size={24} color="#00E5CC" />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#00E5CC",
                }}
              >
                Webinar is now live!
              </span>
            </motion.div>
          )}

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: isMobile ? "100%" : "auto",
              minWidth: isMobile ? "100%" : "240px",
              height: "48px",
              padding: "0 18px",
              background: "rgba(255, 255, 255, 0.08)",
              color: "white",
              borderRadius: "14px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.08) inset, 0 8px 24px rgba(0, 229, 204, 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
            }}
          >
            <ArrowRight size={16} color="#00E5CC" />
            <span>Register Now for Free</span>
          </motion.a>
        </div>
      </section>

      {/* Speakers/Topics Section */}
      <section style={{ padding: sectionPadding, background: "#F8FAFF" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "28px" : "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontSize: isMobile ? "28px" : "40px",
                fontWeight: 700,
                color: "#0B0F39",
                marginBottom: "12px",
              }}
            >
              Expert Speakers & Topics
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: "#2A3558",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Learn from leading experts in maternal health, innovation, and
              community health systems.
            </p>
          </div>

          {/* Horizontal Scroll Row */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "16px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {speakerImages.map((speaker, index) => (
              <div
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  flex: "0 0 auto",
                  width: isMobile ? "260px" : "300px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(11, 15, 57, 0.15)",
                  cursor: "pointer",
                  scrollSnapAlign: "start",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0, 229, 204, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(11, 15, 57, 0.15)";
                }}
              >
                <img
                  src={speaker.src}
                  alt={speaker.title}
                  style={{
                    width: "100%",
                    height: "360px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background:
                      "linear-gradient(to top, rgba(11, 15, 57, 0.7), transparent)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "12px 16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      color: "#00E5CC",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Tap to view
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <p
            style={{
              textAlign: "center",
              marginTop: "16px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "rgba(11, 15, 57, 0.4)",
              letterSpacing: "0.05em",
            }}
          >
            ← Swipe to explore →
          </p>
        </div>

        {/* Lightbox Modal */}
        {activeSlide !== null && (
          <div
            onClick={() => setActiveSlide(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.92)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "800px",
                width: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0, 229, 204, 0.2)",
                maxHeight: "80vh",
                overflowY: "auto",
                marginTop: "70px",
              }}
            >
              <img
                src={speakerImages[activeSlide].src}
                alt={speakerImages[activeSlide].title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              {/* Prev / Next */}
              <button
                onClick={() =>
                  setActiveSlide(
                    (prev) =>
                      (prev - 1 + speakerImages.length) % speakerImages.length,
                  )
                }
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(11, 15, 57, 0.8)",
                  border: "2px solid #00E5CC",
                  color: "#00E5CC",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() =>
                  setActiveSlide((prev) => (prev + 1) % speakerImages.length)
                }
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(11, 15, 57, 0.8)",
                  border: "2px solid #00E5CC",
                  color: "#00E5CC",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronRight size={22} />
              </button>
              {/* Close */}
              <button
                onClick={() => setActiveSlide(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>

      {/* About Webinar Section */}
      <section
        style={{
          padding: sectionPadding,
          background: "white",
          borderTop: "1px solid rgba(11, 15, 57, 0.1)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontSize: isMobile ? "28px" : "36px",
              fontWeight: 700,
              color: "#0B0F39",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            About This Webinar
          </h2>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(11, 15, 57, 0.03), rgba(0, 229, 204, 0.05))",
              border: "1px solid rgba(0, 229, 204, 0.15)",
              borderRadius: "24px",
              padding: isMobile ? "24px" : "40px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "15px" : "16px",
                color: "#2A3558",
                lineHeight: 1.9,
                marginBottom: "20px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(11, 15, 57, 0.08)",
              }}
            >
              Maternal mortality remains a critical challenge in Northern
              Nigeria, where limited access to quality healthcare, inadequate
              infrastructure, and systemic barriers continue to affect maternal
              and child health outcomes.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "15px" : "16px",
                color: "#2A3558",
                lineHeight: 1.9,
                marginBottom: "20px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(11, 15, 57, 0.08)",
              }}
            >
              This webinar brings together leading experts, practitioners, and
              innovators to explore evidence-based interventions, successful
              models from the field, and scalable solutions that are making a
              real difference in reducing maternal deaths and improving health
              outcomes.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "15px" : "16px",
                color: "#2A3558",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Whether you are a healthcare professional, public health advocate,
              development partner, or community leader, this session offers
              actionable insights and practical strategies you can implement
              immediately.
            </p>
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: isMobile ? "100%" : "auto",
                minWidth: isMobile ? "100%" : "240px",
                height: "52px",
                padding: "0 28px",
                background: "linear-gradient(135deg, #0B0F39, #1a2156)",
                color: "white",
                borderRadius: "14px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                border: "2px solid #00E5CC",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0, 229, 204, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.borderColor = "rgba(11, 15, 57, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(11, 15, 57, 0.18)";
              }}
            >
              <ArrowRight size={16} color="#00E5CC" />
              <span>Secure Your Free Spot</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
