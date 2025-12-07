import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              
              <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: '8px' }}>
                <NavbarMenu isMobile />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
