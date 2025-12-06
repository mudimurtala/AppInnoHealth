import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Digital Health & Telemedicine",
    description: "We design remote consultation platforms integrated with national health insurance, enabling patients to access qualified professionals without distance barriers.",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Maternal & Child Health Interventions",
    description: "Our field programmes support antenatal care, nutrition access, early childhood health, and emergency referral systems in communities with limited health infrastructure.",
    image: "https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Public Health Workforce Training",
    description: "We build digital capacity by training health workers in data analytics, smart documentation, and technology-based service delivery.",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Research & Health Innovation",
    description: "We generate insights to guide policy decisions and pilot innovative tools for real-world health challenges—especially those affecting women and children.",
    image: "https://images.pexels.com/photos/5452196/pexels-photo-5452196.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "Grant & Resource Mobilisation",
    description: "We secure funding, partnerships, and sponsorships for community health solutions, ensuring long-term sustainability.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = services.length;

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + totalItems) % totalItems);
    const adjustedDiff = normalizedDiff > totalItems / 2 ? normalizedDiff - totalItems : normalizedDiff;
    
    const isActive = adjustedDiff === 0;
    const isLeft1 = adjustedDiff === -1;
    const isRight1 = adjustedDiff === 1;
    const isLeft2 = adjustedDiff === -2;
    const isRight2 = adjustedDiff === 2;
    const isHidden = Math.abs(adjustedDiff) > 2;

    // Mobile: only show active card
    if (isMobile) {
      if (isActive) {
        return {
          opacity: 1,
          transform: 'translateX(0) scale(1)',
          zIndex: 5
        };
      }
      return {
        opacity: 0,
        transform: 'translateX(0) scale(0.8)',
        zIndex: 0,
        pointerEvents: 'none' as const
      };
    }

    // Desktop styles
    if (isHidden) {
      return {
        opacity: 0,
        transform: 'translateX(0) scale(0.5) rotateY(0deg)',
        zIndex: 0,
        pointerEvents: 'none' as const
      };
    }

    if (isActive) {
      return {
        opacity: 1,
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 5
      };
    }

    if (isLeft1) {
      return {
        opacity: 0.7,
        transform: 'translateX(-220px) scale(0.85) rotateY(25deg)',
        zIndex: 4
      };
    }

    if (isRight1) {
      return {
        opacity: 0.7,
        transform: 'translateX(220px) scale(0.85) rotateY(-25deg)',
        zIndex: 4
      };
    }

    if (isLeft2) {
      return {
        opacity: 0.4,
        transform: 'translateX(-380px) scale(0.7) rotateY(40deg)',
        zIndex: 3
      };
    }

    if (isRight2) {
      return {
        opacity: 0.4,
        transform: 'translateX(380px) scale(0.7) rotateY(-40deg)',
        zIndex: 3
      };
    }

    return {
      opacity: 0,
      transform: 'translateX(0) scale(0.5)',
      zIndex: 0
    };
  };

  // Check if card should show full description
  const shouldShowFullDescription = (index: number) => {
    return index === activeIndex || hoveredIndex === index;
  };

  return (
    <section 
      id="our-services"
      style={{
        padding: isMobile ? '30px 0 20px' : '40px 0 30px',
        background: 'linear-gradient(135deg, #E8F0FF 0%, #F5F8FF 25%, #FFFFFF 50%, #FAFCFF 75%, #F0F6FF 100%)',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '16px' : '20px' }}>
          <h2 style={{ 
            fontSize: isMobile ? '28px' : '36px', 
            fontWeight: 'bold', 
            color: '#0B0F39',
            fontFamily: 'Comfortaa, cursive'
          }}>
            Our Services
          </h2>
        </div>

        {/* 3D Carousel */}
        <div style={{ 
          position: 'relative', 
          height: isMobile ? '420px' : '380px',
          perspective: '1000px'
        }}>
          {/* Cards Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformStyle: 'preserve-3d'
          }}>
            {services.map((service, index) => {
              const cardStyle = getCardStyle(index);
              const showFull = shouldShowFullDescription(index);
              
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    position: 'absolute',
                    width: isMobile ? '280px' : '300px',
                    height: isMobile ? '400px' : '380px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease-out',
                    boxShadow: cardStyle.zIndex === 5 
                      ? '0 25px 60px rgba(60, 115, 255, 0.4)' 
                      : '0 15px 40px rgba(11, 15, 57, 0.2)',
                    ...cardStyle
                  }}
                >
                  {/* Image - shrinks when showing full description */}
                  <div style={{ 
                    position: 'relative', 
                    height: showFull ? '35%' : '55%',
                    transition: 'height 0.3s ease-out',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-out'
                      }}
                    />
                    {/* Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(11, 15, 57, 0.4) 100%)'
                    }} />
                  </div>
                  
                  {/* Content - expands when showing full description */}
                  <div style={{
                    height: showFull ? '65%' : '45%',
                    padding: isMobile ? '16px' : '18px',
                    background: 'linear-gradient(135deg, #0B0F39 0%, #2A3558 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'height 0.3s ease-out',
                    overflowY: showFull ? 'auto' : 'hidden'
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? '16px' : '17px',
                      fontWeight: 'bold',
                      color: '#00E5CC',
                      marginBottom: '10px',
                      lineHeight: '1.3',
                      flexShrink: 0,
                      fontFamily: 'Comfortaa, cursive'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.6',
                      overflow: showFull ? 'visible' : 'hidden',
                      display: showFull ? 'block' : '-webkit-box',
                      WebkitLineClamp: showFull ? undefined : 3,
                      WebkitBoxOrient: 'vertical' as const,
                      transition: 'all 0.3s ease-out',
                      fontFamily: 'Comfortaa, cursive'
                    }}>
                      {service.description}
                    </p>
                    
                    {/* Hint text when not showing full */}
                    {!showFull && (
                      <span style={{
                        fontSize: '11px',
                        color: '#00E5CC',
                        marginTop: 'auto',
                        opacity: 0.8,
                        fontStyle: 'italic',
                        fontFamily: 'Comfortaa, cursive'
                      }}>
                        {isMobile ? 'Tap to read more' : 'Hover to read more'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: isMobile ? '10px' : '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: isMobile ? '45px' : '55px',
              height: isMobile ? '45px' : '55px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #0B0F39 0%, #2A3558 100%)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(11, 15, 57, 0.5)',
              zIndex: 10,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)')}
            onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
          >
            <ChevronLeft style={{ width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px', color: 'white' }} />
          </button>

          <button 
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: isMobile ? '10px' : '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: isMobile ? '45px' : '55px',
              height: isMobile ? '45px' : '55px',
              borderRadius: '50%',
              border: 'none',
              background: 'linear-gradient(135deg, #0B0F39 0%, #2A3558 100%)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(11, 15, 57, 0.5)',
              zIndex: 10,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)')}
            onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = 'translateY(-50%) scale(1)')}
          >
            <ChevronRight style={{ width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px', color: 'white' }} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: isMobile ? '8px' : '10px', 
          marginTop: isMobile ? '12px' : '15px' 
        }}>
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? (isMobile ? '24px' : '30px') : (isMobile ? '10px' : '12px'),
                height: isMobile ? '10px' : '12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: index === activeIndex 
                  ? 'linear-gradient(135deg, #0B0F39 0%, #2A3558 100%)' 
                  : '#2A3558'
              }}
            />
          ))}
        </div>

        {/* Current Service Title */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: '8px', 
          color: '#0B0F39', 
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '600',
          padding: '0 16px',
          fontFamily: 'Comfortaa, cursive'
        }}>
          {services[activeIndex].title}
        </p>
      </div>
    </section>
  );
}
