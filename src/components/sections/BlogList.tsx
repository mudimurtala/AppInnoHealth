import React, { useState } from 'react';
import BlogPost from './BlogPost';
// import { blogCardImages } from './blogCardImages';

const posts = [
  {
    title: 'Welcome to the InnoHealth Africa Blog',
    file: '/blog/hello-world.md',
    date: '2026-01-22',
    author: 'Mudi Murtala',
  },
  {
    title: 'The Importance of Nutrition in African Children',
    file: '/blog/nutrition-african-children.md',
    date: '2026-01-23',
    author: 'Mudi Murtala',
  },
  {
    title: 'The Importance of Breastfeeding: Nourishing the Future',
    file: '/blog/importance-of-breastfeeding.md',
    date: '2026-01-23',
    author: 'Mudi Murtala',
  },
  {
    title: 'The Value of Healthcare Workers: Transforming Societies',
    file: '/blog/value-of-healthcare-workers.md',
    date: '2026-01-24',
    author: 'Mudi Murtala',
  },
  {
    title: 'Mental Health Awareness: Understanding, Importance, and Global Perspectives',
    file: '/blog/mental-health-awareness.md',
    date: '2026-01-24',
    author: 'Mudi Murtala',
  },
  {
    title: 'The Importance of Exercise: Health Benefits and Risks of Inactivity',
    file: '/blog/importance-of-exercise.md',
    date: '2026-01-24',
    author: 'Mudi Murtala',
  },
];

const BlogList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="min-h-0 w-full px-2"
      style={{
        background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
        boxShadow: '0 8px 32px rgba(11,15,57,0.10)',
        fontFamily: 'Inter, Comfortaa, Poppins, sans-serif',
        paddingTop: '5.5rem',
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      <div className="max-w-3xl mx-auto" style={{marginBottom: 0, paddingBottom: 0}}>
        {posts.map((post, idx) => (
          <div
            key={post.file}
            className={
              `border-2 border-[#00E5CC] rounded-2xl bg-opacity-90 shadow-xl transition-all duration-200${idx !== posts.length - 1 ? ' mb-6' : ''}`
            }
            style={{
              background: openIndex === idx ? 'rgba(16,25,74,0.98)' : 'rgba(24,34,90,0.96)',
              boxShadow: '0 6px 24px 0 #00E5CC22, 0 1.5px 0 #00E5CC',
              borderColor: openIndex === idx ? '#00FFD0' : '#00E5CC',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderRadius: '1.5rem',
            }}
          >
            {/* Author and date removed from card UI as per user request */}
            <button
              className={`w-full text-left rounded-2xl px-6 py-4 focus:outline-none transition-all duration-200 ${openIndex === idx ? 'bg-[#10194a]' : 'bg-[#18225a] hover:bg-[#10194a]'}`}
              style={{
                fontFamily: 'Comfortaa, cursive',
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '0.01em',
                border: 'none',
                outline: 'none',
                marginBottom: '0.5rem',
                borderRadius: '1.5rem',
                boxShadow: 'none',
                color: openIndex === idx ? '#00FFD0' : '#fff',
                transition: 'color 0.2s',
              }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {post.title}
              <span style={{ float: 'right', fontWeight: 400, fontSize: '1rem', color: openIndex === idx ? '#fff' : '#00E5CC' }}>{openIndex === idx ? '▲' : '▼'}</span>
            </button>
            {openIndex === idx && (
              <div className="mt-2">
                <BlogPost file={post.file} author={post.author} date={post.date} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
