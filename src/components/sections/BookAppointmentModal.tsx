import React, { useState } from "react";
import { createPortal } from "react-dom";
import PatientAppointmentForm from "./PatientAppointmentForm";
import DoctorRegistrationForm from "./DoctorRegistrationForm";

interface BookAppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

const modalBg = 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)';

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ open, onClose }) => {
  const [role, setRole] = useState<null | 'patient' | 'doctor'>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Reset role and submission state when modal is closed/opened
  React.useEffect(() => {
    if (!open) {
      setRole(null);
      setSubmitted(false);
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;
  return createPortal(
    <>
      <style>{`
        .book-appointment-modal-overlay {
          position: fixed;
          z-index: 2147483647;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.7);
        }
        /* Mobile-specific adjustments for close button, title, and dropdowns */
        @media (max-width: 640px) {
          .book-appointment-modal-overlay .mobile-close-btn {
            top: 8px !important;
            right: 8px !important;
            left: auto !important;
            transform: none !important;
          }
          .book-appointment-modal-overlay .mobile-form-title {
            margin-top: 3.5rem !important;
          }
          select[name="gender"] {
            max-width: 100vw !important;
            width: 100% !important;
            min-width: 0 !important;
            font-size: 1rem !important;
          }
          select[name="gender"] option {
            font-size: 1rem !important;
            white-space: normal !important;
            word-break: break-word !important;
          }
        }
        /* Make calendar and time icons white for better visibility on dark backgrounds */
        input[type='date']::-webkit-calendar-picker-indicator,
        input[type='time']::-webkit-calendar-picker-indicator {
          filter: invert(1) brightness(2);
        }
        input[type='date'], input[type='time'] {
          color-scheme: light;
        }
        /* For Firefox */
        input[type='date']::-moz-focus-inner,
        input[type='time']::-moz-focus-inner {
          filter: invert(1) brightness(2);
        }
      `}</style>
      <div className="book-appointment-modal-overlay" onClick={onClose}>
        <div
          className="relative mx-4 bg-[#0B0F39] shadow-2xl p-8 text-white"
          style={{
            width: '100%',
            maxWidth: 480,
            maxHeight: '80vh',
            overflowY: 'scroll',
            border: '2px solid rgba(255,255,255,0.25)',
            background: modalBg,
            fontFamily: 'Poppins, Comfortaa, system-ui, sans-serif',
            margin: '40px auto',
            boxSizing: 'border-box',
            borderRadius: '24px',
          }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-white text-3xl font-bold z-10 bg-brand-primary/80 hover:bg-brand-accent/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg mobile-close-btn"
            onClick={onClose}
            aria-label="Close"
            style={{ lineHeight: 1 }}
          >
            ×
          </button>
          {/* Step 1: Role selection */}
          {role === null && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 320 }}>
              <h2 className="mobile-form-title" style={{ color: '#00E5CC', textAlign: 'center', fontFamily: 'Comfortaa, cursive', fontWeight: 700, fontSize: 28, marginBottom: 24 }}>Join InnoHealth</h2>
              <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', marginBottom: 32 }}>Are you a patient or a doctor?</p>
              <div style={{ display: 'flex', gap: 24, flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 24 }}>
                <button
                  onClick={() => setRole('patient')}
                  style={{
                    background: 'linear-gradient(90deg, #0B0F39 0%, #1D32F2 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 12,
                    padding: '1rem 2rem',
                    fontSize: 18,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Comfortaa, cursive',
                    boxShadow: '0 2px 8px 0 rgba(13,19,57,0.15)',
                    minWidth: 120
                  }}
                >
                  Patient
                </button>
                <button
                  onClick={() => setRole('doctor')}
                  style={{
                    background: 'linear-gradient(90deg, #00E5CC 0%, #1D32F2 100%)',
                    color: '#0B0F39',
                    border: 'none',
                    borderRadius: 12,
                    padding: '1rem 2rem',
                    fontSize: 18,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Comfortaa, cursive',
                    boxShadow: '0 2px 8px 0 rgba(13,19,57,0.15)',
                    minWidth: 120
                  }}
                >
                  Doctor
                </button>
              </div>
            </div>
          )}
          {/* Step 2: Patient form (component) */}
          {role === 'patient' && !submitted && (
            <PatientAppointmentForm
              onSuccess={() => setSubmitted(true)}
              submitting={submitting}
              setSubmitting={setSubmitting}
              onBack={() => setRole(null)}
            />
          )}
          {/* Step 2: Doctor form (component) */}
          {role === 'doctor' && !submitted && (
            <DoctorRegistrationForm
              onSuccess={() => setSubmitted(true)}
              submitting={submitting}
              setSubmitting={setSubmitting}
              onBack={() => setRole(null)}
            />
          )}
          {/* Step 3: Success message (shared) */}
          {submitted && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 300,
                padding: 24,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <svg
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 24 24"
                style={{ margin: '0 auto' }}
              >
                <circle cx="12" cy="12" r="12" fill="#00E5CC" />
                <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3
                style={{
                  color: '#00E5CC',
                  fontFamily: 'Comfortaa, cursive',
                  fontWeight: 700,
                  fontSize: 24,
                  margin: '24px 0 8px',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: 320,
                }}
              >
                {role === 'patient' ? 'Appointment Booked!' : 'Registration Submitted!'}
              </h3>
              <p
                style={{
                  color: '#fff',
                  fontSize: 16,
                  textAlign: 'center',
                  marginBottom: 24,
                  width: '100%',
                  maxWidth: 320,
                  wordBreak: 'break-word',
                }}
              >
                {role === 'patient'
                  ? 'Thank you for booking your appointment. We have received your request and will contact you soon.'
                  : 'Thank you for registering as a doctor. Our team will review your information and contact you soon.'}
              </p>
              <button
                onClick={onClose}
                style={{
                  background: '#1A2340',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.75rem 1.5rem',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Comfortaa, cursive',
                  width: '100%',
                  maxWidth: 200,
                  margin: '0 auto',
                  display: 'block',
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>, document.body
  );
};
