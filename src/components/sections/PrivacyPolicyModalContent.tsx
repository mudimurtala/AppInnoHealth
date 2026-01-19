import React from "react";

interface PrivacyPolicyModalContentProps {
  onClose: () => void;
}

const privacyPoints = [
  "We respect your privacy and never share your personal information without consent.",
  "Your contact details are used only for communication and updates about InnoHealth Africa.",
  "We use cookies and analytics to improve your experience on our website.",
  "All data is stored securely and handled in accordance with Nigerian law.",
  "You can contact us anytime to request, update, or delete your information."
];

const PrivacyPolicyModalContent: React.FC<PrivacyPolicyModalContentProps> = ({ onClose }) => (
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
      <h2 className="text-3xl font-extrabold text-center tracking-tight" style={{ color: '#00E5CC', letterSpacing: '0.01em', margin: 0, paddingTop: '0.5rem', paddingBottom: '0.5rem', flex: 1 }}>Privacy Policy</h2>
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
      {privacyPoints.map((point, idx) => (
        <li key={idx} style={{
          display: 'flex', alignItems: 'center', background: '#10194a', border: '1px solid #00E5CC33', borderRadius: 14, padding: '1rem 1.5rem', marginBottom: 12, fontSize: '1rem', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 500, boxShadow: '0 2px 8px 0 #00E5CC11', justifyContent: 'center'
        }}>
          <span style={{ color: '#00E5CC', fontWeight: 700, marginRight: 12, fontSize: '1.2em' }}>•</span> {point}
        </li>
      ))}
    </ul>
  </div>
);

export { PrivacyPolicyModalContent };
