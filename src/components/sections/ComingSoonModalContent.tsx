import React from "react";

interface ComingSoonModalContentProps {
  onClose: () => void;
  title?: string;
  message?: string;
}

const ComingSoonModalContent: React.FC<ComingSoonModalContentProps> = ({ onClose, title = "Coming Soon!", message = "This feature is on its way. Please check back later." }) => {
  return (
    <div
      className="w-full max-w-3xl bg-[#0B0F39] shadow-2xl p-8 text-white relative mx-auto"
      style={{
        minHeight: '20vh',
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '2px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-white font-bold z-10"
        style={{
          background: 'rgba(255,255,255,0.15)',
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 4px #00E5CC33, 0 8px 32px rgba(11,15,57,0.18)',
          transition: 'background 0.2s',
          cursor: 'pointer',
          fontSize: '1.7rem',
          lineHeight: 1,
          top: 24,
          right: 24
        }}
      >
        ×
      </button>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        maxWidth: 480,
        margin: '0 auto',
      }}>
        <h2 className="text-3xl font-extrabold mb-4 text-center tracking-tight" style={{ color: '#00E5CC', letterSpacing: '0.01em', marginBottom: '1.5rem' }}>{title}</h2>
        <p className="text-lg leading-relaxed font-medium text-[#FFD600]" style={{ marginTop: 0 }}>{message}</p>
      </div>
    </div>
  );
};

export { ComingSoonModalContent };
