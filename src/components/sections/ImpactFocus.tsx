import { useState, useEffect, useRef } from "react";
import { 
  Baby, 
  Heart, 
  GraduationCap, 
  Video, 
  ClipboardList, 
  Building2,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";

// Impact items data with their specific icons
const impactItems: { text: string; icon: LucideIcon }[] = [
  { text: "Reduce maternal deaths", icon: Heart },
  { text: "Improve childhood survival and nutrition", icon: Baby },
  { text: "Strengthen health worker capacity at scale", icon: GraduationCap },
  { text: "Expand equitable access to telemedicine", icon: Video },
  { text: "Drive evidence-based public health planning", icon: ClipboardList },
  { text: "Strengthen community health systems sustainably", icon: Building2 }
];

export default function ImpactFocus() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position for mobile indicator dots
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isMobile) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const itemWidth = scrollContainer.scrollWidth / impactItems.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(newIndex, impactItems.length - 1));
      
      // Hide swipe hint once user starts scrolling
      if (scrollLeft > 10) {
        setShowSwipeHint(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Hide swipe hint after 3 seconds
  useEffect(() => {
    if (isMobile && showSwipeHint) {
      const timer = setTimeout(() => setShowSwipeHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, showSwipeHint]);

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
        <div style={{ position: 'relative' }}>
          {/* Swipe hint overlay for mobile */}
          {isMobile && showSwipeHint && (
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(11, 15, 57, 0.85)',
              padding: '8px 12px',
              borderRadius: '20px',
              animation: 'swipeHint 1.5s ease-in-out infinite',
              boxShadow: '0 4px 15px rgba(11, 15, 57, 0.3)'
            }}>
              <span style={{
                color: 'white',
                fontSize: '12px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500
              }}>Swipe</span>
              <ChevronRight size={16} color="#00E5CC" />
            </div>
          )}

          {/* Right fade gradient to indicate more content */}
          {isMobile && (
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: '8px',
              width: '60px',
              background: 'linear-gradient(to right, transparent, rgba(232, 240, 255, 0.9))',
              pointerEvents: 'none',
              zIndex: 5
            }} />
          )}

          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: isMobile ? 'auto' : 'hidden',
              paddingBottom: '8px',
              paddingRight: isMobile ? '50px' : '0',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: isMobile ? 'x mandatory' : 'none'
            }}
          >
          {/* Duplicate items for infinite scroll effect on desktop, single set for mobile */}
          {(isMobile ? impactItems : [...impactItems, ...impactItems]).map((item, index) => {
            const IconComponent = item.icon;
            return (
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
                transition: 'all 0.3s ease',
                scrollSnapAlign: isMobile ? 'start' : 'none'
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
                <IconComponent size={20} color="white" strokeWidth={2.5} />
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 500,
                color: '#0B0F39'
              }}>
                {item.text}
              </span>
            </div>
          );
          })}
          </div>

          {/* Mobile scroll indicator dots */}
          {isMobile && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px'
            }}>
              {impactItems.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: activeIndex === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeIndex === index 
                      ? 'linear-gradient(135deg, #3C73FF 0%, #1D32F2 100%)' 
                      : 'rgba(181, 204, 255, 0.5)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    const scrollContainer = scrollRef.current;
                    if (scrollContainer) {
                      const itemWidth = scrollContainer.scrollWidth / impactItems.length;
                      scrollContainer.scrollTo({
                        left: index * itemWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Hide scrollbar with CSS */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
          @keyframes swipeHint {
            0%, 100% { transform: translateY(-50%) translateX(0); opacity: 1; }
            50% { transform: translateY(-50%) translateX(-8px); opacity: 0.7; }
          }
        `}</style>
      </div>
    </section>
  );
}
