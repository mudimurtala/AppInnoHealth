import React from "react";

interface TermsModalContentProps {
  onClose: () => void;
}

const termsPoints = [
  "Use this website for lawful, non-commercial purposes only.",
  "All content is the property of InnoHealth Africa Technology and may not be copied without permission.",
  "We strive for accuracy, but information may change and is not guaranteed to be error-free.",
  "By using this site, you agree not to misuse or attempt to disrupt our services.",
  "We may update these terms at any time; continued use means you accept the latest version."
];

const TermsModalContent: React.FC<TermsModalContentProps> = ({ onClose }) => (
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
      justifyContent: 'flex-start',
    }}
  >
    <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', textAlign: 'center', position: 'relative', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="text-3xl font-extrabold text-center tracking-tight" style={{ color: '#00E5CC', letterSpacing: '0.01em', margin: 0, paddingTop: '0.5rem', paddingBottom: '0.5rem', flex: 1 }}>Terms & Conditions</h2>
      <button
        onClick={onClose}
        aria-label="Close"
        className="ml-4 text-white font-bold z-10"
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
        }}
      >
        ×
      </button>
    </div>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {termsPoints.map((point, idx) => (
        <li key={idx} style={{
          display: 'flex', alignItems: 'center', background: '#10194a', border: '1px solid #00E5CC33', borderRadius: 14, padding: '1rem 1.5rem', marginBottom: 12, fontSize: '1rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 500, boxShadow: '0 2px 8px 0 #00E5CC11', justifyContent: 'center'
        }}>
          <span style={{ color: '#00E5CC', fontWeight: 700, marginRight: 12, fontSize: '1.2em' }}>•</span> {point}
        </li>
      ))}
    </ul>
  </div>
);

export { TermsModalContent };
