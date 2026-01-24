import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  file: string;
  author?: string;
  date?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ file, author, date }) => {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch(file)
      .then(res => res.text())
      .then(setContent);
  }, [file]);
  return (
    <div
      className="rounded-3xl shadow-xl p-6 max-w-3xl mx-auto mt-6 mb-12"
      style={{
        background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
        fontFamily: 'Inter, Comfortaa, Poppins, sans-serif',
        color: '#fff',
        border: '2px solid #00E5CC22',
        boxShadow: '0 8px 32px rgba(11,15,57,0.10)',
        borderRadius: '2rem',
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 style={{ color: '#00E5CC', fontFamily: 'Comfortaa, cursive', fontWeight: 700, fontSize: '2.2rem', marginBottom: '1.2rem', textAlign: 'center' }} {...props} />,
          h2: ({node, ...props}) => <h2 style={{ color: '#3C73FF', fontFamily: 'Comfortaa, cursive', fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }} {...props} />,
          h3: ({node, ...props}) => <h3 style={{ color: '#00E5CC', fontFamily: 'Comfortaa, cursive', fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.8rem', marginTop: '1.5rem' }} {...props} />,
          p: ({node, ...props}) => <p style={{ marginBottom: '1.1rem', fontSize: '1.05rem', lineHeight: '1.7', color: '#fff' }} {...props} />,
          ul: ({node, ...props}) => <ul style={{ marginBottom: '1.1rem', paddingLeft: '1.5rem', color: '#fff' }} {...props} />,
          li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem', fontSize: '1.05rem', lineHeight: '1.7' }} {...props} />,
          blockquote: ({node, ...props}) => <blockquote style={{ borderLeft: '4px solid #00E5CC', background: '#10194a', padding: '0.7rem 1.2rem', margin: '1.2rem 0', fontStyle: 'italic', color: '#fff', borderRadius: '0.7rem' }} {...props} />,
          hr: () => <hr style={{ border: 'none', borderTop: '2px dashed #00E5CC33', margin: '2rem 0' }} />,
        }}
      >{content}</ReactMarkdown>
      {(author || date) && (
        <div className="mt-8 pt-4 border-t border-[#00E5CC33] text-right text-xs md:text-sm" style={{ color: '#B0F7E6', fontFamily: 'Poppins, Inter, sans-serif', opacity: 0.85 }}>
          {author && <span>By {author}</span>}
          {author && date && <span> &nbsp;|&nbsp; </span>}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
