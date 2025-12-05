import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-gradient text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer brand */}
        <div className="mb-6">
          <img 
            src="/logo.png" 
            alt="InnoHealth Africa Technology" 
            className="h-10 w-auto brightness-0 invert" 
          />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Solutions</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:underline">EHR Systems</a></li>
              <li><a href="#" className="hover:underline">Telemedicine</a></li>
              <li><a href="#" className="hover:underline">Health Analytics</a></li>
              <li><a href="#" className="hover:underline">Mobile Health</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-inno-care" />
                <a href="mailto:info@innohealthafrica.com" className="hover:underline">
                  info@innohealthafrica.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-inno-care" />
                <a href="tel:+2348042849572" className="hover:underline">
                  +234 804 284 9572
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-inno-care" />
                <span>Kaduna & Katsina States, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <p className="text-sm opacity-90 mb-4">
              Stay updated with our latest innovations and healthcare insights.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
              >
                <span className="sr-only">X</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.194l-7.007 8.01 8.213 11.49H18.59l-5.21-7.28-6.1 7.28H3.999l7.489-8.93L3 2.25h5.817l4.708 6.844 4.719-6.844z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 InnoHealth Africa Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
