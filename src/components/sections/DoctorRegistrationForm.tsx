import React, { useRef } from "react";
import { countries } from "../ui/countries";

interface DoctorRegistrationFormProps {
  onSuccess: () => void;
  submitting: boolean;
  setSubmitting: (v: boolean) => void;
  onBack: () => void;
}

const DoctorRegistrationForm: React.FC<DoctorRegistrationFormProps> = ({ onSuccess, submitting, setSubmitting, onBack }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = formRef.current;
        if (!form) return;
        const data = new FormData(form);
        try {
          const res = await fetch('https://formspree.io/f/xjgbypoo?email=admin@innohealth.tech', {
            method: 'POST',
            body: data,
            headers: {
              Accept: 'application/json',
            },
          });
          if (res.ok) {
            onSuccess();
          } else {
            alert('There was an error submitting the form. Please try again.');
          }
        } catch {
          alert('There was an error submitting the form. Please try again.');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <h2 className="mobile-form-title" style={{ color: '#00E5CC', textAlign: 'center', fontFamily: 'Comfortaa, cursive', fontWeight: 700, fontSize: 28, marginBottom: 18 }}>Doctor Registration</h2>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Full Name:
        <input type="text" name="doctor_full_name" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
      </label>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Email Address:
        <input type="email" name="doctor_email" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
      </label>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Phone Number:
        <input type="tel" name="doctor_phone" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
      </label>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Specialty:
        <input type="text" name="specialty" required placeholder="e.g. General Practitioner, Cardiologist" style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
      </label>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Years of Experience:
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button type="button" aria-label="Decrease experience" onClick={() => {
            const input = document.getElementById('doctor-experience-input') as HTMLInputElement;
            if (input) input.stepDown();
          }} style={{ background: '#1A2340', color: '#fff', border: 'none', borderRadius: 6, width: 32, height: 32, fontSize: 20, fontWeight: 700, cursor: 'pointer' }}>-</button>
          <input id="doctor-experience-input" type="number" name="experience" min={0} max={80} required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit', width: 80, textAlign: 'center' }} />
          <button type="button" aria-label="Increase experience" onClick={() => {
            const input = document.getElementById('doctor-experience-input') as HTMLInputElement;
            if (input) input.stepUp();
          }} style={{ background: '#1A2340', color: '#fff', border: 'none', borderRadius: 6, width: 32, height: 32, fontSize: 20, fontWeight: 700, cursor: 'pointer' }}>+</button>
        </div>
      </label>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Country:
        <select name="doctor_country" required style={{
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
      {/* Location Field */}
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-white mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }}
          placeholder="Enter your location"
          autoComplete="off"
        />
      </div>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Medical Registration Number:
        <input type="text" name="registration_number" required style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
      </label>
      <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 10 }}>Short Bio:
        <textarea name="doctor_bio" rows={3} required placeholder="Tell us about your experience, areas of expertise, etc." style={{ borderRadius: 8, border: '1px solid #B5CCFF', padding: '10px 12px', fontFamily: 'inherit' }} />
      </label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '18px 0 8px 0' }}>
        <label style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, lineHeight: 1.4 }}>
          <input type="checkbox" required style={{ width: 20, height: 20, accentColor: '#1D32F2', marginRight: 6 }} />
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>I confirm that the information provided is accurate.</span>
        </label>
        <label style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, lineHeight: 1.4 }}>
          <input type="checkbox" required style={{ width: 20, height: 20, accentColor: '#1D32F2', marginRight: 6 }} />
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>I agree to the privacy policy and consent to be contacted by InnoHealth.</span>
        </label>
      </div>
      <button type="submit" disabled={submitting} style={{ background: 'linear-gradient(90deg, #00E5CC 0%, #1D32F2 100%)', color: '#0B0F39', border: 'none', borderRadius: 8, padding: '0.75rem', fontSize: 18, fontWeight: 600, cursor: 'pointer', marginTop: 8, fontFamily: 'Comfortaa, cursive', boxShadow: '0 2px 8px 0 rgba(13,19,57,0.15)' }}>
        {submitting ? 'Submitting...' : 'Register as Doctor'}
      </button>
      <button type="button" onClick={onBack} style={{ background: '#1A2340', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.5rem', fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'Comfortaa, cursive', marginTop: 8 }}>
        Back
      </button>
    </form>
  );
};

export default DoctorRegistrationForm;
