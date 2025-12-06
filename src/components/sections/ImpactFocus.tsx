import { useState, useEffect, useRef } from "react";
import { HeartPulse } from "lucide-react";

// Impact items data
const impactItems = [
  "Reduce maternal deaths",
  "Improve childhood survival and nutrition",
  "Strengthen health worker capacity at scale",
  "Expand equitable access to telemedicine",
  "Drive evidence-based public health planning",
  "Strengthen community health systems sustainably"
];

export default function ImpactFocus() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isMobile || isHovered) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when reaching the duplicate set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile, isHovered]);

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #E8F0FF 0%, #F5F8FF 25%, #FFFFFF 50%, #FAFCFF 75%, #F0F6FF 100%)',
      padding: isMobile ? '40px 0' : '50px 0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '24px' : '32px' }}>
          <h2 style={{
            fontFamily: "'Comfortaa', cursive",
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: 700,
            color: '#0B0F39',
            marginBottom: '12px'
          }}>
            Impact Focus
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '15px' : '17px',
            color: '#2A3558'
          }}>
            We are building solutions that will:
          </p>
        </div>

        {/* Horizontal Scrolling Impact Badges */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: isMobile ? 'auto' : 'hidden',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Duplicate items for infinite scroll effect on desktop */}
          {[...impactItems, ...impactItems].map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'white',
                padding: isMobile ? '20px 24px' : '24px 32px',
                borderRadius: '50px',
                boxShadow: '0 2px 12px rgba(11, 15, 57, 0.08)',
                border: '1px solid rgba(181, 204, 255, 0.3)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 229, 204, 0.2)';
                e.currentTarget.style.borderColor = '#00E5CC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(11, 15, 57, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(181, 204, 255, 0.3)';
              }}
            >
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3C73FF 0%, #1D32F2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(60, 115, 255, 0.4)'
              }}>
                <HeartPulse size={20} color="white" strokeWidth={2.5} />
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 500,
                color: '#0B0F39'
              }}>
                {item}
              </span>
            </div>
          ))}
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
