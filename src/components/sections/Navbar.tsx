import { useState } from "react";
import { Menu, X, Users } from "lucide-react";
import NavbarMenu from "./NavbarMenu";
import { TeamCarousel } from "./TeamCarousel";
import { AboutUsModalContent } from "./AboutUsModalContent";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-brand-gradient shadow-lg fixed-navbar-global">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer pl-0 sm:pl-0" onClick={() => window.location.href = '/'} style={{marginLeft: '-0.5rem'}}>
              <img 
                src="/images/branding/logo.png" 
                alt="InnoHealth Africa Technology" 
                className="h-16 w-auto brightness-0 invert cursor-pointer" 
                style={{ minWidth: 64, minHeight: 64 }}
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('our-services')} 
                className="nav-link"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('how-we-work')} 
                className="nav-link"
              >
                How We Work
              </button>
              <button 
                onClick={() => scrollToSection('impact-focus')} 
                className="nav-link"
              >
                Impact Focus
              </button>
              <button 
                onClick={() => scrollToSection('partnerships')} 
                className="nav-link"
              >
                Partnerships
              </button>
              <button
                onClick={() => setShowAbout(true)}
                className="nav-link"
              >
                About Us
              </button>
              <button
                onClick={() => setShowTeam(true)}
                className="nav-link flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Our Team
              </button>
                    {/* Navbar link hover effect styles */}
                    <style>{`
                      .nav-link {
                        position: relative;
                        color: #fff;
                        background: transparent;
                        border: none;
                        font-size: 0.97rem;
                        font-weight: 500;
                        cursor: pointer;
                        padding: 0 0.35rem;
                        transition: color 0.2s;
                        white-space: nowrap;
                        line-height: 1.2;
                        letter-spacing: 0.01em;
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      }
                      .nav-link:after {
                        content: '';
                        display: block;
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -2px;
                        height: 2px;
                        background: linear-gradient(90deg, #00E5CC 0%, #3C73FF 100%);
                        border-radius: 2px;
                        opacity: 0;
                        transform: scaleX(0.6);
                        transition: opacity 0.2s, transform 0.2s;
                      }
                      .nav-link:hover,
                      .nav-link:focus {
                        color: #00E5CC;
                      }
                      .nav-link:hover:after,
                      .nav-link:focus:after {
                        opacity: 1;
                        transform: scaleX(1);
                      }
                    `}</style>
              <NavbarMenu />
                  {/* About Us Modal Overlay (Portal) */}
                  {showAbout && createPortal(
                    <>
                      <style>{`
                        #about-modal-overlay {
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
                        id="about-modal-overlay"
                        onClick={() => setShowAbout(false)}
                      >
                        <div
                          className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-transparent"
                          style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }}
                          onClick={e => e.stopPropagation()}
                        >
                          <AboutUsModalContent onClose={() => setShowAbout(false)} />
                          <button
                            className="absolute right-4 bottom-4 z-20 w-14 h-14 flex items-center justify-center shadow-xl"
                            onClick={() => setShowAbout(false)}
                            aria-label="Close"
                            style={{
                              background: 'rgba(255, 255, 255, 0.25)',
                              color: 'rgba(255,255,255,0.85)',
                              fontSize: '2.3rem',
                              fontWeight: 900,
                              border: '2.5px solid rgba(255,255,255,0.7)',
                              boxShadow: '0 0 0 4px #00E5CC33, 0 8px 32px rgba(11,15,57,0.18)',
                              lineHeight: 1,
                              borderRadius: '9999px',
                              backdropFilter: 'blur(2px)',
                              transition: 'box-shadow 0.2s, border 0.2s, background 0.2s',
                              // opacity removed for solid color
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
                        </div>
                      </div>
                    </>, document.body
                  )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden pr-0 sm:pr-0" style={{marginRight: '-0.5rem'}}>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle menu" 
                className="text-white p-2 relative z-50"
                style={{ width: 48, height: 48, minWidth: 48, minHeight: 48 }}
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
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
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'
                }
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
                onClick={() => { setShowAbout(true); setIsMenuOpen(false); }}
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
                About Us
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
                    className="fixed z-[2147483648] w-14 h-14 flex items-center justify-center shadow-2xl"
                    onClick={() => setShowTeam(false)}
                    aria-label="Close"
                    style={{
                      left: '50%',
                      top: '1.25rem', // 20px ~ top-4
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, rgba(0,229,204,0.95) 0%, rgba(29,50,242,0.95) 100%)',
                      color: 'rgba(255,255,255,0.98)',
                      fontSize: '2.3rem',
                      fontWeight: 900,
                      border: '2.5px solid #00E5CC',
                      boxShadow: '0 0 0 7px #00E5CC77, 0 12px 40px rgba(11,15,57,0.32)',
                      lineHeight: 1,
                      borderRadius: '9999px',
                      backdropFilter: 'blur(6px)',
                      transition: 'box-shadow 0.2s, border 0.2s, background 0.2s',
                      opacity: 1,
                      zIndex: 2147483648,
                      position: 'fixed',
                    }}
                  >
                    <span style={{
                      opacity: 1,
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
