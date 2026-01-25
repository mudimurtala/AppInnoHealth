import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Floating Blog Button Component - Modern 2026 Design
const FloatingBlogButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Check if we're on blog page
  const isOnBlogPage = location.pathname === '/blog';

  // Handle click - first click expands, second click navigates
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isExpanded) {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsExpanded(false);
      // Use window.location for clean navigation
      window.location.href = '/blog';
    } else {
      setIsExpanded(true);
      // Auto-collapse after 4 seconds if not clicked
      timeoutRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 4000);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close expanded state when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isExpanded && !target.closest('.floating-blog-btn')) {
        setIsExpanded(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };
    
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isExpanded]);

  // Don't render on blog page
  if (isOnBlogPage) return null;
  
  return (
    <>
      {/* Keyframe animations for modern effects */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 
              0 4px 15px rgba(0, 229, 204, 0.3),
              0 0 30px rgba(0, 229, 204, 0.15),
              inset 0 1px 2px rgba(255, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 
              0 4px 25px rgba(0, 229, 204, 0.5),
              0 0 45px rgba(0, 229, 204, 0.25),
              inset 0 1px 2px rgba(255, 255, 255, 0.15);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes morph {
          0%, 100% { 
            border-radius: 60% 40% 55% 45% / 55% 60% 40% 45%;
          }
          25% { 
            border-radius: 45% 55% 40% 60% / 60% 45% 55% 40%;
          }
          50% { 
            border-radius: 55% 45% 60% 40% / 40% 55% 45% 60%;
          }
          75% { 
            border-radius: 40% 60% 45% 55% / 45% 40% 60% 55%;
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .floating-blog-btn {
          animation: pulse-glow 3s ease-in-out infinite, float 4s ease-in-out infinite, morph 8s ease-in-out infinite;
        }
        .floating-blog-btn:hover {
          animation: none;
          border-radius: 50% 45% 55% 50% / 50% 55% 45% 50% !important;
        }
        .floating-blog-btn.expanded {
          animation: none !important;
          border-radius: 28px !important;
        }
        .floating-blog-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          background: linear-gradient(135deg, #00E5CC 0%, #3C73FF 100%);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
        }
        .floating-blog-btn:hover::before {
          opacity: 0.15;
        }
        .expanded-text {
          background: linear-gradient(90deg, #00E5CC, #3C73FF, #00E5CC);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        /* Adaptive sizing */
        @media (max-width: 639px) {
          .floating-blog-btn {
            bottom: 16px !important;
            right: 16px !important;
          }
          .floating-blog-btn:not(.expanded) {
            width: 56px !important;
            height: 56px !important;
            font-size: 0.65rem !important;
          }
          .floating-blog-btn.expanded {
            width: auto !important;
            min-width: 140px !important;
            height: 48px !important;
            padding: 0 16px !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .floating-blog-btn.expanded {
            width: auto !important;
            min-width: 180px !important;
            height: 56px !important;
            padding: 0 20px !important;
          }
        }
        @media (min-width: 1024px) {
          .floating-blog-btn:not(.expanded) {
            width: 68px !important;
            height: 68px !important;
            bottom: 28px !important;
            right: 28px !important;
          }
          .floating-blog-btn.expanded {
            width: auto !important;
            min-width: 200px !important;
            height: 60px !important;
            padding: 0 24px !important;
            bottom: 28px !important;
            right: 28px !important;
          }
        }
      `}</style>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        aria-label="Go to Blog"
        className={`floating-blog-btn flex items-center justify-center ${isExpanded ? 'expanded' : ''}`}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          width: isExpanded ? 'auto' : '64px',
          height: isExpanded ? '56px' : '64px',
          minWidth: isExpanded ? '180px' : undefined,
          padding: isExpanded ? '0 20px' : undefined,
          // Organic blob-like irregular rounded shape (or pill when expanded)
          borderRadius: isExpanded ? '28px' : '60% 40% 55% 45% / 55% 60% 40% 45%',
          // Neumorphic soft UI with layered shadows
          background: isPressed 
            ? 'linear-gradient(145deg, #0a0d33 0%, #151d4f 100%)' 
            : 'linear-gradient(145deg, #1a2366 0%, #0B0F39 100%)',
          border: '1.5px solid rgba(0, 229, 204, 0.6)',
          boxShadow: isPressed
            ? 'inset 2px 2px 6px rgba(0, 0, 0, 0.4), inset -1px -1px 4px rgba(255, 255, 255, 0.05)'
            : isHovered || isExpanded
              ? '0 8px 32px rgba(0, 229, 204, 0.5), 0 4px 16px rgba(11, 15, 57, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
              : '0 4px 20px rgba(0, 229, 204, 0.35), 0 8px 24px rgba(11, 15, 57, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.08)',
          color: '#00E5CC',
          fontFamily: 'Comfortaa, cursive',
          fontWeight: 700,
          fontSize: isExpanded ? '0.85rem' : '0.75rem',
          letterSpacing: '0.02em',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', // Elastic easing
          transform: isPressed 
            ? 'scale(0.95)' 
            : isHovered 
              ? 'scale(1.05) translateY(-2px)' 
              : 'scale(1)',
          // High contrast text shadow for accessibility
          textShadow: isExpanded ? 'none' : '0 0 8px rgba(0, 229, 204, 0.5)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {isExpanded ? (
          <span className="expanded-text" style={{ fontWeight: 600 }}>
            Click to visit our Blog
          </span>
        ) : (
          'Blog'
        )}
      </button>
    </>
  );
};

export default FloatingBlogButton;
