import { useState } from "react";
import { Menu, X, ChevronDown, Calendar, Users, FileText } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
    <nav className="bg-brand-gradient shadow-lg">
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="text-white font-medium px-5 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #3C73FF 0%, #1D32F2 50%, #2A3558 100%)',
                    borderRadius: '9999px'
                  }}
                >
                  Menu
                  <ChevronDown className="ml-0.5 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 border-0 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3C73FF 0%, #1D32F2 50%, #2A3558 100%)',
                  borderRadius: '24px',
                  padding: '16px',
                  marginTop: '12px'
                }}
              >
                <DropdownMenuItem 
                  className="text-white cursor-pointer transition-all duration-200"
                  style={{ 
                    borderRadius: '16px',
                    padding: '16px 20px',
                    marginBottom: '8px'
                  }}
                  onFocus={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Calendar className="h-5 w-5 text-white" style={{ marginRight: '16px' }} />
                  Book Appointment
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white cursor-pointer transition-all duration-200"
                  style={{ 
                    borderRadius: '16px',
                    padding: '16px 20px',
                    marginBottom: '8px'
                  }}
                  onFocus={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Users className="h-5 w-5 text-white" style={{ marginRight: '16px' }} />
                  Our Team
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white cursor-pointer transition-all duration-200"
                  style={{ 
                    borderRadius: '16px',
                    padding: '16px 20px'
                  }}
                  onFocus={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <FileText className="h-5 w-5 text-white" style={{ marginRight: '16px' }} />
                  About Us
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu" 
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/20">
            <button 
              onClick={() => scrollToSection('our-services')} 
              className="block w-full text-left text-white hover:text-inno-care font-medium transition-colors bg-transparent border-none cursor-pointer"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('how-we-work')} 
              className="block w-full text-left text-white hover:text-inno-care font-medium transition-colors bg-transparent border-none cursor-pointer"
            >
              How We Work
            </button>
            <button 
              onClick={() => scrollToSection('impact-focus')} 
              className="block w-full text-left text-white hover:text-inno-care font-medium transition-colors bg-transparent border-none cursor-pointer"
            >
              Impact Focus
            </button>
            <button 
              onClick={() => scrollToSection('partnerships')} 
              className="block w-full text-left text-white hover:text-inno-care font-medium transition-colors bg-transparent border-none cursor-pointer"
            >
              Partnerships
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="text-white font-medium w-full px-5 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #3C73FF 0%, #1D32F2 50%, #2A3558 100%)',
                    borderRadius: '9999px'
                  }}
                >
                  Menu
                  <ChevronDown className="ml-0.5 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="min-w-0 w-auto p-3 mt-3 border-0 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3C73FF 0%, #1D32F2 50%, #2A3558 100%)',
                  borderRadius: '20px'
                }}
              >
                <DropdownMenuItem 
                  className="text-white text-sm hover:bg-white/20 px-4 py-3 cursor-pointer transition-all duration-200 focus:bg-white/20 mb-1"
                  style={{ borderRadius: '12px' }}
                >
                  <Calendar className="mr-3 h-4 w-4 text-white/90" />
                  Book Appointment
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white text-sm hover:bg-white/20 px-4 py-3 cursor-pointer transition-all duration-200 focus:bg-white/20 mb-1"
                  style={{ borderRadius: '12px' }}
                >
                  <Users className="mr-3 h-4 w-4 text-white/90" />
                  Our Team
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white text-sm hover:bg-white/20 px-4 py-3 cursor-pointer transition-all duration-200 focus:bg-white/20"
                  style={{ borderRadius: '12px' }}
                >
                  <FileText className="mr-3 h-4 w-4 text-white/90" />
                  About Us
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  );
}
