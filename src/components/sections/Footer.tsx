import React, { useState, useEffect } from 'react';
import { AboutUsModalContent } from "./AboutUsModalContent";
import { ContactModalContent } from "./ContactModalContent";
import { createPortal } from "react-dom";
import { ProgramsModalContent } from "./ProgramsModalContent";
import { GetInvolvedModalContent } from "./GetInvolvedModalContent";
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  const programLinks = [
    { name: 'Our Programs', href: '#' },
    { name: 'Get Involved', href: '#' },
  ];
  const resourceLinks = [
    { name: 'News & Updates', href: '#' },
    { name: 'Impact Reports', href: '#' },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };
  return (
    <footer style={{ background: '#1a1a1a' }}>
      {/* Newsletter Section - Hidden on mobile */}
      {!isMobile && (
        <div style={{ background: '#111111', padding: '0', position: 'relative' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#00E5CC', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Newsletter</p>
              <p style={{ fontFamily: 'Comfortaa, cursive', fontSize: '1.1rem', fontWeight: 600, color: '#ffffff' }}>Subscribe to our newsletter</p>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', maxWidth: '500px', minWidth: '280px' }}>
              <input type="email" placeholder="your email" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: '1', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.4)', padding: '12px 0', color: '#ffffff', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', outline: 'none' }} />
              <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '25px', padding: '10px 20px', color: '#ffffff', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = '#ffffff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'; }}>Send <Send size={16} style={{ transform: 'rotate(-45deg)' }} /></button>
            </form>
          </div>
        </div>
      )}
      {/* Main Footer Content */}
      <div style={{ background: '#242424', padding: isMobile ? '20px 16px' : '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: isMobile ? 'flex' : 'grid', flexDirection: isMobile ? 'row' : undefined, gridTemplateColumns: isMobile ? undefined : 'repeat(auto-fit, minmax(200px, 1fr))', gap: isMobile ? '16px' : '40px', justifyContent: isMobile ? 'space-between' : undefined }}>
          {/* Left Column on Mobile: Logo + Our Links */}
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <img src="/logo.png" alt="InnoHealth Africa Technology" loading="lazy" style={{ height: '28px', marginBottom: '4px', filter: 'brightness(0) invert(1)', cursor: 'pointer' }} onClick={() => window.location.reload()} />
              <div>
                <h3 style={{ fontFamily: 'Comfortaa, cursive', fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Our Links</h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {quickLinks.map((link, index) => (
                      <a key={index} href={link.href} style={{ color: '#999999', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', cursor: 'pointer' }} onClick={e => {
                        if (link.name === 'About') { e.preventDefault(); setShowAbout(true); }
                        if (link.name === 'Contact') { e.preventDefault(); setShowContact(true); }
                      }}>{link.name}</a>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {programLinks.map((link, index) => (
                      <a key={index} href={link.href} style={{ color: '#999999', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', cursor: 'pointer' }} onClick={e => {
                        if (link.name === 'Our Programs') { e.preventDefault(); setShowPrograms(true); }
                        if (link.name === 'Get Involved') { e.preventDefault(); setShowGetInvolved(true); }
                      }}>{link.name}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* Right Column on Mobile: Contact Us */}
          {isMobile ? (
            <div style={{ textAlign: 'right' }}>
              <h3 style={{ fontFamily: 'Comfortaa, cursive', fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>Contact Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                <a href="tel:+2348145598212" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#999999', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem' }}><Phone size={12} color="#00E5CC" />+2348145598212</a>
                <a href="mailto:admin@innohealth.tech" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#999999', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem' }}><Mail size={12} color="#00E5CC" />Email Us</a>
              </div>
            </div>
          ) : null}
          {/* Desktop Layout - Contact Us Directly */}
          {!isMobile && (
            <div style={{ textAlign: 'left', width: 'auto' }}>
              <h3 style={{ fontFamily: 'Comfortaa, cursive', fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>Contact Us Directly</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <a href="tel:+2348145598212" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#999999', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')} onMouseLeave={e => (e.currentTarget.style.color = '#999999')}><Phone size={16} color="#00E5CC" />+2348145598212</a>
                <a href="mailto:admin@innohealth.tech" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#999999', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')} onMouseLeave={e => (e.currentTarget.style.color = '#999999')}><Mail size={16} color="#00E5CC" />admin@innohealth.tech</a>
              </div>
            </div>
          )}
          {/* Desktop Layout - Our Links */}
          {!isMobile && (
            <div style={{ textAlign: 'left', width: 'auto' }}>
              <h3 style={{ fontFamily: 'Comfortaa, cursive', fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>Our Links</h3>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {quickLinks.map((link, index) => {
                    if (link.name === 'About') {
                      return (
                        <a
                          key={index}
                          href="#about"
                          onClick={e => { e.preventDefault(); setShowAbout(true); }}
                          style={{
                            color: '#999999',
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.9rem',
                            transition: 'color 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#999999')}
                        >
                          {link.name}
                        </a>
                      );
                    } else if (link.name === 'Contact') {
                      return (
                        <a
                          key={index}
                          href="#contact"
                          onClick={e => { e.preventDefault(); setShowContact(true); }}
                          style={{
                            color: '#999999',
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.9rem',
                            transition: 'color 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#999999')}
                        >
                          {link.name}
                        </a>
                      );
                    } else {
                      return (
                        <a
                          key={index}
                          href={link.href}
                          style={{
                            color: index === 0 ? '#00E5CC' : '#999999',
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.9rem',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')}
                          onMouseLeave={e => (e.currentTarget.style.color = index === 0 ? '#00E5CC' : '#999999')}
                        >
                          {link.name}
                        </a>
                      );
                    }
                  })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {programLinks.map((link, index) =>
                    link.name === 'Our Programs' ? (
                      <a
                        key={index}
                        href="#programs"
                        onClick={e => { e.preventDefault(); setShowPrograms(true); }}
                        style={{
                          color: '#999999',
                          textDecoration: 'none',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#999999')}
                      >
                        {link.name}
                      </a>
                    ) : link.name === 'Get Involved' ? (
                      <a
                        key={index}
                        href="#get-involved"
                        onClick={e => { e.preventDefault(); setShowGetInvolved(true); }}
                        style={{
                          color: '#999999',
                          textDecoration: 'none',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#00E5CC')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#999999')}
                      >
                        {link.name}
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Resources - Hidden on mobile */}
          {!isMobile && (
            <div>
              <h3
                style={{
                  fontFamily: 'Comfortaa, cursive',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '20px',
                }}
              >
                Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {resourceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    style={{
                      color: '#999999',
                      textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00E5CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#999999')}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Office Locations - Hidden on mobile */}
          {!isMobile && (
            <div>
              <h3
                style={{
                  fontFamily: 'Comfortaa, cursive',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '20px',
                }}
              >
                Our Offices
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#999999', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}><MapPin size={16} color="#00E5CC" style={{ flexShrink: 0, marginTop: '2px' }} /><span>3A Makarfi Road, Kaduna</span></div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#999999', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}><MapPin size={16} color="#00E5CC" style={{ flexShrink: 0, marginTop: '2px' }} /><span>Katsina, Nigeria</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Logo Section with Geometric Background - Hidden on mobile */}
      {!isMobile && (
        <div style={{ background: '#1a1a1a', position: 'relative', overflow: 'hidden', padding: '40px 20px' }}>
          <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '50%', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '300px', height: '400px', background: '#2a2a2a', transform: 'rotate(-20deg) skewY(-10deg)' }} />
            <div style={{ position: 'absolute', right: '15%', top: '10%', width: '200px', height: '300px', background: '#333333', transform: 'rotate(-15deg) skewY(-5deg)' }} />
          </div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <img src="/logo.png" alt="InnoHealth Africa Technology" loading="lazy" style={{ height: '40px', marginBottom: '10px', filter: 'brightness(0) invert(1)', cursor: 'pointer' }} onClick={() => window.location.reload()} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#ffffff', fontWeight: 300 }}>Let's build a healthier Africa together.</p>
          </div>
        </div>
      )}
      {/* Bottom Bar */}
      <div style={{ background: '#111111', padding: isMobile ? '16px' : '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'space-between', alignItems: 'center', gap: isMobile ? '12px' : '16px' }}>
          {/* Left - Legal Links - Hidden on mobile */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: '#666666', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={e => (e.currentTarget.style.color = '#666666')}>Privacy Policy</a>
              <a href="#" style={{ color: '#666666', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={e => (e.currentTarget.style.color = '#666666')}>Terms & Conditions</a>
            </div>
          )}
          {/* Center - Copyright */}
          <p style={{ color: '#666666', fontFamily: 'Inter, sans-serif', fontSize: isMobile ? '0.7rem' : '0.85rem', textAlign: 'center', order: isMobile ? 2 : 0 }}>© {currentYear} InnoHealth Technologies. All rights reserved.</p>
          {/* Right - Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '16px', order: isMobile ? 1 : 0 }}>
            {!isMobile && (<span style={{ color: '#666666', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>Follow us</span>)}
            <div style={{ display: 'flex', gap: isMobile ? '16px' : '12px' }}>
              <a href="https://www.linkedin.com/company/94865102/admin/dashboard/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={e => (e.currentTarget.style.color = '#666666')}><LinkedInIcon /></a>
              <a href="http://Instagram.com/innohealth_tech" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={e => (e.currentTarget.style.color = '#666666')}><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" style={{ color: '#666666', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={e => (e.currentTarget.style.color = '#666666')}><FacebookIcon /></a>
              <a href="#" aria-label="X" style={{ color: '#666666', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={e => (e.currentTarget.style.color = '#666666')}><XIcon /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Modals */}
      {showAbout && createPortal(
        <div id="about-modal-overlay" style={{ position: 'fixed', zIndex: 2147483647, top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', pointerEvents: 'auto' }} onClick={() => setShowAbout(false)}>
          <div className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-transparent" style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }} onClick={e => e.stopPropagation()}>
            <AboutUsModalContent onClose={() => setShowAbout(false)} />
            <button className="absolute right-4 bottom-4 z-20 w-14 h-14 flex items-center justify-center shadow-xl" onClick={() => setShowAbout(false)} aria-label="Close" style={{ background: 'rgba(255, 255, 255, 0.25)', color: 'rgba(255,255,255,0.85)', fontSize: '2.3rem', fontWeight: 900, border: '2.5px solid rgba(255,255,255,0.7)', boxShadow: '0 0 0 4px #00E5CC33, 0 8px 32px rgba(11,15,57,0.18)', borderRadius: '50%', transition: 'background 0.2s' }}>×</button>
          </div>
        </div>,
        document.body
      )}
      {showContact && createPortal(
        <div id="contact-modal-overlay" style={{ position: 'fixed', zIndex: 2147483647, top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', pointerEvents: 'auto' }} onClick={() => setShowContact(false)}>
          <div className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-transparent" style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }} onClick={e => e.stopPropagation()}>
            <ContactModalContent onClose={() => setShowContact(false)} />
          </div>
        </div>,
        document.body
      )}
      {showPrograms && createPortal(
        <div id="programs-modal-overlay" style={{ position: 'fixed', zIndex: 2147483647, top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', pointerEvents: 'auto' }} onClick={() => setShowPrograms(false)}>
          <div className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-transparent" style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }} onClick={e => e.stopPropagation()}>
            <ProgramsModalContent onClose={() => setShowPrograms(false)} />
          </div>
        </div>,
        document.body
      )}
      {showGetInvolved && createPortal(
        <div id="get-involved-modal-overlay" style={{ position: 'fixed', zIndex: 2147483647, top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', pointerEvents: 'auto' }} onClick={() => setShowGetInvolved(false)}>
          <div className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-transparent" style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }} onClick={e => e.stopPropagation()}>
            <GetInvolvedModalContent onClose={() => setShowGetInvolved(false)} />
          </div>
        </div>,
        document.body
      )}
    </footer>
  );
};

export default Footer;
