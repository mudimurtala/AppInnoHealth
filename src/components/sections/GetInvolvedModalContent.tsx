import React from "react";

interface GetInvolvedModalContentProps {
  onClose: () => void;
}

const involvementOptions = [
  "Volunteer with our programs and outreach events",
  "Partner with us as an organization or sponsor",
  "Share our mission on social media",
  "Sign up for our newsletter to stay updated",
  "Contact us with your ideas or questions",
];

const GetInvolvedModalContent: React.FC<GetInvolvedModalContentProps> = ({ onClose }) => {
  return (
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
          .get-involved-modal-content p,
          .get-involved-modal-content li {
            font-size: 0.95rem !important;
          }
          .get-involved-modal-content h2 {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
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
      <div className="get-involved-modal-content">
        <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight" style={{ color: '#00E5CC', letterSpacing: '0.01em' }}>Get Involved</h2>
        <p className="text-lg leading-relaxed mb-6 text-center font-medium">
          <span className="font-bold text-[#FFD600]">We’re excited to have you join us in building a healthier Africa!</span> Here are some ways you can get involved:
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
          {involvementOptions.map((option, idx) => (
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
                marginBottom: 12,
                fontSize: '1rem',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                boxShadow: '0 2px 8px 0 #00E5CC11',
              }}
            >
              <span style={{ color: '#00E5CC', fontWeight: 700, marginRight: 12 }}>•</span> {option}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 rounded-full bg-[#00E5CC] text-[#0B0F39] font-semibold hover:bg-[#00bfa3] transition text-lg shadow-lg"
            style={{ minWidth: 120 }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { GetInvolvedModalContent };
