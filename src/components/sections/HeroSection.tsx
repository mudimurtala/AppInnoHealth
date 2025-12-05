export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661690013376-9c1b73f0b16c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG5pZ2VyaWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          alt="Modern healthcare technology Nigeria"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Blue gradient overlay with brand colors */}
      <div 
        className="absolute inset-0 z-10 bg-brand-gradient" 
        style={{ opacity: 0.92 }} 
      />
      
      {/* Decorative SVG overlay */}
      <div className="absolute inset-0 z-20 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,40 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-30">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            InnoHealth Africa Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Innovating Healthcare Across Africa
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Transforming healthcare delivery through innovative digital solutions, 
            medical technology and comprehensive health information systems
          </p>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
