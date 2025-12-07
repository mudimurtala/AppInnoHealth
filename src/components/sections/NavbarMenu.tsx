import { ChevronDown, Calendar, Users, FileText } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface NavbarMenuProps {
  isMobile?: boolean;
}

// Menu items data
const menuItems = [
  { icon: Calendar, label: "Book Appointment" },
  { icon: Users, label: "Our Team" },
  { icon: FileText, label: "About Us" },
];

export default function NavbarMenu({ isMobile = false }: NavbarMenuProps) {
  if (isMobile) {
    // Mobile - Display items directly without dropdown (since already in mobile menu panel)
    return (
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
    );
  }

  // Desktop Menu Button and Dropdown
  return (
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
  );
}
