
import { ChevronDown, Calendar, Users, FileText } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TeamCarousel } from "./TeamCarousel";
import React from "react";
import { createPortal } from "react-dom";

interface NavbarMenuProps {
  isMobile?: boolean;
}


// Menu items data
const menuItems = [
  { icon: Calendar, label: "Book Appointment" },
  { icon: FileText, label: "About Us" },
];



export default function NavbarMenu({ isMobile = false }: NavbarMenuProps) {
  const [showTeam, setShowTeam] = React.useState(false);

  // (TEMP) Remove scroll lock logic for debugging modal overlay on desktop

  const handleMenuClick = (label: string) => {
    if (label === "Our Team") {
      setShowTeam(true);
    }
    // Add more handlers for other menu items if needed
  };

  if (isMobile) {
    // Mobile - Display items directly without dropdown (since already in mobile menu panel)
    return (
      <>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-200"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 10px',
                borderRadius: '12px',
                minWidth: '60px',
                background: 'rgba(255,255,255,0.05)'
              }}
              onClick={() => handleMenuClick(item.label)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
            >
              <item.icon className="h-5 w-5 text-white mb-1" />
              <span style={{
                color: 'white',
                fontSize: '9px',
                fontWeight: 500,
                textAlign: 'center',
                lineHeight: '1.2'
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
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
                  className="absolute top-2 right-2 sm:top-4 sm:right-6 text-white text-3xl font-bold z-10 bg-brand-primary/80 hover:bg-brand-accent/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                  onClick={() => setShowTeam(false)}
                  aria-label="Close"
                  style={{ lineHeight: 1 }}
                >
                  ×
                </button>
                <TeamCarousel />
              </div>
            </div>
          </>, document.body
        )}
      </>
    );
  }

  // Desktop Menu Button and Dropdown
  return (
    <>
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
          sideOffset={20}
          className="shadow-2xl"
          style={{
            background: '#0B0F39',
            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            borderRadius: '24px',
            padding: '20px',
            marginTop: '16px'
          }}
        >
          {/* Grid layout like Google */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px'
          }}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer transition-all duration-200"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 12px',
                  borderRadius: '12px',
                  minWidth: '80px'
                }}
                onClick={() => handleMenuClick(item.label)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <item.icon className="h-7 w-7 text-white mb-3" />
                <span style={{
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: 500,
                  textAlign: 'center',
                  lineHeight: '1.3'
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      {showTeam && createPortal(
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-70 overflow-y-auto"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
          onClick={() => setShowTeam(false)}
        >
          <div
            className="relative flex flex-col items-center justify-center w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto my-8 bg-transparent min-h-[60vh]"
            style={{ maxHeight: '95vh', overflowY: 'auto', paddingBottom: '2rem' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-6 text-white text-3xl font-bold z-10 bg-brand-primary/80 hover:bg-brand-accent/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              onClick={() => setShowTeam(false)}
              aria-label="Close"
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
            <TeamCarousel />
          </div>
        </div>, document.body
      )}
    </>
  );
}
