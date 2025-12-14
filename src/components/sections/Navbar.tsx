import { useState } from "react";
import { Menu, X, Users } from "lucide-react";
import NavbarMenu from "./NavbarMenu";
import { TeamCarousel } from "./TeamCarousel";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-brand-gradient shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="InnoHealth Africa Technology" 
                className="h-12 w-auto brightness-0 invert" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('our-services')} 
                className="text-white hover:text-inno-care text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('how-we-work')} 
                className="text-white hover:text-inno-care text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                How We Work
              </button>
              <button 
                onClick={() => scrollToSection('impact-focus')} 
                className="text-white hover:text-inno-care text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                Impact Focus
              </button>
              <button 
                onClick={() => scrollToSection('partnerships')} 
                className="text-white hover:text-inno-care text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                Partnerships
              </button>
              <button
                onClick={() => setShowTeam(true)}
                className="flex items-center gap-2 text-white hover:text-inno-care text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                <Users className="w-5 h-5" />
                Our Team
              </button>
              <NavbarMenu />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle menu" 
                className="text-white p-2 relative z-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ 
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40
            }}
          />
          {/* Menu Panel */}
          <div 
            className="md:hidden"
            style={{
              position: 'fixed',
              top: '80px',
              right: '16px',
              width: '220px',
              zIndex: 45,
              background: '#0B0F39',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                onClick={() => scrollToSection('our-services')} 
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '14px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('how-we-work')} 
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '14px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                How We Work
              </button>
              <button 
                onClick={() => scrollToSection('impact-focus')} 
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '14px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Impact Focus
              </button>
              <button 
                onClick={() => scrollToSection('partnerships')} 
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '14px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Partnerships
              </button>
              <button
                onClick={() => { setShowTeam(true); setIsMenuOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '14px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Users className="w-5 h-5" /> Our Team
              </button>
              <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: '8px' }}>
                <NavbarMenu isMobile />
              </div>
            </div>
          </div>
        </>
      )}
          {/* Team Modal Overlay (Portal) */}
          {showTeam && createPortal(
            <>
              <style>{`
                #team-carousel-modal-overlay {
                  position: fixed !important;
                  z-index: 2147483647 !important;
                  top: 0 !important;
                  left: 0 !important;
                  width: 100vw !important;
                  height: 100vh !important;
                  display: flex !important;
                  align-items: center !important;
                  justify-content: center !important;
                  background: rgba(0,0,0,0.7) !important;
                  pointer-events: auto !important;
                }
              `}</style>
              <div
                id="team-carousel-modal-overlay"
                onClick={() => setShowTeam(false)}
              >
                <div
                  className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-transparent"
                  style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 sm:top-4 sm:right-6 z-10 w-14 h-14 flex items-center justify-center shadow-xl"
                    onClick={() => setShowTeam(false)}
                    aria-label="Close"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,229,204,0.65) 0%, rgba(29,50,242,0.65) 100%)',
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: '2.3rem',
                      fontWeight: 900,
                      border: '2.5px solid rgba(255,255,255,0.7)',
                      boxShadow: '0 0 0 4px #00E5CC33, 0 8px 32px rgba(11,15,57,0.18)',
                      lineHeight: 1,
                      borderRadius: '9999px',
                      backdropFilter: 'blur(2px)',
                      transition: 'box-shadow 0.2s, border 0.2s, background 0.2s',
                      opacity: 0.85,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 0 7px #00E5CC55, 0 12px 40px rgba(11,15,57,0.28)'; e.currentTarget.style.border = '2.5px solid #00E5CC'; e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 4px #00E5CC33, 0 8px 32px rgba(11,15,57,0.18)'; e.currentTarget.style.border = '2.5px solid rgba(255,255,255,0.7)'; e.currentTarget.style.opacity = '0.85'; }}
                  >
                    <span style={{
                      opacity: 0.85,
                      borderRadius: '9999px',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      color: 'inherit',
                      userSelect: 'none',
                    }}>×</span>
                  </button>
                  <TeamCarousel />
                </div>
              </div>
            </>, document.body
          )}
    </>
  );
}
