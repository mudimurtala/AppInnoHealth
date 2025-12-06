import { useState, useEffect } from "react";
import { 
  Laptop, 
  BarChart3, 
  DollarSign, 
  FlaskConical, 
  MessageSquare, 
  Handshake,
  ShieldCheck,
  FileCheck,
  CalendarCheck,
  Scale
} from "lucide-react";

// Specialized offices data
const specializedOffices = [
  { icon: Laptop, title: "Technology", color: "#3C73FF" },
  { icon: BarChart3, title: "MEL", color: "#00E5CC" },
  { icon: DollarSign, title: "Finance", color: "#1D32F2" },
  { icon: FlaskConical, title: "Research", color: "#3C73FF" },
  { icon: MessageSquare, title: "Communications", color: "#00E5CC" },
  { icon: Handshake, title: "Strategic Partnerships", color: "#1D32F2" }
];

// Trust/compliance badges
const trustBadges = [
  { icon: ShieldCheck, title: "Transparency", description: "Open and accountable operations" },
  { icon: FileCheck, title: "Annual Audits", description: "Independent financial reviews" },
  { icon: CalendarCheck, title: "Quarterly Reporting", description: "Regular progress updates" },
  { icon: Scale, title: "Full Compliance", description: "Health & data protection regulations" }
];

export default function HowWeWork() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="how-we-work" style={{ background: '#F8FAFF' }}>
      {/* Section 1: Our Model - Premium Blue Background with Decorative Elements */}
      <div style={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, #0a1628 0%, #122a4d 30%, #1a3a5c 50%, #0d2847 70%, #091c33 100%)',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        {/* Large Gradient Orb - Top Right */}
        <div style={{
          position: 'absolute',
          top: isMobile ? '-80px' : '-120px',
          right: isMobile ? '-60px' : '-80px',
          width: isMobile ? '250px' : '400px',
          height: isMobile ? '250px' : '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60, 115, 255, 0.3) 0%, rgba(60, 115, 255, 0.1) 40%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />
        
        {/* Glowing Sphere - Left Side */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: isMobile ? '-40px' : '-60px',
          transform: 'translateY(-50%)',
          width: isMobile ? '150px' : '220px',
          height: isMobile ? '150px' : '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 229, 204, 0.4) 0%, rgba(60, 115, 255, 0.2) 50%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }} />
        
        {/* Capsule Shape - Bottom Right */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '10px' : '20px',
          right: isMobile ? '10%' : '15%',
          width: isMobile ? '60px' : '100px',
          height: isMobile ? '120px' : '200px',
          borderRadius: '50px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(60, 115, 255, 0.15) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transform: 'rotate(-20deg)',
          pointerEvents: 'none'
        }} />
        
        {/* Small Circle - Top Left */}
        <div style={{
          position: 'absolute',
          top: isMobile ? '20px' : '40px',
          left: isMobile ? '5%' : '10%',
          width: isMobile ? '40px' : '70px',
          height: isMobile ? '40px' : '70px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'rgba(255, 255, 255, 0.03)',
          pointerEvents: 'none'
        }} />
        
        {/* Subtle Grid Pattern Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }} />

        {/* Content Container */}
        <div style={{ 
          position: 'relative',
          zIndex: 1,
          padding: isMobile ? '32px 16px' : '40px 24px',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '20px' : '28px' }}>
            <h2 style={{
              fontFamily: "'Comfortaa', cursive",
              fontSize: isMobile ? '32px' : '42px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
            }}>
              How We Work
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #3C73FF 0%, #00E5CC 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(0, 229, 204, 0.5)'
            }} />
          </div>

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '28px' : '40px',
            alignItems: 'center'
          }}>
            {/* Left: Description */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: isMobile ? '20px' : '28px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? '22px' : '28px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #ffffff 0%, #00E5CC 50%, #3C73FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '18px',
              lineHeight: 1.3
            }}>
              Our Hybrid Model
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '20px'
            }}>
              Our hybrid model combines{' '}
              <span style={{ 
                color: '#3C73FF',
                fontWeight: 600
              }}>
                revenue-generating telemedicine tools
              </span>{' '}
              with{' '}
              <span style={{ 
                color: '#00E5CC',
                fontWeight: 600
              }}>
                donor-funded projects
              </span>{' '}
              to create{' '}
              <span style={{
                color: '#00E5CC',
                fontWeight: 700,
                textShadow: '0 0 20px rgba(0, 229, 204, 0.5)'
              }}>
                sustainable public health impact
              </span>.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Programmes are structured through a defined{' '}
              <span style={{
                color: 'white',
                fontWeight: 500
              }}>
                governance and accountability framework
              </span>, led by{' '}
              <span style={{
                color: '#B5CCFF',
                fontWeight: 600
              }}>
                executive leadership
              </span>{' '}
              and supported by{' '}
              <span style={{
                color: '#00E5CC',
                fontWeight: 600
              }}>
                specialised offices
              </span>.
            </p>
          </div>

          {/* Right: Specialized Offices Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            {specializedOffices.map((office, index) => {
              const IconComponent = office.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: isMobile ? '16px 12px' : '18px 16px',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(60, 115, 255, 0.3)';
                    e.currentTarget.style.borderColor = office.color;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${office.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                    boxShadow: `0 0 15px ${office.color}40`
                  }}>
                    <IconComponent size={20} color={office.color} />
                  </div>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 500,
                    color: 'white'
                  }}>
                    {office.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      {/* Section 2: Our Standards - Dark Background */}
      <div style={{
        background: 'linear-gradient(135deg, #0B0F39 0%, #1a2156 50%, #2A3558 100%)',
        padding: isMobile ? '32px 16px' : '40px 24px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '18px' : '24px' }}>
            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? '24px' : '30px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '16px'
            }}>
              Our Standards
            </h3>
          </div>

          {/* Trust Badges Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '12px' : '16px'
          }}>
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: isMobile ? '18px 12px' : '20px 16px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 229, 204, 0.1)';
                    e.currentTarget.style.borderColor = '#00E5CC';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00E5CC 0%, #3C73FF 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px',
                    boxShadow: '0 4px 15px rgba(0, 229, 204, 0.3)'
                  }}>
                    <IconComponent size={22} color="white" />
                  </div>
                  <h4 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? '13px' : '15px',
                    fontWeight: 600,
                    color: '#00E5CC',
                    marginBottom: '4px'
                  }}>
                    {badge.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? '11px' : '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.4
                  }}>
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
