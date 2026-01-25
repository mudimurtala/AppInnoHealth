import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogPost from './BlogPost';

const posts = [
  {
    title: 'Welcome to the InnoHealth Africa Blog',
    file: '/blog/hello-world.md',
    date: '2026-01-22',
    author: 'Mudi Murtala',
    image: '/blog-images/welcome-to-innohealth.webp',
  },
  {
    title: 'The Importance of Nutrition in African Children',
    file: '/blog/nutrition-african-children.md',
    date: '2026-01-23',
    author: 'Mudi Murtala',
    image: '/blog-images/The Importance of Nutrition in African Children.webp',
  },
  {
    title: 'The Importance of Breastfeeding: Nourishing the Future',
    file: '/blog/importance-of-breastfeeding.md',
    date: '2026-01-23',
    author: 'Mudi Murtala',
    image: '/blog-images/importance of breastfeeding.webp',
  },
  {
    title: 'The Value of Healthcare Workers: Transforming Societies',
    file: '/blog/value-of-healthcare-workers.md',
    date: '2026-01-24',
    author: 'Mudi Murtala',
    image: '/blog-images/The Value of Healthcare Workers Transforming Societies.webp',
  },
  {
    title: 'Mental Health Awareness: Understanding, Importance, and Global Perspectives',
    file: '/blog/mental-health-awareness.md',
    date: '2026-01-24',
    author: 'Mudi Murtala',
    image: '/blog-images/Mental Health Awareness.webp',
  },
  {
    title: 'The Importance of Exercise: Health Benefits and Risks of Inactivity',
    file: '/blog/importance-of-exercise.md',
    date: '2026-01-24',
    author: 'Mudi Murtala',
    image: '/blog-images/The Importance of Exercise.webp',
  },
];

const VISIBLE_CARDS = 3;

