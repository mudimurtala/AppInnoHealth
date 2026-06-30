import React, { useEffect, useState } from "react";
import { ArrowRight, X, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WebinarAnnouncementBar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const webinarLink = "/webinar";

  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const updateBarHeight = () => {
      const el = document.getElementById("webinar-announcement-bar");
      const height = el ? Math.ceil(el.getBoundingClientRect().height) : 0;
      document.documentElement.style.setProperty(
        "--webinar-bar-offset",
        `${height}px`,
      );
    };

    checkMobile();

    if (isDismissed) {
      document.documentElement.style.setProperty("--webinar-bar-offset", "0px");
      return;
    }

    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", updateBarHeight);

    requestAnimationFrame(() => {
      requestAnimationFrame(updateBarHeight);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", updateBarHeight);
      document.documentElement.style.setProperty("--webinar-bar-offset", "0px");
    };
  }, [isDismissed]);

  // Calculate countdown to July 4, 2026, 10:00 AM UTC
  useEffect(() => {
    const calculateCountdown = () => {
      const webinarDate = new Date("2026-07-04T10:00:00Z").getTime();
      const now = new Date().getTime();
      const timeRemaining = webinarDate - now;

      if (timeRemaining > 0) {
        setCountdown({
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
          seconds: Math.floor((timeRemaining / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
  setIsDismissed(true);
  document.documentElement.style.setProperty("--webinar-bar-offset", "0px");
  };

  if (isDismissed) return null;

  return (
    <div
      id="webinar-announcement-bar"
      style={{
        background: "linear-gradient(90deg, #0B0F39 0%, #1a2156 100%)",
        borderBottom: "1px solid rgba(0, 229, 204, 0.2)",
        padding: isMobile ? "8px 10px 10px" : "12px 16px",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: 2147483648,
        boxShadow: "0 2px 12px rgba(11, 15, 57, 0.3)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
          alignItems: "center",
        }}
      >
        {!isMobile ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minWidth: 0,
              }}
            >
              <Clock size={18} color="#00E5CC" style={{ flexShrink: 0 }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "white",
                    whiteSpace: "nowrap",
                    lineHeight: 1.1,
                  }}
                >
                  Webinar: Maternal Mortality
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: "#B5CCFF",
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span style={{ color: "#FFFFFF" }}>in</span>
                  <span style={{ color: "#00E5CC", fontWeight: 700 }}>
                    {countdown.days}d
                  </span>
                  <span>{String(countdown.hours).padStart(2, "0")}h</span>
                  <span>{String(countdown.minutes).padStart(2, "0")}m</span>
                  <span
                    style={{
                      animation: "secondsBlink 1s ease-in-out infinite",
                      color: "#FFFFFF",
                    }}
                  >
                    {String(countdown.seconds).padStart(2, "0")}s
                  </span>
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexShrink: 0,
                justifySelf: "end",
                width: "auto",
              }}
            >
              <a
                href={webinarLink}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(webinarLink);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minWidth: "48px",
                  height: "48px",
                  padding: "0 16px",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  borderRadius: "14px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.08) inset, 0 8px 24px rgba(0, 229, 204, 0.12)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.18)";
                }}
              >
                <ArrowRight size={16} color="#00E5CC" />
                <span>Register</span>
              </a>

              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#B5CCFF",
                  cursor: "pointer",
                  padding: "4px 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.2s ease",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00E5CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#B5CCFF";
                }}
              >
                <X size={18} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0, 1fr)",
                alignItems: "center",
                gap: "6px",
                minWidth: 0,
              }}
            >
              <Clock size={13} color="#00E5CC" style={{ flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Webinar: Maternal Mortality
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "9px",
                    color: "#B5CCFF",
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                  }}
                >
                  in {countdown.days}d{" "}
                  {String(countdown.hours).padStart(2, "0")}h{" "}
                  {String(countdown.minutes).padStart(2, "0")}m{" "}
                  {String(countdown.seconds).padStart(2, "0")}s
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "3px",
                width: "100%",
                marginTop: "2px",
              }}
            >
              {[
                { label: "Days", value: countdown.days, accent: true },
                { label: "Hours", value: countdown.hours },
                { label: "Min", value: countdown.minutes },
                { label: "Sec", value: countdown.seconds, blink: true },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderRadius: "8px",
                    background: item.accent
                      ? "rgba(0, 229, 204, 0.12)"
                      : "rgba(255, 255, 255, 0.06)",
                    border: item.accent
                      ? "1px solid rgba(0, 229, 204, 0.24)"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                    padding: "5px 4px",
                    textAlign: "center",
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: item.blink ? "#FFFFFF" : "#00E5CC",
                      animation: item.blink
                        ? "secondsBlink 1s ease-in-out infinite"
                        : "none",
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      marginTop: "2px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "7px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "#B5CCFF",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "6px",
                width: "100%",
              }}
            >
              <a
                href={webinarLink}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(webinarLink);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  minWidth: 0,
                  flex: 1,
                  height: "36px",
                  padding: "0 10px",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  borderRadius: "14px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.08) inset, 0 8px 24px rgba(0, 229, 204, 0.12)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.18)";
                }}
              >
                <ArrowRight size={13} color="#00E5CC" />
                <span>Register</span>
              </a>

              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#B5CCFF",
                  cursor: "pointer",
                  padding: "2px 3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.2s ease",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00E5CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#B5CCFF";
                }}
              >
                <X size={15} />
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes secondsBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
      `}</style>
    </div>
  );
}
