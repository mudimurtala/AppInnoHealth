/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* ================================
         OFFICIAL BRAND COLOR PALETTE
         ================================ */
      colors: {
        // Brand colors with CSS variable fallbacks
        "inno-deep": "var(--inno-deep-core, #0B0F39)",
        "inno-steel": "var(--inno-steel-blue, #2A3558)",
        "inno-pulse": "var(--inno-pulse-blue, #1D32F2)",
        "inno-vivid": "var(--inno-vivid-sky, #3C73FF)",
        "inno-care": "var(--inno-care-blue, #B5CCFF)",
        
        // Semantic aliases
        primary: {
          DEFAULT: "var(--inno-pulse-blue, #1D32F2)",
          dark: "var(--inno-deep-core, #0B0F39)",
          light: "var(--inno-care-blue, #B5CCFF)",
        },
        secondary: "var(--inno-steel-blue, #2A3558)",
        accent: "var(--inno-vivid-sky, #3C73FF)",
        
        // Text colors
        "text-dark": "var(--text-dark, #0B0F39)",
        "text-medium": "var(--text-medium, #2A3558)",
        "text-light": "var(--text-light, #64748b)",
        
        // Background colors
        "bg-subtle": "var(--inno-care-blue, #B5CCFF)",
      },
      
      /* ================================
         TYPOGRAPHY SYSTEM
         Primary: Comfortaa (Logo, Hero)
         Secondary: Poppins (Body, UI)
         ================================ */
      fontFamily: {
        brand: ["Comfortaa", "cursive"],
        base: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      
      /* ================================
         BORDER RADIUS SYSTEM
         Buttons: rounded-xl (0.75rem)
         Cards: rounded-2xl (1rem)
         Inputs: rounded-lg (0.5rem)
         Badges: rounded-full
         ================================ */
      borderRadius: {
        lg: "0.5rem",    // Inputs
        xl: "0.75rem",   // Buttons
        "2xl": "1rem",   // Cards
      },
      
      /* ================================
         SPACING SYSTEM
         Use: p-4, p-6, p-8 only
         Never random values
         ================================ */
      spacing: {
        // Standard spacing already in Tailwind
      },
      
      /* ================================
         SHADOW SYSTEM
         ================================ */
      boxShadow: {
        "brand-sm": "0 1px 2px 0 rgba(11, 15, 57, 0.05)",
        "brand-md": "0 4px 6px -1px rgba(11, 15, 57, 0.1), 0 2px 4px -2px rgba(11, 15, 57, 0.1)",
        "brand-lg": "0 10px 15px -3px rgba(11, 15, 57, 0.1), 0 4px 6px -4px rgba(11, 15, 57, 0.1)",
        "brand-xl": "0 20px 25px -5px rgba(11, 15, 57, 0.1), 0 8px 10px -6px rgba(11, 15, 57, 0.1)",
      },
    },
  },
  plugins: [],
};