const BlogList: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  // Get visible posts with looping
  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < VISIBLE_CARDS; i++) {
      const index = (startIndex + i) % posts.length;
      visible.push({ ...posts[index], originalIndex: index });
    }
    return visible;
  };

  const visiblePosts = getVisiblePosts();

  const goToPrev = () => {
    setStartIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };
  const goToNext = () => {
    setStartIndex((prev) => (prev + 1) % posts.length);
  };

  return (
    <div
      className="min-h-0 w-full"
      style={{
        background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
        boxShadow: '0 8px 32px rgba(11,15,57,0.10)',
        fontFamily: 'Inter, Comfortaa, Poppins, sans-serif',
        paddingTop: '5.5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Section Title - Centered */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-6 sm:mb-10 md:mb-14 lg:mb-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl"
          style={{
            fontFamily: 'Comfortaa, cursive',
            fontWeight: 700,
            color: '#00E5CC',
            marginBottom: '0.8rem',
            letterSpacing: '0.01em',
          }}
        >
          Featured Posts
        </h2>
        <p 
          className="max-w-3xl mx-auto"
          style={{ 
            color: '#B0F7E6', 
            opacity: 0.9, 
            fontFamily: 'Inter, sans-serif', 
            lineHeight: 1.6,
            fontSize: 'clamp(0.875rem, 2vw, 1.5rem)'
          }}
        >
          Explore our latest articles on health, technology, and community empowerment.
        </p>
      </div>

      {/* Cards Row with Navigation */}
      <div 
        className="max-w-6xl mx-auto px-2 sm:px-4 flex items-center justify-center"
        style={{ gap: 'clamp(16px, 5vw, 56px)' }}
      >
        {/* Left Arrow */}
        <button
          onClick={goToPrev}
          aria-label="Previous"
          className="flex-shrink-0 flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '1rem',
            background: 'rgba(24,34,90,0.95)',
            border: '2px solid #00E5CC',
            boxShadow: '0 4px 16px 0 #00E5CC22',
          }}
        >
          <ChevronLeft size={24} color="#00E5CC" />
        </button>

        {/* Cards - Responsive with spacing */}
        <div 
          className="flex-1 flex justify-center overflow-hidden" 
          style={{ 
            minHeight: '320px',
            gap: 'clamp(24px, 5vw, 56px)',
          }}
        >
          {visiblePosts.map((post) => (
            <div
              key={`${post.file}-${post.originalIndex}`}
              className="cursor-pointer group flex-shrink-0"
              style={{
                background: 'rgba(24,34,90,0.96)',
                borderRadius: '1.5rem',
                boxShadow: '0 6px 24px 0 #00E5CC22',
                border: '2px solid #00E5CC',
                overflow: 'hidden',
                width: 'clamp(180px, 25vw, 280px)',
                height: 'clamp(260px, 35vw, 360px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => setSelectedPost(post.originalIndex)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedPost(post.originalIndex)}
            >
              {/* Image - Takes ~75% of card */}
              <div style={{ width: '100%', flex: '3', overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s',
                    display: 'block',
                  }}
                  className="group-hover:scale-105"
                />
              </div>
              {/* Title & Date - Takes ~25% of card */}
              <div
                style={{
                  padding: '0.7rem 0.8rem',
                  width: '100%',
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  background: 'rgba(24,34,90,1)',
                }}
              >
                <h3
                  className="text-xs sm:text-sm md:text-base"
                  style={{
                    fontFamily: 'Comfortaa, cursive',
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: '0.3rem',
                    lineHeight: 1.3,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  // @ts-ignore
                  style-hover="color: #00E5CC"
                >
                  {post.title}
                </h3>
                <span 
                  className="text-xs"
                  style={{ color: '#00E5CC', fontFamily: 'Inter, sans-serif', opacity: 0.95 }}
                >
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          aria-label="Next"
          className="flex-shrink-0 flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '1rem',
            background: 'rgba(24,34,90,0.95)',
            border: '2px solid #00E5CC',
            boxShadow: '0 4px 16px 0 #00E5CC22',
          }}
        >
          <ChevronRight size={24} color="#00E5CC" />
        </button>
      </div>

      {/* Pagination Dots - Shows which posts are currently visible */}
      <style>{`
        @media (min-width: 640px) {
          .blog-pagination { margin-top: 3rem !important; }
        }
        @media (min-width: 768px) {
          .blog-pagination { margin-top: 4rem !important; }
        }
        @media (min-width: 1024px) {
          .blog-pagination { margin-top: 5rem !important; }
        }
      `}</style>
      <div 
        className="blog-pagination flex justify-center" 
        style={{ gap: '12px', marginTop: '0.1rem' }}
      >
        {posts.map((_, i) => {
          // Check if this post is currently visible
          const isVisible = visiblePosts.some(p => p.originalIndex === i);
          return (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to post ${i + 1}`}
              style={{
                width: isVisible ? '20px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: isVisible ? '#00E5CC' : 'rgba(0, 229, 204, 0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isVisible ? '0 2px 8px #00E5CC55' : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Modal for Full Blog Post */}
      <style>{`
        @media (max-width: 639px) {
          .blog-modal-overlay { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
          .blog-modal-content { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
        }
      `}</style>
      {selectedPost !== null && (
        <div
          className="blog-modal-overlay fixed inset-0 flex items-start justify-center bg-black bg-opacity-80 overflow-y-auto"
          style={{ 
            zIndex: 2147483647,
            minHeight: '100vh', 
            minWidth: '100vw',
            padding: '2rem 1rem',
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="blog-modal-content relative w-full max-w-3xl mx-auto bg-[#0B0F39] shadow-2xl"
            style={{ 
              border: '2px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '32px',
              marginTop: '2rem',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - matching other modals design */}
            <button
              className="absolute z-20 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() => setSelectedPost(null)}
              aria-label="Close"
              style={{ 
                top: '16px',
                right: '16px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 0 0 3px #00E5CC33, 0 4px 16px rgba(11,15,57,0.15)',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              ×
            </button>
            <BlogPost
              file={posts[selectedPost].file}
              author={posts[selectedPost].author}
              date={posts[selectedPost].date}
            />
            {/* Bottom Close button - for convenience after reading */}
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                padding: '1.5rem 0 2rem',
              }}
            >
              <button
                className="flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => setSelectedPost(null)}
                aria-label="Close"
                style={{ 
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 0 0 3px #00E5CC33, 0 4px 16px rgba(11,15,57,0.15)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
