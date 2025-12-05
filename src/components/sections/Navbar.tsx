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

  return (
    <nav className="bg-[#FFF8E7] shadow-md border-b border-inno-care/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="InnoHealth Africa Technology" 
              className="h-12 w-auto" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Our Services
            </a>
            <a href="#" className="text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Telemedicine Services
            </a>
            <a href="#" className="text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Our Impact
            </a>
            <a href="#" className="text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Why Choose Us
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-inno-pulse hover:bg-inno-vivid rounded-xl">
                  Menu
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Our Team
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
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
              className="text-inno-deep"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-inno-care/30">
            <a href="#" className="block text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Our Services
            </a>
            <a href="#" className="block text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Telemedicine Services
            </a>
            <a href="#" className="block text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Our Impact
            </a>
            <a href="#" className="block text-inno-deep hover:text-inno-pulse font-medium transition-colors">
              Why Choose Us
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-inno-pulse hover:bg-inno-vivid rounded-xl w-full">
                  Menu
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Our Team
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
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
