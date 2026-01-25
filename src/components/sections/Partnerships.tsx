import { useState, useEffect, useRef } from "react";
import { Landmark, Handshake, GraduationCap, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

// Collaboration categories
const collaborationCategories = [
  { icon: Landmark, label: "Government" },
  { icon: Handshake, label: "NGOs" },
  { icon: GraduationCap, label: "Research" },
  { icon: Lightbulb, label: "Tech" }
];

// Strategic partner logos (removed WHO, UNICEF, BMGF, SOLINA)
const partnerLogos = [
  { name: "CcHub", logo: "/images/partners/CcHub.png" },
  { name: "3MTT", logo: "/images/partners/3MTT.png" },
  { name: "LUMILAB", logo: "/images/partners/LUMILAB.png" }
];

export default function Partnerships() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check scroll position for arrow visibility
  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="partnerships"
      style={{ 
        background: 'linear-gradient(135deg, #E8F0FF 0%, #F5F8FF 25%, #FFFFFF 50%, #FAFCFF 75%, #F0F6FF 100%)',
        padding: isMobile ? '36px 0' : '70px 0'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '16px' : '32px' }}>
          <h2 style={{
            fontFamily: "'Comfortaa', cursive",
            fontSize: isMobile ? '24px' : '44px',
            fontWeight: 700,
            color: '#0B0F39',
            marginBottom: isMobile ? '8px' : '16px'
          }}>
            Partnerships
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '13px' : '19px',
            color: '#2A3558',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            We collaborate with health ministries, NGOs, universities 
            and innovation hubs across Africa.
          </p>
        </div>

        {/* Collaboration Category Icons - Horizontal on mobile, spread on desktop */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '12px' : '40px',
          marginBottom: isMobile ? '20px' : '44px',
          flexWrap: isMobile ? 'nowrap' : 'wrap'
        }}>
          {collaborationCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '6px' : '12px',
                  flexShrink: 0
                }}
              >
                <div style={{
                  width: isMobile ? '28px' : '56px',
                  height: isMobile ? '28px' : '56px',
                  borderRadius: '50%',
                  background: '#0B0F39',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isMobile ? '0 2px 8px rgba(11, 15, 57, 0.3)' : '0 6px 20px rgba(11, 15, 57, 0.35)'
                }}>
                  <IconComponent size={isMobile ? 14 : 28} color="white" strokeWidth={2.5} />
                </div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? '11px' : '20px',
                  fontWeight: 600,
                  color: '#0B0F39'
                }}>
                  {category.label}
                </span>
                {index < collaborationCategories.length - 1 && !isMobile && (
                  <span style={{
                    color: '#B5CCFF',
                    marginLeft: '28px',
                    fontSize: '24px'
                  }}>•</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Strategic Partners Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '12px' : '20px',
          marginBottom: isMobile ? '16px' : '36px'
        }}>
          <div style={{
            height: isMobile ? '1px' : '2px',
            width: isMobile ? '50px' : '140px',
            background: 'linear-gradient(to right, transparent, #B5CCFF)'
          }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '10px' : '18px',
            fontWeight: 700,
            color: '#2A3558',
            textTransform: 'uppercase',
            letterSpacing: isMobile ? '1.5px' : '3px'
          }}>
            Strategic Partners
          </span>
          <div style={{
            height: isMobile ? '1px' : '2px',
            width: isMobile ? '50px' : '140px',
            background: 'linear-gradient(to left, transparent, #B5CCFF)'
          }} />
        </div>

        {/* Partner Logos with Horizontal Scroll and Arrows */}
        <div style={{ position: 'relative' }}>
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              style={{
                position: 'absolute',
                left: isMobile ? '-8px' : '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: isMobile ? '28px' : '50px',
                height: isMobile ? '28px' : '50px',
                borderRadius: '50%',
                background: '#0B0F39',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(11, 15, 57, 0.4)',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={isMobile ? 16 : 26} color="white" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              style={{
                position: 'absolute',
                right: isMobile ? '-8px' : '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: isMobile ? '28px' : '50px',
                height: isMobile ? '28px' : '50px',
                borderRadius: '50%',
                background: '#0B0F39',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(11, 15, 57, 0.4)',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={isMobile ? 16 : 26} color="white" />
            </button>
          )}

          {/* Scrollable Logo Container */}
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: isMobile ? '12px' : '32px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              padding: isMobile ? '6px 0' : '10px 0',
              justifyContent: 'center'
            }}
          >
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                style={{
                  width: isMobile ? '70px' : '160px',
                  height: isMobile ? '70px' : '160px',
                  minWidth: isMobile ? '70px' : '160px',
                  background: 'white',
                  borderRadius: isMobile ? '14px' : '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '10px' : '20px',
                  boxShadow: isMobile ? '0 3px 12px rgba(11, 15, 57, 0.1)' : '0 6px 24px rgba(11, 15, 57, 0.12)',
                  border: isMobile ? '1px solid rgba(181, 204, 255, 0.3)' : '2px solid rgba(181, 204, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(60, 115, 255, 0.25)';
                  e.currentTarget.style.borderColor = '#3C73FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(11, 15, 57, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(181, 204, 255, 0.4)';
                }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  loading="lazy"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(20%)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(20%)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hide scrollbar with CSS */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
