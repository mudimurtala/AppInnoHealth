import { countries } from "../ui/countries";
import React, { useState } from "react";
import { createPortal } from "react-dom";

interface BookAppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

const modalBg = 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)';

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ open, onClose }) => {
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
          <form action="https://formspree.io/f/xjgbypoo" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h2 className="mobile-form-title" style={{ color: '#00E5CC', textAlign: 'center', fontFamily: 'Comfortaa, cursive', fontWeight: 700, fontSize: 28, marginBottom: 18 }}>Book an Appointment</h2>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Full Name:
              <input type="text" name="full_name" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Email Address:
              <input type="email" name="email" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Phone Number:
              <input type="tel" name="phone" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Age:
              <input type="number" name="age" style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>Gender:
              <select name="gender" style={{
                borderRadius: 16,
                border: '1px solid #B5CCFF',
                padding: '10px 12px',
                fontFamily: 'inherit',
                background: '#1A2340',
                color: '#fff',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: 20,
              }}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>Country:
              <select name="country" required style={{
                borderRadius: 12,
                border: '1px solid #B5CCFF',
                padding: '10px 12px',
                fontFamily: 'inherit',
                background: '#1A2340',
                color: '#fff',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: 20,
                marginBottom: 10,
              }}>
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Location:
              <input type="text" name="location" placeholder="City, State or Area" style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>Type of Appointment:
              <select name="appointment_type" required style={{
                borderRadius: 16,
                border: '1px solid #B5CCFF',
                padding: '10px 12px',
                fontFamily: 'inherit',
                background: '#1A2340',
                color: '#fff',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: 20,
              }}>
                <option value="">Select</option>
                <option>Telemedicine / Virtual Consultation</option>
                <option>In-person Consultation</option>
              </select>
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>Consultation Type:
              <select name="consultation_type" required style={{
                borderRadius: 12,
                border: '1px solid #B5CCFF',
                padding: '10px 12px',
                fontFamily: 'inherit',
                background: '#1A2340',
                color: '#fff',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                backgroundSize: 20,
                marginBottom: 10,
              }}>
                <option value="">Select Consultation Type</option>
                <option>General Consultation</option>
                <option>Specialist Consultation</option>
                <option>Mental Health</option>
                <option>Maternal & Child Health</option>
                <option>Nutrition</option>
                <option>Follow-up</option>
                <option>Other</option>
              </select>
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>What would you like to discuss?
              <textarea name="reason" rows={4} required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Preferred Date:
              <input type="date" name="preferred_date" required style={{
                borderRadius: 8,
                border: '1px solid #B5CCFF',
                padding: '10px 12px',
                fontFamily: 'inherit',
                background: '#1A2340',
                color: '#fff',
                colorScheme: 'light',
              }} />
            </label>
            <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Preferred Time:
              <input type="time" name="preferred_time" required style={{
                borderRadius: 8,
                border: '1px solid #B5CCFF',
                padding: '10px 12px',
                fontFamily: 'inherit',
                background: '#1A2340',
                color: '#fff',
                colorScheme: 'light',
              }} />
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '18px 0 8px 0' }}>
              <label style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, lineHeight: 1.4 }}>
                <input type="checkbox" required style={{ width: 20, height: 20, accentColor: '#1D32F2', marginRight: 6 }} />
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>I confirm that the information provided is accurate.</span>
              </label>
              <label style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, lineHeight: 1.4 }}>
                <input type="checkbox" required style={{ width: 20, height: 20, accentColor: '#1D32F2', marginRight: 6 }} />
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>I agree to the privacy policy and consent to consultation.</span>
              </label>
            </div>
            <button type="submit" style={{ background: 'linear-gradient(90deg, #0B0F39 0%, #1D32F2 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.75rem', fontSize: 18, fontWeight: 600, cursor: 'pointer', marginTop: 8, fontFamily: 'Comfortaa, cursive', boxShadow: '0 2px 8px 0 rgba(13,19,57,0.15)' }}>
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>, document.body
  );
};
