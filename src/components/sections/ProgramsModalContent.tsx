import React from "react";

const plannedPrograms = [
  "Maternal Health Outreach",
  "Digital Health Training",
  "Community Health Worker Support",
  "Telemedicine Pilot",
  "Nutrition & Child Wellness",
  "Health Data for Decision-Making"
];

export const ProgramsModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="w-full max-w-3xl bg-[#0B0F39] shadow-2xl p-8 text-white relative mx-auto"
    style={{
      minHeight: '30vh',
      maxHeight: '80vh',
      overflowY: 'auto',
      border: '2px solid rgba(255, 255, 255, 0.25)',
      borderRadius: '24px',
      boxSizing: 'border-box',
      background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
    }}
  >
    <style>{`
      @media (max-width: 640px) {
        .programs-modal-content p,
        .programs-modal-content li {
          font-size: 0.95rem !important;
        }
        .programs-modal-content h2 {
          font-size: 1.3rem !important;
        }
      }
    `}</style>
    <button
      onClick={onClose}
      aria-label="Close"
      className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
      style={{
        background: 'rgba(255,255,255,0.15)',
        border: '2px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 0 4px #00E5CC33, 0 8px 32px rgba(11,15,57,0.18)',
        transition: 'background 0.2s',
        cursor: 'pointer',
      }}
    >
      ×
    </button>
    <div className="programs-modal-content">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight" style={{ color: '#00E5CC', letterSpacing: '0.01em' }}>Our Programs</h2>
      <p className="text-lg leading-relaxed mb-6 text-center font-medium">
        <span className="font-bold text-[#FFD600]">Coming Soon!</span> We are working on impactful programs to improve healthcare access and outcomes. Here are some of the initiatives we are planning:
      </p>
      <ul
        className="list-none pl-0 text-base leading-relaxed mb-3"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: 480,
          margin: '0 auto',
        }}
      >
        {plannedPrograms.map((prog, idx) => (
          <li
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              background: '#10194a',
              border: '1px solid #00E5CC33',
              borderRadius: 14,
              padding: '1rem 1.5rem',
              minHeight: 60,
              marginBottom: 16,
              boxShadow: '0 2px 8px 0 #0B0F3922',
              width: '100%',
              maxWidth: 480,
            }}
          >
            <span className="text-[#00E5CC] text-2xl font-bold mr-2" style={{ lineHeight: 1, alignSelf: 'center' }}>•</span>
            <span className="block font-medium text-base text-white text-left" style={{ wordBreak: 'break-word', alignSelf: 'center' }}>{prog}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
